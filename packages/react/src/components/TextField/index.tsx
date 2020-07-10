import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import {
	FieldInfo, FieldInfoCoreProps,
	FieldFeedback, FieldFeedbackCoreProps,
	FieldAddon,
} from '../Field';
import { BaseInput, BaseInputProps } from '../BaseInput';
import { prefix } from '../../utilities';

export type TextFieldType = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';

interface TextInputCounterProps {
	remaining: number;
	max: number;
}

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
	counter?: ({ remaining, max }: TextInputCounterProps) => React.ReactElement | string;
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
	counter: (
		{ remaining, max }: TextInputCounterProps,
	): string => `${remaining}/${max} characters remaining`,
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
		label,
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
		value: valueProp = '',

		// event callbacks
		onChange,
		onCount,
		onDOMChange,
		onValidate,

		// everything else
		...inputProps
	}: TextFieldProps, ref,
) => {
	const [value, setValue] = React.useState(valueProp);
	const [errors, setErrors] = React.useState(errorsProp);
	const [remaining, setRemaining] = React.useState(maxLength);

	// treat prop versions of errors and value as source of truth
	React.useEffect(() => setErrors(errorsProp), [errorsProp]);
	React.useEffect(() => setValue(valueProp), [valueProp]);

	// ids stored as refs since they shouldn't change between renders
	const { current: id } = React.useRef(idProp || uniqueId(`${baseName}-`));
	const { current: labelId } = React.useRef(labelIdProp || `${id}-label`);
	const { current: descId } = React.useRef(descIdProp || `${id}-desc`);
	const { current: errId } = React.useRef(errIdProp || `${id}-err`);
	const { current: inputId } = React.useRef(`${id}-input`);

	React.useEffect(() => {
		if (maxLength) {
			setRemaining(maxLength - value.toString().length);
		}
	}, [value, maxLength]);

	React.useEffect(() => {
		if (onCount) onCount(remaining);
	}, [onCount, remaining]);

	const isValid = React.useMemo(() => Boolean(!errors || errors.length === 0), [errors]);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (onChange) onChange(e);
		setValue(e.currentTarget.value);
	};

	const validateHandler = (e: string[]): void => {
		if (onValidate) onValidate(e);
		setErrors(e);
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
		<div className={classNames(className, { [invalidClass]: !isValid })} id={id}>
			<FieldInfo
				htmlFor={inputId}
				label={label}
				indicator={indicator}
				labelId={labelId}
				labelClass={labelClass}
				descriptionClass={descriptionClass}
				descriptionId={descId}
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
					id={inputId}
					className={inputClass}
					aria-describedby={(description) ? descId : undefined}
					aria-invalid={!isValid}
					aria-errormessage={(!isValid) ? errId : undefined}
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
				errorsId={errId}
				errors={errors}
				errorsClass={errorsClass}
			>
				{ feedback }
				{ Counter }
			</FieldFeedback>
		</div>
	);
});
