import React from 'react';
import { BaseDialogProps } from './types';

export const BaseDialog = React.forwardRef<HTMLDivElement, BaseDialogProps>(({
	modal,
	children,
	...props
}: BaseDialogProps, ref) => (
	<div
		ref={ref}
		{...props}
		role="dialog"
		aria-modal={(modal) ? 'true' : 'false'}
	>
		{ children }
	</div>
));
