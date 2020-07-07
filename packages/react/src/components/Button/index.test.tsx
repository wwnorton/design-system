import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
	queryByRole, queryByText, queryByLabelText,
} from '@testing-library/react';
import { Button, IconButton, ButtonProps } from '.';
import { ErrorBoundary } from '../../../test/helpers/ErrorBoundary';
import { LiveRegion } from '../LiveRegion';

test.afterEach(cleanup);

const defaultChildren = 'Button action';

test('throws when no children are provided', (t) => {
	// suppress JSDOM errors in the log
	window.onerror = () => true;
	// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
	// @ts-ignore
	const { container } = render(<ErrorBoundary><Button /></ErrorBoundary>);

	t.truthy(queryByText(container, Button.errors.noChildren));
	t.falsy(queryByRole(container, 'button'));
	window.onerror = null;
});

test('renders a <button>', (t) => {
	const { container } = render(<Button><span>{ defaultChildren }</span></Button>);
	t.truthy(queryByRole(container, 'button'));
	t.is(queryByRole(container, 'button').textContent, defaultChildren);
});

test('clicking the button with space triggers the :active polyfill', (t) => {
	const activeClass = 'active';
	const { container } = render(<Button activeClass={activeClass}>{ defaultChildren }</Button>);
	const button = queryByRole(container, 'button');

	fireEvent.keyDown(button, { key: ' ' });
	t.true(button.classList.contains(activeClass));
	fireEvent.keyUp(button, { key: ' ' });
	t.false(button.classList.contains(activeClass));
});

test('icons are not included in the accessibility tree', (t) => {
	const { container } = render(<Button icon="check">{ defaultChildren }</Button>);
	const button = queryByRole(container, 'button');

	t.falsy(queryByRole(button, 'img'));
	t.is(button.textContent, defaultChildren);
});

test('icon-only buttons still have an accessible label', (t) => {
	const { container } = render(<Button icon="close" iconOnly>{ defaultChildren }</Button>);
	const button = queryByRole(container, 'button');

	t.is(queryByLabelText(container, defaultChildren), button);
});

test('icon-only buttons display a tooltip when hovered', (t) => {
	const { container } = render(<Button icon="close" iconOnly>{ defaultChildren }</Button>);
	const button = queryByRole(container, 'button');

	fireEvent.pointerEnter(button);
	t.truthy(container.querySelector('[role=tooltip]'));
});

test('icon-only buttons display a tooltip when focused', (t) => {
	const { container } = render(<Button icon="close" iconOnly>{ defaultChildren }</Button>);
	const button = queryByRole(container, 'button');

	fireEvent.focus(button);
	t.truthy(container.querySelector('[role=tooltip]'));
});

test('icon-only buttons are labelled by their tooltip when it exists', (t) => {
	const { container } = render(<Button icon="close" iconOnly>{ defaultChildren }</Button>);
	const button = queryByRole(container, 'button');

	fireEvent.pointerEnter(button);
	t.is(queryByLabelText(container, defaultChildren), button);
});

/** TODO: use a single version of this for Storybook & testing */
const ChangingContent: React.FunctionComponent = () => {
	const [favorite, setFavorite] = React.useState(false);

	const toggleFavorite = (): void => setFavorite(!favorite);

	const buttonProps: ButtonProps = React.useMemo(() => {
		if (favorite) return { children: 'Unfavorite', icon: 'heart' };
		return { children: 'Favorite', icon: 'heart-outline' };
	}, [favorite]);

	return (
		<Button
			variant="solid"
			onClick={toggleFavorite}
			{...buttonProps}
		/>
	);
};

// known failure: the live region's contents are removed too quickly for our
// test to pick them up.
// TODO: figure out how to check for live contents before it's removed
test.failing('changing content is added to a live region', async (t) => {
	// force the live region to persist so we can check for its existence
	LiveRegion.defaultProps.removeAfter = 0;
	const { container } = render(<ChangingContent />);
	const button = queryByRole(container, 'button');

	fireEvent.click(button);
	const nodes = screen.queryAllByText(button.textContent);
	t.is(nodes.length, 2);
	t.is(nodes[1].getAttribute('aria-live'), 'assertive');
});

test('icon buttons render with tooltips by default', (t) => {
	const { container } = render(<IconButton icon="close">{ defaultChildren }</IconButton>);
	const button = queryByRole(container, 'button');

	fireEvent.pointerEnter(button);
	t.truthy(container.querySelector('[role=tooltip]'));
});
