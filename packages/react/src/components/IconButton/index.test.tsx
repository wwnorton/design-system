import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import IconButton from '.';

test('renders its defaults', (t) => {
	const component = renderer.create(<IconButton icon="close">Close</IconButton>);
	t.snapshot(component.toJSON());
});
