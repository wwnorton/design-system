import test from 'ava';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Listbox, Option } from '.';
import { ErrorBoundary } from '../../../test/helpers/ErrorBoundary';
import { useSelect } from '../../utilities';

test.afterEach(cleanup);

test('a list of string options renders as Options', async (t) => {
	const optionsList = ['Dog', 'Cat'];
	render(<Listbox options={optionsList} />);
	optionsList.forEach((name) => {
		const option = screen.getByRole('option', { name });
		t.truthy(option);
		t.is(option.getAttribute('value'), name);
	});
});

test('a list of option props renders as Options', async (t) => {
	const optionsList = [
		{ label: 'Dog', value: 'dog' },
		{ label: 'Cat', value: 'cat' },
	];
	render(<Listbox options={optionsList} />);
	optionsList.forEach(({ label, value }) => {
		const option = screen.getByRole('option', { name: label });
		t.truthy(option);
		t.is(option.getAttribute('value'), value);
	});
});

test('a list of option props with a missing label throws an error', async (t) => {
	// suppress JSDOM errors in the log
	window.onerror = () => true;
	render((
		<ErrorBoundary>
			<Listbox options={[{ value: 'dog' }]} />
		</ErrorBoundary>
	));
	t.truthy(screen.queryByText((el) => el.startsWith('The <Listbox> options prop')));
	t.falsy(screen.queryByRole('listbox'));
	window.onerror = null;
});

test('a list of option props with a missing value throws an error', async (t) => {
	// suppress JSDOM errors in the log
	window.onerror = () => true;
	render((
		<ErrorBoundary>
			{/* @ts-ignore */}
			<Listbox options={[{ label: 'Dog' }]} />
		</ErrorBoundary>
	));
	t.truthy(screen.queryByText((el) => el.startsWith('The <Listbox> options prop')));
	t.falsy(screen.queryByRole('listbox'));
	window.onerror = null;
});

test('a record of options renders as Options', async (t) => {
	const optionsRecord: Record<string, string> = {
		Dog: 'dog',
		Cat: 'cat',
	};
	render(<Listbox options={optionsRecord} />);
	Object.keys(optionsRecord).forEach((label) => {
		const value = optionsRecord[label];
		const option = screen.getByRole('option', { name: label });
		t.truthy(option);
		t.is(option.getAttribute('value'), value);
	});
});

test('a props object can be mapped to all options', async (t) => {
	const optionsList = ['Dog', 'Cat'];
	const className = 'option';
	render(<Listbox options={optionsList} optionProps={{ className }} />);
	optionsList.forEach((name) => {
		const option = screen.getByRole('option', { name });
		t.is(option.className, className);
	});
});

test('a props function can be mapped to all options', async (t) => {
	const optionsList = ['Dog', 'Cat'];
	const className = (i: number) => `option-${i + 1}`;
	render(<Listbox options={optionsList} optionProps={(i) => ({ className: className(i) })} />);
	optionsList.forEach((name, i) => {
		const option = screen.getByRole('option', { name });
		t.is(option.className, className(i));
	});
});

test('selected options can be controlled via the listbox', async (t) => {
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
	const dog = screen.getByRole('option', { name: (n) => n.endsWith('🐶 Dog') });
	const cat = screen.getByRole('option', { name: (n) => n.endsWith('🐱 Cat') });
	const hamster = screen.getByRole('option', { name: (n) => n.endsWith('🐹 Hamster') });

	const selected = screen.queryAllByRole('option', { selected: true });

	t.true(selected.includes(dog));
	t.false(selected.includes(cat));
	t.true(selected.includes(hamster));
});

