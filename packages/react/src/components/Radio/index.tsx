import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { BaseInput } from '../BaseInput';
import { CheckboxProps } from '../Checkbox';
import { FieldInfo } from '../Field';
import { prefix } from '../../utilities';

export type RadioProps = Omit<CheckboxProps, 'indeterminate' | 'errorClass'>;

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>((
	{
		// options
		checked: checkedProp,
		optionalIndicator,
		requiredIndicator,
		validators,

		// anatomy
		label,
		description,
		thumbnail,
		errors: errorsProp,

		// classes
		baseName = prefix('field'),
		className = classNames(`${baseName}__group`, `${baseName}--radio`),
		controlClass = classNames(`${baseName}__control`, `${baseName}__control--radio`),
		descriptionClass,
		inputClass = classNames(`${baseName}__input`, `${baseName}__input--radio`),
		thumbnailClass = `${baseName}__thumbnail`,
		checkedClass = `${baseName}--checked`,
		labelClass,

		// ids
		id: idProp,
		labelId: labelIdProp,
		descriptionId: descIdProp,
		errorsId: errIdProp,

		// <input> props
		required,

		// event callbacks
		onChange,
		onDOMChange,
		onValidate,

		// everything else
		...inputProps
	}: RadioProps, ref,
) => {
	const [checked, setChecked] = React.useState(checkedProp);
	const [errors, setErrors] = React.useState(errorsProp);

	// ids stored as refs since they shouldn't change between renders
	const { current: id } = React.useRef(idProp || uniqueId(`${baseName}-`));
	const { current: labelId } = React.useRef(labelIdProp || `${id}-label`);
	const { current: descId } = React.useRef(descIdProp || `${id}-desc`);
	const { current: errId } = React.useRef(errIdProp || `${id}-err`);
	const { current: inputId } = React.useRef(`${id}-input`);

	// treat prop versions of internal state as source of truth
	React.useEffect(() => setErrors(errorsProp), [errorsProp]);
	React.useEffect(() => setChecked(checkedProp), [checkedProp]);

	const indicator = React.useMemo(() => {
		if (requiredIndicator && required) return 'required';
		if (optionalIndicator && !required) return 'optional';
		return null;
	}, [requiredIndicator, optionalIndicator, required]);

	const Control = React.useMemo(() => (
		// This control is purely a visual affordance. A11y is managed by the `input` element.
		// eslint-disable-next-line jsx-a11y/label-has-associated-control
		<label className={controlClass} htmlFor={inputId} aria-hidden="true" />
	), [controlClass, inputId]);

	const Thumbnail = React.useMemo(() => {
		if (!thumbnail) return null;
		return (
			<label className={thumbnailClass} htmlFor={inputId}>
				{ thumbnail }
			</label>
		);
	}, [thumbnail, thumbnailClass, inputId]);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (onChange) onChange(e);
		setChecked(e.currentTarget.checked);
	};

	const validateHandler = (e: string[]): void => {
		if (onValidate) onValidate(e);
		setErrors(e);
	};

	const isValid = React.useMemo(() => Boolean(!errors || errors.length === 0), [errors]);

	return (
		<div className={classNames(className, { [checkedClass]: checked })}>
			<BaseInput
				type="radio"
				checked={checked}
				ref={ref}
				id={inputId}
				className={inputClass}
				errors={errors}
				validators={validators}

				aria-labelledby={labelId}
				aria-describedby={(description) ? descId : undefined}
				aria-invalid={!isValid}
				aria-errormessage={(!isValid) ? errId : undefined}

				onChange={changeHandler}
				onDOMChange={onDOMChange}
				onValidate={validateHandler}

				required={required}
				{...inputProps}
			/>
			{ Control }
			{ Thumbnail }
			<FieldInfo
				indicator={indicator}
				htmlFor={inputId}
				label={label}
				labelClass={labelClass}
				labelId={labelId}
				description={description}
				descriptionClass={descriptionClass}
				descriptionId={descId}
			/>
		</div>
	);
});

