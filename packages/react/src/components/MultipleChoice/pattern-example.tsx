import React, { useCallback, useMemo, useState } from 'react';
import { Button } from '../Button';
import { AnswerChoice, MultipleChoice } from './MultipleChoice';

type MultipleChoiceStatus = 'unanswered' | 'correct' | 'incorrect';

function useMultipleChoice(): MultipleChoiceState {
	const [status, setStatus] = useState<MultipleChoiceStatus>('unanswered');
	const [selected, setSelected] = useState<number | undefined>(undefined);

	const questionState = useMemo(() => {
		const onSelect = (input: OnSelectInput) => {
			setSelected(input.index);
			setStatus('unanswered');
		};

		return {
			status,
			onSelect,
			selected,
		};
	}, [selected, status]);

	return {
		questionState,
		modalState: {
			isOpen: false,
		},
		setStatus,
	};
}

export const MultipleChoicePattern = () => {
	const { questionState, setStatus } = useMultipleChoice();

	const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setStatus('correct');
	}, [setStatus]);

	return (
		<form onSubmit={handleSubmit}>
			<MultipleChoice
				intro="Three people are present when a pregnant person suddenly goes into labor and gives birth in a bank lobby."
				stem="Which of the people is likely to best remember the event afterward?"
				instructions="Select one that applies. You have 2 attempts remaining."
				{...questionState}
			>
				<AnswerChoice>
					Jayvon, who had opened a checking account at the branch that same day
				</AnswerChoice>
				<AnswerChoice>
					Ibrahim, who is taking propranolol to control his blood pressure
				</AnswerChoice>
				<AnswerChoice>
					Huong, who was born with Urbach-Wiethe syndrome and lacks an amygdala
				</AnswerChoice>
			</MultipleChoice>
			<div><Button type="submit" variant="solid" color="primary">Submit</Button></div>
		</form>
	);
};

type OnSelectInput = {
	label: string;
	index: number;
};

interface MultipleChoiceState {
	questionState: {
		status: 'unanswered' | 'correct' | 'incorrect';
		onSelect?: (input: OnSelectInput) => void;
		selected?: number;
	};
	modalState: {
		isOpen: boolean;

	};
	setStatus: (status: MultipleChoiceStatus) => void;
}
