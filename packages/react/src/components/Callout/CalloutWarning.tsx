import React from 'react';
import { Callout, CalloutPresetProps } from './index';

/**
 * Display a Callout Warning.
 */
export const CalloutWarning = ({
	children,
	...props
}: CalloutPresetProps): React.ReactElement => (
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
