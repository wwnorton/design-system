import React from 'react';
import classNames from 'classnames';
import { Button } from '../Button';
import { Popper } from '../Popper';
import { useForwardedRef, useId, usePopperTriggers } from '../../utilities';
import { PopoverProps } from './types';

export { PopoverProps } from './types';

/** A popover is a non-modal dialog that points to a reference element. */
export const Popover = React.forwardRef<HTMLElement, PopoverProps>(({
	// inherited from Popper
	isOpen,
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
	hideDelay = 300,
	showDelay,
	onRequestOpen,
	onRequestClose,

	// unique to Popover
	title,
	hideTitle,
	hideCloseButton,
	actions,
	baseName = 'nds-popover',
	headerClass = `${baseName}__header`,
	titleClass = `${baseName}__title`,
	closeButtonClass = `${baseName}__close`,
	bodyClass = `${baseName}__body`,
	actionBarClass = `${baseName}__actions`,
	arrowClass,
	onClose = (shouldFocusReference) => {
		if (shouldFocusReference && reference instanceof HTMLElement) {
			reference.focus();
		}
	},
	onOpen = (popper) => {
		if (popper) popper.focus();
	},

	// inherited from React.HTMLAttributes<HTMLDivElement>
	children,
	className,
	'aria-labelledby': ariaLabelledby,
	'aria-label': ariaLabel,
	...props
}: PopoverProps, ref) => {
	const [popper, setPopper] = useForwardedRef(ref);
	const titleId = useId();
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
		showDelay,
		onRequestClose: close,
		onRequestOpen: open,
	});

	const Header = React.useMemo(() => {
		if ((hideTitle || !title) && hideCloseButton) return null;
		return (
			<header className={headerClass}>
				{ !hideTitle && title && (
					<div
						className={titleClass}
						id={titleId}
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
		close, closeButtonClass, headerClass, hideCloseButton,
		hideTitle, title, titleClass, titleId,
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
		return { 'aria-labelledby': titleId };
	}, [ariaLabel, ariaLabelledby, hideTitle, title, titleId]);

	if (!children) return null;
	return (
		<Popper
			className={classNames(baseName, className)}
			data-no-title={(hideTitle || !title) ? '' : undefined}
			role="dialog"
			aria-modal="false"
			{...accessibleName}
			tabIndex={-1}
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
			{ Header }
			<section className={bodyClass}>{ children }</section>
			{ ActionBar }
		</Popper>
	);
});
