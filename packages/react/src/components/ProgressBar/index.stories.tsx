import React from 'react';
import {
	withKnobs,
	number,
	text,
	select,
} from '@storybook/addon-knobs';
import { ProgressBar } from '.';

export default {
	title: 'ProgressBar',
	component: ProgressBar,
	decorators: [withKnobs],
};

const Sizes = { Unset: undefined, Small: 'small', Large: 'large' };

const baseProps = (determinate = false) => ({
	size: select('Size', Sizes, undefined),
	progress: determinate ? number('Progress', 0.6, {
		range: true, min: 0, max: 1, step: 0.01,
	}) : undefined,
});

export const Indeterminate: React.FunctionComponent = () => (
	<div style={{ maxWidth: '100%', width: '20rem' }}>
		<ProgressBar
			label={text('Label', 'Loading images...')}
			{...baseProps()}
		/>
	</div>
);

export const Determinate: React.FunctionComponent = () => (
	<div style={{ maxWidth: '100%', width: '20rem' }}>
		<ProgressBar
			label={text('Label', 'Loading images...')}
			{...baseProps(true)}
		/>
	</div>
);

export const Buffered: React.FunctionComponent = () => (
	<div style={{ maxWidth: '100%', width: '20rem' }}>
		<ProgressBar
			label={text('Label', 'Loading images...')}
			buffer={number('Buffer', 0.8, {
				range: true, min: 0, max: 1, step: 0.01,
			})}
			{...baseProps(true)}
		/>
	</div>
);

export const Reversed: React.FunctionComponent = () => (
	<div style={{ maxWidth: '100%', width: '20rem' }}>
		<ProgressBar
			label={text('Label', 'Loading images...')}
			reversed
			{...baseProps(true)}
		/>
	</div>
);

export const ReversedBuffered: React.FunctionComponent = () => (
	<div style={{ maxWidth: '100%', width: '20rem' }}>
		<ProgressBar
			label={text('Label', 'Loading images...')}
			reversed
			buffer={number('Buffer', 0.8, {
				range: true, min: 0, max: 1, step: 0.01,
			})}
			{...baseProps(true)}
		/>
	</div>
);

export const FullWidth: React.FunctionComponent = () => (
	<div style={{ width: '100%' }}>
		<ProgressBar size="small" label="Loading page..." hideLabel {...baseProps()} />
	</div>
);
