import React from 'react';
import classNames from 'classnames';
import { uniqueId } from 'lodash';
import { Icon, IconProps } from '../Icon';
import { Button } from '../Button';
import { AllColors } from '../../utilities/color';

export interface CalloutProps extends React.HTMLAttributes<HTMLElement> {
	/** The title summarizes the callout's contents. */
	title?: string,
	/** An icon can be added for character or to emphasize the callout's title. */
	icon?: IconProps['variant'] | IconProps['icon'],
	/** The callout's color family. */
	color?: Exclude<AllColors, 'disabled'>;
	/** The position of the border. */
	border?: 'top' | 'right' | 'bottom' | 'left',
	/** Indicates whether callout can be dismissed. */
	dismissible?: boolean;
	/**
	 * The HTML element used for the callout. This will default to
	 * [`aside`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)
	 * when a `title` is provided, making it a
	 * [landmark](https://www.w3.org/TR/wai-aria-practices-1.2/#aria_landmark)
	 * with an accessible name of `title`. If no `title` is provided, this will
	 * default to `div` to ensure that it is _not_ a landmark. This behavior can
	 * be overridden by providing an explicit tag.
	 */
	tag?: 'div' | 'aside';
	/** Callback function that is called when the callout is dismissed. */
	onDismiss?: () => void;
	/** The base class name according to BEM conventions. */
	baseName?: string,
	/** The `className` that will be applied to the callout icon. */
	iconClass?: string,
	/** The `className` that will be applied to the callout header element. */
	headerClass?: string,
	/** The className that will applied to the callout title. */
	titleClass?: string,
	/** The className that will be applied to the close Button. */
	dismissClass?: string,
	/** The className that will be applied to the callout's body container */
	bodyClass?: string,
}

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
	const titleIdRef = React.useRef(uniqueId('callout-title-'));
	const titleId = (title) ? titleIdRef.current : undefined;

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
					{ icon && <span className={iconClass}><Icon size="100%" {...iconProps} /></span> }
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
