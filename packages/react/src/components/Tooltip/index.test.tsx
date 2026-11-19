import test, { ExecutionContext } from 'ava';
import React from 'react';
import { isInaccessible } from '@testing-library/dom';
import sinon from 'sinon';
import {
	act,
	cleanup,
	render,
	screen,
	waitForElementToBeRemoved,
	within,
} from '@testing-library/react';
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

test('the focus trigger opens the tooltip on programmatic focus', (t) => {
	render(<TooltipFixture trigger="focus" />);
	const reference = screen.getByRole('button');

	act(() => {
		reference.focus();
	});

	t.truthy(screen.queryByRole('tooltip', { hidden: true }));
});

test("the focus-visible trigger toggles the tooltip's visibility when tabbing", async (t) => {
	const user = userEvent.setup();

	render(<TooltipFixture trigger="focus-visible" />);
	t.falsy(screen.queryByRole('tooltip', { hidden: true }));

	await user.tab();
	t.truthy(screen.queryByRole('tooltip', { hidden: true }));
});

test('the focus-visible trigger does not open the tooltip on programmatic focus', (t) => {
	render(<TooltipFixture trigger="focus-visible" />);
	const reference = screen.getByRole('button');

	// jsdom treats any focused element as :focus-visible; real UAs typically do not
	// for programmatic focus. Stub the selector so this test matches browser behavior.
	const matches = sinon
		.stub(Element.prototype, 'matches')
		.callsFake(function (this: Element, selectors: string) {
			if (selectors === ':focus-visible') return false;
			return matches.wrappedMethod.call(this, selectors);
		});
	t.teardown(() => matches.restore());

	act(() => {
		reference.focus();
	});

	t.falsy(screen.queryByRole('tooltip', { hidden: true }));
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
	render(<TooltipFixture trigger="focus-visible pointerenter" asLabel />);
	t.truthy(screen.queryByRole('button', { name: defaultContents }));
});

