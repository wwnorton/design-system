import React from 'react';
import { prefix } from '../../utilities';

export interface FieldFeedbackCoreProps {
	/**
	 * A list of error strings. If provided, this will be set as an unordered
	 * list in the first child slot.
	 */
	errors?: string[];
	/** A className for the error list. */
	errorsClass?: string;
	/** An id for the error list. */
	errorsId?: string;
}

type BaseProps = 'className' | 'children' | 'id';
export interface FieldFeedbackProps
	extends FieldFeedbackCoreProps, Pick<React.HTMLAttributes<HTMLDivElement>, BaseProps> {
	/**
	 * Indicates whether errors should be a live region. Default is `true`. Only
	 * set to `false` if you intend to communicate errors to screen reader users
	 * through some other mechanism.
	 */
	liveErrors?: boolean;
	/** The base class name according to BEM conventions. */
	baseName?: string;
}

/** A container for field feedback. Use to display content based on field input. */
export const FieldFeedback: React.FunctionComponent<FieldFeedbackProps> = ({
	errors,
	liveErrors = true,
	baseName = prefix('field'),
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
