import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs, boolean, select, number,
} from '@storybook/addon-knobs';
import { Button } from '../Button';
import { OnChangeData } from '../BaseListbox';
import { Dropdown, DropdownProps } from '.';
import { Modal } from '../Modal';

export default {
	title: 'Dropdown',
	component: Dropdown,
	decorators: [withKnobs],
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

const sortOptions: Record<string, DropdownProps['sort']> = {
	None: undefined,
	Ascending: 'ascending',
	Descending: 'descending',
};

export const Default: React.FunctionComponent = () => (
	<Dropdown
		label="Choose an element"
		sort={select<DropdownProps['sort']>('Sort', sortOptions, undefined)}
		disabled={boolean('Disabled', false)}
	>
		{ options }
	</Dropdown>
);

export const MatchListboxWidth: React.FunctionComponent = () => (
	<Dropdown
		label="Choose an element"
		matchWidth="listbox"
		disabled={boolean('Disabled', false)}
	>
		{ options }
	</Dropdown>
);

export const MatchButtonWidth: React.FunctionComponent = () => (
	<Dropdown
		label="Choose an element"
		matchWidth="button"
		buttonWidth={`${number('Button width (rem)', 12, { step: 0.25 })}rem`}
		disabled={boolean('Disabled', false)}
	>
		{ options }
	</Dropdown>
);

export const FlippingPlacement: React.FunctionComponent = () => (
	// cspell:ignore scrollbox
	<div className="scrollbox">
		<Dropdown
			label="Choose an element"
			description="Open the dropdown and then scroll down"
			disabled={boolean('Disabled', false)}
		>
			{ options.map((value, index) => <Dropdown.Option value={index}>{ value }</Dropdown.Option>) }
		</Dropdown>
	</div>
);

export const ComplexOptions: React.FunctionComponent = () => (
	<Dropdown
		label="Select your native fruit"
		matchWidth="button"
		buttonClass="dropdown__button fruits"
		sort={select<DropdownProps['sort']>('Sort', sortOptions, undefined)}
		buttonWidth={`${number('Button width (rem)', 6)}rem`}
		disabled={boolean('Disabled', false)}
	>
		<Dropdown.Option value="apple">
			<span role="img" aria-label="Apple" title="Apple">🍎</span>
		</Dropdown.Option>
		<Dropdown.Option value="peach">
			<span role="img" aria-label="Peach" title="Peach">🍑</span>
		</Dropdown.Option>
		<Dropdown.Option value="pear">
			<span role="img" aria-label="Pear" title="Pear">🍐</span>
		</Dropdown.Option>
		<Dropdown.Option value="cherry">
			<span role="img" aria-label="Cherry" title="Cherry">🍒</span>
		</Dropdown.Option>
		<Dropdown.Option value="orange">
			<span role="img" aria-label="Orange" title="Orange">🍊</span>
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

export const FullyControlled: React.FunctionComponent = () => {
	const [selected, setSelected] = React.useState<React.ReactText>('Mendelevium');
	const [buttonContents, setButtonContents] = React.useState<React.ReactNode>('Select something');
	const [submitted, setSubmitted] = React.useState(false);
	const [isOpen, setOpen] = React.useState(false);
	const changeHandler = ({ value, contents }: OnChangeData): void => {
		setSelected(value);
		setButtonContents(contents || value);
	};
	const closeHandler = (): void => setOpen(false);
	const openHandler = (): void => setOpen(true);
	const submit = (e: React.FormEvent<HTMLFormElement>): void => {
		action('onSubmit')(selected);
		alert(`${selected} submitted!`);	// eslint-disable-line no-alert
		setSubmitted(true);
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
				disabled={submitted}
				onChange={changeHandler}
				onRequestClose={closeHandler}
				onRequestOpen={openHandler}
			>
				{ options }
			</Dropdown>
			<Button
				type="submit"
				variant="solid"
				disabled={submitted}
				style={{ marginTop: '1rem' }}
			>
				Submit

			</Button>
		</form>
	);
};

export const FocusOut: React.FunctionComponent = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const focusHandler = (e): void => {
		if (e === 'Select modal button') {
			document.getElementById('btnModal').focus();
		} else if (e === 'Select modal alert') {
			document.getElementById('btnAlert').focus();
		} else if (e === 'Open the modal') {
			setIsOpen(true);
		}
	};
	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);
	const showAlert = () => {
		alert('Focus on me !!'); // eslint-disable-line no-alert
	};
	return (
		<>
			<Dropdown
				label="Choose focus element"
				onFocusOut={focusHandler}
				buttonWidth={`${number('Button width (rem)', 12, { step: 0.25 })}rem`}
			>
				<Dropdown.Option>Select modal button</Dropdown.Option>
				<Dropdown.Option>Select modal alert</Dropdown.Option>
				<Dropdown.Option>Open the modal</Dropdown.Option>
			</Dropdown>

			<Button
				variant="solid"
				onClick={open}
				id="btnModal"
				style={{ marginTop: '1rem' }}
			>
				Open the modal
			</Button>

			<Button
				variant="solid"
				id="btnAlert"
				onClick={showAlert}
				style={{ marginTop: '1rem', marginLeft: '1rem' }}
			>
				Alert
			</Button>

			<Modal
				title="Confirm the prompt"
				isOpen={isOpen}
				onRequestClose={close}
				actions={[
					<Button variant="outline" color="base" onClick={close}>
						Also confirm
					</Button>,
					<Button variant="solid" onClick={close}>
						Confirm
					</Button>,
				]}
			>
				<p>
					This is a demo modal.
					Real modals should have useful information here.
				</p>
			</Modal>
		</>
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
