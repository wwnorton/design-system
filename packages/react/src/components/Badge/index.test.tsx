import test from 'ava';
import React from 'react';
import {
	cleanup, render, screen,
} from '@testing-library/react';
import { Badge } from '.';

test.afterEach(cleanup);

const defaultLabel = 'Sample Badge';

test('a Badge is rendered', (t) => {
	render(<Badge>{ defaultLabel }</Badge>);
	t.truthy(screen.getByText(defaultLabel));
});
