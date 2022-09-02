import React from 'react';
import { Icon, IconOptions, IconProps } from '.';

export default {
	title: 'Icon',
	component: Icon,
	argTypes: {
		size: {
			control: {
				type: 'range', min: 24, max: 512, step: 4,
			},
		},
		color: {
			control: {
				type: 'color',
				presetColors: [
					{ color: 'var(--nds-blue-60)', title: 'blue-60' },
					{ color: 'var(--nds-cyan-60)', title: 'cyan-60' },
					{ color: 'var(--nds-gray-60)', title: 'gray-60' },
					{ color: 'var(--nds-green-60)', title: 'green-60' },
					{ color: 'var(--nds-navy-60)', title: 'navy-60' },
					{ color: 'var(--nds-purple-60)', title: 'purple-60' },
					{ color: 'var(--nds-red-60)', title: 'red-60' },
					{ color: 'var(--nds-teal-60)', title: 'teal-60' },
					{ color: 'var(--nds-yellow-60)', title: 'yellow-60' },
				],
			},
		},
	},
};

const IconTemplate = (args: IconProps) => <Icon {...args} />;

export const Default = IconTemplate.bind({});
Default.args = {
	variant: 'caret-right',
};

export const WithARIALabel = IconTemplate.bind({});
WithARIALabel.args = {
	variant: 'caret-right',
	'aria-label': 'Right-pointing caret',
};

export const WithContent = IconTemplate.bind({});
WithContent.args = {
	variant: 'info',
	children: 'When an icon has content, that content is used to label the icon via a tooltip. Think of this as the "alt text" for the icon.',
};

export const AllIcons = (args: IconProps) => (
	<div className="icon-list">
		{
			Object.keys(IconOptions).map((key) => (
				<Icon
					key={IconOptions[key]}
					variant={IconOptions[key]}
					tooltipProps={{ hideDelay: 0 }}
					{...args}
				>
					{ key }
				</Icon>
			))
		}
	</div>
);
AllIcons.args = {
	size: 48,
	color: 'currentColor',
};
