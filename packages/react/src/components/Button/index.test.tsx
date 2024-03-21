import test from 'ava';
import React from 'react';
import { cleanup, render, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, IconButton } from '.';
import { ErrorBoundary } from '../../../test/helpers/ErrorBoundary';
import { ChangingContent } from './index.stories';
import { BUTTON_NO_NAME } from './errors';

test.afterEach(cleanup);

const defaultChildren = 'Button action';

test('throws when an accessible name is not provided', (t) => {
	// suppress JSDOM errors in the log
	window.onerror = () => true;
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	render(
		<ErrorBoundary>
			<Button />
		</ErrorBoundary>,
	);

	t.truthy(screen.queryByText(BUTTON_NO_NAME));
	t.falsy(screen.queryByRole('button'));
	window.onerror = null;
});

test('renders a <button>', (t) => {
	render(
		<Button>
			<span>{defaultChildren}</span>
		</Button>,
	);
	t.truthy(screen.queryByRole('button'));
	t.is(screen.getByRole('button').textContent, defaultChildren);
});

test('clicking the button with space triggers the :active polyfill', (t) => {
	const activeClass = 'active';
	render(<Button activeClass={activeClass}>{defaultChildren}</Button>);
	const button = screen.getByRole('button');

	fireEvent.keyDown(button, { key: ' ' });
	t.true(button.classList.contains(activeClass));
	fireEvent.keyUp(button, { key: ' ' });
	t.false(button.classList.contains(activeClass));
});

test('icons are not included in the accessibility tree', (t) => {
	render(<Button icon="check">{defaultChildren}</Button>);
	const button = screen.getByRole('button');

	t.truthy(screen.queryByRole('img', { hidden: true }));
	t.is(button.textContent, defaultChildren);
});

test('icon-only buttons still have an accessible label', (t) => {
	render(
		<Button icon="close" iconOnly>
			{defaultChildren}
		</Button>,
	);
	t.is(screen.getByLabelText(defaultChildren), screen.getByRole('button'));
});

test('icon-only buttons display a tooltip when hovered', async (t) => {
	render(
		<Button icon="close" iconOnly>
			{defaultChildren}
		</Button>,
	);

	userEvent.hover(screen.getByRole('button'));
	t.truthy(await screen.findByRole('tooltip', { hidden: true }));
});

test('icon-only buttons display a tooltip when focused', (t) => {
	render(
		<Button icon="close" iconOnly>
			{defaultChildren}
		</Button>,
	);

	userEvent.tab();
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));
});

test('icon-only buttons are labelled by their tooltip when it exists', async (t) => {
	render(
		<Button icon="close" iconOnly>
			{defaultChildren}
		</Button>,
	);

	userEvent.hover(screen.getByRole('button'));
	const tooltip = await screen.findByRole('tooltip', { hidden: true });

	t.is(tooltip.textContent, defaultChildren);
	t.truthy(screen.getByRole('button', { name: defaultChildren }));
});

test('changing content is added to a live region', async (t) => {
	render(<ChangingContent />);
	const button = screen.getByRole('button');

	userEvent.tab();
	userEvent.click(button);

	await waitFor(() => {
		t.truthy(screen.getByText(button.textContent, { selector: '[aria-live]' }));
	});
});

test('icon buttons render with tooltips by default', async (t) => {
	render(<IconButton icon="close">{defaultChildren}</IconButton>);
	const button = screen.getByRole('button');

	userEvent.hover(button);
	t.truthy(await screen.findByRole('tooltip', { hidden: true }));
});
