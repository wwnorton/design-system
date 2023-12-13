import React from 'react';
import { Story } from '@storybook/react';
import { Disclosure, DisclosureProps } from '.';

export default {
	title: 'Disclosure',
	component: Disclosure,
	argTypes: {
		panel: {
			control: { type: 'boolean' },
		},
		isOpen: {
			control: { type: 'boolean' },
		},
	},
};

const defaultContents = [
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae',
	'velit, quibusdam culpa, consequuntur quos voluptate esse explicabo ipsa',
	'perspiciatis illo molestias dolorem atque praesentium modi saepe hic',
	'suscipit, deserunt debitis.',
].toString();

const defaultArgs = {
	panel: false,
	isOpen: false,
	summary: 'More information',
};

const DisclosureTemplate: Story<DisclosureProps> = (args) => (
	<Disclosure {...args}>
		<p>{ defaultContents }</p>
	</Disclosure>
);

export const Default: Story<DisclosureProps> = DisclosureTemplate.bind({});
Default.args = defaultArgs;

export const Panel: Story<DisclosureProps> = DisclosureTemplate.bind({});
Panel.args = {
	...defaultArgs,
	panel: true,
};

export const Controlled: Story<DisclosureProps> = (args) => {
	const summaryText = React.useRef('Random poem');
	const [contents, setContents] = React.useState<React.ReactNode>();
	const [summary, setSummary] = React.useState<string>(summaryText.current);

	// load a random poem
	const getContents = async (): Promise<void> => {
		setSummary(`${summaryText.current} (retrieving...)`);
		const [{ title, author, lines }] = await fetch('https://poetrydb.org/random/1/title,author,lines')
			.then((r) => r.json());
		setContents((
			<>
				<h2>{ title }</h2>
				<pre>{ lines.join('\n') }</pre>
				<div>
					&mdash;
					{' '}
					{ author }
				</div>
			</>
		));
		setSummary(summaryText.current);
	};

	return (
		<Disclosure
			{...args}
			panel
			summary={summary}
			onOpenStart={getContents}
			onCloseEnd={(): void => setContents(undefined)}
		>
			{ contents }
		</Disclosure>
	);
};
