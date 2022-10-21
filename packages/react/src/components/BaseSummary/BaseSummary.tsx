import React from 'react';
import { BaseSummaryProps } from './types';

export const BaseSummary = React.forwardRef<HTMLElement, BaseSummaryProps>(({
	marker,
	markerPosition = 'left',
	children,
	...props
}: BaseSummaryProps, ref) => (
	<summary
		ref={ref}
		role="button"
		{...props}
	>
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
