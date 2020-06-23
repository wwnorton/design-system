import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { Button } from '../Button';
import { OnChangeData } from '../BaseListbox';
import { Dropdown, DropdownProps } from '.';
import './index.stories.scss';

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

const sortOptions: Record<string, DropdownProps['sort']> = {
	None: undefined,
	Ascending: 'ascending',
	Descending: 'descending',
};

export const Default: React.FunctionComponent = () => (
	<Dropdown
		label="Choose an element"
		sort={select('Sort', sortOptions, undefined)}
		disabled={boolean('Disabled', false)}
	>
		{ options }
	</Dropdown>
);

export const MatchListboxWidth: React.FunctionComponent = () => (
	<Dropdown label="Choose an element" matchWidth="listbox">
		{ options }
	</Dropdown>
);

export const MatchButtonWidth: React.FunctionComponent = () => (
	<Dropdown
		label="Choose an element"
		matchWidth="button"
		buttonClass="dropdown__button fixed-width"
	>
		{ options }
	</Dropdown>
);

export const FlippingPlacement: React.FunctionComponent = () => (
	<div className="scrollbox">
		<Dropdown label="Choose an element">
			{ options.map((value, index) => <Dropdown.Option value={index}>{ value }</Dropdown.Option>) }
		</Dropdown>
	</div>
);

export const ComplexOptions: React.FunctionComponent = () => (
	<Dropdown
		label="Select your native fruit"
		matchWidth="button"
		buttonClass="dropdown__button fruits"
		sort={select('Sort', sortOptions, undefined)}
	>
		<Dropdown.Option value="apple">
			<span role="img" aria-label="Apple" title="Apple">🍎</span>
		</Dropdown.Option>
		<Dropdown.Option value="peach">
			<span role="img" aria-label="Peach" title="Peach">🍑</span>
		</Dropdown.Option>
		<Dropdown.Option value="pear">
			<span role="img" aria-label="pear" title="Pear">🍐</span>
		</Dropdown.Option>
		<Dropdown.Option value="cherry">
			<span role="img" aria-label="cherry" title="Cherry">🍒</span>
		</Dropdown.Option>
		<Dropdown.Option value="orange">
			<span role="img" aria-label="orange" title="Orange">🍊</span>
		</Dropdown.Option>
	</Dropdown>
);

export const DifferentChildrenTypes: React.FunctionComponent = () => {
	const [selected, setSelected] = React.useState<React.ReactText>();
	const changeHandler = ({ value }: { value: React.ReactText }): void => setSelected(value);
	return (
		<Dropdown label="My dropdown" selected={selected} onChange={changeHandler}>
			{/* explicit value ('foo'); explicit rendered contents ('Foo'); recommended. */}
			<Dropdown.Option value="foo">Foo</Dropdown.Option>
			{/* implicit value ('Bar'); explicit rendered contents ('Bar') */}
			<Dropdown.Option>Bar</Dropdown.Option>
			{/* explicit value ('baz'); implicit rendered contents ('baz') */}
			<Dropdown.Option value="baz" />
			{/* implicit Option. value & contents both equal 'Qux' */}
			Qux
		</Dropdown>
	);
};

export const ControlledValue: React.FunctionComponent = () => {
	const [selected, setSelected] = React.useState<React.ReactText>('Mendelevium');
	const changeHandler = ({ value }: OnChangeData): void => setSelected(value);
	const submit = (e: React.FormEvent<HTMLFormElement>): void => {
		action('onSubmit')(selected);
		e.preventDefault();
	};
	return (
		<form onSubmit={submit}>
			<Dropdown
				className="form-control"
				label="Choose an element"
				selected={selected}
				onChange={changeHandler}
			>
				{ options }
			</Dropdown>
			<Button type="submit" variant="solid">Submit</Button>
		</form>
	);
};

export const FullyControlled: React.FunctionComponent = () => {
	const [selected, setSelected] = React.useState<React.ReactText>('Mendelevium');
	const [buttonContents, setButtonContents] = React.useState<React.ReactNode>('Select something');
	const [isOpen, setOpen] = React.useState(false);
	const changeHandler = ({ value, contents }: OnChangeData): void => {
		setSelected(value);
		setButtonContents(contents || value);
	};
	const closeHandler = (): void => setOpen(false);
	const openHandler = (): void => setOpen(true);
	const submit = (e: React.FormEvent<HTMLFormElement>): void => {
		action('onSubmit')(selected);
		e.preventDefault();
	};
	return (
		<form onSubmit={submit}>
			<Dropdown
				className="form-control"
				label="Choose an element"
				isOpen={isOpen}
				selected={selected}
				buttonContents={buttonContents}
				onChange={changeHandler}
				onRequestClose={closeHandler}
				onRequestOpen={openHandler}
			>
				{ options }
			</Dropdown>
			<Button type="submit" variant="solid">Submit</Button>
		</form>
	);
};

/* TODO: implement a listbox and demo the multiselect variant
export const MultiselectListbox: React.FunctionComponent = () => {
	const [selected, setSelected] = React.useState<React.ReactText[]>(['foo']);
	const changeHandler = ({ value }: { value: React.ReactText }): void => {
		const index = selected.indexOf(value);
		if (index > -1) {
			const newSelected = selected.slice();
			newSelected.splice(index, 1);
			setSelected(newSelected);
		} else {
			setSelected([...selected, value]);
		}
	};
	return (
		<BaseListbox selected={selected} onChange={changeHandler}>
			<BaseOption value="foo">Foo</BaseOption>
			<BaseOption value="Bar" />
			Baz
		</BaseListbox>
	);
};
*/
