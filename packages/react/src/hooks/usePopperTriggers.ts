import {
	useCallback,
	useLayoutEffect,
	useMemo, useRef,
} from 'react';
import { useExternalClick } from './useExternalClick';
import { PopperCoreProps } from '../types/popper';
import { canUseDOM } from '../config';

type PopperTriggersOpen = 'click.reference' | 'focus' | 'focusin' | 'pointerenter';
type PopperTriggersClose = 'click.reference' | 'click.internal' | 'click.external' | 'escape' | 'blur' | 'pointerleave';
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

/**
 * Use Popper.js triggers to trigger requests to open or close.
 */
export const usePopperTriggers = ({
	reference,
	popper,
	trigger,
	isOpen,
	hideDelay,
	onRequestOpen,
	onRequestClose,
}: UsePopperTriggersProps): void => {
	const openTrigger = useRef<PopperTriggersOpen>();
	const keyboardClick = useRef(false);
	const spaceClick = useRef(false);
	const timer = useRef<number>();

	const clearTimer = (): void => window.clearTimeout(timer.current);

	const show = useCallback((triggeredBy: PopperTriggersOpen) => {
		openTrigger.current = triggeredBy;
		if (onRequestOpen) onRequestOpen(triggeredBy);
		clearTimer();
	}, [onRequestOpen]);

	const hide = useCallback((triggeredBy: PopperTriggersClose) => {
		if (onRequestClose) onRequestClose(triggeredBy);
	}, [onRequestClose]);

	const externalTo = useMemo(() => {
		if (canUseDOM) {
			return [popper, reference].reduce<EventTarget[]>((t, el) => {
				if (el instanceof EventTarget) t.push(el);
				return t;
			}, []);
		}
		return undefined;
	}, [popper, reference]);

	const onExternalClick = () => {
		if (popper && trigger.includes('click')) return hide('click.external');
		return undefined;
	};

	// hide on external clicks, but don't focus the reference since whatever was
	// clicked should receive focus
	useExternalClick({
		externalTo,
		onExternalClick,
	});

	useLayoutEffect(() => {
		const toggle = (): void => {
			if (isOpen) hide('click.reference');
			else show('click.reference');
		};

		// keyboard
		const docKeydownHandler = (e: KeyboardEvent): void => {
			if (e.key === 'Escape') hide('escape');
		};
		const keydownHandler = (e: KeyboardEvent): void => {
			if (e.key === 'Enter') {
				keyboardClick.current = true;
				toggle();
			}
			if (e.key === ' ') {
				spaceClick.current = true;
				e.preventDefault();
			}
		};
		const keyupHandler = (e: KeyboardEvent): void => {
			if (e.key === ' ' && spaceClick.current) {
				keyboardClick.current = true;
				spaceClick.current = false;
				toggle();
			}
		};

		// click
		const clickHandler = (): void => {
			if (keyboardClick.current) {
				keyboardClick.current = false;
				return;
			}
			toggle();
		};

		// focus
		const focusHandler = () => show('focus');
		const focusinHandler = () => show('focusin');
		const blurHandler = () => hide('blur');

		// hover
		const pointerenterHandler = () => show('pointerenter');
		const pointerleaveHandler = () => {
			timer.current = window.setTimeout((): void => {
				if (openTrigger.current === 'pointerenter') hide('pointerleave');
			}, hideDelay);
		};

		const isElement = (el: typeof reference): el is Element => (
			(el) ? el instanceof Element : false
		);
		const isHTMLElement = (el: typeof reference): el is HTMLElement => (
			(el) ? el instanceof HTMLElement : false
		);

		// hide on Escape for all triggers
		document.addEventListener('keydown', docKeydownHandler);

		// click
		if (trigger.includes('click') && isHTMLElement(reference)) {
			reference.addEventListener('click', clickHandler);
			reference.addEventListener('keydown', keydownHandler);
			reference.addEventListener('keyup', keyupHandler);
		}

		if (isElement(reference)) {
			// focus & focusin
			if (trigger.includes('focus')) {
				reference.addEventListener('focus', focusHandler);
			}
			if (trigger.includes('focusin')) {
				reference.addEventListener('focusin', focusinHandler);
			}
			if (trigger.includes('focus') || trigger.includes('focusin')) {
				reference.addEventListener('blur', blurHandler);
			}

			// mouseenter & pointerenter
			if (trigger.includes('mouseenter') || trigger.includes('pointerenter')) {
				reference.addEventListener('pointerenter', pointerenterHandler);
				reference.addEventListener('pointerleave', pointerleaveHandler);
				if (popper) {
					popper.addEventListener('pointerleave', pointerleaveHandler);
				}
			}
		}

		if (popper) {
			popper.addEventListener('pointerenter', clearTimer);
		}

		return (): void => {
			clearTimer();
			document.removeEventListener('keydown', docKeydownHandler);

			if (isHTMLElement(reference)) {
				// click
				reference.removeEventListener('click', clickHandler);
				reference.removeEventListener('keydown', keydownHandler);
				reference.removeEventListener('keyup', keyupHandler);
			}

			if (isElement(reference)) {
				// focus & focusin
				reference.removeEventListener('focus', focusHandler);
				reference.removeEventListener('focusin', focusinHandler);
				reference.removeEventListener('blur', blurHandler);

				// mouseenter & pointerenter
				reference.removeEventListener('pointerenter', pointerenterHandler);
				reference.removeEventListener('pointerleave', pointerleaveHandler);
			}

			if (popper) {
				popper.removeEventListener('pointerenter', clearTimer);
				popper.removeEventListener('pointerleave', pointerleaveHandler);
			}
		};
	}, [reference, popper, trigger, show, hide, hideDelay, isOpen]);
};
