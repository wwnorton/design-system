import React from 'react';

export interface StepIndicatorProps extends React.ComponentPropsWithoutRef<'ol'> {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** When set, a connector line will be shown between the steps	 */
	isConnected?: boolean;
}

export interface StepProps extends React.ComponentPropsWithoutRef<'li'> {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** When set, this step is visually marked as the current step */
	isCurrent?: boolean,
	/** When set, this step is visually marked as complete */
	isCompleted?: boolean,

	/** The className for the container that includes the step marker and it's adjacent connectors */
	markerContainerClass?: string;
	/** The className for the step marker circle */
	markerClass?: string;
	/** The className for the children's container (step label) */
	contentsClass?: string;
}
