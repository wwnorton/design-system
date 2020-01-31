import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import { BaseInput } from '.';

test('BaseInput: renders its defaults', (t) => {
	const component = renderer.create(<BaseInput />);
	t.snapshot(component.toJSON());
});

// most of the internals should be tested via components that use BaseInput
