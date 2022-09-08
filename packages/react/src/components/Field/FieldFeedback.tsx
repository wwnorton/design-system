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
		return (
			<ul
				className={errorsClass}
				id={errorsId}
				aria-label="Errors"
				aria-live={(liveErrors) ? 'assertive' : undefined}
				aria-atomic={(liveErrors) ? 'true' : undefined}
			>
				{ errors.map((err) => <li key={err}>{ err }</li>) }
			</ul>
		);
	}, [errors, errorsClass, errorsId, liveErrors]);

	return (
		<div id={id} className={className}>
			{ Errors }
			{ children }
		</div>
	);
};
