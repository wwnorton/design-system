import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import { BasePopper, BasePopperProps } from '../BasePopper';
import { prefix } from '../../config';
import { innerText } from '../../utilities';
import { useForwardedRef, usePopperTriggers, useToken } from '../../hooks';
import { Button, ButtonProps } from '../Button';

type PopoverPicks =
	| 'placement'
	| 'modifiers'
	| 'strategy'
	| 'onFirstUpdate'
	| 'hideDelay'
	| 'trigger'

export type PopoverCoreProps = Pick<PopoverProps, PopoverPicks>;

export interface PopoverProps extends BasePopperProps {
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
	/**
	 * A string of space-separated triggers. Options include `click`, `focus`,
	 * `focusin`, `mouseenter`, `pointerenter`, and `manual`. When `manual` is
	 * included anywhere in the string, the popover's visibility must be
	 * controlled via `isOpen`. Default is `"focus pointerenter"`.
	 */
	trigger?: string;
	/**
	 * The time in milliseconds before the popover should disappear. Use this to
	 * ensure that users can move their cursor from the reference to the popover
	 * without it disappearing.
	 */
	hideDelay?: number;

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
	 * Callback function that is called when the Modal would like to close. This
	 * will happen under the following conditions:
	 * * if `closeOnBackdropClick` is `true` and the user clicks the backdrop.
	 * * if `closeOnEscape` is `true` and the user presses `Escape`.
	 * * if `hideCloseButton` is not `true` and the user clicks the close button.
	 *
	 * To close the Modal when `onRequestClose` triggers, simply update the
	 * `isOpen` prop to `false`.
	 */
	onRequestClose?: () => void;
}

export const Popover = React.forwardRef<HTMLElement, PopoverProps>((
	{
		baseName = prefix('popover'),
		bodyClass = `${baseName}__body`,
		arrowClass = `${baseName}__arrow`,
		headerClass = `${baseName}__header`,
		titleClass = `${baseName}__title`,
		closeButtonClass = `${baseName}__close`,
		actionBarClass = `${baseName}__actions`,
		modifiers,
		placement = 'top',
		trigger = 'focus pointerenter',
		hideDelay = 200,
		reference,
		isOpen = false,
		hideTitle,
		children,
		className,
		title,
		actions,
		hideCloseButton,
		onRequestClose,
		...props
	}: PopoverProps, ref,
) => {
	const [popper, setPopper] = useForwardedRef(ref);
	const [offsetY] = useToken({ name: 'popover-offset-y', el: popper });
	const { current: titleId } = React.useRef(uniqueId(`${baseName}-title-`));

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

	const Title = React.useMemo(() => (
		<div className={titleClass} id={titleId}>{title}</div>
	), [title, titleClass, titleId]);

	const CloseButton = React.useMemo(() => (
		<Button
			icon="close"
			iconOnly
			className={closeButtonClass}
			onClick={onRequestClose}
		>
			Close
		</Button>
	), [onRequestClose, closeButtonClass]);

	const Header = React.useMemo(() => {
		const headerBottomBorder = (hideTitle === false)
			? `${baseName}__header_border_bottom`
			: '';
		return (
			<header
				className={`${headerClass} ${headerBottomBorder}`}
			>
				{ !hideTitle ? Title : null }
				{ !hideCloseButton ? CloseButton : null}
			</header>
		);
	}, [baseName, headerClass, Title, CloseButton, hideCloseButton, hideTitle]);

	const ActionBar = React.useMemo(() => (
		<footer
			className={actionBarClass}
		>
			{ actions }
		</footer>
	), [actions, actionBarClass]);

	const Body = React.useMemo(() => {
		if (children !== undefined) {
			return (
				<>
					{(hideCloseButton === true && hideTitle === true) ? null : Header}
					<section
						className={bodyClass}
					>
						{ children }
					</section>
					{ actions ? ActionBar : null }
					<div className={arrowClass} />
				</>
			);
		}
		return null;
	}, [hideCloseButton, hideTitle, actions, ActionBar, Header, arrowClass, bodyClass, children]);

	if (!children) return null;
	return (
		<BasePopper
			className={classNames(baseName, className)}
			role="dialog"
			aria-modal="false"
			aria-labelledby={(hideTitle) ? undefined : titleId}
			aria-label={(hideTitle) ? title : undefined}
			modifiers={[...(modifiers || []), offsetMod, arrowMod]}
			placement={placement}
			reference={reference}
			isOpen={open}
			ref={setPopper}
			{...props}
		>
			{ Body }
		</BasePopper>
	);
});