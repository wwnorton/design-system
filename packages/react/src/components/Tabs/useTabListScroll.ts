import { useCallback, useEffect, useState } from 'react';

const DEFAULT_SCROLL_DELTA = 100;
const DEFAULT_CORRECTION_DELTA = 100;

function isScrolledToBottom(el: HTMLDivElement) {
	return el.scrollWidth - el.scrollLeft <= el.clientWidth;
}

function isScrolledToTop(el: HTMLDivElement) {
	return el.scrollLeft === 0;
}
/**
 * This hook corrects the scroll position when the "Next" scroll button gets unmounted.
 */
function useScrollCorrection(
	ref: React.RefObject<HTMLDivElement>,
	atMaxScroll: boolean,
	correctionDelta = DEFAULT_CORRECTION_DELTA,
) {
	useEffect(() => {
		const { current } = ref;
		if (!current) {
			return () => { };
		}

		const resizeObserver = new ResizeObserver((entries) => {
			entries.forEach(() => {
				if (atMaxScroll) {
					// eslint-disable-next-line no-param-reassign
					current.scrollLeft += correctionDelta;
				}
			});
		});

		resizeObserver.observe(current);

		return () => {
			resizeObserver.disconnect();
		};
	}, [ref, atMaxScroll, correctionDelta]);
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

	useScrollCorrection(ref, atMaxScroll);

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
