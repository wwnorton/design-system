import React from 'react';
import {
	withKnobs,
	select,
	text,
	boolean,
} from '@storybook/addon-knobs';
import { placements } from '@popperjs/core/lib/enums';
import { Tooltip } from '.';
import { BasePopper } from '../BasePopper';
import { Button } from '../Button';

export default {
	title: 'Tooltip',
	component: Tooltip,
	decorators: [withKnobs],
	parameters: {
		layout: 'centered',
	},
};

export const Default: React.FunctionComponent = () => (
	<Tooltip isOpen>
		Tooltips require a
		{' '}
		<code>reference</code>
		{' '}
		in order to render their arrow.
	</Tooltip>
);

export const CustomTriggers: React.FunctionComponent = () => {
	const [ref, setRef] = React.useState<HTMLSpanElement | null>();
	return (
		<>
			<p>
				<span className="glossref" role="button" tabIndex={0} ref={setRef}>Lorem ipsum</span>
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
		</>
	);
};

export const Controlled: React.FunctionComponent = () => {
	const [ref, setRef] = React.useState<HTMLButtonElement | null>();
	const [isOpen, setOpen] = React.useState(false);
	const toggle = (): void => setOpen(!isOpen);

	return (
		<>
			<Button variant="solid" ref={setRef} onClick={toggle}>Show tooltip</Button>
			<Tooltip
				reference={ref}
				placement={select('Placement', placements, 'top')}
				trigger='manual'
				isOpen={isOpen}
			>
				This tooltip is triggered manually and can only be opened/closed
				by clicking its reference button.
			</Tooltip>
		</>
	);
};

// export const Popper: React.FunctionComponent = () => {
// 	const [reference, setReference] = React.useState<HTMLButtonElement | null>();
// 	return (
// 		<>
// 			<button type="button" ref={setReference}>Reference</button>
// 			<BasePopper
// 				isOpen={boolean('Open', true)}
// 				placement={select('Placement', placements, 'auto')}
// 				reference={reference}
// 			>
// 				{text('Contents', 'Popper text')}
// 			</BasePopper>
// 		</>
// 	);
// };
