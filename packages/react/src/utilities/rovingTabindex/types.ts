import { StepperAction, StepperState } from '../stepper';

export interface RovingTabindexOptions<Container, Child> {
	/** The number of focusable elements. */
	size: number;
	/**
	 * An element that contains all of the focusable elements. This should be the
	 * direct parent of the focusable elements.
	 */
	container: Container | null;
	/**
	 * If set, the current tab index will be focused on render. Useful if your
	 * listbox is rendered conditionally, as in a dropdown, and need to focus
	 * into the listbox when it opens.
	 */
	autofocus?: boolean;
	/** The index of the element that should be focusable on first load. */
	initialIndex?: number;
	/** A unique list of indices that cannot be set as the current tab index. */
	disabledItems?: Set<number>;
	/**
	 * If set, the next/previous keys won't move the focusable index when at
	 * the end/beginning of the group.
	 */
	wrap?: boolean;
	/**
	 * If set, the tab index will reset to the `defaultFocusIndex` when focus
	 * leaves the group.
	 */
	resetOnExit?: boolean;
	/**
	 * A list of `KeyboardEvent.key` values that will move focus to the next
	 * element.
	 */
	nextKeys?: string[];
	/**
	 * A list of `KeyboardEvent.key` values that will move focus to the previous
	 * element.
	 */
	prevKeys?: string[];
	/** A function that will be called whenever an element is focused. */
	onFocus?: (index: number, el: Child) => void;
}

export interface RovingTabindex<Container, Child> {
	/**
	 * The current state of the roving tabindex. Contains two states:
	 * - `current` - the current tab index value.
	 * - `direction` - the difference between the current tab index and the
	 * previous tab index, normalized for focus wrapping.
	 */
	state: StepperState;
	/** A function that allows you to increment, decrement, or goto a tab index. */
	dispatch: React.Dispatch<StepperAction>;
	/** Props for the container. */
	containerProps: {
		/**
		 * A handler for the `onKeyDown` callback. Used to automatically move the
		 * tab index on keydown events inside the container.
		 */
		onKeyDown: React.KeyboardEventHandler<NonNullable<Container>>;
		/**
		 * A handler for the `onBlur` callback on focusable children. Use this to
		 * ensure that focusing out of the group will reset to the initial index,
		 * if specified (see `resetOnExit` option).
		 */
		onBlur: React.FocusEventHandler<NonNullable<Container>>;
	}
	/** Props for each child in the roving tabindex group. */
	childProps: {
		/**
		 * A ref function meant to be used on mapped children. Set this to ensure
		 * that the correct element is focused.
		 */
		createRef: (index: number) => (instance: Child | null) => void;
		/** The current `tabIndex` of the mapped child element. */
		tabIndex: (index: number) => -1 | 0;
	}
}
