import { ValidatorEntry } from '../../utilities';

export interface BaseTextAreaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	/**
	 * A list of validation errors. When the input is submitted in a form, the
	 * list will be concatenated into a single string with a new line separator.
	 */
	errors?: string[];
	/**
	 * A list of validators. A validator contains a function that tests the value
	 * for validity and a corresponding message that conveys why the test failed.
	 */
	validators?: ValidatorEntry[];
	/**
	 * Indicates that validation should occur when the DOM's `change` event is
	 * triggered. Note that this event is different from React's `onChange`
	 * callback, which triggers on the DOM's `input` event.
	 *
	 * Reference:
	 * - [MDN - `change event`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
	 */
	validateOnDOMChange?: boolean;
	/**
	 * Indicates that validation should occur when `onChange` is triggered. Alias
	 * of `validateOnInput`.
	 */
	validateOnChange?: boolean;
	/** Indicates that a `maxLength` value should prevent input beyond the `maxLength`. */
	maxLengthRestrictsInput?: boolean;
	/**
	 * A callback that will be triggered any time the DOM's `change` event is
	 * triggered. Note that this event is different from React's `onChange`
	 * event, which triggers on the DOM's `input` event.
	 *
	 * Reference:
	 * - [MDN - `change event`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
	 * - [MDN - `input event`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
	 */
	onDOMChange?: (e: Event) => void;
	/**
	 * A callback that will be triggered any time the input is validated. See
	 * related `validators`, `validateOnChange`, and `validateOnChange`.
	 */
	onValidate?: (errors: string[]) => void;
	/** Allow for multiple lines of input */
	multiline?: boolean | number;
	/**
	 * If `true` increase the height of textarea automatically
	 * only works when multiline prop it's `enable`
	 */
	autoSize?: boolean;
}
