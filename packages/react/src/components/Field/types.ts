export interface FieldInfoCoreProps {
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
	extends FieldInfoCoreProps, Pick<React.ComponentPropsWithoutRef<'label'>, InfoBaseProps> {
	baseName?: string;
	/** The name of the field. Required. */
	label: React.ReactNode;
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
	 */
	labelTag?: 'div' | 'label' | 'legend';
}

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
	extends FieldFeedbackCoreProps, Pick<React.ComponentPropsWithoutRef<'div'>, FBBaseProps> {
	/**
	 * Indicates whether errors should be a live region. Default is `true`. Only
	 * set to `false` if you intend to communicate errors to screen reader users
	 * through some other mechanism.
	 */
	liveErrors?: boolean;
	/** The base class name according to BEM conventions. */
	baseName?: string;
}

export interface FieldAddonProps extends React.ComponentPropsWithoutRef<'span'> {
	baseName?: string;
}
