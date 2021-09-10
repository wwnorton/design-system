import test from 'ava';
import React from 'react';
import {
	cleanup, render, screen,
} from '@testing-library/react';
import { LiveRegion } from '.';

test.afterEach(cleanup);

const defaultContents = 'Foo bar';

test.skip('live regions only update when their contents change', async (t) => {
	const { rerender } = render(<LiveRegion />);
	rerender(<LiveRegion>{ defaultContents }</LiveRegion>);
	t.truthy(await screen.findByText(defaultContents));
});
