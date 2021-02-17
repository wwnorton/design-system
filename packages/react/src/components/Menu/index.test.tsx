import test from 'ava';
import React from 'react';
import {
	cleanup, render, screen,
} from '@testing-library/react';
import { Menu, MenuItem } from '.';

test.afterEach(cleanup);

test('renders a Menu and MenuItem when `isOpen`', (t) => {
	render(<Menu isOpen><MenuItem label='test' /></Menu>);
	t.truthy(screen.queryByRole('menu'));
	t.truthy(screen.queryByRole('menuitem'));
});
