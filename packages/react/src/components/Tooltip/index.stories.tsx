// cspell:ignore noninteractive, Södra
import React from 'react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import { placements } from '@popperjs/core/lib/enums';
import { Tooltip } from './Tooltip';
import { Button, Callout } from '../..';

export default {
	title: 'Tooltip',
	component: Tooltip,
	decorators: [withKnobs],
	parameters: {
		layout: 'padded',
	},
};

const defaultPlacement = 'top';
const defaultDelay = 200;

const CALLOUT_WIDTH = 450;

export const Default = (): JSX.Element => (
	<Tooltip isOpen className={select('Color Scheme', { Default: undefined, Dark: 'nds-tooltip--dark', Light: 'nds-tooltip--light' }, undefined)}>
		Tooltips require a reference element in order to render their arrow.
	</Tooltip>
);

export const Labelling = (): JSX.Element => {
	const [reference, setReference] = React.useState<HTMLImageElement | null>(null);
	return (
		<>
			<Callout title="Labelling" border="bottom" style={{ maxWidth: CALLOUT_WIDTH }}>
				<p>
					By default, tooltips are used to describe their reference, meaning they
					add description to something that already has an
					{' '}
					<a href="https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/" target="_blank" rel="noopener noreferrer">accessible name</a>
					.
					But tooltips can also be used to label a reference element that does
					not have an accessible name.
					This is built into the Button and Icon components, which will
					use their contents as a labelling tooltip under certain scenarios.
				</p>
				<p>
					In this example, the tooltip is being used to label the image,
					effectively acting as alt text.
				</p>
			</Callout>
			<figure>
				{/* eslint-disable jsx-a11y/alt-text, jsx-a11y/no-noninteractive-tabindex */}
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Escalator_looped_animation.gif/800px-Escalator_looped_animation.gif"
					ref={setReference}
					width={CALLOUT_WIDTH}
					tabIndex={0}
				/>
				<figcaption>
					<small>
						Source:
						{' '}
						<a href="https://commons.wikimedia.org/wiki/File:Escalator_looped_animation.gif" target="_blank" rel="noopener noreferrer">https://commons.wikimedia.org/wiki/File:Escalator_looped_animation.gif</a>
					</small>

				</figcaption>
			</figure>
			<Tooltip
				reference={reference}
				asLabel
				placement={select('Placement', placements, defaultPlacement)}
				hideDelay={number('Hide delay', defaultDelay)}
			>
				A looped animation of two escalators at Södra station in Stockholm.
			</Tooltip>
		</>
	);
};

export const DefaultTrigger = (): JSX.Element => {
	const [reference, setReference] = React.useState<HTMLButtonElement | null>(null);
	return (
		<>
			{/* eslint-disable react/no-unescaped-entities */}
			<Callout title="Default trigger" border="bottom" style={{ maxWidth: CALLOUT_WIDTH }}>
				The default trigger is
				{' '}
				<code>"focus pointerenter"</code>
				, which ensures that the tooltip opens and closes for both keyboard
				and pointer users in a reliable way.
			</Callout>
			<Button variant="solid" ref={setReference}>
				Reference
			</Button>
			<Tooltip
				reference={reference}
				placement={select('Placement', placements, defaultPlacement)}
				hideDelay={number('Hide delay', defaultDelay)}
				showDelay={number('Show delay', 0)}
			>
				Tooltip
			</Tooltip>
		</>
	);
};

