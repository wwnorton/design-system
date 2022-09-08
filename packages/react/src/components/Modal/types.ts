import { BaseDialogProps } from '../BaseDialog';
import { ButtonProps } from '../Button';

export type ModalAnatomy =
	| 'portal'
	| 'backdrop'
	| 'header'
	| 'title'
	| 'closeButton'
	| 'content'
	| 'actionBar';

export interface ModalProps extends BaseDialogProps {
	/** Indicates whether the Modal dialog is open. */
	isOpen?: boolean;
	/**
	 * The name of the Modal dialog. Required for accessibility but can be
	 * visually hidden with the `hideTitle` prop.
	 */
	title: string;
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
	 * Indicates whether the header should stick to the top of the screen. Only
	 * has an effect when the modal's content is longer than the window height
	 * and the user scrolls enough to move the header above to top of the screen.
	*/
	stickyHeader?: boolean;
	/**
	 * Indicates whether the footer should stick to the bottom of the screen.
	 * Only has an effect when the modal's content is longer than the window
	 * height and the footer is below the bottom of the screen.
	*/
	stickyActionBar?: boolean;
	/**
	 * An element that should be focused on open. If none is specified, the first
	 * focusable element in the Modal will be focused. If none can be found, the
	 * header or content will be focused.
	 */
	focusOnOpen?: HTMLElement;
	/** Indicates whether clicking the backdrop should close the Modal dialog. */
	closeOnBackdropClick?: boolean;
	/** Indicates whether `Escape` should close the Modal dialog. */
	closeOnEscape?: boolean;
	/**
	 * A function that returns an element where the Modal dialog should be
	 * attached to the DOM. Default is the `body`.
	 */
	mountPoint?: () => HTMLElement;

	baseName?: string;
	backdropClass?: string;
	headerClass?: string;
	titleClass?: string;
	closeButtonClass?: string;
	contentClass?: string;
	actionBarClass?: string;
	portalClass?: string;

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
	onOpen?: () => void;

	headerRef?: React.Ref<HTMLElement>;
	contentRef?: React.Ref<HTMLElement>;
	actionBarRef?: React.Ref<HTMLElement>;
}

export interface ModalState {
	isOpen: boolean;
	trigger: HTMLElement | null;
	long: boolean;
	stuckHeader: boolean;
	stuckFooter: boolean;
	isClickingDialog: boolean;
}

export interface ModalSnapshot {
	prevMount: HTMLElement;
	nextMount: HTMLElement;
}
