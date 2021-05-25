import { IconProps } from '../Icon';
import { AllColors } from '../../utilities/color';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
	icon?: IconProps['variant'],
	/** The tag's color family. */
	color?: Exclude<AllColors, 'disabled'>;
	/** Indicates whether tag can be dismissed. */
	dismissible?: boolean;
	/** Callback function that is called when the tag is dismissed. */
	onDismiss?: () => void;
	/** The base class name according to BEM conventions. */
	baseName?: string,
	/** The `className` that will be applied to the tag icon. */
	iconClass?: string,
	/** The className that will be applied to the close Button. */
	dismissClass?: string,
	/**
	 * A className for the tag's close button, which goes inside the header.
	 * Default will be `${baseName}__close`.
	*/
	closeIconClass?: string;
}
