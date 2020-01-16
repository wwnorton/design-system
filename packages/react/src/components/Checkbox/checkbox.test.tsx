import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from '.';

test('Checkbox: renders its defaults', (t) => {
	const component = renderer.create(<Checkbox label="Checkbox" />);
	t.snapshot(component.toJSON());
});
