import test from 'ava';
import { renderHook } from '@testing-library/react';
import matchMediaPolyfill from 'mq-polyfill';
import { useMediaQuery } from './hook';

test.before(() => {
	matchMediaPolyfill(window);
	window.resizeTo = function resizeTo(width, height) {
		Object.assign(this, {
			innerWidth: width,
			innerHeight: height,
			outerWidth: width,
			outerHeight: height,
		}).dispatchEvent(new this.Event('resize'));
	};
	window.resizeTo(400, 400);
});

test("should be false when the media query doesn't match", (t) => {
	const { result } = renderHook(() => useMediaQuery('(min-width: 600px)'));

	t.false(result.current);
});

test('should be true when the conditions of the query match', (t) => {
	window.resizeTo(800, 800);
	const { result } = renderHook(() => useMediaQuery('(min-width: 600px)'));

	t.true(result.current);
});
