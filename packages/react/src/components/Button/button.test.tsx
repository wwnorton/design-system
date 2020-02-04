import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '.';

test('renders its defaults', (t) => {
	const component = renderer.create(<Button />);
	t.snapshot(component.toJSON());
});

test('a custom `baseName` is rendered as a className', (t) => {
	const baseName = 'btn';
	const component = renderer.create(<Button baseName={baseName} />);
	const btn = component.root.findByType('button');
	t.is(btn.props.className, baseName);
	t.snapshot(component.toJSON());
});

test('`variant` is converted into a BEM modifier class', (t) => {
	const variant = 'outline';
	const { baseName } = Button.defaultProps;
	const component = renderer.create(<Button variant={variant} />);
	const btn = component.root.findByType('button');
	t.is(btn.props.className, `${baseName} ${baseName}--${variant}`);
	t.snapshot(component.toJSON());
});
