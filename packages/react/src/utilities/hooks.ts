/* eslint-disable import/prefer-default-export */
import { useEffect, useRef, useState } from 'react';

interface UseActiveReturn {
	active: boolean;
	activate: () => void;
	deactivate: () => void;
}

export const useActive = (initial: boolean): UseActiveReturn => {
	const [active, setActive] = useState(initial);

	return {
		active,
		activate: (): void => setActive(true),
		deactivate: (): void => setActive(false),
	};
};

export const useForwardedRef = <T>(forwardedRef: React.Ref<T>): React.RefObject<T> => {
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
	});

	return innerRef;
};
