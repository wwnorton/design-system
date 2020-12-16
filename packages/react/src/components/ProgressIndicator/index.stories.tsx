import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { ProgressIndicator } from '.';
import { Button } from '../Button';

export default {
	title: 'ProgressIndicator',
	component: ProgressIndicator,
	decorators: [withKnobs],
	parameters: {
		layout: 'centered',
	},
};

export const Default: React.FunctionComponent = () => (
	<ProgressIndicator />
);

export const CustomProperties: React.FunctionComponent = () => {
	const [progress, setProgress] = React.useState(10);
	React.useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
		}, 800);
		return () => { clearInterval(timer); };
	}, []);
	return (
		<>
			<div>
				<b>Color</b>
				<br />
				<br />
				<ProgressIndicator
					color="red"
				/>
			</div>
			<br />
			<div>
				<b>Thickness</b>
				<br />
				<br />
				<ProgressIndicator
					thickness={5}
				/>
			</div>
			<div>
				<b>Variant: determinate </b>
				<br />
				<br />
				<ProgressIndicator
					variant="determinate"
					progressValue={progress}
				/>
			</div>
		</>
	);
};

export const WithLabel: React.FunctionComponent = () => (
	<>
		<ProgressIndicator label="images..." />
	</>
);

export const Controlled: React.FunctionComponent = () => {
	const [ref, setRef] = React.useState<HTMLButtonElement | null>();
	const [isOpen, setOpen] = React.useState(false);
	const toggle = (): void => setOpen(!isOpen);
	return (
		<>
			{isOpen ? <ProgressIndicator ariaBusy={isOpen} />
				: null}
			<br />
			<Button variant="solid" ref={setRef} onClick={toggle}>
				{' '}
				{isOpen ? 'Stop loading' : 'Loading'}
			</Button>
		</>
	);
};
