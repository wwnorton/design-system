import React from 'react';
import { useForwardedRef, usePopper } from '../../hooks';
import { PopperOptions, Instance, VirtualElement } from '../../types/popper';

export interface BasePopperProps extends React.HTMLAttributes<HTMLElement>, Partial<PopperOptions> {
	/** Indicates whether the popper is rendered or not. */
	isOpen?: boolean;
	/** The outer HTML element name. Default is `div`. */
	tagName?: 'div' | 'section' | 'ul' | 'ol' | 'dl';
	/**
	 * The reference element that the popper will be attached to.
	 *
	 * Reference: [Popper - `createPopper`](https://popper.js.org/docs/v2/constructors/#createpopper)
	 */
	reference?: Element | VirtualElement | null;
	/**
	 * A callback that provides access to the Popper instance.
	 *
	 * Reference: [Popper - `instance`](https://popper.js.org/docs/v2/constructors/#instance)
	 */
	onCreate?: (instance: Instance) => void;
}

/**
 * A [Popper.js](https://popper.js.org) component. Position the BasePopper's
 * children relative to a reference element.
 */
export const BasePopper = React.forwardRef<HTMLElement, BasePopperProps>((
	{
		isOpen = false,
		tagName: Tag = 'div',
		reference,
		children,
		placement = 'auto',
		modifiers,
		strategy = 'absolute',
		onFirstUpdate,
		onCreate,
		...attributes
	}: BasePopperProps, ref,
) => {
	const [popper, setPopper] = useForwardedRef(ref);
	const instance = usePopper({
		popper,
		reference,
		children,
		placement,
		modifiers,
		strategy,
		onFirstUpdate,
	});

	React.useEffect(() => {
		if (instance && onCreate) onCreate(instance);
	}, [instance, onCreate]);

	if (!isOpen) return null;
	return <Tag ref={setPopper} {...attributes}>{ children }</Tag>;
});
