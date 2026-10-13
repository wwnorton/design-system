import React, { useId } from 'react';
import { SliderProps } from './types';
import { useClasses } from './hooks/useClasses';
import { useSlider } from './hooks/useSlider';
import { useMarks } from './hooks/useMarks';
import { DEFAULT_MAX, DEFAULT_MIN, DEFAULT_STEP } from './constants';
import { SliderHeader } from './components/SliderHeader';
import { useIcons } from './hooks/useIcons';

/**
 * Renders a slider component.
 * TODO: add more information about the slider. Include guidelines.
 */
export const Slider = ({
	orientation = 'horizontal',
	marks = false,
	min = DEFAULT_MIN,
	max = DEFAULT_MAX,
	step = DEFAULT_STEP,
	disabled,
	id: idProp,
	label,
	externalLabelId,
	iconLeft,
	iconRight,
	getValueText,
	supportingText,
	color = 'primary',
	showValueIndicators = false,
	value: valueProp,
	onChange: onChangeProp,
	...props
}: SliderProps) => {
	const generatedId = useId();
	const id = idProp ?? generatedId;
	const footerId = `${id}-footer`;

	const css = useClasses(props, {
		orientation,
		color,
		hasIconLeft: !!iconLeft,
		hasIconRight: !!iconRight,
		disabled,
	});

	const { value, progress, sliderRef, handleRef, inputRef, onInputChange, pointerProps } =
		useSlider({
			min,
			max,
			step,
			orientation,
			disabled,
			activeClass: css.handleActive,
			onChange: onChangeProp,
			value: valueProp,
			defaultValue: valueProp,
		});

	const { renderedMarks, renderedValueIndicators, valueText } = useMarks({
		marks,
		getValueText,
		orientation,
		min,
		max,
		step,
		value,
		showValueIndicators,
		css,
	});

	const { LeftIconElement, RightIconElement } = useIcons({ iconLeft, iconRight, orientation, css });

	let inputAriaOrientation: 'horizontal' | 'vertical' | undefined;
	switch (orientation) {
		case 'vertical':
			inputAriaOrientation = 'vertical';
			break;
		case 'horizontal-centered':
		case 'horizontal':
			inputAriaOrientation = 'horizontal';
			break;
		default:
			inputAriaOrientation = undefined;
	}

	return (
		<div
			className={css.base}
			style={
				{
					'--progress': progress,
				} as React.CSSProperties
			}
		>
			<SliderHeader
				label={label}
				externalLabelId={externalLabelId}
				valueText={valueText}
				orientation={orientation}
				className={css.header}
				valueClass={css.value}
				labelClass={css.label}
				inputId={id}
			/>
			<div className={css.bodyContainer}>
				{LeftIconElement}
				<div className={css.body}>
					<div ref={sliderRef} className={css.slider} {...pointerProps}>
						<div className={css.track}>
							<div className={css.activeTrack} />
						</div>
						{renderedMarks}
						<div className={css.handleContainer}>
							<div ref={handleRef} className={css.handle}>
								<input
									id={id}
									ref={inputRef}
									className={css.rangeInput}
									data-index="0"
									aria-valuetext={valueText}
									aria-orientation={inputAriaOrientation}
									min={min}
									max={max}
									step={step}
									type="range"
									value={value}
									disabled={disabled}
									onChange={onInputChange}
									aria-labelledby={externalLabelId}
									aria-describedby={supportingText ? footerId : undefined}
									{...props}
								/>
							</div>
						</div>
					</div>
					{renderedValueIndicators}
				</div>
				{RightIconElement}
			</div>
			{supportingText && (
				<div id={footerId} className={css.footer}>
					{supportingText}
				</div>
			)}
		</div>
	);
};
