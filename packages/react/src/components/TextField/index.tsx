import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import {
	FieldInfo, FieldInfoCoreProps,
	FieldFeedback, FieldFeedbackCoreProps,
	FieldAddon,
} from '../Field';
import { BaseInput, BaseInputProps } from '../BaseInput';
import { prefix } from '../../config';

export type TextFieldType = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';

export interface TextFieldProps
	extends FieldInfoCoreProps, FieldFeedbackCoreProps, BaseInputProps {
	/** Text fields can be a limited subset of `<input>` types. */
	type?: TextFieldType;
	/** One or more addon that should be included before the `<input>`. */
	addonBefore?: React.ReactNode;
	/** One or more addon that should be included after the `<input>`. */
	addonAfter?: React.ReactNode;
	/**
	 * Feedback about the user's current input value. By default, this will
	 * contain validation errors and the counter, if `maxLength` is specified.
	 */
	feedback?: string | React.ReactElement;
	/** When the character counter should begin showing. */
	counterStart?: number;
	/**
	 * A function that takes the remaining number of characters and the maximum
	 * number of characters and returns the string or element that will be
	 * rendered in the character counter slot.
	 */
	counter?: false | (({ remaining, max }: {
		remaining: number;
		max: number;
	}) => React.ReactNode);
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** The className for the TextField's `<input>` element. */
	inputClass?: string;
	/** The className for all of the addons (before and after). */
	addonClass?: string;
	/** The className for the wrapper that contains the `<input>` & addons. */
	groupClass?: string;
	/**
	 * The className for the TextField's feedback section, which contains the
	 * error text and character count.
	 */
	feedbackClass?: string;
	/** The className for the TextField's character counter element. */
	counterClass?: string;
	/**
	 * A className that will be applied to the base element when the `<input>`
	 * is invalid.
	 */
	invalidClass?: string;
	/** A reference to the internal `<input>` element. */
	inputRef?: React.Ref<HTMLInputElement>;
	/** Indicates that the indicator should be "required" when `required=true`. */
	requiredIndicator?: boolean;
	/** Indicates that the indicator should be "optional" when `required=false`. */
	optionalIndicator?: boolean;
	/** Triggered any time the number of characters remaining is updated. */
	onCount?: (remaining?: number) => void;
}

const defaultProps: Partial<TextFieldProps> = {
	counterStart: 25,
	counter: ({ remaining, max }) => {
		if (remaining < 0) return null;
		return `${remaining}/${max} characters remaining`;
	},
	type: 'text',
};

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((
	{
		// options
		counterStart = defaultProps.counterStart,
		validators,
		validateOnChange,
		validateOnDOMChange,
		requiredIndicator,
		optionalIndicator,

		// anatomy
		children,
		description,
		addonBefore,
		addonAfter,
		feedback,
		errors: errorsProp,
		counter = defaultProps.counter,

		// classes
		baseName = prefix('field'),
		className = classNames(baseName, `${baseName}--text`),
		labelClass,
		descriptionClass,
		groupClass = classNames(`${baseName}__group`, `${baseName}__group--text`),
		inputClass = classNames(`${baseName}__input`, `${baseName}__input--text`),
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
	}: TextFieldProps, ref,
) => {
	const [errors, setErrors] = React.useState(errorsProp);

	// ids stored as refs since they shouldn't change between renders
	const id = React.useRef(idProp || uniqueId(`${baseName}-`));
	const labelId = React.useRef(labelIdProp || `${id}-label`);
	const descId = React.useRef(descIdProp || `${id}-desc`);
	const errId = React.useRef(errIdProp || `${id}-err`);
	const inputId = React.useRef(`${id}-input`);

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

	const changeHandler: React.InputHTMLAttributes<HTMLInputElement>['onChange'] = (e) => {
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
			<div className={groupClass}>
				{ createFieldAddons(addonBefore) }
				<BaseInput
					ref={ref}
					value={value}
					errors={errors}
					onChange={changeHandler}
					onDOMChange={onDOMChange}
					onValidate={validateHandler}
					id={inputId.current}
					className={inputClass}
					aria-describedby={(description) ? descId.current : undefined}
					aria-invalid={!isValid}
					aria-errormessage={(!isValid) ? errId.current : undefined}
					// validation props
					maxLength={maxLength}
					required={required}
					type={type}
					// BaseInput custom validation props
					validators={validators}
					validateOnChange={validateOnChange}
					validateOnDOMChange={validateOnDOMChange}
					{...inputProps}
				/>
				{ createFieldAddons(addonAfter) }
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
			onChange={(e) => {
				setValue(e.target.value);
				const { onChange } = props;
				if (onChange) onChange(e);
			}}
			{...props}
		/>
	);
};
