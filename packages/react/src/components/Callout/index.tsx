import React from 'react';
import classNames from 'classnames';
import { Icon, IconVariant, SVGIcon } from '../Icon';
import { Button } from '../Button';
import { prefix } from '../../config';
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

export type CalloutPresetProps = Omit<CalloutProps, 'borderPosition' | 'icon' | 'color'>;

export const Callout: React.FunctionComponent<CalloutProps> = ({
	title,
	icon,
	dismissible = false,
	tag: Tag = 'aside',
	children,
	className,
	baseName = prefix('callout'),
	iconClass = `${baseName}__icon`,
	headerClass = classNames(`${baseName}__header`, ((icon || title) ? null : `${baseName}__header--no-title`)),
	headerTitleClass = `${baseName}__title`,
	closeButtonClass = `${baseName}__close-button`,
	bodyClass = `${baseName}__body`,
	borderPosition,
	color = 'base',
	...props
}: CalloutProps): JSX.Element | null => {
	const [isDismissed, setDismissed] = React.useState<boolean>(false);

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
		{
			[`${baseName}--border-left`]: (borderPosition === 'left'),
			[`${baseName}--border-top`]: (borderPosition === 'top'),
			[`${baseName}--${color}`]: color !== undefined,
			[`${baseName}--no-title`]: !title && dismissible,
		},
		baseName,
		className,
	);

	const showHeader = React.useMemo(
		() => Boolean(title || icon || dismissible),
		[title, icon, dismissible],
	);

	if (isDismissed) return null;

	return (
		<Tag className={classes}>
			{ showHeader ? (
				<header className={headerClass}>
					{BaseIcon}
					{ title ? (<div className={headerTitleClass}>{title}</div>) : null}
					{ dismissible
						? (
							<Button
								variant='ghost'
								icon='close'
								iconOnly
								onClick={() => setDismissed(true)}
								className={closeButtonClass}
							>
								Close
							</Button>
						) : null}
				</header>
			) : null}
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
		border='left'
		color='error'
		icon='exclamation'
		title='Error'
		{...props}
	>
		{children}
	</Callout>
);

export const CalloutSuccess: React.FunctionComponent<CalloutProps> = (
	{ children, ...props }: CalloutProps,
) => (
	<Callout
		border='left'
		color='success'
		icon='check-circle'
		title='Success'
		{...props}
	>
		{children}
	</Callout>
);

export const CalloutWarning: React.FunctionComponent<CalloutProps> = (
	{ children, ...props }: CalloutProps,
) => (
	<Callout
		border='left'
		color='warning'
		icon='warning'
		title='Warning'
		{...props}
	>
		{children}
	</Callout>
);
