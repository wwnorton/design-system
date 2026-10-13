import React from 'react';
import { Icon, IconVariant, SVGIcon } from '../../components/Icon';

export type UseIconOptions = {
	/**
	 * The icon to display.
	 */
	icon?: IconVariant | SVGIcon;

	/**
	 * The css class to add to the icon.
	 */
	iconClass?: string;
};

export function useIcon({ icon, iconClass }: UseIconOptions): React.ReactNode {
	return React.useMemo(() => {
		if (!icon) return null;
		const baseProps = {
			className: iconClass,
		};
		const iconProps =
			typeof icon === 'string' ? { ...baseProps, variant: icon } : { ...baseProps, icon };
		return <Icon {...iconProps} />;
	}, [icon, iconClass]);
}
