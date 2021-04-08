import test from 'ava';
import React from 'react';
import {
	cleanup, render, screen,
} from '@testing-library/react';
import { useForwardedRef } from './hook';

test.afterEach(cleanup);

type FixtureProps = { onChange: (buttonRef?: HTMLButtonElement | null) => void; };
const Fixture = React.forwardRef<HTMLButtonElement, FixtureProps>(({
	onChange,
}: FixtureProps, ref) => {
	const [button, setButton] = useForwardedRef(ref);

	React.useEffect(() => {
		if (onChange) onChange(button);
	}, [button, onChange]);

	return (
		<button type="button" ref={setButton}>
			Button
		</button>
	);
});

test('should create a new ref when none is forwarded', (t) => {
	let innerRef: HTMLButtonElement;
	render(<Fixture onChange={(ref) => { innerRef = ref; }} />);

	t.is(innerRef, screen.getByRole('button'));
});

test('should use a forwarded ref object when provided', (t) => {
	const outerRef = React.createRef<HTMLButtonElement>();

	let innerRef: HTMLButtonElement;
	render(<Fixture onChange={(ref) => { innerRef = ref; }} ref={outerRef} />);

	t.is(innerRef, screen.getByRole('button'));
	t.is(innerRef, outerRef.current);
});

test('should use a forwarded ref function when provided', (t) => {
	let outerRef: HTMLButtonElement | null = null;
	const setOuterRef = (el) => { outerRef = el; };

	let innerRef: HTMLButtonElement;
	render(<Fixture onChange={(ref) => { innerRef = ref; }} ref={setOuterRef} />);

	t.is(innerRef, screen.getByRole('button'));
	t.is(innerRef, outerRef);
});