export const PointerEnterTrigger = (): JSX.Element => {
	const [reference, setReference] = React.useState<HTMLButtonElement | null>(null);

	return (
		<>
			<Callout title="Pointer enter trigger" border="bottom" style={{ maxWidth: CALLOUT_WIDTH }}>
				<p>
					The
					{' '}
					<code>"pointerenter"</code>
					{' '}
					trigger will open the tooltip on
					{' '}
					<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerenter_event" target="_blank" rel="noopener noreferrer">pointerenter</a>
					.
					This occurs whenever a pointer (mouse or touch)
					enters the bounding box of the reference.
					It will close on
					{' '}
					<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerleave_event" target="_blank" rel="noopener noreferrer">pointerleave</a>
					{' '}
					(whenever a pointer leaves the bounding box) or
					{' '}
					<kbd>Escape</kbd>
					.
				</p>
				<p>
					Note that the
					{' '}
					<code>"mouseenter"</code>
					{' '}
					event is treated as an alias for
					{' '}
					<code>"pointerenter"</code>
					.
				</p>
			</Callout>
			<Button variant="solid" ref={setReference}>
				Reference
			</Button>
			<Tooltip
				reference={reference}
				trigger="pointerenter"
				placement={select('Placement', placements, defaultPlacement)}
				hideDelay={number('Hide delay', defaultDelay)}
				showDelay={number('Show delay', 0)}
			>
				Tooltip
			</Tooltip>
		</>
	);
};

export const FocusTrigger = (): JSX.Element => {
	const [reference, setReference] = React.useState<HTMLButtonElement | null>(null);

	return (
		<>
			<Callout title="Focus trigger" border="bottom" style={{ maxWidth: CALLOUT_WIDTH }}>
				The
				{' '}
				<code>"focus"</code>
				{' '}
				trigger will open the tooltip on
				{' '}
				<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event" target="_blank" rel="noopener noreferrer">focus</a>
				{' '}
				and close it on
				{' '}
				<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event" target="_blank" rel="noopener noreferrer">blur</a>
				{' '}
				or
				{' '}
				<kbd>Escape</kbd>
				.
			</Callout>
			<Button variant="solid" ref={setReference}>
				Reference
			</Button>
			<Tooltip
				reference={reference}
				trigger="focus"
				placement={select('Placement', placements, defaultPlacement)}
			>
				Tooltip
			</Tooltip>
		</>
	);
};

export const ClickTrigger = (): JSX.Element => {
	const [reference, setReference] = React.useState<HTMLButtonElement | null>(null);

	return (
		<>
			<Callout title="Click trigger" border="bottom" style={{ maxWidth: CALLOUT_WIDTH }}>
				The
				{' '}
				<code>"click"</code>
				{' '}
				trigger will toggle on pointer
				{' '}
				<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event" target="_blank" rel="noopener noreferrer">click</a>
				{' '}
				or keyboard clicks, which are either
				{' '}
				<code>keyup</code>
				{' '}
				<kbd>Space</kbd>
				{' '}
				or
				{' '}
				<code>keydown</code>
				{' '}
				<kbd>Enter</kbd>
				{' '}
				, and will close on external click or
				{' '}
				<kbd>Escape</kbd>
				.
			</Callout>
			<Button variant="solid" ref={setReference}>
				Reference
			</Button>
			<Tooltip
				reference={reference}
				trigger="click"
				placement={select('Placement', placements, defaultPlacement)}
			>
				Tooltip
			</Tooltip>
		</>
	);
};

export const ManualTrigger = (): JSX.Element => {
	const [reference, setReference] = React.useState<HTMLButtonElement | null>(null);
	const [isOpen, setOpen] = React.useState(false);

	return (
		<>
			<Callout title="Manual trigger" border="bottom" style={{ maxWidth: CALLOUT_WIDTH }}>
				The
				{' '}
				<code>"manual"</code>
				{' '}
				allows you to fully control how the tooltip opens and closes.
				Only use this trigger if you need to control state external to the
				tooltip, but be careful to ensure that it can be opened and closed by everyone.
			</Callout>
			<Button variant="solid" ref={setReference} onClick={() => setOpen(!isOpen)}>
				Reference
			</Button>
			<Tooltip
				reference={reference}
				trigger="manual"
				isOpen={isOpen}
				placement={select('Placement', placements, defaultPlacement)}
			>
				Tooltip
			</Tooltip>
		</>
	);
};

export const CustomReference: React.FunctionComponent = () => {
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
				trigger="click pointerenter"
				placement={select('Placement', placements, 'bottom-start')}
				hideDelay={number('Hide delay', defaultDelay)}
				showDelay={number('Show delay', 0)}
			>
				Lorem ipsum is a placeholder text commonly used to demonstrate
				the visual form of a document or a typeface without relying on meaningful content.
			</Tooltip>
		</>
	);
};
