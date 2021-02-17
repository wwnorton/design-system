import React from 'react';
import {
	withKnobs,
	text,
	number,
	select,
} from '@storybook/addon-knobs';
import { Spinner } from '.';
import { SystemColorOptions } from '../../utilities/color';

export default {
	title: 'Spinner',
	component: Spinner,
	decorators: [withKnobs],
	parameters: {
		layout: 'centered',
	},
};

const baseProps = (determinate = false) => ({
	size: number('Size', 48, {
		range: true, min: 24, max: 256, step: 4,
	}),
	strokeWidth: number('Stroke width', 4, {
		range: true, min: 0.5, max: 16, step: 0.5,
	}),
	progress: determinate ? number('Progress', 0.6, {
		range: true, min: 0, max: 1, step: 0.01,
	}) : undefined,
});

const PlacementOptions = {
	Unset: undefined,
	// Top: 'top',
	Right: 'right',
	Bottom: 'bottom',
	// Left: 'left',
	Hidden: 'hidden',
};

export const Indeterminate: React.FunctionComponent = () => (
	<Spinner
		label={text('Label', 'Loading images...')}
		labelPosition={select('Label position', PlacementOptions, undefined)}
		color={select('Color', { Unset: undefined, ...SystemColorOptions }, undefined)}
		{...baseProps()}
	/>
);

export const Determinate: React.FunctionComponent = () => (
	<Spinner
		label={text('Label', 'Loading images...')}
		labelPosition={select('Label position', PlacementOptions, undefined)}
		color={select('Color', { Unset: undefined, ...SystemColorOptions }, undefined)}
		{...baseProps(true)}
	/>
);
