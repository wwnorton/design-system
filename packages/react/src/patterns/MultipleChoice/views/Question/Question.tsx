import React from 'react';
import { RadioGroup } from '../../../../components/Radio';
import { ResponseIndicator } from '../../../../components/ResponseIndicator';
import { useId } from '../../../../utilities/id';
import { AnswerChoice } from './AnswerChoice';
import { Instructions } from './QuestionInstructions';
import { QuestionFraming } from './QuestionFraming';
import { QuestionStem } from './QuestionStem';
import { styles } from './styles';
import { QuestionProps } from './types';
import { resolveLabelType } from './utils';

export const Question = ({
	stem,
	framing,
	instructions,
	identifierType = 'lower-alpha',
	choices,
	status,
	onSelect,
	selected,
	readOnly,
}: QuestionProps) => {
	const groupName = useId() || '';
	const framingElement =
		typeof framing === 'string' ? <QuestionFraming>{framing}</QuestionFraming> : framing;
	const stemElement = typeof stem === 'string' ? <QuestionStem>{stem}</QuestionStem> : stem;
	const instructionsElement =
		typeof instructions === 'string' ? <Instructions>{instructions}</Instructions> : instructions;

	return (
		<div>
			{framingElement}
			{stemElement}
			{instructionsElement}
			<div>
				<RadioGroup label={undefined}>
					{choices.map((choice, index) => {
						const isCorrect = status === 'correct' && index === selected;
						const isIncorrect = status === 'incorrect' && index === selected;
						const label = resolveLabelType(identifierType, index);

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
									<AnswerChoice
										label={label}
										checked={checked}
										index={index}
										onSelect={onSelect}
										name={groupName}
										disabled={readOnly}
									>
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
