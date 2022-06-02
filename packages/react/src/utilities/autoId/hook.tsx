// This implementation is heavily inspired by @accessible/use-id implementation
import React, { useState } from 'react';
import { uniqueId } from 'lodash';
import { useLayoutEffect } from '../isomorphicLayoutEffect';

let ID = 0;
// eslint-disable-next-line no-return-assign
const genId = (): string => uniqueId() ?? (ID += 1);

let serverHandoffComplete = false;

/**
 * useId
 *
 * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
 *
 * Note: The returned ID will initially be `null` and will update after a
 * component mounts.
 *
 */
export function useId() {
	const [id, setId] = useState((serverHandoffComplete ? genId() : null));

	useLayoutEffect(() => {
		if (id === null) {
			if (typeof (React as any).useId === 'function') {
				setId((React as any).useId());
			} else {
				setId(genId());
			}
		}

		serverHandoffComplete = true;
	}, [id]);

	return id ?? undefined;
}
