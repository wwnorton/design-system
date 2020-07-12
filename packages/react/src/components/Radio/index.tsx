import React from 'react';
import {
	Choice, ChoiceProps,
	ChoiceField, ChoiceFieldProps,
} from '../ChoiceField';


// Single Radio

export type RadioProps = Omit<ChoiceProps, 'type'>;

/** A single radio button. Don't use this by itself. */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
	(props, ref) => <Choice type="radio" ref={ref} {...props} />,
);


// Radio Group

export type RadioGroupProps = Omit<ChoiceFieldProps, 'multiple'>;

/** A group of radio buttons. */
export const RadioGroup: React.FunctionComponent<RadioGroupProps> = (
	props,
) => <ChoiceField multiple={false} {...props} />;
