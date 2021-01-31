import React from 'react';
import { Callout, CalloutProps } from './index';

export type CalloutWarningProps = Omit<CalloutProps, 'borderPosition' | 'icon' | 'iconColor' | 'className'>;

/**
 * Display a Callout Warning.
 */
export const CalloutWarning = ({
	title,
	children,
	...props
}: CalloutWarningProps): React.ReactElement => (
	<Callout
		borderPosition='left'
		title={title}
		icon='warning'
		iconColor='var(--nds-yellow-60)'
		className='nds-callout--warning'
		dismissable
		// TODO: may need to add new properties
		// borderColor
		// backgroundColor
	>
		{children}
	</Callout>
);
