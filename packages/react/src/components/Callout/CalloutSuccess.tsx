import React from 'react';
import { Callout, CalloutProps } from './index';

export type CalloutSuccessProps = Omit<CalloutProps, 'borderPosition' | 'icon' | 'iconColor' | 'color'>;

/**
 * Display a Callout Success.
 */
export const CalloutSuccess = ({
	children,
	...props
}: CalloutSuccessProps): React.ReactElement => (
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
