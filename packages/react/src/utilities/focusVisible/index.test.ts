import test from 'ava';
import { isFocusVisible } from './isFocusVisible';

test('isFocusVisible returns true when the focus-visible polyfill class is present', (t) => {
	const element = document.createElement('button');
	element.classList.add('focus-visible');

	t.true(isFocusVisible(element));
});

test('isFocusVisible returns true when data-focus-visible-added is present', (t) => {
	const element = document.createElement('button');
	element.setAttribute('data-focus-visible-added', '');

	t.true(isFocusVisible(element));
});

test('isFocusVisible returns false for a plain unfocused element', (t) => {
	const element = document.createElement('button');

	t.false(isFocusVisible(element));
});
