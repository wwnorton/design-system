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
	const target = screen.queryAllByRole('option')[OPTION_INDEX];

	fireEvent.click(target);
	t.is(screen.getByRole('button').textContent, target.textContent);
	t.falsy(screen.queryByRole('listbox'));
});

test('keydown.enter selects the currently focused option and closes the listbox', (t) => {
	render(<Dropdown isOpen label={label}>{ options }</Dropdown>);
	const { textContent } = document.activeElement as Element;

	fireEvent.keyDown(document.activeElement as Element, { key: 'Enter' });
	t.is(screen.getByRole('button').textContent, textContent);
	t.falsy(screen.queryByRole('listbox'));
});

test('keyup.space selects the currently focused option and closes the listbox', (t) => {
	render(<Dropdown isOpen label={label}>{ options }</Dropdown>);
	const { textContent } = document.activeElement as Element;

	fireEvent.keyUp(document.activeElement as Element, { key: ' ' });
	t.is(screen.getByRole('button').textContent, textContent);
	t.falsy(screen.queryByRole('listbox'));
});

test('down arrow on the button opens the listbox and moves focus to the first option', (t) => {
	render(<Dropdown {...defaultProps} />);

	fireEvent.keyDown(screen.getByRole('button'), { key: 'ArrowDown' });

	t.truthy(screen.queryByRole('listbox'));
	t.is(document.activeElement as Element, screen.queryAllByRole('option')[0]);
});

test('down arrow moves focus to the next option and up arrow moves focus to the previous option when open', (t) => {
	render(<Dropdown {...defaultProps} isOpen />);
	const getFocused = () => document.activeElement as Element;
	const opts = screen.queryAllByRole('option');
	// arrow down until the end
	for (let i = 0; i < opts.length; i += 1) {
		t.is(getFocused(), opts[i]);
		fireEvent.keyDown(getFocused(), { key: 'ArrowDown' });
	}
	// arrow down once more to ensure focus can't go beyond the end
	fireEvent.keyDown(getFocused(), { key: 'ArrowDown' });
	t.is(getFocused(), opts[opts.length - 1]);

	// arrow up until the beginning
	for (let i = opts.length - 1; i > -1; i -= 1) {
		t.is(getFocused(), opts[i]);
		fireEvent.keyDown(getFocused(), { key: 'ArrowUp' });
	}
	// arrow up once more to ensure focus can't go beyond the beginning
	fireEvent.keyDown(getFocused(), { key: 'ArrowUp' });
	t.is(getFocused(), opts[0]);
});

test('the home key moves focus to the first option', async (t) => {
	render(<Dropdown {...defaultProps} isOpen />);
	const getFocused = () => document.activeElement as Element;
	const opts = screen.queryAllByRole('option');
	// arrow down until the end
	for (let i = 0; i < opts.length; i += 1) {
		t.is(getFocused(), opts[i]);
		fireEvent.keyDown(getFocused(), { key: 'ArrowDown' });
	}
	fireEvent.keyDown(getFocused(), { key: 'Home' });
	t.is(getFocused(), opts[0]);
});

test('the end key moves focus to the last option', (t) => {
	render(<Dropdown {...defaultProps} isOpen />);
	const opts = screen.queryAllByRole('option');
	fireEvent.keyDown(document.activeElement as Element, { key: 'End' });
	t.is(document.activeElement, opts[opts.length - 1]);
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
	const { textContent: initialText } = screen.getByRole('button');
	fireEvent.keyDown(document.activeElement as Element, { key: 'Tab' });
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

test('ascending sort renders options from A to Z', (t) => {
	const unsorted = ['Z', 'C', 'J'];
	const sorted = ['C', 'J', 'Z'];
	render(<Dropdown label={label} sort="ascending" isOpen>{ unsorted }</Dropdown>);
	const opts = screen.queryAllByRole('option');
	opts.forEach((option, i) => {
		t.is(option.textContent, sorted[i]);
	});
});

test('descending sort renders options from Z to A', (t) => {
	const unsorted = ['Z', 'C', 'J'];
	const sorted = ['Z', 'J', 'C'];
	render(<Dropdown label={label} sort="descending" isOpen>{ unsorted }</Dropdown>);
	const opts = screen.queryAllByRole('option');
	opts.forEach((option, i) => {
		t.is(option.textContent, sorted[i]);
	});
});

test('a disabled option cannot be selected', (t) => {
	const OPTION_INDEX = 1;
	render((
		<Dropdown label={label} isOpen>
			<Dropdown.Option value="1">First</Dropdown.Option>
			<Dropdown.Option value="2" disabled>Second</Dropdown.Option>
			<Dropdown.Option value="3">Third</Dropdown.Option>
		</Dropdown>
	));
	const target = screen.queryAllByRole('option')[OPTION_INDEX];

	fireEvent.click(target);
	t.not(screen.getByRole('button').textContent, target.textContent);
	t.truthy(screen.queryByRole('listbox'));
});

test('a dropdown is closed when it is disabled', (t) => {
	const { rerender } = render(<Dropdown {...defaultProps} isOpen />);
	rerender(<Dropdown {...defaultProps} isOpen disabled />);
	t.falsy(screen.queryByRole('listbox'));
});
