import React from 'react';
import { TabPanelProps } from './types';
import {
	useTabId, useTabPanelId, useTabPanelsDescendant, useTabsState,
} from './context';

export const TabPanel = ({ children }: TabPanelProps) => {
	const { index, register } = useTabPanelsDescendant();
	const { selectedTabIndex } = useTabsState();

	const tabId = useTabId(index);
	const tabPanelId = useTabPanelId(index);

	const isHidden = index !== selectedTabIndex;

	return (
		<div
			ref={register}
			role="tabpanel"
			hidden={isHidden}
			id={tabPanelId}
			aria-labelledby={tabId}
		>
			{children}
		</div>
	);
};
