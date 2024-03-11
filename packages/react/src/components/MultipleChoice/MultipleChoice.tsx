import React from 'react';
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
	onChange?: (event: React.ChangeEvent<HTMLFieldSetElement>) => void;
	selected?: number;
}

type LabelType = 'lower-alpha' | 'upper-alpha' | 'lower-roman' | 'upper-roman' | 'decimal';

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
	index?: number;
	children: React.ReactNode;
}
export const AnswerChoice = ({ index = 0, children }: AnswerChoiceProps) => {
	const label = React.useContext(LabelCtx);
	return (
		<Choice>
			<span className={styles.choiceLabel}>
				{`${resolveLabelType(label, index)}. `}
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
	onChange,
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
				<ChoiceField label={undefined} onChange={onChange}>
					<LabelCtx.Provider value={labelType}>
						{
							React.Children.map(
								children,
								(child, index) => {
									const isCorrect = status === 'correct' && index === selected;
									const isIncorrect = status === 'incorrect' && index === selected;

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

									// TODO: use grid to solve issues with incorrect response
									// indicator
									return (
										<div className={styles.choice}>
											{feedback}
											{React.cloneElement(child, { index } as any)}
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
