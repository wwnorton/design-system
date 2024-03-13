import React, { useCallback } from 'react';
import { Choice, ChoiceField } from '../ChoiceField';
import { ResponseIndicator } from '../ResponseIndicator';

const prefix = 'nds-multiple-choice';

const styles = {
	stem: `${prefix}__stem`,
	intro: `${prefix}__intro`,
	instructions: `${prefix}__instructions`,
	choiceLabel: `${prefix}__choice-label`,
	feedback: `${prefix}__feedback`,
	choice: `${prefix}__choice`,
};

const QuestionStem = ({ children }: React.PropsWithChildren<unknown>) => {
	console.log('QuestionStem');
	return <div className={styles.stem}>{children}</div>;
};

const QuestionIntro = ({ children }: React.PropsWithChildren<unknown>) => {
	console.log('QuestionIntro');
	return <div className={styles.intro}>{children}</div>;
};

const QuestionInstructions = ({ children }: React.PropsWithChildren<unknown>) => {
	console.log('QuestionInstructions');
	return <div className={styles.instructions}>{children}</div>;
};

interface QuestionState {
	status: 'correct' | 'incorrect' | 'unanswered';
	onSelect?: (input: OnSelectInput) => void;
	selected?: number;
}

type LabelType = 'lower-alpha' | 'upper-alpha' | 'lower-roman' | 'upper-roman' | 'decimal';

type OnSelectInput = {
	label: string;
	index: number;
};

interface MultipleChoiceProps extends QuestionState {
	stem: string | React.ReactElement<void, typeof QuestionStem>;
	intro?: string | React.ReactElement<void, typeof QuestionIntro>;
	instructions?: string | React.ReactElement<void, typeof QuestionIntro>;
	children: React.ReactElement<void, typeof AnswerChoice>[];
	/**
	 * @default 'lower-alpha'
	 */
	labelType?: LabelType;
}

const LabelCtx = React.createContext<LabelType>('lower-alpha');

const RomanLiterals = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'];

function resolveLabelType(labelType: LabelType, index: number) {
	switch (labelType) {
		case 'lower-alpha':
			return String.fromCharCode(97 + index);
		case 'upper-alpha':
			return String.fromCharCode(65 + index);
		case 'lower-roman':
			return RomanLiterals[index];
		case 'upper-roman':
			return RomanLiterals[index].toUpperCase();
		case 'decimal':
			return String(index + 1);
		default:
			throw new Error(`Invalid label type: ${labelType}`);
	}
}

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
		<Choice onChange={onChange} checked={checked}>
			<span className={styles.choiceLabel}>
				{label}
				.
				{' '}
			</span>
			<span>
				{children}
			</span>
		</Choice>
	);
};

export const MultipleChoice = ({
	stem,
	intro,
	instructions,
	children,
	labelType = 'lower-alpha',
	status,
	onSelect,
	selected,
}: MultipleChoiceProps) => {
	const introElement = typeof intro === 'string' ? <QuestionIntro>{intro}</QuestionIntro> : intro;
	const stemElement = typeof stem === 'string' ? <QuestionStem>{stem}</QuestionStem> : stem;
	const instructionsElement = typeof instructions === 'string' ? <QuestionInstructions>{instructions}</QuestionInstructions> : instructions;

	return (
		<div>
			{introElement}
			{stemElement}
			{instructionsElement}
			<div>
				<ChoiceField label={undefined}>
					<LabelCtx.Provider value={labelType}>
						{
							React.Children.map(
								children,
								(child, index) => {
									const isCorrect = status === 'correct' && index === selected;
									const isIncorrect = status === 'incorrect' && index === selected;
									const label = resolveLabelType(labelType, index);

									let feedback: React.ReactNode = null;
									if (isCorrect) {
										feedback = (
											<ResponseIndicator
												className={styles.feedback}
												withIcon={false}
												variant="correct"
											/>
										);
									} else if (isIncorrect) {
										feedback = (
											<ResponseIndicator
												className={styles.feedback}
												withIcon={false}
												variant="incorrect"
											/>
										);
									} else {
										feedback = <div className={styles.feedback} />;
									}

									const checked = index === selected;

									// TODO: use grid to solve issues with incorrect response
									// indicator
									return (
										<div className={styles.choice}>
											{feedback}
											{React.cloneElement(child, {
												label, checked, value: index, onSelect,
											} as any)}
										</div>
									);
								},
							)
						}
					</LabelCtx.Provider>
				</ChoiceField>
			</div>
		</div>
	);
};
