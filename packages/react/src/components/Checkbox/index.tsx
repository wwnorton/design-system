import React from 'react';
import {
	Choice, ChoiceProps,
} from '../ChoiceField';


// Single Checkbox

export type CheckboxProps = Omit<ChoiceProps, 'type'>;

/** A single checkbox and its label. */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
	(props, ref) => <Choice type="checkbox" ref={ref} {...props} />,
);
