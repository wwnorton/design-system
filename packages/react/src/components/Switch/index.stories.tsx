import React from 'react';
import { Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Switch, SwitchProps } from '.';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';

export default {
	title: 'Switch',
	component: Switch,
} as Meta<SwitchProps>;

const SwitchTemplate = (args: SwitchProps) => <Switch {...args} />;

export const Default = SwitchTemplate.bind({});
Default.args = {
	checked: undefined,
	label: 'Default switch',
	description: 'Toggle on or off',
	onToggle: action('onToggle'),
	displayDefault: true,
};

export const CustomContent = ({ checked: checkedProp, onClick, ...args }: SwitchProps) => {
	const [checked, setChecked] = React.useState(checkedProp);

	return (
		<Switch checked={checked} onClick={(): void => setChecked(!checked)} {...args}>
			<Icon variant={checked ? 'check' : 'close'} />
		</Switch>
	);
};
CustomContent.args = {
	label: 'Switch with custom content',
	description: 'Toggle on or off',
	onToggle: action('onToggle'),
	displayDefault: true,
};

export const Asynchronous = ({ checked: checkedProp, onClick, ...args }: SwitchProps) => {
	const [checked, setChecked] = React.useState(checkedProp);
	const [loading, setLoading] = React.useState(false);

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

	return (
		<Switch
			checked={checked}
			onToggle={action('onToggle')}
			onClick={delayedToggle}
			disabled={loading}
			{...args}
		>
			{loading && <Spinner size="1.25em" label="Thinking..." hideLabel />}
		</Switch>
	);
};
Asynchronous.args = {
	label: 'Asynchronous action',
	description: 'Toggle something on and off with a delay',
};
