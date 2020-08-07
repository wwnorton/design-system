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

export const WithContent: React.FunctionComponent = () => (
	<Icon variant="info">
		When an icon has content, its content is used to label the icon and it
		is rendered as its tooltip. This is effectively the &quot;alt text&quot;
		of the icon and should never have structured or interactive content.
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
						tooltipProps={{ hideDelay: 0 }}
					>
						{ key }
					</Icon>
				))
			}
		</div>
	);
};
