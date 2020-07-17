import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { Button, ButtonProps } from '../Button';
import { FieldInfo, FieldInfoCoreProps } from '../Field';
import { Tooltip } from '../Tooltip';
import { useForwardedRef, prefix } from '../../utilities';

export interface SwitchProps extends FieldInfoCoreProps, Omit<ButtonProps, 'children'> {
	/** The name of the Switch. Required. */
	label: React.ReactNode;
	/**
	 * Children are set inside the Swtich control. Default is 'ON' when `checked`
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
	 * The time in milliseconds before the tooltip should disappear. Use this to
	 * ensure that users can move their cursor from the switch to the tooltip
	 * without it disappearing.
	 */
	hideTooltipDelay?: number;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>((
	{
		baseName = prefix('switch'),
		labelClass,
		descriptionClass,
		checked: isChecked = false,
		hideTooltipDelay,
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
	const [button, setButton] = useForwardedRef(ref);

	// ids stored as refs since they shouldn't change between renders
	const { current: id } = React.useRef(idProp || uniqueId(`${baseName}-`));
	const { current: labelId } = React.useRef(labelIdProp || `${id}-label`);
	const { current: descId } = React.useRef(descIdProp || `${id}-desc`);

	React.useEffect(() => setChecked(isChecked), [isChecked]);

	React.useEffect(() => {
		setDefaultValue((checked) ? 'ON' : 'OFF');
		if (onToggle) onToggle(checked);
	}, [checked, onToggle]);

	const clickHandler: ButtonProps['onClick'] = (e) => {
		if (onClick) onClick(e);
		else setChecked(!checked);
	};

	// label can either be a <FieldInfo> or a tooltip
	const Label = (tipped)
		? <Tooltip asLabel reference={button} hideDelay={hideTooltipDelay}>{ label }</Tooltip>
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
