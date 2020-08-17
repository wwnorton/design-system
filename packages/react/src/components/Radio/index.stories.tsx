import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	boolean,
	text,
} from '@storybook/addon-knobs';
import './index.stories.scss';
import { Radio, RadioGroup as RadioGroupComp } from '.';
import { Choices } from '../ChoiceField';
import { useSelect } from '../../hooks';

export default {
	title: 'Radio',
	component: Radio,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => (
	<Radio
		description={text('Description', 'Additional information about this radio.')}
		disabled={boolean('Disabled', false)}
	>
		{ text('Label', 'Radio') }
	</Radio>
);

export const WithThumbnail: React.FunctionComponent = () => (
	<Radio
		description={(
			<>
				This radio includes a clickable thumbnail from
				{' '}
				<a
					href="https://picsum.photos"
					target="_blank"
					rel="noopener noreferrer"
				>
					https://picsum.photos
				</a>
			</>
		)}
		disabled={boolean('Disabled', false)}
		thumbnail={<img src={text('Thumbnail Source', 'https://picsum.photos/64')} alt="" />}
	>
		{ text('Label', 'Radio') }
	</Radio>
);

export const RadioGroup: React.FunctionComponent = () => (
	<RadioGroupComp label="Choose your favorite fruit" name="fruit">
		<Radio>Apple</Radio>
		<Radio>Banana</Radio>
		<Radio>Kiwi</Radio>
		<Radio>Orange</Radio>
	</RadioGroupComp>
);

export const ControlledRadioGroup: React.FunctionComponent = () => {
	const choices = ['Apple', 'Banana', 'Kiwi', 'Orange'];
	const { selected, onChange } = useSelect({ selected: 'Kiwi', multiple: false });

	React.useEffect(() => action('selection change')(selected), [selected]);

	return (
		<RadioGroupComp
			label="Choose your favorite fruit"
			name="fruit"
		>
			<Choices choices={choices} selected={selected} onChange={onChange} />
		</RadioGroupComp>
	);
};
