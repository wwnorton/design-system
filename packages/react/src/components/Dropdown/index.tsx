import React from 'react';
import uniqueId from 'lodash.uniqueid';
import {
	createPopper,
	Instance as PopperInstance,
	Options as PopperOptions,
} from '@popperjs/core';
import { BaseButton, BaseButtonProps } from '../BaseButton';
import { BaseListbox, BaseListboxProps } from '../BaseListbox';
import { Icon } from '../Icon';

export type DropdownAnatomy = 'label' | 'button' | 'listbox' | 'option';

export interface DropdownProps extends React.HTMLAttributes<HTMLElement>, Partial<PopperOptions> {
	/** The dropdown's label. Required. */
	label: string;
	/**
	 * The listbox's options. Each will be rendered inside a `BaseListOption`
	 * component. When specifying an option as a `BaseListOptionProps` object,
	 * the option's value must be the `BaseListOptionProps['children']`.
	 */
	options: BaseListboxProps['options'];
	/** A list of selected options. */
	selected?: React.ReactText;
	/** Indicates whether the Dropdown's listbox is open. */
	isOpen?: boolean;
	/** Indicates whether clicking outside the listbox should close the listbox. */
	closeOnExternalClick?: boolean;
	/** Indicates whether the dropdown should be closed on `Escape`. */
	closeOnDocumentEscape?: boolean;
	/** The `name` attribute for the internal `<select>`. */
	name?: HTMLSelectElement['name'];

	/** The base class name according to BEM conventions. Default is "dropdown". */
	baseName?: string;
	/** The class name for the label. */
	labelClass?: string;
	/** The class name for the button. */
	buttonClass?: string;
	/** The class name for the listbox. */
	listboxClass?: string;
	/** The class name for all listbox options. */
	optionClass?: string;

	/**
	 * Callback function that is called when the dropdown attempts to close its
	 * listbox. This will occur under the following conditions:
	 * * The user clicks outside of the listbox and `closeOnExternalClick` is
	 * `true`.
	 * * The user presses `Escape` and `closeOnDocumentEscape` is `true`.
	 * * The user presses `Tab` while the listbox is open.
	 */
	onRequestClose?: () => void;
	/**
	 * Callback function that is called when an option is selected. This will
	 * occur under the following conditions:
	 * * When the user clicks an option.
	 * * When the user presses `Enter` on the currently focused option.
	 * * When the user releases the space bar on the currently focused option.
	 */
	onRequestSelect?: (value: React.ReactText) => void;
}

