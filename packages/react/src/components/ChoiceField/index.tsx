import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import {
	FieldInfo, FieldInfoCoreProps,
	FieldFeedback, FieldFeedbackCoreProps,
} from '../Field';
import { Choice, ChoiceProps } from './Choice';
import { Choices, ChoicesProps } from './Choices';
import { useId } from '../../utilities';

export interface ChoiceFieldProps
	extends FieldInfoCoreProps, FieldFeedbackCoreProps, React.HTMLAttributes<HTMLFieldSetElement> {
	/**
	 * Text that conveys how the choices are related and prompts the user to choose
	 * one or more choice.
	 */
	label: React.ReactNode;
	/** Whether the field is multi-select or single-select. */
	multiple?: boolean;
	/** The name that will be assigned to all child `<input>` elements. */
	name?: string;
	/** The name that will be assigned to the parent `<fieldset>`. */
	fieldName?: string;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** The class name that will be used on all Choice elements.  */
	choiceClass?: string;
	/** Indicates whether a selection must be made or not. */
	required?: boolean;
	/** Indicates that the indicator should be "required" when `required=true`. */
	requiredIndicator?: boolean;
	/** Indicates that the indicator should be "optional" when `required=false`. */
	optionalIndicator?: boolean;
}

type ChoiceFieldInterface =
React.ForwardRefExoticComponent<ChoiceFieldProps & React.RefAttributes<HTMLFieldSetElement>> & {
	Choice: typeof Choice;
	Choices: typeof Choices;
};

export const ChoiceField = React.forwardRef<HTMLFieldSetElement, ChoiceFieldProps>(({
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
}: ChoiceFieldProps, ref) => {
	const [errors, setErrors] = React.useState(errorsProp);

	const type = React.useMemo(() => {
		if (multiple) return 'checkbox';
		return 'radio';
	}, [multiple]);

	// treat prop versions of errors and value as source of truth
	React.useEffect(() => setErrors(errorsProp), [errorsProp]);

	// ids stored as refs since they shouldn't change between renders
	const uuid = useId();
	const id = React.useRef(idProp || `${baseName}-${uuid}` || uniqueId(`${baseName}-`));
	const labelId = React.useRef(labelIdProp || `${id.current}-label`);
	const descId = React.useRef(descIdProp || `${id.current}-desc`);
	const errId = React.useRef(errIdProp || `${id.current}-err`);

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
			const baseProps: ChoiceProps = { name: name || id.current, type };
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
	}, [name, type, multiple]);

	const ChoiceElements = React.useMemo(() => childMap(childrenProp), [childrenProp, childMap]);

	return (
		<fieldset
			ref={ref}
			className={className}
			name={fieldName}
			onChange={onChange}
			{...fieldsetProps}
		>
			<FieldInfo
				label={label}
				labelClass={labelClass}
				labelId={labelId.current}
				labelTag="legend"
				description={description}
				descriptionClass={descriptionClass}
				descriptionId={descId.current}
				indicator={indicator}
			/>
			{ ChoiceElements }
			<FieldFeedback
				errors={errors}
				errorsId={errId.current}
				errorsClass={errorsClass}
			/>
		</fieldset>
	);
}) as ChoiceFieldInterface;

ChoiceField.Choice = Choice;
ChoiceField.Choices = Choices;

export * from './Choice';
export * from './Choices';
