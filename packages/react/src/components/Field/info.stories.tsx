import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { FieldInfo } from '.';

export default {
	title: 'FieldInfo',
	component: FieldInfo,
	decorators: [withKnobs],
};

export const Info: React.FunctionComponent = () => (
	<FieldInfo
		label={text('Label', 'Field label')}
		description={text('Description', 'Additional information about this field')}
		indicator={text('Indicator', 'required')}
	/>
);
