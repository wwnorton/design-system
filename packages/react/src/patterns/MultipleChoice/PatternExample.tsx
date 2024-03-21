import React, { useCallback } from 'react';
import { Button } from '../../components/Button';
import { FeedbackModal } from '../../components/FeedbackModal';
import { MultipleChoice } from './MultipleChoice';
import { useMultipleChoice } from './useMultipleChoice';

interface PatternExampleProps {
	choices: string[];
}

export const PatternExample = ({ choices }: PatternExampleProps) => {
	const { questionState, setStatus, modalState } = useMultipleChoice(choices);

	const handleSubmit = useCallback(
		(event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			setStatus('correct');
		},
		[setStatus],
	);

	return (
		<form onSubmit={handleSubmit}>
			<MultipleChoice
				intro="Three people are present when a pregnant person suddenly goes into labor and gives birth in a bank lobby."
				stem="Which of the people is likely to best remember the event afterward?"
				instructions="Select one that applies. You have 2 attempts remaining."
				{...questionState}
			/>
			<FeedbackModal {...modalState} />
			<div>
				<Button type="submit" variant="solid" color="primary">
					Submit
				</Button>
			</div>
		</form>
	);
};
