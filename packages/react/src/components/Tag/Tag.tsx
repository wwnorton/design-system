import React from 'react';
import classNames from 'classnames';
import { TagProps } from './types';
import { Icon } from '../Icon';
import { Button } from '../Button';

export const Tag = React.forwardRef<HTMLElement, TagProps>(({
	dismissible,
	baseName = 'nds-tag',
	closeIconClass = `${baseName}__dismissible__icon`,
	iconClass = `${baseName}__icon`,
	children,
	color,
	onDismiss,
	className,
	icon,
	...props
}: TagProps, ref) => {
	const [isDismissed, setDismissed] = React.useState<boolean>(false);

	let isLink = false;
	if (children && React.isValidElement(children)) {
		isLink = true;
	}

	const BaseIcon = React.useMemo(() => {
		if (!icon) return null;
		const baseProps = {
			className: iconClass,
		};
		const iconProps = (typeof icon === 'string')
			? { ...baseProps, variant: icon }
			: { ...baseProps, icon };
		return <Icon {...iconProps} />;
	}, [icon, iconClass]);

	const classes = classNames(
		className,
		baseName,
		{
			[`${baseName}--${color}`]: color !== undefined,
			[`${baseName}__dismissible`]: dismissible === true,
		},
	);

	const LinkTag = React.useMemo(() => {
		if (!children) return null;
		return (
			<span
				className={classes}
				ref={ref}
			>
				{children}
			</span>
		);
	}, [classes, ref, children]);

	const DefaultTag = React.useMemo(() => {
		const dismiss = () => {
			setDismissed(true);
			if (onDismiss) onDismiss();
		};

		let tagProps = { ...props };
		if (dismissible) {
			tagProps = { ...props, onClick: dismiss };
		}
		return (
			<Button
				role="button"
				className={classes}
				variant="ghost"
				{...tagProps}
			>
				{BaseIcon}
				{children}
				{dismissible && (
					<Button
						iconOnly
						icon="close"
						className={closeIconClass}
						tabIndex={-1}
						onClick={dismiss}
					>
						Dismiss
					</Button>
				)}
			</Button>
		);
	}, [classes, props, children, dismissible, closeIconClass, onDismiss, BaseIcon]);

	if (isDismissed) return null;

	return (
		<>
			{ isLink ? LinkTag : DefaultTag }
		</>
	);
});
