import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, ButtonProps } from '.';
import { IconOptions } from '../Icon';

const meta = {
	title: 'Components/Button',
	component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Solid = {
	args: { variant: 'solid', children: 'Solid' },
} satisfies Story;

export const Outline = {
	args: { variant: 'outline', children: 'Outline' },
} satisfies Story;

export const Ghost = {
	args: { variant: 'ghost', children: 'Ghost' },
} satisfies Story;

export const ChangingContent = {
	render: (args) => {
		const [favorite, setFavorite] = React.useState(false);

		const toggleFavorite = (): void => setFavorite(!favorite);

		const buttonProps: Pick<ButtonProps, 'children' | 'icon'> = React.useMemo(() => {
			if (favorite) return { children: 'Unfavorite', icon: 'heart' };
			return { children: 'Favorite', icon: 'heart-outline' };
		}, [favorite]);

		return <Button onClick={toggleFavorite} {...buttonProps} {...args} />;
	},
	args: { variant: 'solid' },
} satisfies Story;
