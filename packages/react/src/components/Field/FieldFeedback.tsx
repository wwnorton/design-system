import React from 'react';
import classNames from 'classnames';
import { FieldFeedbackProps } from './types';

/** A container for field feedback. Use to display content based on field input. */
export const FieldFeedback = React.forwardRef<HTMLDivElement, FieldFeedbackProps>(
	(
		{
			errors,
			liveErrors = true,
			baseName = 'nds-field',
			errorsClass = `${baseName}__errors`,
			errorsId,
			children,
			className = `${baseName}__feedback`,
			id,
			isFloating = false,
			style,
		},
		ref,
	) => {
		const Errors = React.useMemo(() => {
			if (!errors || !errors.length) return null;

			return errors.map((err) => <li key={err}>{err}</li>);
		}, [errors]);

		const feedbackClassName = classNames(className, {
			[`${baseName}__feedback--floating`]: isFloating,
		});

		const errorsClassName = classNames(errorsClass, {
			[`${baseName}__errors--floating`]: isFloating,
		});

		return (
			<div ref={ref} id={id} className={feedbackClassName} style={style}>
				<ul
					className={errorsClassName}
					id={errorsId}
					aria-label="Errors"
					aria-live={liveErrors ? 'assertive' : undefined}
					aria-atomic={liveErrors ? 'true' : undefined}
				>
					{Errors}
				</ul>
				{isFloating ? null : children}
			</div>
		);
	},
);

FieldFeedback.displayName = 'FieldFeedback';
