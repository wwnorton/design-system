import React from 'react';
import { Icon } from '../Icon';

export interface BaseOptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
	/**
	 * The option's value. If not provided, consumer components are encouraged
	 * to treat `children.toString()` as the value.
	 */
	value?: React.ReactText;
	/** Indicates whether the option is currently selected. */
	isSelected?: boolean;
	/** Indicates that the option should be disabled. */
	disabled?: boolean;
	/** The class name for the selection marker. */
	markerClass?: string;
	/** The class name for the contents of the option. */
	contentsClass?: string;
}

/**
 * An option is "a selectable item in a listbox." Used in `BaseListbox`. Similar to
 * an `<option>` element.
 *
 * Reference:
 * - [ARIA - `option`](https://w3c.github.io/aria/#option)
 */
export const BaseOption = React.forwardRef<HTMLLIElement, BaseOptionProps>(({
	isSelected = false,
	disabled,
	children,
	markerClass,
	contentsClass,
	value,
	...attributes
}: BaseOptionProps, ref) => (
	<li
		role="option"
		aria-selected={(isSelected) ? 'true' : undefined}
		aria-disabled={disabled}
		ref={ref}
		{...attributes}
	>
		<span className={markerClass} aria-hidden={!isSelected}>
			<Icon
				variant={(disabled) ? 'close' : 'check'}
				className={markerClass}
				aria-label={(disabled) ? 'Disabled' : 'Check'}
				size="0.875em"
			/>
		</span>
		<span className={contentsClass}>{ children || value }</span>
	</li>
));
