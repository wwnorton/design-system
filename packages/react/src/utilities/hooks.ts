/* eslint-disable import/prefer-default-export */
import { useState } from 'react';

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
