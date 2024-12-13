import test from 'ava';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, IconButton } from '.';
import { ErrorBoundary } from '../../../test/helpers/ErrorBoundary';
import { ChangingContent } from './index.stories';
import { BUTTON_NO_NAME } from './errors';

test.afterEach(cleanup);

const defaultChildren = 'Button action';

test('throws when an accessible name is not provided', async (t) => {
	// suppress JSDOM errors in the log
	window.onerror = () => true;
	render(
		<ErrorBoundary>
			{/* @ts-ignore */}
			<Button />
		</ErrorBoundary>,
	);

	t.truthy(screen.queryByText(BUTTON_NO_NAME));
	t.falsy(screen.queryByRole('button'));
	window.onerror = null;
});

test('renders a <button>', async (t) => {
	render(
		<Button>
			<span>{defaultChildren}</span>
		</Button>,
	);
	t.truthy(screen.queryByRole('button'));
	t.is(screen.getByRole('button').textContent, defaultChildren);
});

test('clicking the button with space triggers the :active polyfill', async (t) => {
	const user = userEvent.setup();

	const activeClass = 'active';
	render(<Button activeClass={activeClass}>{defaultChildren}</Button>);
	const button = screen.getByRole('button');

	await button.focus();

	await user.keyboard('[Space>]');
	t.true(button.classList.contains(activeClass));

	await user.keyboard('[Space>1][/Space]');
	t.false(button.classList.contains(activeClass));
});

test('icons are not included in the accessibility tree', async (t) => {
	render(<Button icon="check">{defaultChildren}</Button>);
	const button = screen.getByRole('button');

	t.truthy(screen.queryByRole('img', { hidden: true }));
	t.is(button.textContent, defaultChildren);
});

test('icon-only buttons still have an accessible label', async (t) => {
	render(
		<Button icon="close" iconOnly>
			{defaultChildren}
		</Button>,
	);
	t.is(screen.getByLabelText(defaultChildren), screen.getByRole('button'));
});

test('icon-only buttons display a tooltip when hovered', async (t) => {
	const user = userEvent.setup();

	render(
		<Button icon="close" iconOnly>
			{defaultChildren}
		</Button>,
	);

	await user.hover(screen.getByRole('button'));
	t.truthy(await screen.findByRole('tooltip', { hidden: true }));
});

test('icon-only buttons display a tooltip when focused', async (t) => {
	const user = userEvent.setup();

	render(
		<Button icon="close" iconOnly>
			{defaultChildren}
		</Button>,
	);

	await user.tab();
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));
});

test('icon-only buttons are labelled by their tooltip when it exists', async (t) => {
	const user = userEvent.setup();

	render(
		<Button icon="close" iconOnly>
			{defaultChildren}
		</Button>,
	);

	await user.hover(screen.getByRole('button'));
	const tooltip = await screen.findByRole('tooltip', { hidden: true });

	t.is(tooltip.textContent, defaultChildren);
	t.truthy(screen.getByRole('button', { name: defaultChildren }));
});

test('changing content is added to a live region', async (t) => {
	const user = userEvent.setup();

	render(<ChangingContent />);
	const button = screen.getByRole('button');

	await user.tab();
	await user.click(button);

	t.truthy(await screen.findByText(button.textContent as string, { selector: '[aria-live]' }));
});

test('icon buttons render with tooltips by default', async (t) => {
	const user = userEvent.setup();

	render(<IconButton icon="close">{defaultChildren}</IconButton>);
	const button = screen.getByRole('button');

	await user.hover(button);
	t.truthy(await screen.findByRole('tooltip', { hidden: true }));
});
