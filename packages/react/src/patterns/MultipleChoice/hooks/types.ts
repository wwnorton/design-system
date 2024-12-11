import { QuestionProps } from '../views/Question/types';
import { FeedbackProps } from '../views/Feedback/types';

export type MultipleChoiceStatus = 'unanswered' | 'correct' | 'incorrect';

type QuestionState = Pick<QuestionProps, 'status' | 'onSelect' | 'selected' | 'choices'>;

type FeedbackState = Pick<
	FeedbackProps,
	'isOpen' | 'isCorrect' | 'choiceLabel' | 'choiceText' | 'onRequestClose'
>;

export interface MultipleChoiceState {
	/** Props for the question component. */
	questionState: QuestionState;
	/** Props for the feedback component. */
	modalState: FeedbackState;
	/** A setter function that updates both the question and feedback state. */
	setStatus: (status: MultipleChoiceStatus) => void;
}
