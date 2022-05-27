/* eslint-disable no-plusplus */
import React, { cloneElement, useRef } from 'react';
import { useId } from '../autoId';
import {
	deepMap, isTab, isTabList, isTabPanel, getTabsCount as getTabsCountHelper,
} from './helpers';

export const useTabs = (props: {
	children?: any;
	onSelect?: any;
	selectedIndex?: any;
	disabledTabClassName?: any;
	focus?: any;
	forceRenderTabPanel?: any;
	selectedTabClassName?: any;
	selectedTabPanelClassName?: any;
	environment?: any;
	direction?: any;
	disableUpDownKeys?: any;
}) => {
	const tabNodes = useRef([]);
	const tabIds = useRef([]);
	const ref = useRef();

	let canUseActiveElement: boolean | null;

	function determineCanUseActiveElement(environment: (Window & typeof globalThis) | undefined) {
		const env = environment || (typeof window !== 'undefined' ? window : undefined);

		try {
			canUseActiveElement = !!(
				typeof env !== 'undefined'
				&& env.document
				&& env.document.activeElement
			);
		} catch (e) {
			// Work around for IE bug when accessing document.activeElement in an iframe
			// Refer to the following resources:
			// http://stackoverflow.com/a/10982960/369687
			// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12733599
			// istanbul ignore next
			canUseActiveElement = false;
		}
	}

	function isNode(node: { getAttribute: ((arg0: string) => string) | ((arg0: string) => any); }) {
		return node && 'getAttribute' in node;
	}

	// Determine if a node from event.target is a Tab element
	function isTabNode(node: { getAttribute: (arg0: string) => any; }) {
		return isNode(node) && node.getAttribute('role') === 'tab';
	}

	// Determine if a tab node is disabled
	function isTabDisabled(node: { getAttribute: (arg0: string) => string; }) {
		return isNode(node) && node.getAttribute('aria-disabled') === 'true';
	}

	/**
	 * Determine if a node from event.target is a Tab element for the current Tabs container.
	 * If the clicked element is not a Tab, it returns false.
	 * If it finds another Tabs container between the Tab and `this`, it returns false.
	 */
	function isTabFromContainer(node: {
		parentElement?: any; getAttribute?: (arg0: string) => any;
	}) {
		// return immediately if the clicked element is not a Tab.
		if (!isTabNode(node)) {
			return false;
		}

		// Check if the first occurrence of a Tabs container is `this` one.
		let nodeAncestor = node.parentElement;
		do {
			if (nodeAncestor === ref.current) return true;
			if (nodeAncestor.getAttribute('role') === 'tab') break;

			nodeAncestor = nodeAncestor.parentElement;
		} while (nodeAncestor);

		return false;
	}

	function getTabsCount() {
		const { children } = props;
		return getTabsCountHelper(children);
	}

	function getTab(index: number) {
		return tabNodes.current[`tabs-${index}`];
	}

	function setSelected(index: number, event: any) {
		// Check index boundary
		if (index < 0 || index >= getTabsCount()) return;

		const { onSelect, selectedIndex } = props;

		// Call change event handler
		onSelect(index, selectedIndex, event);
	}

	function getNextTab(index: number) {
		const count = getTabsCount();

		// Look for non-disabled tab from index to the last tab on the right
		for (let i = index + 1; i < count; i += 1) {
			if (!isTabDisabled(getTab(i))) {
				return i;
			}
		}

		// If no tab found, continue searching from first on left to index
		for (let i = 0; i < index; i += 1) {
			if (!isTabDisabled(getTab(i))) {
				return i;
			}
		}

		// All tabs are disabled, return index
		/* istanbul ignore next */
		return index;
	}

	function getPrevTab(index: number) {
		let i = index;

		// Look for non-disabled tab from index to first tab on the left
		// eslint-disable-next-line no-plusplus
		while (i--) {
			if (!isTabDisabled(getTab(i))) {
				return i;
			}
		}

		// If no tab found, continue searching from last tab on right to index
		i = getTabsCount();
		// eslint-disable-next-line no-plusplus
		while (i-- > index) {
			if (!isTabDisabled(getTab(i))) {
				return i;
			}
		}

		// All tabs are disabled, return index
		/* istanbul ignore next */
		return index;
	}

	function getFirstTab() {
		const count = getTabsCount();

		// Look for non disabled tab from the first tab
		for (let i = 0; i < count; i += 1) {
			if (!isTabDisabled(getTab(i))) {
				return i;
			}
		}

		/* istanbul ignore next */
		return null;
	}

	function getLastTab() {
		let i = getTabsCount();

		// Look for non disabled tab from the last tab
		while (i--) {
			if (!isTabDisabled(getTab(i))) {
				return i;
			}
		}

		/* istanbul ignore next */
		return null;
	}

	function getChildren() {
		let index = 0;
		const {
			children,
			disabledTabClassName,
			focus,
			forceRenderTabPanel,
			selectedIndex,
			selectedTabClassName,
			selectedTabPanelClassName,
			environment,
		} = props;

		tabIds.current = tabIds.current || [];
		let diff = tabIds.current.length - getTabsCount();

		// Add ids if new tabs have been added
		// Don't bother removing ids, just keep them in case they are added again
		// This is more efficient, and keeps the uuid counter under control
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const id = useId();
		while (diff++ < 0) {
			tabIds.current.push(`${id}${tabIds.current.length}`);
		}

		// Map children to dynamically setup refs
		return deepMap(children, (child) => {
			let result = child;

			// Clone TabList and Tab components to have refs
			if (isTabList(child)) {
				let listIndex = 0;

				// Figure out if the current focus in the DOM is set on a Tab
				// If it is we should keep the focus on the next selected tab
				let wasTabFocused = false;

				if (canUseActiveElement == null) {
					determineCanUseActiveElement(environment);
				}

				const env = environment || (typeof window !== 'undefined' ? window : undefined);
				if (canUseActiveElement && env) {
					wasTabFocused = React.Children.toArray(child.props.children)
						.filter(isTab)
						.some((tab, i) => env.document.activeElement === getTab(i));
				}

				result = cloneElement(child, {
					children: deepMap(child.props.children, (tab) => {
						const key = `tabs-${listIndex}`;
						const selected = selectedIndex === listIndex;

						const props = {
							tabRef: (node: any) => {
								tabNodes.current[key] = node;
							},
							id: tabIds.current[listIndex],
							selected,
							focus: selected && (focus || wasTabFocused),
						};

						if (selectedTabClassName) props.selectedClassName = selectedTabClassName;
						if (disabledTabClassName) props.disabledClassName = disabledTabClassName;

						listIndex++;

						return cloneElement(tab, props);
					}),
				});
			} else if (isTabPanel(child)) {
				const props = {
					id: tabIds.current[index],
					selected: selectedIndex === index,
				};

				if (forceRenderTabPanel) props.forceRender = forceRenderTabPanel;
				if (selectedTabPanelClassName) props.selectedClassName = selectedTabPanelClassName;

				index++;

				result = cloneElement(child, props);
			}

			return result;
		});
	}

	function handleKeyDown(e: {
		target: {
			parentElement?: any; getAttribute?: ((arg0: string) => any) | undefined;
		}; code: string; keyCode: number; preventDefault: () => void;
	}) {
		const { direction, disableUpDownKeys } = props;
		if (isTabFromContainer(e.target)) {
			let { selectedIndex: index } = props;
			let preventDefault = false;
			let useSelectedIndex = false;

			if (
				e.code === 'Space'
				|| e.keyCode === 32
				|| /* space */ e.code === 'Enter'
				|| e.keyCode === 13 /* enter */
			) {
				preventDefault = true;
				useSelectedIndex = false;
				handleClick(e);
			}

			// keyCode is deprecated and only used here for IE

			if (
				e.code === 'ArrowLeft'
				|| e.keyCode === 37
				|| /* arrow left */ (!disableUpDownKeys
					&& (e.keyCode === 38 || e.code === 'ArrowUp')) /* arrow up */
			) {
				// Select next tab to the left, validate if up arrow is not disabled
				if (direction === 'rtl') {
					index = getNextTab(index);
				} else {
					index = getPrevTab(index);
				}
				preventDefault = true;
				useSelectedIndex = true;
			} else if (
				e.code === 'ArrowRight'
				|| e.keyCode === 39
				|| /* arrow right */ (!disableUpDownKeys
					&& (e.keyCode === 40 || e.code === 'ArrowDown')) /* arrow down */
			) {
				// Select next tab to the right, validate if down arrow is not disabled
				if (direction === 'rtl') {
					index = getPrevTab(index);
				} else {
					index = getNextTab(index);
				}
				preventDefault = true;
				useSelectedIndex = true;
			} else if (e.keyCode === 35 || e.code === 'End') {
				// Select last tab (End key)
				index = getLastTab();
				preventDefault = true;
				useSelectedIndex = true;
			} else if (e.keyCode === 36 || e.code === 'Home') {
				// Select first tab (Home key)
				index = getFirstTab();
				preventDefault = true;
				useSelectedIndex = true;
			}

			// This prevents scrollbars from moving around
			if (preventDefault) {
				e.preventDefault();
			}

			// Only use the selected index in the state if we're not using the tabbed index
			if (useSelectedIndex) {
				setSelected(index, e);
			}
		}
	}

	function handleClick(e: { target: any; }) {
		let node = e.target;

		do {
			// eslint-disable-next-line @typescript-eslint/no-use-before-define
			if (isTabFromContainer(node)) {
				if (isTabDisabled(node)) {
					return;
				}

				const index = [].slice
					.call(node.parentNode.children)
					.filter(isTabNode)
					.indexOf(node);
				setSelected(index, e);
				return;
			}
			// eslint-disable-next-line no-cond-assign
		} while ((node = node.parentNode) != null);
	}

	return {
		getChildren,
		handleClick,
		handleKeyDown,
	};
};
