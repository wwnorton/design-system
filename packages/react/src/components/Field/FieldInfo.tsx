import React from 'react';
import classNames from 'classnames';
import { FieldInfoProps } from './types';

/**
 * Information about a related field. Will always contain a label for the field
 * and can contain an optional description. Make sure to include a valid `htmlFor`
 * prop when used with form controls such as an `<input>`.
 */
export const FieldInfo: React.FunctionComponent<FieldInfoProps> = ({
	label,
	labelTag,
	indicator,
	description,
	baseName = 'nds-field',
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
				<span className={indicatorClass}>({indicator})</span>
			</>
		);
	}, [indicator, indicatorClass]);

	const Label = React.useMemo(() => {
		const labelProps = {
			className: labelClass,
			htmlFor,
			id: labelId,
			children: (
				<>
					{label}
					{Indicator}
				</>
			),
		};
		const LabelTag = htmlFor ? 'label' : labelTag || 'div';
		return <LabelTag {...labelProps} />;
	}, [label, labelClass, htmlFor, labelId, Indicator, labelTag]);

	const Description = React.useMemo(() => {
		if (labelTag !== 'legend' && !description) return null;
		return (
			<div className={descriptionClass} id={descriptionId}>
				{description}
			</div>
		);
	}, [labelTag, description, descriptionClass, descriptionId]);

	// legend elements cannot be the child of a div so render without the container
	if (labelTag === 'legend') {
		return (
			<>
				{Label}
				{Description}
				{children}
			</>
		);
	}

	return (
		<div className={classNames(`${baseName}__info`, className)} id={id}>
			{Label}
			{Description}
			{children}
		</div>
	);
};
