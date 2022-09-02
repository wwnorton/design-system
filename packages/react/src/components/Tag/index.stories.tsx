import React from 'react';
import { Meta } from '@storybook/react';
import { Tag, TagProps } from '.';
import { Icon } from '../Icon';
import { Link } from '../Link';

export default {
	title: 'Tag',
	component: Tag,
} as Meta<TagProps>;

const TagTemplate = (args: TagProps) => <Tag {...args} />;

export const Default = TagTemplate.bind({});
Default.args = {
	children: 'Tag label',
	color: undefined,
};

export const WithIcon = TagTemplate.bind({});
WithIcon.args = {
	color: 'green',
	children: (
		<>
			<Icon variant="download" />
			With Icon
		</>
	),
};

export const WithLink = TagTemplate.bind({});
WithLink.args = {
	children: (
		<Link href="https://github.com/wwnorton/design-system" external>
			Norton Design System GitHub
		</Link>
	),
};

export const Dismissible = (args: TagProps) => {
	const [dismissed, setDismissed] = React.useState(false);

	if (dismissed) return <span {...args} />;
	return (
		<Tag {...args} dismissible onDismiss={() => setDismissed(true)}>
			Dismissible
		</Tag>
	);
};
