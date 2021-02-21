import React from 'react';

export interface BaseDialogProps extends React.HTMLAttributes<HTMLDivElement> {
	modal?: boolean;
}

export const BaseDialog = React.forwardRef<HTMLDivElement, BaseDialogProps>(({
	modal,
	children,
	...attributes
}: BaseDialogProps, ref) => (
	<div
		role="dialog"
		ref={ref}
		aria-modal={(modal) ? 'true' : 'false'}
		{...attributes}
	>
		{ children }
	</div>
));
