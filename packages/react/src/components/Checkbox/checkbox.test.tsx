import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from '.';

test('Checkbox: renders its defaults', (t) => {
	const component = renderer.create(<Checkbox label="Checkbox" />);
	t.snapshot(component.toJSON());
});

test('Checkbox: set `help` with string', (t) => {
	const component = renderer.create(<Checkbox label="Checkbox" help="Help Text" />);
	t.snapshot(component.toJSON());
});

test('Checkbox: set `help` with a JSX element', (t) => {
	const Help = <p>Help text</p>;
	const component = renderer.create(<Checkbox label="Checkbox" help={Help} />);
	t.snapshot(component.toJSON());
});

test('Checkbox: displays error message', (t) => {
	const component = renderer.create(<Checkbox label="Checkbox" error="Error" required validateOnChange />);
	const input = component.root.findByType('input');
	input.props.onChange();
	t.snapshot(component.toJSON());
});
