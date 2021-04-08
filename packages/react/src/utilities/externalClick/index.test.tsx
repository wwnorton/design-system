import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
} from '@testing-library/react';
import { useExternalClick } from './hook';

test.afterEach(cleanup);

const Fixture = () => {
	const [ref, setRef] = React.useState<HTMLButtonElement | null>(null);
	const [externalClicks, setExternalClicks] = React.useState(0);

	useExternalClick(ref || undefined, () => setExternalClicks(externalClicks + 1));

	return (
		<button type="button" ref={setRef}>
			{ externalClicks }
			<img alt="An internal element" src="foo.jpeg" />
		</button>
	);
};

test('should trigger when external elements are clicked', (t) => {
	render(<Fixture />);
	const button = screen.getByRole('button');

	t.is(button.textContent, '0');

	fireEvent.click(document);
	t.is(button.textContent, '1');

	fireEvent.click(document);
	t.is(button.textContent, '2');
});

test('should not trigger when the referenced element is clicked', (t) => {
	render(<Fixture />);
	const button = screen.getByRole('button');

	t.is(button.textContent, '0');

	fireEvent.click(button);

	t.is(button.textContent, '0');
});

test('should not trigger when an internal element is clicked', (t) => {
	render(<Fixture />);
	const button = screen.getByRole('button');
	const image = screen.getByRole('img');

	t.is(button.textContent, '0');

	fireEvent.click(image);

	t.is(button.textContent, '0');
});
