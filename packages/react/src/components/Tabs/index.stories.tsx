import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { Link } from '../Link';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from '.';

const BASE_TABS = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4: Lorem Ipsum Long Text', 'Tab 5'];

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
				type: undefined,
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
				type: undefined,
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
					<Link href="/#" alt="A Link">
						A Link
					</Link>
				</TabPanel>
				<TabPanel>Content Four</TabPanel>
				<TabPanel>Content Five</TabPanel>
			</TabPanels>
		</Tabs>
	),
};

export const Default: Story = {
	...TabsTemplate,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const tabs = canvas.getAllByRole('tab');
		await expect(tabs).toHaveLength(BASE_TABS.length);

		await Promise.all(
			BASE_TABS.map((label, idx) => {
				return expect(tabs[idx]).toHaveAccessibleName(label);
			}),
		);

		await expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
		let panel = canvas.getByRole('tabpanel');
		await expect(panel).toHaveAccessibleName('Tab 1');
		await expect(panel).toHaveTextContent('Content One');

		// Navigate by mouse
		await userEvent.click(tabs[1]);
		await expect(tabs[1]).toHaveAttribute('aria-selected', 'true');

		panel = canvas.getByRole('tabpanel');
		await expect(panel).toHaveAccessibleName('Tab 2');
		await expect(panel).toHaveTextContent('Content Two');

		// When tab doesn't have focusable content, must focus on panel
		await userEvent.keyboard('{Tab}');
		await expect(panel).toHaveFocus();

		await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
		await expect(tabs[1]).toHaveFocus();

		await userEvent.keyboard('{ArrowRight}');
		await expect(tabs[2]).toHaveFocus();
		await userEvent.keyboard('{Enter}');

		// When tab has focusable content, must be next in the focus order.
		await userEvent.keyboard('{Tab}');
		const link = canvas.getByRole('link');
		await expect(link).toHaveFocus();

		// Wraps around tabs
		await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
		await userEvent.keyboard('{ArrowLeft}'.repeat(4));
		await expect(tabs[3]).toHaveFocus();

		// Focus First
		await userEvent.keyboard('{Home}');
		await expect(tabs[0]).toHaveFocus();

		// Focus Last
		await userEvent.keyboard('{End}');
		await expect(tabs[tabs.length - 1]).toHaveFocus();
	},
};

export const Mobile: Story = {
	...TabsTemplate,
	parameters: {
		viewport: {
			defaultViewport: 'mobile1',
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const tablist = canvas.getByRole('tablist');

		await expect(tablist.scrollLeft).toBe(0);

		const nextBtn = canvas.getByText('Next');
		await userEvent.click(nextBtn);
		await expect(tablist.scrollLeft).toBeGreaterThan(0);

		const prevBtn = canvas.getByText('Previous');
		await userEvent.click(prevBtn);
		await expect(tablist.scrollLeft).toBe(0);
	},
};

export const Controlled: Story = {
	...TabsTemplate,
	args: {
		selectedIndex: 0,
	},
};
