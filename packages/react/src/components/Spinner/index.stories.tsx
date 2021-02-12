import React from 'react';
import {
	withKnobs,
	text,
	boolean,
	number,
	select,
} from '@storybook/addon-knobs';
import { Spinner } from '.';

import { Button } from '../Button';

export default {
	title: 'Spinner',
	component: Spinner,
	decorators: [withKnobs],
	parameters: {
		layout: 'centered',
	},
};
enum sizeOptions{
	small='small',
	large='large',
	medium='medium'
}
const sizes = Object.keys(sizeOptions);
export const Default: React.FunctionComponent = () => {
	const showDeterminate = boolean('determinate', false);
	const showProgress = showDeterminate === true ? number('progress', 50) : 0;
	return (
		<Spinner
			color={text('color', 'red')}
			size={select('size', sizes, sizeOptions.large)}
			determinate={showDeterminate}
			progress={showProgress}
		/>
	);
};
enum PlacementOptions{
	left='left',
	right='right',
	top='top',
	bottom='bottom'
}
export const WithLabel: React.FunctionComponent = () => (
	<>
		<Spinner
			label={text('label', 'loading images...')}
			labelPlacement={select<PlacementOptions>('labelPlacement', PlacementOptions, PlacementOptions.left)}
		/>
	</>
);

export const Controlled: React.FunctionComponent = () => {
	const [isOpen, setOpen] = React.useState(false);
	const toggle = (): void => setOpen(!isOpen);
	return (
		<div style={{ textAlign: 'center' }}>
			{isOpen ? <Spinner labelPlacement="bottom" />
				: null}
			<br />
			<Button variant="solid" onClick={toggle}>
				{' '}
				{isOpen ? 'Stop loading' : 'Loading'}
			</Button>
		</div>
	);
};
export const withButton: React.FunctionComponent = () => (
	<div>
		<Button variant="solid">
			<Spinner color="base" label="loading..." labelPlacement="left" />
		</Button>
	</div>
);
