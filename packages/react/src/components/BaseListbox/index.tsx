import React from 'react';
import BaseListOption, { BaseListOptionProps } from '../BaseListOption';

export interface BaseListboxProps extends React.HTMLAttributes<HTMLUListElement> {
	/**
	 * The listbox's options. Each will be rendered inside a `BaseListOption`
	 * component. When specifying an option as a `BaseListOptionProps` object,
	 * the option's value must be the `BaseListOptionProps['children']`.
	 */
	options: (React.ReactText | BaseListOptionProps)[];
	/** A list of selected options. */
	selected?: React.ReactText[];
	/** Indicates whether multiple options can be selected in the list. */
	multiselect?: boolean;
	/** The initially focused index. Default is `0`. */
	initialFocusIndex?: number;

	/** The class name that will be applied to the `BaseListOption`. */
	optionClass?: string;
	/**
	 * The class name that will be applied to the `BaseListOption`'s selection
	 * marker (an SVG checkmark). Only visible when the option is selected.
	 */
	optionMarkerClass?: string;
	/** The class name that will be applied to the `BaseListOption` */
	optionValueClass?: string;

	/**
	 * Callback function that is called when an option is selected. This will
	 * occur when the user clicks an option, or when they press `Enter` or
	 * `Space` on the currently focused option.
	 */
	onRequestSelect?: (value: React.ReactText[]) => void;
	/** Callback function that is called when focus changes within the listbox. */
	onFocusChange?: (focusedElement: HTMLLIElement) => void;
}

interface BaseListbox extends React.ForwardRefRenderFunction<HTMLUListElement, BaseListboxProps> {
	Option: typeof BaseListOption;
}

const BaseListbox: BaseListbox = ({
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	children,
	options,
	selected = [],
	'aria-orientation': ariaOrientation = 'vertical',
	optionClass,
	optionMarkerClass,
	optionValueClass,
	onRequestSelect,
	onFocusChange,
	...attributes
}: BaseListboxProps, ref) => {
	const selectedIndex = options.indexOf(selected[0]);
	const [focused, setFocused] = React.useState((selectedIndex > -1) ? selectedIndex : 0);
	const optionRefs = React.useRef<React.RefObject<HTMLLIElement>[]>([]);

	// request select and focus the requested option on click
	const onClick = (value: React.ReactText) => (): void => {
		if (onRequestSelect) {
			onRequestSelect([value]);
		}

		setFocused(options.indexOf(value));
	};

	// move focus on keydown.(arrow keys)
	const onKeyDown = (e: React.KeyboardEvent<HTMLLIElement>): void => {
		const nextKey = (ariaOrientation === 'vertical') ? 'ArrowDown' : 'ArrowRight';
		const prevKey = (ariaOrientation === 'vertical') ? 'ArrowUp' : 'ArrowLeft';
		if ([nextKey, prevKey, 'Home', 'End', ' '].includes(e.key)) {
			e.preventDefault();
		}

		let nextFocus = focused;
		if (e.key === nextKey) nextFocus = focused + 1;
		if (e.key === prevKey) nextFocus = focused - 1;
		if (e.key === 'End') nextFocus = options.length - 1;
		if (e.key === 'Home') nextFocus = 0;

		// never go below the first or above the last option
		nextFocus = Math.max(Math.min(nextFocus, options.length - 1), 0);

		if (nextFocus !== focused) {
			setFocused(nextFocus);
		}
	};

	// request selection on keyup.space
	const onKeyUp = (value: React.ReactText) => (e: React.KeyboardEvent<HTMLLIElement>): void => {
		if (e.key === ' ' && onRequestSelect) {
			onRequestSelect([value]);
		}
	};

	// request selection on keypress.enter
	const onKeyPress = (value: React.ReactText) => (e: React.KeyboardEvent<HTMLLIElement>): void => {
		if (e.key === 'Enter' && onRequestSelect) {
			onRequestSelect([value]);
		}
	};

	const ListOptions = (): React.ReactElement[] => options.map((opt, i) => {
		const props = (typeof opt === 'object')
			? opt
			: { children: opt };
		const value = props.children || '';
		const liRef = React.createRef<HTMLLIElement>();
		optionRefs.current.push(liRef);
		if (i === focused && liRef.current) liRef.current.focus();

		return (
			<BaseListbox.Option
				key={value}
				className={optionClass}
				markerClass={optionMarkerClass}
				valueClass={optionValueClass}

				isSelected={selected.includes(value)}
				tabIndex={(i === focused) ? 0 : -1}
				onClick={onClick(value)}
				onKeyDown={onKeyDown}
				onKeyUp={onKeyUp(value)}
				onKeyPress={onKeyPress(value)}
				ref={liRef}
				{...props}
			/>
		);
	});

	// call DOM focus() on the appropriate element when `focused` changes
	React.useEffect(() => {
		const option = optionRefs.current[focused].current;
		if (option) {
			option.focus();
			if (onFocusChange) onFocusChange(option);
		}
	}, [focused, optionRefs, onFocusChange]);

	return (
		<ul
			role="listbox"
			ref={ref}
			{...attributes}
		>
			{ ListOptions() }
		</ul>
	);
};

BaseListbox.Option = BaseListOption;

/**
 * A listbox is "a widget that allows the user to select one or more items from
 * a list of choices." Similar to a `<select>` element.
 * @ARIA https://w3c.github.io/aria/#listbox
 * @APG https://w3c.github.io/aria-practices/#Listbox
 */
const BaseListboxForwardRef = React.forwardRef(BaseListbox);

export default BaseListboxForwardRef;
