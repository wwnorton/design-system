/* eslint-disable no-param-reassign */
/* eslint-disable no-bitwise */
import {
	useEffect,
	useLayoutEffect,
	createContext as createReactContext,
	useContext as useReactContext,
	useMemo,
} from 'react';

/**
 * Sort an array of DOM nodes according to the HTML tree order
 * @see http://www.w3.org/TR/html5/infrastructure.html#tree-order
 */
export function sortNodes(nodes: Node[]) {
	return nodes.sort((a, b) => {
		const compare = a.compareDocumentPosition(b);

		if (
			compare & Node.DOCUMENT_POSITION_FOLLOWING
			|| compare & Node.DOCUMENT_POSITION_CONTAINED_BY
		) {
			// a < b
			return -1;
		}

		if (
			compare & Node.DOCUMENT_POSITION_PRECEDING
			|| compare & Node.DOCUMENT_POSITION_CONTAINS
		) {
			// a > b
			return 1;
		}

		if (
			compare & Node.DOCUMENT_POSITION_DISCONNECTED
			|| compare & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
		) {
			throw Error('Cannot sort the given nodes.');
		} else {
			return 0;
		}
	});
}

export const isElement = (el: any): el is HTMLElement => typeof el === 'object'
	&& 'nodeType' in el
	&& el.nodeType === Node.ELEMENT_NODE;

export function getNextIndex(current: number, max: number, loop: boolean) {
	let next = current + 1;
	if (loop && next >= max) next = 0;
	return next;
}

export function getPrevIndex(current: number, max: number, loop: boolean) {
	let next = current - 1;
	if (loop && next < 0) next = max;
	return next;
}

export const useSafeLayoutEffect =	typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const cast = <T>(value: any) => value as T;

export interface CreateContextOptions<T> {
	strict?: boolean;
	hookName?: string;
	providerName?: string;
	errorMessage?: string;
	name?: string;
	defaultValue?: T;
}

export type CreateContextReturn<T> = [
	React.Provider<T>,
	() => T,
	React.Context<T>,
];

function getErrorMessage(hook: string, provider: string) {
	return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}

export function createContext<T>(options: CreateContextOptions<T> = {}) {
	const {
		name,
		strict = true,
		hookName = 'useContext',
		providerName = 'Provider',
		errorMessage,
		defaultValue,
	} = options;

	const Context = createReactContext<T | undefined>(defaultValue);

	Context.displayName = name;

	function useContext() {
		const context = useReactContext(Context);

		if (!context && strict) {
			const error = new Error(
				errorMessage ?? getErrorMessage(hookName, providerName),
			);
			error.name = 'ContextError';
			Error.captureStackTrace?.(error, useContext);
			throw error;
		}

		return context;
	}

	return [Context.Provider, useContext, Context] as CreateContextReturn<T>;
}

export type ReactRef<T> = React.RefCallback<T> | React.MutableRefObject<T>;

export function assignRef<T = any>(
	ref: ReactRef<T> | null | undefined,
	value: T,
) {
	if (ref == null) return;

	if (typeof ref === 'function') {
		ref(value);
		return;
	}

	try {
		ref.current = value;
	} catch (error) {
		throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
	}
}

export function mergeRefs<T>(...refs: (ReactRef<T> | null | undefined)[]) {
	return (node: T | null) => {
		refs.forEach((ref) => {
			assignRef(ref, node);
		});
	};
}

export function useMergeRefs<T>(...refs: (ReactRef<T> | null | undefined)[]) {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemo(() => mergeRefs(...refs), refs);
}
