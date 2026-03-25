import {
	ArrowOptions,
	ClientRectObject,
	Boundary,
	ComputePositionReturn,
	FlipOptions,
	Placement,
	ReferenceElement,
	ShiftOptions,
	Strategy,
} from '@floating-ui/react';
import { TransitionProps as TP } from 'react-transition-group/Transition';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';

// react-transition-group's TransitionProps has an index of [key: string]: any,
// which we don't want. this utility allows us to remove the index.
type RemoveIndex<T> = {
	[P in keyof T as string extends P ? never : number extends P ? never : P]: T[P];
};

type OmittedProps = 'children' | 'in' | 'nodeRef' | 'mountOnEnter' | 'unmountOnExit';

type TransitionProps<R extends HTMLElement | undefined> = Omit<RemoveIndex<TP<R>>, OmittedProps>;

type OffsetsFunction = (options: {
	popper: ClientRectObject;
	reference: ClientRectObject;
	placement: Placement;
}) => [skidding?: number, distance?: number];

export type PopperPropsBase = React.ComponentPropsWithoutRef<'div'> & PopperOptions;

export interface PopperOptions {
	/** The [Floating UI placement option](https://floating-ui.com/docs/usefloating#placement). */
	placement?: Placement | 'auto' | 'auto-start' | 'auto-end';
	/**
	 * Legacy Popper modifier objects.
	 *
	 * Supported names: `arrow`, `flip`, `offset`, `preventOverflow`, and `matchWidth`.
	 */
	modifiers?: Array<{
		name?: string;
		enabled?: boolean;
		options?: Record<string, unknown>;
	}>;
	/** The [Floating UI strategy option](https://floating-ui.com/docs/usefloating#strategy). */
	strategy?: Strategy;
	/** Called after the popper receives its first computed position while open. */
	onFirstUpdate?: (state: {
		elements: {
			popper: HTMLElement;
			reference: ReferenceElement;
		};
		placement: ComputePositionReturn['placement'];
	}) => void;
}

export type PopperProps = PopperPropsBase &
	TransitionProps<HTMLDivElement> & {
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
		 * [Floating UI - `useFloating`](https://floating-ui.com/docs/usefloating#elements)
		 */
		reference?: ReferenceElement | null;
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
		arrowElement?: ArrowOptions['element'] | string;
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
		/** Floating UI [`flip` middleware options](https://floating-ui.com/docs/flip). */
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
		boundary?: Boundary | 'clippingParents';
		/** Floating UI [`shift` middleware options](https://floating-ui.com/docs/shift). */
		preventOverflowOptions?: ShiftOptions;
		/** When set, the popper will match the width of its reference element. */
		matchWidth?: boolean;
	};
