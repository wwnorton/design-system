import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	boolean,
	text,
} from '@storybook/addon-knobs';
import { Radio, RadioGroup } from '.';
import { useSelect } from '../../utilities';

export default {
	title: 'Radio',
	component: Radio,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => (
	<Radio
		description={text('Description', 'Additional information about this radio.')}
		disabled={boolean('Disabled', false)}
	>
		{ text('Label', 'Radio') }
	</Radio>
);

export const WithThumbnail: React.FunctionComponent = () => (
	<Radio
		description={(
			<>
				This radio includes a clickable thumbnail from
				{' '}
				<a
					href="https://picsum.photos"
					target="_blank"
					rel="noopener noreferrer"
				>
					https://picsum.photos
				</a>
			</>
		)}
		disabled={boolean('Disabled', false)}
		thumbnail={<img src={text('Thumbnail Source', 'https://picsum.photos/64')} alt="" />}
	>
		{ text('Label', 'Radio') }
	</Radio>
);

const fruits = [
	{ value: 'apple', children: 'Apple' },
	{ value: 'banana', children: 'Banana' },
	{ value: 'kiwi', children: 'Kiwi' },
	{ value: 'orange', children: 'Orange' },
];

export const Group: React.FunctionComponent = () => (
	<RadioGroup label="Choose your favorite fruit" name="fruit">
		<Radio>Apple</Radio>
		<Radio>Banana</Radio>
		<Radio>Kiwi</Radio>
		<Radio>Orange</Radio>
	</RadioGroup>
);

export const ControlledGroup: React.FunctionComponent = () => {
	const { selected, changeHandler } = useSelect();

	React.useEffect(() => action('selection change')(selected), [selected]);

	return (
		<RadioGroup label="Choose your favorite fruit">
			{/* Choices can be mapped manually or with the <Choices> component */}
			{
				fruits.map(({ value, ...props }) => (
					<Radio
						checked={selected.includes(value)}
						onChange={changeHandler}
						value={value}
						name="fruit"
						key={value}
						{...props}
					/>
				))
			}
			{/* <Choices
				choices={fruits}
				selected={selected}
				onChange={changeHandler}
				name="fruit"
			/> */}
		</RadioGroup>
	);
};
