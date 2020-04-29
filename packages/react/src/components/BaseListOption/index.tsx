import React from 'react';
import { useForwardedRef } from '../../utilities/hooks';
import Icon from '../Icon';

export interface BaseListOptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
	/** Indicates whether the option is currently selected. */
	isSelected?: boolean;
	/** The option's value. */
	children: React.ReactText;
	/** The class name for the selection marker. */
	markerClass?: string;
	/** The class name for the value text. */
	valueClass?: string;
}

const BaseListOption: React.ForwardRefRenderFunction<HTMLLIElement, BaseListOptionProps> = ({
	isSelected = false,
	children,
	markerClass,
	valueClass,
	...attributes
}: BaseListOptionProps, ref: React.Ref<HTMLLIElement>) => {
	const listItemRef = useForwardedRef(ref);

	return (
		<li
			role="option"
			aria-selected={(isSelected) ? 'true' : 'false'}
			ref={listItemRef}
			{...attributes}
		>
			{ isSelected && <Icon variant="check" className={markerClass} /> }
			<span className={valueClass}>{ children }</span>
		</li>
	);
};

/**
 * An option is "a selectable item in a listbox." Used in `BaseListbox`.
 * @ARIA https://w3c.github.io/aria/#option
 */
const BaseListOptionForwardRef = React.forwardRef(BaseListOption);

export default BaseListOptionForwardRef;
