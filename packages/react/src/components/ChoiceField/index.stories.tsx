import React from 'react';
import {
	withKnobs, boolean, text,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import {
	ChoiceField, Choice, Choices,
} from '.';
import { useSelect } from '../../utilities';

export default {
	title: 'ChoiceField',
	component: ChoiceField,
	decorators: [withKnobs],
};

const prompt = 'Which of the following is a vegetable?';
const defaultCorrect = 'Green Bean';
const defaultChoices = ['Apple', 'Banana', defaultCorrect, 'Tomato'];

export const Default: React.FunctionComponent = () => (
	<ChoiceField
		label={text('Prompt', prompt)}
		description={text('Description', 'Descriptive text about this item.')}
		multiple={boolean('Multiselect', true)}
	>
		<ChoiceField.Choice value="apple">Apple</ChoiceField.Choice>
		<Choice>Banana</Choice>
		<ChoiceField.Choice checked value="green-bean">Green Bean</ChoiceField.Choice>
		<ChoiceField.Choice value="Tomato" />
	</ChoiceField>
);

export const WithChoices: React.FunctionComponent = () => (
	<ChoiceField
		label={text('Prompt', prompt)}
		description={text('Description', 'Descriptive text about this item.')}
		multiple={boolean('Multiselect', true)}
	>
		<Choices choices={defaultChoices} selected="Banana" />
	</ChoiceField>
);

export const ControlledRadio: React.FunctionComponent = () => {
	const { changeHandler, selected } = useSelect();

	React.useEffect(() => action('selection change')(selected), [selected]);

	return (
		<ChoiceField
			label={text('Prompt', prompt)}
			description={text('Description', 'Descriptive text about this item.')}
			onChange={changeHandler}
		>
			{/* manually map a list to Choice elements */}
			{
				[
					{ value: 'apple', children: 'Apple' },
					{ value: 'banana', children: 'Banana' },
					{ value: 'green-bean', children: 'Green Bean' },
					{ value: 'tomato', children: 'Tomato' },
				].map(({ value, ...props }) => (
					<Choice
						checked={selected.includes(value)}
						value={value}
						name="fruit"
						key={value}
						{...props}
					/>
				))
			}
		</ChoiceField>
	);
};

export const ControlledCheckbox: React.FunctionComponent = () => {
	const { changeHandler, selected } = useSelect({ multiple: true });

	React.useEffect(() => action('selection change')(selected), [selected]);

	return (
		<ChoiceField
			label={text('Prompt', prompt)}
			description={text('Description', 'Descriptive text about this item.')}
			multiple
		>
			{/* use the Choices utility component to map a list of choices */}
			<Choices
				choices={defaultChoices}
				selected={selected}
				onChange={changeHandler}
			/>
		</ChoiceField>
	);
};

export const ChoiceList: React.FunctionComponent = () => (
	<Choices
		choices={defaultChoices}
		selected={text('Initially selected', 'Tomato')}
		multiple={boolean('Multiselect', true)}
		name="choices"
	/>
);
