import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import {
	useForwardedRef, usePopperTriggers,
} from '../../utilities';
import { Popper } from '../Popper';
import { TooltipProps } from './types';

export { TooltipProps } from './types';

export const Tooltip = React.forwardRef<HTMLElement, TooltipProps>((
	{
		// inherited from Popper
		isOpen: isOpenProp,
		transition = 'fade',
		reference,
		arrowElement,
		distance,
		boundary,
		placement = 'top',
		modifiers,
		strategy,
		onFirstUpdate,

		// inherited from usePopperTriggers
		hideDelay = 200,
		showDelay = 0,

		// unique to Tooltip
		baseName = 'nds-tooltip',
		bodyClass = `${baseName}__body`,
		contentClass,
		arrowClass,
		asLabel = false,
		trigger = 'focus pointerenter',

		// inherited from React.HTMLAttributes<HTMLDivElement>
		children,
		className,
		...props
	}: TooltipProps, ref,
) => {
	const [popper, setPopper] = useForwardedRef(ref);
	const ariaId = React.useRef(uniqueId(`${baseName}-`));
	const [isOpen, setIsOpen] = React.useState(isOpenProp || false);

	React.useEffect(() => {
		if (isOpenProp !== undefined) setIsOpen(isOpenProp);
	}, [isOpenProp]);

	usePopperTriggers({
		reference,
		popper,
		trigger,
		isOpen,
		hideDelay,
		showDelay,
		onRequestClose: () => !trigger.includes('manual') && setIsOpen(false),
		onRequestOpen: () => !trigger.includes('manual') && setIsOpen(true),
	});

	/**
	 * Attach aria labelling/describing attributes to the reference.
	 * When rendered `asLabel`, it will use `aria-labelledby`. Otherwise, it will
	 * use `aria-describedby`.
	 */
	React.useEffect(() => {
		if (reference && reference instanceof Element) {
			reference.setAttribute(
				(asLabel) ? 'aria-labelledby' : 'aria-describedby',
				ariaId.current,
			);
		}
	}, [asLabel, reference]);

	if (!children) return null;

	return (
		<>
			{/* the tooltip is an affordance for sighted users only */}
			<Popper
				role="tooltip"
				aria-hidden="true"
				className={classNames(baseName, className)}
				isOpen={isOpen}
				transition={transition}
				reference={reference}
				arrowElement={arrowElement || arrowClass}
				distance={distance}
				boundary={boundary}
				placement={placement}
				modifiers={modifiers}
				strategy={strategy}
				onFirstUpdate={onFirstUpdate}
				enableArrow
				ref={setPopper}
				{...props}
			>
				<div className={contentClass || bodyClass}>{ children }</div>
			</Popper>
			{/* a persistent, hidden div that is used for the accessible name or description */}
			<div hidden aria-hidden="true" id={ariaId.current}>{ children }</div>
		</>
	);
});
