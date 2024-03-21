import React from 'react';
import { createPortal } from 'react-dom';
import isEqual from 'react-fast-compare';
import { LiveRegionProps } from './types';

const srOnly: React.CSSProperties = {
	position: 'absolute',
	width: '1px',
	height: '1px',
	padding: '0',
	margin: '-1px',
	overflow: 'hidden',
	clip: 'rect(0, 0, 0, 0)',
	whiteSpace: 'nowrap',
	border: '0',
};

const defaultProps: LiveRegionProps = {
	removeAfter: 450,
	updateAfter: 50,
	'aria-live': 'assertive',
};

/**
 * Render an ARIA live region as a React Portal. Changing the `children` of this
 * component will result in
 * 1. Render the live region.
 * 2. Wait a moment so that AT can start monitoring it for changes.
 * 3. Update it with a duplicate of the new children to ensure that screen
 * reader users will perceive the change in content.
 * 4. Remove the live region a moment later.
 *
 * Reference:
 * - [MDN - ARIA Live Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
 */
export const LiveRegion: React.FunctionComponent<LiveRegionProps> = ({
	removeAfter = defaultProps.removeAfter,
	updateAfter = defaultProps.updateAfter,
	visible,
	'aria-atomic': ariaAtomic,
	'aria-live': ariaLive = defaultProps['aria-live'],
	'aria-relevant': ariaRelevant,
	children,
	className,
	id,
	role,
}) => {
	const [liveText, setLiveText] = React.useState<React.ReactNode>('');
	const [shouldRender, setShouldRender] = React.useState(false);
	const prevChildren = React.useRef(children);
	const renderTimeout = React.useRef<number>();

	/** Hide the live region. */
	const hide = (): void => {
		setLiveText('');
		setShouldRender(false);
	};

	/** Update the live region's contents. */
	const updateContents = React.useCallback((): void => {
		setLiveText(children);
		if (removeAfter) {
			renderTimeout.current = window.setTimeout(hide, removeAfter);
		}
	}, [children, removeAfter]);

	/** Update the live region's contents after it is rendered. */
	React.useEffect(() => {
		if (shouldRender) {
			window.setTimeout(updateContents, updateAfter);
		}
	}, [shouldRender, updateContents, updateAfter]);

	/** Show the live region any time `children` change. */
	React.useEffect(() => {
		if (children && prevChildren.current !== children) {
			window.clearTimeout(renderTimeout.current);
			prevChildren.current = children;
			setShouldRender(true);
		}
	}, [children]);

	const Node = React.useMemo(
		() => (
			<div
				aria-atomic={ariaAtomic}
				aria-live={ariaLive}
				aria-relevant={ariaRelevant}
				className={className}
				id={id}
				role={role}
				style={visible ? undefined : srOnly}
			>
				{liveText}
			</div>
		),
		[ariaAtomic, ariaLive, ariaRelevant, className, id, liveText, role, visible],
	);

	if (typeof document === 'undefined') return null;
	return createPortal(shouldRender ? Node : null, document.body);
};

LiveRegion.defaultProps = defaultProps;

/**
 * Monitor an element for content changes. Returns the element's changed content,
 * which should be passed to a `LiveRegion` as `children` to ensure that screen
 * reader users will be notified of the change.
 */
export const useContentMonitor = (
	el: HTMLElement | null,
	children: React.ReactNode,
): React.ReactNode => {
	const [liveText, setLiveText] = React.useState<React.ReactNode>('');
	const prevChildren = React.useRef(children);

	React.useEffect(() => {
		if (el && document.activeElement === el) {
			if (!isEqual(prevChildren.current, children)) {
				prevChildren.current = children;
				setLiveText(children);
			}
		}
	}, [children, el]);

	return liveText;
};
