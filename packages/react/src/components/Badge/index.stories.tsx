import React from 'react';
import {
	withKnobs,
	select,
	text,
	boolean,
} from '@storybook/addon-knobs';
import { Badge } from '.';
import { Icon } from '../Icon';
import { SystemColorOptions } from '../../utilities/color';
import { BasePopper } from '../BasePopper';
import { Button } from '../..';

export default {
	title: 'Badge',
	component: Badge,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => (
	<Badge
		dot={boolean('Dot', false)}
		color={select('Color', { None: undefined, ...SystemColorOptions }, undefined)}

	>
		{text('Label', '0')}
	</Badge>
);

export const WithPopper: React.FunctionComponent = () => {
	const [ref, setRef] = React.useState<HTMLElement | null>();
	const modifiers = undefined;
	const offsetMod = React.useMemo(() => {
		const offsets = [-10, -17];
		return {
			name: 'offset',
			options: {
				offset: offsets,
			},
		};
	}, []);

	return (
		<>
			<Button ref={setRef} variant="ghost">
				<Icon
					variant="calendar"
					size="45"
					color="gray"
				/>
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
					color={select('Color', { None: undefined, ...SystemColorOptions }, 'red')}
					dot={boolean('Dot', false)}
				>
					{text('Label', '1')}
				</Badge>
			</BasePopper>
		</>
	);
};
