import * as React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	boolean,
	text,
} from '@storybook/addon-knobs';
import Checkbox from '.';

export default {
	title: 'Checkbox',
	component: Checkbox,
	decorators: [withKnobs],
};

const { defaultProps } = Checkbox;

export const CheckboxDefault = (): JSX.Element => (
	<Checkbox
		label={text('Label', 'Checkbox')}
		disabled={boolean('Disabled', false)}
		help={text('Help', 'Help Text')}
		error={text('Error', 'This must be selected in order to proceed.')}
		required={boolean('Required', false)}
		validateOnChange={boolean('Validate on change', defaultProps.validateOnChange)}
		onValidate={action('onValidate')}
	/>
);
