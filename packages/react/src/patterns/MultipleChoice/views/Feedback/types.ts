import { ModalProps } from '@wwnds/react';

export type FeedbackProps = Omit<ModalProps, 'title'> & {
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
	choiceText: string;
};
