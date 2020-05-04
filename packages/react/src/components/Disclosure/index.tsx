import React from 'react';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import BaseDetails, { BaseDetailsProps, DetailsToggleEvent } from '../BaseDetails';
import BaseSummary from '../BaseSummary';
import Icon from '../Icon';
import { noop, isElement } from '../../utilities/helpers';

export type DisclosureVariant = 'default' | 'panel';
export type DisclosureAnatomy = 'summary' | 'marker' | 'contents' | 'container';
export type DisclosureLifecycleState = 'open' | 'closed' | 'opening' | 'closing';
export interface DisclosureState {
	open: boolean;
	lifecycle: DisclosureLifecycleState;
}
export type DisclosureCustomEvent = 'closestart' | 'closecancel' | 'closeend' | 'openstart' | 'opencancel' | 'openend';
export interface DisclosureToggleEvent extends DetailsToggleEvent {
	state: DisclosureState;
}
export interface DisclosureProps extends BaseDetailsProps {
	/** The base `className` according to BEM conventions. */
	baseName?: string;
	/** The `className` that will be applied to the `<summary>`. */
	summaryClass?: string;
	/** The `className` for the container that will wrap around the disclosure's contents. */
	containerClass?: string;
	/** The `className` that will be applied to the contents. */
	contentsClass?: string;
	/** A class that will be applied to the container while opening. */
	closingClass?: string;
	/** A class that will be applied to the container while closing. */
	openingClass?: string;
	/**
	 * The `className` that will be applied to the summary's icon indicator,
	 * which takes the place of the native `summary::marker` pseudo element.
	 */
	markerClass?: string;
	/** Whether resizing the window should trigger a height calculation update. */
	updateOnResize?: boolean;
	/** The variant for the disclosure. */
	variant?: DisclosureVariant;
	/** Whether to animate the opening/closing of the disclosure. */
	animate?: boolean;
	/** A reference to the inner <details> element. */
	detailsRef?: React.RefObject<HTMLDetailsElement>;
	onToggle?: (e: DisclosureToggleEvent) => void;
}

export default class Disclosure extends React.Component<DisclosureProps, DisclosureState> {
	// eslint-disable-next-line react/sort-comp
	public static bemBase = 'disclosure';
	public detailsRef: React.RefObject<HTMLDetailsElement>;
	public containerRef: React.RefObject<HTMLDivElement>;
	private initialContainerStyle?: string;
	public static bemElements: Record<DisclosureAnatomy, string> = {
		summary: 'summary',
		marker: 'marker',
		contents: 'contents',
		container: 'container',
	}

	/**
	 * The time in milliseconds to delay when recalculating the contents height
	 * due to a window resize. Only applies if `updateOnResize` is `true`.
	*/
	public static RESIZE_DEBOUNCE_DELAY = 150;

	public contentsHeight = 0;

	public static defaultProps = {
		baseName: Disclosure.bemBase,
		animate: true,
		open: false,
		onToggle: noop,
		updateOnResize: true,
	}

	constructor(props: DisclosureProps) {
		super(props);
		this.state = {
			open: props.open || Disclosure.defaultProps.open,
			lifecycle: props.open ? 'open' : 'closed',
		};
		this.detailsRef = props.detailsRef || React.createRef<HTMLDetailsElement>();
		this.containerRef = React.createRef<HTMLDivElement>();
	}

	componentDidMount(): void {
		const { open } = this.state;
		const { updateOnResize } = this.props;
		this.contentsHeight = this.findHeight();
		this.setHeight((open) ? this.contentsHeight : 0);
		if (updateOnResize) {
			window.addEventListener('resize', this.onWindowresize);
		}
	}

	private onToggle = async (e: DisclosureToggleEvent): Promise<void> => {
		const { onToggle } = this.props;
		if (onToggle) onToggle({ ...e, state: this.state });
	}

	private findHeight(): number {
		const { current: detailsRef } = this.detailsRef;
		const { current: containerRef } = this.containerRef;
		const { open } = this.state;
		const isClosed = !open;
		if (detailsRef && containerRef) {
			if (isClosed) detailsRef.setAttribute('open', 'open');
			const { clientHeight } = containerRef;
			if (isClosed) detailsRef.removeAttribute('open');
			return clientHeight;
		}
		return 0;
	}

	private removeHeight(): void {
		const { current: containerRef } = this.containerRef;
		if (containerRef) {
			if (this.initialContainerStyle) {
				containerRef.setAttribute('style', this.initialContainerStyle);
			} else {
				containerRef.removeAttribute('style');
			}
		}
	}

	private onWindowresize = debounce(() => {
		const { lifecycle } = this.state;
		this.removeHeight();
		this.contentsHeight = this.findHeight();
		if (lifecycle === 'opening') {
			this.setHeight(this.contentsHeight);
		}
		if (lifecycle === 'closing') {
			this.setHeight(0);
		}
	}, Disclosure.RESIZE_DEBOUNCE_DELAY)

