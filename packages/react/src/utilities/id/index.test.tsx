import { cleanup, render, screen } from '@testing-library/react';
import test from 'ava';
import React from 'react';
import { useId } from './hook';

test.afterEach(cleanup);

// Tests modified from @accessible/use-id
// https://github.com/accessible-ui/use-id/blob/master/src/index.test.tsx
const Comp = () => {
	const id0 = useId();
	const id1 = useId();

	return (
		<div>
			<div id={id0} data-testid="0">
				Wow
			</div>
			<div id={id1} data-testid="1">
				Ok
			</div>
		</div>
	);
};

test('generates different ids on every invocation', (t) => {
	render(<Comp />);

	const id0 = screen.getByTestId('0').id;
	const id1 = screen.getByTestId('1').id;

	t.not(id0, id1);
});

// TODO: set up an environment to test with React 18
test('uses React 18\'s useId when it\'s available', (t) => {
	render(<Comp />);

	const id0 = screen.getByTestId('0').id;

	const major = Number(React.version.split('.')[0]);

	t.true((major < 18) ? id0.startsWith('nds-') : id0.startsWith(':r'));
});
