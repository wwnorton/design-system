import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import { getFocusable } from './focusable';
import { canUseDOM } from '../../utilities';
import { BaseDialog, BaseDialogProps } from '../BaseDialog';
import { ButtonProps, IconButton } from '../Button';

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
	bodyOverflow: string;
	preventModalClose: boolean;
}

export interface ModalSnapshot {
	prevMount: HTMLElement;
	nextMount: HTMLElement;
}

/**
 * Modal dialog.
 */
export class Modal extends React.PureComponent<ModalProps, ModalState> {
	public static bemBase = 'nds-modal';
	public static bemElements: Record<ModalAnatomy, string> = {
		portal: 'portal',
		backdrop: 'backdrop',
		header: 'header',
		title: 'title',
		closeButton: 'close',
		content: 'content',
		actionBar: 'actionbar',
	};

	private baseName: string;
	private id: string;
	private titleId: string;
	private portalNode: HTMLElement | null;
	private dialog: HTMLDivElement | null = null;
	private initialTarget: HTMLDivElement | null = null;
	private header: HTMLElement | null = null;
	private content: HTMLElement | null = null;
	private footer: HTMLElement | null = null;
	/** A watcher to detect when the header/footer move off screen. */
	private stickyObserver: IntersectionObserver | null = null;

	static defaultProps = {
		isOpen: false,
		mountPoint: (): HTMLElement => document.body,
		hideTitle: false,
		closeOnBackdropClick: true,
		closeOnEscape: true,
	};

	constructor(props: ModalProps) {
		super(props);

		this.baseName = props.baseName || Modal.bemBase;
		this.id = props.id || uniqueId(`${this.baseName}-`);
		this.titleId = `${this.id}-${Modal.bemElements.title}`;
		this.portalNode = (canUseDOM) ? this.createPortalNode() : null;

		this.state = {
			isOpen: props.isOpen || Modal.defaultProps.isOpen,
			trigger: null,
			long: false,
			stuckHeader: false,
			stuckFooter: false,
			bodyOverflow: '',
			preventModalClose: false,
		};
	}

	componentDidMount(): void {
		if (!canUseDOM || !this.portalNode) return;

		if ('IntersectionObserver' in window) {
			this.stickyObserver = new IntersectionObserver(([e]) => {
				if (e.target === this.header) {
					this.setState({ stuckHeader: e.intersectionRatio < 1 });
				}
				if (e.target === this.footer) {
					this.setState({ stuckFooter: e.intersectionRatio < 1 });
				}
			}, { threshold: [1] });
		}

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
		if (!canUseDOM || !this.portalNode) return;
		const {
			isOpen,
			children,
			focusOnOpen,
			portalClass = `${this.baseName}__${Modal.bemElements.portal}`,
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

		if (prevProps.children !== children) {
			this.updateLength();
		}

		// focus the specified element if the modal is open. this will be
		// triggered _after_ the `onOpen` handler since the ref shouldn't exist
		// until the modal exists.
		if (stateOpen && !prevProps.focusOnOpen && focusOnOpen) {
			focusOnOpen.focus();
		}
	}

	componentWillUnmount(): void {
		if (!canUseDOM || !this.portalNode) return;
		this.portalNode.remove();
		document.removeEventListener('keydown', this.onDocumentKeydown);
		const { bodyOverflow } = this.state;
		document.body.style.overflow = bodyOverflow;
	}

	private onOpen(): void {
		const { focusOnOpen } = this.props;
		let el = focusOnOpen || null;
		if (!el) {
			const tabbable = (this.dialog) ? getFocusable(this.dialog) : [];
			el = (tabbable.length) ? tabbable[0] : null;
		}
		if (!el) {
			el = this.header || this.content;
			if (el) el.setAttribute('tabIndex', '-1');
		}
		if (el) {
			el.focus();
		}

		this.updateLength();

		if (this.stickyObserver) {
			if (this.header) this.stickyObserver.observe(this.header);
			if (this.footer) this.stickyObserver.observe(this.footer);
		}
		document.addEventListener('keydown', this.onDocumentKeydown);
		this.setState({ bodyOverflow: document.body.style.overflow });
		document.body.style.overflow = 'hidden';
	}

	private onClose(): void {
		const { trigger, bodyOverflow } = this.state;

		if (this.stickyObserver) {
			if (this.header) this.stickyObserver.unobserve(this.header);
			if (this.footer) this.stickyObserver.unobserve(this.footer);
		}
		document.removeEventListener('keydown', this.onDocumentKeydown);

		// return focus on close
		if (trigger) trigger.focus();
		document.body.style.overflow = bodyOverflow;
	}

	private get CloseButton(): JSX.Element | null {
		const {
			hideCloseButton,
			closeButtonClass = `${this.baseName}__${Modal.bemElements.closeButton}`,
		} = this.props;
		if (hideCloseButton) return null;
		return (
			<IconButton
				icon="close"
				className={classNames(closeButtonClass, 'button--base')}
				onClick={this.requestClose}
			>
				Close
			</IconButton>
		);
	}

	private get Title(): JSX.Element | null {
		const {
			titleClass = `${this.baseName}__${Modal.bemElements.title}`,
			title,
			hideTitle,
		} = this.props;
		if (hideTitle) return null;
		return <h2 className={titleClass} id={this.titleId}>{ title }</h2>;
	}

	private get Header(): JSX.Element | null {
		const {
			headerClass = `${this.baseName}__${Modal.bemElements.header}`,
			stickyHeader,
		} = this.props;
		if (!this.Title && !this.CloseButton) return null;
		const { stuckHeader, long } = this.state;
		const classes = classNames(
			headerClass,
			{
				[`${headerClass}--sticky`]: stickyHeader && long,
				'nds-stuck': stickyHeader && stuckHeader,
			},
		);
		return (
			<header
				className={classes}
				ref={(el): void => { this.header = el; }}
			>
				{ this.Title }
				{ this.CloseButton }
			</header>
		);
	}

	private get ActionBar(): JSX.Element | null {
		const {
			actionBarClass = `${this.baseName}__${Modal.bemElements.actionBar}`,
			stickyActionBar,
			actions,
		} = this.props;
		if (!actions) return null;
		const { stuckFooter, long } = this.state;
		const classes = classNames(
			actionBarClass,
			{
				[`${actionBarClass}--sticky`]: stickyActionBar && long,
				'nds-stuck': stickyActionBar && stuckFooter,
			},
		);
		return (
			<footer className={classes} ref={(el): void => { this.footer = el; }}>
				{ actions }
			</footer>
		);
	}

	private get Dialog(): JSX.Element | null {
		const {
			title,
			hideTitle,
			className,
			children,
			contentClass = `${this.baseName}__${Modal.bemElements.content}`,
			backdropClass = `${this.baseName}__${Modal.bemElements.backdrop}`,
		} = this.props;
		const { isOpen, long } = this.state;
		if (!isOpen) return null;
		const classes = classNames(this.baseName, className);
		const label = (hideTitle) ? { 'aria-label': title } : { 'aria-labelledby': this.titleId };
		/*
			eslint-disable
			jsx-a11y/click-events-have-key-events,
			jsx-a11y/no-static-element-interactions,
		*/
		return (
			<section
				className={classNames(backdropClass, { [`${this.baseName}--long`]: long })}
				onClick={this.onBackdropClick}
				onMouseDown={this.handleOnMouseDown}
				onMouseUp={this.handleOnMouseUp}
			>
				<BaseDialog
					modal
					id={this.id}
					className={classes}
					ref={(el): void => { this.dialog = el; }}
					{...label}
				>
					{ this.Header }
					<section
						className={contentClass}
						ref={(el): void => { this.content = el; }}
					>
						{ children }

					</section>
					{ this.ActionBar }
				</BaseDialog>
			</section>
		);
	}

	private open = (): void => {
		this.setState({ isOpen: true, trigger: document.activeElement as HTMLElement });
	};

	public close = (): void => {
		this.setState({ isOpen: false });
	};

	public requestClose = (): void => {
		const { onRequestClose } = this.props;
		if (onRequestClose) onRequestClose();
	};

	private updateLength = (): void => {
		if (this.dialog) {
			const long = this.dialog.offsetHeight > window.innerHeight - 80;
			this.setState({ long, stuckFooter: long });
		}
	};

	private handleOnMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		this.initialTarget = event.currentTarget;
	};

