import React from 'react';
import {
	withKnobs,
	number,
	select,
	color,
	text,
} from '@storybook/addon-knobs';
import './index.stories.scss';
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
		aria-label={text('Label', '')}
		size={number('Size', 48)}
	/>
);

export const AllIcons: React.FunctionComponent = () => {
	const size = number('Size', 48, { min: 4, max: 128, step: 4 });
	const c = color('Color', 'currentColor');
	return (
		<div className="icon-list">
			{
				Object.values(IconOptions).map((icon) => (
					<Icon
						variant={icon}
						size={size}
						color={c}
					/>
				))
			}
		</div>
	);
};
