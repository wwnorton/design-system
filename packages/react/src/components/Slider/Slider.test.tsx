import test from 'ava';
import React from 'react';
import { cleanup, createEvent, fireEvent, render, screen } from '@testing-library/react';
import { Slider } from './Slider';
import { DEFAULT_MAX, DEFAULT_MIN, DEFAULT_STEP } from './constants';
import { SliderProps } from './types';

test.afterEach.always(cleanup);

const defaultLabel = 'Volume';

const getSlider = () => screen.getByRole('slider') as HTMLInputElement;

const renderSlider = (props: Partial<SliderProps> = {}) =>
	render(<Slider label={defaultLabel} {...props} />);

function dispatchPointer(
	element: HTMLElement,
	type: 'pointerDown' | 'pointerUp',
	init: { button?: number; clientX?: number; clientY?: number; pointerId?: number } = {},
) {
	const event = createEvent[type](element, init);
	Object.defineProperty(event, 'button', { value: init.button ?? 0 });
	if (init.clientX !== undefined) {
		Object.defineProperty(event, 'clientX', { value: init.clientX });
	}
	if (init.clientY !== undefined) {
		Object.defineProperty(event, 'clientY', { value: init.clientY });
	}
	fireEvent(element, event);
}

test('the slider `<input>` is labelled by its `<label>`', async (t) => {
	renderSlider();
	const input = screen.getByLabelText(defaultLabel) as HTMLInputElement;
	t.is(input.tagName.toLowerCase(), 'input');
	t.is(input.type.toLowerCase(), 'range');
	t.is(input, getSlider());
});

test('renders with default min, max, step, and value', async (t) => {
	renderSlider();
	const slider = getSlider();
	t.is(slider.min, String(DEFAULT_MIN));
	t.is(slider.max, String(DEFAULT_MAX));
	t.is(slider.step, String(DEFAULT_STEP));
	t.is(slider.value, String(DEFAULT_MIN));
});

test('renders with the provided min, max, and step', async (t) => {
	renderSlider({ min: 10, max: 50, step: 5 });
	const slider = getSlider();
	t.is(slider.min, '10');
	t.is(slider.max, '50');
	t.is(slider.step, '5');
	t.is(slider.value, '10');
});

test('uses the provided id on the range input and associates the label', async (t) => {
	renderSlider({ id: 'volume-slider' });
	const slider = getSlider();
	t.is(slider.id, 'volume-slider');
	t.is(screen.getByText(defaultLabel).getAttribute('for'), 'volume-slider');
});

