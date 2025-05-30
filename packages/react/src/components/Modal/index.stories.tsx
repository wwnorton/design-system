import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Modal } from '.';
import { Button } from '../Button';
import { TextField } from '../TextField';
import { shortContent, longContent } from './modal.fixtures';

const meta = {
	title: 'Components/Modal',
	component: Modal,
	argTypes: {
		isOpen: { control: { type: 'boolean' } },
		hideTitle: { control: { type: 'boolean' } },
		hideCloseButton: { control: { type: 'boolean' } },
	},
	args: {
		isOpen: false,
	},
	render: ({ isOpen: isOpenProp, ...args }) => {
		const [isOpen, setOpen] = React.useState(isOpenProp);
		React.useEffect(() => setOpen(isOpenProp), [isOpenProp]);

		return (
			<>
				<Button variant="solid" onClick={() => setOpen(true)}>
					Open the Modal
				</Button>
				<Modal {...args} isOpen={isOpen} onRequestClose={() => setOpen(false)} />
			</>
		);
	},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default = {
	args: {
		title: 'Default modal dialog',
		children: shortContent,
	},
} satisfies Story;

export const LongContent = {
	args: {
		title: 'Modal dialog with long content',
		children: longContent,
	},
} satisfies Story;

export const WithActionBar = {
	args: {
		title: 'Modal dialog with an action bar',
		actions: (
			<>
				<Button variant="outline">Not okay</Button>
				<Button variant="solid">Okay</Button>
			</>
		),
		children: shortContent,
	},
} satisfies Story;

export const DescribedByContents = {
	args: {
		title: 'Described Modal',
		'aria-describedby': 'description',
		children: (
			<p id="description">
				This modal dialog is described by its contents with <code>aria-describedby</code>.
			</p>
		),
	},
} satisfies Story;

export const ComplexModal = {
	render: ({ isOpen: isOpenProp, ...args }) => {
		const [firstNameRef, setFirstNameRef] = React.useState<HTMLInputElement | null>(null);
		const [lastNameRef, setLastNameRef] = React.useState<HTMLInputElement | null>(null);
		const [isOpen, setOpen] = React.useState(isOpenProp);
		const [lastName, setFirst] = React.useState('');
		const [firstName, setLast] = React.useState('');
		const [resultOpen, setResultOpen] = React.useState(false);
		const formId = React.useId();

		const open = (): void => setOpen(true);
		const close = (): void => {
			setOpen(false);
			action('onRequestClose')();
		};
		const submit = (e: React.FormEvent<HTMLFormElement>): void => {
			setResultOpen(true);
			e.preventDefault();
		};
		const handleChange = ({ nativeEvent }: React.FormEvent<HTMLFormElement>): void => {
			const target = nativeEvent.target as HTMLInputElement;
			switch (target) {
				case lastNameRef:
					setFirst(target.value);
					break;
				case firstNameRef:
					setLast(target.value);
					break;
				default:
			}
		};
		const closeResult = (): void => setResultOpen(false);
		return (
			<>
				<Button variant="solid" onClick={open}>
					Open
				</Button>
				<Modal
					focusOnOpen={firstNameRef || undefined}
					isOpen={isOpen}
					onOpen={action('onOpen')}
					onRequestClose={close}
					closeOnEscape={!resultOpen}
					aria-describedby={formId}
					{...args}
				>
					<form onSubmit={submit} onChange={handleChange} id={formId}>
						<TextField required value={firstName} ref={setFirstNameRef}>
							First Name
						</TextField>
						<TextField required value={lastName} ref={setLastNameRef}>
							Last Name
						</TextField>
						<Button variant="solid" type="submit">
							Submit
						</Button>
					</form>
				</Modal>
				<Modal
					title="Result"
					hideTitle
					isOpen={resultOpen}
					onRequestClose={closeResult}
					actions={
						<Button variant="solid" onClick={closeResult}>
							I&apos;m sure
						</Button>
					}
				>
					{`Are you sure, ${firstName} ${lastName}?`}
				</Modal>
			</>
		);
	},
	args: {
		title: 'Your name',
	},
} satisfies Story;
