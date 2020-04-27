import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from '.';

const options = [
	'Americium',
	'Berkelium',
	'Bohrium',
	'Californium',
];

test('renders its defaults', (t) => {
	const component = renderer.create((
		<Dropdown
			label="Choose an element"
			options={options}
		/>
	));
	t.snapshot(component.toJSON());
});
