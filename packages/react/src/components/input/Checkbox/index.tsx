import * as React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { BaseInput, DICTIONARY } from '../BaseInput';
import { noop } from '../../../utilities/events';

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
	validateOnChange?: string;
	/** A reference to the inner `<details>` element. */
	checkboxRef?: React.RefObject<HTMLInputElement>;
	/** Mark the checkbox as indeterminate. */
	mixed?: boolean;
	/** Triggered any time the validity of the `<input>` is checked. */
	onValidate: (state: CheckboxState) => void;
	/**
	 * Triggered when the DOM `change` event is triggered on the `<input>`.
	 * Note that this differs from React's normal onChange event to bring it in
	 * line with the DOM standard for `onchange`.
	 */
	onChange: (event: CheckboxChangeEvent) => void;
}

export class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
	private uid: string = uniqueId(`${DICTIONARY.PREFIX}${DICTIONARY.CHECKBOX}-`);
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
		validateOnChange: false,
		onChange: noop,
		onValidate: noop,
		mixed: false,
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
			this.setState({ checked });
		}
		if (validateOnChange) await this.validate();
		if (onChange) onChange(event);
	}

	private Label(value: string | JSX.Element): JSX.Element {
		const { labelClass, mixed } = this.props;
		/**
		 * Determine how to fill the checkbox when the input element is checked.
		 * The checkbox sighted users will see will be a `:before` element on the <label>.
		 * If the component has the "mixed" prop, an em-dash will be used in place of a checkmark.
		 */
		const classes = classNames({
			[`${labelClass}--mixed`]: mixed,
		}, labelClass);
		const labelProps = {
			htmlFor: this.uid,
			className: classes,
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
			errorClass, validateOnChange, mixed, onChange,
			...attributes
		} = this.props;

		const { valid } = this.state;

		const classes = classNames({
			[`${DICTIONARY.CHECKBOX}__${DICTIONARY.INPUT}`]: true,
		}, className);

		return (
			<div className={DICTIONARY.CHECKBOX}>
				<BaseInput
					type={CHECKBOX_ELEMENTS.TYPE}
					ref={checkboxRef}
					onChange={this.onChange}
					id={this.uid}
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
