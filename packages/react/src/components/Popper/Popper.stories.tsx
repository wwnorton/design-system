import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Listbox, Option } from '../..';
import { Popper } from '.';
import { useExternalClick, useSelect } from '../../utilities';
import { ListboxProps } from '../Listbox';

const meta = {
	title: 'Components/Popper',
	component: Popper,
	argTypes: {
		enableArrow: { control: { type: 'boolean' } },
		distance: {
			control: {
				type: 'range',
				min: 0,
				max: 20,
				step: 1,
			},
		},
	},
	render: ({ isOpen: isOpenProp, ...args }) => {
		const [isOpen, setIsOpen] = React.useState(isOpenProp);
		return (
			<Popper {...args} isOpen={isOpen}>
				<p>
					Popper components are used for positioning an element relative to another component and
					have no styling by default.
				</p>
				<p>This Popper has no reference element.</p>
				<div>
					<button type="button" onClick={() => setIsOpen(false)}>
						Close popper
					</button>
				</div>
			</Popper>
		);
	},
} satisfies Meta<typeof Popper>;

export default meta;

type Story = StoryObj<typeof Popper>;

export const Default = {
	args: { isOpen: true },
} satisfies Story;

export const WithReference = {
	render: (args) => {
		const [isOpen, setIsOpen] = React.useState(false);
		const [button, setButton] = React.useState<HTMLButtonElement | null>();

		return (
			<>
				<Button variant="solid" ref={setButton} onClick={() => setIsOpen(!isOpen)}>
					Show popover
				</Button>
				<Popper
					reference={button}
					isOpen={isOpen}
					style={{
						['--nds-popper-border-width' as string]: '3px',
						['--nds-background-color' as string]: 'var(--nds-red-30)',
						backgroundColor: 'var(--nds-background-color)',
						border: 'var(--nds-popper-border-width) solid var(--nds-red-50)',
						maxWidth: 200,
					}}
					{...args}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco
				</Popper>
			</>
		);
	},
	args: {
		placement: 'right-start',
		distance: 6,
		enableArrow: false,
		transition: 'fade',
	},
} satisfies Story;

export const BasicDropdown = {
	render: (args) => {
		const [listbox, setListbox] = React.useState<HTMLUListElement | null>(null);
		const [autofocus, setAutofocus] = React.useState(true);
		const [isOpen, setIsOpen] = React.useState(false);
		const [button, setButton] = React.useState<HTMLButtonElement | null>(null);
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
					{...args}
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
	},
} satisfies Story;