	private handleOnMouseUp = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (event.target === this.dialog && this.initialTarget) {
			this.setState({ preventModalClose: true });
		}
	};

	private onBackdropClick = (
		{ nativeEvent }: React.MouseEvent<HTMLDivElement, MouseEvent>,
	): void => {
		const { closeOnBackdropClick } = this.props;
		const { preventModalClose } = this.state;
		if (
			closeOnBackdropClick
			&& this.dialog
			&& !nativeEvent.composedPath().includes(this.dialog)
			&& !preventModalClose
		) {
			this.setState({ preventModalClose: false });
			this.requestClose();
		}
	};

	private onDocumentKeydown = (e: KeyboardEvent): void => {
		const { closeOnEscape } = this.props;
		const { isOpen } = this.state;
		if (!isOpen) return;
		if (e.key === 'Escape' && closeOnEscape) this.requestClose();
		if (e.key === 'Tab') {
			const tabbable = (this.dialog) ? getFocusable(this.dialog) : [];
			if (tabbable.length) {
				let element: HTMLElement | undefined;
				const tabIndex = Array.from(tabbable).indexOf(document.activeElement as HTMLElement);
				const wrapForward = tabIndex === tabbable.length - 1 && !e.shiftKey;
				const wrapBackward = tabIndex === 0 && e.shiftKey;

				if (tabIndex < 0 || wrapForward) {
					// don't destructure since tabbable isn't iterable
					// eslint-disable-next-line prefer-destructuring
					element = tabbable[0];
				}

				if (wrapBackward) {
					element = tabbable[tabbable.length - 1];
				}

				if (element) {
					e.preventDefault();
					element.focus();
				}
			} else {
				e.preventDefault();
			}
		}
	};

	private createPortalNode(): HTMLDivElement {
		const {
			portalClass = `${this.baseName}__${Modal.bemElements.portal}`,
		} = this.props;
		const node = document.createElement('div');
		node.className = portalClass;
		return node;
	}

	render(): React.ReactNode {
		if (!canUseDOM || !this.portalNode) return null;

		return ReactDOM.createPortal(
			this.Dialog,
			this.portalNode,
		);
	}
}
