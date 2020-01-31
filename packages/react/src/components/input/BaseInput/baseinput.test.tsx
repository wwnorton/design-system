import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import { BaseInput } from '.';

test('BaseInput: renders its defaults', (t) => {
	const component = renderer.create(<BaseInput />);
	t.snapshot(component.toJSON());
});

test.only('DOM change event triggers the onChangeNative callback', (t) => {
	const component = renderer.create(<BaseInput />);
	const input = component.root.findByType('input');
	const value = 'foo';
	input.props.onChangeNative({ value });
	t.is(input.props.value, value);
});

// test('TextField: validity', (t) => {
// 	const TestInput: React.FunctionComponent = () => {
// 		const [valid, setValid] = React.useState(true);
// 		const [errorMessage, setError] = React.useState('');
// 		const [validator, message] = [
// 			(value: string): boolean => !(/^foo$/.test(value)),
// 			'Must begin with foo',
// 		];

// 		const handleValidate = (validity: ValidityState) => {
// 			if (!validity.valid) {
// 				setValid(false);
// 			} else {
// 				setValid(true);
// 			}

// 			if (validity.customError) {
// 				setError(message);
// 			} else {
// 				setError('');
// 			}
// 		};

// 		return (
// 			<div className="some-input">
// 				<BaseInput onValidate={handleValidate} validator={[validator, message]} />
// 				{ !valid && <div className="error">{ errorMessage }</div> }
// 			</div>
// 		);
// 	};
// });
