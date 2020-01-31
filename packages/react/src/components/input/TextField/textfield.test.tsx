import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import { TextField } from '.';

test('renders its defaults', (t) => {
	const component = renderer.create(<TextField label="Text field" />);
	t.snapshot(component.toJSON());
});

test('required fields do not contain the optional string in their label', (t) => {
	const labelProp = 'Required text field';
	const component = renderer.create(<TextField required label={labelProp} />);
	const label = component.root.find(({ type }) => type === 'label');
	t.deepEqual(label.props.children, [labelProp, false, false]);
	t.snapshot(component.toJSON());
});

test('a custom baseName results in new BEM classes', (t) => {
	const baseName = 'foo';
	const component = renderer.create(<TextField label="Text field" baseName={baseName} />);
	const label = component.root.findByType('label');
	t.is(label.props.className, `${baseName}__${TextField.bemElements.label}`);
	t.snapshot(component.toJSON());
});

test.todo('renders label with an element');
test.todo('renders help with an element');
test.todo('counter element doesn\'t appear before counterStart');
test.todo('renders a custom counter function');
test.todo('onCount is triggered when the characters remaining is updated');
test.todo('errors appear when invalid on DOM change');
test.todo('errors appear when invalid on React change');
