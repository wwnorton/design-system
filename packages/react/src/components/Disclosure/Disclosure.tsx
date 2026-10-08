import React, { useCallback } from 'react';
import classNames from 'classnames';
import { BaseDetails } from '../BaseDetails';
import { BaseSummary } from '../BaseSummary';
import { Icon, IconProps } from '../Icon';
import { useLayoutEffect } from '../../utilities';
import { DisclosureProps } from './types';

const proceed = async (cb?: DisclosureProps['onCloseStart']): Promise<boolean> => {
	if (cb) {
		return (await cb()) !== false;
	}
	return true;
};

type DisclosureState = 'open' | 'closed' | 'opening' | 'closing';

export const Disclosure = React.forwardRef<HTMLDetailsElement, DisclosureProps>(
	(
		{
			isOpen: propOpen,
			reducedMotion,
			summary,
			children,
			marker = (p) => {
				if (p) return 'chevron-down';
				return 'caret-right';
			},
			markerPosition = (p) => {
				if (p) return 'right';
				return 'left';
			},
			markerTransform,
			panel,

			className,
			baseName = 'nds-disclosure',
			summaryClass = `${baseName}__summary`,
			markerClass = `${baseName}__marker`,
			contentsOuterClass = `${baseName}__contents-outer`,
			contentsInnerClass = `${baseName}__contents-inner`,

			onCloseStart,
			onCloseCancel,
			onCloseEnd,
			onOpenStart,
			onOpenCancel,
			onOpenEnd,
			...props
		}: DisclosureProps,
		ref,
	): JSX.Element => {
		const [state, setState] = React.useState<DisclosureState>(propOpen ? 'open' : 'closed');
		const [contents, setContents] = React.useState<HTMLDivElement | null>(null);
		const transform = React.useMemo<typeof markerTransform>(() => {
			if (markerTransform) return markerTransform;
			return panel ? 'flip-3d' : 'rotate-90';
		}, [markerTransform, panel]);

		// The native `open` attribute must remain set while the disclosure is
		// animating closed, otherwise the browser removes the contents from the
		// layout before the height transition can run.
		const isOpen = state !== 'closed';
		const isClosing = state === 'closing';

		/**
		 * Determines whether the contents element has a non-zero transition
		 * duration. When reduced motion is requested, or when the computed
		 * `transition-duration` is `0`, there's nothing to animate and the
		 * open/close happens instantly.
		 */
		const shouldAnimate = React.useMemo(() => {
			if (reducedMotion) return false;
			if (!contents) return true;
			const styles = window.getComputedStyle(contents);
			return styles
				.getPropertyValue('transition-duration')
				.split(/,\s*/)
				.some((value) => parseFloat(value) > 0);
		}, [reducedMotion, contents]);

		const open = useCallback(async () => {
			if (await proceed(onOpenStart)) {
				setState((prev) => (prev === 'open' || prev === 'opening' ? prev : 'opening'));
			}
		}, [onOpenStart]);

		const close = useCallback(async () => {
			if (await proceed(onCloseStart)) {
				setState((prev) => (prev === 'closed' || prev === 'closing' ? prev : 'closing'));
			}
		}, [onCloseStart]);

		const summaryClickHandler = async (e: React.MouseEvent<HTMLElement>) => {
			e.preventDefault();
			switch (state) {
				case 'open':
					close();
					break;
				case 'closed':
					open();
					break;
				case 'opening':
					// Interrupt an in-progress open and begin closing.
					if (await proceed(onOpenCancel)) {
						close();
					}
					break;
				case 'closing':
					// Interrupt an in-progress close and begin opening.
					if (await proceed(onCloseCancel)) {
						open();
					}
					break;
				default:
					break;
			}
		};

		// control via `isOpen` prop. Skip the initial mount so the lifecycle
		// callbacks only fire on updates (or on a summary click). The initial
		// `state` is already derived from `propOpen` in the `useState` initializer.
		const isFirstRender = React.useRef(true);
		React.useEffect(() => {
			if (isFirstRender.current) {
				isFirstRender.current = false;
				return;
			}
			if (propOpen === undefined) {
				return;
			}

			if (propOpen) open();
			else close();
		}, [propOpen]); // eslint-disable-line react-hooks/exhaustive-deps

		/**
		 * Drives the height animation for the two transitional states. When
		 * `opening`, the outer wrapper animates from `0` up to the measured
		 * content height; when `closing`, it animates from the measured content
		 * height back down to `0`. After the animation starts the wrapper's height
		 * is left to settle on `auto` (open) via the `transitionend` handler.
		 */
		useLayoutEffect(() => {
			if (!contents) return undefined;

			if (state === 'opening') {
				if (!shouldAnimate) {
					setState('open');
					return undefined;
				}
				// Start collapsed, then expand to the content height on the next frame.
				contents.style.height = '0px';
				const frame = window.requestAnimationFrame(() => {
					contents.style.height = `${contents.scrollHeight}px`;
				});
				return () => window.cancelAnimationFrame(frame);
			}

			if (state === 'closing') {
				if (!shouldAnimate) {
					setState('closed');
					return undefined;
				}
				// Start from the current content height, then collapse to 0.
				contents.style.height = `${contents.scrollHeight}px`;
				const frame = window.requestAnimationFrame(() => {
					contents.style.height = '0px';
				});
				return () => window.cancelAnimationFrame(frame);
			}

			if (state === 'open') {
				// Allow the contents to grow/shrink naturally once fully open.
				contents.style.height = '';
			}

			if (state === 'closed') {
				contents.style.height = '';
			}

			return undefined;
		}, [state, contents, shouldAnimate]);

		/**
		 * Fire the open/close lifecycle end callbacks. When animating, these are
		 * deferred to the `transitionend` handler below. When not animating, the
		 * state jumps straight to its resting value and the callback fires here.
		 */
		const prevResting = React.useRef<DisclosureState>(state);
		React.useEffect(() => {
			if (state === 'open' && prevResting.current !== 'open') {
				if (!shouldAnimate) onOpenEnd?.();
			}
			if (state === 'closed' && prevResting.current !== 'closed') {
				if (!shouldAnimate) onCloseEnd?.();
			}
			if (state === 'open' || state === 'closed') {
				prevResting.current = state;
			}
		}, [state, shouldAnimate, onOpenEnd, onCloseEnd]);

		const getMarkerIcon = React.useCallback(
			(m: typeof marker): Pick<IconProps, 'variant' | 'icon'> | undefined => {
				if (!m) return undefined;
				if (typeof m === 'string') return { variant: m };
				if (typeof m === 'function') return getMarkerIcon(m(panel));
				return { icon: m };
			},
			[panel],
		);

		const Marker = React.useMemo(() => {
			if (!marker) return undefined;
			const iconProps = getMarkerIcon(marker);
			return (
				<span className={markerClass}>
					<Icon {...iconProps} data-transform={transform} />
				</span>
			);
		}, [marker, markerClass, transform, getMarkerIcon]);

		const markerPos = React.useMemo(() => {
			if (!markerPosition) return undefined;
			if (typeof markerPosition === 'function') {
				return markerPosition(panel) || undefined;
			}
			return markerPosition;
		}, [markerPosition, panel]);

		const classes = classNames(className, baseName, {
			[`${baseName}--panel`]: panel,
			'nds-closing': isClosing,
			'nds-reduced-motion': !shouldAnimate,
		});

		/**
		 * Completes a transitional state once the height transition finishes.
		 * Guards against bubbling `transitionend` events from descendants and from
		 * properties other than `height`.
		 */
		const transitionEndHandler = (e: React.TransitionEvent<HTMLDivElement>) => {
			// Only react to the outer wrapper's own height transition. `propertyName`
			// may be empty in some environments (e.g. jsdom), so only reject it when
			// it's explicitly set to a different property.
			if (e.target !== contents) return;
			if (e.propertyName && e.propertyName !== 'height') return;

			if (state === 'opening') {
				setState('open');
				onOpenEnd?.();
			} else if (state === 'closing') {
				setState('closed');
				onCloseEnd?.();
			}
		};

		return (
			<BaseDetails ref={ref} className={classes} open={isOpen} {...props}>
				<BaseSummary
					className={summaryClass}
					marker={Marker}
					onClick={summaryClickHandler}
					markerPosition={markerPos}
					aria-expanded={isOpen}
				>
					<span className={`${baseName}__title`}>{summary}</span>
				</BaseSummary>
				<div
					className={contentsOuterClass}
					ref={setContents}
					onTransitionEnd={transitionEndHandler}
				>
					<div className={contentsInnerClass}>{children}</div>
				</div>
			</BaseDetails>
		);
	},
);

Disclosure.displayName = 'Disclosure';
