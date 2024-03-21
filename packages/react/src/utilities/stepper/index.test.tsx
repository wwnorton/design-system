/* eslint-disable react/require-default-props */
import test from 'ava';
import React from 'react';
import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import { useStepper } from './hook';

test.afterEach(cleanup);

const DEFAULT_SIZE = 5;

const Fixture = ({
	size = DEFAULT_SIZE,
	initialIndex,
	wrap,
	gotoIndex,
}: {
	size?: number;
	initialIndex?: number;
	wrap?: boolean;
	gotoIndex?: number;
}) => {
	const options = React.useRef(initialIndex || wrap ? { initialIndex, wrap } : undefined);
	const [state, dispatch] = useStepper(size, options.current);

	return (
		<>
			<button type="button" onClick={() => dispatch({ type: 'INCREMENT' })}>
				INCREMENT
			</button>
			<button type="button" onClick={() => dispatch({ type: 'DECREMENT' })}>
				DECREMENT
			</button>
			<button type="button" onClick={() => dispatch({ type: 'GOTO', payload: gotoIndex })}>
				GOTO
			</button>
			<button type="button" onClick={() => dispatch({ type: 'FOO' })}>
				INVALID
			</button>
			<output data-testid="current">{state.current}</output>
			<output data-testid="direction">{state.direction}</output>
		</>
	);
};

test('the initial index is 0 when none is provided', (t) => {
	render(<Fixture />);
	const current = parseInt(screen.getByTestId('current').textContent, 10);

	t.is(current, 0);
});

test('initialIndex sets the initial state of the stepper', (t) => {
	const initialIndex = 2;
	render(<Fixture initialIndex={initialIndex} />);
	const current = parseInt(screen.getByTestId('current').textContent, 10);

	t.is(current, initialIndex);
});

test('the INCREMENT action increases the index by 1', (t) => {
	const initialIndex = 2;
	render(<Fixture initialIndex={initialIndex} />);
	const increment = screen.queryByRole('button', { name: 'INCREMENT' });

	fireEvent.click(increment);

	const current = parseInt(screen.getByTestId('current').textContent, 10);
	t.is(current, initialIndex + 1);
});

test('when on the last index and wrap=false, the INCREMENT action does not move the index', (t) => {
	const initialIndex = DEFAULT_SIZE - 1;
	render(<Fixture initialIndex={initialIndex} />);
	const increment = screen.queryByRole('button', { name: 'INCREMENT' });

	fireEvent.click(increment);

	const current = parseInt(screen.getByTestId('current').textContent, 10);
	t.is(current, initialIndex);
});

test('when on the last index and wrap=true, the INCREMENT action wraps to the beginning', (t) => {
	const initialIndex = DEFAULT_SIZE - 1;
	render(<Fixture initialIndex={initialIndex} wrap />);
	const increment = screen.queryByRole('button', { name: 'INCREMENT' });

	fireEvent.click(increment);

	const current = parseInt(screen.getByTestId('current').textContent, 10);
	t.is(current, 0);
});

test('the DECREMENT action decreases the index by 1', (t) => {
	const initialIndex = 2;
	render(<Fixture initialIndex={initialIndex} />);
	const decrement = screen.queryByRole('button', { name: 'DECREMENT' });

	fireEvent.click(decrement);

	const current = parseInt(screen.getByTestId('current').textContent, 10);
	t.is(current, initialIndex - 1);
});

test('when on the first index and wrap=false, the DECREMENT action does not move the index', (t) => {
	const initialIndex = 0;
	render(<Fixture initialIndex={initialIndex} />);
	const decrement = screen.queryByRole('button', { name: 'DECREMENT' });

	fireEvent.click(decrement);

	const current = parseInt(screen.getByTestId('current').textContent, 10);
	t.is(current, initialIndex);
});

test('when on the first index and wrap=true, the DECREMENT action wraps to the end', (t) => {
	const initialIndex = 0;
	render(<Fixture initialIndex={initialIndex} wrap />);
	const decrement = screen.queryByRole('button', { name: 'DECREMENT' });

	fireEvent.click(decrement);

	const current = parseInt(screen.getByTestId('current').textContent, 10);
	t.is(current, DEFAULT_SIZE - 1);
});

test('the GOTO action moves the stepper to the specified index', (t) => {
	const initialIndex = 2;
	const gotoIndex = 4;
	render(<Fixture initialIndex={initialIndex} gotoIndex={gotoIndex} />);
	const goto = screen.queryByRole('button', { name: 'GOTO' });

	fireEvent.click(goto);

	const current = parseInt(screen.getByTestId('current').textContent, 10);
	t.is(current, gotoIndex);
});

test('when greater than the size, the GOTO action moves the stepper to the last index', (t) => {
	const initialIndex = 2;
	const gotoIndex = DEFAULT_SIZE + 1;
	render(<Fixture initialIndex={initialIndex} gotoIndex={gotoIndex} />);
	const goto = screen.queryByRole('button', { name: 'GOTO' });

	fireEvent.click(goto);

	const current = parseInt(screen.getByTestId('current').textContent, 10);
	t.is(current, DEFAULT_SIZE - 1);
});

test('when less than 0, the GOTO action moves the stepper to the first index', (t) => {
	const initialIndex = 2;
	const gotoIndex = -1;
	render(<Fixture initialIndex={initialIndex} gotoIndex={gotoIndex} />);
	const goto = screen.queryByRole('button', { name: 'GOTO' });

	fireEvent.click(goto);

	const current = parseInt(screen.getByTestId('current').textContent, 10);
	t.is(current, 0);
});

test('dispatching an invalid action type does nothing', (t) => {
	render(<Fixture />);
	const invalidAction = screen.queryByRole('button', { name: 'INVALID' });

	fireEvent.click(invalidAction);

	const current = parseInt(screen.getByTestId('current').textContent, 10);
	t.is(current, 0);
});
