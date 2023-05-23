import React, {
	useMemo, useState,
} from 'react';
import {
	CommonTabsProps,
	ControlledTabsProps, TabsState, UncontrolledTabsProps,
} from './types';
import { useId } from '../../utilities';

export const TabsContext = React.createContext<TabsState | null>(null);

function useInitCommonTabsState({
	align,
	idPrefix: userSetIdPrefix,
	variant,
}: CommonTabsProps): Omit<TabsState, 'selectedTabIndex' | 'setSelectedTabIndex'> {
	const generatedIdPrefix = useId() as string;
	const idPrefix = userSetIdPrefix || generatedIdPrefix;

	return useMemo(() => ({
		idPrefix,
		align: align || 'left',
		variant: variant || 'contained',
	}), [align, idPrefix, variant]);
}

export function useInitUncontrolledTabsState({
	defaultSelectedIndex,
	...rest
}: UncontrolledTabsProps): TabsState {
	const commonState = useInitCommonTabsState(rest);

	const [selected, setSelected] = useState(defaultSelectedIndex || 0);

	const state: TabsState = useMemo(() => ({
		...commonState,
		selectedTabIndex: selected,
		setSelectedTabIndex: setSelected,
	}), [commonState, selected, setSelected]);

	return state;
}

export function useInitControlledTabsState({
	onChange,
	selectedIndex,
	...rest
}: ControlledTabsProps): TabsState {
	const commonState = useInitCommonTabsState(rest);

	const state: TabsState = useMemo(() => ({
		...commonState,
		selectedTabIndex: selectedIndex,
		setSelectedTabIndex: onChange,
	}), [commonState, onChange, selectedIndex]);

	return state;
}

export function useTabsState() {
	const result = React.useContext(TabsContext);
	if (!result) {
		throw new Error('TabsContext not initialized');
	}

	return result;
}

export function useTabId(index: number) {
	const { idPrefix } = useTabsState();
	return `${idPrefix}-tab-${index}`;
}

export function useTabPanelId(index: number) {
	const { idPrefix } = useTabsState();
	return `${idPrefix}-tab-panel-${index}`;
}