export interface DropdownState {
	isOpen: boolean;
	selected: React.ReactText;
	shouldReturnFocus: boolean;
	width: number | 'auto';
}

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
	public static bemBase = 'dropdown';
	public static bemElements: Record<DropdownAnatomy, string> = {
		label: 'label',
		button: 'button',
		listbox: 'listbox',
		option: 'option',
	}

	public static initialButtonText = 'Select';

	public static defaultProps = {
		baseName: Dropdown.bemBase,
		isOpen: false,
		selected: Dropdown.initialButtonText,
		closeOnExternalClick: true,
		closeOnDocumentEscape: true,
		placement: 'bottom-start',
		modifiers: [],
	}

	private listbox: HTMLUListElement | null = null;
	private button: HTMLButtonElement | null = null;
	private popper: PopperInstance | null = null;
	private id: string;

	constructor(props: DropdownProps) {
		super(props);

		this.id = props.id || uniqueId(Dropdown.bemBase);

		this.state = {
			// open to start in order to get the width of the listbox
			isOpen: true,
			selected: props.selected || Dropdown.defaultProps.selected,
			shouldReturnFocus: false,
			width: 'auto',
		};
	}

	componentDidMount(): void {
		const { isOpen } = this.props;

		if (this.listbox) {
			this.setWidth(this.listbox);
			if (this.button) this.createPopper();

			if (!isOpen) this.closeListbox(null, false);
		}

		document.addEventListener('click', this.onDocumentClick);
		document.addEventListener('keydown', this.onDocumentKeyDown);
	}

	componentDidUpdate(prevProps: DropdownProps, prevState: DropdownState): void {
		const {
			isOpen,
			selected,
			placement,
			modifiers,
			strategy,
			onFirstUpdate,
		} = this.props;
		const { isOpen: stateExpanded, shouldReturnFocus } = this.state;

		if (prevState.isOpen && !isOpen && shouldReturnFocus && this.button) {
			this.button.focus();
		}

		if (prevProps.selected !== selected) {
			this.closeListbox(selected);
		}

		if (!prevProps.isOpen && isOpen) {
			this.openListbox();
		} else if (prevProps.isOpen && !isOpen) {
			this.closeListbox();
		}

		// update popper options
		if (this.popper) {
			const opts: Partial<PopperOptions> = {};

			if (prevProps.placement !== placement) {
				opts.placement = placement;
			}
			if (prevProps.modifiers !== modifiers) {
				opts.modifiers = modifiers;
			}
			if (prevProps.strategy !== strategy) {
				opts.strategy = strategy;
			}
			if (prevProps.onFirstUpdate !== onFirstUpdate) {
				opts.onFirstUpdate = onFirstUpdate;
			}

			if (Object.keys(opts).length) {
				this.popper.setOptions(opts);
				this.popper.update();
			}
		}

		if (!prevState.isOpen && stateExpanded) {
			this.createPopper();
		} else if (prevState.isOpen && !stateExpanded) {
			this.destroyPopper();
		}
	}

	private get listboxId(): string { return `${this.id}-listbox`; }
	private get labelId(): string { return `${this.id}-label`; }
	private get currentId(): string { return `${this.id}-current`; }

	private get Button(): React.ReactElement | null {
		const {
			baseName,
			buttonClass = `${baseName}__${Dropdown.bemElements.button}`,
		} = this.props;
		const { isOpen, selected, width } = this.state;

		return (
			<BaseButton
				style={{ width }}
				id={this.id}
				className={buttonClass}
				type="button"
				aria-expanded={(isOpen) ? 'true' : 'false'}
				aria-labelledby={`${this.labelId} ${this.currentId}`}
				aria-haspopup="listbox"
				aria-controls={this.listboxId}
				onClick={this.onButtonClick}
				onKeyDown={this.onButtonKeyDown}
				ref={(el): void => { this.button = el; }}
			>
				<span id={this.currentId}>{ selected }</span>
				<Icon variant="chevron-down" />
			</BaseButton>
		);
	}

	private get Listbox(): React.ReactElement | null {
		const {
			baseName,
			listboxClass = `${baseName}__${Dropdown.bemElements.listbox}`,
			optionClass = `${baseName}__${Dropdown.bemElements.option}`,
			options,
		} = this.props;
		const { isOpen, selected } = this.state;
		if (!isOpen) return null;
		return (
			<BaseListbox
				id={this.listboxId}
				selected={[selected]}
				options={options}
				ref={(el): void => { this.listbox = el; }}
				className={listboxClass}
				aria-labelledby={this.labelId}
				optionClass={optionClass}
				onRequestSelect={this.requestSelect}
			/>
		);
	}

	private onButtonClick: BaseButtonProps['onClick'] = () => {
		const { isOpen } = this.state;
		this.setState({ isOpen: !isOpen });
	}

	private onButtonKeyDown: BaseButtonProps['onKeyDown'] = (e) => {
		if (e.key === 'ArrowDown') {
			this.setState({ isOpen: true });
			e.preventDefault();
		}
	}

	private onDocumentClick = (e: MouseEvent): void => {
		const { isOpen } = this.state;
		if (!isOpen) return;
		const { closeOnExternalClick } = this.props;
		const path = e.composedPath();
		const buttonClicked = this.button && path.includes(this.button);
		const listboxClicked = this.listbox && path.includes(this.listbox);
		if (closeOnExternalClick && !buttonClicked && !listboxClicked) {
			this.requestClose(false);
		}
	}

	private onDocumentKeyDown = (e: KeyboardEvent): void => {
		const { isOpen } = this.state;
		if (!isOpen) return;

		const { closeOnDocumentEscape } = this.props;
		if (closeOnDocumentEscape && e.key === 'Escape') {
			this.requestClose();
		}
		if (e.key === 'Tab') {
			this.requestClose();
		}
	}

	private openListbox = (): void => {
		this.setState({ isOpen: true });
	}

	private closeListbox = (
		selected?: DropdownState['selected'] | null,
		shouldReturnFocus = true,
	): void => {
		const { isOpen, selected: currentSelected } = this.state;
		if (!isOpen) return;

		this.setState({
			isOpen: false,
			shouldReturnFocus,
			selected: selected || currentSelected,
		});
	}

	private createPopper = (): void => {
		const {
			placement,
			modifiers,
			strategy,
			onFirstUpdate,
		} = this.props;

		if (this.button && this.listbox) {
			this.popper = createPopper(
				this.button,
				this.listbox,
				{
					modifiers,
					strategy,
					onFirstUpdate,
					placement,
				},
			);
		}
	}

	private destroyPopper = (): void => {
		if (this.popper) this.popper.destroy();
	}

	private setWidth = (listbox: HTMLUListElement): void => {
		this.setState({ width: listbox.offsetWidth });
	}

	private requestClose = (shouldReturnFocus = true): void => {
		const { isOpen } = this.state;
		if (!isOpen) return;
		const { onRequestClose } = this.props;
		if (onRequestClose) {
			this.setState({ shouldReturnFocus });
			onRequestClose();
		} else {
			this.closeListbox(null, shouldReturnFocus);
		}
	}

	private requestSelect = (value: React.ReactText[]): void => {
		const { onRequestSelect } = this.props;
		if (onRequestSelect) {
			onRequestSelect(value[0]);
		} else {
			this.closeListbox(value[0]);
		}
	}

	render(): React.ReactElement {
		const {
			baseName,
			labelClass = `${baseName}__${Dropdown.bemElements.label}`,
			label,
		} = this.props;
		const { selected } = this.state;

		return (
			<div className={baseName}>
				<div className={labelClass} id={this.labelId}>{ label }</div>
				{ this.Button }
				{ this.Listbox }
				{/* invisible <select> ensures that `Dropdown` is a valid form element. */}
				<select
					name={label}
					aria-hidden="true"
					hidden
					defaultValue={selected}
				>
					<option value={selected}>{ selected }</option>
				</select>
			</div>
		);
	}
}
