import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import Switch from '.';

test('Switch: renders its defaults', (t) => {
	const component = renderer.create(<Switch />);
	t.snapshot(component.toJSON());
});
