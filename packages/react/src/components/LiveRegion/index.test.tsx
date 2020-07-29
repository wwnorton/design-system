import test from 'ava';
import React from 'react';
import {
	cleanup, render, screen, waitFor,
} from '@testing-library/react';
import { LiveRegion } from '.';

test.afterEach(cleanup);

const defaultContents = 'Foo bar';

test('live regions only update when their contents change', async (t) => {
	const { rerender } = render(<LiveRegion />);
	rerender(<LiveRegion>{ defaultContents }</LiveRegion>);
	await waitFor(() => {
		t.truthy(screen.getByText(defaultContents));
	});
});
