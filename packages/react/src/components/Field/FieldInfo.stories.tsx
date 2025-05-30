import type { Meta, StoryObj } from '@storybook/react-vite';
import { FieldInfo } from '.';

const meta = {
	title: 'Components/Field Info',
	component: FieldInfo,
} satisfies Meta<typeof FieldInfo>;

export default meta;

type Story = StoryObj<typeof FieldInfo>;

export const Info = {
	args: {
		label: 'Field label',
		description: 'Additional information about this field',
		indicator: 'required',
	},
} satisfies Story;
