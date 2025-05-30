import type { Meta, StoryObj } from '@storybook/react-vite';
import { ResponseIndicator } from './index';

const meta = {
	title: 'Components/Response Indicator',
	component: ResponseIndicator,
} satisfies Meta<typeof ResponseIndicator>;

export default meta;

type Story = StoryObj<typeof ResponseIndicator>;

// With Icon and Label
export const Default = {
	args: {
		variant: 'correct',
		withIcon: true,
		placementIcon: 'left',
	},
} satisfies Story;

// Label Only
export const LabelOnly = {
	args: {
		withIcon: false,
	},
} satisfies Story;

// Custom Label with icon only
export const CustomLabelWithIconOnly = {
	args: {
		variant: 'correct',
		withIcon: true,
		label: 'You are alright',
	},
} satisfies Story;

// Vertical Variant
export const VerticalVariant = {
	args: {
		variant: 'incorrect',
		withIcon: true,
		placementIcon: 'top',
	},
} satisfies Story;
