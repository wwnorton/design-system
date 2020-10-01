import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen, queryAllByRole,
} from '@testing-library/react';
import { TextField } from '.';

test.afterEach(cleanup);

const defaultLabel = 'Text field';

// maintenance note: this is duplicated in ChoiceField/Checkbox/Radio
test('the text field `<input>` is labelled by its `<label>`', (t) => {
	render(<TextField>{ defaultLabel }</TextField>);
	t.truthy(screen.queryByText(defaultLabel));
	t.truthy(screen.queryByLabelText(defaultLabel));
});

// maintenance note: this is duplicated in ChoiceField/Checkbox/Radio
test('a required text field renders its required indicator as part of the label', (t) => {
	render(<TextField required requiredIndicator>{ defaultLabel }</TextField>);
	const label = screen.getByText(defaultLabel);
	const indicator = screen.getByText('(required)');
	t.true(label.contains(indicator));
});

// maintenance note: this is duplicated in ChoiceField/Checkbox/Radio
test('an optional checkbox renders its optional indicator as part of the label', (t) => {
	render(<TextField optionalIndicator>{ defaultLabel }</TextField>);
	const label = screen.getByText(defaultLabel);
	const indicator = screen.getByText('(optional)');
	t.true(label.contains(indicator));
});

test('validation errors are rendered in the field feedback on DOM `change` by default', (t) => {
	const label = 'Email';
	render(<TextField type="email">{ label }</TextField>);

	fireEvent.change(screen.getByLabelText(label), { target: { value: 'abc' } });
	const errList = screen.getByRole('list', { name: 'Errors' });
	t.truthy(errList);
	t.is(queryAllByRole(errList, 'listitem').length, 1);
});

test('validation errors are not rendered in the field feedback on DOM `input` by default', (t) => {
	const label = 'Email';
	render(<TextField type="email">{ label }</TextField>);

	fireEvent.input(screen.getByLabelText(label), { target: { value: 'abc' } });
	const errList = screen.queryByRole('list', { name: 'Errors' });
	t.falsy(errList);
});

test('validation errors are rendered in the field feedback on DOM `input` when `validateOnChange` is true', (t) => {
	const label = 'Email';
	render(<TextField type="email" validateOnChange>{ label }</TextField>);

	fireEvent.input(screen.getByLabelText(label), { target: { value: 'abc' } });
	const errList = screen.queryByRole('list', { name: 'Errors' });
	t.truthy(errList);
});

test('the error list is not rendered when there are no errors', (t) => {
	const label = 'Email';
	render(<TextField type="email">{ label }</TextField>);

	fireEvent.change(screen.getByLabelText(label), { target: { value: 'abc@domain.tld' } });
	const errList = screen.queryByRole('list', { name: 'Errors' });
	t.falsy(errList);
});

test('invalid input is reflected in both constraint validation and in ARIA', (t) => {
	const label = 'Email';
	render(<TextField type="email">{ label }</TextField>);
	const input = screen.getByLabelText(label) as HTMLInputElement;

	fireEvent.change(input, { target: { value: 'abc' } });
	t.false(input.validity.valid);
	t.is(input.getAttribute('aria-invalid'), 'true');
});

test('the character counter counts down as `value` changes when `maxLength` is defined', (t) => {
	render(<TextField maxLength={10} value='abc'>{ defaultLabel }</TextField>);
	t.truthy(screen.getByText('7/10 characters remaining'));
});

test('the character counter doesn\'t appear until the `counterStart` threshold is met', (t) => {
	const { rerender } = render((
		<TextField maxLength={10} counterStart={8}>{ defaultLabel }</TextField>
	));
	t.falsy(screen.queryByText('10/10 characters remaining'));

	rerender((
		<TextField maxLength={10} counterStart={8} value='abc'>{ defaultLabel }</TextField>
	));
	t.truthy(screen.getByText('7/10 characters remaining'));
});

test('a programmatically-set value overwrites the user\'s input', (t) => {
	const CURRENT_PAGE_ID = 'current-page';
	const TwoWayBinding = (): JSX.Element => {
		const [pageNumber, setPageNumber] = React.useState('');

		const handleChange = React.useCallback((e) => {
			const { value } = e.target;
			setPageNumber(value.slice(0, 6));
		}, [setPageNumber]);

		const setPageNumberTo76 = React.useCallback(() => {
			setPageNumber('76');
		}, [setPageNumber]);

		return (
			<div className="App">
				<p data-testid={CURRENT_PAGE_ID}>{ pageNumber }</p>
				<TextField value={pageNumber} onChange={handleChange} />
				<button
					type="button"
					onClick={setPageNumberTo76}
				>
					Set page number to 76
				</button>
			</div>
		);
	};

	render(<TwoWayBinding />);
	const button = screen.getByRole('button');
	const input = screen.getByRole('textbox');

	// user input
	fireEvent.change(input, { target: { value: '74' } });
	t.is(screen.getByTestId(CURRENT_PAGE_ID).textContent, '74');

	// change value
	fireEvent.click(button);
	t.is(screen.getByTestId(CURRENT_PAGE_ID).textContent, '76');
});
