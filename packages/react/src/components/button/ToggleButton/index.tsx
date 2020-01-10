import * as React from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from '../BaseButton';
import { noop, ClickEvent } from '../../../utilities/events';

export interface ToggleButtonProps extends BaseButtonProps {
	/** The button's initial "on" state. */
	on: boolean;
	/** A function to call when the button is toggled. */
	onToggle: (event: ToggleEvent) => void;
	/** Whether or not "on/off" should be visible in the control. */
	textualState: boolean;
	/** A reference to the inner <button> element. */
	buttonRef?: React.Ref<HTMLButtonElement>;
}

export interface ToggleButtonState {
	/** The button's toggle state, which represents "on" or "off". */
	on: boolean;
}

export interface ToggleEvent extends ClickEvent {
	state: ToggleButtonState;
}

export class ToggleButton extends React.Component<ToggleButtonProps, ToggleButtonState> {
	static defaultProps: Partial<ToggleButtonProps> = {
		on: false,
		onToggle: noop,
		textualState: true,
	};

	constructor(props: ToggleButtonProps) {
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
			button: true,
			'button--toggle': true,
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
				{ textualState && <div className="toggle-state" /> }
				{ children }
			</BaseButton>
		);
	}
}

export default ToggleButton;
