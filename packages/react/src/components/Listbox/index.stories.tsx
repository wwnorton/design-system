import React from 'react';
import { Meta } from '@storybook/react';
import {
	withKnobs, boolean, optionsKnob as options,
} from '@storybook/addon-knobs';
import { Listbox, Option } from '.';
import { Icon } from '..';
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
		<Option value="dog">🐶 Dog</Option>
		<Option value="cat">🐱 Cat</Option>
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
	);
};

type MarkerProps = { checked: boolean };
const Marker: React.FC<MarkerProps> = ({ checked }: MarkerProps) => {
	if (checked) {
		return (
			<Icon
				// https://fonts.google.com/icons?selected=Material%20Icons%3Atoggle_on
				icon={{ d: 'M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z' }}
				style={{ color: 'var(--nds-primary-color)' }}
			/>
		);
	}
	return (
		<Icon
			// https://fonts.google.com/icons?selected=Material%20Icons%3Atoggle_off
			icon={{ d: 'M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z' }}
			style={{ color: 'var(--nds-subdued-color)' }}
		/>
	);
};

export const CustomMarker = (): JSX.Element => {
	const multiselectable = boolean('Multiselectable', true);
	const { selected, toggle } = useSelect(multiselectable);

	const optionRender = React.useCallback((i) => ({
		marker: (
			<span className="nds-option__marker">
				<Marker checked={selected.includes(Object.values(defaultOptions)[i])} />
			</span>
		),
	}), [selected]);

	return (
		<Listbox
			aria-label="Pets (Disabled options story)"
			orientation={options('Orientation', { Unset: undefined, Vertical: 'vertical', Horizontal: 'horizontal' }, undefined, { display: 'inline-radio' })}
			multiselectable={multiselectable}
			focusWrap={boolean('Focus wrap', false)}
			selected={selected}
			onChange={({ value }) => toggle(value)}
			options={defaultOptions}
			optionProps={optionRender}
		/>
	);
};
