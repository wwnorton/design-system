import {
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
import uniqueId from 'lodash.uniqueid';
import isEqual from 'react-fast-compare';

export const useForwardedRef = <T>(forwardedRef?: React.Ref<T>): React.RefObject<T> => {
	const innerRef = useRef<T>(null);

	useEffect(() => {
		if (!forwardedRef) return;

		if (typeof forwardedRef === 'function') {
			forwardedRef(innerRef.current);
		} else {
			// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
			// @ts-ignore
			// eslint-disable-next-line no-param-reassign
			forwardedRef.current = innerRef.current;
		}
	}, [forwardedRef]);

	return innerRef;
};

export interface UsePopperProps extends PopperOptions {
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
	modifiers = [],
	strategy = 'absolute',
	onFirstUpdate,
}: UsePopperProps): React.MutableRefObject<PopperInstance | null> => {
	const instance = useRef<PopperInstance | null>(null);
	const prevOptions = useRef<PopperOptions>({
		placement, modifiers, strategy, onFirstUpdate,
	});

	// memoize the options, only updating when Popper.js options props change
	const options = useMemo(() => {
		const newOptions = {
			placement, modifiers, strategy, onFirstUpdate,
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

export const useTriggers = ({ reference, trigger, isOpen }: {
	reference?: Element | VirtualElement | null;
	trigger: string;
	isOpen: boolean;
}): boolean => {
	if (trigger.includes('manual')) return isOpen;
	const [open, setOpen] = useState(isOpen);

	const show = (): void => setOpen(true);
	const hide = (): void => setOpen(false);

	// focus & focusin handlers
	const focusHandler = (): void => {
		if (trigger.includes('focus')) show();
	};
	const focusinHandler = (): void => {
		if (trigger.includes('focusin')) show();
	};
	const blurHandler = (): void => {
		if (trigger.includes('focus') || trigger.includes('focusin')) hide();
	};

	// mouseenter & pointerenter handlers
	const pointerenterHandler = (): void => {
		if (trigger.includes('mouseenter') || trigger.includes('pointerenter')) show();
	};
	const pointerleaveHandler = (): void => {
		if (trigger.includes('mouseenter') || trigger.includes('pointerenter')) hide();
	};

	// click handlers
	const docKeydownHandler = (e: KeyboardEvent): void => {
		if (trigger.includes('click') && e.key === 'Escape') hide();
	};
	const docClickHandler = (e: MouseEvent): void => {
		if (trigger.includes('click')) {
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
		}
	};
	const clickHandler = (): void => {
		if (trigger.includes('click')) setOpen(!open);
	};
	const keydownHandler = (e: KeyboardEvent): void => {
		if (trigger.includes('click')) {
			if (e.key === 'Enter') setOpen(!open);
			if (e.key === ' ') e.preventDefault();
		}
	};
	const keyupHandler = (e: KeyboardEvent): void => {
		if (trigger.includes('click') && e.key === ' ') setOpen(!open);
	};

	useLayoutEffect(() => {
		if (!reference || !(reference instanceof HTMLElement)) {
			return (): void => { /* nothing to clean up */ };
		}

		// click
		reference.addEventListener('click', clickHandler);
		reference.addEventListener('keydown', keydownHandler);
		reference.addEventListener('keyup', keyupHandler);
		document.addEventListener('click', docClickHandler);
		document.addEventListener('keydown', docKeydownHandler);

		// focus & focusin
		reference.addEventListener('focus', focusHandler);
		reference.addEventListener('focusin', focusinHandler);
		reference.addEventListener('blur', blurHandler);

		// mouseenter & pointerenter
		reference.addEventListener('pointerenter', pointerenterHandler);
		reference.addEventListener('pointerleave', pointerleaveHandler);

		return (): void => {
			// click
			reference.removeEventListener('click', clickHandler);
			reference.removeEventListener('keydown', keydownHandler);
			reference.removeEventListener('keyup', keyupHandler);
			document.removeEventListener('click', docClickHandler);
			document.removeEventListener('keydown', docKeydownHandler);

			// focus & focusin
			reference.removeEventListener('focus', focusHandler);
			reference.removeEventListener('focusin', focusinHandler);
			reference.removeEventListener('blur', blurHandler);

			// mouseenter & pointerenter
			reference.removeEventListener('pointerenter', pointerenterHandler);
			reference.removeEventListener('pointerleave', pointerleaveHandler);
		};
	}, [reference, open]);

	return open;
};

interface TooltipRefHandlers<T> {
	onBlur: (e: React.FocusEvent<T>) => void;
	onFocus: (e: React.FocusEvent<T>) => void;
	onPointerEnter: (e: React.PointerEvent<T>) => void;
	onPointerLeave: (e: React.PointerEvent<T>) => void;
}
interface UseTooltipProps<T> extends Partial<TooltipRefHandlers<T>> {
	isOpen?: boolean;
	id?: string;
	asLabel?: boolean;
}
interface UseTooltipReturn<T> {
	id: string;
	isOpen: boolean;
	show: () => void;
	hide: () => void;
	referenceProps: TooltipRefHandlers<T> & {
		'aria-labelledby'?: string;
		'aria-describedby'?: string;
	};
}

export const useTooltip = <T = HTMLElement>({
	isOpen = false,
	id = uniqueId('tooltip-'),
	asLabel = false,
	onBlur,
	onFocus,
	onPointerEnter,
	onPointerLeave,
}: UseTooltipProps<T> = {}): UseTooltipReturn<T> => {
	const { current: returnId } = useRef(id);
	const [open, setOpen] = useState(isOpen);
	const show = (): void => setOpen(true);
	const hide = (): void => setOpen(false);

	return {
		id: returnId,
		isOpen: open,
		show,
		hide,
		referenceProps: {
			[(asLabel) ? 'aria-labelledby' : 'aria-describedby']: (open) ? returnId : undefined,
			onBlur: (e): void => {
				if (onBlur) onBlur(e);
				hide();
			},
			onFocus: (e): void => {
				if (onFocus) onFocus(e);
				show();
			},
			onPointerEnter: (e): void => {
				if (onPointerEnter) onPointerEnter(e);
				show();
			},
			onPointerLeave: (e): void => {
				if (onPointerLeave) onPointerLeave(e);
				hide();
			},
		},
	};
};
