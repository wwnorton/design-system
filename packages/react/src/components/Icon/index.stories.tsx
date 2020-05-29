import React from 'react';
import {
	withKnobs,
	number,
	select,
	text,
} from '@storybook/addon-knobs';
import './index.stories.scss';
import Icon, { IconProps } from '.';

export default {
	title: 'Icon',
	component: Icon,
	decorators: [withKnobs],
};

const IconOptions: Record<string, IconProps['variant']> = {
	Account: 'account',
	'Arrow down': 'arrow-down',
	'Arrow left': 'arrow-left',
	'Arrow right': 'arrow-right',
	Calendar: 'calendar',
	Cancel: 'cancel',
	'Caret down': 'caret-down',
	'Caret right': 'caret-right',
	Check: 'check',
	'Check circle': 'check-circle',
	'Chevron down': 'chevron-down',
	'Chevron right': 'chevron-right',
	Close: 'close',
	Delete: 'delete',
	Download: 'download',
	Edit: 'edit',
	Exclamation: 'exclamation',
	Favorite: 'favorite',
	'Favorite outline': 'favorite-outline',
	Flag: 'flag',
	Info: 'info',
	Launch: 'launch',
	Menu: 'menu',
	Minus: 'minus',
	'Minus circle': 'minus-circle',
	'More horizontal': 'more-horizontal',
	'More vertical': 'more-vertical',
	Plus: 'plus',
	'Plus circle': 'plus-circle',
	Print: 'print',
	Save: 'save',
	Search: 'search',
	Settings: 'settings',
	Star: 'star',
	'Star outline': 'star-outline',
};

export const Default: React.FunctionComponent = () => (
	<Icon
		variant={select<IconProps['variant']>('Icon', IconOptions, 'caret-right')}
		label={text('Label', '')}
		height={number('Height', 48)}
	/>
);
