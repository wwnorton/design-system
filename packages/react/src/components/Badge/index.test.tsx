import test from 'ava';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Badge } from '.';

test.afterEach(cleanup);

test('by default Badge variant pill is rendered', (t) => {
	render(<Badge>99</Badge>);
	t.truthy(screen.getByText('99'));
});

test('a Badge variant dot is rendered', (t) => {
	const dot = true;
	render(<Badge dot={dot}>99</Badge>);
	t.falsy(screen.queryByText('99'));
	t.truthy(screen.getByLabelText('has notification'));
});
