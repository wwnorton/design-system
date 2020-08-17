import { useLayoutEffect, useRef, useState } from 'react';
import { VirtualElement } from '@popperjs/core';

/**
 * Control a popper's open state with a list of triggers. The returned value
 * should be used to control the `isOpen` state of a Popper component.
 */
export const usePopperTriggers = ({
	reference, popper, trigger, isOpen, hideDelay,
}: {
	/** The reference element that the popper will be attached to. */
	reference?: Element | VirtualElement | null;
	/** The popper element. */
	popper?: HTMLElement | null;
	/**
	 * A space-separated string of events. Triggers can be any combination of the
	 * following:
	 * * `click`
	 * * `focus`
	 * * `focusin`
	 * * `mouseenter`
	 * * `pointerenter`
	 * * `manual` - this will override all other triggers, giving you full
	 * control over visibility.
	 */
	trigger: string;
	/**
	 * Indicates the initial open state (whether the popper should be displayed
	 * or not on first render). `trigger` events will control the open state
	 * after first render.
	 */
	isOpen: boolean;
	/**
	 * The duration in milliseconds that should elapse before the popper
	 * disappears after moving the cursor off of the reference element. Only has
	 * an effect for the `mouseenter` or `pointerenter` triggers.
	 */
	hideDelay?: number;
}): boolean => {
	if (trigger.includes('manual')) return isOpen;
	const [open, setOpen] = useState(isOpen);
	const [openTrigger, setOpenTrigger] = useState<string>();
	const timer = useRef<number>();

	const clearTimer = (): void => window.clearTimeout(timer.current);

	const show = ({ type }: Event): void => {
		if (!open) setOpenTrigger(type);
		setOpen(true);
		clearTimer();
	};

	const hide = (): void => setOpen(false);

	const toggle = (e: Event): void => {
		if (open) hide();
		else show(e);
	};

	const delayedHide = (): void => {
		timer.current = window.setTimeout((): void => {
			if (openTrigger === 'pointerenter') hide();
		}, hideDelay);
	};

	// click handlers
	const docKeydownHandler = (e: KeyboardEvent): void => {
		if (e.key === 'Escape') hide();
	};
	const docClickHandler = (e: MouseEvent): void => {
		const clickPath = e.composedPath();
		const tooltipClick = clickPath.some((el) => {
			if (el instanceof Element) {
				return el.getAttribute('role') === 'popper';
			}
			return false;
		});
		const referenceClick = (): boolean => {
			if (reference && reference instanceof Element) {
				return clickPath.includes(reference);
			}
			return false;
		};
		if (tooltipClick || referenceClick()) return;
		hide();
	};
	const keydownHandler = (e: KeyboardEvent): void => {
		if (e.key === 'Enter') toggle(e);
		if (e.key === ' ') e.preventDefault();
	};
	const keyupHandler = (e: KeyboardEvent): void => {
		if (e.key === ' ') toggle(e);
	};

	useLayoutEffect(() => {
		if (reference && (reference instanceof HTMLElement || reference instanceof window.SVGElement)) {
			// hide on Escape for all triggers
			document.addEventListener('keydown', docKeydownHandler);

			// click
			if (trigger.includes('click')) {
				reference.addEventListener('click', toggle);
				reference.addEventListener('keydown', keydownHandler as EventListener);
				reference.addEventListener('keyup', keyupHandler as EventListener);
				document.addEventListener('click', docClickHandler);
			}

			// focus & focusin
			if (trigger.includes('focus')) {
				reference.addEventListener('focus', show);
			}
			if (trigger.includes('focusin')) {
				reference.addEventListener('focusin', show);
			}
			if (trigger.includes('focus') || trigger.includes('focusin')) {
				reference.addEventListener('blur', hide);
			}

			// mouseenter & pointerenter
			if (trigger.includes('mouseenter') || trigger.includes('pointerenter')) {
				reference.addEventListener('pointerenter', show);
				reference.addEventListener('pointerleave', delayedHide);
				if (popper) {
					popper.addEventListener('pointerleave', delayedHide);
				}
			}

			if (popper) {
				popper.addEventListener('pointerenter', clearTimer);
			}
		}

		return (): void => {
			clearTimer();
			if (reference && (
				reference instanceof HTMLElement || reference instanceof window.SVGElement
			)) {
				// click
				reference.removeEventListener('click', toggle);
				reference.removeEventListener('keydown', keydownHandler as EventListener);
				reference.removeEventListener('keyup', keyupHandler as EventListener);
				document.removeEventListener('click', docClickHandler);
				document.removeEventListener('keydown', docKeydownHandler);

				// focus & focusin
				reference.removeEventListener('focus', show);
				reference.removeEventListener('focusin', show);
				reference.removeEventListener('blur', hide);

				// mouseenter & pointerenter
				reference.removeEventListener('pointerenter', show);
				reference.removeEventListener('pointerleave', delayedHide);

				if (popper) {
					popper.removeEventListener('pointerenter', clearTimer);
					popper.removeEventListener('pointerleave', delayedHide);
				}
			}
		};
	}, [reference, popper, trigger]);

	return open;
};
