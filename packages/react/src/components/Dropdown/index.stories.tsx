import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import './index.stories.scss';
import { Button } from '../Button';
import { Dropdown } from '.';

export default {
	title: 'Dropdown',
	component: Dropdown,
	decorators: [withKnobs],
};

const options = [
	'Americium',
	'Berkelium',
	'Bohrium',
	'Californium',
	'Copernicium',
	'Curium',
	'Darmstadtium',
	'Dubnium',
	'Einsteinium',
	'Fermium',
	'Flerovium',
	'Hassium',
	'Lawrencium',
	'Livermorium',
	'Meitnerium',
	'Mendelevium',
	'Moscovium',
	'Neptunium',
	'Nihonium',
	'Nobelium',
	'Oganesson',
	'Plutonium',
	'Roentgenium',
	'Rutherfordium',
	'Seaborgium',
	'Tennessine',
];

export const Default: React.FunctionComponent = () => (
	<Dropdown
		label="Choose an element"
		options={options}
	/>
);

export const FlippingPlacement: React.FunctionComponent = () => (
	<div className="scrollbox">
		<Dropdown
			label="Choose an element"
			options={options}
		/>
	</div>
);

export const LiftedState: React.FunctionComponent = () => {
	const [selected, setSelected] = React.useState<React.ReactText>('Select');
	const select = (value: React.ReactText): void => {
		setSelected(value);
		action('onRequestSelect')(value);
	};
	const submit = (e: React.FormEvent<HTMLFormElement>): void => {
		action('onSubmit')(selected);
		e.preventDefault();
	};
	return (
		<form onSubmit={submit}>
			<Dropdown
				label="Choose an element"
				options={options}
				selected={selected}
				isOpen={boolean('Open', false)}
				onRequestSelect={select}
			/>
			<Button type="submit" variant="solid">Submit</Button>
		</form>
	);
};
