import React from 'react';
import {
	withKnobs,
	select,
	text,
	boolean,
} from '@storybook/addon-knobs';
import { Badge } from '.';
import { Icon, Popper } from '..';
import { SystemColorOptions } from '../../utilities/color';

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

export const RelativeToAnotherComponent: React.FunctionComponent = () => {
	const [ref, setRef] = React.useState<SVGSVGElement | null>();

	return (
		<>
			<Icon
				ref={setRef}
				variant="calendar"
				size="45"
				color="gray"
			/>
			<Popper
				placement="top-end"
				modifiers={[{
					name: 'offset',
					options: {
						offset: [10, -10],
					},
				}]}
				enableFlip={false}
				isOpen
				reference={ref}
			>
				<Badge
					color={select('Color', { None: undefined, ...SystemColorOptions }, 'red')}
					dot={boolean('Dot', false)}
				>
					{text('Label', '1')}
				</Badge>
			</Popper>
		</>
	);
};
