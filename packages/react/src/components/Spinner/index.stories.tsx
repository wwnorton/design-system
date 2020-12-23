import React from 'react';
import {
	withKnobs,
	text,
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
enum variantOptions{
	determinate='determinate',
	indeterminate='indeterminate',
	static='static'
}
const variants = Object.keys(variantOptions);
export const Default: React.FunctionComponent = () => {
	const showVariant = select('variant', variants, variantOptions.indeterminate);
	const showValue = showVariant !== variantOptions.indeterminate ? number('value', 50) : null;

	return (
		<Spinner
			color={text('color', 'red')}
			thickness={number('thickness', 3)}
			size={number('size', 40)}
			variant={showVariant}
			value={showValue}
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
			labelPlacement={select('labelPlacement', PlacementOptions, PlacementOptions.left)}
		/>
	</>
);

export const Controlled: React.FunctionComponent = () => {
	const [isOpen, setOpen] = React.useState(false);
	const toggle = (): void => setOpen(!isOpen);
	return (
		<div style={{ textAlign: 'center' }}>
			{isOpen ? <Spinner />
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
			<Spinner color="base" label="loading..." labelPlacement="left" size={24} />
		</Button>
	</div>
);
