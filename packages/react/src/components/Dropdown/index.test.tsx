import ava, { ExecutionContext, TestInterface } from 'ava';
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import prettier from 'prettier';
import { Dropdown } from '.';

interface TestContext { container: HTMLElement }
const test = ava as TestInterface<TestContext>;

const format = (el: HTMLElement): string => prettier.format(el.outerHTML, {
	parser: 'babel',
});

test.beforeEach((t) => {
	// eslint-disable-next-line no-param-reassign
	t.context = {
		container: document.createElement('div'),
	};
	document.body.appendChild(t.context.container);
});

test.afterEach((t) => {
	document.body.removeChild(t.context.container);
});

const elements = [
	'Americium',
	'Berkelium',
	'Bohrium',
	'Californium',
];

interface DropdownElements {
	container: HTMLElement;
	readonly button: HTMLButtonElement;
	readonly listbox: HTMLElement;
	readonly options: NodeListOf<HTMLElement>;
	snapshot: (message?: string) => void;
}
const createDropdown = (t: ExecutionContext<TestContext>): DropdownElements => {
	const { container } = t.context;
	return {
		container,
		get button(): HTMLButtonElement {
			return container.querySelector('button');
		},
		get listbox(): HTMLElement {
			return container.querySelector('[role=listbox]');
		},
		get options(): NodeListOf<HTMLElement> {
			return container.querySelectorAll('[role=option]');
		},
		snapshot: (message?: string): void => t.snapshot(format(container), message),
	};
};

test('shallow renders its defaults', (t) => {
	const component = renderer.create((
		<Dropdown
			label="Choose an element"
			options={elements}
		/>
	));
	t.snapshot(component.toJSON());
});

test('renders its defaults', (t) => {
	const { container } = t.context;
	act(() => {
		ReactDOM.render((
			<Dropdown
				label="Choose an element"
				options={elements}
			/>
		), container);
	});
	t.snapshot(format(container));
});

test('clicking the button opens the listbox', (t) => {
	const dropdown = createDropdown(t);

	// initial state
	act(() => {
		ReactDOM.render((
			<Dropdown
				label="Choose an element"
				options={elements}
			/>
		), dropdown.container);
	});
	t.falsy(dropdown.listbox);
	t.falsy(dropdown.options.length);
	t.is(dropdown.button.getAttribute('aria-expanded'), 'false');
	dropdown.snapshot('initial state');

	// click the button should open the listbox
	act(() => {
		dropdown.button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
	});
	t.truthy(dropdown.listbox);
	t.is(dropdown.options.length, elements.length);
	t.is(dropdown.button.getAttribute('aria-expanded'), 'true');
	dropdown.snapshot('button click -> expanded');
});

test('clicking an option selects it and closes the listbox', (t) => {
	const dropdown = createDropdown(t);

	// initial state
	act(() => {
		ReactDOM.render((
			<Dropdown
				label="Choose an element"
				options={elements}
				isOpen
			/>
		), dropdown.container);
	});
	t.truthy(dropdown.listbox);
	t.is(dropdown.options.length, elements.length);
	t.is(dropdown.button.getAttribute('aria-expanded'), 'true');
	dropdown.snapshot('initial state');

	// click option 2 should select it and close the listbox
	act(() => {
		dropdown.options[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
	});
	t.is(dropdown.button.firstChild.textContent, elements[1]);
	t.falsy(dropdown.listbox);
	dropdown.snapshot('option 2 clicked -> selected and closed');
});

test('down arrow opens the listbox and moves focus to the first option', (t) => {
	const dropdown = createDropdown(t);

	// initial state
	act(() => {
		ReactDOM.render((
			<Dropdown
				label="Choose an element"
				options={elements}
			/>
		), dropdown.container);
	});
	t.falsy(dropdown.listbox);
	t.falsy(dropdown.options.length);
	t.is(dropdown.button.getAttribute('aria-expanded'), 'false');
	dropdown.snapshot('initial state');

	// arrow down on the button should move focus to listbox
	act(() => {
		dropdown.button.dispatchEvent(new KeyboardEvent('keydown', {
			key: 'ArrowDown',
			bubbles: true,
		}));
	});
	t.truthy(dropdown.listbox);
	t.is(dropdown.options.length, elements.length);
	t.is(dropdown.button.getAttribute('aria-expanded'), 'true');
	t.is(document.activeElement, dropdown.options[0]);
	dropdown.snapshot('arrow down -> expanded & focused');
});
