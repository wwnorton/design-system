import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import {
	FieldInfo, FieldInfoCoreProps,
	FieldFeedback, FieldFeedbackCoreProps,
} from '../Field';
import { Choice, ChoiceProps } from './Choice';
import { prefix } from '../../utilities';

export interface ChoiceFieldProps
	extends FieldInfoCoreProps, FieldFeedbackCoreProps, React.HTMLAttributes<HTMLFieldSetElement> {
	label: React.ReactNode;
	multiple?: boolean;
	name?: string;
	baseName?: string;
	choiceClass?: string;
	required?: boolean;
	/** Indicates that the indicator should be "required" when `required=true`. */
	requiredIndicator?: boolean;
	/** Indicates that the indicator should be "optional" when `required=false`. */
	optionalIndicator?: boolean;
}

type ChoiceFieldInterface =
React.ForwardRefExoticComponent<ChoiceFieldProps & React.RefAttributes<HTMLFieldSetElement>> & {
	Choice: typeof Choice;
}

export const ChoiceField = React.forwardRef<HTMLFieldSetElement, ChoiceFieldProps>(({
	// options
	multiple,
	required,
	optionalIndicator,
	requiredIndicator,
	name,

	// anatomy
	label,
	children: childrenProp,
	description,
	errors: errorsProp,

	// classes
	baseName = prefix('field'),
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
}: ChoiceFieldProps, ref) => {
	const [errors, setErrors] = React.useState(errorsProp);

	const type = React.useMemo(() => {
		if (multiple) return 'checkbox';
		return 'radio';
	}, [multiple]);

	// treat prop versions of errors and value as source of truth
	React.useEffect(() => setErrors(errorsProp), [errorsProp]);

	// ids stored as refs since they shouldn't change between renders
	const { current: id } = React.useRef(idProp || uniqueId(`${baseName}-`));
	const { current: labelId } = React.useRef(labelIdProp || `${id}-label`);
	const { current: descId } = React.useRef(descIdProp || `${id}-desc`);
	const { current: errId } = React.useRef(errIdProp || `${id}-err`);

	const indicator = React.useMemo(() => {
		if (requiredIndicator && required) return 'required';
		if (optionalIndicator && !required) return 'optional';
		return null;
	}, [requiredIndicator, optionalIndicator, required]);

	const childMap = React.useCallback((
		children: React.ReactNode,
	): React.ReactNode => {
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
			return <Choice {...props} value={value} />;
		});
	}, [name, type, id, multiple]);

	const ChoiceElements = React.useMemo(() => childMap(childrenProp), [childrenProp, childMap]);

	return (
		<fieldset ref={ref} className={className} onChange={onChange} {...fieldsetProps}>
			<FieldInfo
				label={label}
				labelClass={labelClass}
				labelId={labelId}
				labelIs="legend"
				description={description}
				descriptionClass={descriptionClass}
				descriptionId={descId}
				indicator={indicator}
			/>
			{ ChoiceElements }
			<FieldFeedback errors={errors} errorsId={errId} errorsClass={errorsClass} />
		</fieldset>
	);
}) as ChoiceFieldInterface;

ChoiceField.Choice = Choice;

export * from './Choice';
