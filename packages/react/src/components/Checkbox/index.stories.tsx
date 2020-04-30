import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	boolean,
	text,
} from '@storybook/addon-knobs';
import './index.stories.scss';
import Checkbox from '.';

export default {
	title: 'Checkbox',
	component: Checkbox,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => (
	<Checkbox
		label={text('Label', 'Checkbox')}
		help={text('Help', 'Additional information about this checkbox.')}
		disabled={boolean('Disabled', false)}
		required={boolean('Required', false)}
		onValidate={action('onValidate')}
	/>
);

export const Indeterminate: React.FunctionComponent = () => (
	<Checkbox
		label={text('Label', 'Checkbox')}
		help={text('Help', 'This checkbox starts out in the indeterminate/mixed state.')}
		indeterminate
		disabled={boolean('Disabled', false)}
		required={boolean('Required', false)}
	/>
);

export const WithThumbnail: React.FunctionComponent = () => (
	<Checkbox
		label={text('Label', 'Checkbox')}
		help={text('Help', 'Additional information about this checkbox.')}
		disabled={boolean('Disabled', false)}
		required={boolean('Required', false)}
		onValidate={action('onValidate')}
		thumbnail={<img src={text('Thumbnail Source', 'https://picsum.photos/64')} alt="" />}
	/>
);
