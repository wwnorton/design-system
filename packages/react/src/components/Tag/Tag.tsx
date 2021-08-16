import React from 'react';
import classNames from 'classnames';
import { TagProps } from './types';
import { BaseButton } from '../BaseButton';
import { Icon } from '../Icon';
import { isLinkElement } from '../../utilities';

export const Tag = React.forwardRef<HTMLElement, TagProps>(({
	dismissible,
	baseName = 'nds-tag',
	contentsClass = `${baseName}__contents`,
	dismissClass = `${baseName}__dismiss`,
	children,
	color,
	onDismiss,
	onClick,
	className,
	...props
}: TagProps, ref) => {
	const isLink = React.useMemo(() => isLinkElement(children), [children]);
	const classes = classNames(
		className,
		baseName,
		{
			[`${baseName}--${color}`]: color !== undefined,
			[`${baseName}--dismissible`]: dismissible === true,
		},
	);

	if (dismissible) {
		return (
			<span
				className={classes}
				ref={ref}
				{...props}
			>
				<span className={contentsClass}>{ children }</span>
				<BaseButton
					className={dismissClass}
					onClick={(e) => {
						if (onDismiss) onDismiss();
						else if (onClick) onClick(e);
					}}
				>
					<Icon variant="close" size="0.85em" aria-label="Dismiss" />
				</BaseButton>
			</span>
		);
	}

	if (isLink) {
		return (
			<span
				className={classes}
				ref={ref}
				{...props}
			>
				<span className={contentsClass}>{ children }</span>
			</span>
		);
	}

	return (
		<BaseButton className={classes} onClick={onClick} {...props}>
			<span className={contentsClass}>{ children }</span>
		</BaseButton>
	);
});