test('an external label id hides the internal label and associates the input', async (t) => {
	const externalLabelId = 'external-slider-label';

	render(
		<>
			{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
			<label id={externalLabelId}>External label</label>
			<Slider externalLabelId={externalLabelId} id="volume-slider" />
		</>,
	);

	t.falsy(screen.queryByText(defaultLabel));
	const slider = screen.getByLabelText('External label');
	t.is(slider.getAttribute('aria-labelledby'), externalLabelId);
});

test('displays the current value next to the label', async (t) => {
	renderSlider();
	const value = document.querySelector('.nds-slider__value');
	t.is(value?.textContent, `: ${DEFAULT_MIN}`);
	t.is(value?.getAttribute('aria-hidden'), 'true');
});

test('does not prefix the displayed value when orientation is horizontal-centered', async (t) => {
	renderSlider({ orientation: 'horizontal-centered' });
	t.is(document.querySelector('.nds-slider__value')?.textContent, String(DEFAULT_MIN));
});

test('uses `getValueText` for the displayed value and `aria-valuetext`', async (t) => {
	renderSlider({ getValueText: (value) => `${value}°C` });
	t.is(getSlider().getAttribute('aria-valuetext'), '0°C');
	t.is(document.querySelector('.nds-slider__value')?.textContent, ': 0°C');
});

test('changing the range input updates the value and calls `onChange`', async (t) => {
	let lastValue: number | undefined;
	renderSlider({
		onChange: (value) => {
			lastValue = value;
		},
		getValueText: (value) => `${value}%`,
	});

	fireEvent.change(getSlider(), { target: { value: '40' } });

	t.is(lastValue, 40);
	t.is(getSlider().value, '40');
	t.is(getSlider().getAttribute('aria-valuetext'), '40%');
	t.is(document.querySelector('.nds-slider__value')?.textContent, ': 40%');
});

test('sets `--progress` from the current value', async (t) => {
	renderSlider();
	const root = document.querySelector('.nds-slider') as HTMLElement;
	t.is(root.style.getPropertyValue('--progress'), '0');

	fireEvent.change(getSlider(), { target: { value: '50' } });
	t.is(root.style.getPropertyValue('--progress'), '0.5');
});

test('supporting text is rendered in the footer and described by the input', async (t) => {
	const supportingText = 'Adjust the volume';
	renderSlider({ id: 'volume-slider', supportingText });

	const footer = document.getElementById('volume-slider-footer');
	t.truthy(footer);
	t.true(footer?.classList.contains('nds-slider__footer'));
	t.truthy(screen.getByText(supportingText));
	t.is(getSlider().getAttribute('aria-describedby'), 'volume-slider-footer');
});

test('does not set `aria-describedby` when there is no supporting text', async (t) => {
	renderSlider();
	t.falsy(getSlider().getAttribute('aria-describedby'));
	t.falsy(document.querySelector('.nds-slider__footer'));
});

test('a disabled slider cannot be changed', async (t) => {
	let called = false;
	renderSlider({
		disabled: true,
		onChange: () => {
			called = true;
		},
	});

	const slider = getSlider();
	t.true(slider.disabled);

	fireEvent.pointerDown(document.querySelector('.nds-slider__slider') as HTMLElement, {
		button: 0,
		clientX: 100,
		pointerId: 1,
	});

	t.false(called);
	t.is(slider.value, String(DEFAULT_MIN));
});

[
	{
		value: undefined,
		css: 'nds-slider--horizontal',
		aria: 'horizontal',
	},
	{
		value: 'horizontal' as const,
		css: 'nds-slider--horizontal',
		aria: 'horizontal',
	},
	{
		value: 'vertical' as const,
		css: 'nds-slider--vertical',
		aria: 'vertical',
	},
	{
		value: 'horizontal-centered' as const,
		css: 'nds-slider--horizontal-centered',
		aria: 'horizontal',
	},
].forEach(({ value, css, aria }) => {
	test(`Slider orientation: ${value}`, (t) => {
		renderSlider({ orientation: value });
		const root = document.querySelector('.nds-slider') as HTMLElement;
		t.true(root.classList.contains(css));
		t.is(getSlider().getAttribute('aria-orientation'), aria);
	});
});

[
	{
		value: undefined,
		css: 'nds-slider--primary',
	},
	{
		value: 'primary' as const,
		css: 'nds-slider--primary',
	},
	{
		value: 'purple' as const,
		css: 'nds-slider--purple',
	},
	{
		value: 'navy' as const,
		css: 'nds-slider--navy',
	},
].forEach(({ value, css }) => {
	test(`Slider color: ${value}`, (t) => {
		renderSlider({ color: value });
		const root = document.querySelector('.nds-slider') as HTMLElement;
		t.true(root.classList.contains(css));
	});
});

test('boolean marks render a mark for each step', async (t) => {
	renderSlider({ marks: true });
	const marks = document.querySelectorAll('.nds-slider__mark');
	t.is(marks.length, (DEFAULT_MAX - DEFAULT_MIN) / DEFAULT_STEP + 1);
	t.true(marks[0].classList.contains('nds-slider__mark--active'));
	t.false(marks[1].classList.contains('nds-slider__mark--active'));
	t.is(marks[0].getAttribute('aria-hidden'), 'true');
});

test('custom marks use their labels for `aria-valuetext`', async (t) => {
	renderSlider({
		step: 25,
		marks: [
			{ value: 0, label: 'Freezing' },
			{ value: 25, label: 'Cool' },
			{ value: 50, label: 'Warm' },
			{ value: 75, label: 'Hot' },
			{ value: 100, label: 'Boiling' },
		],
	});

	t.is(getSlider().getAttribute('aria-valuetext'), 'Freezing');
	t.is(document.querySelectorAll('.nds-slider__mark').length, 5);

	fireEvent.change(getSlider(), { target: { value: '50' } });
	t.is(getSlider().getAttribute('aria-valuetext'), 'Warm');
});

test('`getValueText` takes precedence over mark labels', async (t) => {
	renderSlider({
		marks: [
			{ value: 0, label: 'Freezing' },
			{ value: 50, label: 'Warm' },
		],
		getValueText: (value) => `${value}°C`,
	});

	t.is(getSlider().getAttribute('aria-valuetext'), '0°C');
});

test('value indicators are shown only when marks are set', async (t) => {
	const { rerender } = render(<Slider label={defaultLabel} showValueIndicators marks={false} />);
	t.falsy(document.querySelector('.nds-slider__value-indicator'));

	rerender(
		<Slider
			label={defaultLabel}
			showValueIndicators
			marks={[
				{ value: 0, label: 'Low' },
				{ value: 100, label: 'High' },
			]}
		/>,
	);

	const indicators = document.querySelectorAll('.nds-slider__value-indicator');
	t.is(indicators.length, 2);
	t.is(indicators[0].textContent, 'Low');
	t.is(indicators[1].textContent, 'High');
});

test('does not render value indicators when `showValueIndicators` is false', async (t) => {
	renderSlider({ marks: true });
	t.truthy(document.querySelector('.nds-slider__mark'));
	t.falsy(document.querySelector('.nds-slider__value-indicator'));
});

test('icons are not included in the accessibility tree', async (t) => {
	renderSlider({ iconLeft: 'minus', iconRight: 'plus' });
	const icons = screen.getAllByRole('img', { hidden: true });
	t.is(icons.length, 2);
	t.true(icons[0].classList.contains('nds-slider__icon--left'));
	t.true(icons[1].classList.contains('nds-slider__icon--right'));
	t.true(icons[0].classList.contains('nds-icon--minus'));
	t.true(icons[1].classList.contains('nds-icon--plus'));
});

test('vertical orientation swaps the visual order of the icons', async (t) => {
	renderSlider({ iconLeft: 'minus', iconRight: 'plus', orientation: 'vertical' });
	const icons = document.querySelectorAll('.nds-slider__body-container .nds-icon');
	t.true(icons[0].classList.contains('nds-icon--plus'));
	t.true(icons[1].classList.contains('nds-icon--minus'));
});

test('forwards extra input attributes to the range input', async (t) => {
	renderSlider({ name: 'volume', 'aria-required': true });
	const slider = getSlider();
	t.is(slider.name, 'volume');
	t.is(slider.getAttribute('aria-required'), 'true');
});

test('clicking the track updates the value from the pointer position', async (t) => {
	let lastValue: number | undefined;
	const { container } = renderSlider({
		step: 10,
		onChange: (value) => {
			lastValue = value;
		},
	});

	const track = container.querySelector('.nds-slider__slider') as HTMLDivElement;
	const handle = container.querySelector('.nds-slider__handle') as HTMLDivElement;

	track.getBoundingClientRect = () =>
		({
			left: 0,
			top: 0,
			right: 200,
			bottom: 24,
			width: 200,
			height: 24,
			x: 0,
			y: 0,
			toJSON: () => ({}),
		} as DOMRect);
	Object.defineProperty(handle, 'offsetWidth', { configurable: true, value: 24 });
	track.setPointerCapture = () => {};
	track.releasePointerCapture = () => {};
	track.hasPointerCapture = () => true;

	dispatchPointer(track, 'pointerDown', {
		button: 0,
		clientX: 100,
		clientY: 12,
		pointerId: 1,
	});

	t.is(lastValue, 50);
	t.is(getSlider().value, '50');
	t.true(handle.classList.contains('nds-slider__handle--active'));

	dispatchPointer(track, 'pointerUp', { pointerId: 1 });
	t.false(handle.classList.contains('nds-slider__handle--active'));
});
