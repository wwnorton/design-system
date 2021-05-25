import React from 'react';
import {
	withKnobs,
	select,
	text,
} from '@storybook/addon-knobs';
import { Badge } from '.';
import { IconOptions } from '../Icon';
import { SystemColorOptions } from '../../utilities/color';
import { BasePopper } from '../BasePopper';
import { Button } from '../..';

export default {
	title: 'Badge',
	component: Badge,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => (
	<>
		<Badge
			variant="pill"
		>
			11
		</Badge>
		<Badge color="red" variant="dot" />
	</>
);

export const WithIcon: React.FunctionComponent = () => (
	<>
		<Badge
			variant="pill"
			icon={select('Icon', { None: undefined, ...IconOptions }, 'account')}
			color={select('Color', { None: undefined, ...SystemColorOptions }, 'blue')}
		>
			{text('Title', '11')}
		</Badge>

		<Badge
			variant="dot"
			icon={select('Icon', { None: undefined, ...IconOptions }, null)}
			color={select('Color', { None: undefined, ...SystemColorOptions }, undefined)}
		/>
	</>
);

export const WithPopper: React.FunctionComponent = () => {
	const badgeVariant = select('Show variant', { None: undefined, Pill: 'pill', Dot: 'dot' }, 'pill');
	const [ref, setRef] = React.useState<HTMLElement | null>();
	const modifiers = undefined;
	const offsetMod = React.useMemo(() => {
		const offsets = badgeVariant === 'pill' ? [19, -10] : [10, -10];
		return {
			name: 'offset',
			options: {
				offset: offsets,
			},
		};
	}, [badgeVariant]);

	return (
		<>
			<br />
			<br />
			<Button variant="outline" ref={setRef}>
				Cart
			</Button>
			<BasePopper
				role="dialog"
				aria-modal="false"
				placement="top-end"
				modifiers={[...(modifiers || []), offsetMod]}
				isOpen
				reference={ref}
			>
				<Badge
					variant={badgeVariant}
					icon={select('Icon', { None: undefined, ...IconOptions }, null)}
					color={select('Color', { None: undefined, ...SystemColorOptions }, 'red')}
				>
					{text('Title', '1')}
				</Badge>
			</BasePopper>
		</>
	);
};
