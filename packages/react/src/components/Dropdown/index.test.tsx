import test from 'ava';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from '.';

test.afterEach(cleanup);

// default dropdown props
const label = 'Choose an element';
const options = ['Americium', 'Berkelium', 'Bohrium', 'Californium'];
const defaultProps = { label, children: options };

test('renders closed by default', async (t) => {
	render(<Dropdown {...defaultProps} />);
	t.falsy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, 0);
});

test('renders a listbox with focus on the first option when `isOpen`', async (t) => {
	render(<Dropdown {...defaultProps} isOpen />);
	t.truthy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, options.length);
	t.is(document.activeElement, screen.queryAllByRole('option')[0]);
});

test('clicking the button opens the listbox when closed', async (t) => {
	const user = userEvent.setup();

	render(<Dropdown {...defaultProps} />);

	await user.click(screen.getByRole('button'));
	t.truthy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, options.length);
	t.is(document.activeElement, screen.queryAllByRole('option')[0]);
});

test("clicking the button closes the listbox when it's open", async (t) => {
	const user = userEvent.setup();

	render(<Dropdown {...defaultProps} isOpen />);

	// clicking the button should open the listbox
	await user.click(screen.getByRole('button'));
	t.falsy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, 0);
});

test('clicking an option selects it and closes the listbox', async (t) => {
	const user = userEvent.setup();

	const OPTION_INDEX = 1;
	render(<Dropdown {...defaultProps} isOpen />);
	const target = screen.queryAllByRole('option')[OPTION_INDEX];

	await user.click(target);
	t.is(screen.getByRole('button').textContent, target.textContent);
	t.falsy(screen.queryByRole('listbox'));
});

test('keydown.enter selects the currently focused option and closes the listbox', async (t) => {
	const user = userEvent.setup();

	render(
		<Dropdown isOpen label={label}>
			{options}
		</Dropdown>,
	);
	const { textContent } = document.activeElement as Element;

	await user.keyboard('{Enter}');
	t.is(screen.getByRole('button').textContent, textContent);
	t.falsy(screen.queryByRole('listbox'));
});

test('clicking with space selects the currently focused option and closes the listbox', async (t) => {
	const user = userEvent.setup();

	render(
		<Dropdown isOpen label={label}>
			{options}
		</Dropdown>,
	);
	const { textContent } = document.activeElement as Element;

	// space "click" is a keydown + keyup on the same element
	await user.keyboard('[Space>][/Space]');
	t.is(screen.getByRole('button').textContent, textContent);
	t.falsy(screen.queryByRole('listbox'));
});

test('down arrow on the button opens the listbox and moves focus to the first option', async (t) => {
	const user = userEvent.setup();

	render(<Dropdown {...defaultProps} />);

	await user.tab();
	await user.keyboard('{ArrowDown}');

	t.truthy(screen.queryByRole('listbox'));
	t.is(document.activeElement as Element, screen.queryAllByRole('option')[0]);
});

test('down arrow moves focus to the next option and up arrow moves focus to the previous option when open', async (t) => {
	const user = userEvent.setup();

	render(<Dropdown {...defaultProps} isOpen />);
	const opts = screen.queryAllByRole('option');
	const optionsArray = Array.from({ length: opts.length + 1 });

	// arrow down opts.length + 1 times. focus should be on the last option.
	await user.keyboard(optionsArray.map(() => '{ArrowDown}').join(''));
	t.is(document.activeElement, opts[opts.length - 1]);

	// arrow up opts.length + 1 times. focus should be on the first option.
	await user.keyboard(optionsArray.map(() => '{ArrowUp}').join(''));
	t.is(document.activeElement, opts[0]);
});

test('the home key moves focus to the first option', async (t) => {
	const user = userEvent.setup();

	render(<Dropdown {...defaultProps} isOpen />);
	const opts = screen.queryAllByRole('option');
	const optionsArray = Array.from({ length: opts.length + 1 });

	// arrow down opts.length + 1 times. focus should be on the last option.
	await user.keyboard(optionsArray.map(() => '{ArrowDown}').join(''));
	t.is(document.activeElement, opts[opts.length - 1]);

	// return us home
	await user.keyboard('{Home}');
	t.is(document.activeElement, opts[0]);
});

test('the end key moves focus to the last option', async (t) => {
	const user = userEvent.setup();

	render(<Dropdown {...defaultProps} isOpen />);
	const opts = screen.queryAllByRole('option');
	await user.keyboard('{End}');
	t.is(document.activeElement, opts[opts.length - 1]);
});

test('escape closes the listbox', async (t) => {
	const user = userEvent.setup();

	render(<Dropdown {...defaultProps} isOpen />);
	await user.keyboard('{Escape}');
	t.falsy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, 0);
});

test('escape does not close the listbox when `closeOnDocumentEscape` is `false`', async (t) => {
	const user = userEvent.setup();

	render(<Dropdown {...defaultProps} isOpen closeOnDocumentEscape={false} />);
	await user.keyboard('{Escape}');
	t.truthy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, options.length);
});

test('clicking outside of the dropdown closes the listbox', async (t) => {
	const user = userEvent.setup();

	render(<Dropdown {...defaultProps} isOpen />);
	await user.click(document.body);
	t.falsy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, 0);
});

