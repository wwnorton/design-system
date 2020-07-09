import React from 'react';
import { createPortal } from 'react-dom';
import { srOnly } from '../../utilities';

type BaseProps = 'children' | 'id' | 'className' | 'role' | 'aria-atomic' | 'aria-live' | 'aria-relevant';
export interface LiveRegionProps extends Pick<React.HTMLAttributes<HTMLDivElement>, BaseProps> {
	/**
	 * The time in milliseconds that the live region should exist. Default is
	 * `450`. `undefined` or `0` will make the live region persist indefinitely.
	 */
	removeAfter?: number;
	/**
	 * The time in milliseconds that should elapse before the contents of the
	 * live region's contents should be updated. This should be long enough for
	 * screen readers to begin monitoring the live region for changes. Default
	 * is `50`.
	 */
	updateAfter?: number;
	/**
	 * Indicates whether the live region should be visible or not. If `true`,
	 * inline CSS will be used to visually hide the live region.
	 */
	visible?: boolean;
}

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
 * @ARIA https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
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

	const Node = React.useMemo(() => (
		<div
			aria-atomic={ariaAtomic}
			aria-live={ariaLive}
			aria-relevant={ariaRelevant}
			className={className}
			id={id}
			role={role}
			style={(visible) ? undefined : srOnly}
		>
			{ liveText }
		</div>
	), [
		ariaAtomic,
		ariaLive,
		ariaRelevant,
		className,
		id,
		liveText,
		role,
		visible,
	]);

	return createPortal((shouldRender) ? Node : null, document.body);
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
			if (prevChildren.current !== children) {
				prevChildren.current = children;
				setLiveText(children);
			}
		}
	}, [children, el]);

	return liveText;
};
