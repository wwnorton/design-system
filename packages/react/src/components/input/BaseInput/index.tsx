import * as React from 'react';
import { noop } from '../../../utilities/events';

export const ID = 'input';
export const DICTIONARY = {
	PREFIX: 'nds-',
	LABEL: 'label',
	INPUT: 'input',
	COUNT: 'count',
	TEXTFIELD: 'textfield',
	CHECKBOX: 'checkbox',
	HELP: 'help',
	ERROR: 'error',
	FEEDBACK: 'feedback',
	INVALID: 'Not a valid input',
	REQUIRED: 'required',
	MAX_COUNT: 45,
};

export interface BaseInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	type: string;
	ref?: React.Ref<HTMLInputElement>;
	required?: boolean;
	id?: string;
	maxLength?: number;
}

export const defaultProps: Partial<BaseInputProps> = {
	onChange: noop,
};

export const BaseInput: React.ComponentType<BaseInputProps> = React.forwardRef(
	(props: BaseInputProps, ref?: React.Ref<HTMLInputElement>) => {
		const {
			type,
			className,
			...attributes
		} = { ...defaultProps, ...props };

		return (
			<>
				<ID
					className={`${className}`}
					type={type}
					ref={ref}
					{...attributes}
				/>
			</>
		);
	},
);
