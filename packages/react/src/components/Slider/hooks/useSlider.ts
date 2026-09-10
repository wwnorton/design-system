import { useCallback, useRef, useState } from 'react';
import { SliderProps } from '../types';

export type UseSliderOptions = {
	min: number;
	max: number;
	step: number;
	orientation: SliderProps['orientation'];
	value?: number;
	onChange?: (value: number) => void;

	/**
	 * The class to add to the handle when it is active.
	 */
	activeClass: string;
	disabled?: boolean;
	defaultValue?: number;
};

export type PointerPosition = {
	clientX: number;
	clientY: number;
};

function snapToStep(value: number, min: number, max: number, step: number): number {
	const clamped = Math.min(max, Math.max(min, value));

	if (step <= 0) {
		return clamped;
	}

	const stepsFromMin = Math.round((clamped - min) / step);
	const snapped = min + stepsFromMin * step;

	return Math.min(max, Math.max(min, snapped));
}

/**
 * Map a pointer position on the slider to a value in `[min, max]`,
 * snapped to `step`.
 *
 * The handle travels along `slider size - handle size`, so the pointer is
 * converted in that same inset coordinate space. Vertical sliders increase
 * from bottom to top.
 */
export function getValueFromPointer({
	pointer,
	sliderRect,
	handleSize,
	min,
	max,
	step,
	orientation,
}: {
	pointer: PointerPosition;
	sliderRect: Pick<DOMRect, 'left' | 'width' | 'height' | 'bottom'>;
	handleSize: number;
	min: number;
	max: number;
	step: number;
	orientation: SliderProps['orientation'];
}): number {
	const isVertical = orientation === 'vertical';
	const size = isVertical ? sliderRect.height : sliderRect.width;
	const usableSize = size - handleSize;

	if (usableSize <= 0 || max === min) {
		return min;
	}

	const offset = isVertical
		? sliderRect.bottom - pointer.clientY - handleSize / 2
		: pointer.clientX - sliderRect.left - handleSize / 2;
	const percent = Math.min(1, Math.max(0, offset / usableSize));
	const rawValue = min + percent * (max - min);

	return snapToStep(rawValue, min, max, step);
}

/**
 * Pointer interaction for the slider: dragging the handle or clicking the
 * track updates `value`. Keyboard changes still go through the hidden range
 * input's `onChange`.
 */
export function useSlider({
	min,
	max,
	step,
	orientation,
	activeClass,
	disabled = false,
	defaultValue = min,
	value: valueProp,
	onChange: onChangeProp,
}: UseSliderOptions) {
	const isControlled = valueProp !== undefined;
	const [internalValue, setInternalValue] = useState(defaultValue);
	const sliderRef = useRef<HTMLDivElement>(null);
	const handleRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const value = valueProp ?? internalValue;

	const setValue = useCallback(
		(newValue: number) => {
			if (!isControlled) {
				setInternalValue(newValue);
			}
			onChangeProp?.(newValue);
		},
		[isControlled, onChangeProp],
	);

	const progress = max === min ? 0 : (value - min) / (max - min);

	const updateValueFromPointer = useCallback(
		(pointer: PointerPosition) => {
			const slider = sliderRef.current;
			if (!slider) {
				return;
			}

			const handleSize =
				orientation === 'vertical'
					? handleRef.current?.offsetHeight ?? 0
					: handleRef.current?.offsetWidth ?? 0;

			const nextValue = getValueFromPointer({
				pointer,
				sliderRect: slider.getBoundingClientRect(),
				handleSize,
				min,
				max,
				step,
				orientation,
			});

			setValue(nextValue);
		},
		[min, max, step, orientation, setValue],
	);

	const onPointerDown = useCallback(
		(event: React.PointerEvent<HTMLDivElement>) => {
			if (disabled || event.button !== 0) {
				return;
			}

			event.preventDefault();
			if (handleRef.current) {
				handleRef.current.classList.add(activeClass);
			}
			event.currentTarget.setPointerCapture(event.pointerId);
			updateValueFromPointer({ clientX: event.clientX, clientY: event.clientY });
			inputRef.current?.focus();
		},
		[disabled, updateValueFromPointer, activeClass],
	);

	const onPointerMove = useCallback(
		(event: React.PointerEvent<HTMLDivElement>) => {
			if (disabled || !event.currentTarget.hasPointerCapture(event.pointerId)) {
				return;
			}

			updateValueFromPointer({ clientX: event.clientX, clientY: event.clientY });
		},
		[disabled, updateValueFromPointer],
	);

	const onPointerUp = useCallback(
		(event: React.PointerEvent<HTMLDivElement>) => {
			if (event.currentTarget.hasPointerCapture(event.pointerId)) {
				if (handleRef.current) {
					handleRef.current.classList.remove(activeClass);
				}
				event.currentTarget.releasePointerCapture(event.pointerId);
			}
		},
		[activeClass],
	);

	const onInputChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setValue(Number(event.target.value));
		},
		[setValue],
	);

	return {
		value: internalValue,
		progress,
		sliderRef,
		handleRef,
		inputRef,
		onInputChange,
		pointerProps: {
			onPointerDown,
			onPointerMove,
			onPointerUp,
			onPointerCancel: onPointerUp,
		},
	};
}
