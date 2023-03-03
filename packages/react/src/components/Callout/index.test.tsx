import test from 'ava';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Callout } from '.';

test.afterEach(cleanup);

// The default <aside> is an ARIA landmark and should be labelled by the title
test('a Callout uses its title for its accessible name', async (t) => {
	const name = 'Foo';
	render(<Callout title={name} />);

	t.truthy(screen.queryByRole('complementary', { name }));
});

// <div> callouts are _not_ ARIA landmarks, and should therefore not have an accessible name
test('a div Callout does not use its title as an accessible name', async (t) => {
	const name = 'Foo';
	render(<Callout title={name} tag="div" />);

	t.falsy(screen.queryByRole('complementary', { name }));
});

test('a Callout without a title is not rendered as a landmark', async (t) => {
	render(<Callout />);

	t.falsy(screen.queryByRole('complementary'));
});

test('clicking the dismiss button dismisses the callout', async (t) => {
	const name = 'Foo';
	render(<Callout title={name} dismissible />);

	t.truthy(screen.queryByRole('complementary'));

	await userEvent.click(screen.getByRole('button', { name: 'Dismiss' }));
	t.falsy(screen.queryByRole('complementary'));
});
