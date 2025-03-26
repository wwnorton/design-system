import { useCallback, useMemo, useRef } from 'react';
import { canUseDOM } from '../environment';
import { useExternalClick } from '../externalClick';
import { useLayoutEffect } from '../isomorphicLayoutEffect';
import { UsePopperTriggersProps, PopperTriggersOpen, PopperTriggersClose } from './types';

/**
 * Use a list of triggers to control when a Popper instance opens and closes,
 * similar to [the Tippy.js trigger prop](https://atomiks.github.io/tippyjs/v6/all-props/#trigger).
 */
export const usePopperTriggers = ({
	reference,
	popper,
	trigger,
	isOpen,
	hideDelay,
	showDelay,
	onRequestOpen,
	onRequestClose,
}: UsePopperTriggersProps): void => {
	const openTrigger = useRef<PopperTriggersOpen>();
	const awaitingHideDelay = useRef(false);
	const keyboardClick = useRef(false);
	const spaceClick = useRef(false);
	const showTimer = useRef<number>();
	const hideTimer = useRef<number>();

	const clearShowTimer = (): void => window.clearTimeout(showTimer.current);
	const clearHideTimer = (): void => window.clearTimeout(hideTimer.current);

	const show = useCallback(
		(triggeredBy: PopperTriggersOpen) => {
			openTrigger.current = triggeredBy;
			if (onRequestOpen) onRequestOpen(triggeredBy);
			clearHideTimer();
		},
		[onRequestOpen],
	);

	const hide = useCallback(
		(triggeredBy: PopperTriggersClose) => {
			if (onRequestClose) onRequestClose(triggeredBy);
			clearShowTimer();
		},
		[onRequestClose],
	);

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
	useExternalClick(externalTo, onExternalClick);

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
		const blurHandler = () => {
			spaceClick.current = false;
			hide('blur');
		};

		// hover
		const pointerenterHandler = ({ target }: PointerEvent) => {
			let composedPath: EventTarget[] = [];
			const updateComposedPath = (e: PointerEvent) => {
				composedPath = e.composedPath();
			};
			document.addEventListener('pointermove', updateComposedPath);
			showTimer.current = window.setTimeout((): void => {
				document.removeEventListener('pointermove', updateComposedPath);
				if (target && composedPath.includes(target)) show('pointerenter');
			}, showDelay);
		};
		const pointerleaveHandler = () => {
			awaitingHideDelay.current = true;
			hideTimer.current = window.setTimeout((): void => {
				awaitingHideDelay.current = false;
				if (openTrigger.current === 'pointerenter') hide('pointerleave');
			}, hideDelay);
		};

		const isHTMLorSVGElement = (el: typeof reference): el is HTMLElement | SVGElement =>
			el ? el instanceof window.HTMLElement || el instanceof window.SVGElement : false;

		/**
		 * Bug fix: ensure that tooltips are closed when not hovered.
		 * There are scenarios where the `pointerleave` event doesn't trigger,
		 * so the tooltip won't close until the user moves their pointer back
		 * over the reference element.
		 * It's possible that this happens when the `pointerleave` event occurs
		 * between the event loop. For instance, if the user tabs away, moves
		 * their pointer somewhere else on their screen, and then tabs back.
		 */
		const docPointermoveHandler = (e: PointerEvent) => {
			// do nothing if the tooltip isn't open, if it wasn't opened by the
			// pointer, or if its state is being controlled
			if ((isOpen && openTrigger.current === 'pointerenter') || openTrigger.current === undefined) {
				const composedPath = e.composedPath();
				if (isHTMLorSVGElement(reference) && isHTMLorSVGElement(popper)) {
					const hovering = composedPath.includes(reference) || composedPath.includes(popper);
					if (!hovering && !awaitingHideDelay.current) hide('pointermove.document');
				}
			}
		};

		// hide on Escape for all triggers
		document.addEventListener('keydown', docKeydownHandler);

		// hide on pointer move if the ref & tooltip aren't being hovered
		document.addEventListener('pointermove', docPointermoveHandler);

		// click
		if (trigger.includes('click') && isHTMLorSVGElement(reference)) {
			reference.addEventListener('click', clickHandler);
			reference.addEventListener('keydown', keydownHandler as EventListener);
			reference.addEventListener('keyup', keyupHandler as EventListener);
		}

		if (isHTMLorSVGElement(reference)) {
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
				reference.addEventListener('pointerenter', pointerenterHandler as EventListener);
				reference.addEventListener('pointerleave', pointerleaveHandler);
				if (popper) {
					popper.addEventListener('pointerleave', pointerleaveHandler);
				}
			}
		}

		if (popper) {
			popper.addEventListener('pointerenter', clearHideTimer);
		}

		return (): void => {
			clearHideTimer();
			document.removeEventListener('keydown', docKeydownHandler);
			document.removeEventListener('pointermove', docPointermoveHandler);

			if (isHTMLorSVGElement(reference)) {
				// click
				reference.removeEventListener('click', clickHandler);
				reference.removeEventListener('keydown', keydownHandler as EventListener);
				reference.removeEventListener('keyup', keyupHandler as EventListener);

				// focus & focusin
				reference.removeEventListener('focus', focusHandler);
				reference.removeEventListener('focusin', focusinHandler);
				reference.removeEventListener('blur', blurHandler);

				// mouseenter & pointerenter
				reference.removeEventListener('pointerenter', pointerenterHandler as EventListener);
				reference.removeEventListener('pointerleave', pointerleaveHandler);
			}

			if (popper) {
				popper.removeEventListener('pointerenter', clearHideTimer);
				popper.removeEventListener('pointerleave', pointerleaveHandler);
			}
		};
	}, [hide, hideDelay, isOpen, popper, reference, show, showDelay, trigger]);
};
