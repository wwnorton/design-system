import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { getTabsCount } from '../../utilities/tabs/helpers';
import { TabsProps } from './types';
import { UncontrolledTabs } from './UncontrolledTabs';

const MODE_CONTROLLED = 0;
const MODE_UNCONTROLLED = 1;
const getModeFromProps = (props: TabsProps) => (!props.selectedIndex ? MODE_UNCONTROLLED : MODE_CONTROLLED);

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(({
	baseName = 'nds-tabs',
	className,
	children,
	defaultSelectedIndex,
	onChange,
	onSelect,
	...props
}: TabsProps, ref) => {
	const [focus, setFocus] = useState(false);
	const [mode] = useState(getModeFromProps(props));
	const [selectedIndex, setSelectedIndex] = useState(
		mode === MODE_UNCONTROLLED ? defaultSelectedIndex || 0 : null,
	);

	useEffect(() => {
		// Reset focus after initial render, see comment above
		setFocus(false);
	}, []);

	if (mode === MODE_UNCONTROLLED) {
		// Ensure that we handle removed tabs and don't let selectedIndex get out of bounds
		const tabsCount = getTabsCount(children);
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			if (selectedIndex != null) {
				const maxTabIndex = Math.max(0, tabsCount - 1);
				setSelectedIndex(Math.min(selectedIndex, maxTabIndex));
			}
		}, [selectedIndex, tabsCount]);
	}

	function isTabNode(node: { getAttribute: (arg0: string) => any; }) {
		return node && node.getAttribute('role') === 'tab';
	}

	const handleSelected = (e) => {
		const node = e.target;
		debugger
		// Call change event handler
		if (typeof onSelect === 'function') {
			// Check if the change event handler cancels the tab change
			if (onSelect(index, last, event) === false) return;
		}

		// Always set focus on tabs unless it is disabled
		// if (focusTabOnClick) {
		// 	setFocus(true);
		// }

		if (mode === MODE_UNCONTROLLED) {
			if (isTabNode(node)) {
				const index = [].slice
					.call(node.parentNode.children)
					.filter(isTabNode)
					.indexOf(node);
				// Update selected index
				setSelectedIndex(index);
			}
		}
	};

	const subProps = { ...props };

	subProps.focus = focus;
	subProps.onSelect = handleSelected;

	if (selectedIndex != null) {
		subProps.selectedIndex = selectedIndex;
	}
	delete subProps.defaultFocus;
	delete subProps.defaultIndex;
	delete subProps.focusTabOnClick;

	return (
		<UncontrolledTabs
			{...subProps}
			ref={ref}
		>
			{children}
		</UncontrolledTabs>
	);
});
