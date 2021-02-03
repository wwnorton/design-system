import React from 'react';
import { Callout, CalloutProps } from './index';

export type CalloutWarningProps = Omit<CalloutProps, 'borderPosition' | 'icon' | 'iconColor' | 'color'>;

/**
 * Display a Callout Warning.
 */
export const CalloutWarning = ({
	children,
	...props
}: CalloutWarningProps): React.ReactElement => (
	<Callout
		borderPosition='left'
		icon='warning'
		iconColor='var(--nds-yellow-60)'
		color='yellow'
		{...props}
	>
		{children}
	</Callout>
);