// export class Radio2 extends React.Component<RadioProps> {
// 	private inputRef: React.RefObject<HTMLInputElement>;
// 	private uid: string = uniqueId(`${Radio.bemBase}-`);
// 	// eslint-disable-next-line react/destructuring-assignment,react/sort-comp
// 	private get id(): string { return this.props.id || this.uid; }
// 	private get labelId(): string { return `${this.id}-label`; }
// 	private get descId(): string { return `${this.id}-desc`; }

// 	/* eslint-disable react/sort-comp */
// 	public static bemBase = 'radio';
// 	public static bemElements: Record<RadioContent, string> = {
// 		input: 'input',
// 		control: 'control',
// 		thumbnail: 'thumbnail',
// 		label: 'label',
// 		help: 'help',
// 		container: 'container',
// 	}

// 	/* eslint-disable react/sort-comp */
// 	static defaultProps = {
// 		baseName: Radio.bemBase,
// 	}

// 	constructor({ baseName = prefix(Radio.defaultProps.baseName), ...props }: RadioProps) {
// 		super({ baseName, ...props });
// 		this.inputRef = props.inputRef || React.createRef<HTMLInputElement>();
// 	}

// 	/** The radio's `<label>` element. */
// 	private get Label(): JSX.Element {
// 		const {
// 			label,
// 			baseName,
// 			labelClass = `${baseName}__${Radio.bemElements.label}`,
// 		} = this.props;
// 		const props = {
// 			htmlFor: this.id,
// 			id: this.labelId,
// 		};
// 		if (React.isValidElement<React.LabelHTMLAttributes<HTMLLabelElement>>(label)) {
// 			return React.cloneElement(label, props);
// 		}
// 		// eslint-disable-next-line jsx-a11y/label-has-associated-control
// 		return <label className={labelClass} {...props}>{ label }</label>;
// 	}

// 	/** The radio's thumbnail element. */
// 	private get Thumbnail(): JSX.Element | null {
// 		const {
// 			thumbnail,
// 			baseName,
// 			thumbnailClass = `${baseName}__${Radio.bemElements.thumbnail}`,
// 		} = this.props;

// 		if (!thumbnail) return null;
// 		return (
// 			<label className={thumbnailClass} htmlFor={this.id}>
// 				{ thumbnail }
// 			</label>
// 		);
// 	}

// 	/** The radio's help/description element. */
// 	private get Help(): JSX.Element | null {
// 		const {
// 			baseName,
// 			help,
// 			helpClass = `${baseName}__${Radio.bemElements.help}`,
// 		} = this.props;
// 		if (!help) return null;
// 		return (
// 			<div className={helpClass} id={this.descId}>
// 				{help}
// 			</div>
// 		);
// 	}

// 	/** The visual control element. */
// 	private get Control(): JSX.Element {
// 		const {
// 			baseName,
// 			controlClass = `${baseName}__${Radio.bemElements.control}`,
// 		} = this.props;
// 		// This control is an affordance for sighted mouse users. All other users
// 		// will interact directly with the `input` element.
// 		// eslint-disable-next-line jsx-a11y/label-has-associated-control
// 		return <label className={controlClass} htmlFor={this.id} aria-hidden="true" />;
// 	}

// 	render(): JSX.Element {
// 		const {
// 			// classes
// 			className, baseName,
// 			inputClass = `${baseName}__${Radio.bemElements.input}`,
// 			containerClass = `${baseName}__${Radio.bemElements.container}`,
// 			/* eslint-disable @typescript-eslint/no-unused-vars */
// 			labelClass, helpClass, thumbnailClass, controlClass,
// 			// contents
// 			label, help, thumbnail,
// 			// references
// 			inputRef,
// 			...attributes
// 		} = this.props;

// 		return (
// 			<div className={classNames(baseName, className)}>
// 				<BaseInput
// 					type="radio"
// 					ref={this.inputRef}
// 					id={this.id}
// 					className={inputClass}
// 					aria-labelledby={this.labelId}
// 					aria-describedby={(help) ? this.descId : undefined}
// 					{...attributes}
// 				/>
// 				{this.Control}
// 				{this.Thumbnail}
// 				<div className={containerClass}>
// 					{this.Label}
// 					{this.Help}
// 				</div>
// 			</div>
// 		);
// 	}
// }
