import test from 'ava';
import React from 'react';
import {
	cleanup, render, screen,
} from '@testing-library/react';
import { ProgressIndicator } from '.';

test.afterEach(cleanup);

test('renders variant determinate with progress value 25 ', (t) => {
	const progressValue = 25;
	render(<ProgressIndicator variant="determinate" progressValue={progressValue} />);
	t.is(screen.getByLabelText('progressbar'), screen.getByRole('progressbar'));
});

test('renders changing custom color', (t) => {
	render(<ProgressIndicator color="primary" />);
	t.is(screen.getByLabelText('progressbar'), screen.getByRole('progressbar'));
});

test('renders changing custom color', (t) => {
	render(<ProgressIndicator color="primary" />);
	t.is(screen.getByLabelText('progressbar'), screen.getByRole('progressbar'));
});
