import test from 'ava';
import React from 'react';
import { cleanup, render, screen, queryAllByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextField, TextFieldUncontrolled } from '.';

test.afterEach(cleanup);

const noop = () => {}; // eslint-disable-line @typescript-eslint/no-empty-function
const defaultLabel = 'Text field';

// maintenance note: this is duplicated in ChoiceField/Checkbox/Radio
test('the text field `<input>` is labelled by its `<label>`', async (t) => {
	render(<TextField>{defaultLabel}</TextField>);
	t.truthy(screen.queryByText(defaultLabel));
	t.truthy(screen.queryByLabelText(defaultLabel));
});

// maintenance note: this is duplicated in ChoiceField/Checkbox/Radio
test('a required text field renders its required indicator as part of the label', async (t) => {
	render(
		<TextField required requiredIndicator>
			{defaultLabel}
		</TextField>,
	);
	const label = screen.getByText(defaultLabel);
	const indicator = screen.getByText('(required)');
	t.true(label.contains(indicator));
});

// maintenance note: this is duplicated in ChoiceField/Checkbox/Radio
test('an optional checkbox renders its optional indicator as part of the label', async (t) => {
	render(<TextField optionalIndicator>{defaultLabel}</TextField>);
	const label = screen.getByText(defaultLabel);
	const indicator = screen.getByText('(optional)');
	t.true(label.contains(indicator));
});

test('validation errors are rendered in the field feedback on DOM `change` by default', async (t) => {
	const user = userEvent.setup();
	const label = 'Email';

	render(<TextField type="email">{label}</TextField>);

	// focus the input, enter text, and then unfocus it
	await user.tab();
	await user.keyboard('abc');
	await user.tab();

	const errList = screen.getByRole('list', { name: 'Errors' });
	t.truthy(errList);
	t.is(queryAllByRole(errList, 'listitem').length, 1);
});

test('validation errors are not rendered in the field feedback on DOM `input` by default', async (t) => {
	const user = userEvent.setup();
	const label = 'Email';

	render(<TextField type="email">{label}</TextField>);

	// focus the input, enter text, but don't unfocus it
	await user.tab();
	await user.keyboard('abc');

	const errList = screen.queryByRole('list', { name: 'Errors' });
	t.falsy(errList);
});

test('validation errors are rendered in the field feedback on DOM `input` when `validateOnChange` is true', async (t) => {
	const user = userEvent.setup();
	const label = 'Email';

	render(
		<TextField type="email" validateOnChange>
			{label}
		</TextField>,
	);

	await user.tab();
	await user.keyboard('abc');

	const errList = screen.queryByRole('list', { name: 'Errors' });
	t.truthy(errList);
});

test('the error list is not rendered when there are no errors', async (t) => {
	const user = userEvent.setup();
	const label = 'Email';

	render(<TextField type="email">{label}</TextField>);

	// focus the input, enter text, and then unfocus it
	await user.tab();
	await user.keyboard('abc@domain.tld');
	await user.tab();

	const errList = screen.queryByRole('list', { name: 'Errors' });
	t.falsy(errList);
});

test('invalid input is reflected in both constraint validation and in ARIA', async (t) => {
	const user = userEvent.setup();
	const label = 'Email';

	render(<TextField type="email">{label}</TextField>);
	const input = screen.getByLabelText(label) as HTMLInputElement;

	await user.tab();
	await user.keyboard('abc');
	await user.tab();

	t.false(input.validity.valid);
	t.is(input.getAttribute('aria-invalid'), 'true');
});

test('the character counter counts down as `value` changes when `maxLength` is defined', async (t) => {
	render(
		<TextField maxLength={10} value="abc" onChange={noop}>
			{defaultLabel}
		</TextField>,
	);
	t.truthy(screen.getByText('7/10 characters remaining'));
});

