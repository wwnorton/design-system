import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '.';

test('renders its defaults', (t) => {
	const component = renderer.create(<Button>Foo</Button>);
	t.snapshot(component.toJSON());
});

test('throws when no children are provided', (t) => {
	t.throws(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
		// @ts-ignore
		renderer.create(<Button />);
	}, null, Button.errors.noChildren);
});

test('a custom `baseName` is rendered as a className', (t) => {
	const baseName = 'btn';
	const component = renderer.create(<Button baseName={baseName}>Foo</Button>);
	const btn = component.root.findByType('button');
	t.is(btn.props.className, baseName);
	t.snapshot(component.toJSON());
});

test('`variant` is converted into a BEM modifier class', (t) => {
	const variant = 'outline';
	const { baseName } = Button.defaultProps;
	const component = renderer.create(<Button variant={variant}>Foo</Button>);
	const btn = component.root.findByType('button');
	t.is(btn.props.className, `${baseName} ${baseName}--${variant}`);
	t.snapshot(component.toJSON());
});
