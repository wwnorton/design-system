import * as React from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from '../button/BaseButton';
import { noop, ClickEvent } from '../../utilities/events';

export interface SwitchProps extends BaseButtonProps {
	/** The switch's initial "on" state. */
	on: boolean;
	/** A function to call when the switch is toggled. */
	onToggle: (event: ToggleEvent) => void;
	/** Whether or not "on/off" should be visible in the control. */
	textualState: boolean;
	/** A reference to the inner <button> element. */
	buttonRef?: React.Ref<HTMLButtonElement>;
}

export interface SwitchState {
	/** The switch's current state, which represents "on" or "off". */
	on: boolean;
}

export interface ToggleEvent extends ClickEvent {
	state: SwitchState;
}

export class Switch extends React.Component<SwitchProps, SwitchState> {
	static defaultProps: Partial<SwitchProps> = {
		on: false,
		onToggle: noop,
		textualState: true,
	};

	constructor(props: SwitchProps) {
		super(props);

		this.state = {
			on: props.on,
		};
	}

	toggle = async (e: ClickEvent): Promise<void> => {
		const { onToggle } = this.props;
		const { on } = this.state;
		await this.setState({ on: !on });
		if (onToggle) onToggle({ ...e, state: this.state });
	}

	render(): JSX.Element {
		const {
			textualState,
			buttonRef,
			disabled,
			children,
			className,
			...attributes
		} = this.props;
		const { on } = this.state;
		const ariaChecked = (on) ? 'true' : 'false';
		const classes = classNames({
			disabled,
			switch: true,
		}, className);
		// do nothing on click if the component is disabled
		const onClick = (disabled) ? noop : this.toggle;

		return (
			<BaseButton
				role="switch"
				className={classes}
				ref={buttonRef}
				aria-checked={ariaChecked}
				onClick={onClick}
				{...attributes}
			>
				{ textualState && <div className="switch-state" /> }
				{ children }
			</BaseButton>
		);
	}
}

export default Switch;
