import React from 'react';
import { Callout, CalloutPresetProps } from './index';

/**
 * Display a Callout Error.
 */
export const CalloutError = ({
	children,
	...props
}: CalloutPresetProps): React.ReactElement => (
	<Callout
		borderPosition='left'
		icon='exclamation'
		color='error'
		{...props}
	>
		{children}
	</Callout>
);
