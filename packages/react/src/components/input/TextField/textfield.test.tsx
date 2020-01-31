import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import { TextField } from '.';

test('TextField: renders its defaults', (t) => {
	const component = renderer.create(<TextField label="Default text field" />);
	t.snapshot(component.toJSON());
});

test('TextField: required fields do not contain the optional string in their label', (t) => {
	const labelProp = 'Required text field';
	const component = renderer.create(<TextField required label={labelProp} />);
	const label = component.root.find(({ type }) => type === 'label');
	t.deepEqual(label.props.children, [labelProp, false, false]);
	t.snapshot(component.toJSON());
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

test.todo('TextField: set `label` with a  JSX element');
test.todo('TextField: set `help` with a JSX element');
