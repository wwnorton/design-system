import { IconProps } from '../Icon';
import { SystemColors } from '../../utilities/color';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	variant?: 'pill' | 'dot',
	icon?: IconProps['variant'],
	/** The badge's color family. */
	color?: SystemColors;
	/** The base class name according to BEM conventions. */
	baseName?: string,
	/** The `className` that will be applied to the badge icon. */
	iconClass?: string,
	/**
	 * A className for the badge's close button, which goes inside the header.
	 * Default will be `${baseName}__close`.
	*/
	closeIconClass?: string;
}
