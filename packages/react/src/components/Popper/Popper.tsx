import React from 'react';
import { usePopper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
import { arrowMod, flipMod, matchWidthMod, offsetMod, preventOverflowMod } from './modifiers';
import { PopperProps } from './types';
import { useForwardedRef, useLayoutEffect } from '../../utilities';

const DISTANCE_CSS_PROP = '--nds-popper-distance';

export const Popper = React.forwardRef<HTMLDivElement, PopperProps>(
	(
		{
			/* Props unique to Popper */
			isOpen,
			reference,
			transition,

			/* CSSTransition props */
			addEndListener,
			onEnter,
			onEntering,
			onEntered,
			onExit,
			onExiting,
			onExited,
			timeout,

			/* Popper.js props */
			placement = 'auto',
			modifiers: modifiersProp,
			strategy = 'absolute',
			onFirstUpdate,

			/* Modifier options */
			// arrow modifier
			enableArrow = false,
			arrowElement: arrowProp,
			arrowPadding = 0,
			// flip modifier
			enableFlip = true,
			flipOptions,
			// offset modifier
			offset,
			distance: distanceProp,
			// preventOverflow modifier
			enablePreventOverflow = true,
			boundary = 'clippingParents',
			preventOverflowOptions,
			// matchWidth modifier
			matchWidth = false,

			/* React & HTMLDivElement attributes */
			children,
			className = 'nds-popper',
			style,
			...props
		}: PopperProps,
		ref,
	) => {
		const [popper, setPopper] = useForwardedRef(ref);
		const [arrowElement, setArrowElement] = React.useState<HTMLDivElement | null>(null);
		const [distanceToken, setDistanceToken] = React.useState<number>();

		const distance = React.useMemo(() => {
			if (offset) {
				if (typeof offset === 'function') {
					if (popper && reference instanceof Element) {
						return offset({
							popper: popper.getBoundingClientRect(),
							reference: reference.getBoundingClientRect(),
							placement,
						})[1];
					}
					return 0;
				}
				return offset[1];
			}
			if (distanceProp !== undefined) return distanceProp;
			return distanceToken ?? 0;
		}, [distanceProp, distanceToken, offset, placement, popper, reference]);

		// check if distance is set with a CSS variable (a design token)
		useLayoutEffect(() => {
			if (popper) {
				// read the CSS property
				const token = parseFloat(
					window.getComputedStyle(popper).getPropertyValue(DISTANCE_CSS_PROP),
				);
				// set the distance token if it's a number and distance is currently 0
				if (distance === 0 && !Number.isNaN(token)) {
					setDistanceToken(token);
				}
				if (token !== distance) {
					popper.style.setProperty(DISTANCE_CSS_PROP, `${distance}px`);
				}
			}
		}, [distance, popper]);

		const modifiers = React.useMemo(
			() => [
				// https://popper.js.org/docs/v2/modifiers/arrow/
				{
					...arrowMod,
					enabled: enableArrow,
					options: {
						element: arrowProp || arrowElement,
						padding: arrowPadding,
					},
				},
				// https://popper.js.org/docs/v2/modifiers/flip/
				{
					...flipMod,
					enabled: enableFlip,
					options: flipOptions,
				},
				// https://popper.js.org/docs/v2/modifiers/offset/
				{
					...offsetMod,
					enabled: true,
					options: {
						offset: offset ?? [0, distance],
					},
				},
				// https://popper.js.org/docs/v2/modifiers/prevent-overflow/
				{
					...preventOverflowMod,
					enabled: enablePreventOverflow,
					options: preventOverflowOptions ?? { boundary },
				},
				// https://popper.js.org/docs/v2/modifiers/community-modifiers/
				{
					...matchWidthMod,
					enabled: matchWidth,
				},
				...(modifiersProp || []),
			],
			[
				arrowElement,
				arrowPadding,
				arrowProp,
				boundary,
				distance,
				enableArrow,
				enableFlip,
				enablePreventOverflow,
				flipOptions,
				matchWidth,
				modifiersProp,
				offset,
				preventOverflowOptions,
			],
		);

		const { styles, attributes } = usePopper(reference, popper, {
			placement,
			strategy,
			onFirstUpdate,
			modifiers,
		});

		const timingProps = React.useMemo(() => {
			if (addEndListener) return { addEndListener };
			if (timeout) return { timeout };
			return {
				addEndListener: (node: HTMLElement, done: () => void) => {
					const duration = parseFloat(window.getComputedStyle(node).transitionDuration);
					if (duration > 0) {
						node.addEventListener('transitionend', done, false);
					} else {
						done();
					}
				},
			};
		}, [addEndListener, timeout]);

		return (
			<CSSTransition
				classNames={transition}
				onEnter={onEnter}
				onEntering={onEntering}
				onEntered={onEntered}
				onExit={onExit}
				onExiting={onExiting}
				onExited={onExited}
				{...timingProps}
				in={isOpen}
				mountOnEnter
				unmountOnExit
			>
				<div
					{...props}
					className={className}
					style={{ ...style, ...styles.popper }}
					{...attributes.popper}
					ref={setPopper}
				>
					{children}
					{!arrowProp && enableArrow && (
						<div data-popper-arrow style={styles.arrow} ref={setArrowElement} />
					)}
				</div>
			</CSSTransition>
		);
	},
);
