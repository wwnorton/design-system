import React from 'react';
import classNames from 'classnames';
import { BaseInput } from '../BaseInput';
import { Icon } from '../Icon';
import { FieldInfo, FieldFeedback } from '../Field';
import { useForwardedRef, useId, useIsomorphicLayoutEffect } from '../../utilities';
import { ChoiceProps } from './types';

/**
 * A choice can either allow for multiple simultaneous choices (`type="checkbox"`)
 * or an a single choice (`type="radio"`). You can also use the `Checkbox` or
 * `Radio` components directly, as they wrap this component.
 */
export const Choice = React.forwardRef<HTMLInputElement, ChoiceProps>(
	(
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
			baseName = 'nds-field',
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
		}: ChoiceProps,
		ref,
	) => {
		const [input, setInput] = useForwardedRef(ref);
		const [checked, setChecked] = React.useState(checkedProp);
		const [indeterminate, setIndeterminate] = React.useState(indeterminateProp);
		const [errors, setErrors] = React.useState(errorsProp);

		const uniqueId = useId();
		const inputId = idProp || uniqueId;
		const labelId = labelIdProp || `${inputId}-label`;
		const descId = descIdProp || `${inputId}-desc`;
		const errorsId = errorsIdProp || `${inputId}-err`;

		// treat prop versions of internal state as source of truth
		React.useEffect(() => setErrors(errorsProp), [errorsProp]);
		useIsomorphicLayoutEffect(() => setChecked(checkedProp), [checkedProp]);
		React.useEffect(() => setIndeterminate(indeterminateProp), [indeterminateProp]);

		const indicator = React.useMemo(() => {
			if (requiredIndicator && required) return 'required';
			if (optionalIndicator && !required) return 'optional';
			return null;
		}, [requiredIndicator, optionalIndicator, required]);

		const Control = React.useMemo(
			() => (
				<label className={controlClass} htmlFor={inputId} aria-hidden="true">
					{type === 'checkbox' && (
						<Icon variant={indeterminate ? 'minus' : 'check'} stroke="currentColor" />
					)}
				</label>
			),
			[controlClass, indeterminate, inputId, type],
		);

		const Thumbnail = React.useMemo(() => {
			if (!thumbnail) return null;
			return (
				<label className={thumbnailClass} htmlFor={inputId}>
					{thumbnail}
				</label>
			);
		}, [inputId, thumbnail, thumbnailClass]);

		const Feedback = React.useMemo(() => {
			if (type !== 'checkbox' || !errors || errors.length === 0) return null;
			return <FieldFeedback errors={errors} errorsClass={errorsClass} errorsId={errorsId} />;
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
					aria-describedby={description ? descId : undefined}
					aria-invalid={!isValid}
					aria-errormessage={!isValid ? errorsId : undefined}
					onChange={changeHandler}
					onDOMChange={onDOMChange}
					onValidate={validateHandler}
					required={required}
					value={value}
					{...inputProps}
				/>
				{Control}
				{Thumbnail}
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
					{Feedback}
				</FieldInfo>
			</div>
		);
	},
);
