import React, { useCallback, useId, useMemo, useState } from 'react';
import classNames from 'classnames';
import { SliderProps } from './types';
import { DEFAULT_MAX_NUMBER_OF_INDICATORS, ROOT_CLASS } from './constants';

function generateClassNames(baseName: string) {
	return {
		container: baseName,
		label: `${baseName}__label`,
		input: `${baseName}__input`,
		railContainer: `${baseName}__rail-container`,
		rail: `${baseName}__rail`,
		railVertical: `${baseName}__rail--vertical`,
		handle: `${baseName}__handle`,
		handleContainer: `${baseName}__handle-container`,
		railFillContainer: `${baseName}__rail-fill-container`,
		railFill: `${baseName}__rail-fill`,
		indicatorText: `${baseName}__indicator-text`,
		indicatorContainer: `${baseName}__indicators-container`,
		indicatorContainerCustom: `${baseName}__indicators-container--custom`,
		indicatorLabels: `${baseName}__indicators-labels`,
		indicator: `${baseName}__indicator`,
		indicatorInRange: `${baseName}__indicator--in-range`,
		indicatorCustom: `${baseName}__indicator--custom`,
	};
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
	(
		{
			baseName = ROOT_CLASS,
			className,
			label,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			isVertical = false,
			valueIndicators,
			labelClass,
			inputClass,
			indicatorsClass,
			step = 1,
			maxNumberOfIndicators = DEFAULT_MAX_NUMBER_OF_INDICATORS,
			...props
		}: SliderProps,
		ref,
	): JSX.Element => {
		const css = generateClassNames(baseName);

		const generatedId = useId();
		const id = props.id || generatedId;
		const [value, setValue] = useState<number>(props.value || 0);
		const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
			setValue(Number(e.target.value));
		}, []);
		const handleLeft = useMemo(() => {
			return `${(value * 100) / (props.max || 100)}%`;
		}, [value, props.max]);

		const containerClassName = classNames(className, css.container);
		const labelClassName = classNames(css.label, labelClass);
		const inputClassName = classNames(css.input, inputClass);
		const railContainerClassName = classNames(css.railContainer);
		const railClassName = classNames(css.rail);
		// TODO: add handle className
		const handleClassName = classNames(css.handle);
		const handleContainerClassName = classNames(css.handleContainer);
		const railFillContainerClassName = classNames(css.railFillContainer);
		const railFillClassName = classNames(css.railFill);
		const markerTextClassName = classNames(css.indicatorText);

		const max = props.max || 100;
		let markersLabels = null;
		let markers = null;
		if (valueIndicators === true) {
			const markersContainerClassName = classNames(css.indicatorContainer);
			const numberOfMarkers = Math.min(Math.floor(max / Number(step)), maxNumberOfIndicators);
			const stepSize = max / numberOfMarkers;
			const numberOfRenderedMarkers = numberOfMarkers + 1;
			markers = (
				<div className={markersContainerClassName}>
					{Array.from({ length: numberOfRenderedMarkers }, (_, i) => {
						const v = i * stepSize;
						const isInRange = v <= value;
						const markerClassName = classNames(css.indicator, {
							[css.indicatorInRange]: isInRange,
						});

						return <div key={i} className={markerClassName} />;
					})}
				</div>
			);
		} else if (valueIndicators) {
			const markersContainerClassName = classNames(
				css.indicatorContainer,
				css.indicatorContainerCustom,
			);
			const markersLabelsClassName = classNames(css.indicatorLabels, indicatorsClass);
			const numberOfMarkers = valueIndicators.length;

			markers = (
				<div
					className={markersContainerClassName}
					style={{ display: 'flex', justifyContent: 'flex-start' }}
				>
					{Array.from({ length: numberOfMarkers }, (_, i) => {
						const v = valueIndicators[i].value;
						const isInRange = v <= value;
						const left = (v / max) * 100;
						const markerClassName = classNames(css.indicator, css.indicatorCustom, {
							[css.indicatorInRange]: isInRange,
						});

						return (
							<div
								key={i}
								className={markerClassName}
								style={
									{
										'--left': `${left}%`,
									} as React.CSSProperties
								}
							/>
						);
					})}
				</div>
			);

			markersLabels = (
				<datalist className={markersLabelsClassName}>
					{Array.from({ length: numberOfMarkers }, (_, i) => {
						const v = valueIndicators[i].value;
						const left = (v / max) * 100;
						return (
							<option
								key={i}
								value={v}
								label={valueIndicators[i].label}
								style={{ '--left': `${left}%` } as React.CSSProperties}
								className={markerTextClassName}
							>
								{valueIndicators[i].label || v}
							</option>
						);
					})}
				</datalist>
			);
		}

		return (
			<div className={containerClassName}>
				<label className={labelClassName} htmlFor={id}>
					{label}
				</label>
				<div className={railContainerClassName}>
					<div className={railClassName} />
					<div
						className={handleContainerClassName}
						style={{ '--handle-left': handleLeft } as React.CSSProperties}
					>
						<div className={handleClassName} />
					</div>
					<div className={railFillContainerClassName}>
						<div
							className={railFillClassName}
							style={{ '--handle-left': handleLeft } as React.CSSProperties}
						/>
					</div>
					<input
						ref={ref}
						type="range"
						className={inputClassName}
						{...props}
						id={id}
						value={value}
						onChange={handleChange}
					/>
					{markers}
				</div>
				{markersLabels}
			</div>
		);
	},
);
