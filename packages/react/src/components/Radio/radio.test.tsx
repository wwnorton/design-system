/* eslint-disable @typescript-eslint/no-empty-function */
import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import Radio from '.';

test('renders its defaults', (t) => {
	const component = renderer.create(<Radio
		label="Radio"
		updateState={(): void => {}}
		selectedValue="Radio"
	/>);
	t.snapshot(component.toJSON());
});

test('renders a help string', (t) => {
	const component = renderer.create(<Radio
		label="Radio"
		help="Help Text"
		updateState={(): void => {}}
		selectedValue="Radio"
	/>);
	t.snapshot(component.toJSON());
});

test('renders a help element', (t) => {
	const Help = <p>Help Text</p>;
	const component = renderer.create(<Radio
		label="Radio"
		help={Help}
		updateState={(): void => {}}
		selectedValue="Radio"
	/>);
	t.snapshot(component.toJSON());
});

test('renders a label element with associated control', (t) => {
	// eslint-disable-next-line jsx-a11y/label-has-associated-control
	const Label = <label>Radio</label>;
	const component = renderer.create(<Radio
		label={Label}
		updateState={(): void => {}}
		selectedValue="Radio"
	/>);
	const label = component.root.findByType('label');
	t.assert(label.props.htmlFor);
	t.snapshot(component.toJSON());
});

test('renders a thumbnail element', (t) => {
	const Thumbnail = <img src="http://www.wwnorton.com/some-img.jpg" alt="Alt text" />;
	const component = renderer.create(<Radio
		label="Radio"
		thumbnail={Thumbnail}
		updateState={(): void => {}}
		selectedValue="Radio"
	/>);
	t.snapshot(component.toJSON());
});

test('a custom baseName results in new BEM classes', (t) => {
	const baseName = 'foo';
	const component = renderer.create(<Radio
		label="Radio"
		baseName="foo"
		updateState={(): void => {}}
		selectedValue="Radio"
	/>);
	const label = component.root.findByType('label');
	t.is(label.props.className, `${baseName}__${Radio.bemElements.label}`);
	t.snapshot(component.toJSON());
});