test('selected options can be controlled via the options', async (t) => {
	render((
		<Listbox multiselectable>
			<Option value="dog" selected>🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
			<Option value="hamster" selected>🐹 Hamster</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: (n) => n.endsWith('🐶 Dog') });
	const cat = screen.getByRole('option', { name: (n) => n.endsWith('🐱 Cat') });
	const hamster = screen.getByRole('option', { name: (n) => n.endsWith('🐹 Hamster') });

	const selected = screen.queryAllByRole('option', { selected: true });

	t.true(selected.includes(dog));
	t.false(selected.includes(cat));
	t.true(selected.includes(hamster));
});

test('throws an error when the selected prop length is greater than 1 in non-multiselectable mode', async (t) => {
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

test('throws an error when multiple options are selected in non-multiselectable mode', async (t) => {
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

test('clicking an option does nothing when selected is controlled', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat" selected>🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: (n) => n.endsWith('🐶 Dog') });
	const cat = screen.getByRole('option', { name: (n) => n.endsWith('🐱 Cat') });

	let selected = screen.queryAllByRole('option', { selected: true });

	t.false(selected.includes(dog));
	t.true(selected.includes(cat));

	await user.click(cat);

	selected = screen.queryAllByRole('option', { selected: true });

	t.false(selected.includes(dog));
	t.true(selected.includes(cat));
});

test('clicking an option focuses it and selects it', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: '🐶 Dog' });
	const cat = screen.getByRole('option', { name: '🐱 Cat' });

	await user.click(cat);

	t.is(document.activeElement, cat);

	const selected = screen.queryAllByRole('option', { selected: true });

	t.false(selected.includes(dog));
	t.true(selected.includes(cat));
});

test('only one option can be selected when not multiselectable', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox multiselectable={false}>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: (n) => n.endsWith('🐶 Dog') });
	const cat = screen.getByRole('option', { name: (n) => n.endsWith('🐱 Cat') });

	await user.click(dog);

	let selected = screen.queryAllByRole('option', { selected: true });

	t.true(selected.includes(dog));
	t.false(selected.includes(cat));

	await user.click(cat);

	selected = screen.queryAllByRole('option', { selected: true });

	t.false(selected.includes(dog));
	t.true(selected.includes(cat));
});

test('clicking a selected option does nothing when not multiselectable', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox multiselectable={false}>
			<Option value="dog" selected>🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: (n) => n.endsWith('🐶 Dog') });
	const cat = screen.getByRole('option', { name: (n) => n.endsWith('🐱 Cat') });

	let selected = screen.queryAllByRole('option', { selected: true });
	t.true(selected.includes(dog));
	t.false(selected.includes(cat));

	await user.click(dog);

	selected = screen.queryAllByRole('option', { selected: true });
	t.true(selected.includes(dog));
	t.false(selected.includes(cat));
});

test('multiple options can be selected when multiselectable', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox multiselectable>
			<Option value="dog" selected>🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: (n) => n.endsWith('🐶 Dog') });
	const cat = screen.getByRole('option', { name: (n) => n.endsWith('🐱 Cat') });

	let selected = screen.queryAllByRole('option', { selected: true });
	t.true(selected.includes(dog));
	t.false(selected.includes(cat));

	await user.click(cat);

	selected = screen.queryAllByRole('option', { selected: true });
	t.true(selected.includes(dog));
	t.true(selected.includes(cat));
});

test('clicking a selected option deselects it when multiselectable', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox multiselectable>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: (n) => n.endsWith('🐶 Dog') });
	const cat = screen.getByRole('option', { name: (n) => n.endsWith('🐱 Cat') });

	await user.click(dog);

	let selected = screen.queryAllByRole('option', { selected: true });
	t.true(selected.includes(dog));
	t.false(selected.includes(cat));

	await user.click(dog);

	selected = screen.queryAllByRole('option', { selected: true });
	t.false(selected.includes(dog));
	t.false(selected.includes(cat));
});

test('Enter selects an option on press', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: (n) => n.endsWith('🐶 Dog') });
	const cat = screen.getByRole('option', { name: (n) => n.endsWith('🐱 Cat') });

	await user.tab();
	await user.keyboard('{Enter}');

	const selected = screen.queryAllByRole('option', { selected: true });
	t.true(selected.includes(dog));
	t.false(selected.includes(cat));
});

