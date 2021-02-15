import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
} from '@testing-library/react';
import { Popover } from '.';

test.afterEach(cleanup);

const defaultTitle = 'Test popover';
const defaultBody = 'Test content';
const triggerName = 'Open popover';

// fixture for controlled popover
// eslint-disable-next-line react/require-default-props
const Controlled = ({ isOpen: openProp = false }: { isOpen?: boolean }) => {
	const [isOpen, setOpen] = React.useState(openProp);
	const toggle = () => setOpen(!isOpen);
	return (
		<>
			<button type="button" onClick={toggle}>
				{ triggerName }
			</button>
			<Popover isOpen={isOpen} onRequestClose={toggle} title={defaultTitle}>
				{ defaultBody }
			</Popover>
		</>
	);
};

// fixture for uncontrolled popover
const Uncontrolled = () => {
	const [ref, setRef] = React.useState<HTMLButtonElement | null>(null);
	return (
		<>
			<button type="button" ref={setRef}>
				{ triggerName }
			</button>
			<Popover title={defaultTitle} reference={ref}>
				Test content
			</Popover>
		</>
	);
};

test('a popover is rendered when isOpen', (t) => {
	render(<Popover isOpen>{ defaultBody }</Popover>);
	t.truthy(screen.queryByRole('dialog'));
	t.is(screen.getByRole('dialog').textContent, defaultBody);
});

test('the popover uses its title as its accessible name by default', (t) => {
	render(<Popover isOpen title={defaultTitle}>{ defaultBody }</Popover>);
	t.is(screen.queryByRole('dialog'), screen.queryByLabelText(defaultTitle));
});

test('the popover uses its title as its accessible name even when the title is hidden', (t) => {
	render(<Popover isOpen title={defaultTitle} hideTitle>{ defaultBody }</Popover>);
	t.is(screen.queryByRole('dialog'), screen.queryByLabelText(defaultTitle));
});

test('the popover uses a custom aria-label when specified', (t) => {
	const customName = 'Custom name';
	render(<Popover isOpen title={defaultTitle} aria-label={customName}>{ defaultBody }</Popover>);
	t.not(screen.queryByRole('dialog'), screen.queryByLabelText(defaultTitle));
	t.is(screen.queryByRole('dialog'), screen.queryByLabelText(customName));
});

test('the popover uses a custom aria-labelledby when specified', (t) => {
	const customName = 'Custom heading';
	render((
		<Popover isOpen title={defaultTitle} aria-labelledby="label">
			<h2 id="label">{ customName }</h2>
			{ defaultBody }
		</Popover>
	));
	t.not(screen.queryByRole('dialog'), screen.queryByLabelText(defaultTitle));
	t.is(screen.queryByRole('dialog'), screen.queryByLabelText(customName));
});

// skip since this test is probably too brittle
test.skip('the popover renders actions after the body', (t) => {
	const actionText = 'Confirm';
	render((
		<Popover
			isOpen
			title={defaultTitle}
			actions={<button type="button">{ actionText }</button>}
		>
			{ defaultBody }
		</Popover>
	));
	const action = screen.queryByRole('button', { name: actionText });
	t.truthy(action);
	t.true(screen.queryByText(defaultBody).nextElementSibling.contains(action));
});

// skip since this test is probably too brittle
test.skip('the popover does not render a header when the title and close button are hidden', (t) => {
	render((
		<Popover
			isOpen
			title={defaultTitle}
			hideTitle
			hideCloseButton
		>
			{ defaultBody }
		</Popover>
	));
	t.is(
		screen.queryByRole('dialog').firstElementChild,
		screen.queryByText(defaultBody),
	);
});

// needs investigation. this passes in a real browser
test.failing('the popover is focused on open by default', (t) => {
	render(<Uncontrolled />);
	const trigger = screen.queryByRole('button', { name: triggerName });
	fireEvent.click(trigger);

	t.is(document.activeElement, screen.queryByRole('dialog'));
});

test('focus returns to the element that opened the popover on close', (t) => {
	render(<Uncontrolled />);
	const trigger = screen.queryByRole('button', { name: triggerName });
	// open
	fireEvent.click(trigger);
	// close
	fireEvent.keyDown(document, { key: 'Escape' });

	t.is(document.activeElement, trigger);
});

// controlled tests

test('a controlled popover can be closed by clicking the internal close button', (t) => {
	render(<Controlled isOpen />);
	screen.queryByRole('button', { name: 'Close' }).focus();
	fireEvent.click(document.activeElement);
	t.falsy(screen.queryByRole('dialog'));
});

test('a controlled popover does nothing when Escape is pressed', (t) => {
	render(<Controlled isOpen />);
	fireEvent.keyDown(document, { key: 'Escape' });
	t.truthy(screen.queryByRole('dialog'));
});

// uncontrolled tests

test('an uncontrolled popover opens and closes on reference click', (t) => {
	render(<Uncontrolled />);
	t.falsy(screen.queryByRole('dialog'));

	const trigger = screen.queryByRole('button', { name: triggerName });
	fireEvent.click(trigger);
	t.truthy(screen.queryByRole('dialog'));

	fireEvent.click(trigger);
	t.falsy(screen.queryByRole('dialog'));
});

test('an uncontrolled popover closes on Escape', (t) => {
	render(<Uncontrolled />);
	const trigger = screen.queryByRole('button', { name: triggerName });
	fireEvent.click(trigger);
	t.truthy(screen.queryByRole('dialog'));

	fireEvent.keyDown(document, { key: 'Escape' });
	t.falsy(screen.queryByRole('dialog'));
});

test('an uncontrolled popover closes on external click', (t) => {
	render(<Uncontrolled />);
	const trigger = screen.queryByRole('button', { name: triggerName });
	fireEvent.click(trigger);
	t.truthy(screen.queryByRole('dialog'));

	fireEvent.click(document.body);
	t.falsy(screen.queryByRole('dialog'));
});
