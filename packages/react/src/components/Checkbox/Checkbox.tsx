import React from 'react';
import { Choice, ChoiceField } from '../ChoiceField';
import { CheckboxGroupProps, CheckboxProps } from './types';

/** A single checkbox and its label. */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
	(props, ref) => <Choice ref={ref} {...props} type="checkbox" />,
);

/** A group of checkboxes and their group label. */
export const CheckboxGroup = (props: CheckboxGroupProps) => <ChoiceField {...props} multiple />;
