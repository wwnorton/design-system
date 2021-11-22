export type OptionBase = Omit<React.LiHTMLAttributes<HTMLLIElement>, 'role' | 'aria-selected'>;

export interface OptionProps extends OptionBase {
	/** If set, this option is not selectable. */
	disabled?: boolean;
	/** The displayed option name. This will override `children`. */
	label?: React.ReactNode;
	/** Indicates that this option is currently selected. */
	selected?: boolean;
	/**
	 * The value of the option that will be submitted. If undefined, the `label`
	 * or `children` will be used as the `value`.
	 */
	value: string | number;
	/**
	 * An element that comes before the label/children, similar to CSS `::marker`.
	 * Default is `<Icon variant="check" />`. Disable it entirely with `null`.
	 */
	marker?: React.ReactNode | null;

	optionClass?: string;
}

export type ListboxBase = Omit<React.HTMLAttributes<HTMLUListElement>, 'role' | 'aria-multiselectable' | 'aria-orientation' | 'onChange'>;

export interface ListboxProps extends ListboxBase {
	/**
	 * A list of options as either an array of `value` props, an array of `OptionProps`
	 * objects, or an object with `label: value` entries. Array values will be
	 * used as both the `label` and the `value`.
	 *
	 * ```jsx
     * options={['Cat', 'Dog']}
	 * 	// <Listbox>
	 * 	// 	<Option value="Cat">Cat</Option>
	 * 	// 	<Option value="Dog">Dog</Option>
	 * 	// </Listbox>
     * ```
	 *
	 * ```jsx
     * options={[{ label: 'Cat', value: '🐱' }, { label: 'Dog', value: '🐶' }]}
	 * 	// <Listbox>
	 * 	// 	<Option value="🐱">Cat</Option>
	 * 	// 	<Option value="🐶">Dog</Option>
	 * 	// </Listbox>
     * ```
	 *
	 * ```jsx
     * options={{ Cat: '🐱', Dog: '🐶' }}
	 * 	// <Listbox>
	 * 	// 	<Option value="🐱">Cat</Option>
	 * 	// 	<Option value="🐶">Dog</Option>
	 * 	// </Listbox>
	 * ```
	 */
	options?: Record<string, string | number> | (string | number | OptionProps)[];
	/** Option props that should be mapped to all child options. */
	optionProps?: Partial<OptionProps> | ((index: number) => Partial<OptionProps>);
	/**
	 * Indicates that more than one item can be selected. Used to set the
	 * [aria-multiselectable](https://www.w3.org/TR/wai-aria/#aria-multiselectable) value.
	 */
	multiselectable?: boolean;
	/**
	 * Indicates whether the listbox is arranged horizontally, vertically, or unknown.
	 * Used to set the [aria-orientation](https://www.w3.org/TR/wai-aria/#aria-orientation)
	 * value and affects which arrow keys can be used to move focus within it.
	 */
	orientation?: 'horizontal' | 'vertical';
	/** The currently selected value(s). */
	selected?: (string | number)[];
	/** A callback that will trigger any time selection changes. */
	onChange?: (props: OptionProps & { value: string | number; label: React.ReactNode; }) => void;
	/** If set, the focusable listbox option should be focused when it is rendered. */
	autofocus?: boolean;
	/** The index of the option that should be focusable. */
	focusableIndex?: number;
	/**
	 * If set, focus will move from the last option to the first option when the
	 * user presses `ArrowDown`, and vice versa.
	 */
	focusWrap?: boolean;
	/** A callback that will trigger when an option is focused. */
	onOptionFocus?: (e: React.FocusEvent<HTMLLIElement>, index: number) => void;
	/** The class name that will be applied to all `options` children. */
	optionClass?: string;
}
