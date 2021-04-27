import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Listbox, Option } from '.';
import { ErrorBoundary } from '../../../test/helpers/ErrorBoundary';
import { useSelect } from '../../utilities';

test.afterEach(cleanup);

const OPTIONS_LIST = ['Dog', 'Cat', 'Hamster', 'Parrot', 'Spider', 'Fish'];
const OPTIONS_RECORD = {
	Dog: 'dog',
	Cat: 'cat',
	Hamster: 'hamster',
	Parrot: 'parrot',
	Spider: 'spider',
	Fish: 'fish',
};

test('a list of string options renders as Options', (t) => {
	render(<Listbox options={OPTIONS_LIST} />);
	t.is(screen.queryAllByRole('option').length, OPTIONS_LIST.length);
});

test('a record of options renders as Options', (t) => {
	render(<Listbox options={OPTIONS_RECORD} />);
	t.is(screen.queryAllByRole('option').length, Object.keys(OPTIONS_RECORD).length);
});

test('selected options can be controlled via the listbox', (t) => {
	render((
		<Listbox multiselectable selected={['dog', 'hamster']}>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
			<Option value="hamster">🐹 Hamster</Option>
		</Listbox>
	));
	// selected options get a icon with an aria-label of "Checked", which results
	// in an accessible name of "Checked 🐶 Dog", so find selected elements by
	// checking that they end with the label
	const dog = screen.queryByRole('option', { name: (n) => n.endsWith('🐶 Dog') });
	const cat = screen.queryByRole('option', { name: (n) => n.endsWith('🐱 Cat') });
	const hamster = screen.queryByRole('option', { name: (n) => n.endsWith('🐹 Hamster') });

	const selected = screen.queryAllByRole('option', { selected: true });

	t.true(selected.includes(dog));
	t.false(selected.includes(cat));
	t.true(selected.includes(hamster));
});

test('selected options can be controlled via the options', (t) => {
	render((
		<Listbox multiselectable>
			<Option value="dog" selected>🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
			<Option value="hamster" selected>🐹 Hamster</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: (n) => n.endsWith('🐶 Dog') });
	const cat = screen.queryByRole('option', { name: (n) => n.endsWith('🐱 Cat') });
	const hamster = screen.queryByRole('option', { name: (n) => n.endsWith('🐹 Hamster') });

	const selected = screen.queryAllByRole('option', { selected: true });

	t.true(selected.includes(dog));
	t.false(selected.includes(cat));
	t.true(selected.includes(hamster));
});

test('throws an error when the selected prop length is greater than 1 in non-multiselectable mode', (t) => {
	// suppress JSDOM errors in the log
	window.onerror = () => true;
	render((
		<ErrorBoundary>
			<Listbox multiselectable={false} selected={['dog', 'hamster']}>
				<Option value="dog">🐶 Dog</Option>
				<Option value="cat">🐱 Cat</Option>
				<Option value="hamster">🐹 Hamster</Option>
			</Listbox>
		</ErrorBoundary>
	));
	t.truthy(screen.queryByText(useSelect.SELECT_OVERLOAD));
	t.falsy(screen.queryByRole('listbox'));
	window.onerror = null;
});

test('throws an error when multiple options are selected in non-multiselectable mode', (t) => {
	// suppress JSDOM errors in the log
	window.onerror = () => true;
	render((
		<ErrorBoundary>
			<Listbox multiselectable={false}>
				<Option value="dog" selected>🐶 Dog</Option>
				<Option value="cat">🐱 Cat</Option>
				<Option value="hamster" selected>🐹 Hamster</Option>
			</Listbox>
		</ErrorBoundary>
	));
	t.truthy(screen.queryByText(useSelect.SELECT_OVERLOAD));
	t.falsy(screen.queryByRole('listbox'));
	window.onerror = null;
});

test('clicking an option does nothing when selected is controlled', (t) => {
	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat" selected>🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: (n) => n.endsWith('🐶 Dog') });
	const cat = screen.queryByRole('option', { name: (n) => n.endsWith('🐱 Cat') });

	let selected = screen.queryAllByRole('option', { selected: true });

	t.false(selected.includes(dog));
	t.true(selected.includes(cat));

	userEvent.click(cat);

	selected = screen.queryAllByRole('option', { selected: true });

	t.false(selected.includes(dog));
	t.true(selected.includes(cat));
});

test('clicking an option focuses it and selects it', (t) => {
	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: '🐶 Dog' });
	const cat = screen.queryByRole('option', { name: '🐱 Cat' });

	userEvent.click(cat);

	t.is(document.activeElement, cat);

	const selected = screen.queryAllByRole('option', { selected: true });

	t.false(selected.includes(dog));
	t.true(selected.includes(cat));
});

