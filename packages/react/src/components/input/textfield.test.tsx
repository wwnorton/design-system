import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import { TextField } from '.';

test('TextField: renders its defaults', (t) => {
	const component = renderer.create(<TextField label="Default text field" />);
	t.snapshot(component.toJSON());
});

test('TextField: required fields do not contain the optional string in their label', (t) => {
	const labelProp = 'Required text field';
	const component = renderer.create(<TextField required label={labelProp} />);
	const label = component.root.find(({ type }) => type === 'label');
	t.deepEqual(label.props.children, [labelProp, false, false]);
	t.snapshot(component.toJSON());
});

test.todo('TextField: set `label` with a  JSX element');
test.todo('TextField: set `help` with a JSX element');
