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

test('renders as a button by default', (t) => {
	render(<Tag>{defaultLabel}</Tag>);
	const tag = screen.queryByRole('button');
	t.truthy(tag);
	t.true(tag.contains(screen.getByText(defaultLabel)));
});

test('when dismissible, only the dismiss action is a button', (t) => {
	render(<Tag dismissible>{defaultLabel}</Tag>);
	t.falsy(screen.queryByRole('button', { name: 'defaultLabel' }));
	t.truthy(screen.queryByRole('button', { name: 'Dismiss' }));
});

test('does not render as a button when the tag contains a link', (t) => {
	render(
		<Tag>
			<a href="example.com">Example link</a>
		</Tag>,
	);

	t.falsy(screen.queryByRole('button'));
	t.truthy(screen.queryByRole('link'));
});

test('does not render a child link when dismissible', (t) => {
	render(
		<Tag dismissible>
			<a href="example.com">Example link</a>
		</Tag>,
	);

	t.truthy(screen.queryByRole('button'));
	t.falsy(screen.queryByRole('link'));
});

test('clicking the dismiss button triggers onDismiss when dismissible', (t) => {
	render(<DismissibleFixture />);

	const dismissButton = screen.queryByRole('button');
	userEvent.click(dismissButton);

	t.falsy(screen.queryByText(defaultLabel));
});

test('clicking the tag label does nothing when dismissible', (t) => {
	render(<DismissibleFixture />);

	const label = screen.queryByText(defaultLabel);
	userEvent.click(label);

	t.truthy(label);
});
