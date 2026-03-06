import React, { useId } from 'react';
import classNames from 'classnames';
import { SliderProps } from './types';
import { ROOT_CLASS } from './constants';

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
	(
		{
			baseName = ROOT_CLASS,
			className,
			label,
			isVertical = false,
			labelClass,
			inputClass,
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

		return (
			<div className={containerClassName}>
				<label className={labelClassName} htmlFor={id}>
					{label}
				</label>
				<input ref={ref} type="range" className={inputClassName} {...props} />
			</div>
		);
	},
);
