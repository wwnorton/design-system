import React from 'react';
import classNames from 'classnames';
import { action } from '@storybook/addon-actions';
import {
	withKnobs, boolean, text,
} from '@storybook/addon-knobs';
import './index.stories.scss';
import { MultipleChoice, MultipleChoiceProps } from '.';
import { Choice } from '../Choice';

export default {
	title: 'MultipleChoice',
	component: MultipleChoice,
	decorators: [withKnobs],
};

const { defaultProps } = MultipleChoice;
const prompt = 'Which of the following is a vegetable?';

export const Default: React.FunctionComponent = () => (
	<MultipleChoice
		prompt={text('Prompt', prompt)}
		description={text('Description', 'Descriptive text about this item.')}
		multiselect={boolean('Multiselect', defaultProps.multiselect)}
		feedbackOnChoice={boolean('Feedback on choice', defaultProps.feedbackOnChoice)}
		onChoice={action('onChoice')}
	>
		<Choice value="Apple" />
		<Choice value="Banana" />
		<Choice value="Green Bean" />
		<Choice value="Tomato" />
	</MultipleChoice>
);

export const WithFeedback: React.FunctionComponent = () => {
	const correct = 'Green Bean';
	const callFakeApi = async (value: React.ReactText): Promise<boolean> => value === correct;
	function shuffle<T>(a: T[]): T[] {
		for (let i = a.length - 1; i > 0; i -= 1) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];	// eslint-disable-line no-param-reassign
		}
		return a;
	}
	const opts = [
		'Apple',
		'Banana',
		'Tomato',
		correct,
	].map((value) => <Choice value={value} key={value} />);

	const [choices, setChoices] = React.useState<JSX.Element[]>(shuffle(opts));

	const choiceHandler: MultipleChoiceProps['onChoice'] = async ([value]) => {
		const isCorrect = await callFakeApi(value);
		// eslint-disable-next-line no-alert
		window.alert(`${value} is ${(isCorrect) ? 'correct!' : 'incorrect.'}`);

		const choiceIndex = choices.findIndex((c) => c.props.value === value);
		const { props } = choices[choiceIndex];
		const newProps = {
			...props,
			icon: (isCorrect) ? 'check' : 'close',
			className: classNames({
				correct: isCorrect === true,
				incorrect: isCorrect === false,
			}),
		};

		const updatedChoices = [...choices];
		const newChoice = React.cloneElement(choices[choiceIndex], newProps);
		updatedChoices[choiceIndex] = newChoice;

		setChoices(updatedChoices);
	};

	return (
		<MultipleChoice
			prompt={prompt}
			description="Clicking an option will trigger immediate feedback and then disable that option."
			feedbackOnChoice
			name="fruit-or-veg"
			onChoice={choiceHandler}
		>
			{ choices }
		</MultipleChoice>
	);
};
