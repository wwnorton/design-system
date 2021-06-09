import { IconVariant } from '../Icon';
import { SystemColors } from '../../utilities/color';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	dot?: boolean,
	icon?: IconVariant,
	/** The badge's color family. */
	color?: SystemColors;
	/** The base class name according to BEM conventions. */
	baseName?: string,
	/** The `className` that will be applied to the badge icon. */
	iconClass?: string,
}
