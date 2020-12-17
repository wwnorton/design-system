import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

export interface BaseProgressIndicatorProps extends React.DetailsHTMLAttributes<HTMLElement> {
	/** A URL or reference to the source of this Loader. */
	baseName?:string;
	variant?: 'determinate' | 'indeterminate' | 'static';
	thickness?:number,
	ariaBusy?:boolean,
	progressValue?:number;
}

export const BaseProgressIndicator = React.forwardRef<HTMLElement, BaseProgressIndicatorProps>(({
	...props

}: BaseProgressIndicatorProps, ref) => {
	const useStyles = makeStyles({
		circularProgress: {
			color: props.color,
		},
	});
	const classes = useStyles();
	return (
		<CircularProgress
			className={classes.circularProgress}
			variant={props.variant}
			thickness={props.thickness}
			aria-busy={props.ariaBusy ? props.ariaBusy : true}
			value={props.progressValue}
			ref={ref}
			role="status"
			aria-label="progressbar"
		/>
	);
});
