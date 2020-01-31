import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { BaseInput, BaseInputProps } from '../BaseInput';
import { isElement } from '../../../utilities/events';
import { ValidatorEntry, defaultValidators, ValidatorError } from '../../../utilities/validation';

export type TextFieldContent = 'label' | 'help' | 'input' | 'feedback' | 'error' | 'counter';
export type TextFieldType = 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';

interface TextInputCounterProps {
	remaining: number;
	max: number;
}

export interface TextFieldProps extends BaseInputProps {
	/** Text fields can be a limited subset of `<input>` types. */
	type?: TextFieldType;
	/** The label for the text field. The only required prop. */
	label: string | JSX.Element;
	/**
	 * Additional descriptive help text for the text field. Use this for to give
	 * the user more context about what to enter, such as field templating or
	 * what might normally go in the `placeholder`.
	 */
	help?: string | JSX.Element;
	/** When the character counter should begin showing. */
	counterStart?: number;
	/**
	 * A function that takes the remaining number of characters and the maximum
	 * number of characters and returns the string or element that will be
	 * rendered in the character counter slot.
	 */
	counter?: ({ remaining, max }: TextInputCounterProps) => JSX.Element | string;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** The className for the TextField's `<label>` element. */
	labelClass?: string;
	/** The className for the TextField's help container. */
	helpClass?: string;
	/** The className for the TextField's `<input>` element. */
	inputClass?: string;
	/**
	 * The className for the TextField's feedback section, which contains the
	 * error text and character count.
	 */
	feedbackClass?: string;
	/** The className for the TextField's error container. */
	errorClass?: string;
	/** The className for the TextField's character counter element. */
	counterClass?: string;
	/** A reference to the internal `<input>` element. */
	inputRef?: React.RefObject<HTMLInputElement>;
	/** Triggered any time the number of characters remaining is updated. */
	onCount?: (state: TextFieldState) => void;
	/** Whether the default validators should be applied. */
	includeDefaultValidators?: boolean;
}

interface TextFieldState {
	/** The current value of the TextField. */
	value: BaseInputProps['value'];
	/** The number of allowed characters remaining. */
	remaining?: number;
	/** A list of validation errors. An empty array means there are no errors. */
	errors: ValidatorError[];
	/** Whether the current value is valid. */
	valid: boolean;
}

export class TextField extends React.Component<TextFieldProps, TextFieldState> {
	private uid: string = uniqueId(`${TextField.bemBase}-`);
	private descId = `${this.uid}-desc`;
	private errId = `${this.uid}-err`;
	private feedbackId = `${this.uid}-feedback`;

	/* eslint-disable react/sort-comp */
	public static bemBase = 'textfield';
	public static bemElements: Record<TextFieldContent, string> = {
		label: 'label',
		help: 'help',
		input: 'input',
		feedback: 'feedback',
		error: 'error',
		counter: 'count',
	}
	/* eslint-enable react/sort-comp */

	public static defaultProps: Partial<TextFieldProps> = {
		type: 'text',
		required: true,
		counterStart: 25,
		counter: ({ remaining, max }) => `${remaining}/${max} characters remaining.`,
		includeDefaultValidators: true,
		baseName: TextField.bemBase,
		labelClass: `${TextField.bemBase}__${TextField.bemElements.label}`,
		helpClass: `${TextField.bemBase}__${TextField.bemElements.help}`,
		inputClass: `${TextField.bemBase}__${TextField.bemElements.input}`,
		feedbackClass: `${TextField.bemBase}__${TextField.bemElements.feedback}`,
		errorClass: `${TextField.bemBase}__${TextField.bemElements.error}`,
		counterClass: `${TextField.bemBase}__${TextField.bemElements.counter}`,
	}

	constructor(props: TextFieldProps) {
		super(props);

		this.state = {
			value: props.value,
			valid: true,
			remaining: props.maxLength,
			errors: [],
		};
	}

	public componentDidMount(): void {
		this.updateCount();
	}

