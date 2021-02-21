import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
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
	 * Attach aria labelling/describing attributes to the reference.
	 * When rendered `asLabel`, it will use `aria-labelledby`. Otherwise, it will
	 * use `aria-describedby`.
	 */
	React.useEffect(() => {
		if (reference && reference instanceof Element) {
			if (asLabel) {
				reference.setAttribute('aria-labelledby', ariaId);
			} else {
				// aria-describedby can point to more than one id
				const idArray = (reference.getAttribute('aria-describedby') || ariaId).split(/\s+/g);
				if (!idArray.includes(ariaId)) idArray.push(ariaId);
				reference.setAttribute('aria-describedby', idArray.join(' '));
			}
		}
	}, [asLabel, reference, ariaId]);

	if (!children) return null;

	return (
		<>
			{/* the tooltip is an affordance for sighted users only */}
			<BasePopper
				role="tooltip"
				aria-hidden="true"
				className={classNames(baseName, className)}
				modifiers={[...(modifiers || []), offsetMod, arrowMod]}
				placement={placement}
				reference={reference}
				isOpen={isOpen}
				ref={setPopper}
				{...props}
			>
				<div className={contentClass}>{ children }</div>
				<div className={arrowClass} />
			</BasePopper>
			{/* a persistent, hidden div that is used for the accessible name or description */}
			<div hidden aria-hidden="true" id={ariaId}>{ children }</div>
		</>
	);
});
