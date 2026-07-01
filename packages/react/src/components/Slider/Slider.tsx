import React, { useCallback, useId, useState } from 'react';
import classNames from 'classnames';
import { SliderProps } from './types';
import { DEFAULT_MAX_NUMBER_OF_INDICATORS, ROOT_CLASS } from './constants';
import { Icon } from '../Icon';

function generateClassNames(baseName: string) {
	return {
		container: baseName,
		labelContainer: `${baseName}__label-container`,
		labelContainerCentered: `${baseName}__label-container--centered`,
		label: `${baseName}__label`,
		selectedValue: `${baseName}__selected-value`,
		supportingText: `${baseName}__supporting-text`,
		input: `${baseName}__input`,
		valueInput: `${baseName}__value-input`,
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
		body: `${baseName}__body`,
		bodyVertical: `${baseName}__body--vertical`,
		containerVertical: `${baseName}--vertical`,
		icon: `${baseName}__icon`,
	};
}

function getSelectedValue(
	value: number,
	valueIndicators: SliderProps['valueIndicators'],
): React.ReactNode {
	if (!Array.isArray(valueIndicators)) {
		return value;
	}

	const indicator = valueIndicators.find((item) => item.value === value);

	if (!indicator) {
		return value;
	}

	return indicator.label ?? indicator.value;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
	(
		{
			baseName = ROOT_CLASS,
			className,
			label,
			valueIndicators,
			labelClass,
			inputClass,
			indicatorsClass,
			iconClass,
			leftIcon,
			rightIcon,
			supportingText,
			variation = 'default',
			showInput = false,
			step = 1,
			maxNumberOfIndicators = DEFAULT_MAX_NUMBER_OF_INDICATORS,
			...props
		},
		ref,
	) => {
		const css = generateClassNames(baseName);
		const isVertical = variation === 'vertical';
		const isCentered = variation === 'centered' || isVertical;

		const generatedId = useId();
		const id = props.id || generatedId;
		const supportingTextId = `${id}-supporting-text`;

		let ariaDescribedBy = props['aria-describedby'];

		if (supportingText) {
			ariaDescribedBy = ariaDescribedBy
				? `${ariaDescribedBy} ${supportingTextId}`
				: supportingTextId;
		}
		const [value, setValue] = useState<number>(props.value || 0);

		const updateValue = useCallback((newValue: number) => {
			setValue(newValue);
		}, []);

		const handleSliderChange = useCallback(
			(e: React.ChangeEvent<HTMLInputElement>) => {
				updateValue(Number(e.target.value));
			},
			[updateValue],
		);

		const handleValueInputChange = useCallback(
			(e: React.ChangeEvent<HTMLInputElement>) => {
				updateValue(Number(e.target.value));
			},
			[updateValue],
		);

		const selectedValue = getSelectedValue(value, valueIndicators);
		const max = props.max || 100;
		const handleLeft = `${(value * 100) / max}%`;

		const containerClassName = classNames(className, css.container, {
			[css.containerVertical]: isVertical,
		});
		const labelContainerClassName = classNames(css.labelContainer, {
			[css.labelContainerCentered]: isCentered,
		});
		const labelClassName = classNames(css.label, labelClass);
		const selectedValueClassName = classNames(css.selectedValue);
		const supportingTextClassName = classNames(css.supportingText);
		const inputClassName = classNames(css.input, inputClass);
		const valueInputClassName = classNames(css.valueInput);
		const railContainerClassName = classNames(css.railContainer);
		const railClassName = classNames(css.rail, {
			[css.railVertical]: isVertical,
		});
		const handleClassName = classNames(css.handle);
		const handleContainerClassName = classNames(css.handleContainer);
		const railFillContainerClassName = classNames(css.railFillContainer);
		const railFillClassName = classNames(css.railFill);
		const indicatorTextClassName = classNames(css.indicatorText);
		const bodyClassName = classNames(css.body, {
			[css.bodyVertical]: isVertical,
		});
		const iconClassName = classNames(css.icon, iconClass);

		const [LeftIcon, RightIcon] = React.useMemo(() => {
			const baseProps = {
				className: iconClass,
			};

			let lIcon = null;

			if (leftIcon) {
				const iconProps =
					typeof leftIcon === 'string'
						? { ...baseProps, variant: leftIcon }
						: { ...baseProps, icon: leftIcon };

				lIcon = <Icon {...iconProps} />;
			}

			let rIcon = null;

			if (rightIcon) {
				const iconProps =
					typeof rightIcon === 'string'
						? { ...baseProps, variant: rightIcon }
						: { ...baseProps, icon: rightIcon };

				rIcon = <Icon {...iconProps} />;
			}

			return [lIcon, rIcon];
		}, [leftIcon, rightIcon, iconClass]);

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
								className={indicatorTextClassName}
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
				<div className={labelContainerClassName}>
					<label className={labelClassName} htmlFor={id}>
						{label}:
					</label>

					<span className={selectedValueClassName}> {selectedValue}</span>
				</div>

				<div className={bodyClassName}>
					<div className={iconClassName}>{LeftIcon}</div>

					<div style={{ flex: 1 }}>
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
								onChange={handleSliderChange}
								aria-describedby={ariaDescribedBy}
							/>

							{markers}
						</div>

						{markersLabels}
					</div>

					<div className={iconClassName}>{RightIcon}</div>

					{showInput && (
						<input
							id={`${id}-value`}
							type="number"
							className={valueInputClassName}
							value={value}
							min={props.min}
							max={max}
							step={step}
							onChange={handleValueInputChange}
						/>
					)}
				</div>
				{supportingText && (
					<div id={supportingTextId} className={supportingTextClassName}>
						{supportingText}
					</div>
				)}
			</div>
		);
	},
);
