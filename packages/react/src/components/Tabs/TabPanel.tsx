import React, { useEffect } from 'react';
import { TabPanelProps } from './types';
import {
	useTabId, useTabPanelId, useTabPanelsDescendant, useTabsState,
} from './context';
import { updateTabPanelTabIndex } from './utils';

export const TabPanel = ({ children }: TabPanelProps) => {
	const { index, register } = useTabPanelsDescendant();
	const { selectedTabIndex } = useTabsState();

	const tabId = useTabId(index);
	const tabPanelId = useTabPanelId(index);

	const isSelected = index === selectedTabIndex;

	useEffect(() => {
		if (isSelected) {
			updateTabPanelTabIndex(tabPanelId);
		}
	}, [isSelected, tabPanelId]);

	return (
		<div
			ref={register}
			role="tabpanel"
			hidden={!isSelected}
			id={tabPanelId}
			aria-labelledby={tabId}
		>
			{children}
		</div>
	);
};
