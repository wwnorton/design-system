import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import { Switch } from '.';

test('renders its defaults', (t) => {
	const component = renderer.create(<Switch />);
	t.snapshot(component.toJSON());
});

test('the switch\'s state is reflected by aria-checked', (t) => {
	const component = renderer.create(<Switch />);
	const btn = component.root.findByType('button');
	t.is(btn.props['aria-checked'], 'false');
	t.snapshot(component.toJSON(), 'initial state');

	btn.props.onClick();
	t.is(btn.props['aria-checked'], 'true');
	t.snapshot(component.toJSON(), 'after clicking');
});

test('the state indicator can be disabled', (t) => {
	const component = renderer.create(<Switch hideState />);
	const spans = component.root.findAllByType('span');
	t.is(spans.length, 0);
});

test('the state indicator can be customized', (t) => {
	const props = {
		on: 'On!',
		off: 'Off!',
	};
	const component = renderer.create(<Switch {...props} />);
	const btn = component.root.findByType('button');
	const span = component.root.findByType('span');
	t.is(span.props.children.toString(), props.off);
	t.snapshot(component.toJSON(), 'initial state');

	btn.props.onClick();
	t.is(span.props.children.toString(), props.on);
	t.snapshot(component.toJSON(), 'after clicking');
});
