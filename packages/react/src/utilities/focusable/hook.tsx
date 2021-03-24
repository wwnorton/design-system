import { useState } from 'react';
import { getFocusable } from './constants';
import { UseFocusableReturn } from './types';

export const useFocusable = (
	/**
	 * An optional container where focusable elements should be queried. Default
	 * is the whole `document`.
	 */
	container: HTMLElement | Document | ShadowRoot | null = document,
): UseFocusableReturn => {
	const [focusable, setFocusable] = useState(getFocusable(container));

	return {
		current: (focusable) ? Array.from(focusable) : [],
		update: () => setFocusable(getFocusable(container)),
	};
};
