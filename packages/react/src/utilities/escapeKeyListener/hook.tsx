import React from 'react';

/**
 * Custom hook for handling Escape key press
 */
export function useEscapeKeyListener(callback: () => void) {
	React.useEffect(() => {
		const handleEscapeKeyPress = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				callback();
			}
		};

		document.addEventListener('keydown', handleEscapeKeyPress);

		return () => {
			document.removeEventListener('keydown', handleEscapeKeyPress);
		};
	}, [callback]);
}
