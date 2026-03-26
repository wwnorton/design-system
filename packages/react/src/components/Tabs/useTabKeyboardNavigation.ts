import React, { useEffect } from 'react';
import { TabKeyboardNavigation } from './TabKeyboardNavigation';

export function useTabKeyboardNavigation(tabListRef: React.RefObject<HTMLElement | null>) {
	useEffect(() => {
		const { current } = tabListRef;
		if (!current) {
			return () => {};
		}

		const keyNav = new TabKeyboardNavigation(current);
		keyNav.attachListener();

		return () => {
			keyNav.detachListener();
		};
	}, [tabListRef]);
}
