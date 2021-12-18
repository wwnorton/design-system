import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import { FieldInfo, FieldFeedback, FieldAddon } from '../Field';
import { BaseInput } from '../BaseInput';
import { BaseTextArea } from '../BaseTextArea';
import { TextFieldProps } from './types';

const defaultProps: Partial<TextFieldProps> = {
	counterStart: 25,
	counter: ({ remaining, max }) => {
		if (remaining < 0) return null;
		return `${remaining}/${max} characters remaining`;
	},
	type: 'text',
};

export const TextField = React.forwardRef<HTMLInputElement & HTMLTextAreaElement, TextFieldProps>(({
	// options
	counterStart = defaultProps.counterStart,
	validators,
	validateOnChange,
	validateOnDOMChange,
	requiredIndicator,
	optionalIndicator,
	multiline = false,
	autoSize = false,

	// anatomy
	children,
	description,
	addonBefore,
	addonAfter,
	feedback,
	errors: errorsProp,
	counter = defaultProps.counter,

	// classes
	baseName = 'nds-field',
	className = classNames(baseName, `${baseName}--text`),
	labelClass,
	descriptionClass,
	groupClass = classNames(`${baseName}__group${multiline ? '--textarea' : ''}`, `${baseName}__group--text`),
	inputClass = classNames(`${baseName}__${multiline ? 'textarea' : 'input'}`, `${baseName}__${multiline ? 'textarea' : 'input'}--text`),
	addonClass = `${baseName}__addon`,
	feedbackClass,
	errorsClass,
	counterClass = `${baseName}__counter`,
	invalidClass = `${baseName}--invalid`,

	// ids
	id: idProp,
	labelId: labelIdProp,
	descriptionId: descIdProp,
	errorsId: errIdProp,

	// <input> attributes
	maxLength,
	required,
	type = defaultProps.type,
	value,

	// event callbacks
	onChange,
	onCount,
	onDOMChange,
	onValidate,

	// everything else
	...inputProps
}: TextFieldProps, ref) => {
	const [errors, setErrors] = React.useState(errorsProp);

	// ids stored as refs since they shouldn't change between renders
	const id = React.useRef(idProp || uniqueId(`${baseName}-`));
	const labelId = React.useRef(labelIdProp || `${id.current}-label`);
	const descId = React.useRef(descIdProp || `${id.current}-desc`);
	const errId = React.useRef(errIdProp || `${id.current}-err`);
	const inputId = React.useRef(`${id.current}-input`);

	const getRemaining = React.useCallback((val?: typeof value) => {
		if (maxLength) {
			return maxLength - (val || '').toString().length;
		}
		return undefined;
	}, [maxLength]);
	const [remaining, setRemaining] = React.useState(getRemaining(value));
	React.useEffect(() => setRemaining(getRemaining(value)), [getRemaining, value]);

	// treat prop version of errors as source of truth
	React.useEffect(() => setErrors(errorsProp), [errorsProp]);

	React.useEffect(() => {
		if (onCount) onCount(remaining);
	}, [onCount, remaining]);

	const isValid = React.useMemo(() => Boolean(!errors || errors.length === 0), [errors]);

	const validateHandler = (e: string[]): void => {
		if (onValidate) onValidate(e);
		setErrors(e);
	};

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>
	& React.ChangeEvent<HTMLTextAreaElement>) => {
		if (onChange) onChange(e);
		else setRemaining(getRemaining(e.target.value));
	};

	const createFieldAddons = (addons: React.ReactNode): React.ReactNode[] | null | undefined => {
		if (!addons) return null;
		return React.Children.map(addons, (child) => {
			if (React.isValidElement(child)) {
				if (child.type === React.Fragment) {
					return createFieldAddons(child.props.children);
				}
			}
			return <FieldAddon className={addonClass}>{ child }</FieldAddon>;
		});
	};

	const Counter = React.useMemo(() => {
		if (!counter) return null;
		if (maxLength !== undefined && remaining !== undefined && counterStart !== undefined) {
			if (remaining <= counterStart) {
				return (
					<div className={counterClass}>
						{ counter({ remaining, max: maxLength }) }
					</div>
				);
			}
		}
		return null;
	}, [counter, counterClass, counterStart, maxLength, remaining]);

	const indicator = React.useMemo(() => {
		if (requiredIndicator && required) return 'required';
		if (optionalIndicator && !required) return 'optional';
		return null;
	}, [requiredIndicator, optionalIndicator, required]);

	const sharedProps = {
		ref,
		value,
		errors,
		onChange: changeHandler,
		onDOMChange,
		onValidate: validateHandler,
		id: inputId.current,
		className: inputClass,
		'aria-describedby': (description) ? descId.current : undefined,
		'aria-invalid': !isValid,
		'aria-errormessage': (!isValid) ? errId.current : undefined,
		// validation props
		maxLength,
		required,
		// BaseInput custom validation props
		validators,
		validateOnChange,
		validateOnDOMChange,
		...inputProps,
	};

	return (
		<div
			className={classNames(className, { [invalidClass]: !isValid })}
			id={id.current}
		>
			<FieldInfo
				htmlFor={inputId.current}
				label={children}
				indicator={indicator}
				labelId={labelId.current}
				labelClass={labelClass}
				descriptionClass={descriptionClass}
				descriptionId={descId.current}
				description={description}
			/>
			<div className={!multiline ? groupClass : ''}>
				{ (multiline)
					? (
						<BaseTextArea
							{...sharedProps}
							className={classNames(groupClass, inputClass)}
							multiline={multiline}
							autoSize={autoSize}
						/>
					)
					: (
						<>
							{ createFieldAddons(addonBefore) }
							<BaseInput {...sharedProps} type={type} />
							{ createFieldAddons(addonAfter) }
						</>
					) }
			</div>
			<FieldFeedback
				className={feedbackClass}
				errorsId={errId.current}
				errors={errors}
				errorsClass={errorsClass}
			>
				{ feedback }
				{ Counter }
			</FieldFeedback>
		</div>
	);
});

/**
 * An uncontrolled variant of the `TextField` component. The `value` prop doesn't
 * exist on this version, as it is managed internally. Use when the value does not
 * need to be controlled via React state, such as prototyping or when
 * values are submitted with native APIs like
 * [HTMLFormElement.submit()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit).
 */
export const TextFieldUncontrolled = (props: Omit<TextFieldProps, 'value'>): JSX.Element => {
	const [value, setValue] = React.useState('');
	return (
		<TextField
			value={value}
			onChange={(e: React.ChangeEvent<HTMLInputElement> &
			React.ChangeEvent<HTMLTextAreaElement>) => {
				setValue(e.target.value);
				const { onChange } = props;
				if (onChange) onChange(e);
			}}
			{...props}
		/>
	);
};
