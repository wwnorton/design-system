import React from 'react';
import {
	withKnobs,
	boolean,
	number,
	text,
	select,
} from '@storybook/addon-knobs';
import { Progressbar } from '.';
import { Button } from '../Button';

export default {
	title: 'Progressbar',
	component: Progressbar,
	decorators: [withKnobs],
	parameters: {
		layout: 'centered',
	},
};
enum sizeOptions{
	small='small',
	large='large',
	default=''
}
const sizes = Object.keys(sizeOptions);
export const Default: React.FunctionComponent = () => {
	const showDeterminate = boolean('determinate', true);
	const showProgress = showDeterminate === true ? number('progress', 30) : 0;
	return (
		<div style={{ maxWidth: '100%', width: '300px' }}>
			<Progressbar
				label={text('label', 'loading images...')}
				determinate={showDeterminate}
				progress={showProgress}
				size={select('size', sizes, sizeOptions.small)}
			/>
		</div>
	);
};

export const Controlled: React.FunctionComponent = () => {
	const [isOpen, setOpen] = React.useState(false);
	const toggle = (): void => setOpen(!isOpen);
	return (
		<div style={{ maxWidth: '100%', width: '300px' }}>
			{isOpen ? <Progressbar />
				: null}
			<br />
			<Button variant="solid" onClick={toggle}>
				{' '}
				{isOpen ? 'Stop loading' : 'Loading'}
			</Button>
		</div>
	);
};
