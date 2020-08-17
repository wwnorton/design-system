import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { Switch } from '.';
import { Icon } from '../Icon';

export default {
	title: 'Switch',
	component: Switch,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => (
	<Switch
		label={text('Label', 'Label')}
		description={text('Description', 'Descriptive text')}
		onToggle={action('onToggle')}
		displayDefault={boolean('Default text', true)}
		disabled={boolean('Disabled', false)}
		tipped={boolean('Label with tooltip', false)}
	/>
);

export const InitiallyOn: React.FunctionComponent = () => (
	<Switch
		label={text('Label', 'Label')}
		description={text('Description', 'Descriptive text')}
		onToggle={action('onToggle')}
		disabled={boolean('Disabled', false)}
		tipped={boolean('Label with tooltip', false)}
		checked
	/>
);

export const CustomContent: React.FunctionComponent = () => {
	const [checked, setChecked] = React.useState(false);

	return (
		<Switch
			label={text('Label', 'Label')}
			description={text('Description', 'Descriptive text')}
			checked={checked}
			onToggle={action('onToggle')}
			onClick={(): void => setChecked(!checked)}
			disabled={boolean('Disabled', false)}
			tipped={boolean('Label with tooltip', false)}
		>
			<Icon variant={(checked) ? 'check' : 'close'} />
		</Switch>
	);
};

export const FullyControlled: React.FunctionComponent = () => {
	const [checked, setChecked] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [content, setContent] = React.useState('Nope');

	const toggle = (): void => {
		setChecked(!checked);
		setLoading(false);
	};

	// do something async
	const delayedToggle = (): void => {
		if (!loading) {
			setLoading(true);
			window.setTimeout(toggle, 1000);
		}
	};

	React.useEffect(() => setContent((checked) ? 'Yep' : 'Nope'), [checked]);

	return (
		<>
			<Switch
				label={text('Label', 'Asynchronous action')}
				description={text('Description', 'Do something with a delay')}
				checked={checked}
				onToggle={action('onToggle')}
				onClick={delayedToggle}
				disabled={loading}
				tipped={boolean('Label with tooltip', false)}
			>
				{ content }
			</Switch>
			{ loading && <div>Thinking...</div> }
		</>
	);
};
