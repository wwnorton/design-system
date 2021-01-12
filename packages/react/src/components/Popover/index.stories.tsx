import React from 'react';
import {
	withKnobs,
	select,
	boolean,
	text,
} from '@storybook/addon-knobs';
import { placements } from '@popperjs/core/lib/enums';
import { Popover } from '.';
import { Button } from '../Button';
import { TextField } from '../TextField';

export default {
	title: 'Popover',
	component: Popover,
	decorators: [withKnobs],
	parameters: {
		layout: 'centered',
	},
};

const { defaultProps } = Popover;
export const Default: React.FunctionComponent = () => (
	<Popover
		title={text('Title', 'Popover title')}
		hideTitle={boolean('Hide title', defaultProps.hideTitle)}
		hideCloseButton={boolean('Hide close button', defaultProps.hideCloseButton)}
		placement={select('Placement', placements, 'bottom')}
		trigger='manual'
		isOpen
	>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco
	</Popover>
);

export const WithActionBar: React.FunctionComponent = () => {
	const [ref, setRef] = React.useState<HTMLButtonElement | null>();
	const [question, setQuestion] = React.useState('');
	const [questionRef, setQuestionRef] = React.useState<HTMLInputElement | null>(null);
	const [isOpen, setOpen] = React.useState(false);
	const toggle = (): void => setOpen(!isOpen);
	const close = (): void => {
		setOpen(false);
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { target } = e;
		if (questionRef) {
			setQuestion(target.value);
		}
	};
	return (
		<>
			<Button
				variant="solid"
				ref={setRef}
				onClick={toggle}
			>
				Show popover
			</Button>
			<Popover
				title={text('Title', 'Title')}
				hideTitle={boolean('Hide title', defaultProps.hideTitle)}
				hideCloseButton={boolean('Hide close button', defaultProps.hideCloseButton)}
				reference={ref}
				placement={select('Placement', placements, 'top')}
				trigger='manual'
				isOpen={isOpen}
				onRequestClose={close}
				actions={boolean('Action bar', true) ? (
					<>
						<Button variant="solid" type="submit" onClick={toggle}>Close me</Button>
					</>
				) : undefined}
			>
				Lorem ipsum dolor sit amet consectetur,
				adipisicing elit. Id cum reiciendis sed ab voluptas
				velit quibusdam expedita sapiente nemo?
				Modi accusamus minus distinctio error non!
				Provident quasi officia pariatur fugit
				<br />
				<br />
				<TextField
					required
					value={question}
					ref={setQuestionRef}
					onChange={handleChange}
				>
					Question?
				</TextField>
			</Popover>
		</>
	);
};

export const Controlled: React.FunctionComponent = () => {
	const [ref, setRef] = React.useState<HTMLButtonElement | null>();
	const [isOpen, setOpen] = React.useState(false);
	const toggle = (): void => setOpen(!isOpen);
	const close = (): void => {
		setOpen(false);
	};
	return (
		<>
			<Button
				variant="solid"
				ref={setRef}
				onClick={toggle}
			>
				Show popover
			</Button>
			<Popover
				title={text('Title', 'Confirmation?')}
				hideTitle={boolean('Hide title', defaultProps.hideTitle)}
				hideCloseButton={boolean('Hide close button', defaultProps.hideCloseButton)}
				reference={ref}
				placement={select('Placement', placements, 'top')}
				trigger='mouseenter'
				isOpen={isOpen}
				onRequestClose={close}
				actions={boolean('Action bar', true) ? (
					<>
						<Button variant="outline" onClick={toggle}>No</Button>
						<Button variant="solid" onClick={toggle}>Yes</Button>
					</>
				) : undefined}
			>
				Are you sure you want to close me !!
			</Popover>
		</>
	);
};
