import * as React from 'react';
import classNames from 'classnames';

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(({
	onKeyDown,
	onKeyUp,
	className,
	children,
	...attributes
}: BaseButtonProps, ref) => {
	const [isActive, setActive] = React.useState(false);

	const activate = (cb?: React.DOMAttributes<HTMLButtonElement>['onKeyDown']) => (
		e: React.KeyboardEvent<HTMLButtonElement>,
	): void => {
		if ('key' in e && e.key === ' ') {
			setActive(true);
		}
		if (cb) cb(e);
	};

	const deactivate = (cb?: React.DOMAttributes<HTMLButtonElement>['onKeyUp']) => (
		e: React.KeyboardEvent<HTMLButtonElement>,
	): void => {
		if ('key' in e && e.key === ' ') {
			setActive(false);
		}
		if (cb) cb(e);
	};

	return (
		/**
		 * Known eslint-plugin-react bug when passing dynamic button type, even when
		 * a default is defined.
		 * @see https://github.com/yannickcr/eslint-plugin-react/issues/1846
		 */
		/* eslint-disable react/button-has-type */
		<button
			className={classNames({ active: isActive }, className)}
			onKeyDown={activate(onKeyDown)}
			onKeyUp={deactivate(onKeyUp)}
			ref={ref}
			{...attributes}
		>
			{ children }
		</button>
	);
});

export default BaseButton;
