import { SystemColors } from '../../utilities/color';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	/** When set, renders as a notification dot. */
	dot?: boolean,
	/** The badge's color family. */
	color?: SystemColors;
	/** The base class name according to BEM conventions. */
	baseName?: string,
}
