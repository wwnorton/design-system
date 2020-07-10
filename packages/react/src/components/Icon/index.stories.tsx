import React from 'react';
import {
	withKnobs,
	number,
	select,
	color,
	text,
} from '@storybook/addon-knobs';
import { Icon, IconProps } from '.';
import { IconOptions } from '../../utilities';

export default {
	title: 'Icon',
	component: Icon,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => (
	<Icon
		variant={select<IconProps['variant']>('Icon', IconOptions, 'caret-right')}
		size={number('Size', 48)}
	>
		{ text('Contents', '') }
	</Icon>
);

export const WithARIALabel: React.FunctionComponent = () => (
	<Icon
		variant={select<IconProps['variant']>('Icon', IconOptions, 'caret-right')}
		size={number('Size', 48)}
		aria-label={text('Label', '')}
	/>
);

export const InfoWithDetails: React.FunctionComponent = () => (
	<Icon variant="info">
		Notice: this text is essentially the &quot;alt text&quot; of the icon.
		Under most circumstances, it is recommended that you use a
		{' '}
		<code>ButtonIcon</code>
		{' '}
		when you need an icon with a tooltip since icons are not interactive.
	</Icon>
);

export const AllIcons: React.FunctionComponent = () => {
	const size = number('Size', 48, { min: 4, max: 128, step: 4 });
	const c = color('Color', 'currentColor');
	return (
		<div className="icon-list">
			{
				Object.keys(IconOptions).map((key) => (
					<Icon
						key={IconOptions[key]}
						variant={IconOptions[key]}
						size={size}
						color={c}
						hideTooltipDelay={0}
					>
						{ key }
					</Icon>
				))
			}
		</div>
	);
};
