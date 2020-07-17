import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	text,
	boolean,
} from '@storybook/addon-knobs';
import { Disclosure } from '.';

export default {
	title: 'Disclosure',
	component: Disclosure,
	decorators: [withKnobs],
};

const defaultContents = [
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae',
	'velit, quibusdam culpa, consequuntur quos voluptate esse explicabo ipsa',
	'perspiciatis illo molestias dolorem atque praesentium modi saepe hic',
	'suscipit, deserunt debitis.',
].toString();

const { defaultProps } = Disclosure;

export const Default: React.FunctionComponent = () => (
	<Disclosure
		summary={text('Summary', 'More information')}
		animate={boolean('Animate', defaultProps.animate)}
		onToggle={action('onToggle')}
		onOpenStart={action('onOpenStart')}
		onOpenCancel={action('onOpenCancel')}
		onOpenEnd={action('onOpenEnd')}
		onCloseStart={action('onCloseStart')}
		onCloseCancel={action('onCloseCancel')}
		onCloseEnd={action('onCloseEnd')}
		open={boolean('Open', false)}
	>
		<p>{text('Contents', defaultContents)}</p>
	</Disclosure>
);

export const Panel: React.FunctionComponent = () => (
	<Disclosure
		summary={text('Summary', 'More information')}
		variant="panel"
		animate={boolean('Animate', defaultProps.animate)}
		onToggle={action('onToggle')}
		onOpenStart={action('onOpenStart')}
		onOpenCancel={action('onOpenCancel')}
		onOpenEnd={action('onOpenEnd')}
		onCloseStart={action('onCloseStart')}
		onCloseCancel={action('onCloseCancel')}
		onCloseEnd={action('onCloseEnd')}
		open={boolean('Open', false)}
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
			summary={summary}
			variant="panel"
			onOpenStart={getContents}
			onCloseEnd={(): void => setContents(undefined)}
		>
			{ contents }
		</Disclosure>
	);
};
