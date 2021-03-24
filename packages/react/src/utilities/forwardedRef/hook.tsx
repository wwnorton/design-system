import React, { useEffect, useState } from 'react';

/**
 * Use a forwarded ref. Converts any type of ref into a value and a function to
 * update it. The returned tuple will be identical to the one returned by `useState`.
 */
export function useForwardedRef<T>(
	forwardedRef?: React.Ref<T>,
): [T | null, React.Dispatch<React.SetStateAction<T | null>>] {
	const [ref, setRef] = useState<T | null>(null);

	useEffect(() => {
		if (!forwardedRef) return;

		if (typeof forwardedRef === 'function') {
			forwardedRef(ref);
		} else {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			// eslint-disable-next-line no-param-reassign
			forwardedRef.current = ref;
		}
	}, [forwardedRef, ref]);

	return [ref, setRef];
}
