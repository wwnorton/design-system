import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox, { CheckboxProps } from '.';

test('renders its defaults', (t) => {
	const component = renderer.create(<Checkbox label="Checkbox" />);
	t.snapshot(component.toJSON());
});

test('renders a checked input', (t) => {
	const component = renderer.create(<Checkbox label="Checkbox" checked />);
	const input = component.root.findByType('input');
	t.true(input.props.checked);
	t.snapshot(component.toJSON());
});

test('renders a help string', (t) => {
	const component = renderer.create(<Checkbox label="Checkbox" help="Help Text" />);
	t.snapshot(component.toJSON());
});

test('renders a help element', (t) => {
	const Help = <p>Help text</p>;
	const component = renderer.create(<Checkbox label="Checkbox" help={Help} />);
	t.snapshot(component.toJSON());
});

test('a custom baseName results in new BEM classes', (t) => {
	const baseName = 'foo';
	const component = renderer.create(<Checkbox label="Text field" baseName={baseName} />);
	const label = component.root.findByType('label');
	t.is(label.props.className, `${baseName}__${Checkbox.bemElements.label}`);
	t.snapshot(component.toJSON());
});

// TODO: make this test work
test.skip('displays an error message', (t) => {
	let err = [];
	const onValidate: CheckboxProps['onValidate'] = ({ errors }): void => { err = errors; };
	const component = renderer.create(<Checkbox label="Checkbox" required validateOnChange onValidate={onValidate} />);
	const input = component.root.findByType('input');
	input.props.onChange({ target: { checked: false } });
	t.true(err.length > 0);
	t.snapshot(component.toJSON());
});
