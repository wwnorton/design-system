export interface SVGIcon {
	d?: string;
	fullName?: string;
	originalName?: string;
	viewBox?: '0 0 24 24';
	source?: string;
	children?: React.ReactNode;
	label?: string;
}
export type IconVariant =
	| 'account'
	| 'arrow-up'
	| 'arrow-right'
	| 'arrow-down'
	| 'arrow-left'
	| 'calendar'
	| 'cancel'
	| 'caret-up'
	| 'caret-down'
	| 'caret-right'
	| 'caret-left'
	| 'check'
	| 'check-circle'
	| 'chevron-up'
	| 'chevron-right'
	| 'chevron-down'
	| 'chevron-left'
	| 'close'
	| 'delete'
	| 'download'
	| 'edit'
	| 'exclamation'
	| 'heart'
	| 'heart-outline'
	| 'flag'
	| 'info'
	| 'launch'
	| 'list'
	| 'menu'
	| 'minus'
	| 'minus-circle'
	| 'more-horizontal'
	| 'more-vertical'
	| 'plus'
	| 'plus-circle'
	| 'print'
	| 'save'
	| 'search'
	| 'settings'
	| 'star'
	| 'star-outline'
	| 'subdirectory-left'
	| 'subdirectory-right'
	| 'warning';

export const viewBox = '0 0 24 24';

