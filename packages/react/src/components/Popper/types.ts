import {
	Boundary,
	Options,
	Placement,
	Rect,
	VirtualElement,
} from '@popperjs/core';
import { Options as ArrowOptions } from '@popperjs/core/lib/modifiers/arrow';
import { Options as FlipOptions } from '@popperjs/core/lib/modifiers/flip';
import { Options as PreventOverflowOptions } from '@popperjs/core/lib/modifiers/preventOverflow';
import { TransitionProps as TP } from 'react-transition-group/Transition';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';

// react-transition-group's TransitionProps has an index of [key: string]: any,
// which we don't want. this utility allows us to removes the index.
type RemoveIndex<T> = {
	[P in keyof T as string extends P ? never : number extends P ? never : P] : T[P];
};

type OmittedProps = 'children' | 'in' | 'nodeRef' | 'mountOnEnter' | 'unmountOnExit';

type TransitionProps<R extends HTMLElement | undefined> = Omit<RemoveIndex<TP<R>>, OmittedProps>;

type OffsetsFunction = (options: {
	popper: Rect;
	reference: Rect;
	placement: Placement;
}) => [skidding?: number, distance?: number];

export interface PopperOptions {
	/** The [Popper.js placement option](https://popper.js.org/docs/v2/constructors/#placement). */
	placement?: Options['placement'];
	/** The [Popper.js modifiers option](https://popper.js.org/docs/v2/constructors/#modifiers). */
	modifiers?: Options['modifiers'];
	/** The [Popper.js strategy option](https://popper.js.org/docs/v2/constructors/#strategy). */
	strategy?: Options['strategy'];
	/** The [Popper.js onFirstUpdate option](https://popper.js.org/docs/v2/constructors/#onFirstUpdate). */
	onFirstUpdate?: Options['onFirstUpdate'];
}

export type PopperPropsBase = React.HTMLAttributes<HTMLDivElement> & PopperOptions;

export type PopperProps = PopperPropsBase & TransitionProps<HTMLDivElement> & {
	/** Used to control whether the popper is open or closed. */
	isOpen?: boolean;
	/**
	 * The animation transition class applied to the popper as it enters or exits.
	 * A single name can be provided and it will be suffixed for each stage.
	 *
	 * For example, `transition="fade"` applies:
	 *
	 * - `fade-enter`
	 * - `fade-enter-active`
	 * - `fade-exit`
	 * - `fade-exit-active`
	 * - `fade-appear`
	 * - `fade-appear-active`
	 *
	 * Each individual stage can also be specified independently:
	 *
	 * ```js
	 * transition={{
	 * 	appear: 'my-appear',
	 * 	appearActive: 'my-appear-active',
	 * 	appearDone: 'my-appear-done',
	 * 	enter: 'my-enter',
	 * 	enterActive: 'my-enter-active',
	 * 	enterDone: 'my-enter-done',
	 * 	exit: 'my-exit',
	 * 	exitActive: 'my-exit-active',
	 * 	exitDone: 'my-exit-done'
	 * }}
	 * ```
	 *
	 * Reference: [react-transition-group's CSSTransition](http://reactcommunity.org/react-transition-group/css-transition).
	 */
	transition?: string | CSSTransitionClassNames;
	/**
	 * The reference element that the popper will be attached to.
	 *
	 * [Popper.js - `createPopper`](https://popper.js.org/docs/v2/constructors/#createpopper)
	 */
	reference?: Element | VirtualElement | null;
	/**
	 * When set, an arrow pointing to the reference element will be used.
	 *
	 * [Popper.js - `arrow` modifier](https://popper.js.org/docs/v2/modifiers/arrow/).
	 */
	enableArrow?: boolean;
	/**
	 * The element that should be used for the arrow.
	 *
	 * See the [`arrow` modifier's `element` option](https://popper.js.org/docs/v2/modifiers/arrow/#element)
	 * for more details.
	 */
	arrowElement?: ArrowOptions['element'];
	/**
	 * The arrow's padding, which can be used to prevent it from reaching the
	 * very edge of the popper.
	 *
	 * See the [arrow modifier's `padding` option](https://popper.js.org/docs/v2/modifiers/arrow/#padding)
	 * for more details.
	 */
	arrowPadding?: ArrowOptions['padding'];
	/**
	 * When set, the popper will flip along its `placement` axis when it overflows.
	 *
	 * [Popper.js - `flip` modifier](https://popper.js.org/docs/v2/modifiers/flip/).
	 */
	enableFlip?: boolean;
	/** Popper.js [`flip` modifier options](https://popper.js.org/docs/v2/modifiers/flip/#options). */
	flipOptions?: FlipOptions;
	/**
	 * The [`offset` option](https://popper.js.org/docs/v2/modifiers/offset/#options)
	 * for the offset modifier.
	 */
	offset?: OffsetsFunction | [skidding: number, distance: number];
	/**
	 * The [offset distance](https://popper.js.org/docs/v2/modifiers/offset/#distance-1)
	 * (in pixels) from the reference. Will only be used if `offset` is undefined.
	 */
	distance?: number;
	/**
	 * When set, the popper will be prevented from overflowing its clipping
	 * container.
	 *
	 * [Popper.js - `preventOverflow` modifier](https://popper.js.org/docs/v2/modifiers/prevent-overflow/).
	 */
	enablePreventOverflow?: boolean;
	/**
	 * The element or area where the popper will be checked against for overflow.
	 *
	 * See the [`preventOverflow` modifier's `boundary` option](https://popper.js.org/docs/v2/modifiers/prevent-overflow/#boundary)
	 * for more details.
	 */
	boundary?: Boundary;
	/** Popper.js [`preventOverflow` modifier options](https://popper.js.org/docs/v2/modifiers/prevent-overflow/#options). */
	preventOverflowOptions?: PreventOverflowOptions;
	/** When set, the popper will match the width of its reference element. */
	matchWidth?: boolean;
}
