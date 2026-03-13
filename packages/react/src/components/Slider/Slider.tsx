import React, { useCallback, useId, useMemo, useState } from 'react';
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
		const [value, setValue] = useState<number>(props.value || 0);
		const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
			console.log(e.target.value);
			setValue(Number(e.target.value));
		}, []);
		const thumbLeft = useMemo(() => {
			return `${(value * 100) / (props.max || 100)}%`;
		}, [value, props.max]);

		const containerClassName = classNames(className, baseName, {
			[`${baseName}--vertical`]: isVertical,
		});
		const labelClassName = classNames(`${baseName}__label`, labelClass);
		const inputClassName = classNames(`${baseName}__input`, inputClass);
		const railContainerClassName = classNames(`${baseName}__rail-container`);
		const railClassName = classNames(`${baseName}__rail`);
		// TODO: add thumb className
		const thumbClassName = classNames(`${baseName}__thumb`);
		const thumbContainerClassName = classNames(`${baseName}__thumb-container`);
		const railFillContainerClassName = classNames(`${baseName}__rail-fill-container`);
		const railFillClassName = classNames(`${baseName}__rail-fill`);

		const max = props.max || 100;
		const markersId = showMarkers ? `${id}-markers` : undefined;
		let markers = null;
		if (showMarkers) {
			const markersClassName = classNames(`${baseName}__markers`, markersClass);
			const stepSize = Number(max) / DEFAULT_NUMBER_OF_MARKERS;
			markers = (
				<datalist id={markersId} className={markersClassName}>
					{Array.from({ length: DEFAULT_NUMBER_OF_MARKERS + 1 }, (_, i) => {
						const v = i * stepSize;
						const valueStr = v.toString();
						return (
							<option
								key={i}
								value={v}
								label={valueStr}
								style={{ width: `${100 / (DEFAULT_NUMBER_OF_MARKERS + 1)}%` }}
							>
								{v}
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
						list={markersId}
						value={value}
						onChange={handleChange}
					/>
				</div>
				{markers}
			</div>
		);
	},
);
