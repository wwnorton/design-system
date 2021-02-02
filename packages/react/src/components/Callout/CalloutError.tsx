import React from 'react';
import { Callout, CalloutProps } from './index';

export type CalloutErrorProps = Omit<CalloutProps, 'borderPosition' | 'icon' | 'iconColor' | 'color'>;

/**
 * Display a Callout Error.
 */
export const CalloutError = ({
	title,
	children,
	...props
}: CalloutErrorProps): React.ReactElement => (
	<Callout
		borderPosition='left'
		title={title}
		icon='exclamation'
		iconColor='var(--nds-red-60)'
		color='red'
		dismissable
		{...props}
	>
		{children}
	</Callout>
);
