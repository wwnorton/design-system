import React from 'react';
import {
	text, withKnobs, boolean, select,
} from '@storybook/addon-knobs';
import { Callout, BorderPositionType } from '.';
import { CalloutWarning } from './CalloutWarning';
import { CalloutError } from './CalloutError';
import { CalloutSuccess } from './CalloutSuccess';
import { IconOptions, IconProps } from '../Icon';

export default {
	title: 'Callout',
	component: Callout,
	decorators: [withKnobs],
};

const defaultContents = [
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae',
	'velit, quibusdam culpa, consequuntur quos voluptate esse explicabo ipsa',
	'perspiciatis illo molestias dolorem atque praesentium modi saepe hic',
	'suscipit, deserunt debitis.',
].toString();

const sampleTitle = 'This is a title for Callout.';

export const Default: React.FunctionComponent = () => (
	<Callout
		title={text('Title', sampleTitle)}
		dismissable={boolean('Dismissable', true)}
		borderPosition={select('Border Position', { None: undefined, left: 'left', top: 'top' }, 'top')}
		icon={select<IconProps['variant']>('Icon', { None: undefined, ...IconOptions }, 'heart-outline')}
	>
		<span>{text('Contents', defaultContents)}</span>
	</Callout>
);

export const NoTitle: React.FunctionComponent = () => (
	<Callout
		borderPosition={select('Border Position', { None: undefined, left: 'left', top: 'top' }, 'top')}
		dismissable={boolean('Dismissable', true)}
	>
		<span>{text('Contents', defaultContents)}</span>
	</Callout>
);

export const Success: React.FunctionComponent = () => (
	<CalloutSuccess
		title={text('Title', sampleTitle)}
	>
		<span>{text('Contents', defaultContents)}</span>
	</CalloutSuccess>
);

export const Warning: React.FunctionComponent = () => (
	<CalloutWarning
		title={text('Title', sampleTitle)}
	>
		<span>{text('Contents', defaultContents)}</span>
	</CalloutWarning>
);

export const Error: React.FunctionComponent = () => (
	<CalloutError
		title={text('Title', sampleTitle)}
	>
		<span>{text('Contents', defaultContents)}</span>
	</CalloutError>
);
