import test from 'ava';
import React from 'react';
import {
	cleanup, render, screen,
} from '@testing-library/react';
import { Spinner } from '.';

test.afterEach(cleanup);

test('renders variant determinate with progress value 25 ', (t) => {
	const progressValue = 25;
	render(<Spinner variant="determinate" value={progressValue} />);
	t.truthy(screen.getByRole('status'));
});

test('renders progress indicator color change', (t) => {
	render(<Spinner color="red" />);
	t.truthy(screen.getByRole('status'));
});
