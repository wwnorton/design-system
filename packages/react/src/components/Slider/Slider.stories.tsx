import React from 'react';
import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './Slider';

const meta = {
	title: 'Components/Slider',
	component: Slider,
	parameters: {
		docs: {
			codePanel: true,
		},
	},
	args: {
		label: 'Temperature',
		onChange: fn(),
	},
	render: (args) => (
		<div style={{ width: '100%', height: '300px' }}>
			<Slider {...args} />
		</div>
	),
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default = {
	args: {
		min: 0,
		max: 100,
		step: 1,
		getValueText: (value) => `${value}°C`,
	},
} satisfies Story;

export const Marks = {
	args: {
		marks: true,
		showValueIndicators: true,
		getValueText: (value) => `${value}°C`,
	},
} satisfies Story;

export const CustomMarks = {
	args: {
		marks: [
			{ value: 0, label: 'Freezing' },
			{ value: 25, label: 'Cool' },
			{ value: 50, label: 'Warm' },
			{ value: 75, label: 'Hot' },
			{ value: 100, label: 'Boiling' },
		],
		step: 25,
		showValueIndicators: true,
	},
} satisfies Story;

export const Vertical = {
	args: {
		orientation: 'vertical',
		marks: true,
	},
	render: (args) => (
		<div style={{ width: '300px', height: '300px' }}>
			<Slider {...args} />
		</div>
	),
} satisfies Story;

export const ExternalLabel = {
	args: {
		externalLabelId: 'temperature-label',
	},
	render: (args) => (
		<div style={{ width: '300px', height: '300px' }}>
			{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
			<label id={args.externalLabelId} htmlFor="temperature-slider">
				Temperature
			</label>
			<Slider id="temperature-slider" {...args} />
		</div>
	),
} satisfies Story;

export const WithIcons = {
	args: {
		iconLeft: 'minus',
		iconRight: 'plus',
		marks: true,
		step: 20,
	},
} satisfies Story;

export const HorizontalCentered = {
	args: {
		orientation: 'horizontal-centered',
	},
} satisfies Story;

export const WithSupportingText = {
	args: {
		supportingText: (
			<>
				<p>Lorem ipsum dolor sit amet</p>
				<ul>
					<li>Consectetur adipiscing elit</li>
					<li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
					<li>
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat
					</li>
				</ul>
			</>
		),
	},
} satisfies Story;

export const WithColor = {
	args: {
		color: 'purple',
	},
} satisfies Story;

export const Controlled = {
	render: (args) => {
		const [value, setValue] = React.useState(0);
		return (
			<>
				<div>Value: {value}</div>
				<Slider {...args} value={value} onChange={(v) => setValue(v)} />
			</>
		);
	},
} satisfies Story;

export const Disabled = {
	args: {
		disabled: true,
		value: 50,
	},
} satisfies Story;
