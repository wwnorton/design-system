import React, {
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { SortableValue } from '../types';

export interface SortingHeaderData {
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
	/**
	 * 0 - descending, 1 - default, 2 - ascending
	 */
	direction: number;
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
}

function defaultSorter(a: SortableValue, b: SortableValue): number {
	if (a < b) {
		return -1;
	}
	if (a > b) {
		return 1;
	}
	return 0;
}

export const SortingContext = React.createContext<SortingState | null>(null);

export const SortingProvider = ({ children }: { children?: ReactNode }) => {
	const [data, setData] = useState<SortingTableData>({
		colId: '',
		direction: 1,
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

	useEffect(() => {
		console.log('Data updated', data);
	}, [data]);

	const onSort = useCallback(
		(colId: string) => {
			setData((prev) => {
				let newDirection = 2;
				if (colId === prev.colId) {
					newDirection = (prev.direction + 1) % 3;
				}

				if (newDirection === 1) {
					return {
						...prev,
						direction: newDirection,
						colId,
						rows: data.rows.toSorted((a, b) => a.order - b.order),
					};
				}

				const idx = prev.headers.findIndex((h) => h.colId === colId);
				if (idx === -1) {
					console.warn(`Column ${colId} not found`);
					return prev;
				}

				const dirMultiplier = newDirection === 0 ? -1 : 1;
				const sorter = prev.headers[idx].sorter || defaultSorter;

				const newRows = data.rows.toSorted((a, b) => {
					return sorter(a.cells[idx].value, b.cells[idx].value) * dirMultiplier;
				});

				return {
					...prev,
					direction: newDirection,
					colId,
					rows: newRows,
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

	const state: SortingState = useMemo(() => {
		return {
			data,
			registerHeader,
			registerRow,
			registerCell,
			onSort,
			getDirection,
		};
	}, [data, registerHeader, registerRow, registerCell, onSort, getDirection]);

	return <SortingContext.Provider value={state}>{children}</SortingContext.Provider>;
};

export function useSortingState(): SortingState | null {
	return useContext(SortingContext);
}
