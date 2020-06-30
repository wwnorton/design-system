import React, {
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import {
	createPopper,
	Instance as PopperInstance,
	Options as PopperOptions,
	VirtualElement,
} from '@popperjs/core';
import isEqual from 'react-fast-compare';

/**
 * Use a forwarded ref. Takes the ref provided by `React.forwardRef` and returns
 * a `React.setState` [value, function] tuple that will keep the ref up to date.
 */
export const useForwardedRef = <T>(
	forwardedRef?: React.Ref<T>,
): [T | null, React.Dispatch<React.SetStateAction<T | null>>] => {
	const [element, setElement] = useState<T | null>(null);

	useEffect(() => {
		if (!forwardedRef) return;

		if (typeof forwardedRef === 'function') {
			forwardedRef(element);
		} else {
			// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
			// @ts-ignore
			// eslint-disable-next-line no-param-reassign
			forwardedRef.current = element;
		}
	}, [forwardedRef, element]);

	return [element, setElement];
};

export interface UsePopperProps extends Partial<PopperOptions> {
	/**
	 * The reference element that the popper will be attached to.
	 * @see https://popper.js.org/docs/v2/constructors/#createpopper
	 */
	reference?: Element | VirtualElement | null;
	popper?: HTMLElement | null;
	children?: React.ReactNode;
}

export const usePopper = ({
	reference,
	popper,
	children,
	placement = 'auto',
	modifiers,
	strategy = 'absolute',
	onFirstUpdate,
}: UsePopperProps): React.MutableRefObject<PopperInstance | null> => {
	const instance = useRef<PopperInstance | null>(null);
	const prevOptions = useRef<PopperOptions>({
		placement, modifiers: modifiers || [], strategy, onFirstUpdate,
	});

	// memoize the options, only updating when Popper.js options props change
	const options = useMemo(() => {
		const newOptions = {
			placement, modifiers: modifiers || [], strategy, onFirstUpdate,
		};
		if (isEqual(prevOptions.current, newOptions)) {
			return prevOptions.current || newOptions;
		}
		prevOptions.current = newOptions;
		return newOptions;
	}, [placement, modifiers, strategy, onFirstUpdate]);

	// create the popper instance
	useLayoutEffect(() => {
		let popperInstance: PopperInstance;

		if (reference && popper) {
			popperInstance = createPopper(reference, popper, options);
			instance.current = popperInstance;
		}

		return (): void => {
			if (popperInstance) {
				popperInstance.destroy();
				instance.current = null;
			}
		};
	// only update when reference or popper change.
	// options changes should trigger setOptions() in the options layout effect
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reference, popper]);

	// update options when they change
	useLayoutEffect(() => {
		if (instance.current) {
			instance.current.setOptions(options);
		}
	}, [options]);

	// update the instance when children change to ensure the popper resizes
	useLayoutEffect(() => {
		if (instance.current) instance.current.update();
	}, [instance, children]);

	return instance;
};

export const useTriggers = ({
	reference, tooltip, trigger, isOpen, delay = 350,
}: {
	reference?: Element | VirtualElement | null;
	tooltip?: HTMLElement | null;
	trigger: string;
	isOpen: boolean;
	delay?: number;
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
		}, delay);
	};

	// click handlers
	const docKeydownHandler = (e: KeyboardEvent): void => {
		if (e.key === 'Escape') hide();
	};
	const docClickHandler = (e: MouseEvent): void => {
		const clickPath = e.composedPath();
		const tooltipClick = clickPath.some((el) => {
			if (el instanceof Element) {
				return el.getAttribute('role') === 'tooltip';
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
		if (reference && (reference instanceof HTMLElement || reference instanceof SVGElement)) {
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
				if (tooltip) {
					tooltip.addEventListener('pointerleave', delayedHide);
				}
			}

			if (tooltip) {
				tooltip.addEventListener('pointerenter', clearTimer);
			}
		}

		return (): void => {
			if (reference && (reference instanceof HTMLElement || reference instanceof SVGElement)) {
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

				if (tooltip) {
					tooltip.removeEventListener('pointerenter', clearTimer);
					tooltip.removeEventListener('pointerleave', delayedHide);
				}
			}
		};
	}, [reference, tooltip, trigger]);

	return open;
};
