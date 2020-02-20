import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import Icon from '../Icon';
import BaseInput, { BaseInputProps } from '../BaseInput';
import { isElement } from '../../utilities/events';
import { ValidatorError, defaultValidators } from '../../utilities/validation';

export type CheckboxContent = 'input' | 'label' | 'help' | 'error' | 'control' | 'container' | 'thumbnail';

export interface CheckboxProps extends BaseInputProps {
	/** The label for the input field. */
	label: string | JSX.Element;
	/** The secondary help text or element. */
	help?: string | JSX.Element;
	/** The thumbnail JSX element. */
	thumbnail?: JSX.Element;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** The className for the Checkbox's `<label>` element. */
	labelClass?: string;
	/** The className for the control that sighted users will see. */
	controlClass?: string;
	/** The className for the `<div>` wrapping the label, help text, and error text. */
	containerClass?: string;
	/** The className for the Checkbox's help container. */
	helpClass?: string;
	/** The className for the Checkbox's `<input>` element. */
	inputClass?: string;
	/** The className for the Checkbox's error container. */
	errorClass?: string;
	/** The className for the Checkbox's thumbnail element. */
	thumbnailClass?: string;
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

export default class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
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
		control: 'control',
		container: 'container',
		thumbnail: 'thumbnail',
	}
	/* eslint-enable react/sort-comp */

	static defaultProps = {
		checked: false,
		indeterminate: false,
		includeDefaultValidators: true,
		baseName: Checkbox.bemBase,
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
		const { checked } = event.target;
		await this.setState({ checked, indeterminate: false });
		if (onChange) onChange(event);
	}

	onValidate: BaseInputProps['onValidate'] = async ({ errors, validity }): Promise<void> => {
		const { onValidate } = this.props;
		await this.setState({ errors, valid: errors.length === 0 });
		if (onValidate) onValidate({ errors, validity });
	}

	/** The visual control for the component. A11y is handled by the native `<input>`. */
	private get Control(): JSX.Element {
		const {
			baseName,
			controlClass = `${baseName}__${Checkbox.bemElements.control}`,
		} = this.props;
		const { indeterminate } = this.state;
		return (
			// This control is purely a visual affordance. A11y is managed by the `input` element.
			// eslint-disable-next-line jsx-a11y/label-has-associated-control
			<label className={controlClass} htmlFor={this.uid} aria-hidden="true">
				<Icon variant={indeterminate ? 'minus' : 'check'} />
			</label>
		);
	}

	/** The component's thumbnail. */
	private get Thumbnail(): JSX.Element | null {
		const {
			thumbnail,
			baseName,
			thumbnailClass = `${baseName}__${Checkbox.bemElements.thumbnail}`,
		} = this.props;

		if (!thumbnail) return null;
		return (
			<label className={thumbnailClass} htmlFor={this.uid}>
				{ thumbnail }
			</label>

		);
	}

	/** The text field's `<label>`. */
	private get Label(): JSX.Element {
		const {
			label,
			baseName,
			required,
			labelClass = `${baseName}__${Checkbox.bemElements.label}`,
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
		const { baseName, help, helpClass = `${baseName}__${Checkbox.bemElements.help}` } = this.props;
		if (!help) return null;
		return <div className={helpClass} id={this.descId}>{ help }</div>;
	}

	/** An unordered list of validation errors. */
	private get Error(): JSX.Element | null {
		const { baseName, errorClass = `${baseName}__${Checkbox.bemElements.error}` } = this.props;
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
			className, baseName,
			inputClass = `${baseName}__${Checkbox.bemElements.input}`,
			containerClass = `${baseName}__${Checkbox.bemElements.container}`,
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
				{this.Control}
				{this.Thumbnail}
				<div className={containerClass}>
					{this.Label}
					{this.Help}
					{this.Error}
				</div>
			</div>
		);
	}
}
