import React from 'react';
import classNames from 'classnames';
import { prefix } from '../../utilities';

/**
 * Field components - "partials" that are not meant to be used alone. These
 * components should be composed together with field controls such as `<input>`
 * to create a complete field components.
 */

// INFO

export interface FieldInfoCoreProps {
	/** The name of the field. Required. */
	label: string;
	/**
	 * An optional description. Use this in place of `placeholder` text or as
	 * help text for your field control.
	 */
	description?: React.ReactNode;
	/**
	 * A className for the label element, which will be a `<label>` if `htmlFor`
	 * is included and a `<div>` otherwise. */
	labelClass?: string;
	/** A className for the description `<div>`. */
	descriptionClass?: string;
	/** An id for the label element. */
	labelId?: string;
	/** An id for the description `<div>`. */
	descriptionId?: string;
}

type InfoBaseProps = 'htmlFor' | 'className' | 'children' | 'id';
export interface FieldInfoProps
	extends FieldInfoCoreProps, Pick<React.LabelHTMLAttributes<HTMLLabelElement>, InfoBaseProps> {
	baseName?: string;
	/**
	 * An additional label indicator, displayed as a parenthetical inside the
	 * label container. For instance, `indicator="required"` would result in
	 * label text content of `"{label} (required)"`.
	 */
	indicator?: string | null;
	/** A className for the indicator `<span>`. */
	indicatorClass?: string;
	/**
	 * The HTML element name for the label. If `htmlFor` is included, this will
	 * automatically be `label`. If undefined, this will be `div`.
	 * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
	 */
	labelIs?: 'div' | 'label' | 'legend';
}

/**
 * Information about a related field. Will always contain a label for the field
 * and can contain an optional description. Make sure to include a valid `htmlFor`
 * prop when used with form controls such as an `<input>`.
 */
export const FieldInfo: React.FunctionComponent<FieldInfoProps> = ({
	label,
	labelIs,
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
		const LabelTag = (htmlFor) ? 'label' : labelIs || 'div';
		return <LabelTag {...labelProps} />;
	}, [label, labelClass, htmlFor, labelId, Indicator, labelIs]);

	const Description = React.useMemo(() => {
		if (labelIs !== 'legend' && !description) return null;
		return <div className={descriptionClass} id={descriptionId}>{ description }</div>;
	}, [labelIs, description, descriptionClass, descriptionId]);


	// legend elements cannot be the child of a div so render without the container
	if (labelIs === 'legend') {
		return (
			<>
				{ Label }
				{ Description }
				{ children }
			</>
		);
	}

	return (
		<div className={classNames(`${baseName}__info`, className)} id={id}>
			{ Label }
			{ Description }
			{ children }
		</div>
	);
};


// FEEDBACK

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

type FBBaseProps = 'className' | 'children' | 'id';
export interface FieldFeedbackProps
	extends FieldFeedbackCoreProps, Pick<React.HTMLAttributes<HTMLDivElement>, FBBaseProps> {
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


// ADDON

export interface FieldAddonProps extends React.HTMLAttributes<HTMLSpanElement> {
	baseName?: string;
}

export const FieldAddon: React.FunctionComponent<FieldAddonProps> = ({
	children,
	baseName = prefix('field'),
	className = `${baseName}__addon`,
}: FieldAddonProps) => <span className={className}>{ children }</span>;


// HOOKS

interface FieldIdProps {
	id: string;
	labelId?: string;
	descriptionId?: string;
	errorsId?: string;
	ctrlId?: string;
}

interface FieldIds {
	labelId: string;
	descriptionId: string;
	errorsId: string;
	ctrlId: string;
}

export const useFieldIds = ({
	id,
	labelId: labelIdProp,
	descriptionId: descriptionIdProp,
	errorsId: errorsIdProp,
	ctrlId: ctrlIdProp,
}: FieldIdProps): FieldIds => {
	const { current: labelId } = React.useRef(labelIdProp || `${id}-label`);
	const { current: descriptionId } = React.useRef(descriptionIdProp || `${id}-desc`);
	const { current: errorsId } = React.useRef(errorsIdProp || `${id}-err`);
	const { current: ctrlId } = React.useRef(ctrlIdProp || `${id}-input`);

	return {
		labelId,
		descriptionId,
		errorsId,
		ctrlId,
	};
};
