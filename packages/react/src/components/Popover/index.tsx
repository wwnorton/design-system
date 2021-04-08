import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import { BasePopper, BasePopperProps } from '../BasePopper';
import { Button, ButtonProps } from '../Button';
import {
	useForwardedRef, usePopperTriggers, useToken, UsePopperTriggersProps,
} from '../../utilities';

export interface PopoverProps extends
	BasePopperProps,
	Pick<UsePopperTriggersProps, 'hideDelay' | 'onRequestOpen' | 'onRequestClose'> {
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
	/** A className for the popover's arrow. Default will be `${baseName}__arrow`. */
	arrowClass?: string;
}

/** A popover is a non-modal dialog that points to a reference element. */
export const Popover = React.forwardRef<HTMLElement, PopoverProps>((
	{
		baseName = 'nds-popover',
		bodyClass = `${baseName}__body`,
		arrowClass = `${baseName}__arrow`,
		headerClass = `${baseName}__header`,
		titleClass = `${baseName}__title`,
		closeButtonClass = `${baseName}__close`,
		actionBarClass = `${baseName}__actions`,
		modifiers,
		placement = 'top',
		hideDelay = 300,
		reference,
		isOpen,
		hideTitle,
		children,
		className,
		title,
		actions,
		hideCloseButton,
		onRequestClose,
		onRequestOpen,
		onClose = (shouldFocusReference) => {
			if (shouldFocusReference && reference instanceof HTMLElement) {
				reference.focus();
			}
		},
		onOpen = (popper) => {
			if (popper) popper.focus();
		},
		'aria-labelledby': ariaLabelledby,
		'aria-label': ariaLabel,
		...props
	}: PopoverProps, ref,
) => {
	const [popper, setPopper] = useForwardedRef(ref);
	const [offsetY] = useToken({ name: 'popover-offset-y', el: popper });
	const titleId = React.useRef(uniqueId(`${baseName}-title-`));
	const focusReferenceOnClose = React.useRef(true);
	const prevOpen = React.useRef(isOpen);

	const close: PopoverProps['onRequestClose'] = React.useCallback((trigger) => {
		focusReferenceOnClose.current = trigger !== 'click.external';
		if (onRequestClose) onRequestClose(trigger);
	}, [onRequestClose]);

	const open: PopoverProps['onRequestOpen'] = (trigger) => {
		if (onRequestOpen) onRequestOpen(trigger);
	};

	usePopperTriggers({
		reference,
		popper,
		trigger: 'click',
		isOpen,
		hideDelay,
		onRequestClose: close,
		onRequestOpen: open,
	});

	const offsetMod = React.useMemo(() => {
		let y: number;
		if (typeof offsetY === 'string') y = parseInt(offsetY, 10);
		else if (offsetY === null) y = 8;
		else y = offsetY;
		return {
			name: 'offset',
			options: {
				offset: [0, y],
			},
		};
	}, [offsetY]);

	const arrowMod = {
		name: 'arrow',
		options: {
			element: `.${arrowClass}`,
		},
	};

	const Header = React.useMemo(() => {
		if ((hideTitle || !title) && hideCloseButton) return null;
		return (
			<header className={headerClass}>
				{ !hideTitle && title && (
					<div
						className={titleClass}
						id={titleId.current}
					>
						{title}
					</div>
				) }
				{ !hideCloseButton && (
					<Button
						icon="close"
						iconOnly
						className={closeButtonClass}
						onClick={() => close('click.internal')}
						tooltipProps={{ placement: 'left' }}
					>
						Close
					</Button>
				) }
			</header>
		);
	}, [
		close, closeButtonClass, headerClass,
		hideCloseButton, hideTitle, title, titleClass,
	]);

	const ActionBar = React.useMemo(() => {
		if (!actions) return null;
		return (
			<footer className={actionBarClass}>
				{ actions }
			</footer>
		);
	}, [actionBarClass, actions]);

	// call the onOpen/onClose callbacks
	React.useEffect(() => {
		if (!prevOpen.current && isOpen && popper) {
			onOpen(popper);
			prevOpen.current = true;
		}

		if (prevOpen.current && !isOpen) {
			onClose(focusReferenceOnClose.current);
			prevOpen.current = false;
		}
	}, [isOpen, onClose, onOpen, popper]);

	const accessibleName = React.useMemo(() => {
		// 1. use the explicit aria-labelledby prop
		if (ariaLabelledby) return { 'aria-labelledby': ariaLabelledby };
		// 2. use the explicit aria-label prop
		if (ariaLabel) return { 'aria-label': ariaLabel };
		// 3. if `hideTitle`, set aria-label equal to the title
		if (hideTitle) return { 'aria-label': title };
		// 4. label the dialog with the visible title
		return { 'aria-labelledby': titleId.current };
	}, [ariaLabel, ariaLabelledby, hideTitle, title]);

	if (!children) return null;
	return (
		<BasePopper
			className={classNames(baseName, className)}
			data-no-title={(hideTitle || !title) ? '' : undefined}
			role="dialog"
			aria-modal="false"
			{...accessibleName}
			tabIndex={-1}
			modifiers={[...(modifiers || []), offsetMod, arrowMod]}
			placement={placement}
			reference={reference}
			isOpen={isOpen}
			ref={setPopper}
			{...props}
		>
			{ Header }
			<section className={bodyClass}>{ children }</section>
			{ ActionBar }
			<div className={arrowClass} />
		</BasePopper>
	);
});
