import * as React from 'react';

const arrow = 'M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z';

const chevron = 'M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z';

export type DetailsMarkerVariant = 'arrow' | 'chevron';

export interface DetailsMarkerProps {
	variant?: DetailsMarkerVariant;
}

export const defaultProps: Partial<DetailsMarkerProps> = {
	variant: 'arrow',
};

export const DetailsMarker = (props: Partial<DetailsMarkerProps>): JSX.Element => {
	const { variant } = props;

	const shape: string = variant === 'arrow'
		? arrow
		: chevron;
	const placement: string = variant === 'arrow'
		? 'left'
		: 'right';

	return (
		<svg className={`details-marker ${placement}`} aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
			{'<!-- https://fontawesome.com/license -->'}
			<path fill="currentColor" d={shape} />
		</svg>
	);
};

export default DetailsMarker;
