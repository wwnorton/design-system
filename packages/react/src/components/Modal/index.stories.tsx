import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs, boolean, text, select,
} from '@storybook/addon-knobs';
import { Modal } from '.';
import { Button } from '../Button';
import { TextField } from '../TextField';
import { shortContent, longContent } from './modal.fixtures';

export default {
	title: 'Modal',
	component: Modal,
	decorators: [withKnobs],
};

const { defaultProps } = Modal;

export const Default: React.FunctionComponent = () => {
	const [isOpen, setOpen] = React.useState(true);

	return (
		<Modal
			title={text('Title', 'Modal title')}
			hideTitle={boolean('Hide title', defaultProps.hideTitle)}
			hideCloseButton={boolean('Hide close button', false)}
			closeOnBackdropClick={boolean('Close on backdrop click', defaultProps.closeOnBackdropClick)}
			closeOnEscape={boolean('Close on Escape', defaultProps.closeOnEscape)}
			onRequestClose={() => setOpen(false)}
			stickyHeader={boolean('Sticky header', false)}
			stickyActionBar={boolean('Sticky action bar', false)}
			isOpen={isOpen}
		>
			{
				select(
					'Content',
					{ Short: 'short', Long: 'long' },
					'short',
				) === 'short' ? shortContent : longContent
			}
		</Modal>
	);
};

export const WithActionBar: React.FunctionComponent = () => {
	const [isOpen, setOpen] = React.useState(true);

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={() => setOpen(false)}
			title={text('Title', 'Modal title')}
			hideCloseButton={boolean('Hide close button', false)}
			actions={(
				<>
					<Button variant="outline">Not okay</Button>
					<Button variant="solid">Okay</Button>
				</>
			)}
			stickyHeader={boolean('Sticky header', false)}
			stickyActionBar={boolean('Sticky action bar', false)}
		>
			{
				select(
					'Content',
					{ Short: 'short', Long: 'long' },
					'short',
				) === 'short' ? shortContent : longContent
			}
		</Modal>
	);
};

export const MultiModal: React.FunctionComponent = () => {
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
			<Button variant="solid" onClick={open}>Open</Button>
			<Modal
				title="Your name"
				focusOnOpen={firstNameRef}
				isOpen={isOpen}
				onOpen={action('onOpen')}
				onRequestClose={close}
				closeOnEscape={!resultOpen}
				hideTitle={boolean('Hide title', defaultProps.hideTitle)}
				hideCloseButton={boolean('Hide close button', false)}
				closeOnBackdropClick={boolean('Close on backdrop click', defaultProps.closeOnBackdropClick)}
			>
				<form onSubmit={submit} onChange={handleChange}>
					<TextField required value={firstName} ref={setFirstNameRef}>First Name</TextField>
					<TextField required value={lastName} ref={setLastNameRef}>Last Name</TextField>
					<Button variant="solid" type="submit">Submit</Button>
				</form>
			</Modal>
			<Modal
				title="Result"
				hideTitle
				isOpen={resultOpen}
				onRequestClose={closeResult}
			>
				{ `Hello, ${firstName} ${lastName}!` }
			</Modal>
		</>
	);
};
