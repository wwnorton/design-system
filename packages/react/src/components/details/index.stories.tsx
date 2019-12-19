import * as React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs, text, select, boolean,
} from '@storybook/addon-knobs';
import { BaseDetails, Disclosure, DisclosureVariant } from '.';

export default {
	title: 'Details',
	component: BaseDetails,
	decorators: [withKnobs],
};

const variantOptions = {
	Default: 'default',
	Panel: 'panel',
	None: undefined,
};

export const baseDetails = (): JSX.Element => (
	<BaseDetails
		disabled={boolean('Disabled', false)}
		summary={text('Summary', 'Summary')}
	>
		<p>{text('Details Text', 'Details Text')}</p>
	</BaseDetails>
);

export const disclosure = (): JSX.Element => (
	<Disclosure
		summary={text('Summary', 'Summary')}
		variant={select('Variant', variantOptions, 'default') as DisclosureVariant}
		animate={boolean('Animate', true)}
		onToggle={action('onToggle')}
		disabled={boolean('Disabled', false)}
		open={boolean('Open', false)}
	>
		<p>{text('Disclosure Text', 'Disclosure Text')}</p>
	</Disclosure>
);
