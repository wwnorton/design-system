import React from 'react';
import { Callout, CalloutProps } from './index';

export type CalloutWarningProps = Omit<CalloutProps, 'borderPosition' | 'icon' | 'iconColor' | 'color'>;

/**
 * Display a Callout Warning.
 */
export const CalloutWarning = ({
	title,
	children,
	...props
}: CalloutWarningProps): React.ReactElement => (
	<Callout
		borderPosition='left'
		title={title}
		icon='warning'
		iconColor='var(--nds-yellow-60)'
		color='yellow'
		dismissable
		{...props}
	>
		{children}
	</Callout>
);
