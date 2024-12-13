import React from 'react';
import classNames from 'classnames';
import { Button, ButtonProps } from '../Button';
import { FieldInfo } from '../Field';
import { Tooltip } from '../Tooltip/Tooltip';
import { useForwardedRef, useId } from '../../utilities';
import { SwitchProps } from './types';

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
	(
		{
			baseName = 'nds-switch',
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
			...props
		}: SwitchProps,
		ref,
	) => {
		const [checked, setChecked] = React.useState(isChecked);
		const [defaultValue, setDefaultValue] = React.useState('OFF');
		const prevChecked = React.useRef(checked);
		const [button, setButton] = useForwardedRef(ref);

		// ids stored as refs since they shouldn't change between renders
		const uniqueId = useId();
		const id = idProp || uniqueId;
		const labelId = labelIdProp || `${id}-label`;
		const descId = descIdProp || `${id}-desc`;

		React.useEffect(() => setChecked(isChecked), [isChecked]);

		React.useEffect(() => {
			setDefaultValue(checked ? 'ON' : 'OFF');
			if (onToggle && checked !== prevChecked.current) onToggle(checked);
			prevChecked.current = checked;
		}, [checked, onToggle]);

		const clickHandler: ButtonProps['onClick'] = (e) => {
			if (onClick) onClick(e);
			else setChecked(!checked);
		};

		// label can either be a <FieldInfo> or a tooltip
		const Label = tipped ? (
			<Tooltip asLabel reference={button} {...tooltipProps}>
				{label}
			</Tooltip>
		) : (
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

		const buttonProps = tipped
			? props
			: {
					id,
					'aria-labelledby': `${id}-label`,
					...props,
			  };

		return (
			<div className={baseName}>
				{Label}
				<Button
					aria-checked={checked ? 'true' : 'false'}
					className={classNames(`${baseName}__control`, className)}
					disabled={disabled}
					onClick={clickHandler}
					ref={setButton}
					role="switch"
					{...buttonProps}
				>
					{children || (displayDefault ? defaultValue : undefined)}
				</Button>
			</div>
		);
	},
);
