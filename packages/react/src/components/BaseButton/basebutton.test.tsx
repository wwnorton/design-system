import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import BaseButton, { BaseButtonDefaults } from '.';

const { activeClass: defaultActiveClass } = BaseButtonDefaults;

test('renders its defaults', (t) => {
	const component = renderer.create(<BaseButton />);
	t.snapshot(component.toJSON());
});

test('event callbacks are triggered in addition to internal activation behavior', (t) => {
	t.plan(13);
	const actions = {
		keydown: 'keydown',
		keyup: 'keyup',
		blur: 'blur',
	};
	const ButtonTest: React.FunctionComponent = () => {
		const [current, setCurrent] = React.useState();
		const update = (val: string) => (): void => { setCurrent(val); };

		return (
			<BaseButton
				onKeyDown={update(actions.keydown)}
				onKeyUp={update(actions.keyup)}
				onBlur={update(actions.blur)}
			>
				{ current }
			</BaseButton>
		);
	};
	const component = renderer.create(<ButtonTest />);
	t.snapshot(component.toJSON(), 'initial render');

	const btn = component.root.findByType('button');

	const activate = (): void => {
		// trigger keydown and check className & contents
		btn.props.onKeyDown({ key: ' ' });
		t.is(btn.props.className, defaultActiveClass);
		t.is(btn.props.children, actions.keydown);
	};

	activate();
	t.snapshot(component.toJSON(), 'first keydown.space');

	// trigger keyup and check className & contents
	btn.props.onKeyUp({ key: ' ' });
	t.is(btn.props.className, '');
	t.is(btn.props.children, actions.keyup);
	t.snapshot(component.toJSON(), 'keyup.space');

	activate();
	t.snapshot(component.toJSON(), 'second keydown.space');

	// trigger blur and check className & contents
	btn.props.onBlur();
	t.is(btn.props.className, '');
	t.is(btn.props.children, actions.blur);
	t.snapshot(component.toJSON(), 'blur');
});

test('blur removes the `active` class', (t) => {
	const component = renderer.create(<BaseButton />);
	const btn = component.root.findByType('button');
	btn.props.onKeyDown({ key: ' ' });
	t.is(btn.props.className, defaultActiveClass);
	t.snapshot(component.toJSON(), 'keydown.space');

	btn.props.onBlur();
	t.is(btn.props.className, '');
	t.snapshot(component.toJSON(), 'blur');
});

test('non-space keydown does not add the `active` class', (t) => {
	const component = renderer.create(<BaseButton />);
	const btn = component.root.findByType('button');
	btn.props.onKeyDown({ key: 'Enter' });
	t.not(btn.props.className, defaultActiveClass);
	t.snapshot(component.toJSON(), 'keydown.enter');
});

test('non-space keyup does not remove the `active` class', (t) => {
	const component = renderer.create(<BaseButton />);
	const btn = component.root.findByType('button');
	btn.props.onKeyDown({ key: ' ' });
	t.is(btn.props.className, defaultActiveClass);
	t.snapshot(component.toJSON(), 'keydown.space');

	btn.props.onKeyUp({ key: 'Enter' });
	t.is(btn.props.className, defaultActiveClass);
	t.snapshot(component.toJSON(), 'keyup.enter');
});

test('a custom `activeClass` is set on keydown.space', (t) => {
	const active = 'custom-active';
	const component = renderer.create(<BaseButton activeClass={active} />);
	const btn = component.root.findByType('button');
	btn.props.onKeyDown({ key: ' ' });
	t.is(btn.props.className, active);
	t.snapshot(component.toJSON());
});

test('initially `active` is reflected in the className', (t) => {
	const component = renderer.create(<BaseButton active />);
	const btn = component.root.findByType('button');
	t.is(btn.props.className, defaultActiveClass);
	t.snapshot(component.toJSON());
});
