import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs, select, boolean, text,
} from '@storybook/addon-knobs';
import './index.stories.scss';
import { IconVariant, SVGIcon, IconOptions } from '../../utilities';
import {
	Button, ButtonVariant, IconButton, ButtonProps,
} from '.';

export default {
	title: 'Button',
	component: Button,
	decorators: [withKnobs],
};

const variantOptions: Record<string, ButtonVariant | undefined> = {
	Solid: 'solid',
	Outline: 'outline',
	Ghost: 'ghost',
	None: undefined,
};

export const Default: React.FunctionComponent = () => (
	<Button
		variant={select<ButtonVariant | undefined>('Variant', variantOptions, 'solid')}
		disabled={boolean('Disabled', false)}
		icon={select<IconVariant | undefined>('Icon', { None: undefined, ...IconOptions }, undefined)}
		iconOnly={boolean('Icon only', false)}
		iconRight={boolean('Icon on the right', false)}
	>
		{ text('Text', 'Button') }
	</Button>
);

export const iconButton: React.FunctionComponent = () => (
	<IconButton
		onClick={action('onClick')}
		disabled={boolean('Disabled', false)}
		icon={select('Icon', IconOptions, 'close')}
	>
		{ text('Text', 'Close') }
	</IconButton>
);

const moonIcon: SVGIcon = {
	d: 'M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z',
	source: 'https://material.io/resources/icons/?icon=wb_sunny&style=baseline',
};

export const CustomIcon: React.FunctionComponent = () => (
	<Button
		variant={select<ButtonVariant | undefined>('Variant', variantOptions, 'solid')}
		disabled={boolean('Disabled', false)}
		icon={moonIcon}
		iconOnly
	>
		{ text('Text', 'Light') }
	</Button>
);

export const ChangingContent: React.FunctionComponent = () => {
	const [favorite, setFavorite] = React.useState(false);

	const toggleFavorite = (): void => setFavorite(!favorite);

	const buttonProps: ButtonProps = React.useMemo(() => {
		if (favorite) return { children: 'Unfavorite', icon: 'favorite' };
		return { children: 'Favorite', icon: 'favorite-outline' };
	}, [favorite]);

	return (
		<Button
			variant="solid"
			onClick={toggleFavorite}
			iconOnly={boolean('Icon only', false)}
			{...buttonProps}
		/>
	);
};
