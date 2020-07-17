export * from './helpers';
export * from './hooks';
export * from './icons';
export * from './validation';

type ComponentErrors = {
	errors: Record<string, string>;
};

export type NDSForwardRef<T, P> =
React.ForwardRefExoticComponent<P & React.RefAttributes<T>> & ComponentErrors;

export type NDSFunctionComponent<P> = React.FunctionComponent<P> & ComponentErrors;
