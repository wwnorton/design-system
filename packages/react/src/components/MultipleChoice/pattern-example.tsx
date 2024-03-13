import React, {
	useCallback, useEffect, useMemo, useState,
} from 'react';
import { Button } from '../Button';
import { FeedbackModal } from '../FeedbackModal';
import { FeedbackModalProps } from '../FeedbackModal/types';
import { MultipleChoice } from './MultipleChoice';

type MultipleChoiceStatus = 'unanswered' | 'correct' | 'incorrect';

function useMultipleChoice(choices: string[]): MultipleChoiceState {
	const [status, setStatus] = useState<MultipleChoiceStatus>('unanswered');
	const [selected, setSelected] = useState<number | undefined>(undefined);
	const [modalOpen, setModalOpen] = useState(false);

	const questionState = useMemo(() => {
		const onSelect = (input: OnSelectInput) => {
			setSelected(input.index);
			setStatus('unanswered');
		};

		return {
			status,
			onSelect,
			selected,
			choices,
		};
	}, [choices, selected, status]);

	const modalState = useMemo(() => {
		console.log('modalState');
		return {
			isOpen: modalOpen,
			isCorrect: status === 'correct',
			// TODO: pass label somehow
			choiceLabel: 'a',
			choiceText: selected !== undefined ? choices[selected] : '',
			onRequestClose: () => {
				setModalOpen(false);
			},
		};
	}, [choices, modalOpen, selected, status]);

	useEffect(() => {
		// TODO: we don't want to open the modal if the default state is not 'unanswered'
		if (status !== 'unanswered') {
			setModalOpen(true);
		}
	}, [status]);

	return {
		questionState,
		modalState,
		setStatus,
	};
}

interface MultipleChoicePatternProps {
	choices: string[];
}

export const MultipleChoicePattern = ({ choices }: MultipleChoicePatternProps) => {
	const { questionState, setStatus, modalState } = useMultipleChoice(choices);

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
			/>
			<FeedbackModal {...modalState} />
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
		choices: string[];
	};
	modalState: Pick<FeedbackModalProps, 'isOpen' | 'isCorrect' | 'choiceLabel' | 'choiceText' | 'onRequestClose'>;
	setStatus: (status: MultipleChoiceStatus) => void;
}
