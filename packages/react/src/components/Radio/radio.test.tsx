import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import Radio from '.';

const childrenTextMatch = (fixture: JSX.Element) => (
	testComponent: renderer.ReactTestInstance,
): boolean => testComponent.children.toString() === fixture.props.children.toString();

test('renders its defaults', (t) => {
	const component = renderer.create(<Radio label="Radio" />);
	t.snapshot(component.toJSON());
});

test('all <label> elements reference the <input> via the [htmlFor] prop', (t) => {
	t.plan(2);	// 2 labels: text and control
	const component = renderer.create(<Radio label="Radio" />);
	const { id } = component.root.findByType('input').props;
	const labels = component.root.findAllByType('label');
	labels.forEach((label) => {
		t.is(label.props.htmlFor, id);
	});
});

test('label[htmlFor] updates when a custom id is provided', (t) => {
	t.plan(3);
	const id = 'test-id';
	const component = renderer.create(<Radio label="Radio" id={id} />);
	const labels = component.root.findAllByType('label');
	labels.forEach((label) => {
		t.is(label.props.htmlFor, id);
	});
	t.snapshot(component.toJSON());
});

test('renders a help string', (t) => {
	const component = renderer.create(<Radio label="Radio" help="Help Text" />);
	t.snapshot(component.toJSON());
});

test('renders a help element', (t) => {
	const Help = <p>Help Text</p>;
	const component = renderer.create(<Radio label="Radio" help={Help} />);
	t.snapshot(component.toJSON());
});

test('renders a label element with associated control', (t) => {
	t.plan(4);
	// eslint-disable-next-line jsx-a11y/label-has-associated-control
	const Label = <label>Radio</label>;
	const component = renderer.create(<Radio label={Label} />);
	const { id } = component.root.findByType('input').props;
	const labels = component.root.findAllByType('label');
	t.true(labels.some(childrenTextMatch(Label)));
	labels.forEach((label) => {
		t.is(label.props.htmlFor, id);
	});
	t.snapshot(component.toJSON());
});

test('renders a thumbnail element', (t) => {
	t.plan(4);	// 3 labels + snapshot
	const Thumbnail = <img src="http://www.wwnorton.com/some-img.jpg" alt="Alt text" />;
	const component = renderer.create(<Radio label="Radio" thumbnail={Thumbnail} />);
	const { id } = component.root.findByType('input').props;
	const labels = component.root.findAllByType('label');
	labels.forEach((label) => {
		t.is(label.props.htmlFor, id);
	});
	t.snapshot(component.toJSON());
});

test('a custom baseName results in new BEM classes', (t) => {
	const baseName = 'foo';
	const component = renderer.create(<Radio label="Radio" baseName="foo" />);
	const input = component.root.findByType('input');
	t.is(input.props.className, `${baseName}__${Radio.bemElements.input}`);
	t.snapshot(component.toJSON());
});
