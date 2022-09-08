import { Options, VirtualElement } from '@popperjs/core';

export interface PopperCoreProps {
	/**
	 * The reference element that the popper will be attached to.
	 *
	 * [Popper.js - `createPopper`](https://popper.js.org/docs/v2/constructors/#createpopper)
	 */
	reference?: Element | VirtualElement | null;
	/**
	 * The popper element, which will be attached to the reference element.
	 *
	 * [Popper.js - `createPopper`](https://popper.js.org/docs/v2/constructors/#createpopper)
	 */
	popper?: HTMLElement | null;
}

export interface UsePopperProps extends Partial<Options>, PopperCoreProps {
	/** The contents of the popper. */
	children?: React.ReactNode;
}
