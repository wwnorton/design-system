import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {
	noop, idGen, getFocusable, prefix,
} from '../../utilities';
import { BaseDialog, BaseDialogProps } from '../BaseDialog';
import { IconButton, ButtonProps } from '../Button';

export type ModalAnatomy =
	| 'portal'
	| 'backdrop'
	| 'header'
	| 'title'
	| 'closeButton'
	| 'content'
	| 'actionBar'

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
	/** Indicates whether the close button in the top right should be included. */
	addCloseButton?: boolean;
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
	 * header will be focused.
	 */
	initialFocusRef?: React.RefObject<HTMLElement>;
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
	 * * if `addCloseButton` is `true` and the user clicks the close button.
	 *
	 * To close the Modal when `onRequestClose` triggers, simply update the
	 * `isOpen` prop to `false`.
	 */
	onRequestClose?: () => void;
	onOpen?: () => void;
	onInitialFocus?: (focusedElement: HTMLElement) => void;
	/**
	 * Callback function that is called when the user presses `Tab` on the last
	 * tabbable element or `Shift + Tab` on the first tabbable element. To
	 * prevent wrapping in either direction, return `false`.
	 */
	onRequestFocusWrap?: (prevFocus: typeof document['activeElement'], nextFocus: HTMLElement) => void | boolean;

	headerRef?: React.Ref<HTMLElement>;
	contentRef?: React.Ref<HTMLElement>;
	actionBarRef?: React.Ref<HTMLElement>;
}

export interface ModalState {
	isOpen: boolean;
	trigger: HTMLElement | null;
	canFocus: boolean;
}

export interface ModalSnapshot {
	prevMount: HTMLElement;
	nextMount: HTMLElement;
}

/**
 * Modal dialog.
 */
export class Modal extends React.PureComponent<ModalProps, ModalState> {
	public static bemBase = 'modal';
	public static bemElements: Record<ModalAnatomy, string> = {
		portal: 'portal',
		backdrop: 'backdrop',
		header: 'header',
		title: 'title',
		closeButton: 'close',
		content: 'content',
		actionBar: 'actionbar',
	}

	private getId: ReturnType<typeof idGen>;
	private titleId: string;
	private portalNode: HTMLElement;
	private initialFocus: React.RefObject<HTMLElement>;
	private dialogRef = React.createRef<HTMLDivElement>();
	private headerRef = React.createRef<HTMLHeadingElement>();
	private tabbable: NodeListOf<HTMLElement> | [] = [];

	static defaultProps = {
		isOpen: false,
		baseName: Modal.bemBase,
		mountPoint: (): HTMLElement => document.body,
		hideTitle: false,
		addCloseButton: true,
		closeOnBackdropClick: true,
		closeOnEscape: true,
	}

	constructor({ baseName = prefix(Modal.defaultProps.baseName), ...props }: ModalProps) {
		super({ baseName, ...props });
		this.getId = idGen(props, `${Modal.bemBase}-`);
		this.titleId = this.getId(`-${Modal.bemElements.title}`);
		this.portalNode = this.createPortalNode();
		this.initialFocus = props.initialFocusRef || this.headerRef;

		this.state = {
			isOpen: props.isOpen || Modal.defaultProps.isOpen,
			trigger: null,
			canFocus: false,
		};
	}

	componentDidMount(): void {
		if (!document.contains(this.portalNode)) {
			const { mountPoint = Modal.defaultProps.mountPoint } = this.props;
			const mount = mountPoint();
			mount.appendChild(this.portalNode);
		}

		const { isOpen } = this.state;
		if (isOpen) this.onOpen();
	}

	getSnapshotBeforeUpdate(
		{ mountPoint: prevMount = Modal.defaultProps.mountPoint }: ModalProps,
	): ModalSnapshot {
		const { mountPoint = Modal.defaultProps.mountPoint } = this.props;
		return { prevMount: prevMount(), nextMount: mountPoint() };
	}

