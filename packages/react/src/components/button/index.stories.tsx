import * as React from 'react';
// import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { BaseButton, ToggleButton } from '.';
import '@nds/core/src/components/button/index.scss';
import { ButtonVariant } from './BaseButton';

export default {
	title: 'Button',
	component: BaseButton,
	decorators: [withKnobs],
};

const variantOptions = {
	Primary: 'primary',
	Secondary: 'secondary',
	Tertiary: 'tertiary',
	None: undefined,
};

export const variantButton = (): JSX.Element => (
	<BaseButton variant={select('Variant', variantOptions, 'primary') as ButtonVariant} onClick={action('clicked')}>Variant Button</BaseButton>
);

export const toggleButton = (): JSX.Element => (
	<ToggleButton initiallyOn={boolean('Initially on', false)} onToggle={action('toggled')}>Toggle Button</ToggleButton>
);
