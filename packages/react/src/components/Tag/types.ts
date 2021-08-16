import { SystemColors } from '../../utilities/color';

export interface TagProps extends React.HTMLAttributes<HTMLElement> {
	/** The tag color family. */
	color?: SystemColors;
	/** Indicates whether tag can be dismissed. */
	dismissible?: boolean;
	/** Callback function that is called when the tag is dismissed. */
	onDismiss?: () => void;
	/** The base class name according to BEM conventions. */
	baseName?: string,
	/**
	 * A className for the tag close button.
	 * Default will be `${baseName}__close`.
	*/
	closeIconClass?: string;
}
