import React from 'react';
import { Callout, CalloutProps } from './index';

export type CalloutErrorProps = Omit<CalloutProps, 'borderPosition' | 'icon' | 'iconColor' | 'className'>;

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
		icon='check-circle'
		iconColor='var(--nds-red-60)'
		className='nds-callout--error'
		dismissable
		// TODO: may need to add new properties
		// borderColor
		// backgroundColor
	>
		{children}
	</Callout>
);
