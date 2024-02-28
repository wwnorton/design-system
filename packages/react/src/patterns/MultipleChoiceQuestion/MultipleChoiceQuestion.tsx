import React, {
	useMemo, useState, useCallback, FormEvent, ChangeEvent,
} from 'react';
import {
	ChoiceField, Choice, Button, Modal,
} from '../../components';

export const MultipleChoiceQuestion = () => {
	/**
	 * Mocked choices data
	 */
	const choicesData: {
		correct: string;
		choices: Array<{ id: string; label: string; text: string; feedback: string }>;
	} = useMemo(
		() => ({
			correct: 'choice-1',
			choices: [
				{
					id: 'choice-1',
					label: 'A',
					text: 'Jayvon, who had opened a checking account at the branch that same day',
					feedback: '<p>Answer 1 feedback lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
				},
				{
					id: 'choice-2',
					label: 'B',
					text: 'Answer feedback lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					feedback: '<p>Answer 2 feedback lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
				},
				{
					id: 'choice-3',
					label: 'C',
					text: 'Huong, who was born with Urbach-Wiethe syndrome and lacks an amygdala',
					feedback: '<p>Answer 3 feedback lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
				},
			],
		}),
		[],
	);

	const [state, setState] = useState<{
		selected: null | string;
		correct: null | boolean;
		feedbackOpen: boolean;
	}>({
		selected: null,
		correct: null,
		feedbackOpen: false,
	});

	const checkAnswer = useCallback((e: FormEvent) => {
		e.preventDefault();
		const isCorrect = state.selected === choicesData.correct;
		setState((prevState) => ({
			...prevState,
			correct: isCorrect,
			feedbackOpen: true,
		}));
	}, [state.selected, choicesData.correct]);

	const closeModal = useCallback(() => {
		setState((prevState) => ({
			...prevState,
			feedbackOpen: false,
		}));
	}, []);

	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setState((prevState) => ({
			...prevState,
			selected: e.currentTarget.value,
		}));
	}, []);

	const selectedChoice = useMemo(() => {
		const selected = choicesData.choices.find(({ id }) => id === state.selected);
		return selected;
	}, [choicesData.choices, state.selected]);

	return (
		<div>
			{/*
				The Question Intro (optional): introductory content that helps frame the question
			*/}
			<p>
				Three people are present when a pregnant
				person suddenly goes into labor and gives birth in a bank lobby.
			</p>
			{/*
				Question Steam: the prompt the user responds to
			*/}
			<p>
				Which of the people is likely to best remember the event afterward?
			</p>
			{/*
				Instructions (optional): if more than one attempt is available*
				text displaying how many attempts a user may submit an answer.
				Located after the Question stem and before answer choices.
			*/}
			<small>
				Select one that applies. You have 2 attempts remaining.
			</small>

			<form onSubmit={checkAnswer}>
				<ChoiceField label="Select an Answer">
					{choicesData.choices.map(({ id: choiceId, text, label }) => (
						<Choice
							value={choiceId}
							name="answer"
							key={choiceId}
							checked={choiceId === state.selected}
							onChange={onChange}
						>
							<span>
								{label}
								.
							</span>
							{text}
						</Choice>
					))}
				</ChoiceField>

				<Button type="submit">Submit</Button>
			</form>

			{/*
				Feedback Modal: a modal dialog that provides feedback about the
				chosen answer after it is submitted.
			*/}
			<Modal
				title={state.correct ? 'Correct' : 'Incorrect'}
				isOpen={state.feedbackOpen}
				onRequestClose={() => closeModal()}
			>
				{
					selectedChoice && (
						<div dangerouslySetInnerHTML={{ __html: selectedChoice.feedback }} />
					)
				}
			</Modal>
		</div>
	);
};
