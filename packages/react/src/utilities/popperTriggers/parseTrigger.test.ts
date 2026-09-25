import test from 'ava';
import { hasPopperTrigger, parsePopperTrigger } from './parseTrigger';

test('parsePopperTrigger splits space-separated tokens', (t) => {
	t.deepEqual(
		[...parsePopperTrigger('focus-visible pointerenter')],
		['focus-visible', 'pointerenter'],
	);
});

test('hasPopperTrigger does not treat focus-visible as focus', (t) => {
	t.false(hasPopperTrigger('focus-visible pointerenter', 'focus'));
	t.true(hasPopperTrigger('focus-visible pointerenter', 'focus-visible'));
});
