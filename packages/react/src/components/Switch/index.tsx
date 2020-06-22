import React from 'react';
import classNames from 'classnames';
import { noop } from '../../utilities';
import { BaseButton, BaseButtonProps } from '../BaseButton';

export interface SwitchProps extends BaseButtonProps {
	/** The switch's initial "on" state. */
	checked?: boolean;
	/** A function to call when the switch is toggled. */
	onToggle: (event: SwitchState) => void;
	/** Whether or not the `on` and `off` props should render on the control. */
	hideState: boolean;
	/** A reference to the inner <button> element. */
	buttonRef?: React.Ref<HTMLButtonElement>;
	/** An element or string that will be displayed when the switch is on. */
	on?: JSX.Element | React.ReactText;
	/** An element or string that will be displayed when the switch is off. */
	off?: JSX.Element | React.ReactText;
	/** The base class name according to BEM conventions */
	baseName?: string;
	/** The `className` that will be applied to the state indicator. */
	stateIndicatorClass?: string;
}

export interface SwitchState {
	/** The switch's current state, which represents "on" or "off". */
	checked: boolean;
}

/** A switch allows a user to immediately turn an option on or off. */
export class Switch extends React.Component<SwitchProps, SwitchState> {
	/* eslint-disable react/sort-comp */
	static bemBase = 'switch';
	static bemElements = {
		stateIndicator: 'state',
	}
	/* eslint-enable */

	static defaultProps = {
		baseName: Switch.bemBase,
		checked: false,
		onToggle: noop,
		hideState: false,
		on: 'ON',
		off: 'OFF',
	};

	constructor(props: SwitchProps) {
		super(props);

		this.state = {
			checked: props.checked || Switch.defaultProps.checked,
		};
	}

	componentDidUpdate(
		prevProps: SwitchProps,
		prevState: SwitchState,
	): void {
		const { checked } = this.props;
		const { checked: stateChecked } = this.state;

		if (!prevProps.checked && checked) {
			this.toggle(true);
		} else if (prevProps.checked && !checked) {
			this.toggle(false);
		}

		if (!prevState.checked && stateChecked) {
			this.onToggle();
		} else if (prevState.checked && !stateChecked) {
			this.onToggle();
		}
	}

	private get hasStateContent(): boolean {
		const { hideState, on, off } = this.props;
		if (hideState) return false;
		return Boolean(on || off);
	}

	private get StateContent(): JSX.Element | React.ReactText | null {
		const {
			on,
			off,
			baseName,
			stateIndicatorClass = `${baseName}__${Switch.bemElements.stateIndicator}`,
		} = this.props;
		const { checked } = this.state;
		if (!this.hasStateContent) return null;
		return (
			<span className={stateIndicatorClass} aria-hidden="true">
				{ (checked) ? on : off }
			</span>
		);
	}

	toggle = (checked: boolean): void => {
		this.setState({ checked });
	}

	onToggle = (): void => {
		const { onToggle = noop } = this.props;
		onToggle(this.state);
	}

	onClick: SwitchProps['onClick'] = (e): void => {
		const { onClick } = this.props;
		const { checked } = this.state;
		if (onClick) onClick(e);
		else this.toggle(!checked);
	}

	render(): JSX.Element {
		const {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			on, off, hideState, onClick, baseName, stateIndicatorClass,
			buttonRef,
			disabled,
			children,
			className,
			...attributes
		} = this.props;
		const { checked } = this.state;
		const ariaChecked = (checked) ? 'true' : 'false';
		const classes = classNames({
			disabled,
			switch: true,
		}, className);

		return (
			<BaseButton
				role="switch"
				disabled={disabled}
				className={classes}
				ref={buttonRef}
				aria-checked={ariaChecked}
				onClick={this.onClick}
				type="button"
				{...attributes}
			>
				{ this.StateContent }
				{ children }
			</BaseButton>
		);
	}
}
