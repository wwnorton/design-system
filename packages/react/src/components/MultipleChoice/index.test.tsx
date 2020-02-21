import test, { ExecutionContext } from 'ava';
import React from 'react';
import { create } from 'react-test-renderer';
import MultipleChoice, { MultipleChoiceProps } from '.';
import Choice from '../Choice';

interface InputChanger {
	(n: number, expected: number[]): void;
	assertionCount: number;
}

const createInputChanger = (
	el: Parameters<typeof create>[0],
	ctx: ExecutionContext,
): InputChanger => {
	const component = create(el);
	const inputs = component.root.findAllByType('input');
	const changer = (n: number, expected: number[]): void => {
		const { value } = inputs[n].props;
		inputs[n].props.onChange({ target: { value } });
		inputs.forEach(({ props }, i) => {
			const fn = (expected.includes(i)) ? ctx.true : ctx.false;
			fn(props.checked);
		});
		ctx.snapshot(component.toJSON(), `onChange triggered on ${value}`);
	};
	changer.assertionCount = inputs.length + 1;
	return changer;
};

const prompt = 'Which of the following is a vegetable?';
const options = ['Apple', 'Banana', 'Green Bean', 'Tomato'];

const MC: React.FunctionComponent<Partial<MultipleChoiceProps>> = (props) => (
	<MultipleChoice prompt={prompt} {...props}>
		{ options }
	</MultipleChoice>
);

test('renders its defaults with an array of string children', (t) => {
	const component = create(<MC />);
	t.snapshot(component.toJSON());
});

test('renders its defaults with Choice children', (t) => {
	const component = create((
		<MultipleChoice prompt={prompt}>
			<Choice value="Apple" />
			<Choice value="Banana" />
			<Choice value="Green Bean" />
			<Choice value="Tomato" />
		</MultipleChoice>
	));
	t.snapshot(component.toJSON());
});

test('renders a description', (t) => {
	const description = 'This is the description.';
	const component = create(<MC description={description} />);
	const desc = component.root.findByProps({
		className: MultipleChoice.defaultProps.descriptionClass,
	});
	t.is(desc.props.children, description);
	t.snapshot(component.toJSON());
});

test('renders checkboxes when multiselect=true and feedbackOnChoice=false', (t) => {
	t.plan(5);	// 4 inputs + snapshot
	const component = create(<MC multiselect />);
	const inputs = component.root.findAllByType('input');
	inputs.forEach((input) => {
		t.is(input.props.type, 'checkbox');
	});
	t.snapshot(component.toJSON());
});

test('renders buttons when feedbackOnChoice=true', (t) => {
	const component = create(<MC feedbackOnChoice />);
	const buttons = component.root.findAllByType('button');
	t.is(buttons.length, 4);
	t.snapshot(component.toJSON());
});

test('only one choice can be selected when multiselect=false', (t) => {
	const clickInput = createInputChanger(<MC />, t);
	t.plan(2 * clickInput.assertionCount);
	clickInput(3, [3]);
	clickInput(0, [0]);
});

// checkbox seems to be working differently from radio. need to resolve this.
test.failing('many choices can be selected when multiselect=true', (t) => {
	const clickInput = createInputChanger(<MC multiselect />, t);
	t.plan(4 * clickInput.assertionCount);
	clickInput(0, [0]);
	clickInput(1, [0, 1]);
	clickInput(2, [0, 1, 2]);
	clickInput(1, [0, 2]);
});
