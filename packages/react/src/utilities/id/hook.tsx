import React from 'react';
import { useLayoutEffect } from '../isomorphicLayoutEffect';

let ID = 0;
const genId = () => { ID += 1; return ID; };
let serverHandoffComplete = false;

function useIdPolyfill() {
	const [id, setId] = React.useState(serverHandoffComplete ? genId : undefined);

	useLayoutEffect(() => {
		if (id === undefined) {
			ID += 1;
			setId(ID);
		}

		serverHandoffComplete = true;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (id === undefined) ? id : `nds-${id.toString(32)}`;
}

/**
 * A hook for generating unique IDs that are stable across the server and client,
 * while avoiding hydration mismatches. Compatible with React 16+ by using
 * [React 18's useId](https://reactjs.org/docs/hooks-reference.html#useid) if
 * it's available, and a polyfill implementation inspired by
 * [@accessible/use-id](https://github.com/accessible-ui/use-id) if it is not.
 *
 * "nds-" is hard-coded as a prefix in the polyfill. When using React 18+,
 * a prefix can be provided with the `identifierPrefix` option in
 * [ReactDOMClient](https://reactjs.org/docs/react-dom-client.html).
 */
export function useId() {
	const implementation = React.useMemo((): (() => string | undefined) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		if ('useId' in React) return React.useId;
		return useIdPolyfill;
	}, []);

	return implementation();
}