	componentDidUpdate(
		prevProps: ModalProps,
		prevState: ModalState,
		{ prevMount, nextMount }: ModalSnapshot,
	): void {
		const {
			isOpen,
			baseName,
			portalClass = `${baseName}__${Modal.bemElements.portal}`,
		} = this.props;
		const { isOpen: stateOpen } = this.state;

		// props change: portalClass
		if (prevProps.portalClass !== portalClass) {
			this.portalNode.className = portalClass;
		}

		// mountPoint change
		if (nextMount !== prevMount) {
			prevMount.removeChild(this.portalNode);
			nextMount.appendChild(this.portalNode);
		}

		// props change: closed -> open
		if (!prevProps.isOpen && isOpen) {
			this.open();
		// props change: open -> closed
		} else if (prevProps.isOpen && !isOpen) {
			this.close();
		}

		// state change: closed -> open
		if (!prevState.isOpen && stateOpen) {
			this.onOpen();
		// state change: open -> closed
		} else if (prevState.isOpen && !stateOpen) {
			this.onClose();
		}
	}

	componentWillUnmount(): void {
		this.portalNode.remove();
		document.removeEventListener('keydown', this.onDocumentKeydown);
	}

	private onOpen(): void {
		const { initialFocusRef, onInitialFocus = noop } = this.props;
		this.initialFocus = initialFocusRef || this.headerRef;
		if (this.dialogRef.current) {
			this.tabbable = this.Tabbable;
			if (this.initialFocus === this.headerRef) {
				if (this.tabbable.length) {
					this.initialFocus = { current: Array.from(this.tabbable)[0] };
				}
			}
		}
		if (this.initialFocus && this.initialFocus.current) {
			this.initialFocus.current.focus();
			onInitialFocus(this.initialFocus.current);
		}
		this.modifySiblings(true);
		document.addEventListener('keydown', this.onDocumentKeydown);
	}

	private onClose(): void {
		const { trigger } = this.state;
		this.modifySiblings(false);
		document.removeEventListener('keydown', this.onDocumentKeydown);
		if (trigger) trigger.focus();
	}

	private get CloseButton(): React.ReactElement | null {
		const {
			baseName,
			addCloseButton,
			closeButtonClass = `${baseName}__${Modal.bemElements.closeButton}`,
		} = this.props;
		if (!addCloseButton) return null;
		return (
			<IconButton
				icon="close"
				className={closeButtonClass}
				onClick={this.requestClose}
			>
				Close
			</IconButton>
		);
	}

	private get Title(): React.ReactElement | null {
		const {
			baseName,
			titleClass = `${baseName}__${Modal.bemElements.title}`,
			title,
			hideTitle,
		} = this.props;
		if (hideTitle) return null;
		return <h2 className={titleClass} id={this.titleId}>{ title }</h2>;
	}

	private get Header(): React.ReactElement {
		const {
			baseName,
			headerClass = `${baseName}__${Modal.bemElements.header}`,
			hideTitle,
		} = this.props;
		const { canFocus } = this.state;
		const headerClasses = classNames(headerClass, {
			[`${headerClass}--visible`]: !hideTitle,
		});
		return (
			<header
				className={headerClasses}
				tabIndex={(canFocus) ? undefined : -1}
				ref={this.headerRef}
			>
				{ this.Title }
				{ this.CloseButton }
			</header>
		);
	}

	private get ActionBar(): React.ReactElement | null {
		const {
			baseName,
			actionBarClass = `${baseName}__${Modal.bemElements.actionBar}`,
			actions,
		} = this.props;
		if (!actions) return null;
		return (
			<footer className={actionBarClass}>
				{ actions }
			</footer>
		);
	}

