import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '../Link';
import {
	Tabs,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
} from '.';

const BASE_TABS = ['Tab 1', 'Tab 2', 'Tab 3', 'Long Text "Tab 4"', 'Tab 5'];

const meta: Meta<typeof Tabs> = {
	title: 'Tabs',
	component: Tabs,
	parameters: { controls: { sort: 'requiredFirst' } },
	argTypes: {
		children: {
			table: {
				disable: true,
			},
			control: {
				type: null,
			},
		},
		selectedIndex: {
			control: {
				type: 'range',
				min: 0,
				max: BASE_TABS.length - 1,
			},
			if: { arg: 'onChange' },
		},
		defaultSelectedIndex: {
			control: {
				type: 'range',
				min: 0,
				max: BASE_TABS.length - 1,
			},
			if: { arg: 'onChange', exists: false },
		},
		onChange: {
			control: {
				type: 'none',
			},
			type: {
				required: false,
				name: 'function',
			},
			action: 'changed',
		},
	},
};
export default meta;

type Story = StoryObj<typeof Tabs>;

const TabsTemplate: Story = {
	render: ({ ...args }) => (
		<Tabs {...args}>
			<TabList>
				{BASE_TABS.map((tab, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<Tab key={index}>{tab}</Tab>
				))}
			</TabList>
			<TabPanels>
				<TabPanel>Content One</TabPanel>
				<TabPanel>Content Two</TabPanel>
				<TabPanel>
					Content Three.
					<Link href="/#" alt="A Link">A Link</Link>
				</TabPanel>
				<TabPanel>Content Four</TabPanel>
				<TabPanel>Content Five</TabPanel>
			</TabPanels>
		</Tabs>
	),
};

export const Default: Story = {
	...TabsTemplate,
	args: {
		defaultSelectedIndex: 0,
		onChange: undefined,
	},
};

export const Controlled: Story = {
	...Default,
	args: {
		selectedIndex: 0,
	},
};