test('space bar selects an option on release', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: (n) => n.endsWith('🐶 Dog') });
	const cat = screen.getByRole('option', { name: (n) => n.endsWith('🐱 Cat') });

	await user.tab();
	await user.keyboard('[Space]');

	const selected = screen.queryAllByRole('option', { selected: true });
	t.true(selected.includes(dog));
	t.false(selected.includes(cat));
});

test('select can be cancelled with the keyboard by moving focus before release space', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: (n) => n.endsWith('🐶 Dog') });
	const cat = screen.getByRole('option', { name: (n) => n.endsWith('🐱 Cat') });

	await user.tab();
	await user.keyboard('[Space>]{ArrowDown}[/Space]');

	const selected = screen.queryAllByRole('option', { selected: true });
	t.false(selected.includes(dog));
	t.false(selected.includes(cat));
});

test('the first option is focused when autofocus is true', (t) => {
	render((
		<Listbox autofocus>
			<Option value="dog">🐶 Dog</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: '🐶 Dog' });

	t.is(document.activeElement, dog);
});

test('focus lands on the first option when focusable index is unset', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: '🐶 Dog' });

	await user.tab();
	t.is(document.activeElement, dog);
});

test('focus lands on the focusable index when it is set', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox focusableIndex={1}>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const cat = screen.getByRole('option', { name: '🐱 Cat' });

	await user.tab();
	t.is(document.activeElement, cat);
});

test('ArrowDown moves focus down the list of options when orientation is unset', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: '🐶 Dog' });
	const cat = screen.getByRole('option', { name: '🐱 Cat' });

	await user.click(dog);
	t.is(document.activeElement, dog);

	await user.keyboard('{ArrowDown}');
	t.is(document.activeElement, cat);
});

test('ArrowRight moves focus down the list of options when orientation is unset', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: '🐶 Dog' });
	const cat = screen.getByRole('option', { name: '🐱 Cat' });

	await user.click(dog);
	t.is(document.activeElement, dog);

	await user.keyboard('{ArrowRight}');
	t.is(document.activeElement, cat);
});

test('"next" keys do not move focus when at the last option', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const cat = screen.getByRole('option', { name: '🐱 Cat' });

	await user.click(cat);
	t.is(document.activeElement, cat);

	await user.keyboard('{ArrowDown}');
	t.is(document.activeElement, cat);

	await user.keyboard('{ArrowRight}');
	t.is(document.activeElement, cat);
});

test('ArrowUp moves focus up the list of options when orientation is unset', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: '🐶 Dog' });
	const cat = screen.getByRole('option', { name: '🐱 Cat' });

	await user.click(cat);
	t.is(document.activeElement, cat);

	await user.keyboard('{ArrowUp}');
	t.is(document.activeElement, dog);
});

test('ArrowLeft moves focus up the list of options when orientation is unset', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: '🐶 Dog' });
	const cat = screen.getByRole('option', { name: '🐱 Cat' });

	await user.click(cat);
	t.is(document.activeElement, cat);

	await user.keyboard('{ArrowLeft}');
	t.is(document.activeElement, dog);
});

test('"previous" keys do not move focus when at the first option', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: '🐶 Dog' });

	await user.tab();
	t.is(document.activeElement, dog);

	await user.keyboard('{ArrowUp}');
	t.is(document.activeElement, dog);

	await user.keyboard('{ArrowLeft}');
	t.is(document.activeElement, dog);
});

