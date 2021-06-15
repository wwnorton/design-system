import React from 'react';
import {
	withKnobs, select, optionsKnob, boolean, number,
} from '@storybook/addon-knobs';
import { placements } from '@popperjs/core/lib/enums';
import { Button, Listbox, Option } from '../..';
import { Popper } from './Popper';
import { useExternalClick, useSelect } from '../../utilities';
import { ListboxProps } from '../Listbox';

export default {
	title: 'Popper',
	component: Popper,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => {
	const [isOpen, setIsOpen] = React.useState(true);
	return (
		<Popper isOpen={isOpen}>
			Popper components have no styling by default.
			<div>
				<button type="button" onClick={() => setIsOpen(false)}>
					Close popper
				</button>
			</div>
		</Popper>
	);
};

export const Minimal: React.FunctionComponent = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [button, setButton] = React.useState<HTMLButtonElement | null>();

	return (
		<>
			<Button
				variant="solid"
				ref={setButton}
				onClick={() => setIsOpen(!isOpen)}
			>
				Show popover
			</Button>
			<Popper
				transition={optionsKnob(
					'Transition',
					{ Fade: 'fade', Grow: 'grow', None: undefined },
					undefined,
					{ display: 'inline-radio' },
				)}
				enableArrow={boolean('Arrow', false)}
				distance={number('Distance', 6, {
					range: true, min: 0, max: 24, step: 1,
				})}
				placement={select('Placement', placements, 'bottom-start')}
				reference={button}
				isOpen={isOpen}
				style={{
					['--nds-popper-border-width' as string]: '3px',
					['--nds-background-color' as string]: 'var(--nds-red-30)',
					backgroundColor: 'var(--nds-background-color)',
					border: 'var(--nds-popper-border-width) solid var(--nds-red-50)',
					maxWidth: 200,
				}}
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco
			</Popper>
		</>
	);
};

export const BasicDropdown: React.FunctionComponent = () => {
	const [listbox, setListbox] = React.useState<HTMLUListElement | null>(null);
	const [autofocus, setAutofocus] = React.useState(true);
	const [isOpen, setIsOpen] = React.useState(false);
	const [button, setButton] = React.useState<HTMLButtonElement | null>();
	const { selected, toggle } = useSelect(false);
	const [optionFocusIndex, setOptionFocusIndex] = React.useState(0);
	const [buttonText, setButtonText] = React.useState<React.ReactNode>('Select');

	const close = () => setIsOpen(false);

	const changeHandler: ListboxProps['onChange'] = ({ value, label }) => {
		toggle(value);
		close();
		setButtonText(label);
	};

	useExternalClick([button, listbox], close);

	return (
		<>
			<Button
				variant="outline"
				aria-haspopup="listbox"
				aria-expanded={isOpen}
				ref={setButton}
				onClick={() => setIsOpen(!isOpen)}
				icon="chevron-down"
				iconRight
				style={{ minWidth: 150, justifyContent: 'space-between' }}
			>
				{buttonText}
			</Button>
			<Popper
				transition="fade"
				placement="bottom-start"
				reference={button}
				isOpen={isOpen}
				distance={4}
				onEntered={() => {
					setAutofocus(false);
				}}
				onExited={() => {
					setAutofocus(true);
					if (button) {
						/**
						 * Wait briefly to ensure that the listbox doesn't immediately
						 * reopen if exit was triggered by selecting an option with
						 * the `Enter` key.
						 */
						window.setTimeout(() => button.focus(), 10);
					}
				}}
				matchWidth
			>
				<Listbox
					aria-label="Choose an animal"
					selected={selected}
					onChange={changeHandler}
					focusableIndex={optionFocusIndex}
					autofocus={autofocus}
					ref={setListbox}
					onOptionFocus={(_, i) => setOptionFocusIndex(i)}
					style={{ backgroundColor: 'var(--nds-background-color)' }}
				>
					<Option value="dog">🐶 Dog</Option>
					<Option value="cat">🐱 Cat</Option>
					<Option value="hamster">🐹 Hamster</Option>
					<Option value="parrot">🦜 Parrot</Option>
					<Option value="spider">🕷️ Spider</Option>
					<Option value="fish">🐠 Fish</Option>
				</Listbox>
			</Popper>
		</>
	);
};
