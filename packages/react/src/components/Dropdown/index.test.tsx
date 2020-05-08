import test from 'ava';
import React from 'react';
import { cleanup, render, fireEvent } from '../../../test/helpers/testing-library-react';
import Dropdown from '.';

test.afterEach(cleanup);

const dropdownAnatomy = (ctx: HTMLElement) => ({
	get button() { return ctx.querySelector('button') as NonNullable<HTMLButtonElement>; },
	get listbox() { return ctx.querySelector('[role=listbox]'); },
	get options() { return ctx.querySelectorAll('[role=option]'); },
});

const elements = [
	'Americium',
	'Berkelium',
	'Bohrium',
	'Californium',
];

test('renders its defaults', (t) => {
	const TEST_ID = 'defaults';
	const { toString } = render((
		<Dropdown
			label="Choose an element"
			options={elements}
			id={TEST_ID}
		/>
	));
	t.snapshot(toString());
});

test('clicking the button opens the listbox', (t) => {
	const TEST_ID = 'button-click';
	const { container, toString } = render((
		<Dropdown
			label="Choose an element"
			options={elements}
			id={TEST_ID}
		/>
	));
	t.snapshot(toString(), 'initial state');

	const dropdown = dropdownAnatomy(container);

	// clicking the button should open the listbox
	fireEvent.click(dropdown.button);
	t.truthy(dropdown.listbox);
	t.is(dropdown.options.length, elements.length);
	t.snapshot(toString(), 'button click -> expanded');
});

test('clicking an option selects it and closes the listbox', (t) => {
	const TEST_ID = 'option-click';
	const OPTION_INDEX = 1;
	const { container, toString } = render((
		<Dropdown
			label="Choose an element"
			options={elements}
			id={TEST_ID}
			isOpen
		/>
	));
	t.snapshot(toString(), 'initial open state');

	const dropdown = dropdownAnatomy(container);

	fireEvent.click(dropdown.options[OPTION_INDEX]);
	t.is(dropdown.button.textContent, elements[OPTION_INDEX]);
	t.falsy(dropdown.listbox);
	t.snapshot(toString(), 'option 2 clicked -> selected and closed');
});

test('down arrow opens the listbox and moves focus to the first option', (t) => {
	const TEST_ID = 'button-arrowdown';
	const { container, toString } = render((
		<Dropdown
			label="Choose an element"
			options={elements}
			id={TEST_ID}
			isOpen
		/>
	));
	t.snapshot(toString(), 'initial open state');

	const dropdown = dropdownAnatomy(container);

	fireEvent.keyDown(dropdown.options[1], { key: 'ArrowDown', code: 'ArrowDown' });

	t.truthy(dropdown.listbox);
	t.truthy(dropdown.listbox);
	t.is(dropdown.options.length, elements.length);
	t.snapshot(toString(), 'arrow down -> expanded & focused');
});
