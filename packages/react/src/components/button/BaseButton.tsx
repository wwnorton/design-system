import * as React from 'react';
import classNames from 'classnames';

export type ButtonKind = 'primary' | 'secondary' | 'tertiary';

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/** The base class name according to BEM conventions */
	baseName?: string;
	/** Button kind conveys the button's level of visual emphasis. */
	kind?: ButtonKind;
	/** A reference to the inner <button> element. */
	ref?: React.Ref<HTMLButtonElement>;
}

export const defaultProps: Partial<BaseButtonProps> = {
	baseName: 'button',
	type: 'button',
};

export const BaseButton: React.ComponentType<BaseButtonProps> = React.forwardRef((
	props: BaseButtonProps,
	ref?: React.Ref<HTMLButtonElement>,
) => {
	// merge props into default props and extract the relevant values
	const {
		baseName,
		kind,
		type,
		className,
		children,
		...attributes
	} = { ...defaultProps, ...props };

	const classes = classNames(
		{
			[`${baseName}`]: true,
			[`${baseName}-primary`]: kind === 'primary',
			[`${baseName}-secondary`]: kind === 'secondary',
			[`${baseName}-tertiary`]: kind === 'tertiary',
		},
		className,
	);

	return (
		/**
		 * Known eslint-plugin-react bug when passing dynamic button type, even when
		 * a default is defined.
		 * @see https://github.com/yannickcr/eslint-plugin-react/issues/1846
		 */
		/* eslint-disable react/button-has-type */
		<button
			className={classes}
			type={type}
			ref={ref}
			{...attributes}
		>
			{ children }
		</button>
	);
});

export default BaseButton;
