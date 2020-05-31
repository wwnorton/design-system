import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '.';

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

test('renders a valid icon variant', (t) => {
	const component = renderer.create(<Button icon="close">Foo</Button>);
	t.snapshot(component.toJSON());
});

test('renders a valid icon variant on the right', (t) => {
	const component = renderer.create(<Button icon="close" iconRight>Foo</Button>);
	t.snapshot(component.toJSON());
});

test('an iconOnly button sets its children as the button title and the icon\'s aria-label', (t) => {
	const text = 'Foo';
	const component = renderer.create(<Button icon="close" iconOnly>{ text }</Button>);
	const btn = component.root.findByType('button');
	const icon = component.root.findByType('svg');
	t.is(btn.props.title, text);
	t.is(icon.props['aria-label'], text);
	t.snapshot(component.toJSON());
});
