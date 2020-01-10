import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import '@nds/core/src/components/button/index.scss';
import { Button, ButtonVariant, ToggleButton } from '.';
// import { ButtonVariant } from './BaseButton';

export default {
	title: 'Button',
	component: Button,
	decorators: [withKnobs],
};

const variantOptions = {
	Primary: 'primary',
	Secondary: 'secondary',
	Tertiary: 'tertiary',
	None: undefined,
};

export const Default = (): JSX.Element => (
	<Button
		onClick={action('onClick')}
		variant={select('Variant', variantOptions, 'primary') as ButtonVariant}
		disabled={boolean('Disabled', false)}
	>
		Button
	</Button>
);

export const toggleButton = (): JSX.Element => (
	<ToggleButton
		onToggle={action('onToggle')}
		on={boolean('On', true)}
		textualState={boolean('Textual state', true)}
		disabled={boolean('Disabled', false)}
	>
		Toggle Button
	</ToggleButton>
);
