import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link as ReachLink } from '../../../../../node_modules/@reach/router';
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
	<LinkContext.Provider value={ReachLink}>
		<Link to="https://github.com/wwnorton/design-system">Norton Design System GitHub</Link>
	</LinkContext.Provider>
);
