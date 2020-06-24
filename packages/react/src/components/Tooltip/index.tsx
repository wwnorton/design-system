import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { BasePopper, BasePopperProps } from '../BasePopper';
import { getProp, useTriggers, useForwardedRef } from '../../utilities';

export type Triggers =
	| 'click'
	| 'focus'
	| 'focusin'
	| 'manual'
	| 'mouseenter'
	| 'pointerenter'
export interface TooltipProps extends BasePopperProps {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** A className to apply to the arrow. Default will be `${baseName}__arrow`. */
	arrowClass?: string;
	/**
	 * Indicates that the tooltip is labelling the reference. If `false`, the
	 * tooltip will be used as description.
	 * @see https://w3c.github.io/aria-practices/#names_and_descriptions
	 */
	asLabel?: boolean;
	/**
	 * A string of space-separated triggers. Options include `click`, `focus`,
	 * `focusin`, `mouseenter`, `pointerenter`, and `manual`. When `manual` is
	 * included anywhere in the string, the tooltip's visibility must be
	 * controlled via `isOpen`. Default is `"focus pointerenter"`.
	 */
	trigger?: string;
}

export const Tooltip = React.forwardRef<HTMLElement, TooltipProps>((
	{
		baseName = 'tooltip',
		arrowClass = `${baseName}__arrow`,
		modifiers = [],
		placement = 'top',
		asLabel = false,
		trigger = 'focus pointerenter',
		reference,
		isOpen = false,
		id: userId,
		children,
		className,
		...props
	}: TooltipProps, ref,
) => {
	const [tooltip, setTooltip] = useForwardedRef(ref);
	const { current: id } = React.useRef(userId || uniqueId(`${baseName}-`));
	const open = useTriggers({
		reference, trigger, isOpen, tooltip,
	});

	const offsetMod = {
		name: 'offset',
		options: {
			offset: [
				0,
				parseInt(getProp('tooltip-offset-y'), 10) || 6,
			],
		},
	};

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
			const ariaAttribute = (asLabel) ? 'aria-labelledby' : 'aria-describedby';
			if (open) {
				reference.setAttribute(ariaAttribute, id);
				reference.removeAttribute('aria-label');
			} else {
				reference.removeAttribute(ariaAttribute);
				if (asLabel && children) {
					reference.setAttribute('aria-label', children.toString());
				}
			}
		}
	}, [asLabel, children, id, open, reference]);

	if (!children) return null;

	return (
		<BasePopper
			aria-hidden="true"
			className={classNames(baseName, className)}
			role="tooltip"
			modifiers={[...modifiers, offsetMod, arrowMod]}
			placement={placement}
			reference={reference}
			isOpen={open}
			id={id}
			ref={setTooltip}
			{...props}
		>
			{ children }
			<div className={arrowClass} />
		</BasePopper>
	);
});
