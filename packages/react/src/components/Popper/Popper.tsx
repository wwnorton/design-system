import React, { useEffect } from 'react';
import {
	arrow,
	autoPlacement,
	autoUpdate,
	flip,
	type MiddlewareState,
	offset as floatingOffset,
	shift,
	size,
	useFloating,
} from '@floating-ui/react';
import { CSSTransition } from 'react-transition-group';
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
		const firstUpdateCalled = React.useRef(false);

		/**
		 * Fix for https://github.com/reactjs/react-transition-group/issues/918
		 * Create an internal reference to the popper node so that we can use it
		 * as the `nodeRef` for the CSSTransition. This prevents that library
		 * from using `React.findDOMNode()`, which was deprecated in React 19.
		 * TODO: switch to a different transition library since react-transition-group
		 * is no longer maintained.
		 */
		const nodeRef = React.useRef<typeof popper>(null);
		useEffect(() => {
			nodeRef.current = popper;
		}, [popper]);

		const resolvedPlacement = React.useMemo(() => {
			if (placement === 'auto' || placement.startsWith('auto-')) return 'bottom';
			return placement as Exclude<PopperProps['placement'], 'auto' | 'auto-start' | 'auto-end'>;
		}, [placement]);

		const distance = React.useMemo(() => {
			if (offset) {
				if (typeof offset === 'function') {
					if (popper && reference instanceof Element) {
						return offset({
							popper: popper.getBoundingClientRect(),
							reference: reference.getBoundingClientRect(),
							placement: resolvedPlacement || 'bottom',
						})[1];
					}
					return 0;
				}
				return offset[1];
			}
			if (distanceProp !== undefined) return distanceProp;
			return distanceToken ?? 0;
		}, [distanceProp, distanceToken, offset, popper, reference, resolvedPlacement]);

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

		const parsedModifiers = React.useMemo(() => {
			const next = {
				arrowEnabled: enableArrow,
				arrowOptions: {
					element: arrowProp || arrowElement,
					padding: arrowPadding,
				},
				flipEnabled: enableFlip,
				flipOptions,
				offsetOptions: {
					offset: offset ?? [0, distance],
				},
				preventOverflowEnabled: enablePreventOverflow,
				preventOverflowOptions: preventOverflowOptions ?? { boundary },
				matchWidthEnabled: matchWidth,
			};

			(modifiersProp || []).forEach((modifier) => {
				if (!modifier?.name) return;
				switch (modifier.name) {
					case 'arrow':
						next.arrowEnabled = modifier.enabled ?? next.arrowEnabled;
						next.arrowOptions = { ...next.arrowOptions, ...(modifier.options || {}) };
						break;
					case 'flip':
						next.flipEnabled = modifier.enabled ?? next.flipEnabled;
						next.flipOptions = { ...(next.flipOptions || {}), ...(modifier.options || {}) };
						break;
					case 'offset':
						next.offsetOptions = { ...next.offsetOptions, ...(modifier.options || {}) };
						break;
					case 'preventOverflow':
						next.preventOverflowEnabled = modifier.enabled ?? next.preventOverflowEnabled;
						next.preventOverflowOptions = {
							...next.preventOverflowOptions,
							...(modifier.options || {}),
						};
						break;
					case 'matchWidth':
						next.matchWidthEnabled = modifier.enabled ?? next.matchWidthEnabled;
						break;
					default:
						break;
				}
			});

			return next;
		}, [
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
		]);

		const resolvedBoundary = React.useMemo(() => {
			if (boundary === 'clippingParents') return 'clippingAncestors';
			return boundary;
		}, [boundary]);

		const middleware = React.useMemo(() => {
			const offsetOption = parsedModifiers.offsetOptions.offset;
			const computedOffset =
				typeof offsetOption === 'function'
					? (state: MiddlewareState) => {
							const referenceRect = {
								...state.rects.reference,
								top: state.rects.reference.y,
								left: state.rects.reference.x,
								right: state.rects.reference.x + state.rects.reference.width,
								bottom: state.rects.reference.y + state.rects.reference.height,
							};
							const resolved = offsetOption({
								popper: state.elements.floating.getBoundingClientRect(),
								reference: referenceRect,
								placement: state.placement,
							});
							return { mainAxis: resolved[1] ?? 0, crossAxis: resolved[0] ?? 0 };
					  }
					: { mainAxis: offsetOption[1] ?? 0, crossAxis: offsetOption[0] ?? 0 };

			const resolvedArrowElement =
				typeof parsedModifiers.arrowOptions.element === 'string'
					? popper?.querySelector(parsedModifiers.arrowOptions.element) || null
					: parsedModifiers.arrowOptions.element;

			const middlewares = [floatingOffset(computedOffset)];

			if (placement === 'auto' || placement.startsWith('auto-')) {
				let alignment: 'start' | 'end' | undefined;
				if (placement === 'auto-start') alignment = 'start';
				if (placement === 'auto-end') alignment = 'end';

				middlewares.push(
					autoPlacement({
						alignment,
					}),
				);
			}

			if (parsedModifiers.flipEnabled) {
				middlewares.push(flip(parsedModifiers.flipOptions as Parameters<typeof flip>[0]));
			}

			if (parsedModifiers.preventOverflowEnabled) {
				middlewares.push(
					shift({
						...parsedModifiers.preventOverflowOptions,
						boundary:
							parsedModifiers.preventOverflowOptions?.boundary === 'clippingParents'
								? 'clippingAncestors'
								: parsedModifiers.preventOverflowOptions?.boundary || resolvedBoundary,
					}),
				);
			}

			if (parsedModifiers.arrowEnabled && resolvedArrowElement) {
				middlewares.push(
					arrow({
						...parsedModifiers.arrowOptions,
						element: resolvedArrowElement,
					}),
				);
			}

			if (parsedModifiers.matchWidthEnabled) {
				middlewares.push(
					size({
						apply(state) {
							const floatingElement = state.elements.floating;
							floatingElement.style.width = `${state.rects.reference.width}px`;
						},
					}),
				);
			}

			return middlewares;
		}, [parsedModifiers, placement, popper, resolvedBoundary]);

		const {
			refs,
			floatingStyles,
			middlewareData,
			update,
			placement: computedPlacement,
		} = useFloating({
			placement: resolvedPlacement,
			strategy,
			middleware,
			whileElementsMounted: autoUpdate,
		});

		useEffect(() => {
			refs.setReference(reference || null);
		}, [reference, refs]);

		useEffect(() => {
			if (!isOpen) {
				firstUpdateCalled.current = false;
				return;
			}
			if (!onFirstUpdate || firstUpdateCalled.current !== false) return;
			if (!popper || !reference) return;
			firstUpdateCalled.current = true;
			onFirstUpdate({
				elements: {
					popper,
					reference,
				},
				placement: computedPlacement,
			});
		}, [computedPlacement, isOpen, onFirstUpdate, popper, reference]);

		useEffect(() => {
			if (isOpen && update) update();
		}, [distance, isOpen, update]);

		const timingProps = React.useMemo(() => {
			if (addEndListener) return { addEndListener };
			if (timeout) return { timeout };
			return {
				addEndListener: (done: () => void) => {
					if (!nodeRef.current) return;
					const node = nodeRef.current;
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
				nodeRef={nodeRef}
			>
				<div
					{...props}
					className={className}
					style={{ ...style, ...floatingStyles }}
					data-popper-placement={computedPlacement}
					ref={(node) => {
						setPopper(node);
						refs.setFloating(node);
					}}
				>
					{children}
					{!arrowProp && enableArrow && (
						<div
							data-popper-arrow
							style={{
								position: 'absolute',
								left: middlewareData.arrow?.x ?? '',
								top: middlewareData.arrow?.y ?? '',
							}}
							ref={setArrowElement}
						/>
					)}
				</div>
			</CSSTransition>
		);
	},
);
