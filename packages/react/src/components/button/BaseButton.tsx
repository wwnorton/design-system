import * as React from 'react';
import { mergeClasses } from '../../utilities/className';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/** Button variant conveys the button's level of visual emphasis. */
	variant?: ButtonVariant;
}

export const defaultProps: Partial<BaseButtonProps> = {
	type: 'button',
};

export const BaseButton: React.FunctionComponent<BaseButtonProps> = (props: BaseButtonProps) => {
	// merge props into default props and extract the relevant values
	const {
		type,
		variant,
		className,
		children,
		...attributes
	} = { ...defaultProps, ...props };

	// 1. set .button
	// 2. if a variant was specified, set .button-${variant}
	// 3. if an additional className was included, add it
	const classList = mergeClasses(
		'button',
		variant && `button-${variant}`,
		className,
	);

	return (
		/**
		 * Known eslint-plugin-react bug when passing dynamic button type, even when
		 * a default is defined.
		 * @see https://github.com/yannickcr/eslint-plugin-react/issues/1846
		 */
		/* eslint-disable react/button-has-type */
		<button className={classList} type={type} {...attributes}>
			{ children }
		</button>
	);
};

export default BaseButton;
