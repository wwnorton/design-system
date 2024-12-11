import { RadioProps } from 'packages/react/src/components';
import { Instructions } from './QuestionInstructions';
import { QuestionFraming } from './QuestionFraming';
import { QuestionStem } from './QuestionStem';

/**
 * The format for the answer choice identifier. A subset of options borrowed from CSS's
 * [list style type](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type#values).
 */
export type AnswerChoiceIdentifierType =
	| 'lower-alpha'
	| 'upper-alpha'
	| 'lower-roman'
	| 'upper-roman'
	| 'decimal';

export interface QuestionProps {
	/**
	 * Introductory content that provides additional context for the question.
	 * This can include any type of content, including but not limited to text, images, and video.
	 */
	framing?: string | React.ReactElement<void, typeof QuestionFraming>;
	/** The text-only prompt. Answer choices are responses to the question stem. */
	stem: string | React.ReactElement<void, typeof QuestionStem>;
	/**
	 * Instructions about the constraints for answering the question. Unlike the
	 * stem and framing, this should not contain subject matter related to the question.
	 */
	instructions?: string | React.ReactElement<void, typeof Instructions>;
	/** The list of potential answers the question. */
	choices: string[];
	/**
	 * The type for the letter or number that identifies the choice.
	 * @default 'lower-alpha'
	 */
	identifierType?: AnswerChoiceIdentifierType;
	/** The current state of the question. */
	status: 'correct' | 'incorrect' | 'unanswered';
	/** Callback function that is called when the user selects a choice. */
	onSelect?: (choice: ChoiceObject) => void;
	/** The index of the currently selected answer choice. */
	selected?: number;
	/** When in read only, the user can no longer select a new answer. */
	readOnly?: boolean;
	// TODO: support styling pieces
}

type ChoiceObject = {
	/** The choice's label describes the option. */
	label: string;
	/** The choice's position in the list of choices. */
	index: number;
};

export interface AnswerChoiceProps extends Pick<RadioProps, 'name' | 'disabled'> {
	/** The choice's label describes the option. */
	label?: string;
	/** The choice's position in the list of choices. */
	index?: number;
	/** Whether the answer choice is currently selected. */
	checked?: boolean;
	/** Callback function that is called when the user selects a choice. */
	onSelect?: (choice: ChoiceObject) => void;
	/** The node(s) that will be rendered inside the choice. */
	children: React.ReactNode;
}
