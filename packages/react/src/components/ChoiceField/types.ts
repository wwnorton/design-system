import { FieldInfoCoreProps, FieldFeedbackCoreProps } from '../Field';
import { BaseInputProps } from '../BaseInput/types';

export interface ChoiceProps extends
	Omit<FieldInfoCoreProps, 'label'>,
	FieldFeedbackCoreProps,
	Omit<BaseInputProps, 'type'> {
	type?: 'checkbox' | 'radio';
	/**
	 * Mark the checkbox as indeterminate. Has no effect when `type="radio"`.
	 *
	 * Reference:
	 * - [DOM - `indeterminate`](https://html.spec.whatwg.org/multipage/input.html#dom-input-indeterminate)
	 * - [MDN - `indeterminate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes)
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

export interface ChoicesProps extends ChoiceProps {
	choices: (React.ReactText | ChoiceProps)[];
	selected?: React.ReactText[] | React.ReactText;
}

export interface ChoiceFieldProps
	extends FieldInfoCoreProps, FieldFeedbackCoreProps, React.ComponentPropsWithoutRef<'fieldset'> {
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
