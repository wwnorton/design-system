import { BasePlacement } from '@popperjs/core';

type ResponseIndicatorVariant = 'incorrect' | 'correct';

export interface ResponseIndicatorProps {
	id?: string;
	withIcon?: boolean;
	placementIcon?: BasePlacement;
	variant: ResponseIndicatorVariant;
	label?: string;
}
