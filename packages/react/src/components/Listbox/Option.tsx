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
export const Option = React.forwardRef<HTMLLIElement, OptionProps>(
	(
		{
			disabled,
			label,
			selected,
			marker,
			className = 'nds-option',
			onClick,
			onKeyDown,
			children,
			...props
		}: OptionProps,
		ref,
	) => {
		const selectedMarker = React.useMemo(() => {
			if (React.isValidElement(marker)) return marker;
			return (
				<span className="nds-option__marker" aria-hidden={!selected}>
					<Icon
						variant={marker !== 'dot' ? 'check' : undefined}
						icon={marker === 'dot' ? { children: <circle r="6" cx="12" cy="12" /> } : undefined}
						color={selected ? 'currentColor' : 'transparent'}
						// not all screen readers announce aria-selected, so use
						// the marker to convey the state textually
						aria-label={selected ? 'Checked' : undefined}
						size="0.875em"
					/>
				</span>
			);
		}, [marker, selected]);

		return (
			<li
				ref={ref}
				className={className}
				onClick={disabled ? undefined : onClick}
				onKeyDown={disabled ? undefined : onKeyDown}
				{...props}
				aria-selected={selected ? 'true' : 'false'}
				aria-disabled={disabled ? 'true' : undefined}
				role="option"
			>
				{selectedMarker}
				{label || children}
			</li>
		);
	},
);
