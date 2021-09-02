export type Orientation = 'horizontal' | 'vertical';

export interface StepperProps {
	/**
   * Set the active step (zero based index).
   * Set to -1 to disable all the steps.
   */
	activeStep?: number;
	/**
   * If set to 'true' and orientation is horizontal,
   * then the step label will be positioned under the icon.
   * @default false
   */
	alternativeLabel?: boolean;
	/**
   * Two or more `<Step />` components.
   */
	children?: React.ReactNode;
	/** A reference to the inner `<button>` element. */
	stepperRef?: React.Ref<HTMLDivElement>;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/**
   * The component orientation (layout flow direction).
   */
	orientation?: Orientation;
}
