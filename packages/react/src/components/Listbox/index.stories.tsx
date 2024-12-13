import React from 'react';
import { Listbox, ListboxProps, Option } from '.';
import { Icon } from '..';
import { useSelect } from '../../utilities';

type OptionValues = 'dog' | 'cat' | 'hamster' | 'parrot' | 'spider' | 'fish';

const defaultOptions: Record<Capitalize<OptionValues>, OptionValues> = {
	Dog: 'dog',
	Cat: 'cat',
	Hamster: 'hamster',
	Parrot: 'parrot',
	Spider: 'spider',
	Fish: 'fish',
};

const optionValues = Object.values(defaultOptions);

export default {
	title: 'Listbox',
	component: Listbox,
	argTypes: {
		disabled: {
			control: {
				type: 'inline-check',
				options: Object.values(defaultOptions),
			},
		},
		multiselectable: { control: { type: 'boolean' } },
	},
};

export const Default = (args: ListboxProps) => (
	<Listbox {...args}>
		<Option value="dog">🐶 Dog</Option>
		<Option value="cat">🐱 Cat</Option>
		<Option value="hamster">🐹 Hamster</Option>
		{/* label is rendered when children aren't provided. */}
		<Option value="parrot" label="🦜 Parrot" />
		{/* label is preferred over children if both are provided. */}
		<Option value="spider" label="🕷️ Spider">
			🕷️
		</Option>
		{/* if neither label nor children are provided, the value is rendered. */}
		<Option value="🐠 Fish" />
	</Listbox>
);
Default.args = {
	'aria-label': 'Pets (Default story)',
	multiselectable: false,
	focusWrap: false,
};

type WithDisabledOptions = ListboxProps & { disabled: OptionValues[] };

export const DisabledOptions = ({ disabled, multiselectable, ...args }: WithDisabledOptions) => {
	const { selected, toggle } = useSelect(multiselectable);

	return (
		<Listbox
			multiselectable={multiselectable}
			selected={selected}
			onChange={({ value }) => toggle(value)}
			options={defaultOptions}
			optionProps={(i) => ({
				disabled: disabled.includes(optionValues[i]),
			})}
			{...args}
		/>
	);
};
DisabledOptions.args = {
	'aria-label': 'Pets (Disabled options story)',
	disabled: ['dog', 'cat', 'spider'],
	multiselectable: false,
};

type MarkerProps = { checked: boolean };
const Marker = ({ checked }: MarkerProps) => {
	if (checked) {
		return (
			<Icon
				// https://fonts.google.com/icons?selected=Material%20Icons%3Atoggle_on
				icon={{
					d: 'M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z',
				}}
				style={{ color: 'var(--nds-primary-color)' }}
			/>
		);
	}
	return (
		<Icon
			// https://fonts.google.com/icons?selected=Material%20Icons%3Atoggle_off
			icon={{
				d: 'M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z',
			}}
			style={{ color: 'var(--nds-subdued-color)' }}
		/>
	);
};

export const CustomMarker = ({ multiselectable, ...args }: ListboxProps) => {
	const { selected, toggle } = useSelect(multiselectable);

	const optionRender = React.useCallback(
		(i) => ({
			marker: (
				<span className="nds-option__marker">
					<Marker checked={selected.includes(optionValues[i])} />
				</span>
			),
		}),
		[selected],
	);

	return (
		<Listbox
			multiselectable={multiselectable}
			selected={selected}
			onChange={({ value }) => toggle(value)}
			options={defaultOptions}
			optionProps={optionRender}
			{...args}
		/>
	);
};
CustomMarker.args = {
	'aria-label': 'Pets (Custom marker story)',
	multiselectable: false,
};
