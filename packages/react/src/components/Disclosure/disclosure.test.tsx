import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import Disclosure from '.';

test('Disclosure: renders its defaults', (t) => {
	const component = renderer.create(<Disclosure />);
	t.snapshot(component.toJSON());
});
