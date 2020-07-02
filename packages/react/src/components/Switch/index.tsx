import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { BaseButton, BaseButtonProps } from '../BaseButton';
import { Tooltip } from '../Tooltip';
import { useForwardedRef, prefix } from '../../utilities';

type SwitchBaseProps =
	| 'children'
	| 'className'
	| 'disabled'
	| 'id'
	| 'onClick'
	| 'onBlur'
	| 'onFocus'
	| 'onPointerEnter'
	| 'onPointerLeave'
export interface SwitchProps extends Pick<BaseButtonProps, SwitchBaseProps> {
	/** A label for the switch. This should be the name of the thing that the
	 * switch controls. Required.
	 */
	label: string;
	/**
	 * An optional description. Will not be rendered inside the tooltip if
	 * `tipped` is `false.
	*/
	description?: React.ReactNode;
	/** Indicates that the label should be rendered as a tooltip. */
	tipped?: boolean;
	/** The switch's initial "on" state. */
	checked?: boolean;
	/** A function to call when the switch is toggled. */
	onToggle?: (checked: boolean) => void;
	/**
	 * Indicates whether the default control text should be used when no children
	 * are provided. "ON" when `checked=true` and "OFF" when `checked=false`.
	 */
	displayDefault?: boolean;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/**
	 * The time in milliseconds before the tooltip should disappear. Use this to
	 * ensure that users can move their cursor from the switch to the tooltip
	 * without it disappearing.
	 */
	hideTooltipDelay?: number;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>((
	{
		baseName = prefix('switch'),
		checked: isChecked = false,
		hideTooltipDelay,
		children,
		className,
		description,
		disabled,
		displayDefault = true,
		id = uniqueId(`${baseName}-`),
		label,
		tipped,
		onClick,
		onToggle,
		...attributes
	}: SwitchProps, ref,
) => {
	const [checked, setChecked] = React.useState(isChecked);
	const [defaultValue, setDefaultValue] = React.useState('off');
	const [button, setButton] = useForwardedRef(ref);

	React.useEffect(() => setChecked(isChecked), [isChecked]);

	React.useEffect(() => {
		setDefaultValue((checked) ? 'ON' : 'OFF');
		if (onToggle) onToggle(checked);
	}, [checked, onToggle]);

	const clickHandler: BaseButtonProps['onClick'] = (e) => {
		if (onClick) onClick(e);
		else setChecked(!checked);
	};

	// label can either be a <labeL> proper or a tooltip
	const Label = (tipped)
		? <Tooltip asLabel reference={button} hideDelay={hideTooltipDelay}>{ label }</Tooltip>
		: (
			<div className="label-desc">
				<label
					htmlFor={id}
					id={`${id}-label`}
					className={classNames({ disabled })}
				>
					{ label }
				</label>
				{ description && <div className="description">{ description }</div> }
			</div>
		);

	const buttonProps = (tipped) ? attributes
		: {
			id,
			'aria-labelledby': `${id}-label`,
			...attributes,
		};

	return (
		<div className={baseName}>
			{ Label }
			<BaseButton
				aria-checked={(checked) ? 'true' : 'false'}
				className={classNames(`${baseName}__control`, className)}
				disabled={disabled}
				onClick={clickHandler}
				ref={setButton}
				role="switch"
				{...buttonProps}
			>
				{ children || (displayDefault && defaultValue) }
			</BaseButton>
		</div>
	);
});
