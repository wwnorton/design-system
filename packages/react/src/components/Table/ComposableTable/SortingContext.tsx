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
	sorter?: (a: SortableValue, b: SortableValue) => number;
}

export interface SortingCellData {
	value: SortableValue;
}

export interface SortingRowData {
	id: string;
	cells: SortingCellData[];
}

export interface SortingTableData {
	headers: Set<SortingHeaderData>;
	rows: SortingRowData[];
}

export interface SortingState {
	data: SortingTableData;
	registerHeader: (header: SortingHeaderData) => void;
	registerCell: (cell: SortingCellData) => void;
	registerRow: (id: string) => void;
}

export const SortingContext = React.createContext<SortingState>({
	data: {
		headers: new Set(),
		rows: [],
	},
	registerHeader: () => {},
	registerCell: () => {},
	registerRow: () => {},
});

export const SortingProvider = ({ children }: { children?: ReactNode }) => {
	const [data, setData] = useState<SortingTableData>({
		headers: new Set(),
		rows: [],
	});

	const tmpCells = useRef<Set<SortingCellData>>(new Set());

	const registerHeader: SortingState['registerHeader'] = useCallback((header) => {
		setData((prevState) => {
			if (prevState.headers.has(header)) {
				return prevState;
			}

			const newHeaders = new Set(prevState.headers);
			newHeaders.add(header);

			return {
				...prevState,
				headers: newHeaders,
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
			if (cellsToPush.length !== prevState.headers.size) {
				console.warn(`Cells count does not match headers count for row ${prevState.rows.length}`);
			}

			if (prevState.rows.some((r) => r.id === id)) {
				return prevState;
			}

			const newRows = [...prevState.rows];
			newRows.push({
				id,
				cells: cellsToPush,
			});

			return {
				...prevState,
				rows: newRows,
			};
		});
	}, []);

	const state: SortingState = useMemo(() => {
		return {
			data,
			registerHeader,
			registerRow,
			registerCell,
		};
	}, [data, registerCell, registerHeader, registerRow]);

	return <SortingContext.Provider value={state}>{children}</SortingContext.Provider>;
};

export function useSortingState(): SortingState | undefined {
	try {
		return useContext(SortingContext);
	} catch (e) {
		return undefined;
	}
}
