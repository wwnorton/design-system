import React from 'react';
import {
	withKnobs,
	number,
	select,
	text,
} from '@storybook/addon-knobs';
import '@nds/core/src/components/disclosure/index.scss';
import Icon, { IconProps } from '.';

export default {
	title: 'Icon',
	component: Icon,
	decorators: [withKnobs],
};

const IconOptions: Record<string, IconProps['variant']> = {
	'Caret right': 'caret-right',
	'Chevron down': 'chevron-down',
	Close: 'close',
	Check: 'check',
};

export const Default = (): JSX.Element => (
	<Icon
		variant={select<IconProps['variant']>('Icon', IconOptions, 'caret-right')}
		label={text('Label', '')}
		width={number('Width', 48)}
	/>
);
