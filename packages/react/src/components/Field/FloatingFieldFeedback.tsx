import React from 'react';
import { FloatingFieldFeedbackProps } from './types';

/**
 * A container for field feedback, that is positioned relative to the field.
 * It displays only the first error.
 */
export const FloatingFieldFeedback = React.forwardRef<HTMLDivElement, FloatingFieldFeedbackProps>(
	(
		{
			errors,
			style,
			baseName = 'nds-field',
			className = `${baseName}__feedback--floating`,
			id,
		}: FloatingFieldFeedbackProps,
		ref,
	) => {
		const Error = React.useMemo(() => {
			if (!errors || !errors.length) return null;
			return errors[0];
		}, [errors]);

		return (
			<div ref={ref} className={className} id={id} style={style}>
				{Error}
			</div>
		);
	},
);

FloatingFieldFeedback.displayName = 'FloatingFieldFeedback';
