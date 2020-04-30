import React from 'react';
import {
	withKnobs,
	number,
	select,
	boolean,
} from '@storybook/addon-knobs';
import { placements } from '@popperjs/core/lib/enums';
import './index.stories.scss';
import Tooltip from '.';
import Button from '../Button';

export default {
	title: 'Tooltip',
	component: Tooltip,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => {
	const buttonRef = React.useRef();
	return (
		<div className="tooltip__story">
			<Button variant="solid" buttonRef={buttonRef}>Button Text</Button>
			<Tooltip
				content="Tooltip Text"
				reference={buttonRef}
				placement={select('Placement', placements, 'top')}
				modifiers={[
					{
						name: 'offset',
						options: {
							offset: [
								number('Offset X', 0),
								number('Offset Y', 8),
							],
						},
					},
				]}
			/>
		</div>
	);
};

export const ToggleOpen: React.FunctionComponent = () => {
	const buttonRef = React.useRef();
	return (
		<div className="tooltip__story">
			<Button variant="solid" buttonRef={buttonRef}>Button Text</Button>
			<Tooltip
				content="Tooltip Text"
				reference={buttonRef}
				isOpen={boolean('Open', false)}
			/>
		</div>
	);
};
