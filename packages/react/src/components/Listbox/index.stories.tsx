import React from 'react';
import { Meta } from '@storybook/react';
import {
	withKnobs, boolean, optionsKnob as options,
} from '@storybook/addon-knobs';
import { Listbox, Option } from '.';
import { useSelect } from '../../utilities';

export default {
	title: 'Listbox',
	component: Listbox,
	decorators: [withKnobs],
} as Meta;

const defaultOptions = {
	Dog: 'dog',
	Cat: 'cat',
	Hamster: 'hamster',
	Parrot: 'parrot',
	Spider: 'spider',
	Fish: 'fish',
};

export const Default = (): JSX.Element => (
	<Listbox
		aria-label="Pets (Default story)"
		orientation={options('Orientation', { Unset: undefined, Vertical: 'vertical', Horizontal: 'horizontal' }, undefined, { display: 'inline-radio' })}
		multiselectable={boolean('Multiselectable', false)}
		focusWrap={boolean('Focus wrap', false)}
	>
		<Option value="dog" selected>🐶 Dog</Option>
		<Option value="cat" selected>🐱 Cat</Option>
		<Option value="hamster">🐹 Hamster</Option>
		{/* label is rendered when children aren't provided. */}
		<Option value="parrot" label="🦜 Parrot" />
		{/* label is preferred over children if both are provided. */}
		<Option value="spider" label="🕷️ Spider">🕷️</Option>
		{/* if neither label nor children are provided, the value is rendered. */}
		<Option value="🐠 Fish" />
	</Listbox>
);

export const DisabledOptions = (): JSX.Element => {
	const disabled = options('Disabled', defaultOptions, ['dog', 'cat', 'spider'], { display: 'inline-check' });
	const multiselectable = boolean('Multiselectable', false);
	const { selected, toggle } = useSelect(multiselectable);

	return (
		<>
			<button type="button">Focus me</button>
			<Listbox
				aria-label="Pets (Disabled options story)"
				orientation={options('Orientation', { Unset: undefined, Vertical: 'vertical', Horizontal: 'horizontal' }, undefined, { display: 'inline-radio' })}
				multiselectable={multiselectable}
				focusWrap={boolean('Focus wrap', false)}
				selected={selected}
				onChange={({ value }) => toggle(value)}
				options={defaultOptions}
				optionProps={(i) => ({
					disabled: disabled.includes(Object.values(defaultOptions)[i]),
				})}
			/>
		</>
	);
};

export const OptionsList = (): JSX.Element => (
	<Listbox
		aria-label="Pets (Default story)"
		orientation={options('Orientation', { Unset: undefined, Vertical: 'vertical', Horizontal: 'horizontal' }, undefined, { display: 'inline-radio' })}
		multiselectable={boolean('Multiselectable', false)}
		focusWrap={boolean('Focus wrap', false)}
		options={['Dog', 'Cat', 'Hamster', 'Parrot', 'Spider', 'Fish']}
	/>
);
