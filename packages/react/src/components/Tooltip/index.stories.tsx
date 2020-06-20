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
import { BasePopper } from '../BasePopper';
import { Button } from '../Button';

export default {
	title: 'Tooltip',
	component: Tooltip,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => (
	<div className="tooltip__story">
		<Tooltip isOpen>
			Tooltips require a
			{' '}
			<code>reference</code>
			{' '}
			in order to render their arrow.
		</Tooltip>
	</div>
);

export const CustomTriggers: React.FunctionComponent = () => {
	const [ref, setRef] = React.useState<HTMLSpanElement | null>();
	return (
		<div className="tooltip__story">
			<p>
				<span role="button" tabIndex={0} ref={setRef}>Lorem ipsum</span>
				{' '}
				dolor sit amet consectetur adipisicing elit.
			</p>
			<Tooltip
				reference={ref}
				placement={select('Placement', placements, 'top')}
				trigger='click pointerenter'
			>
				Lorem ipsum is a placeholder text commonly used to demonstrate
				the visual form of a document or a typeface without relying on meaningful content.
			</Tooltip>
		</div>
	);
};

export const Controlled: React.FunctionComponent = () => {
	const [ref, setRef] = React.useState<HTMLButtonElement | null>();
	const [isOpen, setOpen] = React.useState(false);
	const toggle = (): void => setOpen(!isOpen);

	return (
		<div className="tooltip__story">
			<Button variant="solid" ref={setRef} onClick={toggle}>Show tooltip</Button>
			<Tooltip
				reference={ref}
				placement={select('Placement', placements, 'top')}
				trigger='manual'
				isOpen={isOpen}
			>
				This tooltip is triggered manually by a higher-state
				{' '}
				<code>isOpen</code>
				{' '}
				value.
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
