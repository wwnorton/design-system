import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MultipleChoiceQuestion, MultipleChoiceFeedback, useMultipleChoice } from '.';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';

/**
 * These props are not part of the Multiple Choice pattern, but provide an example
 * of how users might implement functionality on top of the pattern.
 */
interface CustomStoryProps {
	attemptCount?: number;
}

type StoryProps = Omit<React.ComponentProps<typeof MultipleChoiceQuestion>, 'instructions'> &
	CustomStoryProps;

const MultipleChoice = ({ attemptCount, ...args }: StoryProps) => {
	const [readOnly, setReadOnly] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [remainingAttempts, setRemainingAttempts] = useState(attemptCount || 1);
	const { questionState, setStatus, modalState } = useMultipleChoice(args.choices);

	const handleSubmit = useCallback(
		(event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			switch (questionState.selected) {
				case undefined: {
					setModalOpen(true);
					setStatus('unanswered');
					break;
				}
				case 1: {
					setStatus('correct');
					setRemainingAttempts(0);
					break;
				}
				default: {
					setStatus('incorrect');
					if (attemptCount !== undefined) {
						setRemainingAttempts(remainingAttempts - 1);
					}
				}
			}
		},
		[setStatus, questionState.selected, attemptCount, remainingAttempts],
	);

	useEffect(() => {
		if (remainingAttempts === 0) setReadOnly(true);
	}, [remainingAttempts]);

	const instructions = useMemo(() => {
		if (attemptCount === undefined) {
			return undefined;
		}
		if (questionState.status === 'correct') {
			return 'Correct answer selected!';
		}
		return `Select an answer. You have ${remainingAttempts} attempts remaining.`;
	}, [questionState.status, attemptCount, remainingAttempts]);

	return (
		<form onSubmit={handleSubmit}>
			<MultipleChoiceQuestion
				instructions={instructions}
				readOnly={readOnly}
				{...args}
				{...questionState}
			/>
			<MultipleChoiceFeedback {...modalState} />
			<div>
				<Button type="submit" variant="solid" color="cyan">
					Submit
				</Button>
			</div>
			<Modal
				title="Selection required"
				isOpen={modalOpen}
				onRequestClose={() => setModalOpen(false)}
			>
				Please select an answer to receive feedback.
			</Modal>
		</form>
	);
};

const meta: Meta<StoryProps> = {
	title: 'Patterns/Multiple Choice',
	component: MultipleChoiceQuestion,
	render: MultipleChoice,
	args: {
		framing:
			'Three people are present when a pregnant person suddenly goes into labor and gives birth in a bank lobby.',
		stem: 'Which of the people is likely to best remember the event afterward?',
		choices: [
			'Jayvon, who had opened a checking account at the branch that same day',
			'Ibrahim, who is taking propranolol to control his blood pressure',
			'Huong, who was born with Urbach-Wiethe syndrome and lacks an amygdala',
		],
	},
};

export default meta;
type Story = StoryObj<StoryProps>;

export const Example: Story = {};

export const ExampleWithInstructions: Story = {
	args: {
		attemptCount: 2,
	},
};
