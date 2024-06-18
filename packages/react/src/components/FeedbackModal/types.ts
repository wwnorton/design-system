import { ModalProps } from '../Modal';

export type FeedbackModalProps = Omit<ModalProps, 'title'> & {
	/**
	 * If the general feedback to give is "correct".
	 *
	 * @default false
	 */
	isCorrect?: boolean;

	/**
	 * The label which identifies the selected choice
	 */
	choiceLabel: string;

	/**
	 * The text of the selected choice
	 */
	choiceText: React.ReactNode;
};
