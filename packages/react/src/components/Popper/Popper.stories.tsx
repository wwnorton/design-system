import React from 'react';
import type { VirtualElement } from '@popperjs/core';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Listbox, Option } from '../..';
import { Popper } from '.';
import { useExternalClick } from '../../utilities';
import { ListboxProps } from '../Listbox';

const meta = {
	title: 'Utilities/Popper',
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

export const ContextMenu = {
	render: (args) => {
		const [listbox, setListbox] = React.useState<HTMLUListElement | null>(null);
		const [autofocus, setAutofocus] = React.useState(true);
		const [isOpen, setIsOpen] = React.useState(false);
		const [reference, setReference] = React.useState<VirtualElement | null>(null);
		const [optionFocusIndex, setOptionFocusIndex] = React.useState(0);
		const [lastAction, setLastAction] = React.useState<React.ReactNode>(null);

		const close = () => setIsOpen(false);

		const openAt = (clientX: number, clientY: number) => {
			setReference({
				getBoundingClientRect: () =>
					DOMRect.fromRect({
						x: clientX,
						y: clientY,
						width: 0,
						height: 0,
					}),
			});
			setIsOpen(true);
		};

		const changeHandler: ListboxProps['onChange'] = ({ label }) => {
			close();
			setLastAction(label);
		};

		useExternalClick([listbox], close);

		React.useEffect(() => {
			const onKeyDown = (e: KeyboardEvent) => {
				if (e.key === 'Escape') close();
			};
			document.addEventListener('keydown', onKeyDown);
			return () => document.removeEventListener('keydown', onKeyDown);
		}, []);

		return (
			<>
				<p>{lastAction ? <>Last action: {lastAction}</> : 'Right-click the area below.'}</p>
				<div
					onContextMenu={(e) => {
						e.preventDefault();
						openAt(e.clientX, e.clientY);
					}}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						minHeight: 200,
						border: '1px dashed var(--nds-base-color-60)',
						userSelect: 'none',
					}}
				>
					Right-click here
				</div>
				<Popper
					transition="fade"
					placement="bottom-start"
					reference={reference}
					isOpen={isOpen}
					distance={0}
					onEntered={() => {
						setAutofocus(false);
					}}
					onExited={() => {
						setAutofocus(true);
					}}
					{...args}
				>
					<Listbox
						aria-label="Context menu"
						onChange={changeHandler}
						focusableIndex={optionFocusIndex}
						autofocus={autofocus}
						ref={setListbox}
						onOptionFocus={(_, i) => setOptionFocusIndex(i)}
						style={{ backgroundColor: 'var(--nds-background-color)' }}
					>
						<Option value="cut">Cut</Option>
						<Option value="copy">Copy</Option>
						<Option value="paste">Paste</Option>
						<Option value="delete">Delete</Option>
					</Listbox>
				</Popper>
			</>
		);
	},
} satisfies Story;
