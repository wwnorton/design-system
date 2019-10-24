import * as React from 'react';
// import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { BaseButton, ToggleButton } from '.';
import '@nds/core/src/components/button/index.scss';
import { ButtonKind } from './BaseButton';

export default {
	title: 'Button',
	component: BaseButton,
	decorators: [withKnobs],
};

const kindOptions = {
	Primary: 'primary',
	Secondary: 'secondary',
	Tertiary: 'tertiary',
	None: undefined,
};

export const button = (): JSX.Element => (
	<BaseButton kind={select('Kind', kindOptions, 'primary') as ButtonKind} onClick={action('onClick')}>Button</BaseButton>
);

export const toggleButton = (): JSX.Element => (
	<ToggleButton initiallyOn={boolean('Initially on', false)} onToggle={action('onToggle')}>Toggle Button</ToggleButton>
);
