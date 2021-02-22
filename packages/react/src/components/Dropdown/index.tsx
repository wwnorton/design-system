import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import { BaseListbox, BaseListboxProps, OnChangeData } from '../BaseListbox';
import { FieldInfo, FieldInfoCoreProps } from '../Field';
import { Button } from '../Button';
import { canUseDOM, prefix } from '../../config';
import { usePopper } from '../../hooks';
import { PopperOptions, Modifier } from '../../types/popper';

type BaseProps = 'children' | 'className' | 'disabled' | 'id';

export interface DropdownProps
	extends FieldInfoCoreProps, Partial<PopperOptions>,
	Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, BaseProps> {
	/** The name of the dropdown. Required. */
	label: React.ReactNode;
	/**
	 * The options for the listbox. Each will be rendered inside a `BaseOption`
	 * component. When specifying an option as a `BaseOptionProps` object,
	 * the option's value must be the `BaseOptionProps['children']`.
	 */
	children: BaseListboxProps['children'];
	/** Sort options by value. `undefined` will leave the options unsorted. */
	sort?: BaseListboxProps['sort'];
	/** A list of selected options. */
	selected?: React.ReactText;
	/**
	 * The contents of the button. Default is 'Select' on load and then it will
	 * match the contents of the currently selected option if no `onChange`
	 * callback is provided.
	 */
	buttonContents?: React.ReactNode;
	/** Indicates whether the listbox is open. */
	isOpen?: boolean;
	/** Indicates whether clicking outside the listbox should close the listbox. */
	closeOnExternalClick?: boolean;
	/** Indicates whether the dropdown should be closed on `Escape`. */
	closeOnDocumentEscape?: boolean;
	/**
	 * Indicates that the button and listbox should match widths.
	 * * `button` - the listbox will match the width of the button.
	 * * `listbox` - the button will match the width of the listbox.
	 * * `undefined` - not width matching should be done.
	 */
	matchWidth?: 'button' | 'listbox';
	/**
	 * Set the width of the button. Use when `matchWidth="button"` and the
	 * button's width is not set with CSS.
	 */
	buttonWidth?: string | number;
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

	/** An id for the button. */
	buttonId?: string;
	/** An id for the listbox. */
	listboxId?: string;

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
	 * Callback function that is called when the dropdown attempts to open its
	 * listbox. This will occur under the following conditions:
	 * * The user clicks the dropdown button (default: `.dropdown__button`).
	 * * The user presses `ArrowUp` or `ArrowDown` while on the dropdown button.
	 */
	onRequestOpen?: () => void;
	/**
	 * Callback function that is called when an option is selected. This will
	 * occur under the following conditions:
	 * * When the user clicks an option.
	 * * When the user presses `Enter` on the currently focused option.
	 * * When the user releases the space bar on the currently focused option.
	 */
	onChange?: ({ value, contents }: OnChangeData) => void;
}

const matchRefWidth: Modifier<'matchRefWidth', unknown> = {
	name: 'matchRefWidth',
	enabled: true,
	phase: 'beforeWrite',
	requires: ['computeStyles'],
	/* eslint-disable no-param-reassign */
	fn: ({ state }) => {
		state.styles.popper.width = `${state.rects.reference.width}px`;
	},
	effect: ({ state }) => (): void => {
		state.elements.popper.style.width = `${(state.elements.reference as HTMLElement).offsetWidth}px`;
	},
};

type DropdownType = React.FunctionComponent<DropdownProps> & {
	Option: typeof BaseListbox['Option'];
}

