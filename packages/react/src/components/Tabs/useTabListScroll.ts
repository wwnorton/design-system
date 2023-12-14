import { useCallback, useState } from 'react';

const DEFAULT_SCROLL_DELTA = 100;

function isAtMaxScroll(el: HTMLDivElement) {
	return el.scrollWidth - el.scrollLeft <= el.clientWidth;
}

function isAtMinScroll(el: HTMLDivElement) {
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
		setAtMinScroll(isAtMinScroll(div));
		setAtMaxScroll(isAtMaxScroll(div));
	}, []);

	const moveLeft = useCallback(() => {
		if (!ref.current) {
			return;
		}

		if (atMinScroll) {
			return;
		}

		// eslint-disable-next-line no-param-reassign
		ref.current.scrollLeft -= scrollDelta;

		updateState(ref.current);
	}, [ref, atMinScroll, scrollDelta, updateState]);

	const moveRight = useCallback(() => {
		if (!ref.current) {
			return;
		}

		if (atMaxScroll) {
			return;
		}

		// eslint-disable-next-line no-param-reassign
		ref.current.scrollLeft += scrollDelta;

		updateState(ref.current);
	}, [ref, scrollDelta, updateState, atMaxScroll]);

	return {
		moveLeft,
		moveRight,
		atMinScroll,
		atMaxScroll,
	};
}