	private get validators(): ValidatorEntry[] {
		const { includeDefaultValidators, validators = [] } = this.props;

		return (includeDefaultValidators)
			? [...defaultValidators(this.props), ...validators]
			: validators;
	}

	/** The text field's `<label>`. */
	private get Label(): JSX.Element {
		const {
			label,
			baseName,
			required,
			labelClass,
		} = this.props;
		if (isElement(label, 'label')) {
			return React.cloneElement(label as JSX.Element, { htmlFor: this.uid });
		}
		return (
			<label htmlFor={this.uid} className={labelClass}>
				{ label }
				{ !required && ' ' }
				{ !required && <span className={`${baseName}__optional`}>(optional)</span> }
			</label>
		);
	}

	/** The text field's help/description element. */
	private get Help(): JSX.Element | null {
		const { help, helpClass } = this.props;
		if (!help) return null;
		return <div className={helpClass} id={this.descId}>{ help }</div>;
	}

	/** An unordered list of validation errors. */
	private get Error(): JSX.Element | null {
		const { errorClass } = this.props;
		const { errors } = this.state;
		if (!errors.length) return null;
		return (
			<ul className={errorClass} id={this.errId} aria-label="Errors">
				{ errors.map((err: ValidatorError): JSX.Element => {
					const key = (typeof err === 'string')
						? err
						: (err.key || err.props.children);
					return <li key={key}>{ err }</li>;
				}) }
			</ul>
		);
	}

	/** The text field's remaining characters element. */
	private get Counter(): JSX.Element | null {
		const {
			counter,
			counterStart,
			counterClass,
			maxLength,
		} = this.props;
		const { remaining } = this.state;
		if (
			!maxLength
			|| remaining === undefined
			|| (counterStart && remaining > counterStart)
		) return null;
		return (
			<div className={counterClass}>
				{ counter && counter({ remaining, max: maxLength }) }
			</div>
		);
	}

	public updateCount = async (): Promise<void> => {
		const { maxLength, onCount } = this.props;
		const { value } = this.state;
		if (!maxLength) {
			await this.setState({ remaining: undefined });
			return;
		}
		if (value) {
			await this.setState({ remaining: maxLength - String(value).length });
		}
		if (onCount) onCount(this.state);
	}

	public onChange: BaseInputProps['onChange'] = async (e): Promise<void> => {
		const { onChange } = this.props;
		const { value } = e.target;
		await this.setState({ value });
		await this.updateCount();
		if (onChange) onChange(e);
	}

	public onValidate: BaseInputProps['onValidate'] = async ({ errors, validity }): Promise<void> => {
		const { onValidate } = this.props;
		if (errors) await this.setState({ errors, valid: errors.length === 0 });
		if (onValidate) onValidate({ errors, validity });
	}

	render(): JSX.Element {
		const {
			// classes
			className, baseName, inputClass, feedbackClass,
			/* eslint-disable @typescript-eslint/no-unused-vars */
			labelClass, helpClass, errorClass, counterClass,
			// contents
			label, help,
			// options
			counter, counterStart, includeDefaultValidators,
			// events
			onChange, onValidate, onCount,
			/* eslint-enable @typescript-eslint/no-unused-vars */
			// references
			inputRef,
			// everything else is passed to the `BaseInput`
			...attributes
		} = this.props;
		const { valid, value } = this.state;

		return (
			<div className={classNames(baseName, className)}>
				{this.Label}
				{this.Help}
				<BaseInput
					value={value}
					validators={this.validators}
					onChange={this.onChange}
					onValidate={this.onValidate}
					ref={inputRef}
					id={this.uid}
					className={inputClass}
					// https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/644
					// eslint-disable-next-line jsx-a11y/aria-props
					aria-details={this.feedbackId}
					aria-describedby={help && this.descId}
					aria-invalid={(!valid) ? 'true' : undefined}
					aria-errormessage={(!valid) ? this.errId : undefined}
					{...attributes}
				/>
				<div className={feedbackClass} id={this.feedbackId} role="status">
					{this.Error}
					{this.Counter}
				</div>
			</div>
		);
	}
}

export default TextField;
