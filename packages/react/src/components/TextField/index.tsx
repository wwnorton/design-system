import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import {
	isElement, ValidatorEntry, defaultValidators, ValidatorError,
} from '@nds/react/utilities';
import { BaseInput, BaseInputProps } from '../BaseInput';

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
	label: string | React.ReactElement;
	/**
	 * Additional descriptive help text for the text field. Use this for to give
	 * the user more context about what to enter, such as field templating or
	 * what might normally go in the `placeholder`.
	 */
	help?: string | React.ReactElement;
	/**
	 * Feedback about the user's current input value. By default, this will
	 * contain validation errors and the counter, if `maxLength` is specified.
	 */
	feedback?: string | React.ReactElement;
	/** When the character counter should begin showing. */
	counterStart?: number;
	/**
	 * A function that takes the remaining number of characters and the maximum
	 * number of characters and returns the string or element that will be
	 * rendered in the character counter slot.
	 */
	counter?: ({ remaining, max }: TextInputCounterProps) => React.ReactElement | string;
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
	inputRef?: React.Ref<HTMLInputElement>;
	/** Triggered any time the number of characters remaining is updated. */
	onCount?: (remaining?: number) => void;
}

interface TextFieldState {
	/** The current value of the TextField. */
	value: BaseInputProps['value'];
	/** The number of allowed characters remaining. */
	remaining?: number;
	/** A list of validation errors. An empty array means there are no errors. */
	errors: ValidatorError[];
	validators?: ValidatorEntry[];
}

export class TextField extends React.Component<TextFieldProps, TextFieldState> {
	public static bemBase = 'textfield';
	public static bemElements: Record<TextFieldContent, string> = {
		label: 'label',
		help: 'help',
		input: 'input',
		feedback: 'feedback',
		error: 'error',
		counter: 'count',
	}

	private id: string;

	public static defaultProps = {
		type: 'text',
		required: true,
		counterStart: 25,
		counter: ({ remaining, max }: TextInputCounterProps): string => `${remaining}/${max} characters remaining.`,
		baseName: TextField.bemBase,
	}

	constructor(props: TextFieldProps) {
		super(props);

		this.id = props.id || uniqueId(TextField.bemBase);

		this.state = {
			validators: props.validators || defaultValidators(props),
			value: props.value || '',
			remaining: props.maxLength,
			errors: [],
		};
	}

	public componentDidMount(): void {
		this.updateCount();
	}

	public componentDidUpdate(
		prevProps: TextFieldProps,
		prevState: TextFieldState,
	): void {
		const {
			id,
			onCount,
			validators,
			value,
		} = this.props;
		const {
			remaining,
			value: stateValue,
		} = this.state;

		if (id && prevProps.id !== id) {
			this.id = id;
		}

		if (prevProps.validators !== validators) {
			this.updateValidators(validators);
		}

		if (prevProps.value !== value) {
			this.updateValue(String(value));
		}

		if (prevState.value !== stateValue) {
			this.updateCount();
		}

		if (onCount && prevState.remaining !== remaining) {
			onCount(remaining);
		}
	}

	private get helpId(): string { return this.id + TextField.bemElements.help; }
	private get errId(): string { return this.id + TextField.bemElements.error; }

	/** The text field's `<label>`. */
	private get Label(): React.ReactElement {
		const {
			label,
			baseName,
			required,
			labelClass = `${baseName}__${TextField.bemElements.label}`,
		} = this.props;
		if (isElement<React.LabelHTMLAttributes<HTMLLabelElement>>(label, 'label')) {
			return React.cloneElement(label, { htmlFor: this.id });
		}
		return (
			<label htmlFor={this.id} className={labelClass}>
				{ label }
				{ !required && ' ' }
				{ !required && <span className={`${baseName}__optional`}>(optional)</span> }
			</label>
		);
	}

	/** The text field's help/description element. */
	private get Help(): React.ReactElement | null {
		const { baseName, help, helpClass = `${baseName}__${TextField.bemElements.help}` } = this.props;
		if (!help) return null;
		return <div className={helpClass} id={this.helpId}>{ help }</div>;
	}

	/** An unordered list of validation errors. */
	private get Error(): React.ReactElement | null {
		const { errors } = this.state;
		if (!errors.length) return null;

		const { baseName, errorClass = `${baseName}__${TextField.bemElements.error}` } = this.props;
		return (
			<ul className={errorClass} id={this.errId} aria-label="Errors">
				{ errors.map((err: ValidatorError): React.ReactElement => {
					const key = (typeof err === 'string')
						? err
						: (err.key || err.props.children);
					return <li key={key}>{ err }</li>;
				}) }
			</ul>
		);
	}

	/** The text field's remaining characters element. */
	private get Counter(): React.ReactElement | null {
		const {
			baseName,
			counter = TextField.defaultProps.counter,
			counterStart,
			counterClass = `${baseName}__${TextField.bemElements.counter}`,
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
				{ counter({ remaining, max: maxLength }) }
			</div>
		);
	}

	private get Feedback(): React.ReactElement {
		const {
			baseName,
			feedbackClass = `${baseName}__${TextField.bemElements.feedback}`,
			feedback,
		} = this.props;

		return (
			<div
				className={feedbackClass}
				aria-live="polite"
				aria-relevant="all"
			>
				{ feedback || [this.Error, this.Counter] }
			</div>
		);
	}

	private onChange: TextFieldProps['onChange'] = (e): void => {
		const { onChange } = this.props;
		if (onChange) onChange(e);
		else this.updateValue(e.target.value);
	}

	private onValidate: TextFieldProps['onValidate'] = (state): void => {
		const { onValidate } = this.props;
		if (onValidate) onValidate(state);
		this.setState({ errors: state.errors });
	}

	private updateCount(): void {
		const { maxLength } = this.props;
		const { value } = this.state;
		if (!value) return;
		this.setState({
			remaining: (maxLength === undefined) ? undefined : maxLength - String(value).length,
		});
	}

	private updateValidators(validators?: ValidatorEntry[]): void {
		this.setState({ validators });
	}

	private updateValue(value: string): void {
		this.setState({ value });
	}

	render(): React.ReactElement {
		const {
			// classes
			className, baseName,
			inputClass = `${baseName}__${TextField.bemElements.input}`,
			help,
			/* eslint-disable @typescript-eslint/no-unused-vars */
			labelClass, helpClass, errorClass, counterClass, feedbackClass,
			// contents
			label, feedback,
			// options
			counter, counterStart,
			// events
			onChange, onValidate, onCount,
			/* eslint-enable @typescript-eslint/no-unused-vars */
			// references
			inputRef,
			// everything else is passed to the `BaseInput`
			...attributes
		} = this.props;
		const { validators, value, errors } = this.state;
		const isValid = errors.length === 0;

		return (
			<div className={classNames(baseName, className)}>
				{ this.Label }
				{ this.Help }
				<BaseInput
					value={value}
					validators={validators}
					onChange={this.onChange}
					onValidate={this.onValidate}
					ref={inputRef}
					id={this.id}
					className={inputClass}
					disableTooltip
					// https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/644
					// eslint-disable-next-line jsx-a11y/aria-props
					aria-describedby={(help) ? this.helpId : undefined}
					aria-invalid={(!isValid) ? 'true' : undefined}
					aria-errormessage={(!isValid) ? this.errId : undefined}
					{...attributes}
				/>
				{ this.Feedback }
			</div>
		);
	}
}
