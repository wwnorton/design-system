import React from 'react';
import {
	withKnobs,
	select,
	text,
	boolean,
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
		<Badge>
			11
		</Badge>
		<Badge style={{ marginLeft: 5 }} color="red" dot />
	</>
);

export const WithIcon: React.FunctionComponent = () => (
	<>
		<Badge
			icon={select('Icon', { None: undefined, ...IconOptions }, 'account')}
			color={select('Color', { None: undefined, ...SystemColorOptions }, 'blue')}
		>
			{text('Title', '11')}
		</Badge>

		<Badge
			style={{ marginLeft: 5 }}
			icon={select('Icon', { None: undefined, ...IconOptions }, null)}
			color={select('Color', { None: undefined, ...SystemColorOptions }, undefined)}
			dot
		/>
	</>
);

export const WithPopper: React.FunctionComponent = () => {
	const dot = boolean('dot', false);
	const [ref, setRef] = React.useState<HTMLElement | null>();
	const modifiers = undefined;
	const offsetMod = React.useMemo(() => {
		const offsets = dot === false ? [19, -10] : [10, -10];
		return {
			name: 'offset',
			options: {
				offset: offsets,
			},
		};
	}, [dot]);

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
					icon={select('Icon', { None: undefined, ...IconOptions }, null)}
					color={select('Color', { None: undefined, ...SystemColorOptions }, 'red')}
					dot={dot}
				>
					{text('Title', '1')}
				</Badge>
			</BasePopper>
		</>
	);
};
