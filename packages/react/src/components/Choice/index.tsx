import React from 'react';
import Button, { ButtonProps } from '../Button';
import Checkbox, { CheckboxProps } from '../Checkbox';
import Radio from '../Radio';
import Switch from '../Switch';
import { noop } from '../../utilities/events';

export type ChoiceVariant = 'button' | 'checkbox' | 'radio' | 'switch';

export interface ChoiceProps {
	variant?: ChoiceVariant;
	checked?: boolean;
	value: React.ReactText;
	disabled?: boolean;
	name?: string;
	children?: React.ReactNode;
	label?: string;
	title?: string;
	buttonVariant?: ButtonProps['variant'];
	className?: string;
	onChoice?: (props: Choice) => void;
	onChange?: CheckboxProps['onChange'];
	onClick?: ButtonProps['onClick'];
}

class Choice extends React.PureComponent<ChoiceProps> {
	static defaultProps = {
		variant: 'radio',
		buttonVariant: 'solid',
		checked: false,
		onChoice: noop,
		onChange: noop,
		onClick: noop,
	}

	render(): JSX.Element {
		const {
			variant,
			value,
			name,
			buttonVariant,
			checked,
			children,
			label = children || String(value),
			onChoice = Choice.defaultProps.onChoice,
			onChange = Choice.defaultProps.onChange,
			onClick = Choice.defaultProps.onClick,
			...attributes
		} = this.props;
		// props that are applied to all variants
		const props = {
			value,
			checked,
			...attributes,
		};

		const clickHandler: ChoiceProps['onClick'] = (e) => {
			onChoice(this);
			onClick(e);
		};
		const changeHandler: ChoiceProps['onChange'] = (e) => {
			onChoice(this);
			onChange(e);
		};

		const buttonProps = {
			...props,
			onClick: clickHandler,
			value: undefined,
		};

		const inputProps = {
			...props,
			onChange: changeHandler,
			label: (typeof label !== 'string') ? String(value) : label,
			name,
		};

		if (variant === 'button') {
			return <Button variant={buttonVariant} {...buttonProps}>{ value }</Button>;
		}

		if (variant === 'switch') {
			return <Switch displayState={false} {...buttonProps}>{ value }</Switch>;
		}

		if (variant === 'checkbox') {
			return <Checkbox {...inputProps} />;
		}

		return <Radio {...inputProps} />;
	}
}

export default Choice;
