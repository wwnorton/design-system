import test from 'ava';
import React from 'react';
import {
	render, screen,
} from '@testing-library/react';
import { Badge } from '.';

test('by default Badge variant pill is rendered', (t) => {
	render(<Badge>99</Badge>);
	t.truthy(screen.getByText('99'));
});

test('a Badge variant dot is rendered', (t) => {
	render(<Badge dot>99</Badge>);
	t.truthy(screen.getByText('99'));
});
