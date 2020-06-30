import React from 'react';
import classNames from 'classnames';

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

export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(({
	active = BaseButtonDefaults.active,
	activeClass = BaseButtonDefaults.activeClass,
	onKeyDown,
	onKeyUp,
	onBlur,
	className,
	children,
	type = 'button',
	...attributes
}: BaseButtonProps, ref) => {
	const [isActive, setActive] = React.useState(active);

	React.useEffect(() => { setActive(active); }, [active]);

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
			className={classNames({ [activeClass]: isActive }, className)}
			onKeyDown={handleKeydown}
			onKeyUp={handleKeyup}
			onBlur={handleBlur}
			ref={ref}
			type={type}	// eslint-disable-line react/button-has-type
			{...attributes}
		>
			{ children }
		</button>
	);
});
