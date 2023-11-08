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
export type CommonTabsProps = {
	idPrefix?: string;
	align?: 'left' | 'center';
	variant?: 'contained' | 'line';
	children?: React.ReactNode;
};

export type TabListProps = React.ComponentPropsWithRef<'div'> & {
	isSelected?: boolean;
	onSelect?: (index: number) => void;
};

export type TabProps = {
	disabled?: boolean;
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
