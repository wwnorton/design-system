export interface BaseSummaryProps extends React.ComponentPropsWithoutRef<'summary'> {
	/**
	 * A marker or icon that indicates the summary's state or action, typically
	 * a caret or chevron.
	 */
	marker?: JSX.Element;
	/** The marker's position relative to the summary's text. */
	markerPosition?: 'left' | 'right';
}
