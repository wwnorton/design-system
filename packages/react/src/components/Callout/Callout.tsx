import React from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { useId } from '../../utilities';
import { CalloutProps } from './types';

/**
 * A callout brings attention to related but non-essential information.
 *
 * [Callout documentation](https://wwnorton.github.io/design-system/docs/components/callout)
 */
export const Callout: React.FunctionComponent<CalloutProps> = ({
	title,
	icon,
	dismissible = false,
	tag,
	children,
	className,
	baseName = 'nds-callout',
	iconClass = `${baseName}__icon`,
	headerClass = `${baseName}__header`,
	titleClass = `${baseName}__title`,
	dismissClass = `${baseName}__dismiss`,
	bodyClass = `${baseName}__body`,
	border,
	color,
	onDismiss,
	...props
}: CalloutProps) => {
	const [isDismissed, setDismissed] = React.useState<boolean>(false);
	const titleId = useId();

	const dismiss = () => {
		setDismissed(true);
		if (onDismiss) onDismiss();
	};

	const iconProps = React.useMemo(() => {
		if (typeof icon === 'string') return { variant: icon };
		return { icon };
	}, [icon]);

	const classes = classNames(
		className,
		baseName,
		{
			[`${baseName}--${color}`]: color !== undefined,
			[`${baseName}--no-title`]: !title,
		},
	);

	const Tag = React.useMemo(() => {
		if (tag) return tag;
		return (title) ? 'aside' : 'div';
	}, [tag, title]);

	if (isDismissed) return null;

	return (
		<Tag className={classes} data-border={border} aria-labelledby={titleId} {...props}>
			{ title && (
				<header className={headerClass}>
					{ icon && <span className={iconClass}><Icon {...iconProps} /></span> }
					<div className={titleClass} id={titleId}>{ title }</div>
				</header>
			) }
			{ dismissible && (
				<Button
					icon="close"
					iconOnly
					onClick={dismiss}
					className={dismissClass}
				>
					Dismiss
				</Button>
			) }
			<div className={bodyClass}>
				{children}
			</div>
		</Tag>
	);
};

export const CalloutError: React.FunctionComponent<CalloutProps> = (
	{ children, ...props }: CalloutProps,
) => (
	<Callout
		border="left"
		color="error"
		icon="exclamation"
		title="Error"
		{...props}
	>
		{children}
	</Callout>
);

export const CalloutSuccess: React.FunctionComponent<CalloutProps> = (
	{ children, ...props }: CalloutProps,
) => (
	<Callout
		border="left"
		color="success"
		icon="check-circle"
		title="Success"
		{...props}
	>
		{children}
	</Callout>
);

export const CalloutWarning: React.FunctionComponent<CalloutProps> = (
	{ children, ...props }: CalloutProps,
) => (
	<Callout
		border="left"
		color="warning"
		icon="warning"
		title="Warning"
		{...props}
	>
		{children}
	</Callout>
);
