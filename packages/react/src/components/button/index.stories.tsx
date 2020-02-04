import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import '@nds/core/src/components/button/index.scss';
import { Button, ButtonVariant } from '.';

export default {
	title: 'Button',
	component: Button,
	decorators: [withKnobs],
};

const variantOptions = {
	Solid: 'solid',
	Outline: 'outline',
	Ghost: 'ghost',
	None: undefined,
};

export const Default = (): JSX.Element => (
	<Button
		onClick={action('onClick')}
		variant={select('Variant', variantOptions, 'solid') as ButtonVariant}
		disabled={boolean('Disabled', false)}
	>
		Button
	</Button>
);
