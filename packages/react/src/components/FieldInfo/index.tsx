import React from 'react';
import classNames from 'classnames';
import { prefix } from '../../utilities';

type BaseProps = 'htmlFor' | 'className' | 'children' | 'id';
export interface FieldInfoProps
	extends Pick<React.LabelHTMLAttributes<HTMLLabelElement>, BaseProps> {
	/** The name of the field. Required. */
	label: string;
	/**
	 * An additional label indicator, displayed as a parenthetical inside the
	 * label container. For instance, `indicator="required"` would result in
	 * label text content of `"{label} (required)"`.
	 */
	indicator?: string | null;
	baseName?: string;
	/**
	 * A className for the label element, which will be a `<label>` if `htmlFor`
	 * is included and a `<div>` otherwise. */
	labelClass?: string;
	/** A className for the description `<div>`. */
	descriptionClass?: string;
	/** A className for the indicator span. */
	indicatorClass?: string;
	/** An id for the label element. */
	labelId?: string;
	/** An id for the description `<div>`. */
	descriptionId?: string;
}

/**
 * Information about a related field. Will always contain a label for the field
 * and can contain an optional description. Make sure to include a valid `htmlFor`
 * prop when used with form controls such as an `<input>`.
 */
export const FieldInfo: React.FunctionComponent<FieldInfoProps> = ({
	label,
	indicator,
	description,
	baseName = prefix('field'),
	labelClass = `${baseName}__label`,
	indicatorClass = `${baseName}__indicator`,
	descriptionClass = `${baseName}__desc`,
	labelId,
	descriptionId,
	children,
	className,
	htmlFor,
	id,
}: FieldInfoProps) => {
	const Indicator = React.useMemo(() => {
		if (!indicator) return null;
		return (
			<>
				{' '}
				<span className={indicatorClass}>
					(
					{ indicator }
					)
				</span>
			</>
		);
	}, [indicator, indicatorClass]);

	const Label = React.useMemo(() => {
		const labelProps = {
			className: labelClass,
			htmlFor,
			id: labelId,
			children: [label, Indicator],
		};
		// eslint-disable-next-line jsx-a11y/label-has-associated-control
		if (htmlFor) return <label {...labelProps} />;
		return <div {...labelProps} />;
	}, [label, labelClass, htmlFor, labelId, Indicator]);

	const Description = React.useMemo(() => {
		if (!description) return null;
		return <div className={descriptionClass} id={descriptionId}>{ description }</div>;
	}, [description, descriptionClass, descriptionId]);

	return (
		<div className={classNames(`${baseName}__info`, className)} id={id}>
			{ Label }
			{ Description }
			{ children }
		</div>
	);
};
