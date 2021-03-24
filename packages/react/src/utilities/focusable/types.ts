export interface UseFocusableReturn {
	/** The current list of focusable elements. */
	current: HTMLElement[];
	/** Update the list of focusable elements. Call this when children change. */
	update: () => void;
}
