import * as React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { BaseInput, DICTIONARY } from '../BaseInput';
import { noop } from '../../../utilities/events';

/**
 * BEM element names inside this component. These values will be used to
 * construct the final class names for each corresponding element.
 */
export const ELEMENTS = {
	LABEL: 'label',
	HELP: 'help',
	INPUT: 'input',
	FEEDBACK: 'feedback',
	ERROR: 'error',
	COUNT: 'count',
};

export type ChangeEvent = React.ChangeEvent<HTMLInputElement> | Event;

export type TextFieldType = 'text' | 'number' | 'email' | 'password' | 'url' | 'tel';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/** The type of text field. */
	type?: TextFieldType;
	/** The label for the input field. */
	label: string | JSX.Element;
	help?: string | JSX.Element;
	error?: string | JSX.Element;
	/** When the character count should begin showing. */
	countStart?: number;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** The className for the TextField's <label> element. */
	labelClass?: string;
	/** The className for the TextField's help text container. */
	helpClass?: string;
	/** The className for the TextField's <input> element. */
	inputClass?: string;
	/**
	 * The className for the TextField's feedback section, which contains the
	 * error text and character count.
	 */
	feedbackClass?: string;
	/** The className for the TextField's error text container. */
	errorClass?: string;
	/** The className for the TextField's character count container. */
	countClass?: string;
	/** Whether the valid state should be updated on `change` events. */
	validateOnChange?: boolean;
	/** Whether the valid state should be updated on `input` events. */
	validateOnInput?: boolean;
	/**
	 * Triggered when the DOM `change` event is triggered on the `<input>`.
	 * Note that this differs from React's normal onChange event to bring it in
	 * line with the DOM standard for `onchange`.
	 */
	onChange?: (e: ChangeEvent) => void;
	/** Triggered any time the validity of the `<input>` is checked. */
	onValidate?: (state: TextFieldState) => void;
	/** Triggered any time the number of characters remaining is updated. */
	onCount?: (state: TextFieldState) => void;
}

interface TextFieldState {
	valid: boolean;
	/** The number of allowed characters remaining. */
	charactersRemaining?: number;
}

export class TextField extends React.Component<TextFieldProps, TextFieldState> {
	private inputRef = React.createRef<HTMLInputElement>();
	private uid: string = uniqueId(`${DICTIONARY.PREFIX}${DICTIONARY.TEXTFIELD}-`);
	public static defaultProps = {
		type: 'text',
		baseName: 'textfield',
		countStart: 25,
		get labelClass(): string { return `${this.baseName}__${ELEMENTS.LABEL}`; },
		get helpClass(): string { return `${this.baseName}__${ELEMENTS.HELP}`; },
		get inputClass(): string { return `${this.baseName}__${ELEMENTS.INPUT}`; },
		get feedbackClass(): string { return `${this.baseName}__${ELEMENTS.FEEDBACK}`; },
		get errorClass(): string { return `${this.baseName}__${ELEMENTS.ERROR}`; },
		get countClass(): string { return `${this.baseName}__${ELEMENTS.COUNT}`; },
		validateOnChange: true,
		validateOnInput: false,
		onChange: noop,
		onInput: noop,
		onValidate: noop,
		onCount: noop,
	}

	constructor(props: TextFieldProps) {
		super(props);

		this.state = {
			valid: true,
			charactersRemaining: props.maxLength,
		};
	}

	componentDidMount(): void {
		if (this.inputRef && this.inputRef.current) {
			// ensure that the DOM's `change` event is triggered correctly
			this.inputRef.current.addEventListener('change', this.onChange);
		}
		this.updateCount();
	}

	validate = async (): Promise<void> => {
		const { onValidate } = this.props;
		if (this.inputRef && this.inputRef.current) {
			await this.setState({
				valid: this.inputRef.current.checkValidity(),
			});
			if (onValidate) onValidate(this.state);
		}
	}

	updateCount = async (): Promise<void> => {
		const { maxLength, onCount } = this.props;
		if (!maxLength) return;
		if (this.inputRef && this.inputRef.current) {
			await this.setState({
				charactersRemaining: maxLength - this.inputRef.current.value.length,
			});
			if (onCount) onCount(this.state);
		}
	}

	onChange = async (e: ChangeEvent): Promise<void> => {
		const { onChange, validateOnChange } = this.props;
		if (validateOnChange) await this.validate();
		if (onChange) onChange(e);
	}

	onInput = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
		const { onInput, validateOnInput } = this.props;
		if (validateOnInput) await this.validate();
		await this.updateCount();
		if (onInput) onInput(e);
	}

	private Label(value: string | JSX.Element): JSX.Element {
		const { baseName, required, labelClass } = this.props;
		const labelProps = {
			htmlFor: this.uid,
			className: labelClass,
		};
		// if the user passed an actual `<label>`, just apply the props to it
		if (typeof value !== 'string' && value.type().type === 'label') {
			return React.cloneElement(value, labelProps);
		}
		return (
			// eslint-disable-next-line jsx-a11y/label-has-associated-control
			<label {...labelProps}>
				{ value }
				{ !required && ' ' }
				{ !required && <span className={`${baseName}__optional`}>(optional)</span> }
			</label>
		);
	}

	private Help(value: string | JSX.Element): JSX.Element {
		const { helpClass } = this.props;
		const helpProps = {
			className: helpClass,
		};
		if (typeof value !== 'string') {
			return React.cloneElement(value, helpProps);
		}
		return <div {...helpProps}>{ value }</div>;
	}

	private InvalidFeedback(value: string | JSX.Element): JSX.Element {
		const { errorClass } = this.props;
		const invalidProps = {
			className: errorClass,
		};
		if (typeof value !== 'string') {
			return React.cloneElement(value, invalidProps);
		}
		return <div {...invalidProps}>{ value }</div>;
	}

	private CharacterCounter(current: number, max: number): JSX.Element {
		const { countClass } = this.props;
		const countProps = {
			className: countClass,
		};
		const feedback = `${current}/${max} characters remaining.`;
		return <div {...countProps}>{ feedback }</div>;
	}

	render(): JSX.Element {
		const {
			label,
			help,
			error,
			type,
			countStart,
			maxLength,
			baseName,
			// classes
			labelClass,
			helpClass,
			inputClass,
			feedbackClass,
			errorClass,
			countClass,
			// events
			onChange,
			onInput,
			onValidate,
			onCount,
			className,
			...attributes
		} = this.props;
		const { charactersRemaining, valid } = this.state;

		const displayCount = (typeof charactersRemaining === 'number')
			&& charactersRemaining <= (countStart || TextField.defaultProps.countStart);

		const classes = classNames(
			{
				[`${DICTIONARY.TEXTFIELD}__${DICTIONARY.INPUT}`]: true,
			},
			className,
		);

		return (
			<div className={`${DICTIONARY.TEXTFIELD}`}>
				{this.Label(label)}
				{help && this.Help(help)}
				<BaseInput
					type={type || 'text'}
					maxLength={maxLength}
					onInput={this.onInput}
					ref={this.inputRef}
					id={this.uid}
					className={classes}
					{...attributes}
				/>
				<div className={feedbackClass}>
					{error && !valid && this.InvalidFeedback(error)}
					{displayCount && this.CharacterCounter(charactersRemaining!, maxLength!)}
				</div>
			</div>
		);
	}
}
export default TextField;
