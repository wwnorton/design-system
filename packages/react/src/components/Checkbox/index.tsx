import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { BaseInput, BaseInputProps } from '../input/BaseInput';
import { isElement } from '../../utilities/events';
import { ValidatorError, defaultValidators } from '../../utilities/validation';

export type CheckboxContent = 'input' | 'label' | 'help' | 'error';

export interface CheckboxProps extends BaseInputProps {
	/**
	 * The label for the input field.
	 * The checkbox sighted users will see will be a ":before" element on the label.
	*/
	label: string | JSX.Element;
	/** The secondary help text or element. */
	help?: string | JSX.Element;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** The className for the Checkbox's `<label>` element. */
	labelClass?: string;
	/** The className for the Checkbox's help container. */
	helpClass?: string;
	/** The className for the Checkbox's `<input>` element. */
	inputClass?: string;
	/** The className for the Checkbox's error container. */
	errorClass?: string;
	/** A reference to the inner `<input>` element. */
	inputRef?: React.RefObject<HTMLInputElement>;
	/**
	 * Mark the checkbox as indeterminate.
	 * @MDN https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes
	 */
	indeterminate?: boolean;
}

export interface CheckboxState {
	/** The checked state of the component. */
	checked: boolean;
	/** A list of validation errors. An empty array means there are no errors. */
	errors: ValidatorError[];
	indeterminate: boolean;
	/** Whether the current value is valid. */
	valid: boolean;
}

class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
	private inputRef: React.RefObject<HTMLInputElement>;
	private uid: string = uniqueId(`${Checkbox.bemBase}-`);
	private descId = `${this.uid}-desc`;
	private errId = `${this.uid}-err`;

	/* eslint-disable react/sort-comp */
	public static bemBase = 'checkbox';
	public static bemElements: Record<CheckboxContent, string> = {
		input: 'input',
		label: 'label',
		help: 'help',
		error: 'error',
	}
	/* eslint-enable react/sort-comp */

	static defaultProps = {
		checked: false,
		indeterminate: false,
		includeDefaultValidators: true,
		baseName: Checkbox.bemBase,
		labelClass: `${Checkbox.bemBase}__${Checkbox.bemElements.label}`,
		helpClass: `${Checkbox.bemBase}__${Checkbox.bemElements.help}`,
		inputClass: `${Checkbox.bemBase}__${Checkbox.bemElements.input}`,
		errorClass: `${Checkbox.bemBase}__${Checkbox.bemElements.error}`,
	};

	constructor(props: CheckboxProps) {
		super(props);

		const initialChecked = (props.indeterminate)
			? false
			: props.checked || Checkbox.defaultProps.checked;

		this.state = {
			checked: initialChecked,
			errors: [],
			indeterminate: props.indeterminate || false,
			valid: true,
		};
		this.inputRef = props.inputRef || React.createRef<HTMLInputElement>();
	}

	componentDidMount(): void {
		this.updateIndeterminate();
	}

	/** `indeterminate` is a property, not an attribute. It must be toggled on the ref. */
	private updateIndeterminate(): void {
		const { indeterminate } = this.state;
		if (this.inputRef.current && indeterminate !== undefined) {
			this.inputRef.current.indeterminate = indeterminate;
		}
	}

	onChange: BaseInputProps['onChange'] = async (event): Promise<void> => {
		const { onChange } = this.props;
		if (this.inputRef.current) {
			const { checked } = this.inputRef.current;
			await this.setState({ checked, indeterminate: false });
		}
		if (onChange) onChange(event);
	}

	onValidate: BaseInputProps['onValidate'] = async ({ errors, validity }): Promise<void> => {
		const { onValidate } = this.props;
		this.setState({ errors });
		if (onValidate) onValidate({ errors, validity });
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

	render(): JSX.Element {
		const {
			// classes
			className, baseName, inputClass,
			/* eslint-disable @typescript-eslint/no-unused-vars */
			labelClass, helpClass, errorClass,
			// contents
			label, help,
			// options
			indeterminate,
			// events
			onChange, onValidate,
			// references
			inputRef,
			checked: checkedProp,
			/* eslint-enable @typescript-eslint/no-unused-vars */
			// everything else
			...attributes
		} = this.props;
		const { checked, valid } = this.state;

		this.updateIndeterminate();

		return (
			<div className={classNames(baseName, className)}>
				<BaseInput
					type="checkbox"
					checked={checked || undefined}
					validators={defaultValidators(this.props)}
					onValidate={this.onValidate}
					ref={this.inputRef}
					onChange={this.onChange}
					id={this.uid}
					className={inputClass}
					aria-describedby={(help) ? this.descId : undefined}
					aria-invalid={(!valid) ? 'true' : undefined}
					aria-errormessage={(!valid) ? this.errId : undefined}
					{...attributes}
				/>
				{this.Label}
				{this.Help}
				{this.Error}
			</div>
		);
	}
}

export default Checkbox;
