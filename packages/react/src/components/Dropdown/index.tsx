import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import { FieldInfo } from '../Field';
import { canUseDOM } from '../../utilities/environment';
import { useSelect, useLayoutEffect } from '../../utilities';
import { Popper } from '../Popper';
import { Button } from '../Button';
import {
	Listbox,
	ListboxProps,
	Option,
	OptionProps,
} from '../Listbox';
import { DropdownProps } from './types';

type DropdownType = React.FunctionComponent<DropdownProps> & {
	Option: typeof Option;
};

export const Dropdown: DropdownType = ({
	label,
	description,
	selected: selectedProps = '',
	buttonContents: contentsProp = 'Select',
	autofocus = true,
	isOpen = false,
	matchWidth,
	buttonWidth,
	sort,
	baseName = 'nds-dropdown',
	buttonClass = `${baseName}__button`,
	popperClass = `${baseName}__popper`,
	listboxClass = `${baseName}__listbox`,
	id: idProp,
	className,
	labelClass,
	descriptionClass,
	closeOnExternalClick = true,
	closeOnDocumentEscape = true,
	onRequestClose,
	onRequestOpen,
	onChange,
	onFirstUpdate,
	labelId: labelIdProp,
	descriptionId: descIdProp,
	buttonId: buttonIdProp,
	listboxId: listboxIdProp,
	disabled,
	children,
	placement = 'bottom-start',
	strategy = 'fixed',
	transition = 'fade',
	distance = 4,
	modifiers = [
		{
			name: 'offset',
			options: {
				offset: [0, distance],
			},
		},
	],
}: DropdownProps) => {
	const [open, setOpen] = React.useState(false);
	const id = React.useRef(idProp || uniqueId(`${baseName}-`));
	const labelId = React.useRef(labelIdProp || `${id.current}-label`);
	const descId = React.useRef(descIdProp || `${id.current}-desc`);
	const buttonId = React.useRef(buttonIdProp || `${id.current}-btn`);
	const [button, setButton] = React.useState<HTMLButtonElement | null>(null);
	const [listbox, setListbox] = React.useState<HTMLUListElement | null>(null);
	const [listboxWidth, setListBoxWidth] = React.useState<number>();
	const [buttonContents, setButtonContents] = React.useState<React.ReactNode>(contentsProp);
	const [shouldReturnFocus, setShouldReturnFocus] = React.useState(false);
	const [optionFocusIndex, setOptionFocusIndex] = React.useState(0);
	const { selected, toggle } = useSelect(false, [selectedProps]);

	const listboxId = React.useRef(listboxIdProp || `${id.current}-listbox`);
	const currentId = React.useRef(`${id.current}-curr`);
	const getListboxWidth = React.useRef(false);

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

	// focus the button when focus should return to it
	React.useEffect(() => {
		if (!open && shouldReturnFocus && button !== null) {
			if (canUseDOM && 'requestAnimationFrame' in window) {
				window.requestAnimationFrame(() => button.focus());
			}
			setShouldReturnFocus(false);
		}
	}, [button, open, shouldReturnFocus]);

	// close the listbox if the Dropdown is disabled while open
	React.useEffect(() => {
		if (disabled) {
			setShouldReturnFocus(true);
			closeListbox();
		}
	}, [disabled, closeListbox]);

	// close the listbox if the Dropdown is disabled while open
	React.useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	/** A compare function that will sort children by value */
	const sorter = React.useMemo(() => {
		if (!sort) return null;
		return (a: OptionProps, b: OptionProps): number => {
			const valueA = String(a.value).toUpperCase();
			const valueB = String(b.value).toUpperCase();
			const mod = sort === 'descending' ? -1 : 1;
			if (valueA < valueB) return -1 * mod;
			if (valueA > valueB) return 1 * mod;
			return 0;
		};
	}, [sort]);

	const options = React.useMemo(() => {
		const opts = React.Children.map(children, (child) => {
			let props: OptionProps;
			if (React.isValidElement(child)) {
				props = {
					...child.props,
					value:
						typeof child.props.value === 'number'
						|| child.props.value !== undefined
							? child.props.value
							: child.props.children.toString(),
				};
			} else {
				props = { value: child.toString(), children: child };
			}
			return props;
		});
		return sorter ? opts.sort(sorter) : opts;
	}, [children, sorter]);

	/** Attempt to close the listbox on document click. */
	const documentClickHandler = React.useCallback(
		(e: MouseEvent): void => {
			const path = e.composedPath();
			const buttonClicked = button && path.includes(button);
			const listboxClicked = listbox && path.includes(listbox);
			if (closeOnExternalClick && !buttonClicked && !listboxClicked) {
				setShouldReturnFocus(false);
				closeListbox();
			}
		},
		[button, listbox, closeOnExternalClick, closeListbox],
	);

	/** Attempt to close the listbox on `Escape` or `Tab`. */
	const documentKeydownHandler = React.useCallback(
		(e: KeyboardEvent): void => {
			if (!open) return;
			if (closeOnDocumentEscape && e.key === 'Escape') {
				setShouldReturnFocus(true);
				closeListbox();
			}
			if (e.key === 'Tab') {
				setShouldReturnFocus(false);
				closeListbox();
			}
		},
		[open, closeListbox, closeOnDocumentEscape],
	);

	const changeHandler: ListboxProps['onChange'] = (props) => {
		if (onChange) {
			const { value } = props;
			onChange({ value, contents: props.label });
		} else {
			toggle(props.value);
		}

		setButtonContents(props.label);
		setShouldReturnFocus(true);
		closeListbox();
		setOptionFocusIndex(props.selectedIndex || 0);
	};

	// focus the button when focus should return to it
	React.useEffect(() => {
		if (!open && shouldReturnFocus && button !== null) {
			if (canUseDOM && 'requestAnimationFrame' in window) {
				window.requestAnimationFrame(() => button.focus());
			}
			setShouldReturnFocus(false);
		}
	}, [button, open, shouldReturnFocus]);

	// get the width of the listbox any time it changes
	useLayoutEffect(() => {
		if (listbox) setListBoxWidth(listbox.offsetWidth);
	}, [listbox]);

	/**
	 * If the listbox width is being retrieved, set the open state to its
	 * initial state. If `isOpen` is `false` (default), this will close the
	 * listbox. Triggered by the on load effect.
	 */
	useLayoutEffect(() => {
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
			getListboxWidth.current = true;
			setOpen(true);
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	// attach and detach document listeners
	useLayoutEffect(() => {
		document.addEventListener('keydown', documentKeydownHandler);
		document.addEventListener('click', documentClickHandler);

		return (): void => {
			document.removeEventListener('keydown', documentKeydownHandler);
			document.removeEventListener('click', documentClickHandler);
		};
	}, [documentKeydownHandler, documentClickHandler]);

	return (
		<div className={classNames(baseName, className)} id={id.current}>
			<FieldInfo
				label={label}
				labelClass={labelClass}
				labelId={labelId.current}
				description={description}
				descriptionClass={descriptionClass}
				descriptionId={descId.current}
			/>
			<Button
				id={buttonId.current}
				className={buttonClass}
				disabled={disabled}
				variant="outline"
				style={{ width: matchWidth === 'listbox' ? listboxWidth : buttonWidth }}
				aria-expanded={open ? 'true' : undefined}
				aria-labelledby={`${labelId.current} ${currentId.current}`}
				aria-haspopup="listbox"
				aria-controls={open ? listboxId.current : undefined}
				onClick={buttonClickHandler}
				ref={setButton}
				icon={getListboxWidth.current ? undefined : 'chevron-down'}
				iconRight
			>
				<span id={currentId.current}>{buttonContents}</span>
			</Button>
			<Popper
				placement={placement}
				className={popperClass}
				reference={button}
				isOpen={open}
				modifiers={modifiers}
				strategy={strategy}
				distance={distance}
				transition={transition}
				onFirstUpdate={onFirstUpdate}
				matchWidth={matchWidth === 'button'}
			>
				<Listbox
					id={listboxId.current}
					multiselectable={false}
					className={listboxClass}
					selected={selected}
					onChange={changeHandler}
					focusableIndex={optionFocusIndex}
					autofocus={autofocus}
					ref={setListbox}
				>
					{options}
				</Listbox>
			</Popper>
		</div>
	);
};

Dropdown.Option = Option;
