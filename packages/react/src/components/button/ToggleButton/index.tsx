import * as React from 'react';
import classNames from 'classnames';
import { BaseButton, BaseButtonProps } from '../BaseButton';

export interface ToggleButtonProps extends BaseButtonProps {
	/** Whether the button's initial state should be toggled "on". */
	initiallyOn: boolean;
	/** A function to call when the button is toggled. */
	onToggle: (on: ToggleButtonState['on']) => void;
	/** A reference to the inner <button> element. */
	buttonRef?: React.Ref<HTMLButtonElement>;
}

export interface ToggleButtonState {
	/** The button's toggle state, which represents "on" or "off". */
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
		const {
			buttonRef,
			children,
			className,
			variant,
			...attributes
		} = this.props;
		const { on } = this.state;
		const ariaChecked = (on) ? 'true' : 'false';

		const classes = classNames('button-toggle', className);

		return (
			<BaseButton
				role="switch"
				className={classes}
				variant={variant}
				ref={buttonRef}
				aria-checked={ariaChecked}
				onClick={this.toggle}
				{...attributes}
			>
				{ children }
			</BaseButton>
		);
	}
}

export default ToggleButton;
