import React from 'react';
import classNames from 'classnames';
import { Icon, IconVariant, SVGIcon } from '../Icon';
import { Button } from '../Button';
import { prefix } from '../../config';
import { SystemColors } from '../../utilities/color';

export type CalloutPresets = 'success' | 'warning' | 'error';
export type BorderPositionType = 'top' | 'left';

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
	/** An optional title for your Callout. */
	title?: string,
	/** Whether to show icon. */
	icon?: IconVariant | SVGIcon,
	/** Color choice for Icon */
	iconColor?: string,
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
	borderPosition?: BorderPositionType,
	/** The color choice of the Callout */
	color?: SystemColors;
	/** Indicates whether Callout can be dismissible. */
	dismissible?: boolean;
}

export const Callout: React.FunctionComponent<CalloutProps> = ({

	// options
	title,
	icon,
	dismissible = false,

	// anatomy
	children,

	// classes
	className,
	baseName = prefix('callout'),
	iconClass = `${baseName}__icon`,
	iconColor = 'var(--nds-navy-90)',
	headerClass = classNames(`${baseName}__header`, ((icon || title) ? null : `${baseName}__header--no-title`)),
	headerLeftClass = `${baseName}__header-left`,
	headerTitleClass = `${baseName}__title`,
	closeButtonClass = `${baseName}__close-button`,
	bodyClass = `${baseName}__body`,
	borderPosition,
	color = 'navy',

	...props
}: CalloutProps): JSX.Element | null => {
	const [isDismissed, setDismissed] = React.useState<boolean>(false);

	const BaseIcon = React.useMemo(() => {
		if (!icon) return null;
		const baseProps = {
			className: iconClass,
		};
		const iconProps = (typeof icon === 'string')
			? { ...baseProps, variant: icon, color: iconColor }
			: { ...baseProps, icon };
		return <Icon {...iconProps} />;
	}, [icon, iconClass, iconColor]);

	const classes = classNames(
		{
			[`${baseName}--border-left`]: (borderPosition === 'left'),
			[`${baseName}--border-top`]: (borderPosition === 'top'),
			[`${baseName}--color-${color}`]: color !== undefined,
		},
		((!title && dismissible) ? `${baseName}--no-title` : null),
		baseName,
		className,
	);

	if (isDismissed) return null;

	return (
		<div className={classes}>
			{ !title && !icon && !dismissible ? null : (
				<div className={headerClass}>
					{ title
						? (
							<div className={headerLeftClass}>
								{ icon ? BaseIcon : null}
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
								onClick={(): void => { setDismissed(true); }}
								className={classNames(closeButtonClass, 'button--base')}
							>
								Close
							</Button>
						) : null}
				</div>
			)}
			<div className={bodyClass}>
				{children}
			</div>
		</div>
	);
};
