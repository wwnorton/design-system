import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import BaseInput, { BaseInputProps } from '../BaseInput';
import { isElement } from '../../utilities/events';

export type RadioContent = 'input' | 'control' | 'thumbnail' | 'label' | 'help' | 'container';

export interface RadioProps extends BaseInputProps {
	/** The label for the input field. */
	label: string | JSX.Element;
	/** The choice group's selected value. Used to determine `checked` property in `input`. */
	selectedValue: BaseInputProps['value'];
	/** Update selected value in choice group state. */
	updateState: (value: BaseInputProps['value']) => void;
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

export default class Radio extends React.Component<RadioProps> {
	private inputRef: React.RefObject<HTMLInputElement>;
	private uid: string = uniqueId(`${Radio.bemBase}-`);
	private descId = `${this.uid}-desc`;

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

	constructor(props: RadioProps) {
		super(props);
		this.inputRef = props.inputRef || React.createRef<HTMLInputElement>();
	}

	onChange: BaseInputProps['onChange'] = async (event): Promise<void> => {
		const { onChange, value, updateState } = this.props;
		updateState(value);
		if (onChange) onChange(event);
	}

	/** The radio's `<label>` element. */
	private get Label(): JSX.Element {
		const {
			label,
			baseName,
			labelClass = `${baseName}__${Radio.bemElements.label}`,
		} = this.props;
		if (isElement(label, 'label')) {
			return React.cloneElement(label as JSX.Element, { htmlFor: this.uid });
		}
		return (
			<label htmlFor={this.uid} className={labelClass}>
				{label}
			</label>
		);
	}

	/** The radio's thumbnail element. */
	private get Thumbnail(): JSX.Element | null {
		const {
			thumbnail,
			baseName,
			thumbnailClass = `${baseName}__${Radio.bemElements.thumbnail}`,
		} = this.props;

		if (!thumbnail) return null;
		return React.cloneElement(thumbnail as JSX.Element, {
			className: classNames(
				thumbnail.props.className,
				thumbnailClass,
			),
		});
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
			value,
			updateState,
			baseName,
			controlClass = `${baseName}__${Radio.bemElements.control}`,
		} = this.props;
		const onClick = (): void => updateState(value);
		return (
			// This control is purely a visual affordance. A11y is managed by the `input` element.
			/* eslint-disable jsx-a11y/click-events-have-key-events */
			/* eslint-disable jsx-a11y/no-static-element-interactions */
			<div className={controlClass} onClick={onClick} />
			/* eslint-enable */
		);
	}

	render(): JSX.Element {
		const {
			// classes
			className, baseName,
			inputClass = `${baseName}__${Radio.bemElements.input}`,
			containerClass = `${baseName}__${Radio.bemElements.container}`,
			/* eslint-disable @typescript-eslint/no-unused-vars */
			labelClass, helpClass, thumbnailClass, controlClass,
			// values
			selectedValue, value,
			// contents
			label, help, thumbnail,
			// events
			onChange,
			// references
			inputRef, checked: checkedProp,
			...attributes
		} = this.props;

		return (
			<div className={classNames(baseName, className)}>
				<BaseInput
					type="radio"
					checked={selectedValue === value}
					value={value}
					ref={this.inputRef}
					onChange={this.onChange}
					id={this.uid}
					className={inputClass}
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
