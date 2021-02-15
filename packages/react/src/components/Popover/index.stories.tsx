import React from 'react';
import {
	withKnobs,
	select,
	boolean,
	text,
} from '@storybook/addon-knobs';
import { placements } from '@popperjs/core/lib/enums';
import { Popover } from '.';
import { Button } from '../Button';
import { TextField } from '../TextField';

export default {
	title: 'Popover',
	component: Popover,
	decorators: [withKnobs],
	parameters: {
		layout: 'padded',
	},
};

export const Default: React.FunctionComponent = () => (
	<Popover
		title={text('Title', 'Popover title')}
		hideTitle={boolean('Hide title', false)}
		hideCloseButton={boolean('Hide close button', false)}
		placement={select('Placement', placements, 'bottom-start')}
		isOpen
	>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco
	</Popover>
);

export const WithReference: React.FunctionComponent = () => {
	const [ref, setRef] = React.useState<HTMLButtonElement | null>(null);
	return (
		<>
			<Button variant="solid" ref={setRef}>
				Show popover
			</Button>
			<Popover
				title={text('Title', 'Popover title')}
				hideTitle={boolean('Hide title', false)}
				hideCloseButton={boolean('Hide close button', false)}
				placement={select('Placement', placements, 'bottom-start')}
				reference={ref}
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Ut enim ad minim veniam, quis nostrud exercitation ullamco
			</Popover>
		</>
	);
};

/**
 * This example demos how to fully control the state of a Popover.
 * The following features are related to the Popover API:
 * - use of `isOpen` forces the popover into controlled (manual) state. this means
 *   that the story is responsible for implementing all actions that open/close the popover.
 * - popover is labelled by the text field's label, so it doesn't need a `title`
 *
 * The following features are unrelated to Popover but are good practice:
 * - the submit button ([type=submit]) is external to the form so it uses the `form`
 *   attribute to associate itself with the form element. this causes the button
 *   to trigger the form's `onSubmit` action on click, which is why there is no
 *   onClick callback.
 * - a text field contained by a form will trigger the onSubmit action on Enter
 */
export const Controlled: React.FunctionComponent = () => {
	const [ref, setRef] = React.useState<HTMLButtonElement | null>();
	const [buttonText, setButtonText] = React.useState('Change this button\'s text');
	const [inputText, setInputText] = React.useState(buttonText);
	const [input, setInput] = React.useState<HTMLInputElement | null>(null);
	const [isOpen, setOpen] = React.useState(false);

	const toggle = (): void => {
		setInputText(buttonText);
		setOpen(!isOpen);
	};
	const close = () => setOpen(false);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (input) setInputText(e.target.value);
	};
	const submit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setButtonText(inputText);
		close();
	};
	return (
		<>
			<Button variant="solid" ref={setRef} onClick={toggle}>
				{ buttonText }
			</Button>
			<Popover
				aria-labelledby="change-btn"
				hideCloseButton={boolean('Hide close button', true)}
				placement={select('Placement', placements, 'top-start')}
				reference={ref}
				isOpen={isOpen}
				onRequestClose={close}
				actions={boolean('Action bar', true) && (
					<>
						<Button variant="outline" onClick={close}>
							Cancel
						</Button>
						<Button variant="solid" type="submit" form="demo-form">
							Submit
						</Button>
					</>
				)}
			>
				<form id="demo-form" onSubmit={submit}>
					<TextField
						labelId="change-btn"
						required
						value={inputText}
						ref={setInput}
						onChange={handleChange}
					>
						Button text
					</TextField>
				</form>
			</Popover>
		</>
	);
};
