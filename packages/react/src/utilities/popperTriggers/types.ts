import { PopperCoreProps } from '../popper';

export type PopperTriggersOpen = 'click.reference' | 'focus' | 'focusin' | 'pointerenter';

export type PopperTriggersClose =
	| 'click.reference'
	| 'click.internal'
	| 'click.external'
	| 'escape'
	| 'blur'
	| 'pointerleave'
	| 'pointermove.document';

export interface UsePopperTriggersProps extends PopperCoreProps {
	/** Indicates whether the popper is open or closed. */
	isOpen?: boolean;
	/**
	 * A space-separated string of events. Triggers can be any combination of the
	 * following:
	 * - `click`
	 * - `focus`
	 * - `focusin`
	 * - `mouseenter`
	 * - `pointerenter`
	 */
	trigger: string;
	/**
	 * The duration in milliseconds that should elapse before closing, beginning
	 * after the pointer exits the reference's bounding box. Only has an effect
	 * for the `mouseenter` or `pointerenter` triggers.
	 */
	hideDelay?: number;
	/**
	 * The duration in milliseconds that should elapse before opening, beginning
	 * after `isOpen` is set to `true`.
	 */
	showDelay?: number;
	/**
	 * A callback that occurs when the popper wants to open. The reason it is
	 * making this request is given by the first parameter.
	 * - `"click.reference"` - the reference element was clicked.
	 * - `"focus"` - the reference was focused.
	 * See [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
	 * - `"focusin"` - the reference is about to be focused.
	 * See [focusin event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event).
	 * - `"pointerenter"` - a pointer (mouse or touch) entered the bounding box of the reference.
	 * See [pointerenter event](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerenter_event).
	 */
	onRequestOpen?: (
		/** Why the popper wants to open. */
		triggeredBy: PopperTriggersOpen,
	) => void;
	/**
	 * A callback that occurs when the popper wants to close. The reason it is
	 * making this request is given by the first parameter.
	 * - `"click.reference"` - the reference element was clicked.
	 * - `"click.internal"` - something inside the popper was clicked.
	 * - `"click.external"` - something outside the popper or reference was clicked.
	 * - `"escape"` - the Escape key was pressed.
	 * - `"blur"` - the reference element lost focus.
	 * See [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
	 * - `"pointerleave"` - a pointer (mouse or touch) left the bounding box of the reference.
	 * See [pointerenter event](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerenter_event).
	 */
	onRequestClose?: (
		/** Why the popper wants to close. */
		triggeredBy: PopperTriggersClose,
	) => void;
}
