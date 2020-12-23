import React from 'react';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

type MaterialUIProps = Pick<CircularProgressProps, 'thickness' | 'value' | 'variant' | 'size'>;

export type BaseProgressIndicatorProps = MaterialUIProps & React.HTMLAttributes<HTMLSpanElement>;

export const BaseProgressIndicator = React.forwardRef<HTMLElement, BaseProgressIndicatorProps>(({
	thickness,
	value,
	variant,
	color,
	size,
}: BaseProgressIndicatorProps, ref) => {
	const circularColor = color ? `var(--nds-${color}-60)` : color;
	const useStyles = makeStyles({
		circularProgress: {
			color: circularColor,
		},
	});
	const classes = useStyles();
	return (
		<CircularProgress
			className={classes.circularProgress}
			variant={variant}
			thickness={thickness}
			value={value}
			role="status"
			size={size}
			ref={ref}
		/>
	);
});
