import test from 'ava';
import React from 'react';
import {
	cleanup, render, screen, fireEvent,
} from '@testing-library/react';
import { Tag } from '.';

test.afterEach(cleanup);

const defaultLabel = 'Tag Label';

test('rendered tag button by default', (t) => {
	render(<Tag>{ defaultLabel }</Tag>);
	t.truthy(screen.queryByRole('button'));
	t.truthy(screen.getByText(defaultLabel));
});

test('a tag is rendered with icon', (t) => {
	render(<Tag icon="calendar">{ defaultLabel }</Tag>);
	t.truthy(screen.queryByRole('img', { hidden: true }));
	t.truthy(screen.queryByRole('button'));
});
