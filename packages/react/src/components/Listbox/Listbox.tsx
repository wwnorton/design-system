import React from 'react';
import {
	useForwardedRef, useRovingTabindex, useSelect, toElements,
} from '../../utilities';
import { Option } from './Option';
import { ListboxProps, OptionProps } from './types';

export { ListboxProps } from './types';

/**
 * A listbox allows the user to select one or more option from a list of options.
 *
 * Reference:
 * - [HTML - `<datalist>`](https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element)
 * - [ARIA - `listbox`](https://w3c.github.io/aria/#listbox)
 * - [ARIA Practices - Listbox](https://w3c.github.io/aria-practices/#Listbox)
 */
export const Listbox = React.forwardRef<HTMLUListElement, ListboxProps>(({
	options: optionsProp,
	optionProps,
	multiselectable,
	selected: selectedProp,
	onChange,
	autofocus,
	focusableIndex,
	focusWrap,
	onOptionFocus,
	className = 'nds-listbox',
	children: childrenProp,
	optionClass = 'nds-option',
	orientation,
	...listboxProps
}: ListboxProps, ref) => {
	const [listbox, setListbox] = useForwardedRef(ref);
	const [keyboardClick, setKeyboardClick] = React.useState(false);
	const disabledOptions = React.useRef(new Set<number>());

	/**
	 * Coerce the `options` or `children` into `ReactElement[]` so that we can map
	 * them to `Option` components. If it exists, use the `options` prop. If not,
	 * use the `children` prop.
	 */
	const options = React.useMemo(() => {
		let opts = childrenProp;
		if (optionsProp) {
			if (Array.isArray(optionsProp)) {
				opts = optionsProp.map((opt) => {
					if (typeof opt === 'object') {
						const missingProps: string[] = [];
						if (!('value' in opt)) missingProps.push('value');
						if (!('label' in opt)) missingProps.push('label');
						if (missingProps.length) {
							throw new Error(
								'The <Listbox> options prop must contain a value and label when an array of objects. '
								+ `Missing props: ${missingProps.join(',')}.`,
							);
						}
						return opt;
					}
					return { label: opt.toString(), value: opt };
				});
			} else {
				opts = Object.keys(optionsProp).map((label) => ({
					label,
					value: optionsProp[label],
				}));
			}
		}
		return toElements<OptionProps>(opts);
	}, [optionsProp, childrenProp]);

	const selectedOptions = React.useMemo(
		() => options.filter(({ props }) => props.selected).map(({ props }) => props.value),
		[options],
	);

	const { selected: selectedUC, toggle } = useSelect(multiselectable, selectedOptions);
	const selected = (selectedProp !== undefined) ? selectedProp : selectedUC;

	React.useEffect(() => {
		if (!multiselectable && selected.length > 1) {
			throw new Error(useSelect.SELECT_OVERLOAD);
		}
	}, [multiselectable, selected]);

	const keys = React.useMemo(() => {
		switch (orientation) {
			case 'vertical': return { nextKeys: ['ArrowDown'], prevKeys: ['ArrowUp'] };
			case 'horizontal': return { nextKeys: ['ArrowRight'], prevKeys: ['ArrowLeft'] };
			default: return {};
		}
	}, [orientation]);

	const {
		dispatch,
		containerProps: { onKeyDown, onBlur },
		childProps: { createRef, tabIndex },
	} = useRovingTabindex<HTMLUListElement, HTMLLIElement>({
		container: listbox,
		size: options.length,
		initialIndex: focusableIndex,
		wrap: focusWrap,
		autofocus,
		disabledItems: disabledOptions.current,
		...keys,
	});

	const Options = React.useMemo(() => (
		options.map(({ props }, i) => {
			const mappedProps = (typeof optionProps === 'function')
				? optionProps(i)
				: optionProps;

			const {
				children,
				disabled,
				value,
				label = children || value,
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				selected: optionSelected,
				...optProps
			}: OptionProps = {
				...mappedProps,
				...props,
			};

			if (!value) {
				throw new Error('<Option> elements must provide a value prop.');
			}

			if (disabled) {
				disabledOptions.current.add(i);
			} else {
				disabledOptions.current.delete(i);
			}

			const select = () => {
				if (onChange) {
					onChange({
						children,
						disabled,
						...optProps,
						value,
						label,
					}, i);
				} else if (!selectedProp) {
					toggle(value);
				}
			};

			return (
				<Option
					key={value}
					value={value}
					label={label}
					selected={selected.includes(value)}
					disabled={disabled}
					className={optionClass}
					tabIndex={(disabled) ? -1 : tabIndex(i)}
					/**
					 * - do nothing if disabled
					 * - move focus to the index
					 * - select the option
					 */
					onClick={(e) => {
						if (disabled) {
							e.preventDefault();
							return;
						}
						dispatch({ type: 'GOTO', payload: i });
						select();
					}}
					/**
					 * - select on enter
					 * - begin click on space bar
					 */
					onKeyDown={(e) => {
						if (e.key === 'Enter') select();
						if (e.key === ' ') {
							e.preventDefault();
							setKeyboardClick(true);
						}
					}}
					/**
					 * select on space bar up, but only if the space bar
					 * was depressed on this option. this ensures that
					 * clicks with space bar can be cancelled.
					 */
					onKeyUp={({ key }) => {
						if (key === ' ' && keyboardClick) {
							select();
							setKeyboardClick(false);
						}
					}}
					/** cancel space bar click */
					onBlur={() => setKeyboardClick(false)}
					onFocus={(e) => {
						if (onOptionFocus) onOptionFocus(e, i);
					}}
					ref={(disabled) ? undefined : createRef(i)}
					{...optProps}
				>
					{ children }
				</Option>
			);
		})
	), [
		createRef, dispatch, keyboardClick, onChange, onOptionFocus,
		optionProps, options, selected, selectedProp, tabIndex, toggle, optionClass,
	]);

	return (
		<ul
			ref={setListbox}
			className={className}
			aria-orientation={orientation}
			onKeyDown={onKeyDown}
			onBlur={onBlur}
			{...listboxProps}
			// role and aria-multiselectable cannot be overridden
			role="listbox"
			aria-multiselectable={multiselectable}
		>
			{ Options }
		</ul>
	);
});
