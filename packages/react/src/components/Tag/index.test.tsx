import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
} from '@testing-library/react';
import { Tag } from '.';

test.afterEach(cleanup);

const defaultLabel = 'Sample Tag';

test('a tag is rendered', (t) => {
	render(<Tag>{ defaultLabel }</Tag>);
	t.truthy(screen.getByText(defaultLabel));
});
