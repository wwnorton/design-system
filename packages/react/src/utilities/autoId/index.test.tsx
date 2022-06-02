import { render, screen } from '@testing-library/react';
import test from 'ava';
import React from 'react';
import { useId } from './hook';

const Choice = ({ baseName = 'choice-' }) => {
	const id = useId();
	const choiceId = id ? `${baseName}${id}` : null;

	return (
		<div className="container">
			<p>
				This a test paragraph for
				{' '}
				{choiceId}
			</p>
			<input type="checkbox" id={choiceId} />
			<label htmlFor={choiceId}>
				This is the a label test for
				{' '}
				{choiceId}
			</label>
		</div>
	);
};

test('should render a checkbox with auto-generated id created with useId hook', (t) => {
	render(<Choice />);
	const input = screen.getByRole('checkbox');

	t.is(input.id, 'choice-1');
});
