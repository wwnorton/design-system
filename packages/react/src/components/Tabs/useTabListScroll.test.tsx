import test from 'ava';
import { renderHook } from '@testing-library/react-hooks';
import { cleanup, act } from '@testing-library/react';
import { useTabListScroll } from './useTabListScroll';

test.afterEach.always(cleanup);

test('when at min', (t) => {
	const mockDiv = {
		scrollWidth: 2000,
		scrollLeft: 0,
		clientWidth: 500,
	};

	const delta = 100;
	const ref = { current: mockDiv as unknown as HTMLDivElement };

	const { result } = renderHook(() => useTabListScroll(ref, delta));

	t.deepEqual(result.current.atMinScroll, true);
	t.deepEqual(result.current.atMaxScroll, false);

	// Can't move left because we are already at the minimum scroll position.
	act(() => {
		result.current.moveLeft();
	});

	t.deepEqual(mockDiv.scrollLeft, 0);
	t.deepEqual(result.current.atMinScroll, true);

	// Moving right updates scroll position
	act(() => {
		result.current.moveRight();
	});

	t.deepEqual(mockDiv.scrollLeft, delta);
	t.deepEqual(result.current.atMinScroll, false);
	t.deepEqual(result.current.atMaxScroll, false);
});

test('when at max', (t) => {
	const mockDiv = {
		scrollWidth: 2000,
		// useTabListScroll doesn't handle initialization
		// at any other state that isn't at the minimum scroll position.
		scrollLeft: 0,
		clientWidth: 500,
	};

	const delta = 500;
	const ref = { current: mockDiv as unknown as HTMLDivElement };

	const { result } = renderHook(() => useTabListScroll(ref, delta));

	act(() => {
		result.current.moveRight();
		result.current.moveRight();
		result.current.moveRight();
	});

	t.deepEqual(result.current.atMinScroll, false);
	t.deepEqual(result.current.atMaxScroll, true);

	// Can't move right because we are already at the max scroll position.
	act(() => {
		result.current.moveRight();
	});

	t.deepEqual(mockDiv.scrollLeft, 1500);
	t.deepEqual(result.current.atMaxScroll, true);

	// Moving left updates scroll position
	act(() => {
		result.current.moveLeft();
	});

	t.deepEqual(mockDiv.scrollLeft, 1000);
	t.deepEqual(result.current.atMinScroll, false);
	t.deepEqual(result.current.atMaxScroll, false);
});
