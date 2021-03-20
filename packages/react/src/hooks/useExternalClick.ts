import { useEffect, useMemo } from 'react';

interface ExternalClickProps {
	/**
	 * The event target or targets that should not trigger the callback when clicked.
	 * Only valid [EventTargets](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
	 * will be used.
	 */
	externalTo?: EventTarget | EventTarget[];
	/**
	 * A callback function that triggers when something other than the first
	 * parameter is clicked.
	 */
	onExternalClick?: () => void;
}

/**
 * A hook that triggers a callback function when something other than the specified
 * target(s) are clicked.
 */
export const useExternalClick = ({ externalTo, onExternalClick }: ExternalClickProps): void => {
	const excluded = useMemo(() => {
		if (Array.isArray(externalTo)) return externalTo;
		return [externalTo];
	}, [externalTo]);

	useEffect(() => {
		const documentClickHandler = (e: MouseEvent): void => {
			const clickPath = e.composedPath();
			if (excluded.some((el) => el && clickPath.includes(el))) return;
			if (onExternalClick) onExternalClick();
		};

		if (excluded.length) {
			document.addEventListener('click', documentClickHandler);
		}

		return () => {
			document.removeEventListener('click', documentClickHandler);
		};
	}, [excluded, onExternalClick]);
};
