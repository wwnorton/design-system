import React from 'react';
import classNames from 'classnames';
import { Icon, IconVariant, SVGIcon } from '../Icon';
import { Button } from '../Button';
import { prefix } from '../../config';
import { AllColors } from '../../utilities/color';

export interface CalloutProps extends React.HTMLAttributes<HTMLElement> {
	/** An optional title for your Callout. */
	title?: string,
	/** Whether to show icon. */
	icon?: IconVariant | SVGIcon,
	/** The base class name according to BEM conventions. */
	baseName?: string,
	/** The className for the Callout's icon, if on exists. */
	iconClass?: string,
	/** The className for the Callout's text, which will be placed in a  */
	textClass?: string,
	/** The className that will be applied to the Callout header `<div>` */
	headerClass?: string,
	/** The className that will be applied to the Callout header icon and title container `<div>`  */
	headerLeftClass?: string,
	/** The className that will applied to the Callout title */
	headerTitleClass?: string,
	/** The className that will be applied to the close Button. */
	closeButtonClass?: string,
	/** The className that will be applied to the Callout's body container */
	bodyClass?: string,
	/** Indicates whether Callout has a 'left' or 'top' border */
	borderPosition?: 'top' | 'left',
	/** The color choice for the Callout. Also configures border color and background color. */
	color?: AllColors;
	/** Indicates whether Callout can be dismissible. */
	dismissible?: boolean;
	/** Determines the HTML element used for Callout */
	tag?: 'div' | 'aside';
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
	headerLeftClass = `${baseName}__header-left`,
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
					{ title
						? (
							<div className={headerLeftClass}>
								{BaseIcon}
								<div className={headerTitleClass}>{title}</div>
							</div>
						)
						: null}
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
