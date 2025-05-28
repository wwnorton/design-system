import React from 'react';
import { Meta, Story } from '@storybook/react-vite';
import { BrowserRouter, Link as ReactLink } from 'react-router-dom';
import { Link, LinkProps } from '.';
import { LinkContext } from '../../utilities/link';

export default {
	title: 'Link',
	component: Link,
	argTypes: {
		external: {
			control: {
				type: 'boolean',
			},
		},
	},
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Default link',
	href: '?path=/story/link--default',
	external: false,
};

export const External = Template.bind({});
External.args = {
	children: 'Norton Design System GitHub',
	href: 'https://github.com/wwnorton/design-system',
	external: true,
};

export const ThirdPartyRouter = (): JSX.Element => (
	<BrowserRouter>
		<LinkContext.Provider value={ReactLink}>
			<Link to="/">Norton Design System</Link>
		</LinkContext.Provider>
	</BrowserRouter>
);
