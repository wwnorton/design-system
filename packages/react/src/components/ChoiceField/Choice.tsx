import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { BaseInput, BaseInputProps } from '../BaseInput';
import { Icon } from '../Icon';
import {
	FieldInfo, FieldInfoCoreProps,
	FieldFeedback, FieldFeedbackCoreProps,
} from '../Field';
import { prefix, useForwardedRef } from '../../utilities';

export interface ChoiceProps extends
	Omit<FieldInfoCoreProps, 'label'>,
	FieldFeedbackCoreProps,
	Omit<BaseInputProps, 'type'> {
	type?: 'checkbox' | 'radio';
	/**
	 * Mark the checkbox as indeterminate. Has no effect when `type="radio"`.
	 * @DOM https://html.spec.whatwg.org/multipage/input.html#dom-input-indeterminate
	 * @MDN https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes
	 */
	indeterminate?: boolean;
	/** Indicates that the indicator should be "required" when `required=true`. */
	requiredIndicator?: boolean;
	/** Indicates that the indicator should be "optional" when `required=false`. */
	optionalIndicator?: boolean;
	/** The thumbnail element. */
	thumbnail?: React.ReactNode;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** The className for the control that sighted users will see. */
	controlClass?: string;
	/** The className for the Checkbox's `<input>` element. */
	inputClass?: string;
	/** The className for the Checkbox's thumbnail element. */
	thumbnailClass?: string;
	/**
	 * A className that will be applied to the root of the component when it is
	 * checked.
	 */
	checkedClass?: string;
}

/**
 * A choice can either allow for multiple simultaneous choices (`type="checkbox"`)
 * or an a single choice (`type="radio"`). You can also use the `Checkbox` or
 * `Radio` components directly, as they wrap this component.
 */
export const Choice = React.forwardRef<HTMLInputElement, ChoiceProps>((
	{
		// options
		type = 'radio',
		checked: checkedProp = false,
		indeterminate: indeterminateProp,
		optionalIndicator,
		requiredIndicator,
		validators,

		// anatomy
		description,
		thumbnail,
		errors: errorsProp,
		children,

		// classes
		baseName = prefix('field'),
		className = classNames(`${baseName}__group`, `${baseName}__group--choice`),
		controlClass = classNames(`${baseName}__control`, `${baseName}__control--${type}`),
		descriptionClass,
		inputClass = classNames(`${baseName}__input`, `${baseName}__input--${type}`),
		thumbnailClass = `${baseName}__thumbnail`,
		checkedClass = `${baseName}--checked`,
		labelClass,
		errorsClass,

		// ids
		id: idProp,
		labelId: labelIdProp,
		descriptionId: descIdProp,
		errorsId: errorsIdProp,

		// <input> props
		required,
		value,

		// event callbacks
		onChange,
		onDOMChange,
		onValidate,

		// everything else
		...inputProps
	}: ChoiceProps, ref,
) => {
	const [input, setInput] = useForwardedRef(ref);
	const [checked, setChecked] = React.useState(checkedProp);
	const [indeterminate, setIndeterminate] = React.useState(indeterminateProp);
	const [errors, setErrors] = React.useState(errorsProp);

	// ids stored as refs since they shouldn't change between renders
	const { current: id } = React.useRef(idProp || uniqueId(`${baseName}-`));
	const { current: labelId } = React.useRef(labelIdProp || `${id}-label`);
	const { current: descId } = React.useRef(descIdProp || `${id}-desc`);
	const { current: errorsId } = React.useRef(errorsIdProp || `${id}-err`);
	const { current: inputId } = React.useRef(`${id}-input`);

	// treat prop versions of internal state as source of truth
	React.useEffect(() => setErrors(errorsProp), [errorsProp]);
	React.useEffect(() => setChecked(checkedProp), [checkedProp]);
	React.useEffect(() => setIndeterminate(indeterminateProp), [indeterminateProp]);

	const indicator = React.useMemo(() => {
		if (requiredIndicator && required) return 'required';
		if (optionalIndicator && !required) return 'optional';
		return null;
	}, [requiredIndicator, optionalIndicator, required]);

	const Control = React.useMemo(() => (
		// This control is purely a visual affordance. A11y is managed by the `input` element.
		// eslint-disable-next-line jsx-a11y/label-has-associated-control
		<label className={controlClass} htmlFor={inputId} aria-hidden="true">
			{ type === 'checkbox' && (
				<Icon
					variant={(indeterminate) ? 'minus' : 'check'}
					stroke="currentColor"
				/>
			)}
		</label>
	), [controlClass, inputId, indeterminate, type]);

	const Thumbnail = React.useMemo(() => {
		if (!thumbnail) return null;
		return (
			<label className={thumbnailClass} htmlFor={inputId}>
				{ thumbnail }
			</label>
		);
	}, [thumbnail, thumbnailClass, inputId]);

	const Feedback = React.useMemo(() => {
		if (type !== 'checkbox' || !errors || errors.length === 0) return null;
		return (
			<FieldFeedback
				errors={errors}
				errorsClass={errorsClass}
				errorsId={errorsId}
			/>
		);
	}, [type, errors, errorsClass, errorsId]);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (onChange) onChange(e);
		else {
			setChecked(e.currentTarget.checked);
			setIndeterminate(false);
		}
	};

	const validateHandler = (e: string[]): void => {
		if (onValidate) onValidate(e);
		if (!errorsProp) setErrors(e);
	};

	const isValid = React.useMemo(() => Boolean(!errors || errors.length === 0), [errors]);

	React.useEffect(() => {
		if (input && type === 'checkbox' && indeterminate !== undefined) {
			input.indeterminate = indeterminate;
		}
	}, [input, type, indeterminate]);

	return (
		<div className={classNames(className, { [checkedClass]: checked })}>
			<BaseInput
				type={type}
				checked={checked}
				ref={setInput}
				id={inputId}
				className={inputClass}
				errors={errors}
				validators={validators}

				aria-labelledby={labelId}
				aria-describedby={(description) ? descId : undefined}
				aria-invalid={!isValid}
				aria-errormessage={(!isValid) ? errorsId : undefined}

				onChange={changeHandler}
				onDOMChange={onDOMChange}
				onValidate={validateHandler}

				required={required}
				value={value}
				{...inputProps}
			/>
			{ Control }
			{ Thumbnail }
			<FieldInfo
				indicator={indicator}
				htmlFor={inputId}
				label={children || value}
				labelClass={labelClass}
				labelId={labelId}
				description={description}
				descriptionClass={descriptionClass}
				descriptionId={descId}
			>
				{ Feedback }
			</FieldInfo>
		</div>
	);
});
