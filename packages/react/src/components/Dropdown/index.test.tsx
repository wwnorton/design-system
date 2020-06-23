import test from 'ava';
import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Dropdown } from '.';

test.afterEach(cleanup);

// helper function to get dropdown anatomy fixtures
const dropdownAnatomy = (ctx: HTMLElement) => ({
	getButton() { return ctx.querySelector('button') as NonNullable<HTMLButtonElement>; },
	getListbox() { return ctx.querySelector<HTMLElement>('[role=listbox]'); },
	getOptions() { return ctx.querySelectorAll<HTMLElement>('[role=option]'); },
});

// default dropdown props
const label = 'Choose an element';
const options = ['Americium', 'Berkelium', 'Bohrium', 'Californium'];
const defaultProps = { label, children: options };

test('renders closed by default', (t) => {
	const { container } = render(<Dropdown {...defaultProps} />);
	const { getListbox, getOptions } = dropdownAnatomy(container);
	t.falsy(getListbox());
	t.is(getOptions().length, 0);
});

test('renders a listbox with focus on the first option when `isOpen`', (t) => {
	const { container } = render(<Dropdown {...defaultProps} isOpen />);
	const { getListbox, getOptions } = dropdownAnatomy(container);
	t.truthy(getListbox());
	t.is(getOptions().length, options.length);
	t.is(document.activeElement, getOptions()[0]);
});

test('clicking the button opens the listbox when closed', (t) => {
	const { container } = render(<Dropdown {...defaultProps} />);
	const { getButton, getListbox, getOptions } = dropdownAnatomy(container);

	fireEvent.click(getButton());
	t.truthy(getListbox());
	t.is(getOptions().length, options.length);
	t.is(document.activeElement, getOptions()[0]);
});

test('clicking the button closes the listbox when it\'s open', (t) => {
	const { container } = render(<Dropdown {...defaultProps} isOpen />);
	const { getButton, getListbox, getOptions } = dropdownAnatomy(container);

	// clicking the button should open the listbox
	fireEvent.click(getButton());
	t.falsy(getListbox());
	t.is(getOptions().length, 0);
});

test('clicking an option selects it and closes the listbox', (t) => {
	const OPTION_INDEX = 1;
	const { container } = render(<Dropdown {...defaultProps} isOpen />);
	const { getButton, getListbox, getOptions } = dropdownAnatomy(container);

	fireEvent.click(getOptions()[OPTION_INDEX]);
	t.is(getButton().textContent, options[OPTION_INDEX]);
	t.falsy(getListbox());
});

// this should be passing. possible @testing-library or JSDOM issue?
test.failing('keypress.enter selects the currently focused option and closes the listbox', (t) => {
	const { container } = render(<Dropdown {...defaultProps} isOpen />);
	const { getButton, getListbox } = dropdownAnatomy(container);
	fireEvent.keyPress(document.activeElement, { key: 'Enter' });
	t.is(getButton().textContent, options[0]);
	t.falsy(getListbox());
});

test('keyup.space selects the currently focused option and closes the listbox', (t) => {
	const { container } = render(<Dropdown {...defaultProps} isOpen />);
	const { getButton, getListbox } = dropdownAnatomy(container);
	fireEvent.keyUp(document.activeElement, { key: ' ' });
	t.is(getButton().textContent, options[0]);
	t.falsy(getListbox());
});

test('down arrow on the button opens the listbox and moves focus to the first option', (t) => {
	const { container } = render(<Dropdown {...defaultProps} />);
	const { getButton, getListbox } = dropdownAnatomy(container);

	fireEvent.keyDown(getButton(), { key: 'ArrowDown' });

	t.truthy(getListbox());
	t.is(document.activeElement.textContent, options[0]);
});

test('down arrow moves focus to the next option and up arrow moves focus to the previous option when open', (t) => {
	render(<Dropdown {...defaultProps} isOpen />);
	// arrow down until the end
	for (let i = 0; i < options.length; i += 1) {
		t.is(document.activeElement.textContent, options[i]);
		fireEvent.keyDown(document.activeElement, { key: 'ArrowDown' });
	}
	// arrow down once more to ensure focus can't go beyond the end
	fireEvent.keyDown(document.activeElement, { key: 'ArrowDown' });
	t.is(document.activeElement.textContent, options[options.length - 1]);

	// arrow up until the beginning
	for (let i = options.length - 1; i > -1; i -= 1) {
		t.is(document.activeElement.textContent, options[i]);
		fireEvent.keyDown(document.activeElement, { key: 'ArrowUp' });
	}
	// arrow up once more to ensure focus can't go beyond the beginning
	fireEvent.keyDown(document.activeElement, { key: 'ArrowUp' });
	t.is(document.activeElement.textContent, options[0]);
});

test('escape closes the listbox', (t) => {
	const { container } = render(<Dropdown {...defaultProps} isOpen />);
	fireEvent.keyDown(document.body, { key: 'Escape' });
	const { getListbox, getOptions } = dropdownAnatomy(container);
	t.falsy(getListbox());
	t.is(getOptions().length, 0);
});

test('escape does not close the listbox when `closeOnDocumentEscape` is `false`', (t) => {
	const { container } = render(<Dropdown {...defaultProps} isOpen closeOnDocumentEscape={false} />);
	fireEvent.keyDown(document.body, { key: 'Escape' });
	const { getListbox, getOptions } = dropdownAnatomy(container);
	t.truthy(getListbox());
	t.is(getOptions().length, options.length);
});

test('clicking outside of the dropdown closes the listbox', (t) => {
	const { container } = render(<Dropdown {...defaultProps} isOpen />);
	fireEvent.click(document.body);
	const { getListbox, getOptions } = dropdownAnatomy(container);
	t.falsy(getListbox());
	t.is(getOptions().length, 0);
});

test('clicking outside of the dropdown does not close the listbox when `closeOnExternalClick` is `false`', (t) => {
	const { container } = render(<Dropdown {...defaultProps} isOpen closeOnExternalClick={false} />);
	fireEvent.click(document.body);
	const { getListbox, getOptions } = dropdownAnatomy(container);
	t.truthy(getListbox());
	t.is(getOptions().length, options.length);
});

test('tabbing out of an open dropdown closes it without selecting anything', (t) => {
	const { container } = render(<Dropdown {...defaultProps} isOpen />);
	const { getButton, getListbox, getOptions } = dropdownAnatomy(container);
	const initialText = getButton().textContent;
	fireEvent.keyDown(document.activeElement, { key: 'Tab' });
	t.falsy(getListbox());
	t.is(getOptions().length, 0);
	t.is(getButton().textContent, initialText);
});

test('open state can be controlled externally', (t) => {
	const { container, rerender } = render(<Dropdown {...defaultProps} />);
	const { getListbox, getOptions } = dropdownAnatomy(container);

	// open
	rerender(<Dropdown {...defaultProps} isOpen />);
	t.truthy(getListbox());
	t.is(getOptions().length, options.length);
	t.is(document.activeElement, getOptions()[0]);

	// close
	rerender(<Dropdown {...defaultProps} />);
	t.falsy(getListbox());
	t.is(getOptions().length, 0);
});
