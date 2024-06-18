import { useState, useEffect, useMemo } from 'react';
import { FeedbackModalProps } from '../../components/FeedbackModal/types';
import { MultipleChoiceStatus, OnSelectInput } from './types';

type Choice = {
	text: React.ReactNode;
	feedback: React.ReactNode;
};

interface MultipleChoiceState {
	questionState: {
		status: 'unanswered' | 'correct' | 'incorrect';
		onSelect?: (input: OnSelectInput) => void;
		selected?: number;
		choices: React.ReactNode[];
	};
	modalState: Pick<
		FeedbackModalProps,
		'isOpen' | 'children' | 'isCorrect' | 'choiceLabel' | 'choiceText' | 'onRequestClose'
	>;
	setStatus: (status: MultipleChoiceStatus) => void;
}

export function useMultipleChoice(choices: Choice[]): MultipleChoiceState {
	const { texts, feedbacks } = useMemo(() => {
		const t = Array.from(choices, (choice) => choice.text);
		const f = Array.from(choices, (choice) => choice.feedback);
		return { texts: t, feedbacks: f };
	}, [choices]);

	console.log('========');
	console.log(texts, feedbacks);
	console.log('========');

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
			choices: texts,
		};
	}, [texts, selected, status]);

	const modalState = useMemo(() => {
		return {
			isOpen: modalOpen,
			isCorrect: status === 'correct',
			// TODO: pass label somehow
			choiceLabel: 'a',
			choiceText: selected !== undefined ? texts[selected] : '',
			children: selected !== undefined ? feedbacks[selected] : null,
			onRequestClose: () => {
				setModalOpen(false);
			},
		};
	}, [feedbacks, texts, modalOpen, selected, status]);

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
