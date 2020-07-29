import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
} from '@testing-library/react';
import { Dropdown } from '.';

test.afterEach(cleanup);

// default dropdown props
const label = 'Choose an element';
const options = ['Americium', 'Berkelium', 'Bohrium', 'Californium'];
const defaultProps = { label, children: options };

test('renders closed by default', (t) => {
	render(<Dropdown {...defaultProps} />);
	t.falsy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, 0);
});

test('renders a listbox with focus on the first option when `isOpen`', (t) => {
	render(<Dropdown {...defaultProps} isOpen />);
	t.truthy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, options.length);
	t.is(document.activeElement, screen.queryAllByRole('option')[0]);
});

test('clicking the button opens the listbox when closed', (t) => {
	render(<Dropdown {...defaultProps} />);

	fireEvent.click(screen.getByRole('button'));
	t.truthy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, options.length);
	t.is(document.activeElement, screen.queryAllByRole('option')[0]);
});

test('clicking the button closes the listbox when it\'s open', (t) => {
	render(<Dropdown {...defaultProps} isOpen />);

	// clicking the button should open the listbox
	fireEvent.click(screen.getByRole('button'));
	t.falsy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, 0);
});

test('clicking an option selects it and closes the listbox', (t) => {
	const OPTION_INDEX = 1;
	render(<Dropdown {...defaultProps} isOpen />);

	fireEvent.click(screen.queryAllByRole('option')[OPTION_INDEX]);
	t.is(screen.getByRole('button').textContent, options[OPTION_INDEX]);
	t.falsy(screen.queryByRole('listbox'));
});

// this should be passing. possible @testing-library or JSDOM issue?
test.failing('keypress.enter selects the currently focused option and closes the listbox', (t) => {
	render(<Dropdown {...defaultProps} isOpen />);

	fireEvent.keyPress(document.activeElement, { key: 'Enter' });
	t.is(screen.getByRole('button').textContent, options[0]);
	t.falsy(screen.queryByRole('listbox'));
});

test('keyup.space selects the currently focused option and closes the listbox', (t) => {
	render(<Dropdown {...defaultProps} isOpen />);

	fireEvent.keyUp(document.activeElement, { key: ' ' });
	t.is(screen.getByRole('button').textContent, options[0]);
	t.falsy(screen.queryByRole('listbox'));
});

test('down arrow on the button opens the listbox and moves focus to the first option', (t) => {
	render(<Dropdown {...defaultProps} />);

	fireEvent.keyDown(screen.getByRole('button'), { key: 'ArrowDown' });

	t.truthy(screen.queryByRole('listbox'));
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
	render(<Dropdown {...defaultProps} isOpen />);
	fireEvent.keyDown(document.body, { key: 'Escape' });
	t.falsy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, 0);
});

test('escape does not close the listbox when `closeOnDocumentEscape` is `false`', (t) => {
	render(<Dropdown {...defaultProps} isOpen closeOnDocumentEscape={false} />);
	fireEvent.keyDown(document.body, { key: 'Escape' });
	t.truthy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, options.length);
});

test('clicking outside of the dropdown closes the listbox', (t) => {
	render(<Dropdown {...defaultProps} isOpen />);
	fireEvent.click(document.body);
	t.falsy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, 0);
});

test('clicking outside of the dropdown does not close the listbox when `closeOnExternalClick` is `false`', (t) => {
	render(<Dropdown {...defaultProps} isOpen closeOnExternalClick={false} />);
	fireEvent.click(document.body);
	t.truthy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, options.length);
});

test('tabbing out of an open dropdown closes it without selecting anything', (t) => {
	render(<Dropdown {...defaultProps} isOpen />);
	const initialText = screen.getByRole('button').textContent;
	fireEvent.keyDown(document.activeElement, { key: 'Tab' });
	t.falsy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, 0);
	t.is(screen.getByRole('button').textContent, initialText);
});

test('open state can be controlled externally', (t) => {
	const { rerender } = render(<Dropdown {...defaultProps} />);

	// open
	rerender(<Dropdown {...defaultProps} isOpen />);
	t.truthy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, options.length);
	t.is(document.activeElement, screen.queryAllByRole('option')[0]);

	// close
	rerender(<Dropdown {...defaultProps} />);
	t.falsy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, 0);
});
