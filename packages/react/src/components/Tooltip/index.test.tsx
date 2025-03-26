import test from 'ava';
import React from 'react';
import { cleanup, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip, TooltipProps } from '.';

test.afterEach(cleanup);

const defaultContents =
	'Lorem ipsum is a placeholder text commonly used to ' +
	'demonstrate the visual form of a document or a typeface without relying ' +
	'on meaningful content.';

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
				<span role="button" tabIndex={0} ref={setRef}>
					Lorem ipsum
				</span>{' '}
				dolor sit amet consectetur adipisicing elit.
			</p>
			<Tooltip isOpen={isOpen} reference={ref} trigger={trigger} asLabel={asLabel}>
				{children}
			</Tooltip>
		</div>
	);
};

test('a tooltip is rendered when `isOpen`', async (t) => {
	render(<Tooltip isOpen>{defaultContents}</Tooltip>);
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));
	t.is(screen.getByRole('tooltip', { hidden: true }).textContent, defaultContents);
});

test("the click trigger toggles the tooltip's visibility on click", async (t) => {
	const user = userEvent.setup();

	render(<TooltipFixture trigger="click" />);
	t.falsy(screen.queryByRole('tooltip', { hidden: true }));

	await user.click(screen.getByRole('button'));
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));
});

test("the click trigger toggles the tooltip's visibility on keyup.space", async (t) => {
	const user = userEvent.setup();

	render(<TooltipFixture trigger="click" />);
	t.falsy(screen.queryByRole('tooltip', { hidden: true }));

	// Press space, tab to the button, and then release space
	await user.keyboard('[Space>]');
	await user.tab();
	await user.keyboard('[/Space]');
	// The tooltip should not appear
	t.falsy(screen.queryByRole('tooltip', { hidden: true }));

	// Fully pressing space should trigger the click callback
	await user.keyboard('[Space]');
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));
});

test("the click trigger toggles the tooltip's visibility on keydown.enter", async (t) => {
	const user = userEvent.setup();

	render(<TooltipFixture trigger="click" />);
	t.falsy(screen.queryByRole('tooltip', { hidden: true }));

	await user.tab();
	await user.keyboard('{Enter}');
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));
});

test("the focus trigger toggles the tooltip's visibility on focus", async (t) => {
	const user = userEvent.setup();

	render(<TooltipFixture trigger="focus" />);
	t.falsy(screen.queryByRole('tooltip', { hidden: true }));

	await user.tab();
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));
});

test("the focusin trigger toggles the tooltip's visibility on focusin", async (t) => {
	const user = userEvent.setup();

	render(<TooltipFixture trigger="focusin" />);
	t.falsy(screen.queryByRole('tooltip', { hidden: true }));

	await user.tab();
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));
});

test('hovering the reference shows the tooltip when the trigger includes mouseenter', async (t) => {
	const user = userEvent.setup();

	render(<TooltipFixture trigger="mouseenter" />);
	t.falsy(screen.queryByRole('tooltip', { hidden: true }));

	await user.hover(screen.getByRole('button'));
	const tooltip = await screen.findByRole('tooltip', { hidden: true });
	t.truthy(tooltip);
});

test('unhovering the reference hides the tooltip after a delay when the trigger includes pointerenter', async (t) => {
	const user = userEvent.setup();

	const hideDelay = 200;
	render(<TooltipFixture trigger="pointerenter" hideDelay={hideDelay} />);
	const button = screen.getByRole('button');

	const getTooltip = () => screen.queryByRole('tooltip', { hidden: true });

	t.falsy(getTooltip());

	await user.hover(button);
	t.truthy(await screen.findByRole('tooltip', { hidden: true }));

	await user.unhover(button);
	await waitForElementToBeRemoved(() => screen.queryByRole('tooltip', { hidden: true }));
	t.falsy(screen.queryByRole('tooltip', { hidden: true }));
});

test("tooltip contents label the reference even when the tooltip isn't visible", async (t) => {
	render(<TooltipFixture trigger="focus pointerenter" asLabel />);
	t.truthy(screen.queryByRole('button', { name: defaultContents }));
});

test("complex tooltip contents are flattened and used as the reference's label even when the tooltip isn't visible", async (t) => {
	const FLATTENED = 'lorem ipsum dolor sit amet consectetur adipisicing elit !1';
	render(
		<TooltipFixture trigger="focus pointerenter" asLabel>
			<p>
				lorem <span>ipsum</span>{' '}
			</p>
			<section>
				<p>
					dolor{' '}
					<em>
						<span>sit amet</span>
					</em>{' '}
					{['consectetur ', 'adipisicing ', 'elit']}
				</p>
			</section>
			!{1}
		</TooltipFixture>,
	);
	t.truthy(screen.queryByRole('button', { name: FLATTENED }));
});

test("tooltips close when the user moves their pointer outside the reference even when pointerleave doesn't trigger", async (t) => {
	const user = userEvent.setup();

	const hideDelay = 200;
	render(<TooltipFixture isOpen trigger="pointerenter" hideDelay={hideDelay} />);

	t.truthy(screen.getByRole('tooltip', { hidden: true }));

	await user.pointer({ target: document.body });
	t.falsy(screen.queryByRole('tooltip', { hidden: true }));
});
