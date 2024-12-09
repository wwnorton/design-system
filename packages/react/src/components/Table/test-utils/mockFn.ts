export interface MockFn<T extends CallableFunction> {
	fn: CallableFunction;
	mockImplementation: (fn: T) => void;
}

// FIXME: we should use a mocking library
export function mockFn<T extends CallableFunction>(fn: T): MockFn<T> {
	const mock: any = {
		fn,
	};

	mock.mockImplementation = (newFn: T) => {
		mock.fn = newFn;
	};

	return mock;
}
