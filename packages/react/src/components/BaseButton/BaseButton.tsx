import React from 'react';
import classNames from 'classnames';
import { BaseButtonProps } from './types';

export const defaultProps: BaseButtonProps = {
	active: false,
	activeClass: 'active',
	type: 'button',
};

/**
 * A base `<button>` component with `type="button"` by default (browser default
 * is "submit") and a polyfill to ensure that :active is triggered while the
 * space bar is being held down.
 */
export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
	(
		{
			active = defaultProps.active,
			activeClass = defaultProps.activeClass,
			onKeyDown,
			onKeyUp,
			onBlur,
			className,
			children,
			type = defaultProps.type,
			...props
		}: BaseButtonProps,
		ref,
	) => {
		const [isActive, setActive] = React.useState(active);

		React.useEffect(() => {
			setActive(active);
		}, [active]);

		const handleKeydown = (e: React.KeyboardEvent<HTMLButtonElement>): void => {
			if (e.key === ' ') setActive(true);
			if (onKeyDown) onKeyDown(e);
		};

		const handleKeyup = (e: React.KeyboardEvent<HTMLButtonElement>): void => {
			if (e.key === ' ') setActive(false);
			if (onKeyUp) onKeyUp(e);
		};

		const handleBlur = (e: React.FocusEvent<HTMLButtonElement>): void => {
			setActive(false);
			if (onBlur) onBlur(e);
		};

		return (
			<button
				ref={ref}
				className={classNames(activeClass && { [activeClass]: isActive }, className)}
				onKeyDown={handleKeydown}
				onKeyUp={handleKeyup}
				onBlur={handleBlur}
				type={type} // eslint-disable-line react/button-has-type
				{...props}
			>
				{children}
			</button>
		);
	},
);

BaseButton.defaultProps = defaultProps;
