import { ButtonProps } from '../Button';
import { FieldInfoCoreProps } from '../Field';
import { TooltipCoreProps } from '../Tooltip/types';

export interface SwitchProps extends FieldInfoCoreProps, Omit<ButtonProps, 'children'> {
	/** The name of the Switch. Required. */
	label: React.ReactNode;
	/**
	 * Children are set inside the Switch control. Default is 'ON' when `checked`
	 * and `OFF` when unchecked. Disable default with `displayDefault={false}`.
	 */
	children?: React.ReactNode;
	/** Indicates that the label should be rendered as a tooltip. */
	tipped?: boolean;
	/** The switch's initial "on" state. */
	checked?: boolean;
	/** A function to call when the switch is toggled. */
	onToggle?: (checked: boolean) => void;
	/**
	 * Indicates whether the default control text should be used when no children
	 * are provided. "ON" when `checked=true` and "OFF" when `checked=false`.
	 */
	displayDefault?: boolean;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/**
	 * Tooltip props that should be included when the switch's label is rendered
	 * as a tooltip.
	 */
	tooltipProps?: Partial<TooltipCoreProps>;
}
