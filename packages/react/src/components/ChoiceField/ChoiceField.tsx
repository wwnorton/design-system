import React from 'react';
import classNames from 'classnames';
import { FieldInfo, FieldFeedback } from '../Field';
import { Choice } from './Choice';
import { Choices } from './Choices';
import { ChoiceFieldProps, ChoiceProps, ChoicesProps } from './types';
import { useId } from '../../utilities';

type ChoiceFieldInterface = React.ForwardRefExoticComponent<
	ChoiceFieldProps & React.RefAttributes<HTMLFieldSetElement>
> & {
	Choice: typeof Choice;
	Choices: typeof Choices;
};

export const ChoiceField = React.forwardRef<HTMLFieldSetElement, ChoiceFieldProps>(
	(
		{
			// options
			multiple,
			required,
			optionalIndicator,
			requiredIndicator,
			name,
			fieldName,

			// anatomy
			label,
			children: childrenProp,
			description,
			errors: errorsProp,

			// classes
			baseName = 'nds-field',
			className = classNames(baseName, `${baseName}--choice`),
			labelClass,
			descriptionClass,
			errorsClass,

			// ids
			id: idProp,
			labelId: labelIdProp,
			descriptionId: descIdProp,
			errorsId: errIdProp,

			// event callbacks
			onChange,

			...fieldsetProps
		}: ChoiceFieldProps,
		ref,
	) => {
		const [errors, setErrors] = React.useState(errorsProp);

		const type = React.useMemo(() => {
			if (multiple) return 'checkbox';
			return 'radio';
		}, [multiple]);

		// treat prop versions of errors and value as source of truth
		React.useEffect(() => setErrors(errorsProp), [errorsProp]);

		const uniqueId = useId();
		const id = idProp || uniqueId;
		const labelId = labelIdProp || `${id}-label`;
		const descId = descIdProp || `${id}-desc`;
		const errId = errIdProp || `${id}-err`;

		const indicator = React.useMemo(() => {
			if (requiredIndicator && required) return 'required';
			if (optionalIndicator && !required) return 'optional';
			return null;
		}, [requiredIndicator, optionalIndicator, required]);

		const childMap = React.useCallback(
			(children: React.ReactNode): React.ReactNode => {
				// if it's a `<Choices>` element, use it with our `multiple`
				if (React.isValidElement<ChoicesProps>(children)) {
					return React.cloneElement(children, { multiple });
				}

				// coerce into a list of `<Choice>` elements
				return React.Children.map(children, (child) => {
					if (Array.isArray(child)) return childMap(child);
					const baseProps: ChoiceProps = { name: name || id, type };
					let value: React.ReactText;
					let props: ChoiceProps;
					if (typeof child === 'string' || typeof child === 'number') {
						value = child;
						props = { ...baseProps, children: child };
					} else if (React.isValidElement<ChoiceProps>(child)) {
						value = (child.props.value || child.props.children || '').toString();
						props = { ...child.props, ...baseProps };
					} else {
						throw new Error('invalid children');
					}
					return <Choice key={value} {...props} value={value} />;
				});
			},
			[multiple, name, id, type],
		);

		const ChoiceElements = React.useMemo(() => childMap(childrenProp), [childrenProp, childMap]);

		return (
			<fieldset
				ref={ref}
				className={className}
				id={idProp}
				name={fieldName}
				onChange={onChange}
				{...fieldsetProps}
			>
				<FieldInfo
					label={label}
					labelClass={labelClass}
					labelId={labelId}
					labelTag="legend"
					description={description}
					descriptionClass={descriptionClass}
					descriptionId={descId}
					indicator={indicator}
				/>
				{ChoiceElements}
				<FieldFeedback errors={errors} errorsId={errId} errorsClass={errorsClass} />
			</fieldset>
		);
	},
) as ChoiceFieldInterface;

ChoiceField.Choice = Choice;
ChoiceField.Choices = Choices;