test('clicking outside of the dropdown does not close the listbox when `closeOnExternalClick` is `false`', async (t) => {
	const user = userEvent.setup();

	render(<Dropdown {...defaultProps} isOpen closeOnExternalClick={false} />);
	await user.click(document.body);
	t.truthy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, options.length);
});

test('tabbing out of an open dropdown closes it without selecting anything', async (t) => {
	const user = userEvent.setup();

	render(<Dropdown {...defaultProps} isOpen />);
	const { textContent: initialText } = screen.getByRole('button');
	await user.tab();
	t.falsy(screen.queryByRole('listbox'));
	t.is(screen.queryAllByRole('option').length, 0);
	t.is(screen.getByRole('button').textContent, initialText);
});

test.only('closing the listbox returns focus to the dropdown button', async (t) => {
	const user = userEvent.setup();

	render(<Dropdown {...defaultProps} />);

	// open the dropdown and make sure focus is inside
	await user.tab();
	await user.keyboard('{Enter}');
	t.truthy(screen.queryByRole('listbox'));
	t.true(screen.getByRole('listbox').contains(document.activeElement));

	// close the dropdown and make sure focus is on the button
	await user.keyboard('{Escape}');
	t.falsy(screen.queryByRole('listbox'));
	t.is(document.activeElement, screen.getByRole('button'));
});

test('open state can be controlled externally', async (t) => {
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

test('ascending sort renders options from A to Z', async (t) => {
	const unsorted = ['Z', 'C', 'J'];
	const sorted = ['C', 'J', 'Z'];
	render(
		<Dropdown label={label} sort="ascending" isOpen>
			{unsorted}
		</Dropdown>,
	);
	const opts = screen.queryAllByRole('option');
	opts.forEach((option, i) => {
		t.is(option.textContent, sorted[i]);
	});
});

test('descending sort renders options from Z to A', async (t) => {
	const unsorted = ['Z', 'C', 'J'];
	const sorted = ['Z', 'J', 'C'];
	render(
		<Dropdown label={label} sort="descending" isOpen>
			{unsorted}
		</Dropdown>,
	);
	const opts = screen.queryAllByRole('option');
	opts.forEach((option, i) => {
		t.is(option.textContent, sorted[i]);
	});
});

test('a disabled option cannot be selected', async (t) => {
	const user = userEvent.setup();

	const OPTION_INDEX = 1;
	render(
		<Dropdown label={label} isOpen>
			<Dropdown.Option value="1">First</Dropdown.Option>
			<Dropdown.Option value="2" disabled>
				Second
			</Dropdown.Option>
			<Dropdown.Option value="3">Third</Dropdown.Option>
		</Dropdown>,
	);
	const target = screen.queryAllByRole('option')[OPTION_INDEX];

	await user.click(target);
	t.not(screen.getByRole('button').textContent, target.textContent);
	t.truthy(screen.queryByRole('listbox'));
});

test('a dropdown is closed when it is disabled', async (t) => {
	const { rerender } = render(<Dropdown {...defaultProps} isOpen />);
	rerender(<Dropdown {...defaultProps} isOpen disabled />);
	t.falsy(screen.queryByRole('listbox'));
});

test('a dropdown button content is updated', (t) => {
	const children = [
		<Dropdown.Option key={0} value={1}>
			1
		</Dropdown.Option>,
		<Dropdown.Option key={1} value={2}>
			2
		</Dropdown.Option>,
		<Dropdown.Option key={2} value={3}>
			3
		</Dropdown.Option>,
	];
	const { rerender } = render(
		<Dropdown {...defaultProps} selected={1} buttonContents={1}>
			{children}
		</Dropdown>,
	);

	rerender(
		<Dropdown {...defaultProps} selected={2} buttonContents={2}>
			{children}
		</Dropdown>,
	);

	t.truthy(
		// There's some kind of whitespace before and after the number
		// in the label, curious.
		screen.queryByRole('button', { name: /\w*2\w*/ }),
	);
});

test('a dropdown should focus on selected option if picked via props on mount', (t) => {
	const children = [
		<Dropdown.Option key={0} value={1}>
			1
		</Dropdown.Option>,
		<Dropdown.Option key={1} value={2}>
			2
		</Dropdown.Option>,
		<Dropdown.Option key={2} value={3}>
			3
		</Dropdown.Option>,
	];
	render(
		<Dropdown {...defaultProps} selected={2} isOpen>
			{children}
		</Dropdown>,
	);

	const { textContent } = document.activeElement as Element;

	t.true(textContent === '2');
});

test('a dropdown should focus on selected option if picked via props on update', (t) => {
	const children = [
		<Dropdown.Option key={0} value={1}>
			1
		</Dropdown.Option>,
		<Dropdown.Option key={1} value={2}>
			2
		</Dropdown.Option>,
		<Dropdown.Option key={2} value={3}>
			3
		</Dropdown.Option>,
	];
	const { rerender } = render(
		<Dropdown {...defaultProps} selected={1}>
			{children}
		</Dropdown>,
	);

	rerender(
		<Dropdown {...defaultProps} selected={2} isOpen>
			{children}
		</Dropdown>,
	);

	const { textContent } = document.activeElement as Element;

	t.true(textContent === '2');
});
