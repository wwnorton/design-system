import React from 'react';
import { PopperOptions } from '../../utilities/popper/types';
import { FieldInfoCoreProps } from '../Field';
import { PopperProps } from '../Popper';

type BaseProps = 'children' | 'className' | 'disabled' | 'id';

type PopperInherited = Pick<PopperProps,
| 'isOpen'
| 'distance'
| 'transition'
| 'placement'
| 'modifiers'
| 'strategy'
| 'distance'
| 'onFirstUpdate'
>;

export interface OnChangeData { value: React.ReactText; contents: React.ReactNode }

export interface DropdownProps
	extends FieldInfoCoreProps, PopperInherited, Partial<PopperOptions>,
	Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, BaseProps> {
	/** The name of the dropdown. Required. */
	label: React.ReactNode;
	/**
	 * The options for the listbox. Each will be rendered inside an `Option`
	 * component. When specifying an option as an `OptionProps` object,
	 * the option's value must be the `OptionProps['children']`.
	 */
	children: React.ReactChild[];
	/** Sort options by value. `undefined` will leave the options unsorted. */
	sort?: 'ascending' | 'descending';
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
	 * * `undefined` - no width matching should be done.
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
	/** The class name for the popper. */
	popperClass?: string;
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
	/** If set, the focusable dropdown option should be focused when it is rendered. */
	autofocus?: boolean;
}
