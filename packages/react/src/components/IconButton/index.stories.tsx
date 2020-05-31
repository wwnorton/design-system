import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	text,
	boolean,
} from '@storybook/addon-knobs';
import './index.stories.scss';
import { IconButton } from '.';

export default {
	title: 'IconButton',
	component: IconButton,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => (
	<IconButton
		onClick={action('onClick')}
		disabled={boolean('Disabled', false)}
		icon="close"
	>
		{ text('Text', 'Close') }
	</IconButton>
);
