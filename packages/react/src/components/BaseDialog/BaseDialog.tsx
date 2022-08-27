import React from 'react';
import { BaseDialogProps } from './types';

export const BaseDialog = React.forwardRef<HTMLDivElement, BaseDialogProps>(({
	modal,
	children,
	...props
}: BaseDialogProps, ref) => (
	<div
		role="dialog"
		ref={ref}
		aria-modal={(modal) ? 'true' : 'false'}
		{...props}
	>
		{ children }
	</div>
));
