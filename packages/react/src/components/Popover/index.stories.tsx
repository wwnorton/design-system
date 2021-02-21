import React from 'react';
import {
	withKnobs,
	select,
	boolean,
	text,
} from '@storybook/addon-knobs';
import { placements } from '@popperjs/core/lib/enums';
import { Popover, Button, TextField } from '../..';

export default {
	title: 'Popover',
	component: Popover,
	decorators: [withKnobs],
	parameters: {
		layout: 'padded',
	},
};

export const Default: React.FunctionComponent = () => {
	const [isOpen, setIsOpen] = React.useState(true);
	return (
		<Popover
			title={text('Title', 'Popover title')}
			hideTitle={boolean('Hide title', false)}
			hideCloseButton={boolean('Hide close button', false)}
			placement={select('Placement', placements, 'bottom-start')}
			isOpen={isOpen}
			onRequestClose={() => setIsOpen(false)}
		>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco
		</Popover>
	);
};

/**
 * This example demos the minimal setup.
 * - The triggering element must use a callback ref, which is bound to the
 *   Popover's `reference` prop. This lets the popover know where to position.
 * - Requests to open and close are used to update the `isOpen` state.
 */
export const Minimal: React.FunctionComponent = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [ref, setRef] = React.useState<HTMLButtonElement | null>();

	return (
		<>
			<Button variant="solid" ref={setRef}>
				Show popover
			</Button>
			<Popover
				title={text('Title', 'Popover title')}
				hideTitle={boolean('Hide title', true)}
				hideCloseButton={boolean('Hide close button', true)}
				placement={select('Placement', placements, 'bottom-start')}
				reference={ref}
				isOpen={isOpen}
				onRequestClose={() => setIsOpen(false)}
				onRequestOpen={() => setIsOpen(true)}
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
 * - The Popover is labelled by the text field's label, so it doesn't need a `title`.
 * - The input is focused on open, overriding the default `onOpen` callback, which
 *   focuses the popover dialog itself.
 * - Opening is triggered by setting an `onClick` callback on the reference button
 *   so `onRequestOpen` is not used.
 *
 * The following features are unrelated to Popover but are good practice:
 * - the submit button ([type=submit]) is external to the form so it uses the `form`
 *   attribute to associate itself with the form element. this causes the button
 *   to trigger the form's `onSubmit` action on click, which is why there is no
 *   onClick callback.
 * - a text field contained by a form will trigger the onSubmit action on Enter
 */
export const FullyControlled: React.FunctionComponent = () => {
	const [ref, setRef] = React.useState<HTMLButtonElement | null>();
	const [buttonText, setButtonText] = React.useState('Change this button\'s text');
	const [inputText, setInputText] = React.useState(buttonText);
	const [input, setInput] = React.useState<HTMLInputElement | null>(null);
	const [isOpen, setOpen] = React.useState(false);

	const open = (): void => {
		setInputText(buttonText);
		setOpen(true);
	};
	const close = (trigger) => {
		// don't close on reference clicks since we're using our own onClick callback
		if (trigger !== 'click.reference') setOpen(false);
	};
	const toggle = (t) => ((isOpen) ? close(t) : open());

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (input) setInputText(e.target.value);
	};
	const submit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setButtonText(inputText);
		close('submit');
	};

	return (
		<>
			<Button variant="solid" ref={setRef} onClick={toggle}>
				{ buttonText }
			</Button>
			<Popover
				aria-labelledby="change-btn"
				hideCloseButton={boolean('Hide close button', true)}
				placement={select('Placement', placements, 'bottom-start')}
				reference={ref}
				isOpen={isOpen}
				onRequestClose={close}
				onOpen={() => input && input.focus()}
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
