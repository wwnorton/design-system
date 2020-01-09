import * as React from 'react';
import classNames from 'classnames';
import { Disclosure as CoreDisclosure } from '@nds/core';	// eslint-disable-line import/no-unresolved
import BaseDetails, { BaseDetailsProps, DetailsToggleEvent } from '../BaseDetails';
import BaseSummary from '../BaseDetails/BaseSummary';
import DetailsMarker from './DetailsMarker';
import { noop, isElement } from '../../../utilities/events';

export type DisclosureVariant = 'default' | 'panel';

export type DisclosureContent = 'summary' | 'detailsMarker' | 'contentsContainer';

export interface DisclosureToggleEvent extends DetailsToggleEvent {
	state: DisclosureState;
}

export interface DisclosureProps extends BaseDetailsProps {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** The `className` that will be applied to the `<summary>`. */
	summaryClass?: string;
	/** The `className` that will be applied to the `DetailsMarker`. */
	markerClass?: string;
	/** The `className` that will be applied to the internal contents wrapper. */
	contentsClass?: string;
	/** The variant for the disclosure. May be "default" or "panel". */
	variant?: DisclosureVariant;
	/** Whether to animate the opening/closing of the disclosure. */
	animate?: boolean;
	/** A reference to the inner <details> element. */
	detailsRef?: React.RefObject<HTMLDetailsElement>;
	onToggle?: (e: DisclosureToggleEvent) => void;
}

export interface DisclosureState {
	open: boolean;
}

const BEM_BASE = 'disclosure';
const BEM_ELEMENTS: Record<DisclosureContent, string> = {
	summary: 'summary',
	detailsMarker: 'details-marker',
	contentsContainer: 'contents',
};

export class Disclosure extends React.Component<DisclosureProps, DisclosureState> {
	public coreDisclosure?: CoreDisclosure;
	public detailsRef: React.RefObject<HTMLDetailsElement>;
	public static defaultProps = {
		baseName: BEM_BASE,
		animate: true,
		open: false,
		onToggle: noop,
		detailsRef: React.createRef<HTMLDetailsElement>(),
		summaryClass: `${BEM_BASE}__${BEM_ELEMENTS.summary}`,
		markerClass: BEM_ELEMENTS.detailsMarker,
		contentsClass: `${BEM_BASE}__${BEM_ELEMENTS.contentsContainer}`,
	};

	constructor(props: DisclosureProps) {
		super(props);
		this.state = {
			open: props.open || Disclosure.defaultProps.open,
		};
		this.detailsRef = props.detailsRef || React.createRef<HTMLDetailsElement>();
	}

	componentDidMount(): void {
		if (this.detailsRef.current) {
			const { current: details } = this.detailsRef;
			this.coreDisclosure = new CoreDisclosure(details);
		}
	}

	private onToggle = async (e: DisclosureToggleEvent): Promise<void> => {
		const target = e.target as HTMLDetailsElement;
		const { onToggle } = this.props;
		await this.setState({ open: target.open });
		if (onToggle) onToggle({ ...e, state: this.state });
	}

	private static bemElements = BEM_ELEMENTS;

	render(): JSX.Element {
		const {
			// classes
			className, baseName, summaryClass, markerClass, contentsClass,
			// options
			variant, animate,
			// elements
			summary, children,
			// props that are used elsewhere
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			onToggle, detailsRef,
			// everything inherited by ReactAttributes & HTML
			...attributes
		} = this.props;
		const { open } = this.state;
		const markerType = (variant === 'panel') ? 'chevron' : 'caret';
		if (this.coreDisclosure) {
			if (animate) {
				this.coreDisclosure.enable();
			} else {
				this.coreDisclosure.disable();
			}
		}

		const classes = classNames({
			[`${baseName}`]: true,
			[`${baseName}--panel`]: variant === 'panel',
			'reduced-motion': !animate,
		}, className);

		const markerElement = <DetailsMarker variant={markerType} className={markerClass} />;
		const summaryElement = isElement(summary, 'summary')
			? summary
			: (
				<BaseSummary
					className={summaryClass}
					marker={markerElement}
					markerPosition={markerType === 'caret' ? 'left' : 'right'}
				>
					{ summary }
				</BaseSummary>
			);

		return (
			<BaseDetails
				ref={this.detailsRef}
				className={classes}
				summary={summaryElement}
				open={open}
				onToggle={this.onToggle}
				{...attributes}
			>
				<div className={contentsClass}>
					{children}
				</div>
			</BaseDetails>
		);
	}
}

export default Disclosure;
