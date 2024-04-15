import React, { useState, ChangeEvent } from 'react';
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

	const onSelectedAll = (event: ChangeEvent<HTMLInputElement>) => {
		setChoices((old: Choices) => ({
			...old,
			...Object.fromEntries(Object.entries(old).map(([key]) => [key, event.target.checked])),
		}));
	};

	const onSelected = (id: string, checked: boolean) => {
		setChoices((old: Choices) => ({ ...old, [id]: checked }));
		onSelect?.();
	};

	const onToggleSection = (sectionId?: string) => {
		if (!sectionId) return;
		setSections((old: TableSections) => ({ ...old, [sectionId]: !old[sectionId] }));
	};

	const isSelected = (key: string): boolean => choices && choices[key];

	const isSectionExpanded = (sectionId: string): boolean => !sections[sectionId];

	const isSelectedAll = (): boolean =>
		choices && Object.values(choices).every((value) => value === true);

	const registerId = (key: string, value = false) => {
		setChoices((old: Choices) => ({ ...old, [key]: value }));
	};

	const registerSection = (key: string, isOpen = false) => {
		setSections((old: TableSections) => ({ ...old, [key]: isOpen }));
	};

	return {
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
	};
}
