import React from 'react';
import {
	withKnobs,
	select,
	text,
	boolean,
} from '@storybook/addon-knobs';
import { placements } from '@popperjs/core/lib/enums';
import './index.stories.scss';
import { Tooltip } from '.';
import { Button } from '../Button';
import { BasePopper } from '../BasePopper';
import { useTooltip } from '../../utilities';

export default {
	title: 'Tooltip',
	component: Tooltip,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => {
	const { isOpen, id, referenceProps } = useTooltip<HTMLButtonElement>({ isOpen: true });
	const [button, setButton] = React.useState<HTMLButtonElement | null>();
	return (
		<div className="tooltip__story">
			<Button variant="solid" buttonRef={setButton} {...referenceProps}>
				Button text
			</Button>
			<Tooltip
				id={id}
				isOpen={isOpen}
				reference={button}
				placement={select('Placement', placements, 'top')}
			>
				{text('Contents', 'Tooltip text')}
			</Tooltip>
		</div>
	);
};

export const Popper: React.FunctionComponent = () => {
	const [reference, setReference] = React.useState<HTMLButtonElement | null>();
	return (
		<div className="tooltip__story">
			<button type="button" ref={setReference}>Reference</button>
			<BasePopper
				isOpen={boolean('Open', true)}
				placement={select('Placement', placements, 'auto')}
				reference={reference}
			>
				{text('Contents', 'Popper text')}
			</BasePopper>
		</div>
	);
};
