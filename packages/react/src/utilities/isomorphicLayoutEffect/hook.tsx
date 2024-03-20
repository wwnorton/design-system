import { useEffect, useLayoutEffect as useReactLayoutEffect } from 'react';
import { canUseDOM } from '../environment';

/** Use layout effect that is safe to use in SSR/isomorphic applications. */
export const useIsomorphicLayoutEffect = canUseDOM ? useReactLayoutEffect : useEffect;

// export as useLayoutEffect so eslint-plugin-react-hooks works with it.
export const useLayoutEffect = useIsomorphicLayoutEffect;
