import React from 'react';
import { Choice, ChoiceProps } from './Choice';

export interface ChoicesProps extends ChoiceProps {
	choices: (React.ReactText | ChoiceProps)[];
	selected?: React.ReactText[] | React.ReactText;
}

/**
 * Convert a list of choice values or choice props into a memoized array of
 * Choice elements.
 */
export const Choices: React.FunctionComponent<ChoicesProps> = ({
	choices,
	selected,
	multiple,
	...props
}: ChoicesProps) => {
	// coerce the selected prop value into an array
	const propSelected = React.useMemo(() => {
		if (Array.isArray(selected)) return selected;
		if (selected !== undefined) return [selected];
		return [];
	}, [selected]);

	const ChoiceElements = React.useMemo(() => {
		let selectedValid = false;
		const choicesMap = choices.map((choice, i) => {
			let value: React.ReactText;
			let choiceProps: ChoiceProps;
			if (typeof choice === 'object') {
				value = (choice.value || choice.children || '').toString();
				choiceProps = { ...choice, ...props, value };
			} else {
				value = choice;
				choiceProps = { value, children: value, ...props };
			}
			const key = (value !== undefined) ? value.toString() : `choice-${i}`;
			const checked = propSelected.includes(value);
			if (checked) selectedValid = true;

			return (
				<Choice
					key={key}
					{...choiceProps}
					checked={checked}
					type={(multiple) ? 'checkbox' : 'radio'}
				/>
			);
		});
		if (!selectedValid) {
			// TODO: do something when the selected value doesn't exist in the
			// list of choices
		}
		return choicesMap;
	}, [choices, props, propSelected, multiple]);

	// ChoiceElements is an array of elements, so we must wrap it in a fragment.
	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{ ChoiceElements }</>;
};
