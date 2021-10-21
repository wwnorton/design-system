import { PopperProps } from '../Popper';
import { UsePopperTriggersProps } from '../../utilities';
import { ButtonProps } from '../Button';

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
| 'onRequestOpen'
| 'onRequestClose'
>;

export type PopoverPropsBase =
PopperInherited & UsePopperTriggersInherited & React.HTMLAttributes<HTMLDivElement>;

export interface PopoverProps extends PopoverPropsBase {
	/**
	 * The name of the Modal dialog. Required for accessibility but can be
	 * visually hidden with the `hideTitle` prop.
	 */
	title?: string;
	/**
	 * Indicates that the title should be visually hidden. It will still be
	 * accessible to screen reader users.
	 */
	hideTitle?: boolean;
	/**
	 * Indicates that the built-in close button in the top right should not be
	 * rendered.
	 */
	hideCloseButton?: boolean;
	/**
	 * A list of actions or React Fragment that will be set inside an action bar
	 * at the bottom of the Modal dialog.
	 */
	actions?: React.ReactElement<ButtonProps>[] | React.ReactFragment;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** A className for the popover's header. Default will be `${baseName}__header`. */
	headerClass?: string;
	/**
	 * A className for the popover's title, which goes inside the header.
	 * Default will be `${baseName}__title`.
	 */
	titleClass?: string;
	/**
	 * A className for the popover's close button, which goes inside the header.
	 * Default will be `${baseName}__close`.
	 */
	closeButtonClass?: string;
	/**
	 * A className for the body of the popover, where the `children` go.
	 * Default will be `${baseName}__content`.
	 */
	bodyClass?: string;
	/** A className for the popover's action bar footer. Default will be `${baseName}__actionbar`. */
	actionBarClass?: string;
	/**
	 * A className for the popover's arrow. Default will be `${baseName}__arrow`.
	 * @deprecated - Use `arrowElement`.
	 */
	arrowClass?: string;
	/**
	 * Callback function that is called after the popover opens. The default
	 * function will focus the popover. Use this callback to focus something
	 * else inside the popover.
	 */
	onOpen?: (
		/** The popover HTML instance (the `[role="dialog"]` element). */
		popoverElement: HTMLElement,
	) => void;
	/**
	 * Callback function that is called after the popover closes. The default
	 * function will focus the reference element that opened the popover.
	 */
	onClose?: (
		/**
		 * Whether the reference element should be focused on close. This will
		 * be `true` unless the popover was closed as the result of an external click.
		 */
		shouldFocusReference: boolean,
	) => void;
}
