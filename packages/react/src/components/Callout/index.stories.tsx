import React from 'react';
import {
	text, withKnobs, boolean, select,
} from '@storybook/addon-knobs';

import { Callout, BorderPositionType } from '.';
import { CalloutWarning } from './CalloutWarning';
import { CalloutError } from './CalloutError';
import { CalloutSuccess } from './CalloutSuccess';
import { IconOptions, IconProps } from '../Icon';
import { SystemColors } from '../../utilities/color';

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
		dismissible={boolean('Dismissible', true)}
		borderPosition={select('Border Position', { None: undefined, left: 'left', top: 'top' }, 'top')}
		icon={select<IconProps['variant']>('Icon', { None: undefined, ...IconOptions }, 'heart-outline')}
		color={select<SystemColors>('Color', {
			blue: 'blue',
			cyan: 'cyan',
			gray: 'gray',
			green: 'green',
			navy: 'navy',
			purple: 'purple',
			red: 'red',
			teal: 'teal',
			yellow: 'yellow',
		}, 'navy')}
	>
		<span>{text('Body', defaultContents)}</span>
	</Callout>
);

export const NoTitle: React.FunctionComponent = () => (
	<Callout
		borderPosition={select<BorderPositionType>('Border Position', { None: undefined, left: 'left', top: 'top' }, 'top')}
		color={select<SystemColors>('Color', {
			blue: 'blue',
			cyan: 'cyan',
			gray: 'gray',
			green: 'green',
			navy: 'navy',
			purple: 'purple',
			red: 'red',
			teal: 'teal',
			yellow: 'yellow',
		}, 'purple')}
		dismissible={boolean('Dismissible', true)}
	>
		<span>{text('Body', defaultContents)}</span>
	</Callout>
);

export const Success: React.FunctionComponent = () => (
	<CalloutSuccess
		title={text('Title', sampleTitle)}
		dismissible={boolean('Dismissible', false)}
	>
		<span>{text('Body', defaultContents)}</span>
	</CalloutSuccess>
);

export const Warning: React.FunctionComponent = () => (
	<CalloutWarning
		title={text('Title', sampleTitle)}
		dismissible={boolean('Dismissible', false)}
	>
		<span>{text('Body', defaultContents)}</span>
	</CalloutWarning>
);

export const Error: React.FunctionComponent = () => (
	<CalloutError
		title={text('Title', sampleTitle)}
		dismissible={boolean('Dismissible', false)}
	>
		<span>{text('Body', defaultContents)}</span>
	</CalloutError>
);