import React from 'react';
import classNames from 'classnames';
import { TagProps } from './types';
import { Button } from '../Button';
import { isLinkElement } from '../../utilities';

export const Tag = React.forwardRef<HTMLElement, TagProps>(({
	dismissible,
	baseName = 'nds-tag',
	closeIconClass = `${baseName}__dismissible__icon`,
	children,
	color,
	onDismiss,
	className,
	...props
}: TagProps, ref) => {
	const [isDismissed, setDismissed] = React.useState<boolean>(false);

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
				{...props}
			>
				{children}
			</span>
		);
	}, [classes, ref, children, props]);

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
	}, [classes, props, children, dismissible, closeIconClass, onDismiss]);

	if (isDismissed) return null;

	return (
		<>
			{ isLinkElement(children) ? LinkTag : DefaultTag }
		</>
	);
});