test('only ArrowRight and ArrowLeft move focus when orientation is "horizontal"', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox orientation="horizontal">
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: '🐶 Dog' });
	const cat = screen.getByRole('option', { name: '🐱 Cat' });

	await user.tab();
	t.is(document.activeElement, dog);

	await user.keyboard('{ArrowDown}');
	t.is(document.activeElement, dog);	// no movement

	await user.keyboard('{ArrowRight}');
	t.is(document.activeElement, cat);

	await user.keyboard('{ArrowUp}');
	t.is(document.activeElement, cat);	// no movement

	await user.keyboard('{ArrowLeft}');
	t.is(document.activeElement, dog);
});

test('only ArrowDown and ArrowUp move focus when orientation is "vertical"', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox orientation="vertical">
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: '🐶 Dog' });
	const cat = screen.getByRole('option', { name: '🐱 Cat' });

	await user.tab();
	t.is(document.activeElement, dog);

	await user.keyboard('{ArrowRight}');
	t.is(document.activeElement, dog);	// no movement

	await user.keyboard('{ArrowDown}');
	t.is(document.activeElement, cat);

	await user.keyboard('{ArrowLeft}');
	t.is(document.activeElement, cat);	// no movement

	await user.keyboard('{ArrowUp}');
	t.is(document.activeElement, dog);
});

test('End moves focus to the last option', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
			<Option value="hamster">🐹 Hamster</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: '🐶 Dog' });
	const hamster = screen.getByRole('option', { name: '🐹 Hamster' });

	await user.tab();
	t.is(document.activeElement, dog);

	await user.keyboard('{End}');
	t.is(document.activeElement, hamster);
});

test('Home moves focus to the first option', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat">🐱 Cat</Option>
			<Option value="hamster">🐹 Hamster</Option>
		</Listbox>
	));
	const dog = screen.getByRole('option', { name: '🐶 Dog' });
	const hamster = screen.getByRole('option', { name: '🐹 Hamster' });

	await user.click(hamster);
	t.is(document.activeElement, hamster);

	await user.keyboard('{Home}');
	t.is(document.activeElement, dog);
});

test('clicking a disabled option does not select it', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat" disabled>🐱 Cat</Option>
		</Listbox>
	));
	const cat = screen.getByRole('option', { name: '🐱 Cat' });

	await user.click(cat);

	const selected = screen.queryAllByRole('option', { selected: true });

	t.false(selected.includes(cat));
});

test('arrowing skips disabled options', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox>
			<Option value="dog">🐶 Dog</Option>
			<Option value="cat" disabled>🐱 Cat</Option>
			<Option value="hamster">🐹 Hamster</Option>
		</Listbox>
	));
	const hamster = screen.getByRole('option', { name: '🐹 Hamster' });

	await user.tab();
	await user.keyboard('{ArrowDown}');
	t.is(document.activeElement, hamster);
});

test('disabled elements are not focused on tab', async (t) => {
	const user = userEvent.setup();

	render((
		<Listbox>
			<Option value="dog" disabled>🐶 Dog</Option>
			<Option value="cat" disabled>🐱 Cat</Option>
			<Option value="hamster">🐹 Hamster</Option>
		</Listbox>
	));
	const hamster = screen.getByRole('option', { name: '🐹 Hamster' });

	await await user.tab();
	t.is(document.activeElement, hamster);
});

test('an option\'s label is used for its accessible name', async (t) => {
	render((
		<Listbox>
			<Option value="parrot" label="🦜 Parrot" />
		</Listbox>
	));
	t.truthy(screen.getByRole('option', { name: '🦜 Parrot' }));
});

test('an option\'s label overrides its children', async (t) => {
	render((
		<Listbox>
			<Option value="spider" label="🕷️ Spider">🕷️</Option>
		</Listbox>
	));
	t.truthy(screen.getByRole('option', { name: '🕷️ Spider' }));
	t.falsy(screen.queryByRole('option', { name: '🕷️' }));
});

test('an option\'s value is used for its accessible name when label and children are undefined', async (t) => {
	render((
		<Listbox>
			<Option value="🐠 Fish" />
		</Listbox>
	));
	t.truthy(screen.getByRole('option', { name: '🐠 Fish' }));
});
