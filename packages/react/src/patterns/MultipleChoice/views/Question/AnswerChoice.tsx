import React, { useCallback } from 'react';
import { Radio } from '../../../../components/Radio';
import { styles } from './styles';
import { AnswerChoiceProps } from './types';

export const AnswerChoice = ({
	label,
	children,
	onSelect,
	index,
	checked,
	name,
	disabled,
}: AnswerChoiceProps) => {
	const onChange = useCallback(() => {
		if (index === undefined || !label || !onSelect) {
			return;
		}
		onSelect({ index, label });
	}, [onSelect, index, label]);

	return (
		<Radio onChange={onChange} checked={checked} name={name} disabled={disabled && !checked}>
			<span className={styles.choiceLabel}>{label}. </span>
			<span>{children}</span>
		</Radio>
	);
};
