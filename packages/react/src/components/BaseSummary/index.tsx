import React from 'react';

export interface BaseSummaryProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * A marker or icon that indicates the summary's state or action, typically
	 * a caret or chevron.
	 */
	marker?: JSX.Element;
	/** The marker's position relative to the summary's text. */
	markerPosition?: 'left' | 'right';
}

export const BaseSummary = React.forwardRef<HTMLElement, BaseSummaryProps>(({
	marker,
	markerPosition = 'left',
	children,
	...attributes
}: BaseSummaryProps, ref) => (
	<summary ref={ref} {...attributes}>
		{/*
			This div is a temporary fix for safari 14
			https://bugs.webkit.org/show_bug.cgi?id=190065 - summary can't be flex box
		*/}
		<div style={{ display: 'flex', width: '100%' }}>
			{ markerPosition === 'left' && marker }
			{ children }
			{ markerPosition === 'right' && marker }
		</div>
	</summary>
));
