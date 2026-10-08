import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Disclosure } from '.';
import { ResponseIndicator } from '../ResponseIndicator';
import { Button } from '../Button';

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
		onOpenStart: fn(),
		onOpenEnd: fn(),
		onOpenCancel: fn(),
		onCloseStart: fn(),
		onCloseEnd: fn(),
		onCloseCancel: fn(),
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

export const NoAnimation = {
	args: {
		reducedMotion: true,
	},
} satisfies Story;

export const Panel = {
	args: {
		panel: true,
		isOpen: true,
	},
} satisfies Story;

export const Controlled = {
	render: (args) => {
		const counter = React.useState(0);
		const summaryText = React.useRef('More information');
		const [contents, setContents] = React.useState<React.ReactNode>();
		const [summary, setSummary] = React.useState<string>(summaryText.current);

		// load content asynchronously
		const getContents = async (): Promise<void> => {
			args.onOpenStart?.();
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
			<div>
				<Button onClick={() => counter[1]((c) => c + 1)}>Trigger rerender</Button>
				<hr />
				<Disclosure
					{...args}
					panel
					summary={summary}
					onOpenStart={getContents}
					onOpenEnd={() => {
						args.onOpenEnd?.();
					}}
					onCloseEnd={(): void => {
						setContents(undefined);
						args.onCloseEnd?.();
					}}
				>
					{contents}
				</Disclosure>
			</div>
		);
	},
} satisfies Story;

export const CustomSummary = {
	args: {
		summary: (
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<span>1st Attempt</span>
				<ResponseIndicator variant="correct" />
			</div>
		),
	},
} satisfies Story;
