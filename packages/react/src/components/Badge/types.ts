import { IconProps } from '../Icon';
import { AllColors } from '../../utilities/color';

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
	variant?: 'pill' | 'dot',
	icon?: IconProps['variant'],
	/** The callout's color family. */
	color?: Exclude<AllColors, 'disabled'>;
	/** The base class name according to BEM conventions. */
	baseName?: string,
	/** The `className` that will be applied to the callout icon. */
	iconClass?: string,
	/**
	 * A className for the popover's close button, which goes inside the header.
	 * Default will be `${baseName}__close`.
	*/
	closeIconClass?: string;
}
