import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { BaseInput } from '../BaseInput';
import { CheckboxProps } from '../Checkbox';
import { FieldInfo } from '../Field';
import { prefix } from '../../utilities';

export type RadioProps = Omit<CheckboxProps, 'indeterminate' | 'errorClass'>;

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>((
	{
		// options
		checked: checkedProp,
		optionalIndicator,
		requiredIndicator,
		validators,

		// anatomy
		label,
		description,
		thumbnail,
		errors: errorsProp,

		// classes
		baseName = prefix('field'),
		className = classNames(`${baseName}__group`, `${baseName}--radio`),
		controlClass = classNames(`${baseName}__control`, `${baseName}__control--radio`),
		descriptionClass,
		inputClass = classNames(`${baseName}__input`, `${baseName}__input--radio`),
		thumbnailClass = `${baseName}__thumbnail`,
		checkedClass = `${baseName}--checked`,
		labelClass,

		// ids
		id: idProp,
		labelId: labelIdProp,
		descriptionId: descIdProp,
		errorsId: errIdProp,

		// <input> props
		required,

		// event callbacks
		onChange,
		onDOMChange,
		onValidate,

		// everything else
		...inputProps
	}: RadioProps, ref,
) => {
	const [checked, setChecked] = React.useState(checkedProp);
	const [errors, setErrors] = React.useState(errorsProp);

	// ids stored as refs since they shouldn't change between renders
	const { current: id } = React.useRef(idProp || uniqueId(`${baseName}-`));
	const { current: labelId } = React.useRef(labelIdProp || `${id}-label`);
	const { current: descId } = React.useRef(descIdProp || `${id}-desc`);
	const { current: errId } = React.useRef(errIdProp || `${id}-err`);
	const { current: inputId } = React.useRef(`${id}-input`);

	// treat prop versions of internal state as source of truth
	React.useEffect(() => setErrors(errorsProp), [errorsProp]);
	React.useEffect(() => setChecked(checkedProp), [checkedProp]);

	const indicator = React.useMemo(() => {
		if (requiredIndicator && required) return 'required';
		if (optionalIndicator && !required) return 'optional';
		return null;
	}, [requiredIndicator, optionalIndicator, required]);

	const Control = React.useMemo(() => (
		// This control is purely a visual affordance. A11y is managed by the `input` element.
		// eslint-disable-next-line jsx-a11y/label-has-associated-control
		<label className={controlClass} htmlFor={inputId} aria-hidden="true" />
	), [controlClass, inputId]);

	const Thumbnail = React.useMemo(() => {
		if (!thumbnail) return null;
		return (
			<label className={thumbnailClass} htmlFor={inputId}>
				{ thumbnail }
			</label>
		);
	}, [thumbnail, thumbnailClass, inputId]);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (onChange) onChange(e);
		setChecked(e.currentTarget.checked);
	};

	const validateHandler = (e: string[]): void => {
		if (onValidate) onValidate(e);
		setErrors(e);
	};

	const isValid = React.useMemo(() => Boolean(!errors || errors.length === 0), [errors]);

	return (
		<div className={classNames(className, { [checkedClass]: checked })}>
			<BaseInput
				type="radio"
				checked={checked}
				ref={ref}
				id={inputId}
				className={inputClass}
				errors={errors}
				validators={validators}

				aria-labelledby={labelId}
				aria-describedby={(description) ? descId : undefined}
				aria-invalid={!isValid}
				aria-errormessage={(!isValid) ? errId : undefined}

				onChange={changeHandler}
				onDOMChange={onDOMChange}
				onValidate={validateHandler}

				required={required}
				{...inputProps}
			/>
			{ Control }
			{ Thumbnail }
			<FieldInfo
				indicator={indicator}
				htmlFor={inputId}
				label={label}
				labelClass={labelClass}
				labelId={labelId}
				description={description}
				descriptionClass={descriptionClass}
				descriptionId={descId}
			/>
		</div>
	);
});
