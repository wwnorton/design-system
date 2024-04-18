import React, { useState, useMemo, ChangeEvent } from 'react';
// eslint-disable-next-line import/no-cycle
import { TableSections, Choices, TableSetup, TableState } from './types';

export const TableContext = React.createContext<TableState | undefined>(undefined);

export function useTableState() {
	const result = React.useContext(TableContext);
	if (!result) {
		throw new Error('TableContext not initialized');
	}

	return result;
}

export function useInitTableState({ selectable, onSelect, sortable }: TableSetup): TableState {
	const [choices, setChoices] = useState<Choices>({});
	const [sections, setSections] = useState<TableSections>({});

	const onSelectedAll = React.useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setChoices((old: Choices) => ({
			...old,
			...Object.fromEntries(Object.entries(old).map(([key]) => [key, event.target.checked])),
		}));
	}, []);

	const onSelected = React.useCallback(
		(id: string, checked: boolean) => {
			setChoices((old: Choices) => ({ ...old, [id]: checked }));
			onSelect?.();
		},
		[onSelect],
	);

	const onToggleSection = React.useCallback((sectionId?: string) => {
		if (!sectionId) return;
		setSections((old: TableSections) => ({ ...old, [sectionId]: !old[sectionId] }));
	}, []);

	const isSelected = React.useCallback(
		(key: string): boolean => choices && choices[key],
		[choices],
	);

	const isSectionExpanded = React.useCallback(
		(sectionId: string): boolean => !sections[sectionId],
		[sections],
	);

	const isSelectedAll = React.useCallback(
		(): boolean => choices && Object.values(choices).every((value) => value === true),
		[choices],
	);

	const registerId = React.useCallback((key: string, value = false) => {
		setChoices((old: Choices) => ({ ...old, [key]: value }));
	}, []);

	const registerSection = React.useCallback((key: string, isOpen = false) => {
		setSections((old: TableSections) => ({ ...old, [key]: isOpen }));
	}, []);

	const tableState = React.useMemo(
		() => ({
			selectable,
			sortable,
			onSelect,
			selected: choices,
			sections,
			onSelected,
			onSelectedAll,
			isSelected,
			isSelectedAll,
			isSectionExpanded,
			onToggleSection,
			registerId,
			registerSection,
		}),
		[
			selectable,
			sortable,
			onSelect,
			choices,
			sections,
			onSelected,
			onSelectedAll,
			isSelected,
			isSelectedAll,
			isSectionExpanded,
			onToggleSection,
			registerId,
			registerSection,
		],
	);

	return tableState;
}
