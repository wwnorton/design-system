import React from 'react';
import classNames from 'classnames';
import { uniqueId } from 'lodash-es';
import { BasePopper, BasePopperProps } from '../BasePopper';
import { prefix } from '../../config';
import { innerText } from '../../utilities';
import { useForwardedRef, usePopperTriggers, useToken } from '../../hooks';

export type Triggers =
	| 'click'
	| 'focus'
	| 'focusin'
	| 'manual'
	| 'mouseenter'
	| 'pointerenter'

type TooltipPicks =
	| 'placement'
	| 'modifiers'
	| 'strategy'
	| 'onFirstUpdate'
	| 'hideDelay'
	| 'trigger'

export type TooltipCoreProps = Pick<TooltipProps, TooltipPicks>;

export interface TooltipProps extends BasePopperProps {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** A className to apply to the content. Default will be `${baseName}__content`. */
	contentClass?: string;
	/** A className to apply to the arrow. Default will be `${baseName}__arrow`. */
	arrowClass?: string;
	/**
	 * Indicates that the tooltip is labelling the reference. If `false`, the
	 * tooltip will be used as description.
	 *
	 * Reference:
	 * - [ARIA Practices - Providing Accessible Names and Descriptions](https://w3c.github.io/aria-practices/#names_and_descriptions)
	 */
	asLabel?: boolean;
	/**
	 * A string of space-separated triggers. Options include `click`, `focus`,
	 * `focusin`, `mouseenter`, `pointerenter`, and `manual`. When `manual` is
	 * included anywhere in the string, the tooltip's visibility must be
	 * controlled via `isOpen`. Default is `"focus pointerenter"`.
	 */
	trigger?: string;
	/**
	 * The time in milliseconds before the tooltip should disappear. Use this to
	 * ensure that users can move their cursor from the reference to the tooltip
	 * without it disappearing.
	 */
	hideDelay?: number;
}

export const Tooltip = React.forwardRef<HTMLElement, TooltipProps>((
	{
		baseName = prefix('tooltip'),
		contentClass = `${baseName}__content`,
		arrowClass = `${baseName}__arrow`,
		modifiers,
		placement = 'top',
		asLabel = false,
		trigger = 'focus pointerenter',
		hideDelay = 200,
		reference,
		isOpen = false,
		id: userId,
		children,
		className,
		...props
	}: TooltipProps, ref,
) => {
	const [popper, setPopper] = useForwardedRef(ref);
	const [offsetY] = useToken({ name: 'tooltip-offset-y', el: popper });
	const { current: id } = React.useRef(userId || uniqueId(`${baseName}-`));
	const open = usePopperTriggers({
		reference, popper, trigger, isOpen, hideDelay,
	});

	const ariaAttribute = React.useMemo(() => {
		if (asLabel) return 'aria-labelledby';
		return 'aria-describedby';
	}, [asLabel]);

	const offsetMod = React.useMemo(() => {
		let y: number;
		if (typeof offsetY === 'string') y = parseInt(offsetY, 10);
		else if (offsetY === null) y = 6;
		else y = offsetY;
		return {
			name: 'offset',
			options: {
				offset: [0, y],
			},
		};
	}, [offsetY]);

	const arrowMod = React.useMemo(() => ({
		name: 'arrow',
		options: {
			element: `.${arrowClass}`,
		},
	}), [arrowClass]);

	/**
	 * Attach aria labelling and describing attributes.
	 * When rendered `asLabel`, the tooltip will name the reference element. To
	 * accomplish this, the reference element will have an `aria-label` when
	 * closed and `aria-labelledby` when open.
	 * When rendered as a description (`asLabel=false`), the tooltip will
	 * describe the reference element via `aria-describedby` on open.
	 */
	React.useLayoutEffect(() => {
		if (reference && reference instanceof Element) {
			const currentRefs = reference.getAttribute(ariaAttribute);
			if (currentRefs && !currentRefs.split(/\s+/g).includes(id)) return;
			const currentLabel = reference.getAttribute('aria-label');
			if (open) {
				reference.setAttribute(ariaAttribute, id);
				reference.removeAttribute('aria-label');
			} else {
				reference.removeAttribute(ariaAttribute);
				if (asLabel && children) {
					reference.setAttribute('aria-label', currentLabel || innerText(children));
				}
			}
		}
	}, [asLabel, children, id, open, reference, ariaAttribute]);

	if (!children) return null;

	return (
		<BasePopper
			aria-hidden="true"
			className={classNames(baseName, className)}
			role="tooltip"
			modifiers={[...(modifiers || []), offsetMod, arrowMod]}
			placement={placement}
			reference={reference}
			isOpen={open}
			id={id}
			ref={setPopper}
			{...props}
		>
			<div className={contentClass}>{ children }</div>
			<div className={arrowClass} />
		</BasePopper>
	);
});
