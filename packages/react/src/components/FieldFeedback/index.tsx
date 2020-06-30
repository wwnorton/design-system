import React from 'react';
import { prefix } from '../../utilities';

type BaseProps = 'className' | 'children' | 'id';
export interface FieldFeedbackProps
	extends Pick<React.HTMLAttributes<HTMLDivElement>, BaseProps> {
	/**
	 * A list of error strings. If provided, this will be set as an unordered
	 * list in the first child slot.
	 */
	errors?: string[];
	/**
	 * Indicates whether errors should be a live region. Default is `true`. Only
	 * set to `false` if you intend to communicate errors to screen reader users
	 * through some other mechanism.
	 */
	liveErrors?: boolean;
	/** A className for the error list. */
	errorClass?: string;
	/** An id for the error list. */
	errorId?: string;
	/**  */
	baseName?: string;
}

/** A container for field feedback. Use to display content based on field input. */
export const FieldFeedback: React.FunctionComponent<FieldFeedbackProps> = ({
	errors,
	liveErrors = true,
	baseName = prefix('field'),
	errorClass = `${baseName}__errors`,
	errorId,
	children,
	className = `${baseName}__feedback`,
	id,
}: FieldFeedbackProps) => {
	const Errors = React.useMemo(() => {
		if (!errors || !errors.length) return null;
		return (
			<ul
				className={errorClass}
				id={errorId}
				aria-label="Errors"
				aria-live={(liveErrors) ? 'assertive' : undefined}
				aria-atomic={(liveErrors) ? 'true' : undefined}
			>
				{ errors.map((err) => <li key={err}>{ err }</li>) }
			</ul>
		);
	}, [errors, errorClass, errorId, liveErrors]);

	return (
		<div id={id} className={className}>
			{ Errors }
			{ children }
		</div>
	);
};
