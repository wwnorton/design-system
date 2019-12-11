/** The event returned by React's onClick prop. */
export type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

/** Generic no-operation function. */
export const noop = (): void => {};		// eslint-disable-line import/prefer-default-export
