import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@nds/core/src/components/switch/index.scss';
import Switch from '.';

export default {
	title: 'Switch',
	component: Switch,
	decorators: [withKnobs],
};

export const Default = (): JSX.Element => (
	<Switch
		onToggle={action('onToggle')}
		textualState={boolean('Textual state', true)}
		disabled={boolean('Disabled', false)}
	>
		Switch
	</Switch>
);

export const on = (): JSX.Element => (
	<Switch
		onToggle={action('onToggle')}
		textualState={boolean('Textual state', true)}
		disabled={boolean('Disabled', false)}
		on
	>
		Switch
	</Switch>
);
