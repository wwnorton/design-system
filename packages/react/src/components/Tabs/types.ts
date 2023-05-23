import React from 'react';

export type TabsProps = ControlledTabsProps | UncontrolledTabsProps;

export type ControlledTabsProps = CommonTabsProps & {
	selectedIndex: number;
	onChange: (selectedIndex: number) => void;
};

export type UncontrolledTabsProps = CommonTabsProps & {
	defaultSelectedIndex?: number;
};

/**
 * Props used by both controlled and uncontrolled tabs.
 */
export type CommonTabsProps = React.PropsWithChildren<{
	idPrefix?: string;
	align?: 'left' | 'center';
	variant?: 'contained' | 'line';
}>;

export type TabListProps = React.ComponentPropsWithRef<'div'> & {
	isSelected?: boolean;
	onSelect?: (index: number) => void;
};

export type TabProps = React.PropsWithChildren<{
	disabled?: boolean;
} & Indexed>;

export type TabPanelProps = React.ComponentPropsWithRef<'div'> & Indexed;

export type TabPanelsProps = { children?: React.ReactNode };

interface Indexed {
	/** This index is used to link the Tabs and the TabPanels */
	index?: number;
}

export interface TabsState {
	idPrefix: string;
	selectedTabIndex: number;
	setSelectedTabIndex: (index: number) => void;
	variant: NonNullable<CommonTabsProps['variant']>;
	align: NonNullable<CommonTabsProps['align']>;
}
