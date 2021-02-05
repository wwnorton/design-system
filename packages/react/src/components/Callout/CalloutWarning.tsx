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
		color='warning'
		{...props}
	>
		{children}
	</Callout>
);
