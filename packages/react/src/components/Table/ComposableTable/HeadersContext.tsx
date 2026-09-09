import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

export interface Header {
	colId: string;
	el: HTMLElement;
	content: React.ReactNode;
	textValue: string;
}

interface HeaderToRegister {
	colId: string;
	el: HTMLElement;
	content: React.ReactNode;
	textValue?: string;
}

export interface HeadersState {
	headers: Header[];
	registerHeader: (header: HeaderToRegister) => void;
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

	const registerHeader: HeadersState['registerHeader'] = useCallback(
		({ colId, el, content, textValue }) => {
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
						content,
						textValue: textValue || el.textContent || '',
					},
				];
			});
		},
		[],
	);

	const headersObj: HeadersState = useMemo(() => {
		return {
			headers,
			registerHeader,
		};
	}, [headers, registerHeader]);

	return <HeadersContext.Provider value={headersObj}>{children}</HeadersContext.Provider>;
};

/**
 * Returns the header content for the column identified with the given `colIdx`.
 * Returns null if not found.
 */
export function useHeaderContent(colIdx: number): React.ReactNode | null {
	return useContext(HeadersContext).headers[colIdx]?.content || null;
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
 * Returns the text value of the registered headers.
 */
export function useHeadersTextValue(): string[] {
	return useContext(HeadersContext).headers.map((h) => h.textValue);
}

export type UseRegisterHeaderOptions = Omit<HeaderToRegister, 'el'> & {
	/**
	 * The reference to the header cell.
	 */
	th: React.RefObject<HTMLTableCellElement | null>;
};

/**
 * Registers the header passed in `th`.
 */
export function useRegisterHeader({
	colId,
	th,
	content,
	textValue,
}: UseRegisterHeaderOptions): void {
	const headers = useContext(HeadersContext);

	useEffect(() => {
		if (!colId || colId === '') {
			return;
		}

		const { current: thEl } = th;
		if (thEl) {
			headers.registerHeader({
				colId,
				el: thEl,
				content,
				textValue,
			});
		}
		// We want to register the header only on mount, even if something changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [colId]);
}
