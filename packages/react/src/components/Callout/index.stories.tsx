import React from 'react';

import { Story } from '@storybook/react';
import {
	Callout, CalloutError, CalloutProps, CalloutSuccess, CalloutWarning,
} from '.';
import { IconOptions, IconVariant } from '../Icon';
import { ColorOptions } from '../../utilities/color';

const defaultContents = `
	Lorem ipsum is simply dummy text of the printing and typesetting industry.
	Lorem ipsum has been the industry’s standard dummy text ever since the 1500s,
	when an unknown printer took a galley of type.
`.replace(/\n\t/g, ' ').replace(/\n/g, '');

const simpleChildren = defaultContents;
const complexChildren = (
	<div>
		<p>
			{defaultContents}
		</p>
		<hr />
		<p>
			{defaultContents}
		</p>
	</div>
);

const baseDefaultProps = {
	title: 'Default callout',
	children: simpleChildren,
	dismissible: true,
	icon: 'check-circle',
} as CalloutProps;

export default {
	title: 'Callout',
	component: Callout,
	decorators: [
		(StoryComponent: React.ComponentType): JSX.Element => (
			<div style={{ maxWidth: '30rem' }}>
				<StoryComponent />
			</div>
		),
	],
	args: baseDefaultProps,
	argTypes: {
		children: {
			options: { 'Simple string text': simpleChildren, 'Nested ReactNode': complexChildren },
			control: 'radio',
		},
		dismissible: {
			control: 'boolean',
		},
		title: {
			control: 'text',
		},
		icon: {
			options: IconOptions,
			control: 'select',
		},
	},
	layout: 'padded',
};

const CalloutTemplate: Story<CalloutProps> = (args) => (
	<Callout
		{...args}
	/>
);

export const Default = CalloutTemplate.bind({});

export const NoTitle = CalloutTemplate.bind({});
NoTitle.args = {
	title: undefined,
} as CalloutProps;

export const Success = CalloutTemplate.bind({});
Success.args = {
	color: 'success',
	border: 'left',
} as CalloutProps;

export const Warning = CalloutTemplate.bind({});
Warning.args = {
	color: 'warning',
	border: 'left',
	icon: 'warning',
} as CalloutProps;

export const Error = CalloutTemplate.bind({});
Error.args = {
	color: 'error',
	border: 'left',
	icon: 'exclamation',
} as CalloutProps;
