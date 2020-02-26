export interface SVGIcon {
	name: IconVariant;
	originalName?: string;
	viewBox: string;
	d: string;
	source: string;
}

export type IconVariant =
	| 'caret-right'
	| 'check'
	| 'chevron-down'
	| 'close'
	| 'minus';

const materialDefaults = {
	viewBox: '0 0 24 24',
};

/** A subset of Material Design's icons. */
export const materialIcons: SVGIcon[] = [
	{
		name: 'caret-right',
		originalName: 'arrow_right',
		d: 'M10 17l5-5-5-5v10z',
		source: 'https://material.io/resources/icons/?icon=arrow_right&style=baseline',
		...materialDefaults,
	},
	{
		name: 'check',
		d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
		source: 'https://material.io/resources/icons/?icon=check&style=baseline',
		...materialDefaults,
	},
	{
		name: 'chevron-down',
		originalName: 'expand_more',
		d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z',
		source: 'https://material.io/resources/icons/?icon=expand_more&style=baseline',
		...materialDefaults,
	},
	{
		name: 'close',
		d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
		source: 'https://material.io/resources/icons/?icon=close&style=baseline',
		...materialDefaults,
	},
	{
		name: 'minus',
		d: 'M19 13H5v-2h14v2z',
		source: 'https://material.io/resources/icons/?icon=remove&style=baseline',
		...materialDefaults,
	},
];

/**
 * Retrieve an SVGIcon object, which contains the path's `d` & `viewBox` needed
 * to set the SVG.
 */
const findIcon = (
	name: IconVariant,
): SVGIcon | undefined => materialIcons.find(({ name: iconName }) => name === iconName);

export default findIcon;
