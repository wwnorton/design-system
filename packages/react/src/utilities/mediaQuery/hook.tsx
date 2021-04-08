import { useMemo, useState } from 'react';
import { useLayoutEffect } from '../isomorphicLayoutEffect';
import { canUseDOM } from '../environment';

/**
 * Use a CSS media query. The returned value will be `true` if the media query
 * matches, and `false` if it doesn't match or if `window.matchMedia` is unsupported.
 */
export const useMediaQuery = (query: string): boolean => {
	const queryList = useMemo(() => {
		if (canUseDOM && 'matchMedia' in window) {
			return window.matchMedia(query);
		}
		return { matches: false };
	}, [query]);

	const [matches, setMatches] = useState(queryList.matches);

	useLayoutEffect(() => {
		const changeHandler = (e: MediaQueryListEvent): void => {
			setMatches(e.matches);
		};

		if ('addEventListener' in queryList) {
			queryList.addEventListener('change', changeHandler);
		}

		return () => {
			if ('removeEventListener' in queryList) {
				queryList.removeEventListener('change', changeHandler);
			}
		};
	}, [queryList]);

	return matches;
};
