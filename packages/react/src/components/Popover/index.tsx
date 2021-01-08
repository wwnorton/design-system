import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import { BasePopper, BasePopperProps } from '../BasePopper';
import { prefix } from '../../config';
import { innerText } from '../../utilities';
import { useForwardedRef, usePopperTriggers, useToken } from '../../hooks';
import { IconButton, ButtonProps } from '../Button';

export type PopoverlAnatomy =
	| 'header'
	| 'title'
	| 'closeButton'
	| 'content'
	| 'actionBar'

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
	/** A className to apply to the content. Default will be `${baseName}__content`. */
	contentClass?: string;
	/** A className to apply to the arrow. Default will be `${baseName}__arrow`. */
	arrowClass?: string;
	/**
	 * Indicates that the popover is labelling the reference. If `false`, the
	 * popover will be used as description.
	 *
	 * Reference:
	 * - [ARIA Practices - Providing Accessible Names and Descriptions](https://w3c.github.io/aria-practices/#names_and_descriptions)
	 */
	asLabel?: boolean;
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

const defaultProps: PopoverProps = {
	isOpen: false,
	hideTitle: false,
	hideCloseButton: false,
};

export const Popover = React.forwardRef<HTMLElement, PopoverProps>((
	{
		baseName = prefix('popover'),
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
	const { current: id } = React.useRef(userId || uniqueId(`${baseName}-`));
	const bemElements: Record<PopoverlAnatomy, string> = {
		header: 'header',
		title: 'title',
		closeButton: 'close',
		content: 'content',
		actionBar: 'actionbar',
	};
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

	const requestClose = (): void => {
		if (onRequestClose) onRequestClose();
	};

	function Title(): JSX.Element | null {
		const titleClass = `${baseName}__${bemElements.title}`;
		return (
			<span className={titleClass}>{title}</span>
		);
	}

	function CloseButton(): JSX.Element | null {
		const closeButtonClass = `${baseName}__${bemElements.closeButton}`;
		return (
			<IconButton
				icon="close"
				className={classNames(closeButtonClass, 'button--base')}
				onClick={requestClose}
			>
				Close
			</IconButton>
		);
	}

	function Header(): JSX.Element | null {
		const headerClass = `${baseName}__${bemElements.header}`;
		const headerBottomBorder = (hideTitle === false)
			? `${baseName}__header_border_bottom`
			: '';
		return (
			<header
				className={`${headerClass} ${headerBottomBorder}`}
			>
				{ !hideTitle ? Title() : null }
				{ !hideCloseButton ? CloseButton() : null}
			</header>
		);
	}

	function ActionBar(): JSX.Element | null {
		const actionBarClass = `${baseName}__${bemElements.actionBar}`;
		return (
			<footer
				className={actionBarClass}
			>
				{ actions }
			</footer>
		);
	}
	/**
		 * Attach aria labelling and describing attributes.
		 * When rendered `asLabel`, the popover will name the reference element. To
		 * accomplish this, the reference element will have an `aria-label` when
		 * closed and `aria-labelledby` when open.
		 * When rendered as a description (`asLabel=false`), the popover will
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
			role="dialog"
			modifiers={[...(modifiers || []), offsetMod, arrowMod]}
			placement={placement}
			reference={reference}
			isOpen={open}
			id={id}
			ref={setPopper}
			{...props}
		>
			{(hideCloseButton === true && hideTitle === true) ? null : Header()}
			<section
				className={contentClass}
			>
				{ children }
			</section>
			{ actions ? ActionBar() : null }
			<div className={arrowClass} />
		</BasePopper>
	);
});

Popover.defaultProps = defaultProps;
