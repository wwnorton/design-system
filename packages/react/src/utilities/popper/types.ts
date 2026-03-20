import { ReferenceElement } from '@floating-ui/react';

export interface PopperCoreProps {
	/**
	 * The reference element that the popper will be attached to.
	 *
	 * [Popper.js - `createPopper`](https://popper.js.org/docs/v2/constructors/#createpopper)
	 */
	reference?: ReferenceElement | null;
	/**
	 * The popper element, which will be attached to the reference element.
	 *
	 * [Popper.js - `createPopper`](https://popper.js.org/docs/v2/constructors/#createpopper)
	 */
	popper?: HTMLElement | null;
}
