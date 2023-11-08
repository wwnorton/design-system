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

test('clicking on tabs, switches panels', (t) => {
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
	const catsTab = screen.getByRole('tab', { name: 'Cats' });
	t.true(catsTab.getAttribute('aria-selected') === 'true');
	const catsPanel = screen.queryByRole('tabpanel', { name: 'Cats' });
	t.true(catsPanel !== null);

	// TabPanel changes when click on Dogs Tab
	const dogsTab = screen.getByRole('tab', { name: 'Dogs' });
	fireEvent.click(dogsTab);

	const dogsPanel = screen.queryByRole('tabpanel', { name: 'Dogs' });
	t.true(dogsPanel !== null);
});
