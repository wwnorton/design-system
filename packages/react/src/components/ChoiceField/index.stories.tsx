import React from 'react';
import {
	withKnobs, boolean, text,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import {
	ChoiceField, Choice, Choices,
} from '.';
import { Button } from '../Button';
import { useSelect } from '../../hooks';

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

export const ControlledWithUseChoices: React.FunctionComponent = () => {
	const multiple = boolean('Multiselect', true);
	const { selected, onChange } = useSelect({
		selected: 'Tomato',
		multiple,
	});

	React.useEffect(() => action('selectionChange')(selected), [selected]);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		// do something in addition to the onChange callback
		onChange(e);
	};

	const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
		action('onSubmit')(selected);
		e.preventDefault();
	};

	return (
		<form className="form" onSubmit={submitHandler}>
			<ChoiceField
				label={text('Prompt', prompt)}
				description={text('Description', 'Descriptive text about this item.')}
				multiple={multiple}
			>
				<Choices choices={defaultChoices} selected={selected} onChange={changeHandler} />
			</ChoiceField>
			<Button type="submit" variant="solid">Submit</Button>
		</form>
	);
};

export const ChoiceList: React.FunctionComponent = () => (
	<Choices
		choices={defaultChoices}
		selected={text('Initially selected', 'Tomato')}
		multiple={boolean('Multiselect', true)}
	/>
);
