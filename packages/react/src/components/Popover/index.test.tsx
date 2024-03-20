import test from 'ava';
import React from 'react';
import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import { Popover, PopoverProps } from '.';

test.afterEach(cleanup);

const defaultTitle = 'Test popover';
const defaultBody = 'Test content';
const triggerName = 'Open popover';

// fixture for controlled popover
const Fixture = ({ isOpen: openProp, ...props }: Partial<PopoverProps>) => {
	const [isOpen, setOpen] = React.useState(openProp || false);
	const [ref, setRef] = React.useState<HTMLButtonElement | null>(null);
	React.useEffect(() => setOpen(openProp), [openProp]);
	return (
		<>
			<button type="button" ref={setRef}>
				{triggerName}
			</button>
			<Popover
				reference={ref}
				isOpen={isOpen}
				onRequestClose={() => setOpen(false)}
				onRequestOpen={() => setOpen(true)}
				title={defaultTitle}
				{...props}
			>
				{defaultBody}
			</Popover>
		</>
	);
};

test('a popover is rendered when isOpen', (t) => {
	render(<Popover isOpen>{defaultBody}</Popover>);
	t.truthy(screen.queryByRole('dialog'));
});

test('the popover uses its title as its accessible name by default', (t) => {
	render(
		<Popover isOpen title={defaultTitle}>
			{defaultBody}
		</Popover>,
	);
	t.is(screen.queryByRole('dialog'), screen.queryByLabelText(defaultTitle));
});

test('the popover uses its title as its accessible name even when the title is hidden', (t) => {
	render(
		<Popover isOpen title={defaultTitle} hideTitle>
			{defaultBody}
		</Popover>,
	);
	t.is(screen.queryByRole('dialog'), screen.queryByLabelText(defaultTitle));
});

test('the popover uses a custom aria-label when specified', (t) => {
	const customName = 'Custom name';
	render(
		<Popover isOpen title={defaultTitle} aria-label={customName}>
			{defaultBody}
		</Popover>,
	);
	t.not(screen.queryByRole('dialog'), screen.queryByLabelText(defaultTitle));
	t.is(screen.queryByRole('dialog'), screen.queryByLabelText(customName));
});

test('the popover uses a custom aria-labelledby when specified', (t) => {
	const customName = 'Custom heading';
	render(
		<Popover isOpen title={defaultTitle} aria-labelledby="label">
			<h2 id="label">{customName}</h2>
			{defaultBody}
		</Popover>,
	);
	t.not(screen.queryByRole('dialog'), screen.queryByLabelText(defaultTitle));
	t.is(screen.queryByRole('dialog'), screen.queryByLabelText(customName));
});

test('the popover is focused on open by default', (t) => {
	render(<Fixture />);
	const trigger = screen.queryByRole('button', { name: triggerName });
	fireEvent.click(trigger);

	t.is(document.activeElement, screen.queryByRole('dialog'));
});

test('focus returns to the element that opened the popover on close', (t) => {
	render(<Fixture isOpen />);
	const trigger = screen.queryByRole('button', { name: triggerName });
	// close
	fireEvent.keyDown(document, { key: 'Escape' });

	t.is(document.activeElement, trigger);
});

test('clicking the reference button opens and closes the popover', (t) => {
	render(<Fixture />);
	const trigger = screen.queryByRole('button', { name: triggerName });

	// open
	fireEvent.click(trigger);
	t.truthy(screen.queryByRole('dialog'));

	// close
	fireEvent.click(trigger);
	t.falsy(screen.queryByRole('dialog'));
});

test('clicking the close button closes the popover and focuses the reference', (t) => {
	render(<Fixture isOpen />);
	const trigger = screen.queryByRole('button', { name: triggerName });
	const closeButton = screen.queryByRole('button', { name: 'Close' });
	fireEvent.click(closeButton);
	t.falsy(screen.queryByRole('dialog'));
	t.is(document.activeElement, trigger);
});

test('Escape closes the popover and focuses the reference', (t) => {
	render(<Fixture isOpen />);
	const trigger = screen.queryByRole('button', { name: triggerName });
	fireEvent.keyDown(document, { key: 'Escape' });
	t.falsy(screen.queryByRole('dialog'));
	t.is(document.activeElement, trigger);
});

test("clicking outside the popover closes the popover but doesn't focus the reference", (t) => {
	render(<Fixture isOpen />);
	const trigger = screen.queryByRole('button', { name: triggerName });
	fireEvent.click(document.body);
	t.falsy(screen.queryByRole('dialog'));
	t.not(document.activeElement, trigger);
});

test('clicking inside the popover does not close the popover', (t) => {
	render(<Fixture isOpen />);
	fireEvent.click(screen.queryByRole('dialog'));
	t.truthy(screen.queryByRole('dialog'));
});
