// import test from 'ava';
// import React from 'react';
// import {
// 	cleanup, render, fireEvent, screen,
// } from '@testing-library/react';
// import {
// 	Tabs, Tab, TabList, TabPanels, TabPanel,
// } from '.';
// import { shortContent } from './modal.fixtures';

// test.afterEach(cleanup);

// test('the default modal contains focus when open', (t) => {
// 	render(<Tabs isOpen title={defaultTitle}>{shortContent}</Tabs>);
// 	t.true(screen.getByRole('dialog').contains(document.activeElement));
// });

// test('a modal without the default close button contains focus when open', (t) => {
// 	render(<Tabs isOpen title={defaultTitle} hideCloseButton>{shortContent}</Tabs>);
// 	t.true(screen.getByRole('dialog').contains(document.activeElement));
// });

// test('a modal with no focusable elements still contains focus when open', (t) => {
// 	render((
// 		<Tabs
// 			isOpen
// 			title={defaultTitle}
// 			hideTitle
// 			hideCloseButton
// 		>
// 			{shortContent}
// 		</Tabs>
// 	));
// 	t.true(screen.getByRole('dialog').contains(document.activeElement));
// });

// test('the initially focused element can be chosen before render', (t) => {
// 	const testId = 'focused';
// 	const InitiallyFocused = () => {
// 		const [el, setEl] = React.useState<HTMLButtonElement | null>(null);
// 		return (
// 			<Tabs isOpen title={defaultTitle} focusOnOpen={el}>
// 				{shortContent}
// 				<button type="button" ref={setEl} data-testid={testId}>Focused button</button>
// 			</Tabs>
// 		);
// 	};

// 	render(<InitiallyFocused />);
// 	t.is(document.activeElement, screen.getByTestId(testId));
// });

// // fixture for inner focus tests
// const InnerFocus = () => (
// 	<Tabs
// 		isOpen
// 		title={defaultTitle}
// 		hideCloseButton
// 		actions={(
// 			<>
// 				<button type="button" data-testid="second">Second</button>
// 				<button type="button" data-testid="last">Last</button>
// 			</>
// 		)}
// 	>
// 		<button type="button" data-testid="first">First</button>
// 		{shortContent}
// 	</Tabs>
// );

// test('`Shift + Tab` wraps focus when on the first focusable element', (t) => {
// 	render(<InnerFocus />);
// 	fireEvent.keyDown(document.activeElement, { key: 'Tab', shiftKey: true });
// 	t.is(document.activeElement, screen.getByTestId('last'));
// });

// test('`Tab` wraps focus when on the last focusable element', (t) => {
// 	render(<InnerFocus />);
// 	const lastEl = screen.getByTestId('last');
// 	lastEl.focus();
// 	fireEvent.keyDown(document.activeElement, { key: 'Tab', shiftKey: false });
// 	t.is(document.activeElement, screen.getByTestId('first'));
// });

// // fixture for controlled open tests
// // eslint-disable-next-line react/require-default-props
// const Controlled = ({ isOpen: openProp = false }: { isOpen?: boolean }) => {
// 	const [isOpen, setOpen] = React.useState(openProp);
// 	const toggle = () => setOpen(!isOpen);
// 	return (
// 		<>
// 			<button
// 				type="button"
// 				onClick={() => setOpen(true)}
// 				data-testid="trigger"
// 			>
// 				Open modal
// 			</button>
// 			<Tabs
// 				isOpen={isOpen}
// 				onRequestClose={toggle}
// 				title={defaultTitle}
// 			>
// 				{shortContent}
// 			</Tabs>
// 		</>
// 	);
// };

// test('the modal can be closed by clicking the internal close button', (t) => {
// 	render(<Controlled isOpen />);
// 	fireEvent.click(document.activeElement);
// 	t.falsy(screen.queryByRole('dialog'));
// });

// test('the modal can be closed by clicking the backdrop', (t) => {
// 	render(<Controlled isOpen />);
// 	fireEvent.click(screen.getByRole('dialog').parentElement);
// 	t.falsy(screen.queryByRole('dialog'));
// });

// test('the modal can be closed with the `Escape` key', (t) => {
// 	render(<Controlled isOpen />);
// 	fireEvent.keyDown(document.activeElement, { key: 'Escape' });
// 	t.falsy(screen.queryByRole('dialog'));
// });

// test('the modal cannot be closed by releasing the click from inside the dialog
// to outside', (t) => {
// 	render(<Controlled isOpen />);
// 	fireEvent.pointerDown(screen.getByRole('dialog'));
// 	fireEvent.pointerUp(screen.getByRole('dialog').parentElement);
// 	t.truthy(screen.queryByRole('dialog'));
// });

// test('on close, focus returns to the element that opened the modal', (t) => {
// 	render(<Controlled />);
// 	const trigger = screen.getByTestId('trigger');
// 	// force focus on the trigger since fireEvent.click doesn't simulate it
// 	trigger.focus();
// 	// open the modal
// 	fireEvent.click(trigger);
// 	// close the modal
// 	fireEvent.keyDown(document.activeElement, { key: 'Escape' });

// 	t.is(document.activeElement, trigger);
// });

// test('existing body styles are preserved when the modal closes', (t) => {
// 	document.body.style.overflow = 'visible';
// 	const bodyCSSText = document.body.style.cssText;

// 	render(<Controlled isOpen />);

// 	// body styles should be overwritten on open
// 	t.not(document.body.style.cssText, bodyCSSText);

// 	fireEvent.click(document.activeElement);

// 	// and restored on close
// 	t.is(document.body.style.cssText, bodyCSSText);
// });
