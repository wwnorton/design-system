import * as React from 'react';
import classNames from 'classnames';
import { BaseDetails, BaseDetailsProps, DetailsClickEvent } from '../BaseDetails';
import { DetailsMarker } from '../DetailsMarker';
import { noop } from '../../../utilities/events';

export type DisclosureVariant = 'default' | 'panel';

export interface DisclosureToggleEvent extends DetailsClickEvent {
	state: DisclosureState;
}

export interface DisclosureProps extends BaseDetailsProps {
	/** The variant for the disclosure. May be "default" or "panel". */
	variant?: DisclosureVariant;
	/** Whether to animate the opening/closing of the disclosure. */
	animate?: boolean;
	/** A function to call when the disclosure is opened/closed.  */
	onToggle?: (event: DisclosureToggleEvent) => void;
	/** A reference to the inner <details> element. */
	detailsRef?: React.Ref<HTMLDetailsElement>;
}

export interface DisclosureState {
	open: boolean;
}

export class Disclosure extends React.Component<DisclosureProps, DisclosureState> {
	static defaultProps = {
		open: false,
		onToggle: noop,
		detailsRef: React.createRef<HTMLDetailsElement>(),
	};

	constructor(props: DisclosureProps) {
		super(props);
		this.state = {
			open: props.open || Disclosure.defaultProps.open,
		};
	}

	toggle = (event: DisclosureToggleEvent): void => {
		const { onToggle } = this.props;
		const { open } = this.state;
		this.setState({ open: !open }, () => onToggle && onToggle({ ...event, state: this.state }));
	}

	render(): JSX.Element {
		const {
			detailsRef,
			children,
			className,
			variant,
			animate,
			summary,
			disabled,
			...attributes
		} = this.props;
		const { open } = this.state;
		const onClick = (disabled) ? noop : this.toggle;

		const classes = classNames(
			{
				'disclosure--default': !variant || variant === 'default',
				'disclosure--panel': variant === 'panel',
				'disclosure--animate': animate,
			},
			'disclosure',
			className,
		);

		const SummaryContent = (): JSX.Element => {
			const arrowType = variant === 'default'
				? 'arrow'
				: 'chevron';

			return (
				<>
					<DetailsMarker variant={arrowType} />
					{summary}
				</>
			);
		};

		return (
			<BaseDetails
				ref={detailsRef}
				className={classes}
				summary={<SummaryContent />}
				open={open}
				disabled={disabled}
				onClick={onClick}
				{...attributes}
			>
				<div className="disclosure__container">
					{children}
				</div>
			</BaseDetails>
		);
	}
}

export default Disclosure;
