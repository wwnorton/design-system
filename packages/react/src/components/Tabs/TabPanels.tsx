import React from 'react';
import { TabPanelProps } from './types';
import { TabPanelsDescendantsProvider, useTabPanelsDescendants } from './context';

export const TabPanels = ({ children }: TabPanelProps) => {
	const descendants = useTabPanelsDescendants();
	return (
		<TabPanelsDescendantsProvider value={descendants}>
			<div className="nds-tab-panels-container">{children}</div>
		</TabPanelsDescendantsProvider>
	);
};
