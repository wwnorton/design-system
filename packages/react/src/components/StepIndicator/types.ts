import React from 'react';

export interface StepIndicatorProps extends React.ComponentPropsWithRef<'ol'> {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** If false, the connector will not be rendered */
	connected?: boolean;
}

export interface StepProps extends React.ComponentPropsWithRef<'li'> {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** When set, this step is visually marked as the current step */
	isCurrent?: boolean,
	/** When set, this step is visually marked as complete */
	isComplete?: boolean,

	/** The className for the connector that connects steps */
	connectorClass?: string;
	/** The className for the marker's container */
	markerContainerClass?: string;
	/** The className for the complete/incomplete step marker circle */
	markerClass ?: string;
	/** The className for the children's container (step label) */
	contentsClass?: string;
}
