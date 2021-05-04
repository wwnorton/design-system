/* eslint-disable react/require-default-props */
import test from 'ava';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { ErrorBoundary } from '../../../test/helpers/ErrorBoundary';
import { toElements } from '.';

test.afterEach(cleanup);

const ITEMS = ['foo', 'bar', 'baz'];

const Fixture = (
	{ children, nodes, requiredProps }: {
		children?: React.ReactNode;
		nodes?: React.ReactNode;
		requiredProps?: string[];
	},
) => {
	const childElements = React.useMemo(
		() => toElements(nodes || children, requiredProps),
		[children, nodes, requiredProps],
	);
	return (
		<ul>
			{ childElements.map((el, i) => <li key={`item-${i + 1}`}>{ el }</li>)}
		</ul>
	);
};

test('a single number child is set as a single item', (t) => {
	const children = 2;
	render(<Fixture>{ children }</Fixture>);
	const items = screen.queryAllByRole('listitem');
	items.forEach((item) => {
		t.is(item.textContent, `${children}`);
	});
});

test('a single string child is set as a single item', (t) => {
	const children = '2';
	render(<Fixture>{ children }</Fixture>);
	const items = screen.queryAllByRole('listitem');
	items.forEach((item) => {
		t.is(item.textContent, children);
	});
});

test('an array of numbers and strings is set as separate items', (t) => {
	const children = [2, 'three', undefined, null];
	render(<Fixture>{ children }</Fixture>);
	const items = screen.queryAllByRole('listitem');
	items.forEach((item, i) => {
		t.is(item.textContent, `${children[i]}`);
	});
	t.is(items.length, 2);
});

test('React elements are mapped to elements', (t) => {
	render((
		<Fixture>
			<p>{ ITEMS[0] }</p>
			<p>{ ITEMS[1] }</p>
			<p>{ ITEMS[2] }</p>
		</Fixture>
	));
	const items = screen.queryAllByRole('listitem');
	items.forEach((item, i) => {
		t.is(item.textContent, `${ITEMS[i]}`);
	});
});

test('a React fragment\'s children are mapped to elements', (t) => {
	const children = (
		<>
			<p>{ ITEMS[0] }</p>
			<p>{ ITEMS[1] }</p>
			<p>{ ITEMS[2] }</p>
		</>
	);
	render(<Fixture>{ children }</Fixture>);
	const items = screen.queryAllByRole('listitem');
	items.forEach((item, i) => {
		t.is(item.textContent, `${ITEMS[i]}`);
	});
});

test('an array of React nodes are mapped to elements', (t) => {
	const children = [
		<p>{ ITEMS[0] }</p>,
		<span>{ ITEMS[1] }</span>,
		ITEMS[2],
	];
	render(<Fixture nodes={children} />);
	const items = screen.queryAllByRole('listitem');
	items.forEach((item, i) => {
		t.is(item.textContent, `${ITEMS[i]}`);
	});
});

test('an array of arrays are mapped to elements', (t) => {
	const children = [ITEMS];
	render(<Fixture nodes={children} />);
	const items = screen.queryAllByRole('listitem');
	items.forEach((item, i) => {
		t.is(item.textContent, `${ITEMS[i]}`);
	});
});

test('an array of objects are mapped to elements', (t) => {
	const children = ITEMS.map((item) => ({ children: item }));
	render(<Fixture>{ children }</Fixture>);
	const items = screen.queryAllByRole('listitem');
	items.forEach((item, i) => {
		t.is(item.textContent, `${ITEMS[i]}`);
	});
});

test('throws when objects are missing required props', (t) => {
	window.onerror = () => true;
	const children = ITEMS.map((item) => ({ children: item }));
	render((
		<ErrorBoundary>
			<Fixture requiredProps={['data-foo']}>{ children }</Fixture>
		</ErrorBoundary>
	));
	t.truthy(screen.queryByText((el) => el.startsWith('Missing required props')));
	t.is(screen.queryAllByRole('listitem').length, 0);
	window.onerror = () => null;
});

test('throws when invalid React nodes are provided', (t) => {
	window.onerror = () => true;
	render((
		<ErrorBoundary>
			<Fixture nodes={Symbol('foo')} />
		</ErrorBoundary>
	));
	t.truthy(screen.queryByText('Child nodes can be strings, numbers, or React Elements.'));
	t.is(screen.queryAllByRole('listitem').length, 0);
	window.onerror = () => null;
});

test('throws when elements are missing required props', (t) => {
	window.onerror = () => true;
	render((
		<ErrorBoundary>
			<Fixture requiredProps={['data-foo']}>
				<p>{ ITEMS[0] }</p>
				<p>{ ITEMS[1] }</p>
				<p>{ ITEMS[2] }</p>
			</Fixture>
		</ErrorBoundary>
	));
	t.truthy(screen.queryByText((el) => el.startsWith('Missing required props')));
	t.is(screen.queryAllByRole('listitem').length, 0);
	window.onerror = () => null;
});

test('does not throw when elements contain required props', (t) => {
	render((
		<ErrorBoundary>
			<Fixture requiredProps={['data-foo']}>
				<p data-foo="foo">{ ITEMS[0] }</p>
				<p data-foo="bar">{ ITEMS[1] }</p>
				<p data-foo="baz">{ ITEMS[2] }</p>
			</Fixture>
		</ErrorBoundary>
	));
	t.falsy(screen.queryByText((el) => el.startsWith('Missing required props')));
	t.is(screen.queryAllByRole('listitem').length, 3);
});

test('throws when an array of numbers and strings are used with required props', (t) => {
	window.onerror = () => true;
	const children = [2, 'three', undefined, null];
	render((
		<ErrorBoundary>
			<Fixture requiredProps={['foo']}>{ children }</Fixture>
		</ErrorBoundary>
	));
	t.truthy(screen.queryByText((el) => el.startsWith('Missing required props')));
	t.is(screen.queryAllByRole('listitem').length, 0);
	window.onerror = () => null;
});
