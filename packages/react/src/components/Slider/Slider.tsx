import React, { useId } from 'react';
import classNames from 'classnames';
import { SliderProps } from './types';
import { DEFAULT_NUMBER_OF_MARKERS, ROOT_CLASS } from './constants';

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
	(
		{
			baseName = ROOT_CLASS,
			className,
			label,
			isVertical = false,
			showMarkers,
			labelClass,
			inputClass,
			markersClass,
			...props
		}: SliderProps,
		ref,
	): JSX.Element => {
		const generatedId = useId();
		const id = props.id || generatedId;

		const containerClassName = classNames(className, baseName, {
			[`${baseName}--vertical`]: isVertical,
		});
		const labelClassName = classNames(`${baseName}__label`, labelClass);
		const inputClassName = classNames(`${baseName}__input`, inputClass);

		const max = props.max || 100;
		const markersId = showMarkers ? `${id}-markers` : undefined;
		let markers = null;
		if (showMarkers) {
			const markersClassName = classNames(`${baseName}__markers`, markersClass);
			const stepSize = Number(max) / DEFAULT_NUMBER_OF_MARKERS;
			markers = (
				<datalist id={markersId} className={markersClassName}>
					{Array.from({ length: DEFAULT_NUMBER_OF_MARKERS + 1 }, (_, i) => {
						const value = i * stepSize;
						const valueStr = value.toString();
						return (
							<option
								key={i}
								value={value}
								label={valueStr}
								style={{ width: `${100 / (DEFAULT_NUMBER_OF_MARKERS + 1)}%` }}
							>
								{value}
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
				<input ref={ref} type="range" className={inputClassName} {...props} list={markersId} />
				{markers}
			</div>
		);
	},
);
