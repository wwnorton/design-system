import React from 'react';
import { StepperAction, StepperOptions, StepperState } from './types';

/**
 * Create a stepper state that keeps track of an index between `0` and `size`,
 * and a dispatch function to update it via `INCREMENT`, `DECREMENT`, and `GOTO`
 * actions.
 */
export const useStepper = (
	size: number,
	{ initialIndex = 0, wrap = false }: StepperOptions = {},
): [StepperState, React.Dispatch<StepperAction>] => {
	const stepperReducer = React.useCallback((
		state: StepperState,
		action: StepperAction,
	): StepperState => {
		const { current } = state;

		switch (action.type) {
			case 'INCREMENT': {
				let nextIndex = current + 1;
				if (!wrap) {
					nextIndex = Math.min(nextIndex, size - 1);
				} else if (nextIndex >= size) {
					nextIndex = 0;
				}
				return {
					...state,
					current: nextIndex,
					direction: 1,
				};
			}
			case 'DECREMENT': {
				let nextIndex = current - 1;
				if (!wrap) {
					nextIndex = Math.max(nextIndex, 0);
				} else if (nextIndex < 0) {
					nextIndex = size - 1;
				}
				return {
					...state,
					current: nextIndex,
					direction: -1,
				};
			}
			case 'GOTO': {
				const nextIndex = Math.max(Math.min(action.payload, size - 1), 0);
				return {
					...state,
					current: nextIndex,
					direction: Math.sign(nextIndex - current) as -1 | 0 | 1,
				};
			}
			default: return state;
		}
	}, [size, wrap]);

	return React.useReducer(
		stepperReducer,
		{ current: initialIndex, direction: 0 },
	);
};
