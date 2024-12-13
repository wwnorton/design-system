/**
 * The Question and Feedback views are named generically and then exported with
 * the MultipleChoice prefix so that we can reuse the views for patterns that
 * may not be "multiple choice" question types.
 */

export { Question as MultipleChoiceQuestion } from './views/Question';
export type { QuestionProps as MultipleChoiceQuestionProps } from './views/Question';

export { Feedback as MultipleChoiceFeedback } from './views/Feedback';
export type { FeedbackProps as MultipleChoiceFeedbackProps } from './views/Feedback';

export * from './hooks';
