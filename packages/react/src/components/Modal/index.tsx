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

type TitleComponent<P = React.HTMLAttributes<HTMLElement>> = React.FunctionComponent<P>

export interface ModalProps extends BaseDialogProps {
	isOpen?: boolean;
	title: string;
	titleHidden?: boolean;
	closeButton?: boolean;
	actions?: React.ReactElement<ButtonProps>[] | React.ReactFragment;

	focusOnOpen?: React.RefObject<HTMLElement> | HTMLElement;
	closeOnBackdropClick?: boolean;
	closeOnEscape?: boolean;

	baseName?: string;
	mountPoint?: () => HTMLElement;
	backdropClass?: string;
	headerClass?: string;
	titleClass?: string;
	closeButtonClass?: string;
	contentClass?: string;
	actionBarClass?: string;
	portalClass?: string;

	onRequestClose?: () => void;
	onOpen?: () => void;

	headerRef?: React.Ref<HTMLElement>;
	contentRef?: React.Ref<HTMLElement>;
	actionBarRef?: React.Ref<HTMLElement>;
}

export interface ModalState {
	isOpen: boolean;
	trigger: HTMLElement | null;
	headingFocusable: boolean;
}

export interface ModalSnapshot {
	prevMount: HTMLElement;
	nextMount: HTMLElement;
}

class Modal extends React.Component<ModalProps, ModalState> {
	private getId: ReturnType<typeof idGen>;
	private titleId: string;
	private portalNode: HTMLElement;
	private dialogRef = React.createRef<HTMLDivElement>();
	private headerRef = React.createRef<HTMLHeadingElement>();
	private tabbable: NodeListOf<HTMLElement> | null = null;

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
		titleHidden: false,
		closeButton: true,
		closeOnBackdropClick: true,
		closeOnEscape: true,
	}

	constructor(props: ModalProps) {
		super(props);
		this.getId = idGen(props, `${Modal.bemBase}-`);
		this.titleId = this.getId(`-${Modal.bemElements.title}`);
		this.portalNode = this.createPortal();

		this.state = {
			isOpen: props.isOpen || Modal.defaultProps.isOpen,
			trigger: null,
			headingFocusable: false,
		};
	}

	componentDidMount(): void {
		if (!document.contains(this.portalNode)) {
			const { mountPoint = Modal.defaultProps.mountPoint } = this.props;
			const mount = mountPoint();
			mount.appendChild(this.portalNode);
		}
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
			focusOnOpen,
		} = this.props;
		const { isOpen: stateOpen, trigger } = this.state;

		if (prevProps.portalClass !== portalClass) {
			this.portalNode.className = portalClass;
		}

		if (nextMount !== prevMount) {
			prevMount.removeChild(this.portalNode);
			nextMount.appendChild(this.portalNode);
		}

		if (!prevProps.isOpen && isOpen) {
			this.open();
		} else if (prevProps.isOpen && !isOpen) {
			this.close();
		}

		if (!prevState.isOpen && stateOpen) {
			let focusTarget = (focusOnOpen instanceof HTMLElement)
				? focusOnOpen
				: focusOnOpen && focusOnOpen.current;
			if (this.dialogRef.current) {
				this.tabbable = getFocusable(this.dialogRef.current);
				if (!focusTarget) {
					if (this.tabbable.length) {
						[focusTarget] = Array.from(this.tabbable);
					} else {
						focusTarget = this.headerRef.current;
					}
				}
			}
			if (focusTarget) focusTarget.focus();
			document.addEventListener('keydown', this.onDocumentKeydown);
		} else if (prevState.isOpen && !stateOpen && trigger) {
			trigger.focus();
		}
	}

	componentWillUnmount(): void {
		this.portalNode.remove();
		document.removeEventListener('keydown', this.onDocumentKeydown);
	}

	private get CloseButton(): React.ReactElement | null {
		const {
			baseName,
			closeButton,
			closeButtonClass = `${baseName}__${Modal.bemElements.closeButton}`,
		} = this.props;
		if (!closeButton) return null;
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

	private get Title(): React.ReactElement {
		const {
			baseName,
			titleClass = `${baseName}__${Modal.bemElements.title}`,
			title,
			titleHidden,
		} = this.props;
		const classes = classNames(titleClass, { 'sr-only': titleHidden });
		return <h2 className={classes} id={this.titleId}>{ title }</h2>;
	}

	private get Header(): React.ReactElement {
		const {
			baseName,
			headerClass = `${baseName}__${Modal.bemElements.header}`,
			titleHidden,
		} = this.props;
		const headerClasses = classNames(headerClass, { 'title-visible': !titleHidden });
		return (
			<header
				className={headerClasses}
				tabIndex={-1}
				ref={this.headerRef}
			>
				{ this.Title }
				{ this.CloseButton }
			</header>
		);
	}

	private get Actionbar(): React.ReactElement | null {
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
			baseName,
			className,
			children,
			contentClass = `${baseName}__${Modal.bemElements.content}`,
			backdropClass = `${baseName}__${Modal.bemElements.backdrop}`,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			closeOnBackdropClick, portalClass, headerClass, titleClass, title, isOpen: openProp,
			...attributes
		} = this.props;
		const { isOpen } = this.state;
		if (!isOpen) return null;
		const classes = classNames(baseName, className);
		/*
			eslint-disable
			jsx-a11y/no-static-element-interactions,
			jsx-a11y/click-events-have-key-events
		*/
		return (
			<div className={backdropClass} onClick={this.onBackdropClick}>
				<BaseDialog
					className={classes}
					aria-labelledby={this.titleId}
					ref={this.dialogRef}
					onKeyDown={this.onKeyDown}
					{...attributes}
					modal
				>
					{ this.Header }
					<div className={contentClass}>{ children }</div>
					{ this.Actionbar }
				</BaseDialog>
			</div>
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
			if (this.tabbable) {
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
		if (e.key === 'Escape' && closeOnEscape) this.requestClose();
	}

	render(): React.ReactPortal {
		return ReactDOM.createPortal(
			this.Dialog,
			this.portalNode,
		);
	}
}

export default Modal;
