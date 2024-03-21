import test from 'ava';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tag } from '.';

test.afterEach(cleanup);

const defaultLabel = 'Tag Label';
const DismissibleFixture = () => {
	const [showTag, setShowTag] = React.useState(true);

	if (!showTag) return null;
	return (
		<Tag dismissible onDismiss={() => setShowTag(false)}>
			{defaultLabel}
		</Tag>
	);
};

test('renders as a button by default', async (t) => {
	render(<Tag>{defaultLabel}</Tag>);
	const tag = screen.getByRole('button');
	t.truthy(tag);
	t.true(tag.contains(screen.getByText(defaultLabel)));
});

test('when dismissible, only the dismiss action is a button', async (t) => {
	render(<Tag dismissible>{defaultLabel}</Tag>);
	t.falsy(screen.queryByRole('button', { name: 'defaultLabel' }));
	t.truthy(screen.queryByRole('button', { name: 'Dismiss' }));
});

test('does not render as a button when the tag contains a link', async (t) => {
	render(
		<Tag>
			<a href="example.com">Example link</a>
		</Tag>,
	);

	t.falsy(screen.queryByRole('button'));
	t.truthy(screen.queryByRole('link'));
});

test('does not render a child link when dismissible', async (t) => {
	render(
		<Tag dismissible>
			<a href="example.com">Example link</a>
		</Tag>,
	);

	t.truthy(screen.queryByRole('button'));
	t.falsy(screen.queryByRole('link'));
});

test('clicking the dismiss button triggers onDismiss when dismissible', async (t) => {
	const user = userEvent.setup();
	render(<DismissibleFixture />);

	const dismissButton = screen.getByRole('button');
	await user.click(dismissButton);

	t.falsy(screen.queryByText(defaultLabel));
});

test('clicking the tag label does nothing when dismissible', async (t) => {
	const user = userEvent.setup();
	render(<DismissibleFixture />);

	const label = screen.getByText(defaultLabel);
	await user.click(label);

	t.truthy(label);
});
