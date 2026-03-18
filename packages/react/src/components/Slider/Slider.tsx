import React, { useCallback, useId, useMemo, useState } from 'react';
import classNames from 'classnames';
import { SliderProps } from './types';
import { DEFAULT_NUMBER_OF_MARKERS, ROOT_CLASS } from './constants';

function generateClassNames(baseName: string) {
	return {
		container: baseName,
		label: `${baseName}__label`,
		input: `${baseName}__input`,
		railContainer: `${baseName}__rail-container`,
		rail: `${baseName}__rail`,
		railVertical: `${baseName}__rail--vertical`,
		thumb: `${baseName}__thumb`,
		thumbContainer: `${baseName}__thumb-container`,
		railFillContainer: `${baseName}__rail-fill-container`,
		railFill: `${baseName}__rail-fill`,
		markerText: `${baseName}__marker-text`,
		markersContainer: `${baseName}__markers-container`,
		markersContainerCustom: `${baseName}__markers-container--custom`,
		markersLabels: `${baseName}__markers-labels`,
		marker: `${baseName}__marker`,
		markerInRange: `${baseName}__marker--in-range`,
		markerCustom: `${baseName}__marker--custom`,
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
			markersClass,
			step = 1,
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
		const thumbLeft = useMemo(() => {
			return `${(value * 100) / (props.max || 100)}%`;
		}, [value, props.max]);

		const containerClassName = classNames(className, css.container);
		const labelClassName = classNames(css.label, labelClass);
		const inputClassName = classNames(css.input, inputClass);
		const railContainerClassName = classNames(css.railContainer);
		const railClassName = classNames(css.rail);
		// TODO: add thumb className
		const thumbClassName = classNames(css.thumb);
		const thumbContainerClassName = classNames(css.thumbContainer);
		const railFillContainerClassName = classNames(css.railFillContainer);
		const railFillClassName = classNames(css.railFill);
		const markerTextClassName = classNames(css.markerText);

		const max = props.max || 100;
		let markersLabels = null;
		let markers = null;
		if (valueIndicators === true) {
			const markersContainerClassName = classNames(css.markersContainer);
			const numberOfMarkers = Math.min(Math.floor(max / Number(step)), DEFAULT_NUMBER_OF_MARKERS);
			const stepSize = max / numberOfMarkers;
			const numberOfRenderedMarkers = numberOfMarkers + 1;
			markers = (
				<div className={markersContainerClassName}>
					{Array.from({ length: numberOfRenderedMarkers }, (_, i) => {
						const v = i * stepSize;
						const isInRange = v <= value;
						const markerClassName = classNames(css.marker, {
							[css.markerInRange]: isInRange,
						});

						return <div key={i} className={markerClassName} />;
					})}
				</div>
			);
		} else if (valueIndicators) {
			const markersContainerClassName = classNames(
				css.markersContainer,
				css.markersContainerCustom,
			);
			const markersLabelsClassName = classNames(css.markersLabels, markersClass);
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
						const markerClassName = classNames(css.marker, css.markerCustom, {
							[css.markerInRange]: isInRange,
						});

						return (
							<div
								key={i}
								className={markerClassName}
								style={
									{
										'--marker-left': `${left}%`,
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
						const valueStr = v.toString();
						return (
							<option
								key={i}
								value={v}
								label={valueStr}
								style={{ width: `${100 / (DEFAULT_NUMBER_OF_MARKERS + 1)}%` }}
								className={markerTextClassName}
							>
								{valueIndicators[i].label}
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
						className={thumbContainerClassName}
						style={{ '--thumb-left': thumbLeft } as React.CSSProperties}
					>
						<div className={thumbClassName} />
					</div>
					<div className={railFillContainerClassName}>
						<div
							className={railFillClassName}
							style={{ '--thumb-left': thumbLeft } as React.CSSProperties}
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
