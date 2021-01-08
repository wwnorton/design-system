import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
} from '@testing-library/react';
import { Popover } from '.';

test.afterEach(cleanup);

const defaultTitle = 'Test popover';

test('a popover is rendered when `isOpen`', (t) => {
	render(<Popover isOpen>{ defaultTitle }</Popover>);
	t.is(screen.getByRole('dialog', { hidden: true }).textContent, defaultTitle);
});

// fixture for controlled open tests
// eslint-disable-next-line react/require-default-props
const Controlled = ({ isOpen: openProp = false }: { isOpen?: boolean }) => {
	const [isOpen, setOpen] = React.useState(openProp);
	const toggle = () => setOpen(!isOpen);
	return (
		<>
			<button
				type="button"
				onClick={() => setOpen(true)}
				data-testid="trigger"
			>
				Open popover
			</button>
			<Popover
				isOpen={isOpen}
				onRequestClose={toggle}
				title={defaultTitle}
				trigger='mouseenter'
			>
				Test content
			</Popover>
		</>
	);
};

test('the popover can be closed by clicking the internal close button', (t) => {
	render(<Controlled isOpen />);
	fireEvent.click(document.activeElement);
	t.falsy(screen.queryByRole('dialog'));
});

test('the popover can be closed with the `Escape` key', (t) => {
	render(<Controlled isOpen />);
	fireEvent.keyDown(document.activeElement, { key: 'Escape' });
	t.falsy(screen.queryByRole('dialog'));
});

test('on close, focus returns to the element that opened the popover', (t) => {
	render(<Controlled />);
	const trigger = screen.getByTestId('trigger');
	// force focus on the trigger since fireEvent.click doesn't simulate it
	trigger.focus();
	// open the popover
	fireEvent.click(trigger);
	// close the popover
	fireEvent.keyDown(document.activeElement, { key: 'Escape' });

	t.is(document.activeElement, trigger);
});
