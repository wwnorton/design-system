import React, { ReactNode, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { SortableValue, SortDirection } from '../types';
import { sortRows } from './sortRows';

export interface SortingHeaderData {
	// TODO: can we rely on the `HeadersContext` for this?
	colId: string;
	sorter?: (a: SortableValue, b: SortableValue) => number;
}

export interface SortingCellData {
	value: SortableValue;
}

export interface SortingRowData {
	id: string;
	/**
	 * This number is used to determine the "natural" order of the rows
	 * before any sorting is applied.
	 */
	order: number;
	cells: SortingCellData[];
}

export interface SortingTableData {
	colId: string;
	direction: SortDirection;
	headers: SortingHeaderData[];
	rows: SortingRowData[];
}

export interface SortingState {
	data: SortingTableData;
	registerHeader: (header: SortingHeaderData) => void;
	registerCell: (cell: SortingCellData) => void;
	registerRow: (id: string) => void;
	getDirection(colId: string): number;
	onSort: (colId: string) => void;
	setSort: (colId: number, direction: SortDirection) => void;
}

export const SortingContext = React.createContext<SortingState | null>(null);

export const SortingProvider = ({ children }: { children?: ReactNode }) => {
	const [data, setData] = useState<SortingTableData>({
		colId: '',
		direction: SortDirection.NONE,
		headers: [],
		rows: [],
	});

	const tmpCells = useRef<Set<SortingCellData>>(new Set());

	const registerHeader: SortingState['registerHeader'] = useCallback((header) => {
		setData((prevState) => {
			if (prevState.headers.some((h) => h.colId === header.colId)) {
				return prevState;
			}

			prevState.headers.push(header);

			return {
				...prevState,
				headers: prevState.headers,
			};
		});
	}, []);

	const registerCell: SortingState['registerCell'] = useCallback((cell) => {
		tmpCells.current.add(cell);
	}, []);

	const registerRow: SortingState['registerRow'] = useCallback((id) => {
		const cellsToPush = [...tmpCells.current];
		tmpCells.current = new Set();

		setData((prevState) => {
			if (cellsToPush.length !== prevState.headers.length) {
				console.warn(`Cells count does not match headers count for row ${prevState.rows.length}`);
			}

			if (prevState.rows.some((r) => r.id === id)) {
				return prevState;
			}

			const newRows = [...prevState.rows];
			newRows.push({
				id,
				cells: cellsToPush,
				order: prevState.rows.length,
			});

			return {
				...prevState,
				rows: newRows,
			};
		});
	}, []);

	const onSort = useCallback(
		(colId: string) => {
			setData((prev) => {
				let newDirection = SortDirection.ASC;
				if (colId === prev.colId) {
					newDirection = (prev.direction + 1) % 3;
				}

				const colIdx = data.headers.findIndex((h) => h.colId === `${colId}`);
				if (colIdx === -1) {
					console.warn(`Column ${colId} not found`);
					return prev;
				}

				return {
					...prev,
					direction: newDirection,
					colId,
					rows: sortRows({
						colIdx,
						rows: data.rows,
						direction: newDirection,
						headers: data.headers,
					}),
				};
			});
		},
		[data],
	);

	const getDirection = useCallback(
		(colId: string) => {
			return data.colId === colId ? data.direction : 1;
		},
		[data],
	);

	const setSort: SortingState['setSort'] = useCallback(
		(colIdx, direction) => {
			setData((prev) => {
				const colId = data.headers[colIdx]?.colId;
				if (!colId) {
					console.warn(`Column ${colIdx} not found`);
					return prev;
				}

				return {
					...prev,
					direction,
					colId,
					rows: sortRows({
						colIdx,
						rows: data.rows,
						headers: data.headers,
						direction,
					}),
				};
			});
		},
		[data],
	);

	const state: SortingState = useMemo(() => {
		return {
			data,
			registerHeader,
			registerRow,
			registerCell,
			onSort,
			setSort,
			getDirection,
		};
	}, [data, registerHeader, registerRow, registerCell, onSort, setSort, getDirection]);

	return <SortingContext.Provider value={state}>{children}</SortingContext.Provider>;
};

export function useSortingState(): SortingState | null {
	return useContext(SortingContext);
}
