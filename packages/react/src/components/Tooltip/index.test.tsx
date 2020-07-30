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
	children = defaultContents,
}: TooltipProps) => {
	const [ref, setRef] = React.useState<HTMLSpanElement | null>();
	return (
		<>
			<p>
				<span role="button" tabIndex={0} ref={setRef}>Lorem ipsum</span>
				{' '}
				dolor sit amet consectetur adipisicing elit.
			</p>
			<Tooltip reference={ref} trigger={trigger} asLabel={asLabel}>{ children }</Tooltip>
		</>
	);
};

test('a tooltip is rendered when `isOpen`', (t) => {
	render(<Tooltip isOpen>{ defaultContents }</Tooltip>);
	t.is(screen.getByRole('tooltip', { hidden: true }).textContent, defaultContents);
});

test('the click trigger toggles the tooltip\'s visibility on click', (t) => {
	render(<TooltipFixture trigger="click" />);
	t.falsy(screen.queryByText(defaultContents));
	const ref = screen.getByRole('button');

	fireEvent.focus(ref);
	t.falsy(screen.queryByText(defaultContents));

	fireEvent.pointerEnter(ref);
	t.falsy(screen.queryByText(defaultContents));

	fireEvent.click(ref);
	t.truthy(screen.queryByText(defaultContents));
});

test('the focus trigger toggles the tooltip\'s visibility on focus', (t) => {
	render(<TooltipFixture trigger="focus" />);
	t.falsy(screen.queryByText(defaultContents));
	const ref = screen.getByRole('button');

	fireEvent.pointerEnter(ref);
	t.falsy(screen.queryByText(defaultContents));

	// in the real world, clicking also triggers focus but it doesn't here
	fireEvent.click(ref);
	t.falsy(screen.queryByText(defaultContents));

	fireEvent.focus(ref);
	t.truthy(screen.queryByText(defaultContents));
});

test('the mouseenter trigger toggles the tooltip\'s visibility on pointer enter', (t) => {
	render(<TooltipFixture trigger="mouseenter" />);
	t.falsy(screen.queryByText(defaultContents));
	const ref = screen.getByRole('button');

	fireEvent.focus(ref);
	t.falsy(screen.queryByText(defaultContents));

	fireEvent.click(ref);
	t.falsy(screen.queryByText(defaultContents));

	fireEvent.pointerEnter(ref);
	t.truthy(screen.queryByText(defaultContents));
});

test('tooltip contents label the reference even when the tooltip isn\'t visible', (t) => {
	render(<TooltipFixture trigger="focus pointerenter" asLabel />);
	t.truthy(screen.queryByRole('button', { name: defaultContents }));
	t.is(screen.getByRole('button').getAttribute('aria-label'), defaultContents);
});

test('complex tooltip contents are flattened and used as the reference\'s label even when the tooltip isn\'t visible', (t) => {
	const FLATTENED = 'lorem ipsum dolor sit amet consectetur adipisicing elit!1';
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
	t.is(screen.getByRole('button').getAttribute('aria-label'), FLATTENED);
});
