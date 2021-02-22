import React from 'react';
import { BaseOption, BaseOptionProps } from '../BaseOption';

export interface OnChangeData { value: React.ReactText; contents: React.ReactNode }
export interface BaseListboxProps extends Omit<React.HTMLAttributes<HTMLUListElement>, 'onChange'> {
	/**
	 * The options for the listbox, which can be either an array of strings,
	 * numbers, or `<BaseOption>` elements.
	 */
	children: React.ReactChild[];
	/** The currently selected option value(s). */
	selected?: React.ReactText | React.ReactText[];
	/** The initially focused index. Default is `0`. */
	initialFocusIndex?: number;
	/** Sort options by value. `undefined` will leave the options unsorted. */
	sort?: 'ascending' | 'descending';

	// className props

	/** The class name that will be applied to all `BaseOption` children. */
	optionClass?: string;
	/**
	 * The class name that will be applied to the `BaseOption`'s selection
	 * marker (an SVG check mark). Only visible when the option is selected.
	 */
	markerClass?: string;
	/** The class name that will be applied to the `BaseOption`'s children. */
	contentsClass?: string;

	// callback props

	/**
	 * Callback function that is called when an option is selected. This will
	 * occur when the user clicks an option, or when they press `Enter` or
	 * `Space` on the currently focused option.
	 */
	onChange?: (selected: OnChangeData) => void;
	/** Callback function that is called when focus changes within the listbox. */
	onFocusChange?: (focusedElement: HTMLLIElement) => void;
}

/**
 * A listbox is "a widget that allows the user to select one or more items from
 * a list of choices." Similar to a `<select>` element.
 *
 * Reference:
 * - [ARIA - `listbox`](https://w3c.github.io/aria/#listbox)
 * - [ARIA Practices - Listbox](https://w3c.github.io/aria-practices/#Listbox)
 */
