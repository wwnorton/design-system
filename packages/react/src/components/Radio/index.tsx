import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { BaseInput, BaseInputProps } from '../BaseInput';
import { prefix } from '../../utilities';

export type RadioContent = 'input' | 'control' | 'thumbnail' | 'label' | 'help' | 'container';

export interface RadioProps extends BaseInputProps {
	/** The label for the input field. */
	label: string | JSX.Element;
	/** The secondary help text or element. */
	help?: string | JSX.Element;
	/** The thumbnail JSX element. */
	thumbnail?: JSX.Element;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** The className for the Radio's `<label>` element. */
	labelClass?: string;
	/** The className for the Radio's visual control. */
	controlClass?: string;
	/** The className for the Radio's help text. */
	helpClass?: string;
	/** The className for the Radio's `<input>` element. */
	inputClass?: string;
	/** The className for the Radio's thumbnail element. */
	thumbnailClass?: string;
	/** The className for the `<div>` element wrapping the label and help text. */
	containerClass?: string;
	/** A reference to the inner `<input>` element. */
	inputRef?: React.RefObject<HTMLInputElement>;
}

export class Radio extends React.Component<RadioProps> {
	private inputRef: React.RefObject<HTMLInputElement>;
	private uid: string = uniqueId(`${Radio.bemBase}-`);
	// eslint-disable-next-line react/destructuring-assignment,react/sort-comp
	private get id(): string { return this.props.id || this.uid; }
	private get labelId(): string { return `${this.id}-label`; }
	private get descId(): string { return `${this.id}-desc`; }

	/* eslint-disable react/sort-comp */
	public static bemBase = 'radio';
	public static bemElements: Record<RadioContent, string> = {
		input: 'input',
		control: 'control',
		thumbnail: 'thumbnail',
		label: 'label',
		help: 'help',
		container: 'container',
	}

	/* eslint-disable react/sort-comp */
	static defaultProps = {
		baseName: Radio.bemBase,
	}

	constructor({ baseName = prefix(Radio.defaultProps.baseName), ...props }: RadioProps) {
		super({ baseName, ...props });
		this.inputRef = props.inputRef || React.createRef<HTMLInputElement>();
	}

	/** The radio's `<label>` element. */
	private get Label(): JSX.Element {
		const {
			label,
			baseName,
			labelClass = `${baseName}__${Radio.bemElements.label}`,
		} = this.props;
		const props = {
			htmlFor: this.id,
			id: this.labelId,
		};
		if (React.isValidElement<React.LabelHTMLAttributes<HTMLLabelElement>>(label)) {
			return React.cloneElement(label, props);
		}
		// eslint-disable-next-line jsx-a11y/label-has-associated-control
		return <label className={labelClass} {...props}>{ label }</label>;
	}

	/** The radio's thumbnail element. */
	private get Thumbnail(): JSX.Element | null {
		const {
			thumbnail,
			baseName,
			thumbnailClass = `${baseName}__${Radio.bemElements.thumbnail}`,
		} = this.props;

		if (!thumbnail) return null;
		return (
			<label className={thumbnailClass} htmlFor={this.id}>
				{ thumbnail }
			</label>
		);
	}

	/** The radio's help/description element. */
	private get Help(): JSX.Element | null {
		const {
			baseName,
			help,
			helpClass = `${baseName}__${Radio.bemElements.help}`,
		} = this.props;
		if (!help) return null;
		return (
			<div className={helpClass} id={this.descId}>
				{help}
			</div>
		);
	}

	/** The visual control element. */
	private get Control(): JSX.Element {
		const {
			baseName,
			controlClass = `${baseName}__${Radio.bemElements.control}`,
		} = this.props;
		// This control is an affordance for sighted mouse users. All other users
		// will interact directly with the `input` element.
		// eslint-disable-next-line jsx-a11y/label-has-associated-control
		return <label className={controlClass} htmlFor={this.id} aria-hidden="true" />;
	}

	render(): JSX.Element {
		const {
			// classes
			className, baseName,
			inputClass = `${baseName}__${Radio.bemElements.input}`,
			containerClass = `${baseName}__${Radio.bemElements.container}`,
			/* eslint-disable @typescript-eslint/no-unused-vars */
			labelClass, helpClass, thumbnailClass, controlClass,
			// contents
			label, help, thumbnail,
			// references
			inputRef,
			...attributes
		} = this.props;

		return (
			<div className={classNames(baseName, className)}>
				<BaseInput
					type="radio"
					ref={this.inputRef}
					id={this.id}
					className={inputClass}
					aria-labelledby={this.labelId}
					aria-describedby={(help) ? this.descId : undefined}
					{...attributes}
				/>
				{this.Control}
				{this.Thumbnail}
				<div className={containerClass}>
					{this.Label}
					{this.Help}
				</div>
			</div>
		);
	}
}
