import React from 'react';
import classNames from 'classnames';
import { TagProps } from './types';
import { Icon } from '../Icon';
import { Button } from '../Button';

export const Tag = React.forwardRef<HTMLElement, TagProps>(({
	dismissible,
	baseName = 'nds-tag',
	closeIconClass = `${baseName}__close`,
	iconClass = `${baseName}__icon`,
	children,
	color,
	onDismiss,
	className,
	icon,
	...props
}: TagProps, ref) => {
	const [isDismissed, setDismissed] = React.useState<boolean>(false);

	const BaseIcon = React.useMemo(() => {
		if (!icon) return null;
		const baseProps = {
			className: iconClass,
		};
		const iconProps = (typeof icon === 'string')
			? { ...baseProps, variant: icon, size: 12 }
			: { ...baseProps, icon };
		return <Icon {...iconProps} />;
	}, [icon, iconClass]);

	const classes = classNames(
		className,
		baseName,
		{
			[`${baseName}--${color}`]: color !== undefined,
		},
	);

	const WithIcon = React.useMemo(() => {
		const dismiss = () => {
			setDismissed(true);
			if (onDismiss) onDismiss();
		};

		if (!children) return null;
		let tagProps = { ...props, tabIndex: 0 };
		if (dismissible) {
			tagProps = {
				...tagProps,
				onClick: dismiss,
				role: 'button',
				'aria-pressed': isDismissed,
			};
		}
		return (
			<span
				className={classes}
				{...tagProps}
				ref={ref}
			>
				{BaseIcon}
				<span>
					{children !== null && children !== undefined ? children : null}
				</span>
				{dismissible && (
					<Button
						icon="close"
						tabIndex={-1}
						iconOnly
						onClick={dismiss}
						role="button"
						className={closeIconClass}
					>
						Dismiss
					</Button>
				)}
			</span>
		);
	}, [
		BaseIcon,
		children,
		dismissible,
		onDismiss,
		closeIconClass,
		classes,
		props,
		isDismissed,
		ref,
	]);

	const Default = React.useMemo(() => {
		if (!children) return null;
		return (
			<Button className={classes} {...props} role="button">
				{children }
			</Button>
		);
	}, [children, classes, props]);

	if (isDismissed) return null;
	return (
		<>
			{ (dismissible || icon) ? WithIcon : Default}
		</>
	);
});
