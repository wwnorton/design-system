/** The event returned by React's onClick prop. */
export type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

/* eslint-disable import/prefer-default-export, @typescript-eslint/no-empty-function */
/** Generic no-operation function. */
export const noop = (): void => {};