export const icons: Record<IconVariant, SVGIcon> = {
	account: {
		fullName: 'Account',
		d: 'M19.3 16.509a35.6 35.6 0 00-4.87-2.691v-2.763a2.013 2.013 0 00.7-1.6V7.273A2.99 2.99 0 0012 4a2.99 2.99 0 00-3.13 3.273v2.182a1.817 1.817 0 00.7 1.6v2.763c-1.391.655-4.452 2.473-4.87 2.691a1.33 1.33 0 00-.7 1.382v1.745a.336.336 0 00.348.364h15.3a.336.336 0 00.352-.364v-1.745a1.33 1.33 0 00-.7-1.382z',
		viewBox,
	},
	'arrow-up': {
		fullName: 'Arrow up',
		originalName: 'arrow_upward',
		d: 'M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z',
		source: 'https://material.io/resources/icons/?icon=arrow_upward&style=baseline',
		viewBox,
	},
	'arrow-right': {
		fullName: 'Arrow right',
		originalName: 'arrow_forward',
		d: 'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z',
		source: 'https://material.io/resources/icons/?icon=arrow_forward&style=baseline',
		viewBox,
	},
	'arrow-down': {
		fullName: 'Arrow down',
		originalName: 'arrow_downward',
		d: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z',
		source: 'https://material.io/resources/icons/?icon=arrow_downward&style=baseline',
		viewBox,
	},
	'arrow-left': {
		fullName: 'Arrow left',
		originalName: 'arrow_back',
		d: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
		source: 'https://material.io/resources/icons/?icon=arrow_back&style=baseline',
		viewBox,
	},
	calendar: {
		fullName: 'Calendar',
		originalName: 'event',
		d: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z',
		source: 'https://material.io/resources/icons/?icon=event&style=baseline',
		viewBox,
	},
	cancel: {
		fullName: 'Cancel',
		d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z',
		originalName: 'cancel',
		source: 'https://material.io/resources/icons/?icon=cancel&style=baseline',
		viewBox,
	},
	'caret-up': {
		fullName: 'Caret up',
		d: 'M12 8.015l3.492 3.992 3.486 3.983H5.022l3.485-3.983L12 8.015z',
		viewBox,
	},
	'caret-right': {
		fullName: 'Caret right',
		d: 'M15.985 12l-3.992 3.492-3.983 3.486V5.022l3.983 3.485L15.985 12z',
		viewBox,
	},
	'caret-down': {
		fullName: 'Caret down',
		d: 'M12 15.985l-3.492-3.992L5.022 8.01h13.956l-3.485 3.983L12 15.985z',
		viewBox,
	},
	'caret-left': {
		fullName: 'Caret left',
		d: 'M8.015 12l3.992-3.492 3.983-3.486v13.956l-3.983-3.485L8.015 12z',
		viewBox,
	},
	check: {
		fullName: 'Check',
		d: 'M7.242 16.887l-4.24-4.245 2.12-2.121 4.243 4.245 9.513-9.516 2.124 2.121L9.363 19.007z',
		viewBox,
	},
	'check-circle': {
		fullName: 'Check circle',
		originalName: 'check_circle',
		d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
		source: 'https://material.io/resources/icons/?icon=check_circle&style=baseline',
		viewBox,
	},
	'chevron-up': {
		fullName: 'Chevron up',
		originalName: 'expand_less',
		d: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z',
		source: 'https://material.io/resources/icons/?icon=expand_less&style=baseline',
		viewBox,
	},
	'chevron-right': {
		fullName: 'Chevron right',
		originalName: 'chevron_right',
		d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
		source: 'https://material.io/resources/icons/?icon=chevron_right&style=baseline',
		viewBox,
	},
	'chevron-down': {
		fullName: 'Chevron down',
		originalName: 'expand_more',
		d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z',
		source: 'https://material.io/resources/icons/?icon=expand_more&style=baseline',
		viewBox,
	},
	'chevron-left': {
		fullName: 'Chevron left',
		originalName: 'chevron_left',
		d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z',
		source: 'https://material.io/resources/icons/?icon=chevron_left&style=baseline',
		viewBox,
	},
	close: {
		fullName: 'Close',
		d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
		source: 'https://material.io/resources/icons/?icon=close&style=baseline',
		viewBox,
	},
	delete: {
		fullName: 'Delete',
		d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
		source: 'https://material.io/resources/icons/?icon=delete&style=baseline',
		viewBox,
	},
	download: {
		fullName: 'Download',
		originalName: 'get_app',
		d: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
		source: 'https://material.io/resources/icons/?icon=get_app&style=baseline',
		viewBox,
	},
	edit: {
		fullName: 'Edit',
		originalName: 'edit',
		d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
		source: 'https://material.io/resources/icons/?icon=edit&style=baseline',
		viewBox,
	},
	exclamation: {
		fullName: 'Exclamation',
		d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
		originalName: 'error',
		source: 'https://material.io/resources/icons/?icon=error&style=baseline',
		viewBox,
	},
	flag: {
		fullName: 'Flag',
		d: 'M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z',
		source: 'https://material.io/resources/icons/?icon=flag&style=baseline',
		viewBox,
	},
	heart: {
		fullName: 'Heart',
		originalName: 'favorite',
		d: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
		source: 'https://material.io/resources/icons/?icon=favorite&style=baseline',
		viewBox,
	},
	'heart-outline': {
		fullName: 'Heart outline',
		originalName: 'favorite_border',
		d: 'M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z',
		source: 'https://material.io/resources/icons/?icon=favorite_border&style=baseline',
		viewBox,
	},
	info: {
		fullName: 'Info',
		d: 'M12 22a10 10 0 1110-10 10.016 10.016 0 01-10 10zm1.127-12.146a5.306 5.306 0 00-.678.049c-.279.035-.531.074-.77.119s-.459.088-.736.156a4.81 4.81 0 00-.557.174v.477l.859.2-.947 4.309-.006.025c-.033.178-.072.381-.1.559a3.757 3.757 0 00-.043.543.637.637 0 00.2.438 1 1 0 00.73.2 3.036 3.036 0 00.531-.049 4.068 4.068 0 00.547-.135 3.4 3.4 0 00.516-.2 3.323 3.323 0 00.428-.238v-.486h-.975l1.252-5.975-.25-.162zM12.889 6.1a1.237 1.237 0 00-.809.266.91.91 0 00-.318.736.869.869 0 00.318.709 1.208 1.208 0 00.809.266 1.242 1.242 0 00.844-.266.879.879 0 00.309-.709.91.91 0 00-.309-.736 1.287 1.287 0 00-.842-.266z',
		viewBox,
	},
	launch: {
		fullName: 'Launch',
		d: 'M16 14h2v5a2.006 2.006 0 01-2 2H5a2.006 2.006 0 01-2-2V8a2.006 2.006 0 012-2h5v2H5v11h11zM14 3v2h3.586l-9.293 9.293 1.414 1.414L19 6.414V10h2V3z',
		viewBox,
	},
	list: {
		fullName: 'List',
		d: 'M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z',
		source: 'https://material.io/resources/icons/?icon=list&style=baseline',
		viewBox,
	},
	menu: {
		fullName: 'Menu',
		d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
		source: 'https://material.io/resources/icons/?icon=menu&style=baseline',
		viewBox,
	},
	minus: {
		fullName: 'Minus',
		d: 'M2.875 10.375h18v3h-18z',
		viewBox,
	},
	'minus-circle': {
		fullName: 'Minus circle',
		originalName: 'remove_circle',
		d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z',
		source: 'https://material.io/resources/icons/?icon=remove_circle&style=baseline',
		viewBox,
	},
	'more-horizontal': {
		fullName: 'More horizontal',
		originalName: 'more_horiz',	// cspell:disable-line
		d: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
		source: 'https://material.io/resources/icons/?icon=more_horiz&style=baseline',
		viewBox,
	},
	'more-vertical': {
		fullName: 'More vertical',
		originalName: 'more_vert',
		d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
		source: 'https://material.io/resources/icons/?icon=more_vert&style=baseline',
		viewBox,
	},
	plus: {
		fullName: 'Plus',
		originalName: 'add',
		d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
		source: 'https://material.io/resources/icons/?icon=add&style=baseline',
		viewBox,
	},
	'plus-circle': {
		fullName: 'Plus circle',
		originalName: 'add_circle',
		d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
		source: 'https://material.io/resources/icons/?icon=add_circle&style=baseline',
		viewBox,
	},
	print: {
		fullName: 'Print',
		d: 'M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z',
		source: 'https://material.io/resources/icons/?icon=print&style=baseline',
		viewBox,
	},
	save: {
		fullName: 'Save',
		d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z',
		source: 'https://material.io/resources/icons/?icon=save&style=baseline',
		viewBox,
	},
	search: {
		fullName: 'Search',
		d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
		source: 'https://material.io/resources/icons/?icon=search&style=baseline',
		viewBox,
	},
	settings: {
		fullName: 'Settings',
		d: 'M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z',
		source: 'https://material.io/resources/icons/?icon=settings&style=baseline',
		viewBox,
	},
	star: {
		fullName: 'Star',
		d: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
		source: 'https://material.io/resources/icons/?icon=star&style=baseline',
		viewBox,
	},
	'star-outline': {
		fullName: 'Star outline',
		originalName: 'star_border',
		d: 'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z',
		source: 'https://material.io/resources/icons/?icon=star_border&style=baseline',
		viewBox,
	},
	'subdirectory-left': {
		fullName: 'Subdirectory left',
		originalName: 'subdirectory_arrow_left',
		d: 'M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z',
		source: 'https://material.io/resources/icons/?icon=subdirectory_arrow_left&style=baseline',
		viewBox,
	},
	'subdirectory-right': {
		fullName: 'Subdirectory right',
		originalName: 'subdirectory_arrow_right',
		d: 'M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z',
		source: 'https://material.io/resources/icons/?icon=subdirectory_arrow_right&style=baseline',
		viewBox,
	},
	warning: {
		fullName: 'Warning',
		d: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
		source: 'https://material.io/resources/icons/?icon=warning&style=baseline',
		viewBox,
	},
};

export const IconOptions: Record<string, IconVariant> = {};
(Object.keys(icons) as IconVariant[]).forEach((name) => {
	const { fullName } = icons[name];
	if (fullName) IconOptions[fullName] = name;
});

/**
 * Retrieve an SVGIcon object, which contains the path's `d` & `viewBox` needed
 * to set the SVG.
 */
export const findIcon = (name?: IconVariant): SVGIcon | undefined => {
	if (name) return icons[name];
	return undefined;
};
