import React from 'react';
import { useLink, LinkLikeProps } from '../../utilities/link';
import { Icon } from '../Icon';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	/** Indicates that the link should open in a new window or tab. */
	external?: boolean;
}

export const Link = React.forwardRef<unknown, LinkLikeProps | LinkProps>((
	props: LinkLikeProps | LinkProps, ref,
) => {
	const LinkComponent = useLink();

	if (LinkComponent) {
		return (
			<LinkComponent
				className="nds-link"
				ref={ref}
				{...props}
			/>
		);
	}

	const {
		external,
		children,
		...linkProps
	} = props as LinkProps;

	return (
		<a
			className="nds-link"
			rel={(external) ? 'noopener noreferrer' : undefined}
			target={(external) ? '_blank' : undefined}
			ref={ref as React.ForwardedRef<HTMLAnchorElement>}
			{...linkProps}
		>
			{ children }
			{ external && (
				<span className="nds-link__launch">
					<Icon size="1em" variant="launch" />
				</span>
			) }
		</a>
	);
});
