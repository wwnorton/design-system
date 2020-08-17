import { useEffect, useState } from 'react';

/**
 * Use a forwarded ref. Takes the ref provided by `React.forwardRef` and returns
 * a `React.setState` [value, function] tuple that will keep the ref up to date.
 */
export const useForwardedRef = <T>(
	forwardedRef?: React.Ref<T>,
): [T | null, React.Dispatch<React.SetStateAction<T | null>>] => {
	const [element, setElement] = useState<T | null>(null);

	useEffect(() => {
		if (!forwardedRef) return;

		if (typeof forwardedRef === 'function') {
			forwardedRef(element);
		} else {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			// eslint-disable-next-line no-param-reassign
			forwardedRef.current = element;
		}
	}, [forwardedRef, element]);

	return [element, setElement];
};
