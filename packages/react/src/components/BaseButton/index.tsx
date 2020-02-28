import React from 'react';
import classNames from 'classnames';
import { useActive } from '../../utilities/hooks';

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/** Whether the button is currently depressed. Polyfill for :active on keydown. */
	active?: boolean;
	/** A class to convey :active. */
	activeClass?: string;
}

export const BaseButtonDefaults = {
	active: false,
	activeClass: 'active',
};

const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(({
	active = BaseButtonDefaults.active,
	activeClass = BaseButtonDefaults.activeClass,
	onKeyDown,
	onKeyUp,
	onBlur,
	className,
	children,
	...attributes
}: BaseButtonProps, ref) => {
	const { active: stateActive, activate, deactivate } = useActive(active);

	const handleKeydown = (e: React.KeyboardEvent<HTMLButtonElement>): void => {
		if (e.key === ' ') activate();
		if (onKeyDown) onKeyDown(e);
	};

	const handleKeyup = (e: React.KeyboardEvent<HTMLButtonElement>): void => {
		if (e.key === ' ') deactivate();
		if (onKeyUp) onKeyUp(e);
	};

	const handleBlur = (e: React.FocusEvent<HTMLButtonElement>): void => {
		deactivate();
		if (onBlur) onBlur(e);
	};

	return (
		/**
		 * Known eslint-plugin-react bug when passing dynamic button type, even when
		 * a default is defined.
		 * @see https://github.com/yannickcr/eslint-plugin-react/issues/1846
		 */
		/* eslint-disable react/button-has-type */
		<button
			className={classNames({ [activeClass]: stateActive }, className)}
			onKeyDown={handleKeydown}
			onKeyUp={handleKeyup}
			onBlur={handleBlur}
			ref={ref}
			{...attributes}
		>
			{ children }
		</button>
	);
});

export default BaseButton;
