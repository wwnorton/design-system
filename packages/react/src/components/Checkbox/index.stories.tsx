import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	boolean,
	text,
} from '@storybook/addon-knobs';
import './index.stories.scss';
import { Checkbox } from '.';
import { Button } from '../Button';

export default {
	title: 'Checkbox',
	component: Checkbox,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => (
	<Checkbox
		label={text('Label', 'Checkbox')}
		description={text('Description', 'Additional information about this checkbox.')}
		disabled={boolean('Disabled', false)}
		required={boolean('Required', false)}
		onValidate={action('onValidate')}
		indeterminate={boolean('Indeterminate', false)}
	/>
);

export const Indeterminate: React.FunctionComponent = () => (
	<Checkbox
		label={text('Label', 'Checkbox')}
		description={text('Description', 'This checkbox starts out in the indeterminate/mixed state.')}
		indeterminate
		disabled={boolean('Disabled', false)}
		required={boolean('Required', false)}
	/>
);

export const WithThumbnail: React.FunctionComponent = () => (
	<Checkbox
		label={text('Label', 'Checkbox')}
		description={text('Description', 'Additional information about this checkbox.')}
		disabled={boolean('Disabled', false)}
		required={boolean('Required', false)}
		onValidate={action('onValidate')}
		thumbnail={<img src={text('Thumbnail Source', 'https://picsum.photos/64')} alt="" />}
	/>
);

export const SingleCheckboxRequiredForm: React.FunctionComponent = () => (
	<form className="form" onSubmit={(e): void => { e.preventDefault(); }}>
		<Checkbox
			label='Agree'
			description='I have read the terms and conditions.'
			required
		/>
		<Button variant="solid" type="submit">Submit</Button>
	</form>
);
