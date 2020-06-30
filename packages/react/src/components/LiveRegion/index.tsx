import React from 'react';
import { createPortal } from 'react-dom';
import { srOnly } from '../../utilities';

type BaseProps = 'children' | 'id' | 'className' | 'aria-atomic' | 'aria-live' | 'aria-relevant';
export interface LiveRegionProps extends Pick<React.HTMLAttributes<HTMLDivElement>, BaseProps> {
	/**
	 * The time in milliseconds that the live region should exist. Default is
	 * `450`. `undefined` or `0` will make the live region persist indefinitely.
	 */
	removeAfter?: number;
}

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
	removeAfter = 450,
	children,
	className,
	id,
	'aria-live': ariaLive = 'assertive',
	'aria-atomic': ariaAtomic,
	'aria-relevant': ariaRelevant,
}) => {
	const [liveText, setLiveText] = React.useState<React.ReactNode>('');
	const [shouldRender, setShouldRender] = React.useState(!removeAfter);

	React.useEffect(() => {
		if (children) {
			setShouldRender(true);
			window.setTimeout(() => {
				setLiveText(children);
				if (removeAfter) {
					window.setTimeout(() => {
						setShouldRender(false);
						setLiveText('');
					}, removeAfter);
				}
			}, 50);
		}
	}, [children, removeAfter]);

	const Node = React.useMemo(() => (
		<div
			aria-live={ariaLive}
			aria-atomic={ariaAtomic}
			aria-relevant={ariaRelevant}
			className={className}
			id={id}
			style={srOnly}
		>
			{ liveText }
		</div>
	), [liveText, className, id, ariaAtomic, ariaLive, ariaRelevant]);

	return createPortal((shouldRender) ? Node : null, document.body);
};
