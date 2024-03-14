import React, { useCallback } from 'react';
import { Radio } from '../Radio';
import { styles } from './styles';
import { OnSelectInput } from './types';

interface AnswerChoiceProps {
	label?: string;
	checked?: boolean;
	value?: number;
	onSelect?: (input: OnSelectInput) => void;
	children: React.ReactNode;
}

export const AnswerChoice = ({
	label, children, onSelect, value, checked,
}: AnswerChoiceProps) => {
	const onChange = useCallback(() => {
		if (value === undefined || !label || !onSelect) { return; }
		onSelect({ index: value, label });
	}, [onSelect, value, label]);

	return (
		<Radio onChange={onChange} checked={checked}>
			<span className={styles.choiceLabel}>
				{label}
				.
				{' '}
			</span>
			<span>
				{children}
			</span>
		</Radio>
	);
};
