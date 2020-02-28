import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	number,
	select,
	text,
	boolean,
} from '@storybook/addon-knobs';
import '@nds/core/src/components/icon/index.scss';
import Icon, { IconProps } from '.';
import IconButton from '../IconButton';

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
		height={number('Height', 48)}
	/>
);

export const iconButton = (): JSX.Element => (
	<IconButton
		onClick={action('onClick')}
		disabled={boolean('Disabled', false)}
		icon="close"
	>
		{ text('Text', 'Close') }
	</IconButton>
);
