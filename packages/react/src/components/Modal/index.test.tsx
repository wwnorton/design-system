import test from 'ava';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from '.';
import { shortContent } from './modal.fixtures';

test.afterEach(cleanup);

const defaultTitle = 'Test modal';

test('the default modal contains focus when open', async (t) => {
	render(
		<Modal isOpen title={defaultTitle}>
			{shortContent}
		</Modal>,
	);
	t.true(screen.getByRole('dialog').contains(document.activeElement));
});

test('a modal without the default close button contains focus when open', async (t) => {
	render(
		<Modal isOpen title={defaultTitle} hideCloseButton>
			{shortContent}
		</Modal>,
	);
	t.true(screen.getByRole('dialog').contains(document.activeElement));
});

test('a modal with no focusable elements still contains focus when open', async (t) => {
	render(
		<Modal isOpen title={defaultTitle} hideTitle hideCloseButton>
			{shortContent}
		</Modal>,
	);
	t.true(screen.getByRole('dialog').contains(document.activeElement));
});

test('the initially focused element can be chosen before render', async (t) => {
	const testId = 'focused';
	const InitiallyFocused = () => {
		const [el, setEl] = React.useState<HTMLButtonElement | null>(null);
		return (
			<Modal isOpen title={defaultTitle} focusOnOpen={el}>
				{shortContent}
				<button type="button" ref={setEl} data-testid={testId}>
					Focused button
				</button>
			</Modal>
		);
	};

	render(<InitiallyFocused />);
	t.is(document.activeElement, screen.getByTestId(testId));
});

// fixture for inner focus tests
const InnerFocus = () => (
	<Modal
		isOpen
		title={defaultTitle}
		hideCloseButton
		actions={
			<>
				<button type="button" data-testid="second">
					Second
				</button>
				<button type="button" data-testid="last">
					Last
				</button>
			</>
		}
	>
		<button type="button" data-testid="first">
			First
		</button>
		{shortContent}
	</Modal>
);

test('`Shift + Tab` wraps focus when on the first focusable element', async (t) => {
	const user = userEvent.setup();

	render(<InnerFocus />);
	await user.tab({ shift: true });
	t.is(document.activeElement, screen.getByTestId('last'));
});

test('`Tab` wraps focus when on the last focusable element', async (t) => {
	const user = userEvent.setup();

	render(<InnerFocus />);
	const lastEl = screen.getByTestId('last');
	lastEl.focus();
	await user.tab();
	t.is(document.activeElement, screen.getByTestId('first'));
});

// fixture for controlled open tests
// eslint-disable-next-line react/require-default-props
const Controlled = ({ isOpen: openProp = false }: { isOpen?: boolean }) => {
	const [isOpen, setOpen] = React.useState(openProp);
	const toggle = () => setOpen(!isOpen);
	return (
		<>
			<button type="button" onClick={() => setOpen(true)} data-testid="trigger">
				Open modal
			</button>
			<Modal isOpen={isOpen} onRequestClose={toggle} title={defaultTitle}>
				{shortContent}
			</Modal>
		</>
	);
};

test('the modal can be closed by clicking the internal close button', async (t) => {
	const user = userEvent.setup();

	render(<Controlled isOpen />);
	await user.keyboard('{Enter}');
	t.falsy(screen.queryByRole('dialog'));
});

test('the modal can be closed by clicking the backdrop', async (t) => {
	const user = userEvent.setup();
	render(<Controlled isOpen />);
	const backdrop = screen.getByRole('dialog').parentElement as HTMLElement;
	await user.click(backdrop);
	t.falsy(screen.queryByRole('dialog'));
});

test('the modal can be closed with the `Escape` key', async (t) => {
	const user = userEvent.setup();

	render(<Controlled isOpen />);
	await user.keyboard('{Escape}');
	t.falsy(screen.queryByRole('dialog'));
});

test('the modal cannot be closed by releasing the click from inside the dialog to outside', async (t) => {
	const user = userEvent.setup();

	render(<Controlled isOpen />);
	const dialog = screen.getByRole('dialog');
	const backdrop = screen.getByRole('dialog').parentElement as HTMLElement;
	await user.pointer([
		// mouse down on the dialog
		{ keys: '[MouseLeft>]', target: dialog },
		// move outside the dialog
		{ pointerName: 'mouse', target: backdrop, coords: { x: 100, y: 100 } },
		// release the mouse
		{ keys: '[/MouseLeft]' },
	]);
	t.truthy(screen.queryByRole('dialog'));
});

test('on close, focus returns to the element that opened the modal', async (t) => {
	const user = userEvent.setup();

	render(<Controlled />);
	const button = screen.getByRole('button');
	// open the modal
	await user.click(button);
	// close the modal
	await user.keyboard('{Escape}');

	t.is(document.activeElement, button);
});

test('existing body styles are preserved when the modal closes', async (t) => {
	const user = userEvent.setup();

	document.body.style.overflow = 'visible';
	const bodyCSSText = document.body.style.cssText;

	render(<Controlled isOpen />);

	// body styles should be overwritten on open
	t.not(document.body.style.cssText, bodyCSSText);

	await user.keyboard('{Enter}');

	// and restored on close
	t.is(document.body.style.cssText, bodyCSSText);
});