export const Dropdown: DropdownType = ({
	label,
	description,
	isOpen = false,
	selected: selectedProp = '',
	buttonContents: contentsProp = 'Select',
	closeOnExternalClick = true,
	closeOnDocumentEscape = true,
	matchWidth,
	buttonWidth,
	sort,
	baseName = prefix('dropdown'),
	buttonClass = `${baseName}__button`,
	listboxClass = `${baseName}__listbox`,
	optionClass = `${baseName}__option`,
	labelClass,
	descriptionClass,
	onRequestClose,
	onRequestOpen,
	onChange,
	placement = 'bottom-start',
	modifiers = [{
		name: 'offset',
		options: {
			offset: [0, 4],
		},
	}],
	strategy,
	onFirstUpdate,
	children,
	id: idProp,
	labelId: labelIdProp,
	descriptionId: descIdProp,
	buttonId: buttonIdProp,
	listboxId: listboxIdProp,
	disabled,
	className,
}: DropdownProps) => {
	const [open, setOpen] = React.useState(isOpen);
	const [selected, setSelected] = React.useState(selectedProp);
	const [buttonContents, setButtonContents] = React.useState<React.ReactNode>(contentsProp);
	const [button, setButton] = React.useState<HTMLButtonElement | null>(null);
	const [listbox, setListbox] = React.useState<HTMLUListElement | null>(null);
	const [listboxWidth, setListboxWidth] = React.useState<number>();
	const [shouldReturnFocus, setShouldReturnFocus] = React.useState(false);
	const getListboxWidth = React.useRef(false);

	const { current: id } = React.useRef(idProp || uniqueId(`${baseName}-`));
	const { current: labelId } = React.useRef(labelIdProp || `${id}-label`);
	const { current: descId } = React.useRef(descIdProp || `${id}-desc`);
	const { current: buttonId } = React.useRef(buttonIdProp || `${id}-btn`);
	const { current: listboxId } = React.useRef(listboxIdProp || `${id}-listbox`);
	const { current: currentId } = React.useRef(`${id}-curr`);

	usePopper({
		reference: button,
		popper: listbox,
		placement,
		modifiers: (matchWidth === 'button') ? [...modifiers, matchRefWidth] : modifiers,
		strategy,
		onFirstUpdate,
	});

	// ensure that props are used as the source of truth for internal state
	React.useEffect(() => setOpen(isOpen), [isOpen]);
	React.useEffect(() => setSelected(selectedProp), [selectedProp]);
	React.useEffect(() => setButtonContents(contentsProp), [contentsProp]);

	/** Attempt to open the listbox. */
	const openListbox = React.useCallback(() => {
		if (onRequestOpen) onRequestOpen();
		else setOpen(true);
	}, [onRequestOpen]);

	/** Attempt to close the listbox. */
	const closeListbox = React.useCallback((): void => {
		if (onRequestClose) onRequestClose();
		else setOpen(false);
	}, [onRequestClose]);

	/** Toggle the listbox on button click. */
	const buttonClickHandler = (): void => {
		if (open) closeListbox();
		else openListbox();
	};

	/** Open the listbox on arrow up or down. */
	const buttonKeydownHandler = (e: React.KeyboardEvent<HTMLButtonElement>): void => {
		if (['ArrowDown', 'ArrowUp'].includes(e.key)) {
			e.preventDefault();
			openListbox();
		}
	};

	/**
	 * Update selected value, button contents, and close the listbox on change.
	 * If an `onChange` callback is provided, assume that state will be
	 * controlled by a parent context.
	 */
	const changeHandler = ({ value, contents }: OnChangeData): void => {
		if (onChange) {
			onChange({ value, contents });
		} else {
			setSelected(value);
		}
		setButtonContents(contents || value);
		setShouldReturnFocus(true);
		closeListbox();
	};

	/** Attempt to close the listbox on `Escape` or `Tab`. */
	const documentKeydownHandler = React.useCallback((e: KeyboardEvent): void => {
		if (!open) return;
		if (closeOnDocumentEscape && e.key === 'Escape') {
			setShouldReturnFocus(true);
			closeListbox();
		}
		if (e.key === 'Tab') {
			setShouldReturnFocus(false);
			closeListbox();
		}
	}, [open, closeListbox, closeOnDocumentEscape]);

	/** Attempt to close the listbox on document click. */
	const documentClickHandler = React.useCallback((e: MouseEvent): void => {
		const path = e.composedPath();
		const buttonClicked = button && path.includes(button);
		const listboxClicked = listbox && path.includes(listbox);
		if (closeOnExternalClick && !buttonClicked && !listboxClicked) {
			setShouldReturnFocus(false);
			closeListbox();
		}
	}, [button, listbox, closeOnExternalClick, closeListbox]);

	// close the listbox if the Dropdown is disabled while open
	React.useEffect(() => {
		if (disabled) {
			setShouldReturnFocus(true);
			closeListbox();
		}
	}, [disabled, closeListbox]);

	// focus the button when focus should return to it
	React.useEffect(() => {
		if (!open && shouldReturnFocus && button !== null) {
			if (canUseDOM && 'requestAnimationFrame' in window) {
				window.requestAnimationFrame(() => button.focus());
			}
			setShouldReturnFocus(false);
		}
	}, [button, open, shouldReturnFocus]);

	// attach and detach document listeners
	React.useLayoutEffect(() => {
		document.addEventListener('keydown', documentKeydownHandler);
		document.addEventListener('click', documentClickHandler);

		return (): void => {
			document.removeEventListener('keydown', documentKeydownHandler);
			document.removeEventListener('click', documentClickHandler);
		};
	}, [documentKeydownHandler, documentClickHandler]);

	// get the width of the listbox any time it changes
	React.useLayoutEffect(() => {
		if (listbox) setListboxWidth(listbox.offsetWidth);
	}, [listbox]);

	/**
	 * If the listbox width is being retrieved, set the open state to its
	 * initial state. If `isOpen` is `false` (default), this will close the
	 * listbox. Triggered by the on load effect.
	 */
	React.useLayoutEffect(() => {
		if (typeof listboxWidth === 'number' && getListboxWidth.current) {
			setOpen(isOpen);
			getListboxWidth.current = false;
		}
	}, [listboxWidth, isOpen]);

	/**
	 * If the button should match the width of the listbox, open the listbox on
	 * load to get the listbox width. This will then trigger a layout effect to
	 * immediately close the listbox.
	 */
	React.useEffect(() => {
		if (matchWidth === 'listbox') {
			setOpen(true);
			getListboxWidth.current = true;
		}
	}, []);	// eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className={classNames(baseName, className)} id={id}>
			<FieldInfo
				label={label}
				labelClass={labelClass}
				labelId={labelId}
				description={description}
				descriptionClass={descriptionClass}
				descriptionId={descId}
			/>
			<Button
				id={buttonId}
				className={buttonClass}
				disabled={disabled}
				variant="outline"
				style={{ width: (matchWidth === 'listbox') ? listboxWidth : buttonWidth }}
				aria-expanded={(open) ? 'true' : undefined}
				aria-labelledby={`${labelId} ${currentId}`}
				aria-haspopup="listbox"
				aria-controls={(open) ? listboxId : undefined}
				onClick={buttonClickHandler}
				onKeyDown={buttonKeydownHandler}
				ref={setButton}
				icon={(getListboxWidth.current) ? undefined : 'chevron-down'}
				iconRight
			>
				<span id={currentId}>{ buttonContents }</span>
			</Button>
			{ open && (
				<BaseListbox
					id={listboxId}
					sort={sort}
					selected={selected}
					className={listboxClass}
					aria-labelledby={labelId}
					optionClass={optionClass}
					markerClass={`${optionClass}-marker`}
					contentsClass={`${optionClass}-label`}
					onChange={changeHandler}
					ref={setListbox}
				>
					{ children }
				</BaseListbox>
			) }
		</div>
	);
};

Dropdown.Option = BaseListbox.Option;

export const { Option } = BaseListbox;
