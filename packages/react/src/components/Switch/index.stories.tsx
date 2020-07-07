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
	<div className="tooltip__story">
		<Switch
			label={text('Label', 'Label')}
			description={text('Description', 'Descriptive text')}
			onToggle={action('onToggle')}
			displayDefault={boolean('Default text', true)}
			disabled={boolean('Disabled', false)}
			tipped={boolean('Label with tooltip', false)}
		/>
	</div>
);

export const InitiallyOn: React.FunctionComponent = () => (
	<div className="tooltip__story">
		<Switch
			label={text('Label', 'Label')}
			description={text('Description', 'Descriptive text')}
			onToggle={action('onToggle')}
			disabled={boolean('Disabled', false)}
			tipped={boolean('Label with tooltip', false)}
			checked
		/>
	</div>
);

export const IconState: React.FunctionComponent = () => {
	const [checked, setChecked] = React.useState(false);

	return (
		<div className="tooltip__story">
			<Switch
				label={text('Label', 'Label')}
				description={text('Description', 'Descriptive text')}
				checked={checked}
				onToggle={action('onToggle')}
				onClick={(): void => setChecked(!checked)}
				displayDefault={boolean('Default text', true)}
				disabled={boolean('Disabled', false)}
				tipped={boolean('Label with tooltip', false)}
				style={{ '--nds-switch-font-size': '1rem' }}
			>
				<Icon variant={(checked) ? 'check' : 'close'} height="1em" />
			</Switch>
		</div>
	);
};

export const FullyControlled: React.FunctionComponent = () => {
	const [checked, setChecked] = React.useState(false);
	const [desc, setDesc] = React.useState('');
	const [content, setContent] = React.useState('Nope');
	const toggle = (): void => {
		const initialDesc = desc;
		setDesc(`${desc} (updating...)`);
		setTimeout(() => {
			setChecked(!checked);
			setDesc(initialDesc);
		}, 1000);
	};
	React.useEffect(() => {
		setContent((checked) ? 'Yep' : 'Nope');
	}, [checked]);
	return (
		<Switch
			label={text('Label', 'Label')}
			description={desc || text('Description', 'Descriptive text')}
			checked={checked}
			onToggle={action('onToggle')}
			onClick={toggle}
			displayDefault={boolean('Default text', true)}
			disabled={boolean('Disabled', false)}
			tipped={boolean('Label with tooltip', false)}
		>
			{ content }
		</Switch>
	);
};
