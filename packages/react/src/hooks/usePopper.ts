import { useLayoutEffect, useMemo, useRef } from 'react';
import isEqual from 'react-fast-compare';
import {
	createPopper,
	Instance as PopperInstance,
	Options as PopperOptions,
	VirtualElement,
} from '@popperjs/core';

export const usePopper = ({
	reference,
	popper,
	children,
	placement = 'auto',
	modifiers,
	strategy = 'absolute',
	onFirstUpdate,
}: Partial<PopperOptions> & {
	/**
	 * The reference element that the popper will be attached to.
	 * @see https://popper.js.org/docs/v2/constructors/#createpopper
	 */
	reference?: Element | VirtualElement | null;
	/**
	 * The popper element, which will be attached to the reference element.
	 * @see https://popper.js.org/docs/v2/constructors/#createpopper
	 */
	popper?: HTMLElement | null;
	/** The contents of the popper. */
	children?: React.ReactNode;
}): React.MutableRefObject<PopperInstance | null> => {
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
