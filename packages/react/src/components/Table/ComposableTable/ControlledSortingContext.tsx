import React, { ReactNode, useCallback, useContext, useMemo } from 'react';
import { SortDirection } from '../types';
import { ControlledSortableComposableTableProps } from './types';
import { useFindColIdx } from './HeadersContext';
import { formatSortDirection } from '../utils/formatSortDirection';

export interface ControlledSortingState {
	onSort: (colIdentifier: string | number, direction: SortDirection | undefined) => void;
}

export const ControlledSortingContext = React.createContext<ControlledSortingState | null>(null);

export interface ControlledSortingProviderProps {
	onSort: ControlledSortableComposableTableProps['onSort'];
	children?: ReactNode;
}

export const ControlledSortingProvider = ({
	onSort: propOnSort,
	children,
}: ControlledSortingProviderProps) => {
	const findColIdx = useFindColIdx();

	const onSort: ControlledSortingState['onSort'] = useCallback(
		(colIdentifier, direction) => {
			let colIdx: number;
			if (typeof colIdentifier === 'string') {
				colIdx = findColIdx(colIdentifier);
				if (colIdx === -1) {
					console.warn(`Header with id ${colIdentifier} not found`);
					return;
				}
			} else {
				colIdx = colIdentifier;
			}

			propOnSort(colIdx, formatSortDirection(direction));
		},
		[findColIdx, propOnSort],
	);

	const state: ControlledSortingState = useMemo(() => {
		return { onSort };
	}, [onSort]);

	return (
		<ControlledSortingContext.Provider value={state}>{children}</ControlledSortingContext.Provider>
	);
};

export function useControlledOnSort(): ControlledSortingState['onSort'] | undefined {
	return useContext(ControlledSortingContext)?.onSort;
}
