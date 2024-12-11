import { useState, useEffect, useMemo } from 'react';
import { AnswerChoiceProps } from '../views/Question/types';
import { MultipleChoiceState } from './types';

export function useMultipleChoice(choices: string[]): MultipleChoiceState {
	const [status, setStatus] =
		useState<MultipleChoiceState['questionState']['status']>('unanswered');
	const [selected, setSelected] = useState<number | undefined>(undefined);
	const [modalOpen, setModalOpen] = useState(false);

	const questionState = useMemo(() => {
		const onSelect: NonNullable<AnswerChoiceProps['onSelect']> = (choice) => {
			setSelected(choice.index);
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
