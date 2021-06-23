import { PopperProps } from '../Popper';
import { UsePopperTriggersProps } from '../../utilities';

type PopperInherited = Pick<PopperProps,
| 'isOpen'
| 'transition'
| 'reference'
| 'arrowElement'
| 'distance'
| 'boundary'
| 'placement'
| 'modifiers'
| 'strategy'
| 'onFirstUpdate'
>;

type UsePopperTriggersInherited = Pick<UsePopperTriggersProps,
| 'hideDelay'
| 'showDelay'
>;

export type TooltipCoreProps = PopperInherited & UsePopperTriggersInherited;

export type TooltipPropsBase =
	PopperInherited & UsePopperTriggersInherited & React.HTMLAttributes<HTMLDivElement>;

export interface TooltipProps extends TooltipPropsBase {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** A className to apply to the body of the tooltip. */
	bodyClass?: string;
	/**
	 * A className to apply to the content. Default will be `${baseName}__content`.
	 * @deprecated Use the `bodyClass`.
	 */
	contentClass?: string;
	/**
	 * A className to apply to the arrow. Default will be `${baseName}__arrow`.
	 * @deprecated - Use `arrowElement`.
	 */
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
