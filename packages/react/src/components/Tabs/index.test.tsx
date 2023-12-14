import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
	Tabs, Tab, TabList, TabPanels, TabPanel,
} from '.';

test.afterEach.always(cleanup);

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

test('Tabs Keyboard Navigation', (t) => {
	render(
		<Tabs>
			<TabList>
				<Tab>Tab 1</Tab>
				<Tab>Tab 2</Tab>
				<Tab>Tab 3</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>Content 1</TabPanel>
				<TabPanel>Content 2</TabPanel>
				<TabPanel>Content 3</TabPanel>
			</TabPanels>
		</Tabs>,
	);

	const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
	const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
	const tab3 = screen.getByRole('tab', { name: 'Tab 3' });

	tab1.focus();

	const tabList = screen.getByRole('tablist');

	// Right Arrow moves to next
	fireEvent.keyDown(tabList, { key: 'ArrowRight' });
	t.true(document.activeElement === tab2);

	// Left Arrow moves to previous
	fireEvent.keyDown(tabList, { key: 'ArrowLeft' });
	t.true(document.activeElement === tab1);

	// End moves to last
	fireEvent.keyDown(tabList, { key: 'End' });
	t.true(document.activeElement === tab3);

	// Home moves to first
	fireEvent.keyDown(tabList, { key: 'Home' });
	t.true(document.activeElement === tab1);

	// Left on first wraps to last
	fireEvent.keyDown(tabList, { key: 'ArrowLeft' });
	t.true(document.activeElement === tab3);

	// Right on last wraps to first
	fireEvent.keyDown(tabList, { key: 'ArrowRight' });
	t.true(document.activeElement === tab1);
});

test('Tabbing order: No focus-able elements, focus goes to container', (t) => {
	render(
		<Tabs>
			<TabList>
				<Tab>Tab 1</Tab>
				<Tab>Tab 2</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>Content 1</TabPanel>
				<TabPanel>Content 2</TabPanel>
			</TabPanels>
		</Tabs>,
	);

	const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
	const tabPanel1 = screen.getByRole('tabpanel', { name: 'Tab 1' });

	// First tab event moves focus to First Tab
	userEvent.tab();
	t.true(document.activeElement === tab1);

	// Second tab event should move the focus to the panel
	userEvent.tab();
	t.true(document.activeElement === tabPanel1);
});

test('Tabbing order: with focus-able elements, focus goes to first element', (t) => {
	render(
		<Tabs>
			<TabList>
				<Tab>Tab 1</Tab>
				<Tab>Tab 2</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					Content 1:
					{' '}
					<button type="button">Button 1</button>
					<button type="button">Button 2</button>
				</TabPanel>
				<TabPanel>Content 2</TabPanel>
			</TabPanels>
		</Tabs>,
	);

	const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
	const button1 = screen.getByRole('button', { name: 'Button 1' });

	// First tab event moves focus to First Tab
	userEvent.tab();
	t.true(document.activeElement === tab1);

	// Second tab event should move the focus to the first button
	userEvent.tab();
	t.true(document.activeElement === button1);
});
