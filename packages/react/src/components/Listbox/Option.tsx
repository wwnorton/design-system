import React from 'react';
import { Icon } from '../Icon';
import { OptionProps } from './types';

/**
 * A a selectable item in a list.
 *
 * Reference:
 * - [HTML - `<option>`](https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element).
 * - [ARIA - `option`](https://w3c.github.io/aria/#option).
 */
export const Option = React.forwardRef<HTMLLIElement, OptionProps>(({
	disabled,
	label,
	selected,
	marker,
	className = 'nds-option',
	onClick,
	onKeyDown,
	children,
	...props
}: OptionProps, ref) => {
	const defaultMarker = React.useMemo(() => (
		<span className="nds-option__marker" aria-hidden={!selected}>
			<Icon
				variant="check"
				color={(selected) ? 'currentColor' : 'transparent'}
				// not all screen readers announce aria-selected, so use
				// the marker to convey the state textually
				aria-label={(selected) ? 'Checked' : undefined}
				size="0.875em"
			/>
		</span>
	), [selected]);

	return (
		<li
			ref={ref}
			className={className}
			onClick={(disabled) ? undefined : onClick}
			onKeyDown={(disabled) ? undefined : onKeyDown}
			{...props}
			aria-selected={(selected) ? 'true' : 'false'}
			aria-disabled={(disabled) ? 'true' : undefined}
			role="option"
		>
			{ (marker === undefined) ? defaultMarker : marker }
			{ label || children }
		</li>
	);
});
