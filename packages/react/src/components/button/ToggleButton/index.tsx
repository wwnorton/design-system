import * as React from 'react';
import classNames from 'classnames';
import { BaseButton, BaseButtonProps } from '../BaseButton';

export interface ToggleButtonProps extends BaseButtonProps {
	/** Whether the button's initial state should be toggled "on". */
	on: boolean;
	/** A function to call when the button is toggled. */
	onToggle: (on: ToggleButtonState['on']) => void;
	textualState: boolean;
	/** A reference to the inner <button> element. */
	buttonRef?: React.Ref<HTMLButtonElement>;
}

export interface ToggleButtonState {
	/** The button's toggle state, which represents "on" or "off". */
	on: boolean;
}

export class ToggleButton extends React.Component<ToggleButtonProps, ToggleButtonState> {
	static defaultProps: Partial<ToggleButtonProps> = {
		on: false,
		onToggle: (): void => {},
		textualState: true,
	};

	constructor(props: ToggleButtonProps) {
		super(props);

		this.state = {
			on: props.on,
		};
	}

	toggle = (): void => {
		this.setState((state, { onToggle }) => {
			const on = !state.on;
			onToggle(on);
			return { on };
		});
	}

	render(): JSX.Element {
		const {
			textualState,
			buttonRef,
			children,
			className,
			...attributes
		} = this.props;
		const { on } = this.state;
		const ariaChecked = (on) ? 'true' : 'false';

		const classes = classNames('button-toggle', className);

		return (
			<BaseButton
				role="switch"
				className={classes}
				ref={buttonRef}
				aria-checked={ariaChecked}
				onClick={this.toggle}
				{...attributes}
			>
				{ textualState && <div className="toggle-state" /> }
				{ children }
			</BaseButton>
		);
	}
}

export default ToggleButton;
