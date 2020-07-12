import React from 'react';
import {
	Choice, ChoiceProps,
	ChoiceField, ChoiceFieldProps,
} from '../ChoiceField';


// Single Checkbox

export type CheckboxProps = Omit<ChoiceProps, 'type'>;

/** A single checkbox and its label. */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
	(props, ref) => <Choice type="checkbox" ref={ref} {...props} />,
);


// Checkbox Group

export type CheckboxGroupProps = Omit<ChoiceFieldProps, 'multiple'>;

/** A group of checkboxes and their group label. */
export const CheckboxGroup: React.FunctionComponent<CheckboxGroupProps> = (
	props,
) => <ChoiceField multiple {...props} />;
