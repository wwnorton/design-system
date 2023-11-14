import { useCallback, useState } from 'react';

const DEFAULT_SCROLL_DELTA = 100;

function isScrolledToBottom(el: HTMLDivElement) {
	return el.scrollWidth - el.scrollLeft <= el.clientWidth;
}

function isScrolledToTop(el: HTMLDivElement) {
	return el.scrollLeft === 0;
}

/**
 * This hook controls the state of the Tabs scroll.
 */
export function useTabListScroll(
	ref: React.RefObject<HTMLDivElement>,
	scrollDelta = DEFAULT_SCROLL_DELTA,
) {
	const [atMinScroll, setAtMinScroll] = useState(true);
	const [atMaxScroll, setAtMaxScroll] = useState(false);

	const updateState = useCallback((div: HTMLDivElement) => {
		setAtMinScroll(isScrolledToTop(div));
		setAtMaxScroll(isScrolledToBottom(div));
	}, []);

	const moveLeft = useCallback(() => {
		if (!ref.current) {
			return;
		}

		// eslint-disable-next-line no-param-reassign
		ref.current.scrollLeft -= scrollDelta;

		updateState(ref.current);
	}, [ref, scrollDelta, updateState]);

	const moveRight = useCallback(() => {
		if (!ref.current) {
			return;
		}

		// eslint-disable-next-line no-param-reassign
		ref.current.scrollLeft += scrollDelta;

		updateState(ref.current);
	}, [ref, scrollDelta, updateState]);

	return {
		moveLeft,
		moveRight,
		atMinScroll,
		atMaxScroll,
	};
}
