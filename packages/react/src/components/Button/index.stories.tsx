import React from 'react';
import { Story } from '@storybook/react-vite';
import { Button, ButtonProps, IconButton, IconButtonProps } from '.';
import { IconOptions } from '../Icon';

export default {
	title: 'Button',
	component: Button,
	subcomponents: { IconButton },
	argTypes: {
		variant: {
			control: {
				type: 'inline-radio',
				options: {
					None: undefined,
					Solid: 'solid',
					Outline: 'outline',
					Ghost: 'ghost',
				},
			},
		},
		icon: {
			control: {
				type: 'select',
				options: { None: undefined, ...IconOptions },
			},
		},
	},
};

const ButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

export const Solid = ButtonTemplate.bind({});
Solid.args = { variant: 'solid', children: 'Solid' };

export const Outline = ButtonTemplate.bind({});
Outline.args = { variant: 'outline', children: 'Outline' };

export const Ghost = ButtonTemplate.bind({});
Ghost.args = { variant: 'ghost', children: 'Ghost' };

export const ChangingContent: Story<Omit<ButtonProps, 'children' | 'icon'>> = (args) => {
	const [favorite, setFavorite] = React.useState(false);

	const toggleFavorite = (): void => setFavorite(!favorite);

	const buttonProps: Pick<ButtonProps, 'children' | 'icon'> = React.useMemo(() => {
		if (favorite) return { children: 'Unfavorite', icon: 'heart' };
		return { children: 'Favorite', icon: 'heart-outline' };
	}, [favorite]);

	return <Button onClick={toggleFavorite} {...buttonProps} {...args} />;
};
ChangingContent.args = { variant: 'solid' };

const IconButtonTemplate: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const IconButtonStory = IconButtonTemplate.bind({});
IconButtonStory.args = { icon: 'close', children: 'Close' };
IconButtonStory.storyName = 'Icon Button (close)';

export const CustomIcon = IconButtonTemplate.bind({});
CustomIcon.args = {
	children: 'Light',
	icon: {
		d: 'M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z',
		source: 'https://material.io/resources/icons/?icon=wb_sunny&style=baseline',
	},
	variant: 'solid',
};
CustomIcon.storyName = 'Icon Button (custom)';
