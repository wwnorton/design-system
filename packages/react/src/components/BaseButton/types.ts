export interface BaseButtonProps extends React.ComponentPropsWithoutRef<'button'> {
	/** Whether the button is currently depressed. Polyfill for :active on keydown. */
	active?: boolean;
	/** A class to convey :active. */
	activeClass?: string;
}
