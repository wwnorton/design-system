import React from 'react';
import { Callout, CalloutPresetProps } from './index';

/**
 * Display a Callout Success.
 */
export const CalloutSuccess = ({
	children,
	...props
}: CalloutPresetProps): React.ReactElement => (
	<Callout
		borderPosition='left'
		icon='check-circle'
		iconColor='var(--nds-green-60)'
		color='green'
		{...props}
	>
		{children}
	</Callout>
);
