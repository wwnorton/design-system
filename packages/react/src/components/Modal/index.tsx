import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import BaseDialog, { BaseDialogProps } from '../BaseDialog';
import { noop, idGen, getFocusable } from '../../utilities/helpers';
import IconButton from '../IconButton';
import { ButtonProps } from '../Button';

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
	 * A ref that should be focused on open. If none is specified, the first
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
class Modal extends React.Component<ModalProps, ModalState> {
	private getId: ReturnType<typeof idGen>;
	private titleId: string;
	private portalNode: HTMLElement;
	private initialFocus: React.RefObject<HTMLElement>;
	private dialogRef = React.createRef<HTMLDivElement>();
	private headerRef = React.createRef<HTMLHeadingElement>();
	private tabbable: NodeListOf<HTMLElement> | [] = [];

	/* eslint-disable react/sort-comp */
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
	/* eslint-enable react/sort-comp */

	static defaultProps = {
		isOpen: false,
		baseName: Modal.bemBase,
		mountPoint: (): HTMLElement => document.body,
		hideTitle: false,
		addCloseButton: true,
		closeOnBackdropClick: true,
		closeOnEscape: true,
	}

	constructor(props: ModalProps) {
		super(props);
		this.getId = idGen(props, `${Modal.bemBase}-`);
		this.titleId = this.getId(`-${Modal.bemElements.title}`);
		this.portalNode = this.createPortal();
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
		this.focusInitial()
			.setDocumentListener();
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
			addCloseButton,
			baseName,
			portalClass = `${baseName}__${Modal.bemElements.portal}`,
		} = this.props;
		const { isOpen: stateOpen, trigger } = this.state;

		// props change: portalClass
		if (prevProps.portalClass !== portalClass) {
			this.portalNode.className = portalClass;
		}

		// mountPoint change
		if (nextMount !== prevMount) {
			prevMount.removeChild(this.portalNode);
			nextMount.appendChild(this.portalNode);
		}

		// closeButton added or removed: update tabbable list
		if (prevProps.addCloseButton !== addCloseButton) {
			if (this.dialogRef.current) {
				this.tabbable = this.getTabbable();
			}
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
			this.focusInitial()
				.setDocumentListener();
		// state change: open -> closed
		} else if (prevState.isOpen && !stateOpen) {
			if (trigger) {
				trigger.focus();
			}
		}
	}

	componentWillUnmount(): void {
		this.portalNode.remove();
		document.removeEventListener('keydown', this.onDocumentKeydown);
	}

	private getTabbable(): NodeListOf<HTMLElement> | [] {
		const tabbable = (this.dialogRef.current)
			? getFocusable(this.dialogRef.current)
			: [] as [];
		this.setState({ canFocus: tabbable.length > 0 });
		return tabbable;
	}

	private focusInitial(): this {
		const { initialFocusRef, onInitialFocus = noop } = this.props;
		this.initialFocus = initialFocusRef || this.headerRef;
		if (this.dialogRef.current) {
			this.tabbable = this.getTabbable();
			if (!this.initialFocus.current) {
				if (this.tabbable.length) {
					this.initialFocus = { current: Array.from(this.tabbable)[0] };
				}
			}
		}
		if (this.initialFocus && this.initialFocus.current) {
			this.initialFocus.current.focus();
			onInitialFocus(this.initialFocus.current);
		}
		return this;
	}

	private setDocumentListener(): this {
		document.addEventListener('keydown', this.onDocumentKeydown);
		return this;
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
					onKeyDown={this.onKeyDown}
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

	private createPortal(): HTMLDivElement {
		const {
			baseName,
			portalClass = `${baseName}__${Modal.bemElements.portal}`,
		} = this.props;
		const node = document.createElement('div');
		node.className = portalClass;
		return node;
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

	private onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
		if (e.key === 'Tab') {
			if (this.tabbable && this.tabbable.length) {
				const tabIndex = Array.from(this.tabbable).indexOf(e.target as HTMLElement);
				const wrapForward = tabIndex === this.tabbable.length - 1 && !e.shiftKey;
				const wrapBackward = tabIndex === 0 && e.shiftKey;

				if (tabIndex < 0 || wrapForward) {
					e.preventDefault();
					this.tabbable[0].focus();
				}

				if (wrapBackward) {
					e.preventDefault();
					this.tabbable[this.tabbable.length - 1].focus();
				}
			} else {
				e.preventDefault();
			}
		}
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
		if (isOpen && e.key === 'Escape' && closeOnEscape) this.requestClose();
	}

	render(): React.ReactPortal {
		return ReactDOM.createPortal(
			this.Dialog,
			this.portalNode,
		);
	}
}

export default Modal;
