import React from 'react';
import classNames from 'classnames';
import { BasePopper, BasePopperProps } from '../BasePopper';
import { getProp } from '../../utilities';

export interface TooltipProps extends BasePopperProps {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** A className to apply to the arrow. Default will be `${baseName}__arrow`. */
	arrowClass?: string;
}

export const Tooltip = React.forwardRef<HTMLElement, TooltipProps>((
	{
		baseName = 'tooltip',
		arrowClass = `${baseName}__arrow`,
		modifiers = [],
		placement = 'top',
		children,
		className,
		...props
	}: TooltipProps, ref,
) => {
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

	if (!children) return null;
	return (
		<BasePopper
			className={classNames(baseName, className)}
			role="tooltip"
			modifiers={[...modifiers, offsetMod, arrowMod]}
			placement={placement}
			ref={ref}
			{...props}
		>
			{ children }
			<div className={arrowClass} />
		</BasePopper>
	);
});
