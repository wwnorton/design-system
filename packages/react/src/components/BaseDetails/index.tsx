import React from 'react';

export interface BaseDetailsProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
	/**
	 * A polyfill of the `ontoggle` event, which _does_ work but doesn't currently
	 * exist in the `React.DetailsHTMLAttributes<HTMLDetailsElement>` definition.
	 */
	onToggle?: (e: React.SyntheticEvent<HTMLDetailsElement, Event>) => void;
}

export const BaseDetails = React.forwardRef<HTMLDetailsElement, BaseDetailsProps>(({
	open = false,
	children,
	...attributes
}: BaseDetailsProps, ref) => {
	const [isOpen, setOpen] = React.useState(open);
	React.useEffect(() => setOpen(open), [open]);

	return (
		<details ref={ref} open={isOpen} {...attributes}>
			{ children }
		</details>
	);
});
