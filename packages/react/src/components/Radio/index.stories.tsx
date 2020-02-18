import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	boolean,
	text,
} from '@storybook/addon-knobs';
import '@nds/core/src/components/radio/index.scss';
import Radio from '.';

export default {
	title: 'Radio',
	component: Radio,
	decorators: [withKnobs],
};

export const Default = (): JSX.Element => (
	<Radio
		label={text('Label', 'Radio')}
		help={text('Help', 'Additional information about this radio.')}
		disabled={boolean('Disabled', false)}
		onChange={action('onChange')}
	/>
);

export const WithThumbnail = (): JSX.Element => (
	<Radio
		label={text('Label', 'Radio')}
		help={text('Help', 'Additional information about this radio.')}
		disabled={boolean('Disabled', false)}
		onChange={action('onChange')}
		thumbnail={<img src={text('Thumbnail Source', 'https://picsum.photos/64')} alt="" />}
	/>
);
