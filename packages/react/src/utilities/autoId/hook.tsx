import { useState } from 'react';
import { useLayoutEffect } from '../isomorphicLayoutEffect';

export interface BaseIdGeneratorProps {
	/**
	 * Allows you to provide your own id as a fallback
	 */
	providedId?: number | string | undefined | null;
}

let ID = 0;
// eslint-disable-next-line no-return-assign
const genId = (): number => ID += 1;
let serverHandoffComplete = false;

/**
 * useId
 *
 * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
 *
 * Note: The returned ID will initially be `null` and will update after a
 * component mounts. Users may need to supply their own ID if they need
 * consistent values for SSR.
 *
 */
export function useId(providedId?: BaseIdGeneratorProps) {
	const [id, setId] = useState(
		providedId ?? (serverHandoffComplete ? genId() : null),
	);

	useLayoutEffect(() => {
		if (id === null) {
			setId(genId());
		}

		serverHandoffComplete = true;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return providedId ?? id ?? undefined;
}
