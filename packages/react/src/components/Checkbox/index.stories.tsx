import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	boolean,
	text,
} from '@storybook/addon-knobs';
import '@nds/core/src/components/checkbox/index.scss';
import Checkbox from '.';

export default {
	title: 'Checkbox',
	component: Checkbox,
	decorators: [withKnobs],
};

export const Default = (): JSX.Element => (
	<Checkbox
		label={text('Label', 'Checkbox')}
		help={text('Help', 'Additional information about this checkbox.')}
		disabled={boolean('Disabled', false)}
		required={boolean('Required', false)}
		onValidate={action('onValidate')}
	/>
);

export const Indeterminate = (): JSX.Element => (
	<Checkbox
		label={text('Label', 'Checkbox')}
		help={text('Help', 'This checkbox starts out in the indeterminate/mixed state.')}
		indeterminate
		disabled={boolean('Disabled', false)}
		required={boolean('Required', false)}
	/>
);

export const WithThumbnail = (): JSX.Element => (
	<Checkbox
		label={text('Label', 'Checkbox')}
		help={text('Help', 'Additional information about this checkbox.')}
		disabled={boolean('Disabled', false)}
		required={boolean('Required', false)}
		onValidate={action('onValidate')}
		thumbnail={<img src={text('Thumbnail Source', 'https://picsum.photos/64')} alt="" />}
	/>
);
