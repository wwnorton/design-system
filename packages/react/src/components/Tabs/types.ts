import React from 'react';

export type TabsProps = ControlledTabsProps | UncontrolledTabsProps;

export type ControlledTabsProps = {
	/**
	 * The currently active tab, for controlled use only
	 */
	selectedIndex: number;

	/**
	 * Callback for when the user interacts with one of the `Tab` buttons,
	 * it will pass the position index of the selected tab.
	 */
	onChange: (selectedIndex: number) => void;
} & CommonTabsProps;

export type UncontrolledTabsProps = {
	/**
	 * Sets the default active tab, for uncontrolled use only.
	 * Will be ignored if the `selectedIndex` prop is defined.
	 */
	defaultSelectedIndex?: number;
} & CommonTabsProps;

/**
 * Props used by both controlled and uncontrolled tabs.
 */
export type CommonTabsProps = {
	/**
	 * Prefix used to replace the autogenerated `id` prefix
	 * for tabs and tab panels.
	 */
	idPrefix?: string;

	/**
	 * Adjusts the tabs alignment.
	 *
	 * Alignments available:
	 * - `left`: Displays the tabs aligned to the left of the `TabList`
	 * - `center`: Displays the tabs aligned at the center of the `TabList`
	 *
	 * Defaults to `left`.
	 *
	 * @default 'left'
	 */
	align?: 'left' | 'center';

	/**
	 * Adjusts the variant.
	 *
	 * Variants Available:
	 * - `contained`: Tabs are displayed with background color.
	 * - `line`: Tabs are displayed without its own background color, using that of the container.
	 *
	 * Defaults to `Contained`
	 */
	variant?: 'contained' | 'line';

	children?: React.ReactNode;
};

export type TabListProps = {
	children?: React.ReactNode;
};

export type TabProps = {
	children?: React.ReactNode;
};

export type TabPanelProps = { children?: React.ReactNode };

export type TabPanelsProps = { children?: React.ReactNode };

export interface TabsState {
	idPrefix: string;
	selectedTabIndex: number;
	setSelectedTabIndex: (index: number) => void;
	variant: NonNullable<CommonTabsProps['variant']>;
	align: NonNullable<CommonTabsProps['align']>;
}