	private get Dialog(): React.ReactElement | null {
		const {
			title,
			hideTitle,
			baseName,
			className,
			children,
			contentClass = `${baseName}__${Modal.bemElements.content}`,
			backdropClass = `${baseName}__${Modal.bemElements.backdrop}`,
		} = this.props;
		const { isOpen } = this.state;
		if (!isOpen) return null;
		const classes = classNames(baseName, className);
		const label = (hideTitle) ? { 'aria-label': title } : { 'aria-labelledby': this.titleId };
		/*
			eslint-disable
			jsx-a11y/click-events-have-key-events,
			jsx-a11y/no-noninteractive-element-interactions
		*/
		return (
			<section className={backdropClass} onClick={this.onBackdropClick}>
				<BaseDialog
					modal
					className={classes}
					ref={this.dialogRef}
					{...label}
				>
					{ this.Header }
					<section className={contentClass}>{ children }</section>
					{ this.ActionBar }
				</BaseDialog>
			</section>
		);
	}

	private get Tabbable(): NodeListOf<HTMLElement> | [] {
		const tabbable = (this.dialogRef.current)
			? getFocusable(this.dialogRef.current)
			: [] as [];
		this.setState({ canFocus: tabbable.length > 0 });
		return tabbable;
	}

	private open = (): void => {
		const { onOpen = noop } = this.props;
		this.setState({ isOpen: true, trigger: document.activeElement as HTMLElement });
		onOpen();
	}

	public close = (): void => {
		this.setState({ isOpen: false });
	}

	public requestClose = (): void => {
		const { onRequestClose = noop } = this.props;
		onRequestClose();
	}

	private onBackdropClick = (
		{ nativeEvent }: React.MouseEvent<HTMLDivElement, MouseEvent>,
	): void => {
		const { closeOnBackdropClick } = this.props;
		if (closeOnBackdropClick && this.dialogRef.current
			&& !nativeEvent.composedPath().includes(this.dialogRef.current)) {
			this.requestClose();
		}
	}

	private onDocumentKeydown = (e: KeyboardEvent): void => {
		const { closeOnEscape } = this.props;
		const { isOpen } = this.state;
		if (!isOpen) return;
		if (e.key === 'Escape' && closeOnEscape) this.requestClose();
		if (e.key === 'Tab') {
			this.tabbable = this.Tabbable;
			if (this.tabbable && this.tabbable.length) {
				let element: HTMLElement | undefined;
				const tabIndex = Array.from(this.tabbable).indexOf(e.target as HTMLElement);
				const wrapForward = tabIndex === this.tabbable.length - 1 && !e.shiftKey;
				const wrapBackward = tabIndex === 0 && e.shiftKey;

				if (tabIndex < 0 || wrapForward) {
					[element] = Array.from(this.tabbable);
				}

				if (wrapBackward) {
					element = this.tabbable[this.tabbable.length - 1];
				}

				if (element) {
					const { onRequestFocusWrap = noop } = this.props;
					e.preventDefault();
					if (onRequestFocusWrap(document.activeElement, element) !== false) {
						element.focus();
					}
				}
			} else {
				e.preventDefault();
				if (this.initialFocus.current) this.initialFocus.current.focus();
			}
		}
	}

	private createPortalNode(): HTMLDivElement {
		const {
			baseName,
			portalClass = `${baseName}__${Modal.bemElements.portal}`,
		} = this.props;
		const node = document.createElement('div');
		node.className = portalClass;
		return node;
	}

	/**
	 * Add `aria-hidden="true"` to all siblings of the modal's portal node to
	 * ensure that _only_ the modal is visible to screen reader users.
	 */
	private modifySiblings(hide: boolean): void {
		const { mountPoint } = this.props;
		if (mountPoint) {
			const dataAttr = 'data-nds-hidden';
			this.portalNode.removeAttribute('aria-hidden');
			this.portalNode.removeAttribute(dataAttr);
			Array.from(mountPoint().children).forEach((child) => {
				if (child !== this.portalNode) {
					if (hide) {
						child.setAttribute('aria-hidden', 'true');
						child.setAttribute(dataAttr, 'true');
					} else if (child.hasAttribute(dataAttr)) {
						child.removeAttribute('aria-hidden');
						child.removeAttribute(dataAttr);
					}
				}
			});
		}
	}

	render(): React.ReactPortal {
		return ReactDOM.createPortal(
			this.Dialog,
			this.portalNode,
		);
	}
}
