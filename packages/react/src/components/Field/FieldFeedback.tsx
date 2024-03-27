import React from 'react';
import { FieldFeedbackProps } from './types';

/** A container for field feedback. Use to display content based on field input. */
export const FieldFeedback: React.FunctionComponent<FieldFeedbackProps> = ({
	errors,
	liveErrors = true,
	baseName = 'nds-field',
	errorsClass = `${baseName}__errors`,
	errorsId,
	children,
	className = `${baseName}__feedback`,
	id,
}: FieldFeedbackProps) => {
	const Errors = React.useMemo(() => {
		if (!errors || !errors.length) return null;
		return errors.join(' ');
	}, [errors]);

	return (
		<div id={id} className={className}>
			<div
				className={errorsClass}
				id={errorsId}
				aria-label="Errors"
				aria-live={(liveErrors) ? 'assertive' : undefined}
				aria-atomic={(liveErrors) ? 'true' : undefined}
			>
				{Errors}
			</div>
			{ children }
		</div>
	);
};
