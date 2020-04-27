import { useEffect, useRef, useState } from 'react';
import { mergeRefs } from './helpers';

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

export const useForwardedRef = <T>(forwardedRef?: React.Ref<T>): React.RefObject<T> => {
	const innerRef = useRef<T>(null);

	useEffect(() => {
		mergeRefs(innerRef, forwardedRef);
	}, [forwardedRef]);

	return innerRef;
};
