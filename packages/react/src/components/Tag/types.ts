import { SystemColors } from '../../utilities/color';

export interface TagProps extends React.HTMLAttributes<HTMLElement> {
	/** The tag color family. */
	color?: SystemColors;
	/** Indicates whether tag can be dismissed. */
	dismissible?: boolean;
	/** The base class name according to BEM conventions. */
	baseName?: string,
	/** The className for the span that wraps `children`. */
	contentsClass?: string;
	/** The className for the dismiss button. */
	dismissClass?: string;
	/** Callback function that is called when the dismiss button is clicked. */
	onDismiss?: () => void;
}
