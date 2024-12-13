import React from 'react';
import { action } from '@storybook/addon-actions';
import { Modal, ModalProps } from '.';
import { Button } from '../Button';
import { TextField } from '../TextField';
import { shortContent, longContent } from './modal.fixtures';

export default {
	title: 'Modal',
	component: Modal,
	argTypes: {
		isOpen: { control: { type: 'boolean' } },
		hideTitle: { control: { type: 'boolean' } },
		hideCloseButton: { control: { type: 'boolean' } },
	},
};

const ModalTemplate = ({ isOpen: isOpenProp, ...args }: ModalProps) => {
	const [isOpen, setOpen] = React.useState(isOpenProp);
	React.useEffect(() => setOpen(isOpenProp), [isOpenProp]);

	return <Modal {...args} isOpen={isOpen} onRequestClose={() => setOpen(false)} />;
};

export const Default = ModalTemplate.bind({});
Default.args = {
	isOpen: true,
	title: 'Default modal dialog',
	children: shortContent,
};

export const LongContent = ModalTemplate.bind({});
LongContent.args = {
	isOpen: true,
	title: 'Modal dialog with long content',
	children: longContent,
};

export const WithActionBar = ModalTemplate.bind({});
WithActionBar.args = {
	isOpen: true,
	title: 'Modal dialog with an action bar',
	actions: (
		<>
			<Button variant="outline">Not okay</Button>
			<Button variant="solid">Okay</Button>
		</>
	),
	children: shortContent,
};

export const ComplexModal = (args: ModalProps) => {
	const [firstNameRef, setFirstNameRef] = React.useState<HTMLInputElement | null>(null);
	const [lastNameRef, setLastNameRef] = React.useState<HTMLInputElement | null>(null);
	const [isOpen, setOpen] = React.useState(false);
	const [lastName, setFirst] = React.useState('');
	const [firstName, setLast] = React.useState('');
	const [resultOpen, setResultOpen] = React.useState(false);
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
				{...args}
			>
				<form onSubmit={submit} onChange={handleChange}>
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
};
ComplexModal.args = {
	title: 'Your name',
};
