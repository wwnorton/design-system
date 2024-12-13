import test from 'ava';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { ResponseIndicator } from '.';

test.afterEach.always(cleanup);

test('Render correctly, icon and label', (t) => {
	render(<ResponseIndicator variant="correct" withIcon />);

	t.is(screen.getByLabelText('correct').textContent, 'correct');
	t.truthy(screen.getByRole('img', { hidden: true }));
});

test('Render correctly, only label', (t) => {
	render(<ResponseIndicator variant="correct" />);

	t.is(screen.getByLabelText('correct').textContent, 'correct');
	t.is(screen.queryByRole('img'), null);
});

test('Render correctly, a custom label', (t) => {
	const label = 'this is a custom label';
	render(<ResponseIndicator variant="correct" withIcon label={label} />);

	t.is(screen.getByLabelText(label).textContent, label);
});

test('Incorrect variant', (t) => {
	render(<ResponseIndicator variant="incorrect" withIcon />);

	t.is(screen.getByLabelText('incorrect').textContent, 'incorrect');
	t.truthy(screen.getByRole('img', { hidden: true }));
});