export const BaseListbox = React.forwardRef(({
	children,
	className,
	selected: selectedProp,
	'aria-orientation': ariaOrientation = 'vertical',
	initialFocusIndex,
	sort,
	optionClass,
	markerClass,
	contentsClass,
	onChange,
	onFocusChange,
	...attributes
}: BaseListboxProps, ref) => {
	/** A compare function that will sort children by value */
	const sorter = React.useMemo(() => {
		if (!sort) return null;
		return (a: BaseOptionProps, b: BaseOptionProps): number => {
			const valueA = String(a.value).toUpperCase();
			const valueB = String(b.value).toUpperCase();
			const mod = (sort === 'descending') ? -1 : 1;
			if (valueA < valueB) return -1 * mod;
			if (valueA > valueB) return 1 * mod;
			return 0;
		};
	}, [sort]);

	/**
	 * An array of normalized `BaseOptionProps` created from the list of
	 * `children`. This is done to ensure that a valid `value` exists, which
	 * will either be the child's literal `value` prop if it exists or the
	 * child's own contents (its `children`) cast to a string. Will be sorted if
	 * the `sort` prop was defined.
	 */
	const childrenProps = React.useMemo(() => {
		const options = React.Children.map(children, (child) => {
			let props: BaseOptionProps;
			if (React.isValidElement(child)) {
				if (child.type !== BaseOption) {
					throw new Error(BaseListbox.errors.invalidChild);
				}
				if (!child.props.value && !child.props.children) {
					throw new Error(BaseListbox.errors.noValue);
				}
				props = {
					...child.props,
					value: (typeof child.props.value === 'number' || child.props.value !== undefined)
						? child.props.value
						: child.props.children.toString(),
				};
			} else {
				props = { value: child.toString(), children: child };
			}
			return props;
		});
		return (sorter) ? options.sort(sorter) : options;
	}, [children, sorter]);

	/** The selected prop, coerced into an array. */
	const selected = React.useMemo(() => {
		if (Array.isArray(selectedProp)) return selectedProp;
		return [selectedProp];
	}, [selectedProp]);

	/** A memoized index of the currently selected option */
	const selectedIndex = React.useMemo(
		() => childrenProps.findIndex(({ value }) => value === selected[0]),
		[childrenProps, selected],
	);

	// The index of the currently focused option
	const [focused, setFocused] = React.useState(() => {
		if (initialFocusIndex !== undefined) return initialFocusIndex;
		return (selectedIndex > -1) ? selectedIndex : 0;
	});

	/** A ref store for option HTML elements. */
	const optionRefs = React.useRef<(HTMLLIElement | null)[]>([]);

	/** Request select and focus the requested option on click. */
	const onClick = ({ value, contents }: OnChangeData, disabled?: boolean) => (): void => {
		if (onChange && !disabled) {
			onChange({ value, contents });
		}

		setFocused(childrenProps.findIndex((props) => props.value === value));
	};

	/** Move focus on keydown.(arrow keys). */
	const onKeyDown = (payload: OnChangeData) => (e: React.KeyboardEvent<HTMLLIElement>): void => {
		const nextKey = (ariaOrientation === 'vertical') ? 'ArrowDown' : 'ArrowRight';
		const prevKey = (ariaOrientation === 'vertical') ? 'ArrowUp' : 'ArrowLeft';
		if ([nextKey, prevKey, 'Home', 'End', ' '].includes(e.key)) {
			e.preventDefault();
		}

		let nextFocus = focused;
		if (e.key === nextKey) nextFocus = focused + 1;
		if (e.key === prevKey) nextFocus = focused - 1;
		if (e.key === 'End') nextFocus = childrenProps.length - 1;
		if (e.key === 'Home') nextFocus = 0;

		// never go below the first or above the last option
		nextFocus = Math.max(Math.min(nextFocus, childrenProps.length - 1), 0);

		if (nextFocus !== focused) {
			setFocused(nextFocus);
		}

		// Request selection on Enter
		if (e.key === 'Enter' && e.currentTarget.getAttribute('aria-disabled') !== 'true' && onChange) {
			onChange(payload);
		}
	};

	/** Request selection on keyup.space. */
	const onKeyUp = (payload: OnChangeData) => (
		e: React.KeyboardEvent<HTMLLIElement>,
	): void => {
		if (e.key === ' ' && e.currentTarget.getAttribute('aria-disabled') !== 'true' && onChange) {
			onChange(payload);
		}
	};

	/** The map of `BaseOption` components that will be rendered. */
	const Options: JSX.Element[] = childrenProps.map((props, i) => {
		const { children: contents, disabled } = props;
		const value = props.value as React.ReactText;
		return (
			<BaseListbox.Option
				key={value}
				className={optionClass}
				markerClass={markerClass}
				contentsClass={contentsClass}
				disabled={disabled}
				isSelected={selected.includes(value as React.ReactText)}
				tabIndex={(i === focused) ? 0 : -1}
				onClick={onClick({ value, contents }, disabled)}
				onKeyDown={onKeyDown({ value, contents })}
				onKeyUp={onKeyUp({ value, contents })}
				ref={(item): void => {
					optionRefs.current.push(item);
					if (i === focused && item) item.focus();
				}}
				{...props}
			/>
		);
	});

	// call DOM focus() on the appropriate element when `focused` changes.
	React.useLayoutEffect(() => {
		const option = optionRefs.current[focused];
		if (option) {
			option.focus();
			if (onFocusChange) onFocusChange(option);
		}
	}, [focused, optionRefs, onFocusChange]);

	return (
		<ul
			role="listbox"
			className={className}
			ref={ref}
			{...attributes}
		>
			{ Options }
		</ul>
	);
}) as React.ForwardRefExoticComponent<BaseListboxProps & React.RefAttributes<HTMLUListElement>>
& {
	Option: typeof BaseOption;
	errors: Record<string, string>;
};

BaseListbox.Option = BaseOption;
BaseListbox.errors = {
	invalidChild: 'BaseListbox children must be Option components, strings, or numbers.',
	noValue: 'Options must contain a value prop or children.',
};
