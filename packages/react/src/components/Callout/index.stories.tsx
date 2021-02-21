import React from 'react';
import {
	text, withKnobs, boolean, select,
} from '@storybook/addon-knobs';

import {
	Callout, CalloutError, CalloutSuccess, CalloutWarning,
} from '.';
import { IconOptions } from '../Icon';
import { ColorOptions } from '../../utilities/color';

export default {
	title: 'Callout',
	component: Callout,
	decorators: [withKnobs],
	layout: 'padded',
};

const MAX_WIDTH = '30rem';

const defaultContents = `
	Lorem ipsum is simply dummy text of the printing and typesetting industry.
	Lorem ipsum has been the industry’s standard dummy text ever since the 1500s,
	when an unknown printer took a galley of type.
`.replace(/\n\t/g, ' ').replace(/\n/g, '');

const borderMap = {
	None: undefined, Top: 'top', Right: 'right', Bottom: 'bottom', Left: 'left',
};

export const Default: React.FunctionComponent = () => (
	<Callout
		style={{ maxWidth: MAX_WIDTH }}
		title={text('Title', 'Default callout')}
		dismissible={boolean('Dismissible', true)}
		border={select('Border Position', borderMap, undefined)}
		icon={select('Icon', { None: undefined, ...IconOptions }, 'check-circle')}
		color={select('Color', { None: undefined, ...ColorOptions }, undefined)}
		tag={select('Tag Element', { div: 'div', aside: 'aside' }, undefined)}
	>
		<p>{ text('Body', defaultContents) }</p>
	</Callout>
);

export const NoTitle: React.FunctionComponent = () => (
	<Callout
		style={{ maxWidth: MAX_WIDTH }}
		border={select('Border Position', borderMap, undefined)}
		color={select('Color', { None: undefined, ...ColorOptions }, undefined)}
		dismissible={boolean('Dismissible', true)}
	>
		<p>{ text('Body', defaultContents) }</p>
	</Callout>
);

export const Success: React.FunctionComponent = () => (
	<CalloutSuccess
		style={{ maxWidth: MAX_WIDTH }}
		title={text('Title', 'Success')}
		dismissible={boolean('Dismissible', false)}
	>
		<p>{ text('Body', defaultContents) }</p>
	</CalloutSuccess>
);

export const Warning: React.FunctionComponent = () => (
	<CalloutWarning
		style={{ maxWidth: MAX_WIDTH }}
		title={text('Title', 'Warning')}
		dismissible={boolean('Dismissible', false)}
	>
		<p>{ text('Body', defaultContents) }</p>
	</CalloutWarning>
);

export const Error: React.FunctionComponent = () => (
	<CalloutError
		style={{ maxWidth: MAX_WIDTH }}
		title={text('Title', 'Error')}
		dismissible={boolean('Dismissible', false)}
	>
		<p>{ text('Body', defaultContents) }</p>
	</CalloutError>
);