test('only one option can be selected when not multiselectable', (t) => {
	render((
		<Listbox multiselectable={false}>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: (n) => n.endsWith('🐶 Dog') });
	const cat = screen.queryByRole('option', { name: (n) => n.endsWith('🐱 Cat') });

	userEvent.click(dog);

	let selected = screen.queryAllByRole('option', { selected: true });

	t.true(selected.includes(dog));
	t.false(selected.includes(cat));

	userEvent.click(cat);

	selected = screen.queryAllByRole('option', { selected: true });

	t.false(selected.includes(dog));
	t.true(selected.includes(cat));
});

test('clicking a selected option does nothing when not multiselectable', (t) => {
	render((
		<Listbox multiselectable={false}>
			<Option value="dog" selected>🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: (n) => n.endsWith('🐶 Dog') });
	const cat = screen.queryByRole('option', { name: (n) => n.endsWith('🐱 Cat') });

	let selected = screen.queryAllByRole('option', { selected: true });
	t.true(selected.includes(dog));
	t.false(selected.includes(cat));

	userEvent.click(dog);

	selected = screen.queryAllByRole('option', { selected: true });
	t.true(selected.includes(dog));
	t.false(selected.includes(cat));
});

test('multiple options can be selected when multiselectable', (t) => {
	render((
		<Listbox multiselectable>
			<Option value="dog" selected>🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: (n) => n.endsWith('🐶 Dog') });
	const cat = screen.queryByRole('option', { name: (n) => n.endsWith('🐱 Cat') });

	let selected = screen.queryAllByRole('option', { selected: true });
	t.true(selected.includes(dog));
	t.false(selected.includes(cat));

	userEvent.click(cat);

	selected = screen.queryAllByRole('option', { selected: true });
	t.true(selected.includes(dog));
	t.true(selected.includes(cat));
});

test('clicking a selected option deselects it when multiselectable', (t) => {
	render((
		<Listbox multiselectable>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: (n) => n.endsWith('🐶 Dog') });
	const cat = screen.queryByRole('option', { name: (n) => n.endsWith('🐱 Cat') });

	userEvent.click(dog);

	let selected = screen.queryAllByRole('option', { selected: true });
	t.true(selected.includes(dog));
	t.false(selected.includes(cat));

	userEvent.click(dog);

	selected = screen.queryAllByRole('option', { selected: true });
	t.false(selected.includes(dog));
	t.false(selected.includes(cat));
});

test('the first option is focused when autofocus is true', (t) => {
	render((
		<Listbox autofocus>
			<Option value="dog">🐶 Dog</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: '🐶 Dog' });

	t.is(document.activeElement, dog);
});

test('focus lands on the first option when focusable index is unset', (t) => {
	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: '🐶 Dog' });

	userEvent.tab();
	t.is(document.activeElement, dog);
});

test('focus lands on the focusable index when it is set', (t) => {
	render((
		<Listbox focusableIndex={1}>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const cat = screen.queryByRole('option', { name: '🐱 Cat' });

	userEvent.tab();
	t.is(document.activeElement, cat);
});

test('ArrowDown moves focus down the list of options when orientation is unset', (t) => {
	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: '🐶 Dog' });
	const cat = screen.queryByRole('option', { name: '🐱 Cat' });

	userEvent.click(dog);
	t.is(document.activeElement, dog);

	fireEvent.keyDown(document.activeElement, { key: 'ArrowDown' });
	t.is(document.activeElement, cat);
});

test('ArrowRight moves focus down the list of options when orientation is unset', (t) => {
	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: '🐶 Dog' });
	const cat = screen.queryByRole('option', { name: '🐱 Cat' });

	userEvent.click(dog);
	t.is(document.activeElement, dog);

	fireEvent.keyDown(document.activeElement, { key: 'ArrowRight' });
	t.is(document.activeElement, cat);
});

test('"next" keys do not move focus when at the last option', (t) => {
	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const cat = screen.queryByRole('option', { name: '🐱 Cat' });

	userEvent.click(cat);
	t.is(document.activeElement, cat);

	fireEvent.keyDown(document.activeElement, { key: 'ArrowDown' });
	t.is(document.activeElement, cat);

	fireEvent.keyDown(document.activeElement, { key: 'ArrowRight' });
	t.is(document.activeElement, cat);
});

test('ArrowUp moves focus up the list of options when orientation is unset', (t) => {
	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: '🐶 Dog' });
	const cat = screen.queryByRole('option', { name: '🐱 Cat' });

	userEvent.click(cat);
	t.is(document.activeElement, cat);

	fireEvent.keyDown(document.activeElement, { key: 'ArrowUp' });
	t.is(document.activeElement, dog);
});

