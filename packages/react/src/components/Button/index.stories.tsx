import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs, select, boolean, text,
} from '@storybook/addon-knobs';
import './index.stories.scss';
import Button, { ButtonVariant } from '.';
import { IconVariant, SVGIcon } from '../../utilities/icons';

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

const colorOptions = {
	Primary: undefined,
	Cyan: `${Button.baseName}--cyan`,
	Gray: `${Button.baseName}--gray`,
	Green: `${Button.baseName}--green`,
	Navy: `${Button.baseName}--navy`,
	Red: `${Button.baseName}--red`,
	Teal: `${Button.baseName}--teal`,
	Yellow: `${Button.baseName}--yellow`,
};

const iconOptions: Record<string, IconVariant | undefined> = {
	CaretRight: 'caret-right',
	Check: 'check',
	ChevronDown: 'chevron-down',
	Close: 'close',
	None: undefined,
};

export const Default: React.FunctionComponent = () => (
	<Button
		className={select('Color family', colorOptions, undefined)}
		onClick={action('onClick')}
		variant={select<ButtonVariant | undefined>('Variant', variantOptions, 'solid')}
		disabled={boolean('Disabled', false)}
		icon={select<IconVariant | undefined>('Icon', iconOptions, undefined)}
		iconOnly={boolean('Icon only', false)}
		iconRight={boolean('Icon on the right', false)}
	>
		{ text('Text', 'Button') }
	</Button>
);

const heartIcon: SVGIcon = {
	d: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
};

export const CustomIcon: React.FunctionComponent = () => (
	<Button
		onClick={action('onClick')}
		variant={select<ButtonVariant | undefined>('Variant', variantOptions, 'solid')}
		disabled={boolean('Disabled', false)}
		icon={heartIcon}
		iconOnly
	>
		{ text('Text', 'Favorite') }
	</Button>
);
