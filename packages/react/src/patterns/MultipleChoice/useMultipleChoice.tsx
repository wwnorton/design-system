import { useState, useEffect, useMemo } from 'react';
import { FeedbackModalProps } from '../../components/FeedbackModal/types';
import { MultipleChoiceStatus, OnSelectInput } from './types';

interface MultipleChoiceState {
	questionState: {
		status: 'unanswered' | 'correct' | 'incorrect';
		onSelect?: (input: OnSelectInput) => void;
		selected?: number;
		choices: string[];
	};
	modalState: Pick<
		FeedbackModalProps,
		'isOpen' | 'isCorrect' | 'choiceLabel' | 'choiceText' | 'onRequestClose'
	>;
	setStatus: (status: MultipleChoiceStatus) => void;
}

export function useMultipleChoice(choices: string[]): MultipleChoiceState {
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
