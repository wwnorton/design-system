import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from '.';

test('renders its defaults', (t) => {
	const component = renderer.create(<Icon variant="close" />);
	t.snapshot(component.toJSON());
});

test('a non-existent variant doesn\'t render an icon', (t) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
	// @ts-ignore
	const component = renderer.create(<Icon variant="huzzah" />);
	t.is(component.toJSON(), null);
});

test('is visible to the accessibility tree if a label is provided', (t) => {
	const label = 'Close';
	const component = renderer.create(<Icon variant="close" label={label} />);
	const icon = component.root.findByType('svg');
	t.is(icon.props['aria-label'], label);
	t.is(icon.props['aria-hidden'], undefined);
	t.snapshot(component.toJSON());
});

test('setting a width causes height to be undefined', (t) => {
	const width = '48';
	const component = renderer.create(<Icon variant="close" width={width} />);
	const icon = component.root.findByType('svg');
	t.is(icon.props.height, undefined);
	t.snapshot(component.toJSON());
});
