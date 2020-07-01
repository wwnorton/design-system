import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { FieldInfo } from '../FieldInfo';
import { FieldAddon } from '../FieldAddon';
import { FieldFeedback } from '../FieldFeedback';
import { BaseInput, BaseInputProps } from '../BaseInput';

export type TextFieldContent = 'label' | 'help' | 'input' | 'feedback' | 'error' | 'counter';
export type TextFieldType = 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';

interface TextInputCounterProps {
	remaining: number;
	max: number;
}

export interface TextFieldProps extends BaseInputProps {
	/** Text fields can be a limited subset of `<input>` types. */
	type?: TextFieldType;
	/** The label for the text field. The only required prop. */
	label: string;
	/** One or more addon that should be included before the `<input>`. */
	addonBefore?: React.ReactNode;
	/** One or more addon that should be included after the `<input>`. */
	addonAfter?: React.ReactNode;
	/**
	 * Additional descriptive help text for the text field. Use this for to give
	 * the user more context about what to enter, such as field templating or
	 * what might normally go in the `placeholder`.
	 */
	help?: string | React.ReactElement;
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
	/** The className for the TextField's `<label>` element. */
	labelClass?: string;
	/** The className for the TextField's help container. */
	helpClass?: string;
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
	/** The className for the TextField's error container. */
	errorClass?: string;
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
	): string => `${remaining}/${max} characters remaining.`,
	baseName: 'field',
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
		help,
		addonBefore,
		addonAfter,
		feedback,
		errors: errorsProp,
		counter = defaultProps.counter,

		// classes
		className,
		baseName = defaultProps.baseName,
		labelClass,
		helpClass,
		groupClass = `${baseName}__group`,
		inputClass = `${baseName}__input`,
		addonClass = `${baseName}__addon`,
		feedbackClass,
		errorClass,
		counterClass = `${baseName}__counter`,
		invalidClass = `${baseName}--invalid`,

		// <input> attributes
		max,
		maxLength,
		min,
		minLength,
		pattern,
		required,
		step,
		type = defaultProps.type,
		value: valueProp = '',
		id: idProp,

		// <input> callbacks
		onClick,
		onKeyDown,
		onKeyUp,
		onKeyPress,
		onDOMChange,
		onChange,

		// custom callbacks
		onCount,
		onValidate,
	}: TextFieldProps, ref,
) => {
	const [value, setValue] = React.useState(valueProp);
	const [errors, setErrors] = React.useState(errorsProp);
	const [remaining, setRemaining] = React.useState(maxLength);

	// treat prop versions of errors and value as source of truth
	React.useEffect(() => setErrors(errorsProp), [errorsProp]);
	React.useEffect(() => setValue(valueProp), [valueProp]);

	// ids
	const { current: id } = React.useRef(idProp || uniqueId(`${baseName}-`));
	const labelId = `${id}-label`;
	const helpId = `${id}-help`;
	const inputId = `${id}-input`;
	const errId = `${id}-err`;

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
		<div className={classNames(className, baseName, `${baseName}--text`, { [invalidClass]: !isValid })} id={id}>
			<FieldInfo
				htmlFor={inputId}
				label={label}
				indicator={indicator}
				labelId={labelId}
				labelClass={labelClass}
				descriptionClass={helpClass}
				descriptionId={helpId}
			>
				{ help }
			</FieldInfo>
			<div className={groupClass}>
				{ createFieldAddons(addonBefore) }
				<BaseInput
					ref={ref}
					value={value}
					errors={errors}
					onChange={changeHandler}
					onClick={onClick}
					onDOMChange={onDOMChange}
					onKeyDown={onKeyDown}
					onKeyPress={onKeyPress}
					onKeyUp={onKeyUp}
					onValidate={validateHandler}
					id={inputId}
					className={inputClass}
					aria-describedby={(help) ? helpId : undefined}
					aria-invalid={!isValid}
					aria-errormessage={(!isValid) ? errId : undefined}
					// validation props
					max={max}
					maxLength={maxLength}
					min={min}
					minLength={minLength}
					pattern={pattern}
					required={required}
					step={step}
					type={type}
					// BaseInput custom validation props
					validators={validators}
					validateOnChange={validateOnChange}
					validateOnDOMChange={validateOnDOMChange}
				/>
				{ createFieldAddons(addonAfter) }
			</div>
			<FieldFeedback
				className={feedbackClass}
				errorId={errId}
				errors={errors}
				errorClass={errorClass}
			>
				{ feedback }
				{ Counter }
			</FieldFeedback>
		</div>
	);
});
