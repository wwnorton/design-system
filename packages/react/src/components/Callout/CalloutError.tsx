import React from 'react';
import { Callout, CalloutProps } from './index';

export type CalloutErrorProps = Omit<CalloutProps, 'borderPosition' | 'icon' | 'iconColor' | 'color'>;

/**
 * Display a Callout Error.
 */
export const CalloutError = ({
	children,
	...props
}: CalloutErrorProps): React.ReactElement => (
	<Callout
		borderPosition='left'
		icon='exclamation'
		iconColor='var(--nds-red-60)'
		color='red'
		{...props}
	>
		{children}
	</Callout>
);
