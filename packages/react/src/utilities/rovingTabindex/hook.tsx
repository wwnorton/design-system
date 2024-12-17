import { useCallback, useEffect } from 'react';
import { useStepper } from '../stepper';
import { RovingTabindex, RovingTabindexOptions } from './types';

/**
 * Create a roving tabindex state, a dispatch function to update it, and props
 * for the related container and children.
 *
 * Reference:
 * - [APG - Keyboard Navigation Inside Components](https://www.w3.org/TR/wai-aria-practices-1.2/#kbd_general_within).
 * - [MDN - Keyboard-navigable JavaScript widgets](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets).
 */
export const useRovingTabindex = <Container extends HTMLElement | null, Child extends HTMLElement>({
	autofocus,
	container,
	disabledItems,
	initialIndex = 0,
	nextKeys = ['ArrowDown', 'ArrowRight'],
	prevKeys = ['ArrowUp', 'ArrowLeft'],
	resetOnExit,
	size,
	wrap,
}: RovingTabindexOptions<Container, Child>): RovingTabindex<Container, Child> => {
	const [state, dispatch] = useStepper(size, { initialIndex, wrap });

	useEffect(() => {
		const { current, direction } = state;
		if (disabledItems && disabledItems.has(current)) {
			switch (direction) {
				case -1: {
					if (!wrap && current === 0) {
						dispatch({ type: 'INCREMENT' });
					} else {
						dispatch({ type: 'DECREMENT' });
					}
					break;
				}
				case 1: {
					if (!wrap && current === size - 1) {
						dispatch({ type: 'DECREMENT' });
					} else {
						dispatch({ type: 'INCREMENT' });
					}
					break;
				}
				default: {
					if (disabledItems.size < size) {
						dispatch({ type: 'INCREMENT' });
					}
				}
			}
		}
	}, [disabledItems, dispatch, size, state, wrap]);

	const onKeyDown: React.KeyboardEventHandler<NonNullable<Container>> = useCallback(
		(e) => {
			if (!size) return;
			if ([...nextKeys, ...prevKeys, 'Home', 'End'].includes(e.key)) {
				e.preventDefault();
			}

			if (nextKeys.includes(e.key)) dispatch({ type: 'INCREMENT' });
			if (prevKeys.includes(e.key)) dispatch({ type: 'DECREMENT' });
			if (e.key === 'End') dispatch({ type: 'GOTO', payload: size - 1 });
			if (e.key === 'Home') dispatch({ type: 'GOTO', payload: 0 });
		},
		[dispatch, nextKeys, prevKeys, size],
	);

	const onBlur: React.FocusEventHandler<NonNullable<Container>> = useCallback(
		({ relatedTarget }): void => {
			if (container) {
				if (relatedTarget instanceof Node && container.contains(relatedTarget)) return;
				if (resetOnExit) {
					dispatch({ type: 'GOTO', payload: initialIndex });
				}
			}
		},
		[container, dispatch, initialIndex, resetOnExit],
	);

	const createRef = useCallback(
		(i: number) => (el: Child | null) => {
			if (!el || !container) {
				return;
			}

			const focusWithin = container.contains(document.activeElement);
			const hasTheFocusAlready = document.activeElement === el;
			const shouldFocus = focusWithin || autofocus;

			if (state.current === i && shouldFocus && !hasTheFocusAlready) {
				el.focus();
			}
		},
		[autofocus, container, state],
	);

	return {
		state,
		dispatch,
		containerProps: {
			onKeyDown,
			onBlur,
		},
		childProps: {
			createRef,
			tabIndex: (i) => (state.current === i ? 0 : -1),
		},
	};
};
