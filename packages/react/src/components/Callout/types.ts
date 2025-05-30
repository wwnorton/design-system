import { IconProps } from '../Icon';
import { AllColors } from '../../utilities/color';

type BaseDouble<T extends string> = {
	[S1 in T]: `${S1} ${Exclude<T, S1>}`;
}[T];

type BaseTriple<T extends string> = {
	[S1 in T]: {
		[S2 in Exclude<T, S1>]: `${S1} ${S2} ${Exclude<T, S1 | S2>}`;
	}[Exclude<T, S1>];
}[T];

type BaseQuad<T extends string> = {
	[S1 in T]: {
		[S2 in Exclude<T, S1>]: {
			[S3 in Exclude<T, S1 | S2>]: `${S1} ${S2} ${S3} ${Exclude<T, S1 | S2 | S3>}`;
		}[Exclude<T, S1 | S2>];
	}[Exclude<T, S1>];
}[T];

export type CombinedListOfTwo<T extends string> = T | BaseDouble<T>;
export type CombinedListOfThree<T extends string> = CombinedListOfTwo<T> | BaseTriple<T>;
export type CombinedListOfFour<T extends string> = CombinedListOfThree<T> | BaseQuad<T>;

export interface CalloutProps extends React.HTMLAttributes<HTMLElement> {
	/** The title summarizes the callout's contents. */
	title?: string;
	/** An icon can be added for character or to emphasize the callout's title. */
	icon?: IconProps['variant'] | IconProps['icon'];
	/** The callout's color family. */
	color?: Exclude<AllColors, 'disabled'>;
	/** The position of the border. */
	border?: CombinedListOfFour<'top' | 'right' | 'bottom' | 'left'>;
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
