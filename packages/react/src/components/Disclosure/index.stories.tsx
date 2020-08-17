import React from 'react';
import {
	withKnobs,
	text,
	boolean,
	select,
} from '@storybook/addon-knobs';
import { Story } from '@storybook/react/types-6-0';
import { Disclosure } from '.';
import { IconOptions, IconVariant } from '../Icon';

export default {
	title: 'Disclosure',
	component: Disclosure,
	decorators: [
		withKnobs,
		(Comp: Story): JSX.Element => <div style={{ maxWidth: '30rem' }}><Comp /></div>,
	],
};

const defaultContents = [
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae',
	'velit, quibusdam culpa, consequuntur quos voluptate esse explicabo ipsa',
	'perspiciatis illo molestias dolorem atque praesentium modi saepe hic',
	'suscipit, deserunt debitis.',
].toString();

// const DisclosureTemplate: Story<DisclosureProps> = (args) => <Disclosure {...args} />;

// export const Default = DisclosureTemplate.bind({});
// Default.args = { summary: 'More information', children: defaultContents };

export const Default: React.FunctionComponent = () => (
	<Disclosure
		panel={boolean('Panel', false)}
		summary={text('Summary', 'More information')}
		isOpen={boolean('Open', false)}
		reducedMotion={boolean('Reduced motion', false)}
	>
		<p>{text('Contents', defaultContents)}</p>
	</Disclosure>
);

export const CustomMarker: React.FunctionComponent = () => (
	<Disclosure
		panel={boolean('Panel', false)}
		summary={text('Summary', 'More information')}
		isOpen={boolean('Open', false)}
		marker={select<IconVariant>('Marker', IconOptions, 'plus')}
		markerPosition={
			select<'left' | 'right'>('Marker position', { Left: 'left', Right: 'right' }, 'left')
		}
	>
		<p>{text('Contents', defaultContents)}</p>
	</Disclosure>
);

export const Controlled: React.FunctionComponent = () => {
	const { current: summaryText } = React.useRef('Random poem');
	const [contents, setContents] = React.useState<React.ReactNode>();
	const [summary, setSummary] = React.useState<string>(summaryText);

	// load a random poem
	const getContents = async (): Promise<void> => {
		setSummary(`${summaryText} (loading...)`);
		const [{ content, poet, title }] = await fetch('https://www.poemist.com/api/v1/randompoems')
			.then((r) => r.json());
		setContents((
			<>
				<h2>{ title }</h2>
				<pre>{ content }</pre>
				<div>
					&mdash;
					{' '}
					{ poet.name }
				</div>
			</>
		));
		setSummary(summaryText);
	};

	return (
		<Disclosure
			panel
			summary={summary}
			onOpenStart={getContents}
			onCloseEnd={(): void => setContents(undefined)}
		>
			{ contents }
		</Disclosure>
	);
};
