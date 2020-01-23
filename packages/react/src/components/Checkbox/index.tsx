import * as React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { BaseInput } from '../input/BaseInput';
import { noop } from '../../utilities/events';

const DICTIONARY = {
	PREFIX: 'nds-',
	CHECKBOX: 'checkbox',
	INPUT: 'input',
};

/**
 * BEM element names inside this component. These values will be used to
 * construct the final class names for each corresponding element.
 */
export const CHECKBOX_ELEMENTS = {
	TYPE: 'checkbox',
	LABEL: 'label',
	HELP: 'help',
	ERROR: 'error',
};

export interface CheckboxState {
	/** The checked state of the component. */
	checked: boolean;
	/** The checkbox component is only invalid if it is given the `required` prop and is unchecked. */
	valid: boolean;
}

export type CheckboxChangeEvent = React.ChangeEvent<HTMLInputElement> | Event;

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * The label for the input field.
	 * The checkbox sighted users will see will be a ":before" element on the label.
	*/
	label: string | JSX.Element;
	/** The secondary help text or element. */
	help?: string | JSX.Element;
	/** The error text or element to display when the checkbox component is required. */
	error?: string | JSX.Element;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** The className for the Checkbox's <label> element. */
	labelClass?: string;
	/** The className for the Checkbox's help text container. */
	helpClass?: string;
	/** The className for the Checkbox's error container. */
	errorClass?: string;
	/** Whether the valid state should be update on `change` events. */
	validateOnChange?: boolean;
	/** A reference to the inner `<input>` element. */
	checkboxRef?: React.RefObject<HTMLInputElement>;
	/** Mark the checkbox as indeterminate. */
	indeterminate?: boolean;
	/** Triggered any time the validity of the `<input>` is checked. */
	onValidate: (state: CheckboxState) => void;
	/**
	 * Triggered when the DOM `change` event is triggered on the `<input>`.
	 * Note that this differs from React's normal onChange event to bring it in
	 * line with the DOM standard for `onchange`.
	 */
	onChange: (event: CheckboxChangeEvent) => void;
}

class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
	private uid: string = uniqueId(`${DICTIONARY.PREFIX}${DICTIONARY.CHECKBOX}-`);
	private descId = `${this.uid}-desc`;
	private errId = `${this.uid}-err`;
	static defaultProps = {
		baseName: 'checkbox',
		get labelClass(): string {
			return `${this.baseName}__${CHECKBOX_ELEMENTS.LABEL}`;
		},
		get helpClass(): string {
			return `${this.baseName}__${CHECKBOX_ELEMENTS.HELP}`;
		},
		get errorClass(): string {
			return `${this.baseName}__${CHECKBOX_ELEMENTS.ERROR}`;
		},
		validateOnChange: true,
		onChange: noop,
		onValidate: noop,
		indeterminate: false,
		required: true,
		checkboxRef: React.createRef<HTMLInputElement>(),
	};

	constructor(props: CheckboxProps) {
		super(props);

		this.state = {
			checked: false,
			valid: true,
		};
	}

	validate = async (): Promise<void> => {
		const { onValidate, required } = this.props;
		const { checked } = this.state;
		if (required) {
			this.setState({ valid: checked });
		}
		onValidate(this.state);
	}

	onChange = async (event: CheckboxChangeEvent): Promise<void> => {
		const { onChange, checkboxRef, validateOnChange } = this.props;
		if (checkboxRef && checkboxRef.current) {
			const { checked } = checkboxRef.current;
			await this.setState({ checked });
		}
		if (validateOnChange) await this.validate();
		if (onChange) onChange(event);
	}

	private Label(value: string | JSX.Element): JSX.Element {
		const { labelClass } = this.props;

		const labelProps = {
			htmlFor: this.uid,
			className: labelClass,
		};
		if (typeof value !== 'string' && value.type().type === 'label') {
			return React.cloneElement(value, labelProps);
		}
		return (
			// eslint-disable-next-line jsx-a11y/label-has-associated-control
			<label {...labelProps}>
				{ value }
			</label>
		);
	}

	private Help(value: string | JSX.Element): JSX.Element {
		const { helpClass } = this.props;
		const helpProps = {
			className: helpClass,
			id: this.descId,
		};
		if (typeof value !== 'string') {
			return React.cloneElement(value, helpProps);
		}
		return (
			<div {...helpProps}>
				{ value }
			</div>
		);
	}

	private ErrorFeedback(value: string | JSX.Element): JSX.Element {
		const { errorClass } = this.props;
		const errorProps = {
			className: errorClass,
			id: this.errId,
			role: 'alert',
		};
		if (typeof value !== 'string') {
			return React.cloneElement(value, errorProps);
		}
		return (
			<div {...errorProps}>
				{ value }
			</div>
		);
	}

	render(): JSX.Element {
		const {
			label,
			help,
			error,
			className,
			checkboxRef,
			// props that are used elsewhere
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			baseName, labelClass, helpClass, onValidate,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			errorClass, validateOnChange, indeterminate, onChange,
			...attributes
		} = this.props;

		const { valid } = this.state;

		const classes = classNames({
			[`${DICTIONARY.CHECKBOX}__${DICTIONARY.INPUT}`]: true,
		}, className);

		/** `indeterminate` is a property, not an attribute. It must be toggled on the ref. */
		if (checkboxRef && checkboxRef.current) {
			checkboxRef.current.indeterminate = !!indeterminate;
		}

		return (
			<div className={DICTIONARY.CHECKBOX}>
				<BaseInput
					type={CHECKBOX_ELEMENTS.TYPE}
					ref={checkboxRef}
					onChange={this.onChange}
					id={this.uid}
					aria-describedby={(help) ? this.descId : undefined}
					aria-invalid={(!valid) ? 'true' : undefined}
					aria-errormessage={(error && !valid) ? this.errId : undefined}
					className={classes}
					{...attributes}
				/>
				{ this.Label(label) }
				{ help && this.Help(help) }
				{ error && !valid && this.ErrorFeedback(error) }
			</div>
		);
	}
}

export default Checkbox;
