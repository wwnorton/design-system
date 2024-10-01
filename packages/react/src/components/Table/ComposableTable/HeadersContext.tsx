import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { HEADER_NO_TITLE } from './constants';

export interface Header {
	colId: string;
	el: HTMLElement;
	text: string;
}

export interface HeadersState {
	headers: Header[];
	registerHeader: (colId: string, el: HTMLElement) => void;
}

export const HeadersContext = React.createContext<HeadersState>({
	headers: [],
	registerHeader: () => {},
});

/**
 * Registers the headers of the table.
 * This has been introduced to support rendering the text of the header alongside
 * the content of the Table Cells for XS breakpoints.
 */
export const HeadersContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [headers, setHeaders] = useState<Header[]>([]);

	const registerHeader: HeadersState['registerHeader'] = useCallback((colId, el) => {
		setHeaders((prev) => {
			if (prev.some((h) => h.el === el)) {
				// Already registered, we won't register again.
				// This shouldn't happen in the wild, but in strict + dev mode
				// Hooks are executed more than once.
				return prev;
			}

			return [
				...prev,
				{
					colId,
					el,
					text: el.textContent || HEADER_NO_TITLE,
				},
			];
		});
	}, []);

	const headersObj: HeadersState = useMemo(() => {
		return {
			headers,
			registerHeader,
		};
	}, [headers, registerHeader]);

	return <HeadersContext.Provider value={headersObj}>{children}</HeadersContext.Provider>;
};

/**
 * Returns the header text for the column identified with the given `colIdx`.
 * Returns empty string if not found.
 */
export function useHeaderFor(colIdx: number): string {
	return useContext(HeadersContext).headers[colIdx]?.text || '';
}

/**
 * Returns the `colIdx` (Column Index) that corresponds to the given
 * `colId`.
 * Returns `-1` if not found.
 */
export function useFindColIdx(): (colId: string) => number {
	const headers = useContext(HeadersContext);
	return useCallback(
		(colId) => {
			return headers.headers.findIndex((h) => h.colId === colId);
		},
		[headers.headers],
	);
}

/**
 * Returns the text context of the registered headers.
 */
export function useHeadersText(): string[] {
	return useContext(HeadersContext).headers.map((h) => h.text);
}

/**
 * Registers the header passed in `th`.
 */
export function useRegisterHeader(colId: string, th: React.RefObject<HTMLTableCellElement>): void {
	const headers = useContext(HeadersContext);

	useEffect(() => {
		if (!colId) {
			return;
		}

		const { current: thEl } = th;
		if (thEl) {
			headers.registerHeader(colId, thEl);
		}
		// We want to register the header only on mount, even if something changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}
