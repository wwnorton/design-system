import React from 'react';
import {
	Choice, ChoiceProps,
} from '../ChoiceField';


// Single Radio

export type RadioProps = Omit<ChoiceProps, 'type'>;

/** A single radio button. Don't use this by itself. */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
	(props, ref) => <Choice type="radio" ref={ref} {...props} />,
);
