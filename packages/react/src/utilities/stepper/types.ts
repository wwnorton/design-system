export interface StepperOptions {
	/** The initial index for the stepper. */
	initialIndex?: number;
	/**
	 * If set, incrementing/decrementing the index while at the end/beginning of
	 * the list will wrap the index around to the other side.
	 */
	wrap?: boolean;
}

export interface StepperState {
	/** The current index of the stepper. */
	current: number;
	/** The direction that the stepper is moving. */
	direction: -1 | 0 | 1;
}

export type StepperAction =
| { type: 'INCREMENT' }
| { type: 'DECREMENT' }
| { type: 'GOTO'; payload: number };
