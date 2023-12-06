import React from 'react';
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

export const Disclosure = React.forwardRef<HTMLDetailsElement, DisclosureProps>(({
	isOpen: propOpen = false,
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
}: DisclosureProps, ref): JSX.Element => {
	const [isOpen, setOpen] = React.useState(propOpen);
	const [height, setHeight] = React.useState<number>();
	const [state, setState] = React.useState<'opening' | 'closing'>();
	const [style, setStyle] = React.useState<React.CSSProperties>();
	const [contents, setContents] = React.useState<HTMLDivElement | null>(null);
	const transform = React.useMemo<typeof markerTransform>(() => {
		if (markerTransform) return markerTransform;
		return (panel) ? 'flip-3d' : 'rotate-90';
	}, [markerTransform, panel]);

	const shouldAnimate = React.useMemo(() => {
		if (reducedMotion) return false;
		if (!contents) return true;
		const styles = window.getComputedStyle(contents);
		return styles.getPropertyValue('transition-duration')
			.split(/,\s*/)
			.some((value) => parseFloat(value) > 0);
	}, [reducedMotion, contents]);

	const open = React.useCallback(async () => {
		if (isOpen || state === 'opening') return;
		if (state === 'closing') {
			if (await proceed(onCloseCancel)) {
				setState((shouldAnimate) ? 'opening' : undefined);
			}
		} else if (await proceed(onOpenStart)) {
			setOpen(true);
		}
	}, [isOpen, state, shouldAnimate, onCloseCancel, onOpenStart]);

	const close = React.useCallback(async () => {
		if (!isOpen || state === 'closing') return;
		if (state === 'opening') {
			if (await proceed(onOpenCancel)) {
				setState((shouldAnimate) ? 'closing' : undefined);
			}
		} else if (await proceed(onCloseStart)) {
			if (shouldAnimate) {
				setStyle({ height });
				window.requestAnimationFrame(() => {
					setState('closing');
				});
			} else {
				setOpen(false);
			}
		}
	}, [isOpen, state, height, shouldAnimate, onOpenCancel, onCloseStart]);

	const summaryClickHandler = (e: React.MouseEvent<HTMLElement>): void => {
		e.preventDefault();
		if (isOpen) close();
		else open();
	};

	const transitionEndHandler = (): void => {
		setState(undefined);
		setStyle(undefined);

		if (state === 'opening') {
			if (onOpenEnd) onOpenEnd();
		}
		if (state === 'closing') {
			setOpen(false);
			if (onCloseEnd) onCloseEnd();
		}
	};

	// control via `isOpen` prop
	React.useEffect(() => {
		if (propOpen) open();
		else close();
	}, [propOpen]);	// eslint-disable-line react-hooks/exhaustive-deps

	// open start effect: discover height, set height to 0, then trigger 'opening'
	useLayoutEffect(() => {
		if (!isOpen) setState(undefined);
		if (isOpen && contents) {
			setHeight(contents.offsetHeight);
			if (shouldAnimate) {
				setStyle({ height: 0 });
				window.requestAnimationFrame(() => {
					setState('opening');
				});
			}
		}
	}, [isOpen, contents, shouldAnimate]);

	// set the style height when opening/closing
	React.useEffect(() => {
		if (shouldAnimate) {
			if (state === 'opening' && height) {
				setStyle({ height });
			}
			if (state === 'closing') {
				setStyle({ height: 0 });
			}
		} else {
			setStyle(undefined);
		}
	}, [state, height, shouldAnimate]);

	const getMarkerIcon = React.useCallback((
		m: typeof marker,
	): Pick<IconProps, 'variant' | 'icon'> | undefined => {
		if (!m) return undefined;
		if (typeof m === 'string') return { variant: m };
		if (typeof m === 'function') return getMarkerIcon(m(panel));
		return { icon: m };
	}, [panel]);

	const Marker = React.useMemo(() => {
		if (!marker) return undefined;
		const iconProps = getMarkerIcon(marker);
		return (
			<span className={markerClass}>
				<Icon
					{...iconProps}
					data-transform={transform}
				/>
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

	const classes = classNames(
		className,
		baseName,
		state && `nds-${state}`,
		{
			[`${baseName}--panel`]: panel,
			'nds-reduced-motion': !shouldAnimate,
		},
	);

	return (
		<BaseDetails ref={ref} className={classes} open={isOpen} {...props}>
			<BaseSummary
				className={summaryClass}
				marker={Marker}
				onClick={summaryClickHandler}
				markerPosition={markerPos}
				aria-expanded={isOpen}
			>
				<span className={`${baseName}__title`}>{ summary }</span>
			</BaseSummary>
			{ isOpen && (
				<div
					style={style}
					className={contentsOuterClass}
					ref={setContents}
					onTransitionEnd={transitionEndHandler}
				>
					<div className={contentsInnerClass}>{ children }</div>
				</div>
			) }
		</BaseDetails>
	);
});
