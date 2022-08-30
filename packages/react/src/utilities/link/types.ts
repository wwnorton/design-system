export interface LinkLikeProps extends React.ComponentPropsWithoutRef<'a'> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export type LinkComponent = React.ComponentType<LinkLikeProps>;
