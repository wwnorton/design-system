import * as React from 'react';
import { BaseButton, BaseButtonProps } from '../BaseButton';

export interface ToggleButtonProps extends BaseButtonProps {
	/** Whether the button should be toggled "on" initially */
	initiallyOn: boolean;
	/** A function to call when the button is toggled. */
	onToggle: (on: ToggleButtonState['on']) => void;
}

export interface ToggleButtonState {
	on: boolean;
}

export class ToggleButton extends React.Component<ToggleButtonProps, ToggleButtonState> {
	static defaultProps = {
		initiallyOn: false,
		onToggle: (): void => {},
	};

	constructor(props: ToggleButtonProps) {
		super(props);

		this.state = {
			on: props.initiallyOn,
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
		const { children, variant } = this.props;
		const { on } = this.state;
		const ariaChecked = (on) ? 'true' : 'false';

		return (
			<BaseButton className="button-toggle" role="switch" variant={variant} aria-checked={ariaChecked} onClick={this.toggle}>
				{ children }
			</BaseButton>
		);
	}
}

export default ToggleButton;
