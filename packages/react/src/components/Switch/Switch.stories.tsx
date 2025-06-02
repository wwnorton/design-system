import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Switch, SwitchProps } from '.';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';

const meta = {
	title: 'Components/Switch',
	component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default = {
	args: {
		checked: undefined,
		label: 'Default switch',
		description: 'Toggle on or off',
		onToggle: action('onToggle'),
		displayDefault: true,
	},
} satisfies Story;

export const CustomContent = {
	render: ({ checked: checkedProp, onClick, ...args }: SwitchProps) => {
		const [checked, setChecked] = React.useState(checkedProp);

		return (
			<Switch checked={checked} onClick={(): void => setChecked(!checked)} {...args}>
				<Icon variant={checked ? 'check' : 'close'} />
			</Switch>
		);
	},
	args: {
		label: 'Switch with custom content',
		description: 'Toggle on or off',
		onToggle: action('onToggle'),
		displayDefault: true,
	},
} satisfies Story;

export const Asynchronous = {
	render: ({ checked: checkedProp, onClick, ...args }: SwitchProps) => {
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
	},
	args: {
		label: 'Asynchronous action',
		description: 'Toggle something on and off with a delay',
	},
} satisfies Story;
