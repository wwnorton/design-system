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
	t.is(screen.getByLabelText('progressbar'), screen.getByRole('status'));
});

test('renders progress indicator color change', (t) => {
	render(<ProgressIndicator color="primary" />);
	t.is(screen.getByLabelText('progressbar'), screen.getByRole('status'));
});

test('renders progress indicator with label', (t) => {
	const labelText = 'loading images...';
	render(<ProgressIndicator color="primary" label={labelText} />);
	t.truthy(screen.getByText(labelText));
});
