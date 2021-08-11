import React from 'react';
import classNames from 'classnames';
import { TagProps } from './types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { isLinkElement } from '../../utilities';

export const Tag = React.forwardRef<HTMLElement, TagProps>(({
	dismissible,
	baseName = 'nds-tag',
	closeIconClass = `${baseName}--dismiss`,
	children,
	color,
	onDismiss,
	className,
	...props
}: TagProps, ref) => {
	const classes = classNames(
		className,
		baseName,
		{
			[`${baseName}--${color}`]: color !== undefined,
			[`${baseName}--dismissible`]: dismissible === true,
		},
	);

	const isLink = React.useMemo(() => isLinkElement(children), [children]);

	const LinkTag = React.useMemo(() => {
		if (!children) return null;
		return (
			<span
				className={classes}
				ref={ref}
				{...props}
			>
				{children}
			</span>
		);
	}, [classes, ref, children, props]);

	const DefaultTag = React.useMemo(() => {
		if (!children) return null;
		return (
			<Button
				role="button"
				className={classes}
				variant="ghost"
				onClick={onDismiss}
				{...props}
			>
				{children}
				{dismissible && (
					<Icon
						variant="close"
						className={closeIconClass}
						tabIndex={-1}
						onClick={onDismiss}
					>
						Dismiss
					</Icon>
				)}
			</Button>
		);
	}, [classes, props, children, dismissible, closeIconClass, onDismiss]);

	return (
		<>
			{ isLink ? LinkTag : DefaultTag }
		</>
	);
});
