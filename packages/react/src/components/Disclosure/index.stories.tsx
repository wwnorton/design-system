import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Disclosure } from '.';

const defaultContents = (
	<p>
		Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been
		the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a
		galley of type.
	</p>
);

const meta = {
	title: 'Components/Disclosure',
	component: Disclosure,
	args: {
		panel: false,
		isOpen: false,
		summary: 'More information',
		children: defaultContents,
	},
	argTypes: {
		panel: {
			control: { type: 'boolean' },
		},
		isOpen: {
			control: { type: 'boolean' },
		},
	},
} satisfies Meta<typeof Disclosure>;

export default meta;

type Story = StoryObj<typeof Disclosure>;

export const Default = {} satisfies Story;

export const Panel = {
	args: {
		panel: true,
	},
} satisfies Story;

export const Controlled = {
	render: (args) => {
		const summaryText = React.useRef('More information');
		const [contents, setContents] = React.useState<React.ReactNode>();
		const [summary, setSummary] = React.useState<string>(summaryText.current);

		// load content asynchronously
		const getContents = async (): Promise<void> => {
			setSummary(`${summaryText.current} (retrieving...)`);
			const newContent = await new Promise<React.ReactNode>((resolve) => {
				window.setTimeout(() => {
					resolve(defaultContents);
				}, 500);
			});
			setContents(newContent);
			setSummary(summaryText.current);
		};

		return (
			<Disclosure
				{...args}
				panel
				summary={summary}
				onOpenStart={getContents}
				onCloseEnd={(): void => setContents(undefined)}
			>
				{contents}
			</Disclosure>
		);
	},
} satisfies Story;
