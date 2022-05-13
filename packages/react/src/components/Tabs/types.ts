export interface TabsProps extends React.ComponentPropsWithRef<'div'> {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/**
	 * The orientation of the tab list.
   	 */
	orientation?: 'vertical' | 'horizontal';
	/**
   	 * Callback when the index (controlled or un-controlled) changes.
   	 */
	onChange?: (selectedIndex: number) => void;
	/**
   	 * The index of the selected tab (in controlled mode)
   	 */
	selectedIndex?: number;
	/**
	 * The initial index of the selected tab (in uncontrolled mode)
	 */
	defaultSelectedIndex?: number;
}

export interface TabProps extends React.ComponentPropsWithRef<'button'> {
	/**
	 * The id of the tab
	 */
	id?: string;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	isSelected?: boolean;
	panelId?: string;
	/**
   	 * If `true`, the `Tab` won't be clickable
   	 */
	isDisabled?: boolean;
	type?: 'button';
	role?: 'tab';
}

export interface TabListProps extends React.ComponentPropsWithRef<'div'> {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	role?: 'tablist';
	children?: React.ReactNode;
	onKeyDown?: React.KeyboardEventHandler;
	ref?: React.Ref<any>;
}

export interface TabPanelsProps extends React.ComponentPropsWithRef<'div'> {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	children?: React.ReactNode;
}

export interface TabPanelProps extends React.ComponentPropsWithRef<'div'> {
	/**
	 * The id of the tabpanel
	 */
	id?: string
	/** The base class name according to BEM conventions. */
	baseName?: string;
	role?: 'tabpanel'
}
