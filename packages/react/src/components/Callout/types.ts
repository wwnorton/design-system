import { IconProps } from '../Icon';
import { AllColors } from '../../utilities/color';

export interface CalloutProps extends React.HTMLAttributes<HTMLElement> {
	/** The title summarizes the callout's contents. */
	title?: string;
	/** An icon can be added for character or to emphasize the callout's title. */
	icon?: IconProps['variant'] | IconProps['icon'];
	/** The callout's color family. */
	color?: Exclude<AllColors, 'disabled'>;
	/** The position of the border. */
	border?: 'top' | 'right' | 'bottom' | 'left';
	/** Indicates whether callout can be dismissed. */
	dismissible?: boolean;
	/**
	 * The HTML element used for the callout. This will default to
	 * [`aside`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)
	 * when a `title` is provided, making it a
	 * [landmark](https://www.w3.org/TR/wai-aria-practices-1.2/#aria_landmark)
	 * with an accessible name of `title`. If no `title` is provided, this will
	 * default to `div` to ensure that it is _not_ a landmark. This behavior can
	 * be overridden by providing an explicit tag.
	 */
	tag?: 'div' | 'aside';
	/** Callback function that is called when the callout is dismissed. */
	onDismiss?: () => void;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** The `className` that will be applied to the callout icon. */
	iconClass?: string;
	/** The `className` that will be applied to the callout header element. */
	headerClass?: string;
	/** The className that will applied to the callout title. */
	titleClass?: string;
	/** The className that will be applied to the close Button. */
	dismissClass?: string;
	/** The className that will be applied to the callout's body container */
	bodyClass?: string;
}
