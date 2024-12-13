import { BasePlacement } from '@popperjs/core';

type ResponseIndicatorVariant = 'incorrect' | 'correct';

export interface ResponseIndicatorProps {
	id?: string;

	/**
	 * If this indicator should have an icon
	 *
	 * @default true
	 */
	withIcon?: boolean;

	/**
	 * The placement of the icon.
	 *
	 * Values: `'top' | 'bottom' | 'left' | 'right'`
	 *
	 * @default 'left'
	 */
	placementIcon?: BasePlacement;

	/**
	 * The variant of the indicator.
	 *
	 * Values: `'correct' | 'incorrect'`
	 *
	 * @default 'correct'
	 */
	variant?: ResponseIndicatorVariant;

	/**
	 * The label of the indicator. Setting this
	 * will override the default label
	 */
	label?: string;

	className?: string;
}
