import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
} from '@testing-library/react';
import {
	Tabs, Tab, TabList, TabPanels, TabPanel,
} from '.';

test.beforeEach(() => {
	global.ResizeObserver = function ResizeObserver() {
		return {
			observe: () => {},
			disconnect: () => {},
		};
	} as any;
});

test.afterEach(cleanup);

/**
 * Component for testing controlled tabs.
 */
const TestControlledTabs = () => {
	const [selectedTab, setSelectedTab] = React.useState(0);
	return (
		<div>
			<button type="button" onClick={() => setSelectedTab(0)}>Go to First Tab</button>
			<Tabs selectedIndex={selectedTab} onChange={setSelectedTab}>
				<TabList>
					<Tab>Cats</Tab>
					<Tab>Dogs</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>Cats content</TabPanel>
					<TabPanel>Dogs content</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
};

function areTabAndPanelSelected(name: string): boolean {
	const tab = screen.getByRole('tab', { name });
	const isTabSelected = tab.getAttribute('aria-selected') === 'true';

	const panel = screen.queryByRole('tabpanel', { name });
	const isPanelDisplayed = panel !== null;

	return isTabSelected && isPanelDisplayed;
}

test('Uncontrolled: clicking on tabs, switches panels', (t) => {
	render(
		<Tabs>
			<TabList>
				<Tab>Cats</Tab>
				<Tab>Dogs</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>Cats content</TabPanel>
				<TabPanel>Dogs content</TabPanel>
			</TabPanels>
		</Tabs>,
	);

	// Cats is selected by default
	t.true(
		areTabAndPanelSelected('Cats'),
	);

	// TabPanel changes when click on Dogs Tab
	const dogsTab = screen.getByRole('tab', { name: 'Dogs' });
	fireEvent.click(dogsTab);

	t.true(
		areTabAndPanelSelected('Dogs'),
	);
});

test('Controlled: clicking on external controls, switches panels', (t) => {
	render(
		<TestControlledTabs />,
	);

	// TabPanel changes when click on Dogs Tab
	const dogsTab = screen.getByRole('tab', { name: 'Dogs' });
	fireEvent.click(dogsTab);
	t.true(
		areTabAndPanelSelected('Dogs'),
	);

	// TabPanel and Tab changes when clicking on external control
	const externalControl = screen.getByRole('button', { name: 'Go to First Tab' });
	fireEvent.click(externalControl);
	t.true(
		areTabAndPanelSelected('Cats'),
	);
});
