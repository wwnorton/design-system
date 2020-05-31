import { useEffect, useRef } from 'react';

export const useForwardedRef = <T>(forwardedRef?: React.Ref<T>): React.RefObject<T> => {
	const innerRef = useRef<T>(null);

	useEffect(() => {
		if (!forwardedRef) return;

		if (typeof forwardedRef === 'function') {
			forwardedRef(innerRef.current);
		} else {
			// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
			// @ts-ignore
			// eslint-disable-next-line no-param-reassign
			forwardedRef.current = innerRef.current;
		}
	}, [forwardedRef]);

	return innerRef;
};
