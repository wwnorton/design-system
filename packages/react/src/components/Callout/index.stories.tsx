import { Story } from '@storybook/react';
import React from 'react';
import {
	Callout, CalloutProps,
} from '.';
import { IconOptions } from '../Icon';

const defaultContents = `
	Lorem ipsum is simply dummy text of the printing and typesetting industry.
	Lorem ipsum has been the industry’s standard dummy text ever since the 1500s,
	when an unknown printer took a galley of type.
`.replace(/\n\t/g, ' ').replace(/\n/g, '');

type CalloutContent = 'simple' | 'complex'

type CalloutStoryProps = CalloutProps & {
	childrenType: CalloutContent
}

const simpleChildren = defaultContents;
const complexChildren: React.ReactNode = (
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
	childrenType: 'simple',
	dismissible: true,
	icon: 'check-circle',
} as CalloutStoryProps;

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
		childrenType: {
			options: { 'Simple string text': 'simple', 'Nested ReactNode': 'complex' } as Record<string, CalloutContent>,
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

const CalloutTemplate: Story<CalloutStoryProps> = ({ childrenType, ...args }) => (
	<Callout
		{...args}
	>
		{childrenType === 'simple' && simpleChildren }
		{childrenType === 'complex' && complexChildren}
	</Callout>
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
