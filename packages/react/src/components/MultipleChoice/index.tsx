import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import Choice, { ChoiceProps } from '../Choice';
import { noop } from '../../utilities/helpers';

export interface MultipleChoiceProps extends React.HTMLAttributes<HTMLFieldSetElement> {
	prompt: string | JSX.Element;
	description?: string | JSX.Element;
	children: (ChoiceProps | JSX.Element | React.ReactText)[];
	/**
	 * Indicates whether multiple items can be chosen at the same time. If
	 * `true`, either checkboxes or buttons will be used.
	 */
	multiselect?: boolean;
	/**
	 * Indicates whether the chosen value(s) will be evaluated in some way when
	 * the user makes a choice. Set to `true` if making a choice will trigger
	 * feedback of any kind.
	 */
	feedbackOnChoice?: boolean;
	onChoice?: (choices: MultipleChoiceState['selected']) => void;
	onChange?: (e?: React.FormEvent<HTMLFieldSetElement>) => void;
	name?: string;
	baseName?: string;
	descriptionClass?: string;
	choiceGroupClass?: string;
	choiceClass?: string;
	promptClass?: string;
	correctClass?: string;
	incorrectClass?: string;
}


export interface MultipleChoiceState {
	selected: ChoiceProps['value'][];
}

class MultipleChoice extends React.Component<MultipleChoiceProps, MultipleChoiceState> {
	private static baseName = 'mc';
	private static bemElements = {
		choice: 'choice',
		choiceGroup: 'choices',
		description: 'description',
		prompt: 'prompt',
	};

	private uid = uniqueId(`${MultipleChoice.baseName}-`);

	public static defaultProps = {
		multiselect: false,
		feedbackOnChoice: false,
		baseName: MultipleChoice.baseName,
		descriptionClass: `${MultipleChoice.baseName}__${MultipleChoice.bemElements.description}`,
	}

	constructor(props: MultipleChoiceProps) {
		super(props);

		this.state = {
			selected: [],
		};
	}

	// eslint-disable-next-line react/destructuring-assignment
	private get id(): string { return this.props.id || this.uid; }
	private get promptId(): string { return `${this.id}-prompt`; }

	private get Description(): JSX.Element | null {
		const {
			baseName,
			descriptionClass = `${baseName}__${MultipleChoice.bemElements.description}`,
			description,
		} = this.props;

		if (!description) return null;

		return <div className={descriptionClass}>{ description }</div>;
	}

	private get Choices(): React.ReactFragment | null {
		const {
			baseName,
			choiceClass = `${baseName}__${MultipleChoice.bemElements.choice}`,
			children,
			feedbackOnChoice,
			multiselect,
			name = `${this.id}-choice`,
		} = this.props;
		const { selected } = this.state;

		const choices = children.map((child) => {
			if (typeof child === 'object' && 'value' in child) {
				return <Choice {...child} key={child.value} />;
			}
			return child;
		});

		return React.Children.map(choices, (child) => {
			const value = (typeof child === 'object') ? child.props.value : child;

			if (!value) {
				// TODO: warn that MultipleChoice children must have a value?
				return null;
			}

			const props: ChoiceProps = {
				checked: selected.includes(value),
				onChoice: this.choose,
				className: classNames(choiceClass, (typeof child === 'object') && child.props.className),
				name,
				value,
			};

			if (feedbackOnChoice) {
				props.variant = 'button';
			} else if (multiselect) {
				props.variant = 'checkbox';
			} else {
				props.variant = 'radio';
			}

			if (React.isValidElement<ChoiceProps>(child)) {
				const mergedProps = { ...child.props, ...props };
				return (child.type === Choice)
					? React.cloneElement(child, mergedProps)
					: <Choice {...mergedProps}>{ child }</Choice>;
			}

			return <Choice {...props} />;
		});
	}

	private choose = async ({ props }: Choice): Promise<void> => {
		const { value } = props;
		const {
			onChoice = noop,
			multiselect,
		} = this.props;
		const { selected } = this.state;
		let newVal = selected.slice();

		if (multiselect) {
			const currentIndex = selected.findIndex((v) => v === value);
			if (currentIndex > -1) {
				newVal.splice(currentIndex, 1);
			} else {
				newVal = [...selected, value];
			}
		} else {
			newVal = [value];
		}
		await this.setState({ selected: newVal });
		onChoice(newVal);
	}

	private onChange = (e?: React.FormEvent<HTMLFieldSetElement>): void => {
		const { onChange } = this.props;
		if (onChange) onChange(e);
	}

	render(): JSX.Element {
		const {
			baseName,
			className,
			prompt,
			promptClass = `${baseName}__${MultipleChoice.bemElements.prompt}`,
			choiceGroupClass = `${baseName}__${MultipleChoice.bemElements.choiceGroup}`,
			descriptionClass,	// eslint-disable-line @typescript-eslint/no-unused-vars
		} = this.props;

		return (
			<fieldset className={classNames(baseName, className)} onChange={this.onChange}>
				<legend className={promptClass} id={this.promptId}>{ prompt }</legend>
				{ this.Description }
				<div role="group" className={choiceGroupClass} aria-labelledby={this.promptId}>
					{ this.Choices }
				</div>
			</fieldset>
		);
	}
}

export default MultipleChoice;
