import { IconProps } from '../Icon';
import { AllColors } from '../../utilities/color';

export interface TagProps extends React.HTMLAttributes<HTMLElement> {
	icon?: IconProps['variant'],
	/** The callout's color family. */
	color?: Exclude<AllColors, 'disabled'>;
	/** Indicates whether callout can be dismissed. */
	dismissible?: boolean;
	/** Callback function that is called when the callout is dismissed. */
	onDismiss?: () => void;
	/** The base class name according to BEM conventions. */
	baseName?: string,
	/** The `className` that will be applied to the callout icon. */
	iconClass?: string,
	/** The className that will be applied to the close Button. */
	dismissClass?: string,
	/**
	 * A className for the popover's close button, which goes inside the header.
	 * Default will be `${baseName}__close`.
	*/
	closeIconClass?: string;
}
