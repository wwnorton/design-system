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
