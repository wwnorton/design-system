import React from 'react';
import { RadioGroup } from '../../components/Radio';
import { ResponseIndicator } from '../../components/ResponseIndicator';
import { AnswerChoice } from './AnswerChoice';
import { Instructions } from './Instructions';
import { Intro } from './Intro';
import { Stem } from './Stem';
import { styles } from './styles';
import { LabelType, OnSelectInput } from './types';
import { resolveLabelType } from './utils';

export interface MultipleChoiceProps {
	stem: string | React.ReactElement<void, typeof Stem>;
	intro?: string | React.ReactElement<void, typeof Intro>;
	instructions?: string | React.ReactElement<void, typeof Instructions>;
	choices: string[];
	/**
	 * @default 'lower-alpha'
	 */
	labelType?: LabelType;
	status: 'correct' | 'incorrect' | 'unanswered';
	onSelect?: (input: OnSelectInput) => void;
	selected?: number;
	// TODO: support styling pieces
}

export const MultipleChoice = ({
	stem,
	intro,
	instructions,
	labelType = 'lower-alpha',
	choices,
	status,
	onSelect,
	selected,
}: MultipleChoiceProps) => {
	const introElement = typeof intro === 'string' ? <Intro>{intro}</Intro> : intro;
	const stemElement = typeof stem === 'string' ? <Stem>{stem}</Stem> : stem;
	const instructionsElement =
		typeof instructions === 'string' ? <Instructions>{instructions}</Instructions> : instructions;

	return (
		<div>
			{introElement}
			{stemElement}
			{instructionsElement}
			<div>
				<RadioGroup label={undefined}>
					{choices.map((choice, index) => {
						const isCorrect = status === 'correct' && index === selected;
						const isIncorrect = status === 'incorrect' && index === selected;
						const label = resolveLabelType(labelType, index);

						let feedback: React.ReactNode = null;
						if (isCorrect) {
							feedback = (
								<ResponseIndicator className={styles.feedback} withIcon={false} variant="correct" />
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

						// TODO: think a way to allow control of response indicator layout
						//
						// TODO: use grid to solve issues with incorrect response
						// indicator
						return (
							<div key={label} className={styles.choice}>
								{feedback}
								<div>
									<AnswerChoice label={label} checked={checked} value={index} onSelect={onSelect}>
										{choice}
									</AnswerChoice>
								</div>
							</div>
						);
					})}
				</RadioGroup>
			</div>
		</div>
	);
};
