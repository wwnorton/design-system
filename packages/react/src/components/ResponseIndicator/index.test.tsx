import test from 'ava';
import React from 'react';
import {
	cleanup, render, screen,
} from '@testing-library/react';
import { ResponseIndicator, ResponseIndicatorProps } from '.';

test.afterEach.always(cleanup);

function createComponent(props: ResponseIndicatorProps) {
	return <ResponseIndicator {...props} />;
}

test('Render correctly, icon and label', (t) => {
	render(createComponent({
		variant: 'correct',
		withIcon: true,
	}));

	t.is(screen.getByLabelText('correct').textContent, 'correct');
	t.truthy(screen.getByRole('img', { hidden: true }));
});

test('Render correctly, only label', (t) => {
	render(createComponent({
		variant: 'correct',
		withIcon: false,
	}));

	t.is(screen.getByLabelText('correct').textContent, 'correct');
	t.is(screen.queryByRole('img'), null);
});

test('Render correctly, a custom label', (t) => {
	const label = 'this is a custom label';
	render(createComponent({
		variant: 'correct',
		label,
		withIcon: false,
	}));

	t.is(screen.getByLabelText(label).textContent, label);
});
