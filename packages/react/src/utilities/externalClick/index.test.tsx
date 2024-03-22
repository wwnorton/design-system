import test from 'ava';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useExternalClick } from './hook';

test.afterEach(cleanup);

const Fixture = () => {
	const [ref, setRef] = React.useState<HTMLButtonElement | null>(null);
	const [externalClicks, setExternalClicks] = React.useState(0);

	useExternalClick(ref || undefined, () => setExternalClicks(externalClicks + 1));

	return (
		<button type="button" ref={setRef}>
			{externalClicks}
			<img alt="An internal element" src="foo.jpeg" />
		</button>
	);
};

test('should trigger when external elements are clicked', async (t) => {
	const user = userEvent.setup();

	render(<Fixture />);
	const button = screen.getByRole('button');

	t.is(button.textContent, '0');

	await user.click(document.body);
	t.is(button.textContent, '1');

	await user.click(document.body);
	t.is(button.textContent, '2');
});

test('should not trigger when the referenced element is clicked', async (t) => {
	const user = userEvent.setup();

	render(<Fixture />);
	const button = screen.getByRole('button');

	t.is(button.textContent, '0');

	await user.click(button);

	t.is(button.textContent, '0');
});

test('should not trigger when an internal element is clicked', async (t) => {
	const user = userEvent.setup();

	render(<Fixture />);
	const button = screen.getByRole('button');
	const image = screen.getByRole('img');

	t.is(button.textContent, '0');

	await user.click(image);

	t.is(button.textContent, '0');
});
