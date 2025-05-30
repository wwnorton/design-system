import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from '.';
import { Icon } from '../Icon';
import { Link } from '../Link';

const meta = {
	title: 'Components/Tag',
	component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default = {
	args: {
		children: 'Tag label',
		color: undefined,
	},
} satisfies Story;

export const WithIcon = {
	args: {
		color: 'green',
		children: (
			<>
				<Icon variant="download" />
				With Icon
			</>
		),
	},
} satisfies Story;

export const WithLink = {
	args: {
		children: (
			<Link href="https://github.com/wwnorton/design-system" external>
				Norton Design System GitHub
			</Link>
		),
	},
} satisfies Story;

export const Dismissible = {
	render: (args) => {
		const [dismissed, setDismissed] = React.useState(false);

		if (dismissed) return <span {...args} />;
		return (
			<Tag {...args} dismissible onDismiss={() => setDismissed(true)}>
				Dismissible
			</Tag>
		);
	},
} satisfies Story;
