import test from 'ava';
import React from 'react';
import { cleanup, render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useSelect } from './hook';
import { ErrorBoundary } from '../../../test/helpers/ErrorBoundary';

test.afterEach(cleanup);

const Fixture = ({
	multiple = false,
	handlerOnInput = false,
	initialValue,
	callSetSelected,
	useDefaults = false,
}: {
	multiple?: boolean;
	handlerOnInput?: boolean;
	initialValue?: string[];
	callSetSelected?: string;
	useDefaults?: boolean;
}): JSX.Element => {
	const parameters: Parameters<typeof useSelect> = useDefaults ? [] : [multiple, initialValue];
	const { selected, select, formChangeHandler } = useSelect(...parameters);

	React.useEffect(() => {
		if (callSetSelected) select(callSetSelected);
	}, [callSetSelected]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<fieldset onChange={handlerOnInput ? undefined : formChangeHandler}>
			{['one', 'two', 'three'].map((value) => (
				<input
					name="choice"
					type={multiple ? 'checkbox' : 'radio'}
					// eslint-disable-next-line @typescript-eslint/no-empty-function
					onChange={handlerOnInput ? formChangeHandler : () => {}}
					value={value}
					checked={selected.includes(value)}
					aria-label={value}
					key={value}
				/>
			))}
		</fieldset>
	);
};

test('the default hook has nothing selected', async (t) => {
	const { result } = renderHook(useSelect);

	t.deepEqual(result.current.selected, []);
});

test('an initial value is selected', async (t) => {
	const first = 'apple';
	const { result } = renderHook(() => useSelect(false, [first]));

	t.deepEqual(result.current.selected, [first]);
});

test('passing an array of initial values when in single-select throws an error', async (t) => {
	// suppress JSDOM errors in the log
	window.onerror = () => true;

	const InvalidSelect = () => {
		useSelect(false, ['apple', 'banana']);
		return <div />;
	};
	render(
		<ErrorBoundary>
			<InvalidSelect />
		</ErrorBoundary>,
	);

	t.truthy(screen.queryByText(useSelect.SELECT_OVERLOAD));

	window.onerror = null;
});

test('selecting a value updates the selected list', async (t) => {
	const name = 'two';
	render(<Fixture callSetSelected={name} useDefaults />);

	const initialInput = screen.queryByRole('radio', { name }) as HTMLInputElement;
	t.true(initialInput.checked);
});

test('single-select only selects one option at a time', async (t) => {
	const user = userEvent.setup();
	render(<Fixture multiple={false} />);

	const [one, two, three] = screen.getAllByRole('radio') as HTMLInputElement[];

	await user.click(one);
	t.true(one.checked);
	t.false(two.checked);
	t.false(three.checked);

	await user.click(two);
	t.false(one.checked);
	t.true(two.checked);
	t.false(three.checked);

	await user.click(three);
	t.false(one.checked);
	t.false(two.checked);
	t.true(three.checked);
});

test('multi-select selects multiple options', async (t) => {
	const user = userEvent.setup();
	render(<Fixture multiple />);

	const [one, two, three] = screen.getAllByRole('checkbox') as HTMLInputElement[];

	await user.click(one);
	t.true(one.checked);
	t.false(two.checked);
	t.false(three.checked);

	await user.click(two);
	t.true(one.checked);
	t.true(two.checked);
	t.false(three.checked);

	await user.click(three);
	t.true(one.checked);
	t.true(two.checked);
	t.true(three.checked);

	await user.click(one);
	t.false(one.checked);
	t.true(two.checked);
	t.true(three.checked);
});
