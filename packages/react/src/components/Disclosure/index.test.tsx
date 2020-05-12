import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import Disclosure from '.';

test('renders its defaults', (t) => {
	const component = renderer.create(<Disclosure summary="Test" />);
	t.snapshot(component.toJSON());
});

test('renders an open disclosure', (t) => {
	const component = renderer.create(<Disclosure summary="Test" open />);
	t.snapshot(component.toJSON());
});

test('renders its children as content', (t) => {
	const component = renderer.create(<Disclosure summary="Test"><p>Contents</p></Disclosure>);
	t.snapshot(component.toJSON());
});

test('a custom baseName results in new BEM classes', (t) => {
	const baseName = 'foo';
	const component = renderer.create(<Disclosure summary="Test" baseName={baseName}><p>Contents</p></Disclosure>);
	const summary = component.root.findByType('summary');
	t.is(summary.props.className, `${baseName}__${Disclosure.bemElements.summary}`);
	t.snapshot(component.toJSON());
});

test('sets variant', (t) => {
	const component = renderer.create(<Disclosure summary="test" variant="panel"><p>Contents</p></Disclosure>);
	const details = component.root.findByType('details');
	t.assert(details.props.className.includes(`${Disclosure.bemBase}--panel`));
	t.snapshot(component.toJSON());
});
