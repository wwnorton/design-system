import { SystemColors } from '../../utilities/color';

export interface TagProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * When defined, the tag will render as a `Link`. Otherwise, the tag will
	 * render as a `Button`.
	*/
	href?: string;
	/** The tag color family. */
	color?: SystemColors;
	/** Indicates whether tag can be dismissed. */
	dismissible?: boolean;
	/** Callback function that is called when the tag is dismissed. */
	onDismiss?: () => void;
	/** The base class name according to BEM conventions. */
	baseName?: string,
	/** The className that will be applied to the close Button. */
	dismissClass?: string,
	/**
	 * A className for the tag close button.
	 * Default will be `${baseName}__close`.
	*/
	closeIconClass?: string;
}