test("the character counter doesn't appear until the `counterStart` threshold is met", async (t) => {
	const { rerender } = render(
		<TextField maxLength={10} counterStart={8} value="" onChange={noop}>
			{defaultLabel}
		</TextField>,
	);
	t.falsy(screen.queryByText('10/10 characters remaining'));

	rerender(
		<TextField maxLength={10} counterStart={8} value="abc" onChange={noop}>
			{defaultLabel}
		</TextField>,
	);
	t.truthy(screen.getByText('7/10 characters remaining'));
});

test("a programmatically-set value overwrites the user's input", async (t) => {
	const user = userEvent.setup();
	const CURRENT_PAGE_ID = 'current-page';
	const TwoWayBinding = (): JSX.Element => {
		const [pageNumber, setPageNumber] = React.useState('');

		const handleChange = React.useCallback(
			(e) => {
				const { value } = e.target;
				setPageNumber(value.slice(0, 6));
			},
			[setPageNumber],
		);

		const setPageNumberTo76 = React.useCallback(() => {
			setPageNumber('76');
		}, [setPageNumber]);

		return (
			<div className="App">
				<p data-testid={CURRENT_PAGE_ID}>{pageNumber}</p>
				<TextField value={pageNumber} onChange={handleChange} />
				<button type="button" onClick={setPageNumberTo76}>
					Set page number to 76
				</button>
			</div>
		);
	};

	render(<TwoWayBinding />);
	const button = screen.getByRole('button');

	await user.tab();
	await user.keyboard('74');
	await user.tab();

	t.is(screen.getByTestId(CURRENT_PAGE_ID).textContent, '74');

	// change value
	await user.click(button);
	t.is(screen.getByTestId(CURRENT_PAGE_ID).textContent, '76');
});

test('single addon elements rendered as-is', async (t) => {
	render(<TextField addonAfter={<button type="button">Show</button>}>{defaultLabel}</TextField>);
	t.truthy(screen.getByRole('button', { name: 'Show' }));
});

test('multiple addon elements rendered as-is', async (t) => {
	render(
		<TextField
			addonAfter={
				<>
					<button type="button">Show</button>
					<button type="button">Hide</button>
				</>
			}
		>
			{defaultLabel}
		</TextField>,
	);
	t.truthy(screen.getByRole('button', { name: 'Show' }));
	t.truthy(screen.getByRole('button', { name: 'Hide' }));
});

test('addon strings are rendered as-is', async (t) => {
	render(<TextField addonAfter={<button type="button">Show</button>}>{defaultLabel}</TextField>);
	t.truthy(screen.getByText('Show'));
});

test('an uncontrolled text field manages its own state', async (t) => {
	const user = userEvent.setup();

	render(<TextFieldUncontrolled>{defaultLabel}</TextFieldUncontrolled>);
	const input = screen.getByRole('textbox') as HTMLInputElement;

	await user.tab();
	await user.keyboard('abc');
	await user.tab();

	t.is(input.value, 'abc');
});

test('text field renders a <textarea> when multiline is set', async (t) => {
	render(<TextField multiline>{defaultLabel}</TextField>);
	t.truthy(screen.getByRole('textbox') as HTMLTextAreaElement);
});

// This can't be tested without a layout engine, which JSDOM does not have
test('text field renders as <textarea> element within oninput autoSize', async (t) => {
	const user = userEvent.setup();

	render(
		<TextField multiline autoSize>
			{defaultLabel}
		</TextField>,
	);
	const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;

	await user.tab();
	await user.keyboard('{Enter}');

	t.notDeepEqual(textarea.rows, 2);
});

// This can't be tested without a layout engine, which JSDOM does not have
test('text field renders as <textarea> element within onchange autoSize', async (t) => {
	const user = userEvent.setup();

	render(
		<TextField multiline autoSize>
			{defaultLabel}
		</TextField>,
	);
	const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;

	await user.tab();
	await user.keyboard('{Enter}');

	t.notDeepEqual(textarea.rows, 2);
});
