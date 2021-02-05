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
		color='success'
		{...props}
	>
		{children}
	</Callout>
);
