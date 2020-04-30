import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import './index.stories.scss';
import Switch from '.';
import Icon from '../Icon';

export default {
	title: 'Switch',
	component: Switch,
	decorators: [withKnobs],
};

const { defaultProps } = Switch;

export const Default: React.FunctionComponent = () => (
	<Switch
		onToggle={action('onToggle')}
		hideState={boolean('Hide state', defaultProps.hideState)}
		on={text('On state', defaultProps.on)}
		off={text('Off state', defaultProps.off)}
		disabled={boolean('Disabled', false)}
	>
		Switch
	</Switch>
);

export const InitiallyOn: React.FunctionComponent = () => (
	<Switch
		onToggle={action('onToggle')}
		disabled={boolean('Disabled', false)}
		checked
	>
		Switch
	</Switch>
);

export const IconState: React.FunctionComponent = () => (
	<Switch
		onToggle={action('onToggle')}
		on={<Icon variant="check" />}
		off={<Icon variant="close" />}
		disabled={boolean('Disabled', false)}
	>
		Switch
	</Switch>
);

export const AsynchronousToggle: React.FunctionComponent = () => {
	const [checked, setChecked] = React.useState(false);
	const [content, setContent] = React.useState('Switch');
	const toggle = (): void => {
		setContent(`${content} (updating...)`);
		setTimeout(() => {
			setChecked(!checked);
			setContent('Switch');
		}, 1000);
	};
	return (
		<Switch
			checked={checked}
			onClick={toggle}
			onToggle={action('onToggle')}
			hideState={boolean('Hide state', defaultProps.hideState)}
			on={text('On state', defaultProps.on)}
			off={text('Off state', defaultProps.off)}
			disabled={boolean('Disabled', false)}
		>
			{ content }
		</Switch>
	);
};