test("complex tooltip contents are flattened and used as the reference's label even when the tooltip isn't visible", async (t) => {
	const FLATTENED = 'lorem ipsum dolor sit amet consectetur adipisicing elit !1';
	render(
		<TooltipFixture trigger="focus-visible pointerenter" asLabel>
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

/* -------------------------------------------------------------------------- */
/* Bug condition exploration: persistent describedby/labelledby target         */
/* -------------------------------------------------------------------------- */

const getPersistentTarget = (reference: HTMLElement, asLabel = false) => {
	const attr = asLabel ? 'aria-labelledby' : 'aria-describedby';
	return document.getElementById(reference.getAttribute(attr) || '');
};

const assertPersistentTargetAccessible = (
	t: ExecutionContext,
	container: HTMLElement,
	asLabel: boolean,
	expectedText: string,
) => {
	const reference = within(container).getByRole('button');
	const target = getPersistentTarget(reference, asLabel);
	if (!target) {
		t.fail('the reference has no resolvable aria-describedby/aria-labelledby target');
		return;
	}
	t.log(
		`target attributes: ${Array.from(target.attributes)
			.map(({ name, value }) => `${name}="${value}"`)
			.join(' ')}; isInaccessible=${isInaccessible(target)}`,
	);
	t.true(target.classList.contains('nds-sr-only'), 'target has class `nds-sr-only`');
	t.false(target.hasAttribute('hidden'), 'target has no `hidden` attribute');
	t.false(target.hasAttribute('aria-hidden'), 'target has no `aria-hidden` attribute');
	t.false(isInaccessible(target), 'target is not inaccessible');
	t.is(target.textContent, expectedText);
};

test('bug condition: the aria-describedby target is visually hidden but accessible', (t) => {
	const { container } = render(<TooltipFixture trigger="focus-visible pointerenter" />);
	assertPersistentTargetAccessible(t, container, false, defaultContents);
});

test('bug condition: the aria-labelledby target is visually hidden but accessible when `asLabel`', (t) => {
	const { container } = render(<TooltipFixture trigger="focus-visible pointerenter" asLabel />);
	assertPersistentTargetAccessible(t, container, true, defaultContents);
});

test('bug condition: the aria-describedby target stays accessible when the tooltip is open', (t) => {
	const { container } = render(<TooltipFixture isOpen trigger="focus-visible pointerenter" />);
	assertPersistentTargetAccessible(t, container, false, defaultContents);
});

test('bug condition: the aria-describedby target contains flattened complex children', (t) => {
	const { container } = render(
		<TooltipFixture trigger="focus-visible pointerenter">
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
	assertPersistentTargetAccessible(
		t,
		container,
		false,
		'lorem ipsum dolor sit amet consectetur adipisicing elit!1',
	);
});

/* -------------------------------------------------------------------------- */
/* Preservation: popper, wiring, and trigger behavior unchanged                */
/* -------------------------------------------------------------------------- */

const preservationTriggers = ['focus', 'focus-visible', 'pointerenter', 'click'];
const preservationAsLabel = [false, true];
// cspell:ignore ipsumdolor
const preservationChildren: [string, React.ReactNode, string][] = [
	['simple', defaultContents, defaultContents],
	[
		'complex',
		<>
			<p>
				lorem <span>ipsum</span>
			</p>
			<em>dolor</em>
		</>,
		'lorem ipsumdolor',
	],
];

const PreservationFixture: React.FunctionComponent<TooltipProps> = ({
	children,
	...props
}: TooltipProps) => {
	const [ref, setRef] = React.useState<HTMLSpanElement | null>();
	return (
		<div data-testid="test">
			<span role="button" tabIndex={0} ref={setRef}>
				Lorem ipsum
			</span>
			<Tooltip reference={ref} {...props}>
				{children}
			</Tooltip>
		</div>
	);
};

preservationAsLabel.forEach((asLabel) => {
	preservationTriggers.forEach((trigger) => {
		preservationChildren.forEach(([shape, children, text]) => {
			const name = `asLabel=${asLabel}, trigger="${trigger}", ${shape} children`;

			test(`preservation: the popper is aria-hidden with role=tooltip and nds-tooltip (${name})`, (t) => {
				const { container } = render(
					<PreservationFixture isOpen asLabel={asLabel} trigger={trigger}>
						{children}
					</PreservationFixture>,
				);
				const popper = within(container).getByRole('tooltip', { hidden: true });
				t.is(popper.getAttribute('aria-hidden'), 'true');
				t.true(popper.classList.contains('nds-tooltip'));
				t.is(popper.textContent, text);
			});

			test(`preservation: the reference is wired to the persistent element id (${name})`, (t) => {
				const { container } = render(
					<PreservationFixture asLabel={asLabel} trigger={trigger}>
						{children}
					</PreservationFixture>,
				);
				const reference = within(container).getByRole('button');
				const used = asLabel ? 'aria-labelledby' : 'aria-describedby';
				const other = asLabel ? 'aria-describedby' : 'aria-labelledby';
				const id = reference.getAttribute(used);
				t.truthy(id);
				t.false(reference.hasAttribute(other));
				const target = document.getElementById(id || '');
				t.truthy(target);
				t.is(target?.textContent, text);
				t.false(target?.classList.contains('nds-tooltip'));
				t.is(target?.getAttribute('role'), null);
			});
		});
	});
});

test('preservation: a tooltip without children renders nothing and no persistent element', (t) => {
	const reference = document.createElement('button');
	document.body.appendChild(reference);
	t.teardown(() => reference.remove());

	const { container } = render(<Tooltip reference={reference} />);
	t.is(container.innerHTML, '');
	t.false(reference.hasAttribute('aria-labelledby'));
	// the reference attribute may be set, but it never resolves to an element
	const id = reference.getAttribute('aria-describedby');
	t.is(id === null ? null : document.getElementById(id), null);
});

test('preservation: a tooltip without children and asLabel renders no persistent element', (t) => {
	const reference = document.createElement('button');
	document.body.appendChild(reference);
	t.teardown(() => reference.remove());

	const { container } = render(<Tooltip reference={reference} asLabel />);
	t.is(container.innerHTML, '');
	t.false(reference.hasAttribute('aria-describedby'));
	const id = reference.getAttribute('aria-labelledby');
	t.is(id === null ? null : document.getElementById(id), null);
});

test('preservation: className, contentClass, and arrowClass apply to the popper only', (t) => {
	const { container } = render(
		<PreservationFixture
			isOpen
			className="custom-popper"
			contentClass="custom-content"
			arrowClass="custom-arrow"
		>
			{defaultContents}
		</PreservationFixture>,
	);
	const popper = within(container).getByRole('tooltip', { hidden: true });
	t.true(popper.classList.contains('custom-popper'));
	t.truthy(popper.querySelector('.custom-content'));

	const reference = within(container).getByRole('button');
	const target = document.getElementById(reference.getAttribute('aria-describedby') || '');
	t.truthy(target);
	t.not(target, popper);
	t.false(popper.contains(target));
	['custom-popper', 'custom-content', 'custom-arrow', 'nds-tooltip'].forEach((cls) => {
		t.false(target?.classList.contains(cls), `target lacks ${cls}`);
		t.is(target?.querySelector(`.${cls}`), null, `target descendants lack ${cls}`);
	});
});

test('preservation: the popper is rendered only when open and the wiring stays stable', async (t) => {
	const user = userEvent.setup();
	const { container } = render(
		<PreservationFixture trigger="click">{defaultContents}</PreservationFixture>,
	);
	const reference = within(container).getByRole('button');
	const id = reference.getAttribute('aria-describedby');
	t.truthy(id);
	t.falsy(within(container).queryByRole('tooltip', { hidden: true }));

	await user.click(reference);
	t.truthy(within(container).queryByRole('tooltip', { hidden: true }));
	t.is(reference.getAttribute('aria-describedby'), id);
	t.is(document.getElementById(id || '')?.textContent, defaultContents);
});

preservationAsLabel.forEach((asLabel) => {
	test(`the visual tooltip stays aria-hidden and is distinct from the persistent element (asLabel=${asLabel})`, (t) => {
		const { container } = render(
			<PreservationFixture isOpen asLabel={asLabel} trigger="focus-visible pointerenter">
				{defaultContents}
			</PreservationFixture>,
		);
		const popper = within(container).getByRole('tooltip', { hidden: true });
		t.is(popper.getAttribute('aria-hidden'), 'true');

		const reference = within(container).getByRole('button');
		const target = getPersistentTarget(reference, asLabel);
		t.truthy(target);
		t.not(target, popper);
		t.false(popper.contains(target));
		t.false(target?.contains(popper));
		t.false(target?.hasAttribute('aria-hidden'));
	});
});