test('ArrowLeft moves focus up the list of options when orientation is unset', (t) => {
	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: '🐶 Dog' });
	const cat = screen.queryByRole('option', { name: '🐱 Cat' });

	userEvent.click(cat);
	t.is(document.activeElement, cat);

	fireEvent.keyDown(document.activeElement, { key: 'ArrowLeft' });
	t.is(document.activeElement, dog);
});

test('"previous" keys do not move focus when at the first option', (t) => {
	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: '🐶 Dog' });

	userEvent.tab();
	t.is(document.activeElement, dog);

	fireEvent.keyDown(document.activeElement, { key: 'ArrowUp' });
	t.is(document.activeElement, dog);

	fireEvent.keyDown(document.activeElement, { key: 'ArrowLeft' });
	t.is(document.activeElement, dog);
});

test('only ArrowRight and ArrowLeft move focus when orientation is "horizontal"', (t) => {
	render((
		<Listbox orientation="horizontal">
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: '🐶 Dog' });
	const cat = screen.queryByRole('option', { name: '🐱 Cat' });

	userEvent.tab();
	t.is(document.activeElement, dog);

	fireEvent.keyDown(document.activeElement, { key: 'ArrowDown' });
	t.is(document.activeElement, dog);	// no movement

	fireEvent.keyDown(document.activeElement, { key: 'ArrowRight' });
	t.is(document.activeElement, cat);

	fireEvent.keyDown(document.activeElement, { key: 'ArrowUp' });
	t.is(document.activeElement, cat);	// no movement

	fireEvent.keyDown(document.activeElement, { key: 'ArrowLeft' });
	t.is(document.activeElement, dog);
});

test('only ArrowDown and ArrowUp move focus when orientation is "vertical"', (t) => {
	render((
		<Listbox orientation="vertical">
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: '🐶 Dog' });
	const cat = screen.queryByRole('option', { name: '🐱 Cat' });

	userEvent.tab();
	t.is(document.activeElement, dog);

	fireEvent.keyDown(document.activeElement, { key: 'ArrowRight' });
	t.is(document.activeElement, dog);	// no movement

	fireEvent.keyDown(document.activeElement, { key: 'ArrowDown' });
	t.is(document.activeElement, cat);

	fireEvent.keyDown(document.activeElement, { key: 'ArrowLeft' });
	t.is(document.activeElement, cat);	// no movement

	fireEvent.keyDown(document.activeElement, { key: 'ArrowUp' });
	t.is(document.activeElement, dog);
});

test('End moves focus to the last option', (t) => {
	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
			<Option value="hamster">🐹 Hamster</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: '🐶 Dog' });
	const hamster = screen.queryByRole('option', { name: '🐹 Hamster' });

	userEvent.tab();
	t.is(document.activeElement, dog);

	fireEvent.keyDown(document.activeElement, { key: 'End' });
	t.is(document.activeElement, hamster);
});

test('Home moves focus to the first option', (t) => {
	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
			<Option value="hamster">🐹 Hamster</Option>
		</Listbox>
	));
	const dog = screen.queryByRole('option', { name: '🐶 Dog' });
	const hamster = screen.queryByRole('option', { name: '🐹 Hamster' });

	userEvent.click(hamster);
	t.is(document.activeElement, hamster);

	fireEvent.keyDown(document.activeElement, { key: 'Home' });
	t.is(document.activeElement, dog);
});

test('clicking a disabled option does not select it', (t) => {
	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat" disabled>🐱 Cat</Option>
		</Listbox>
	));
	const cat = screen.queryByRole('option', { name: '🐱 Cat' });

	userEvent.click(cat);
	t.is(cat.getAttribute('aria-selected'), 'false');
});

test('arrowing skips disabled options', (t) => {
	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat" disabled>🐱 Cat</Option>
			<Option value="hamster">🐹 Hamster</Option>
		</Listbox>
	));
	const hamster = screen.queryByRole('option', { name: '🐹 Hamster' });

	userEvent.tab();
	fireEvent.keyDown(document.activeElement, { key: 'ArrowDown' });
	t.is(document.activeElement, hamster);
});

test('an option\'s label is used for its accessible name', (t) => {
	render((
		<Listbox>
			<Option value="parrot" label="🦜 Parrot" />
		</Listbox>
	));
	t.truthy(screen.queryByRole('option', { name: '🦜 Parrot' }));
});

test('an option\'s label overrides its children', (t) => {
	render((
		<Listbox>
			<Option value="spider" label="🕷️ Spider">🕷️</Option>
		</Listbox>
	));
	t.truthy(screen.queryByRole('option', { name: '🕷️ Spider' }));
	t.falsy(screen.queryByRole('option', { name: '🕷️' }));
});

test('an option\'s value is used for its accessible name when label and children are undefined', (t) => {
	render((
		<Listbox>
			<Option value="🐠 Fish" />
		</Listbox>
	));
	t.truthy(screen.queryByRole('option', { name: '🐠 Fish' }));
});
