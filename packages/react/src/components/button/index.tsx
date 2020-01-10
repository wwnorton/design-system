import * as React from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from './BaseButton';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';

export interface ButtonProps extends BaseButtonProps {
	/** The base class name according to BEM conventions */
	baseName?: string;
	/** Button variant conveys the button's level of visual emphasis. */
	variant?: ButtonVariant;
	/** A reference to the inner <button> element. */
	buttonRef?: React.Ref<HTMLButtonElement>;
}

export class Button extends React.Component<ButtonProps> {
	public static defaultProps = {
		baseName: 'button',
		type: 'button',
	}

	render(): JSX.Element {
		const {
			baseName,
			variant,
			buttonRef,
			className,
			children,
			...attributes
		} = this.props;

		const classes = classNames(
			{
				[`${baseName}`]: true,
				[`${baseName}--solid`]: variant === 'solid',
				[`${baseName}--outline`]: variant === 'outline',
				[`${baseName}--ghost`]: variant === 'ghost',
			},
			className,
		);

		return (
			<BaseButton className={classes} ref={buttonRef} {...attributes}>
				{ children }
			</BaseButton>
		);
	}
}

export default Button;
