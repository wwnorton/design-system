import * as React from 'react';
// import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import '@nds/core/src/components/button/index.scss';
import { BaseButton, ToggleButton } from '.';
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
	<BaseButton
		onClick={action('onClick')}
		kind={select('Kind', kindOptions, 'primary') as ButtonKind}
		disabled={boolean('Disabled', false)}
	>
		Button
	</BaseButton>
);

export const toggleButton = (): JSX.Element => (
	<ToggleButton
		onToggle={action('onToggle')}
		initiallyOn={boolean('Initially on', false)}
		disabled={boolean('Disabled', false)}
	>
		Toggle Button
	</ToggleButton>
);
