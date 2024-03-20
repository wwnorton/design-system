import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../Button';
import { Dropdown, DropdownProps } from '.';

export default {
	title: 'Dropdown',
	component: Dropdown,
};

/* cspell:disable */
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
/* cspell:enable */

const defaultArgs = {
	label: 'Choose an element',
	children: options,
};

const DropdownTemplate = (args: DropdownProps) => <Dropdown {...args} />;

export const Default = DropdownTemplate.bind({});
Default.args = defaultArgs;

export const MatchListboxWidth = DropdownTemplate.bind({});
MatchListboxWidth.args = {
	matchWidth: 'listbox',
	...defaultArgs,
};

export const MatchButtonWidth = DropdownTemplate.bind({});
MatchButtonWidth.args = {
	matchWidth: 'button',
	buttonWidth: 256,
	...defaultArgs,
};

export const FlippingPlacement = (args: DropdownProps) => (
	// cspell:ignore scrollbox
	<div className="scrollbox">
		<Dropdown {...args} />
	</div>
);
FlippingPlacement.args = {
	description: 'Open the dropdown and then scroll down to see it flip from top to bottom.',
	...defaultArgs,
};

export const ComplexOptions = (args: DropdownProps) => (
	<Dropdown
		{...args}
		label="Select your native fruit"
		matchWidth="button"
		buttonWidth="6rem"
		buttonClass="dropdown__button fruits"
	>
		<Dropdown.Option value="apple">
			<span role="img" aria-label="Apple" title="Apple">
				🍎
			</span>
		</Dropdown.Option>
		<Dropdown.Option value="peach">
			<span role="img" aria-label="Peach" title="Peach">
				🍑
			</span>
		</Dropdown.Option>
		<Dropdown.Option value="pear">
			<span role="img" aria-label="Pear" title="Pear">
				🍐
			</span>
		</Dropdown.Option>
		<Dropdown.Option value="cherry">
			<span role="img" aria-label="Cherry" title="Cherry">
				🍒
			</span>
		</Dropdown.Option>
		<Dropdown.Option value="orange">
			<span role="img" aria-label="Orange" title="Orange">
				🍊
			</span>
		</Dropdown.Option>
	</Dropdown>
);

export const DifferentChildrenTypes = (args: DropdownProps) => {
	const [selected, setSelected] = React.useState<React.ReactText>();
	const changeHandler = ({ value }: { value: React.ReactText }): void => setSelected(value);
	return (
		<Dropdown {...args} label="My dropdown" selected={selected} onChange={changeHandler}>
			{/* explicit value ("foo"); explicit rendered contents ("Foo"); recommended. */}
			<Dropdown.Option value="foo">Foo</Dropdown.Option>
			{/* implicit value ("Bar"); explicit rendered contents ("Bar") */}
			<Dropdown.Option value="bar">Bar</Dropdown.Option>
			{/* explicit value ("baz"); implicit rendered contents ("baz") */}
			<Dropdown.Option value="baz" />
			{/* implicit Option. value & contents both equal "Qux" */}
			Qux
		</Dropdown>
	);
};

export const FullyControlled = (args: DropdownProps) => {
	const [selected, setSelected] = React.useState<React.ReactText>('Mendelevium');
	const [buttonContents, setButtonContents] = React.useState<React.ReactNode>('Select something');
	const [submitted, setSubmitted] = React.useState(false);
	const [isOpen, setOpen] = React.useState(false);
	const changeHandler: DropdownProps['onChange'] = ({ value, contents }): void => {
		setSelected(value);
		setButtonContents(contents || value);
	};
	const closeHandler = (): void => setOpen(false);
	const openHandler = (): void => setOpen(true);
	const submit = (e: React.FormEvent<HTMLFormElement>): void => {
		action('onSubmit')(selected);
		alert(`${selected} submitted!`); // eslint-disable-line no-alert
		setSubmitted(true);
		e.preventDefault();
	};
	return (
		<form onSubmit={submit}>
			<Dropdown
				{...args}
				label="Choose an element"
				isOpen={isOpen}
				selected={selected}
				buttonContents={buttonContents}
				disabled={submitted}
				onChange={changeHandler}
				onRequestClose={closeHandler}
				onRequestOpen={openHandler}
			>
				{options}
			</Dropdown>
			<Button type="submit" variant="solid" disabled={submitted} style={{ marginTop: '1rem' }}>
				Submit
			</Button>
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
			<BaseOption value='foo'>Foo</BaseOption>
			<BaseOption value='Bar' />
			Baz
		</BaseListbox>
	);
};
*/
