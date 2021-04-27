import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
} from '@testing-library/react';
import { useSelect } from './hook';

test.afterEach(cleanup);

const Fixture = (
	{
		multiple,
		handlerOnInput,
		initialValue,
		callSetSelected,
		useDefaults,
	}: {
		multiple?: boolean;
		handlerOnInput?: boolean;
		initialValue?: string[];
		callSetSelected?: string;
		useDefaults?: boolean;
	},
): JSX.Element => {
	const parameters: Parameters<typeof useSelect> = (useDefaults) ? [] : [multiple, initialValue];
	const {
		selected,
		select,
		formChangeHandler,
	} = useSelect(...parameters);

	React.useEffect(() => {
		if (callSetSelected) select(callSetSelected);
	}, [callSetSelected]);	// eslint-disable-line react-hooks/exhaustive-deps

	return (
		<fieldset onChange={(handlerOnInput) ? undefined : formChangeHandler}>
			{ ['one', 'two', 'three'].map((value) => (
				<input
					name="choice"
					type={(multiple) ? 'checkbox' : 'radio'}
					// eslint-disable-next-line @typescript-eslint/no-empty-function
					onChange={(handlerOnInput) ? formChangeHandler : () => {}}
					value={value}
					checked={selected.includes(value)}
					aria-label={value}
					key={value}
				/>
			)) }
		</fieldset>
	);
};
Fixture.defaultProps = {
	multiple: false,
	handlerOnInput: false,
	initialValue: undefined,
	callSetSelected: undefined,
	useDefaults: false,
};

test('an initial value is checked', (t) => {
	const name = 'two';
	render(<Fixture initialValue={[name]} />);

	const initialInput = screen.queryByRole('radio', { name }) as HTMLInputElement;
	t.true(initialInput.checked);

	const inputs = screen.queryAllByRole('radio') as HTMLInputElement[];
	inputs.forEach((input) => {
		fireEvent.click(input);
		t.true(input.checked);
		t.is(inputs.filter(({ checked }) => checked).length, 1);
	});
});

test('calling setSelected updates the selected list', (t) => {
	const name = 'two';
	render(<Fixture callSetSelected={name} useDefaults />);

	const initialInput = screen.queryByRole('radio', { name }) as HTMLInputElement;
	t.true(initialInput.checked);

	const inputs = screen.queryAllByRole('radio') as HTMLInputElement[];
	inputs.forEach((input) => {
		fireEvent.click(input);
		t.true(input.checked);
		t.is(inputs.filter(({ checked }) => checked).length, 1);
	});
});

test('single-select with handler on fieldset only selects one option at a time', (t) => {
	render(<Fixture multiple={false} />);

	const inputs = screen.queryAllByRole('radio') as HTMLInputElement[];
	inputs.forEach((input) => {
		fireEvent.click(input);
		t.true(input.checked);
		t.is(inputs.filter(({ checked }) => checked).length, 1);
	});
});

test('single-select with handler on input only selects one option at a time', (t) => {
	render(<Fixture multiple={false} handlerOnInput />);

	const inputs = screen.queryAllByRole('radio') as HTMLInputElement[];
	inputs.forEach((input) => {
		fireEvent.click(input);
		t.true(input.checked);
		t.is(inputs.filter(({ checked }) => checked).length, 1);
	});
});

test('multi-select with handler on fieldset selects multiple options', (t) => {
	render(<Fixture multiple />);

	const inputs = screen.queryAllByRole('checkbox') as HTMLInputElement[];
	inputs.forEach((input, i) => {
		fireEvent.click(input);
		t.true(input.checked);
		t.is(inputs.filter(({ checked }) => checked).length, i + 1);
	});

	fireEvent.click(inputs[1]);
	t.false(inputs[1].checked);
});

test('multi-select with handler on input selects multiple options', (t) => {
	render(<Fixture multiple handlerOnInput />);

	const inputs = screen.queryAllByRole('checkbox') as HTMLInputElement[];
	inputs.forEach((input, i) => {
		fireEvent.click(input);
		t.true(input.checked);
		t.is(inputs.filter(({ checked }) => checked).length, i + 1);
	});

	fireEvent.click(inputs[1]);
	t.false(inputs[1].checked);
});
