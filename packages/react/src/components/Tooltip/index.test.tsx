import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
} from '@testing-library/react';
import { Tooltip, TooltipProps } from '.';

test.afterEach(cleanup);

const defaultContents = 'Lorem ipsum is a placeholder text commonly used to'
	+ 'demonstrate the visual form of a document or a typeface without relying '
	+ 'on meaningful content.';

const TooltipFixture: React.FunctionComponent<TooltipProps> = ({
	trigger,
	asLabel,
	isOpen,
	children = defaultContents,
}: TooltipProps) => {
	const [ref, setRef] = React.useState<HTMLSpanElement | null>();
	return (
		<div data-testid="test">
			<p>
				<span role="button" tabIndex={0} ref={setRef}>Lorem ipsum</span>
				{' '}
				dolor sit amet consectetur adipisicing elit.
			</p>
			<Tooltip
				isOpen={isOpen}
				reference={ref}
				trigger={trigger}
				asLabel={asLabel}
			>
				{ children }

			</Tooltip>
		</div>
	);
};

test('a tooltip is rendered when `isOpen`', (t) => {
	render(<Tooltip isOpen>{ defaultContents }</Tooltip>);
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));
	t.is(screen.queryByRole('tooltip', { hidden: true }).textContent, defaultContents);
});

test('the click trigger toggles the tooltip\'s visibility on click', (t) => {
	render(<TooltipFixture trigger="click" />);
	t.falsy(screen.queryByRole('tooltip', { hidden: true }));

	fireEvent.click(screen.queryByRole('button'));
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));
});

test('the click trigger toggles the tooltip\'s visibility on keyup.space', (t) => {
	render(<TooltipFixture trigger="click" />);
	t.falsy(screen.queryByRole('tooltip', { hidden: true }));
	const ref = screen.queryByRole('button');
	ref.focus();

	// nothing should happen on keyup.space alone
	fireEvent.keyUp(ref, { key: ' ' });
	t.falsy(screen.queryByRole('tooltip', { hidden: true }));

	// keydown.space and then keyup.space should trigger the click callback
	fireEvent.keyDown(ref, { key: ' ' });
	fireEvent.keyUp(ref, { key: ' ' });
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));
});

test('the click trigger toggles the tooltip\'s visibility on keydown.enter', (t) => {
	render(<TooltipFixture trigger="click" />);
	t.falsy(screen.queryByRole('tooltip', { hidden: true }));
	const ref = screen.queryByRole('button');

	ref.focus();
	fireEvent.keyDown(ref, { key: 'Enter' });
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));
});

test('the focus trigger toggles the tooltip\'s visibility on focus', (t) => {
	render(<TooltipFixture trigger="focus" />);
	t.falsy(screen.queryByRole('tooltip', { hidden: true }));

	fireEvent.focus(screen.queryByRole('button'));
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));
});

test('the focusin trigger toggles the tooltip\'s visibility on focusin', (t) => {
	render(<TooltipFixture trigger="focusin" />);
	t.falsy(screen.queryByRole('tooltip', { hidden: true }));

	fireEvent.focusIn(screen.queryByRole('button'));
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));
});

test('the mouseenter trigger toggles the tooltip\'s visibility on pointer enter', (t) => {
	render(<TooltipFixture trigger="mouseenter" />);
	t.falsy(screen.queryByRole('tooltip', { hidden: true }));

	fireEvent.pointerEnter(screen.queryByRole('button'));
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));
});

test('the pointerenter trigger hides the tooltip after a delay on pointerleave', (t) => {
	const hideDelay = 200;
	render(<TooltipFixture isOpen trigger="pointerenter" hideDelay={hideDelay} />);
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));

	fireEvent.pointerLeave(screen.queryByRole('button'));
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));

	setTimeout(() => {
		t.falsy(screen.queryByRole('tooltip', { hidden: true }));
	}, hideDelay);
});

test('tooltip contents label the reference even when the tooltip isn\'t visible', (t) => {
	render(<TooltipFixture trigger="focus pointerenter" asLabel />);
	t.truthy(screen.queryByRole('button', { name: defaultContents }));
});

test('complex tooltip contents are flattened and used as the reference\'s label even when the tooltip isn\'t visible', (t) => {
	const FLATTENED = 'lorem ipsum dolor sit amet consectetur adipisicing elit !1';
	render((
		<TooltipFixture trigger="focus pointerenter" asLabel>
			<p>
				lorem
				{' '}
				<span>ipsum</span>
				{' '}
			</p>
			<section>
				<p>
					dolor
					{' '}
					<em><span>sit amet</span></em>
					{' '}
					{ ['consectetur ', 'adipisicing ', 'elit'] }
				</p>
			</section>
			!
			{ 1 }
		</TooltipFixture>
	));
	t.truthy(screen.queryByRole('button', { name: FLATTENED }));
});
