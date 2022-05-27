import React, { Children, cloneElement } from 'react';

function makeTypeChecker(tabsRole: string) {
	return (element: {
		type: { displayName: string; };
	}) => !!element.type && element.type.displayName === tabsRole;
}

const isTab = makeTypeChecker('Tab');
const isTabList = makeTypeChecker('TabList');
const isTabPanel = makeTypeChecker('TabPanel');

function isTabChild(child: { type: { displayName: string; }; }) {
	return isTab(child) || isTabList(child) || isTabPanel(child);
}

function deepMap(children: any, callback: (arg0: any) => any) {
	return Children.map(children, (child) => {
		// null happens when conditionally rendering TabPanel/Tab
		if (child === null) return null;

		if (isTabChild(child)) {
			return callback(child);
		}

		if (
			child.props
			&& child.props.children
			&& typeof child.props.children === 'object'
		) {
			// Clone the child that has children and map them too
			return cloneElement(child, {
				...child.props,
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				children: deepMap(child.props.children, callback),
			});
		}

		return child;
	});
}

function deepForEach(children: any, callback: {
	(child: { type: { tabsRole: string; }; }): void; (arg0: any): void;
}) {
	return Children.forEach(children, (child) => {
		// null happens when conditionally rendering TabPanel/Tab
		// see https://github.com/reactjs/react-tabs/issues/37
		if (child === null) return;

		if (isTab(child) || isTabPanel(child)) {
			callback(child);
		} else if (
			child.props
			&& child.props.children
			&& typeof child.props.children === 'object'
		) {
			if (isTabList(child)) callback(child);
			deepForEach(child.props.children, callback);
		}
	});
}

function getTabsCount(children: React.ReactNode) {
	let tabCount = 0;
	deepForEach(children, (child: { type: { tabsRole: string; }; }) => {
		if (isTab(child)) tabCount += 1;
	});

	return tabCount;
}

export {
	isTab,
	isTabList,
	isTabPanel,
	isTabChild,
	deepMap,
	deepForEach,
	getTabsCount,
};
