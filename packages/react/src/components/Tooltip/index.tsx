import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import { BasePopper, BasePopperProps } from '../BasePopper';
import { prefix } from '../../config';
import {
	useForwardedRef, usePopperTriggers, UsePopperTriggersProps, useToken,
} from '../../hooks';
import { PopperOptions } from '../../types/popper';

export interface TooltipProps extends
	BasePopperProps,
	Partial<Pick<UsePopperTriggersProps, 'hideDelay'>> {
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
	 * A space-separated string of events. Triggers can be any combination of the
	 * following:
	 * - `click`
	 * - `focus`
	 * - `focusin`
	 * - `mouseenter`
	 * - `pointerenter`
	 * - `manual`
	 */
	trigger?: string;
}

export type TooltipCoreProps = PopperOptions & Pick<UsePopperTriggersProps, 'hideDelay' | 'trigger'>;

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
		isOpen: propOpen,
		children,
		className,
		...props
	}: TooltipProps, ref,
) => {
	const [popper, setPopper] = useForwardedRef(ref);
	const [offsetY] = useToken({ name: 'tooltip-offset-y', el: popper });
	const { current: ariaId } = React.useRef(uniqueId(`${baseName}-`));
	const [isOpen, setIsOpen] = React.useState(propOpen || false);

	React.useEffect(() => {
		if (propOpen !== undefined) setIsOpen(propOpen);
	}, [propOpen]);

	usePopperTriggers({
		reference,
		popper,
		trigger,
		isOpen,
		hideDelay,
		onRequestClose: () => !trigger.includes('manual') && setIsOpen(false),
		onRequestOpen: () => !trigger.includes('manual') && setIsOpen(true),
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
			reference.setAttribute(
				(asLabel) ? 'aria-labelledby' : 'aria-describedby',
				ariaId,
			);
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