	private async setHeight(height: number): Promise<void> {
		const newHeight = `${height}px`;
		const { current } = this.containerRef;
		if (current) {
			if (current.style.height === newHeight) return;
			current.style.height = newHeight;
			await new Promise((resolve) => requestAnimationFrame(resolve));
		}
	}

	private hasTransition(): boolean {
		const { current: containerRef } = this.containerRef;
		if (containerRef) {
			const styles = window.getComputedStyle(containerRef);
			const durations = styles.getPropertyValue('transition-duration').split(/,\s*/);
			return durations.some((v) => Number(v.replace('s', '')) > 0);
		}
		return false;
	}

	private emit(name: DisclosureCustomEvent): void {
		const { current: detailsRef } = this.detailsRef;
		if (detailsRef) {
			detailsRef.dispatchEvent(new CustomEvent(name, { detail: detailsRef }));
		}
	}

	private onSummaryClick = async (e: React.MouseEvent<HTMLElement>): Promise<void> => {
		e.preventDefault();
		const { open, lifecycle } = this.state;
		if (this.hasTransition()) {
			if (open) {
				switch (lifecycle) {
					// clicked while opening -> cancel open
					case 'opening':
						await this.handleTransition('closing');
						this.emit('opencancel');
						break;
					// clicked while closing -> cancel close
					case 'closing':
						await this.handleTransition('opening');
						this.emit('closecancel');
						break;
					// clicked while fully open -> begin closing
					case 'open':
						await this.handleTransition('closing');
						this.emit('closestart');
						break;
					default:
				}
			} else {
				// clicked while fully closed -> begin opening
				await this.handleTransition('opening');
				this.emit('openstart');
			}
		}
	}

	private onTransitionend = async (): Promise<void> => {
		// was closing -> finish close
		const { lifecycle } = this.state;
		if (lifecycle === 'closing') {
			await this.handleTransition('closed');
			this.emit('closeend');
		}
		// was opening -> finish open
		if (lifecycle === 'opening') {
			await this.handleTransition('open');
			this.emit('openend');
		}
	}

	/**
	 * The `<summary>` click handler.
	 *
	 * As soon as a `<details>` element no longer has the `open` attribute,
	 * its inner contents disappear. To prevent this, we transition the height
	 * of the contents via its outer container, delaying the removal of the
	 * `open` attribute until the `transitionend` event triggers.
	 */
	public async handleTransition(val: DisclosureLifecycleState): Promise<void> {
		await this.setState({ lifecycle: val });
		const { current: detailsRef } = this.detailsRef;
		const {
			closingClass = 'closing',
			openingClass = 'opening',
		} = this.props;
		if (detailsRef) {
			switch (val) {
				case 'opening':
					detailsRef.classList.remove(closingClass);
					detailsRef.classList.add(openingClass);
					await this.setHeight(this.contentsHeight);
					break;
				case 'closing':
					detailsRef.classList.remove(openingClass);
					detailsRef.classList.add(closingClass);
					await this.setHeight(0);
					break;
				case 'open':
					detailsRef.classList.remove(openingClass);
					this.setState({ open: true });
					break;
				case 'closed':
					detailsRef.classList.remove(closingClass);
					this.setState({ open: false });
					break;
				default:
			}
		}
	}

	private Summary(): JSX.Element {
		const {
			summary,
			variant,
			summaryClass = `${Disclosure.bemBase}__${Disclosure.bemElements.summary}`,
			markerClass = `${Disclosure.bemBase}__${Disclosure.bemElements.marker}`,
		} = this.props;
		if (isElement(summary, 'summary')) return summary;
		const markerType = (variant === 'panel') ? 'chevron-down' : 'caret-right';
		const markerElement = <Icon variant={markerType} className={markerClass} />;
		const markerPosition = variant === 'panel' ? 'right' : 'left';
		return (
			<BaseSummary
				className={summaryClass}
				marker={markerElement}
				onClick={this.onSummaryClick}
				markerPosition={markerPosition}
			>
				{summary}
			</BaseSummary>
		);
	}

	render(): JSX.Element {
		const {
			// classes
			className, baseName,
			contentsClass = `${Disclosure.bemBase}__${Disclosure.bemElements.contents}`,
			containerClass = `${Disclosure.bemBase}__${Disclosure.bemElements.container}`,
			// options
			variant, animate,
			// elements
			children,
			// props that are used elsewhere
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			onToggle, detailsRef, summary, summaryClass, updateOnResize, open: propsOpen,
			// everything inherited by ReactAttributes & HTML
			...attributes
		} = this.props;
		const { open } = this.state;
		const classes = classNames({
			[`${baseName}`]: true,
			[`${baseName}--panel`]: variant === 'panel',
			'reduced-motion': !animate,
		}, className);
		return (
			<BaseDetails
				ref={this.detailsRef}
				className={classes}
				summary={this.Summary()}
				open={open}
				onToggle={this.onToggle}
				{...attributes}
			>
				<div
					className={containerClass}
					ref={this.containerRef}
					onTransitionEnd={this.onTransitionend}
				>
					<div className={contentsClass}>
						{children}
					</div>
				</div>
			</BaseDetails>
		);
	}
}
