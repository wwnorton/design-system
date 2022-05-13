import { Story } from '@storybook/react';
import React from 'react';
import { Tabs } from '.';
import { Tab } from './Tab';
import { TabList } from './TabList';
import { TabPanel } from './TabPanel';
import { TabPanels } from './TabPanels';
import { TabsProps } from './types';

/** To be added to every story-specific control's argTypes declaration	 */
const storySpecificCategory = 'Story Controls';

interface TabsControls extends TabsProps {
	tabCount: number,
	currentTab: number,
}

const baseDefaultProps = {
	tabCount: 5,
	currentTab: 0,
} as TabsProps;

export default {
	title: 'Tabs',
	component: Tabs,
	decorators: [
		(StoryComponent: React.ComponentType): JSX.Element => (
			<div style={{ maxWidth: '30rem' }}>
				<StoryComponent />
			</div>
		),
	],
	args: baseDefaultProps,
	argTypes: {
		tabCount: {
			table: { category: storySpecificCategory },
			description: 'Controls the total number of tabs',
			control: {
				type: 'range', min: 1, max: 10, tab: 1,
			},
		},
		currentTab: {
			table: { category: storySpecificCategory },
			description: 'Controls the position of the current tab',
			control: {
				type: 'range', min: 1, max: 10, tab: 1,
			},
		},
	},
	layout: 'padded',
};

const TabsTemplate: Story<TabsControls> = (
	{
		currentTab, tabCount, ...args
	},
) => {
	const tabs = [];
	const tabPanels = [];

	for (let i = 1; i <= tabCount; i += 1) {
		tabs.push(
			<Tab>
				{`Tab ${i}`}
			</Tab>,
		);
		tabPanels.push(
			<TabPanel>
				{`TabPanel ${i}`}
			</TabPanel>,
		);
	}

	return (
		<Tabs {...args}>
			<TabList>
				{tabs}
			</TabList>
			<TabPanels>
				{tabPanels}
			</TabPanels>
		</Tabs>
	);
};

export const Default = TabsTemplate.bind({});
