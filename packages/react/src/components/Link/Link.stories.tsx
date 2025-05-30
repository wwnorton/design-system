import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter, Link as ReactRouterLink } from 'react-router-dom';
import { LinkLikeProps } from 'packages/react/dist';
import { Link } from '.';
import { LinkContext } from '../../utilities/link';

const meta = {
	title: 'Components/Link',
	component: Link,
	argTypes: {
		external: {
			control: {
				type: 'boolean',
			},
		},
	},
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof Link>;

export const Default = {
	args: {
		children: 'Default link',
		href: '?path=/story/link--default',
		external: false,
	},
} satisfies Story;

export const External = {
	args: {
		children: 'Norton Design System GitHub',
		href: 'https://github.com/wwnorton/design-system',
		external: true,
	},
} satisfies Story;

export const ThirdPartyRouter = {
	render: (args) => (
		<BrowserRouter>
			<LinkContext.Provider value={ReactRouterLink as React.ComponentType<LinkLikeProps>}>
				<Link {...args} to="/">
					Norton Design System
				</Link>
			</LinkContext.Provider>
		</BrowserRouter>
	),
} satisfies Story;
