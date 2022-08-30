import React from 'react';
import { Choice, ChoiceField } from '../ChoiceField';
import { RadioGroupProps, RadioProps } from './types';

/** A single radio button. Don't use this by itself. */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
	(props, ref) => <Choice type="radio" ref={ref} {...props} />,
);

/** A group of radio buttons. */
export const RadioGroup: React.FunctionComponent<RadioGroupProps> = (
	props,
) => <ChoiceField multiple={false} {...props} />;
