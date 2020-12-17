import React from 'react';
import classNames from 'classnames';
import { uniqueId } from 'lodash-es';
import { Button, ButtonProps } from '../Button';
import { FieldInfo, FieldInfoCoreProps } from '../Field';
import { Tooltip, TooltipCoreProps } from '../Tooltip';
import { useForwardedRef } from '../../hooks';
import { prefix } from '../../config';

export interface SwitchProps extends FieldInfoCoreProps, Omit<ButtonProps, 'children'> {
	/** The name of the Switch. Required. */
	label: React.ReactNode;
	/**
	 * Children are set inside the Switch control. Default is 'ON' when `checked`
	 * and `OFF` when unchecked. Disable default with `displayDefault={false}`.
	 */
	children?: React.ReactNode;
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
	 * Tooltip props that should be included when the switch's label is rendered
	 * as a tooltip.
	 */
	tooltipProps?: TooltipCoreProps;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>((
	{
		baseName = prefix('switch'),
		labelClass,
		descriptionClass,
		checked: isChecked = false,
		tooltipProps,
		children,
		className,
		description,
		disabled,
		displayDefault = true,
		label,
		tipped,
		id: idProp,
		labelId: labelIdProp,
		descriptionId: descIdProp,
		onClick,
		onToggle,
		...attributes
	}: SwitchProps, ref,
) => {
	const [checked, setChecked] = React.useState(isChecked);
	const [defaultValue, setDefaultValue] = React.useState('OFF');
	const prevChecked = React.useRef(checked);
	const [button, setButton] = useForwardedRef(ref);

	// ids stored as refs since they shouldn't change between renders
	const { current: id } = React.useRef(idProp || uniqueId(`${baseName}-`));
	const { current: labelId } = React.useRef(labelIdProp || `${id}-label`);
	const { current: descId } = React.useRef(descIdProp || `${id}-desc`);

	React.useEffect(() => setChecked(isChecked), [isChecked]);

	React.useEffect(() => {
		setDefaultValue((checked) ? 'ON' : 'OFF');
		if (onToggle && checked !== prevChecked.current) onToggle(checked);
		prevChecked.current = checked;
	}, [checked, onToggle]);

	const clickHandler: ButtonProps['onClick'] = (e) => {
		if (onClick) onClick(e);
		else setChecked(!checked);
	};

	// label can either be a <FieldInfo> or a tooltip
	const Label = (tipped)
		? <Tooltip asLabel reference={button} {...tooltipProps}>{ label }</Tooltip>
		: (
			<FieldInfo
				htmlFor={id}
				label={label}
				labelClass={labelClass}
				labelId={labelId}
				description={description}
				descriptionClass={descriptionClass}
				descriptionId={descId}
			/>
		);

	const buttonProps = (tipped)
		? attributes
		: {
			id,
			'aria-labelledby': `${id}-label`,
			...attributes,
		};

	return (
		<div className={baseName}>
			{ Label }
			<Button
				aria-checked={(checked) ? 'true' : 'false'}
				className={classNames(`${baseName}__control`, className)}
				disabled={disabled}
				onClick={clickHandler}
				ref={setButton}
				role="switch"
				{...buttonProps}
			>
				{ children || ((displayDefault) ? defaultValue : undefined) }
			</Button>
		</div>
	);
});
