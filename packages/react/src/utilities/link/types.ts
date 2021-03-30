export interface LinkLikeProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export type LinkComponent = React.ComponentType<LinkLikeProps>;
