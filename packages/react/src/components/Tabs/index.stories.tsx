import React, { useCallback } from 'react';
import { Meta } from '@storybook/react';
import {
	Tabs, Tab, TabList, TabPanel, TabPanels,
	TabsProps,
	ControlledTabsProps,
} from '.';
import { Button } from '../Button';
import { Link } from '../Link';

export default {
	title: 'Tabs',
	component: Tabs,
	argTypes: {
		selectedIndex: {
			control: {
				type: 'range', min: 0, step: 1, max: 2,
			},
		},
	},
} as Meta<TabsProps>;

export const Uncontrolled = () => (
	<div style={{ maxWidth: '960px' }}>
		<Tabs defaultSelectedIndex={0}>
			<TabList>
				<Tab>Cats</Tab>
				<Tab>Dogs</Tab>
				<Tab disabled>Horses</Tab>
				<Tab>Cows</Tab>
				<Tab>Beavers</Tab>
				<Tab>Camels</Tab>
				<Tab>Myxococcus llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogochensis</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>Cats content</TabPanel>
				<TabPanel>Dogs content</TabPanel>
				<TabPanel>Horses content</TabPanel>
				<TabPanel>
					Cows content
					{' '}
					<Button onClick={() => console.log('Moo!')}>Moo!</Button>
				</TabPanel>
				<TabPanel>Beavers content</TabPanel>
				<TabPanel>Camels content</TabPanel>
				<TabPanel>
					Myxococcus llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogochensis content.
					{' '}
					<Link
						external
						href="https://en.wikipedia.org/wiki/Myxococcus_llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogochensis"
					>
						Wiki page
					</Link>
				</TabPanel>
			</TabPanels>
		</Tabs>
	</div>
);

export const Controlled = ({ selectedIndex }: ControlledTabsProps) => {
	const [selectedTabIndex, setSelectedTabIndex] = React.useState(selectedIndex);
	const onChange = useCallback((index) => {
		setSelectedTabIndex(index);
	}, []);

	return (
		<div style={{ maxWidth: '960px' }}>
			<Button onClick={() => setSelectedTabIndex(0)}>Switch to tab 1</Button>
			<Button onClick={() => setSelectedTabIndex(1)}>Switch to tab 2</Button>
			<Button onClick={() => setSelectedTabIndex(2)}>Switch to tab 3</Button>
			<hr />
			<Tabs selectedIndex={selectedTabIndex} onChange={onChange}>
				<TabList>
					<Tab>Cats</Tab>
					<Tab>Dogs</Tab>
					<Tab>Horses</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>Cats content</TabPanel>
					<TabPanel>Dogs content</TabPanel>
					<TabPanel>Horses content</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
};

export const Centered = () => (
	<div style={{ maxWidth: '960px' }}>
		<Tabs align="center" defaultSelectedIndex={0}>
			<TabList>
				<Tab>Cats</Tab>
				<Tab>Dogs</Tab>
				<Tab>Horses</Tab>
				<Tab>Cows</Tab>
				<Tab>Beavers</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>Cats content</TabPanel>
				<TabPanel>Dogs content</TabPanel>
				<TabPanel>Horses content</TabPanel>
				<TabPanel>Cows content</TabPanel>
				<TabPanel>Beavers content</TabPanel>
			</TabPanels>
		</Tabs>
	</div>
);

export const Line = () => (
	<div style={{ maxWidth: '960px' }}>
		<Tabs variant="line" defaultSelectedIndex={0}>
			<TabList>
				<Tab>Cats</Tab>
				<Tab>Dogs</Tab>
				<Tab disabled>Horses</Tab>
				<Tab>Cows</Tab>
				<Tab>Beavers</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>Cats content</TabPanel>
				<TabPanel>Dogs content</TabPanel>
				<TabPanel>Horses content</TabPanel>
				<TabPanel>Cows content</TabPanel>
				<TabPanel>Beavers content</TabPanel>
			</TabPanels>
		</Tabs>
	</div>
);

Controlled.args = {
	selectedIndex: 1,
};
