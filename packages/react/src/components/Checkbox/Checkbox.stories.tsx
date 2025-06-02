import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Checkbox, CheckboxGroup } from '.';
import { Button } from '../Button';
import { useSelect, useValidation } from '../../utilities';
import { Choices } from '../ChoiceField';

const meta = {
	title: 'Components/Checkbox',
	component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default = {
	args: {
		children: 'Checkbox',
		description: 'Additional information about this checkbox.',
		disabled: false,
		required: false,
		requiredIndicator: false,
		optionalIndicator: false,
		indeterminate: false,
	},
} satisfies Story;

export const Controlled = {
	render: (args) => {
		const [checked, setChecked] = React.useState(false);
		const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
			const isChecked = e.currentTarget.checked;
			window.setTimeout(() => setChecked(isChecked), 1000);
		};
		return <Checkbox checked={checked} onChange={changeHandler} {...args} />;
	},
	args: {
		children: 'Checkbox',
		description:
			'This checkbox waits a second before updating to demonstrate that its state is controlled.',
	},
} satisfies Story;

export const Indeterminate = {
	args: {
		children: 'Checkbox',
		description: 'This checkbox starts out in the indeterminate/mixed state.',
		indeterminate: true,
	},
} satisfies Story;

export const WithThumbnail = {
	args: {
		children: 'Checkbox',
		description: (
			<>
				This checkbox includes a clickable thumbnail from{' '}
				<a href="https://picsum.photos" target="_blank" rel="noopener noreferrer">
					https://picsum.photos
				</a>
			</>
		),
		thumbnail: (
			<img
				src="https://fastly.picsum.photos/id/668/64/64.jpg?hmac=ACwqds7Fuhd3qo-bdenqH9hULTzUVtJyNMJaRp_fJAo"
				alt=""
			/>
		),
	},
} satisfies Story;

export const SingleCheckboxRequiredForm = {
	render: (args) => {
		const [errors, setErrors] = React.useState<string[]>();
		const validate = useValidation();

		const invalidHandler = (e: React.FormEvent<HTMLFormElement>): void => {
			setErrors(validate(e.target as HTMLInputElement));
		};

		return (
			<form
				className="form"
				onSubmit={(e): void => {
					e.preventDefault();
				}}
				onInvalid={invalidHandler}
			>
				<div className="field">
					<Checkbox
						{...args}
						description="I have read the terms and conditions."
						errors={errors}
						required
					>
						Agree
					</Checkbox>
				</div>
				<Button variant="solid" type="submit">
					Submit
				</Button>
			</form>
		);
	},
} satisfies Story;

type GroupStory = StoryObj<typeof CheckboxGroup>;

const CheckboxGroupTemplate = {
	render: (args) => (
		<CheckboxGroup {...args}>
			<Checkbox>Apple</Checkbox>
			<Checkbox>Banana</Checkbox>
			<Checkbox>Kiwi</Checkbox>
			<Checkbox>Orange</Checkbox>
		</CheckboxGroup>
	),
} satisfies GroupStory;

export const GroupOfCheckboxes = {
	...CheckboxGroupTemplate,
	args: {
		label: 'Choose your favorite fruits!',
		name: 'fruit',
	},
} satisfies GroupStory;

const fruits = [
	{ value: 'apple', children: 'Apple' },
	{ value: 'banana', children: 'Banana' },
	{ value: 'kiwi', children: 'Kiwi' },
	{ value: 'orange', children: 'Orange' },
];

export const ControlledGroup = {
	...CheckboxGroupTemplate,
	render: (args) => {
		const { selected, formChangeHandler } = useSelect(true);

		React.useEffect(() => action('selection change')(selected), [selected]);

		return (
			<CheckboxGroup {...args} label="Choose your favorite fruits" onChange={formChangeHandler}>
				<Choices choices={fruits} selected={selected} name="fruit" />
				{/* Alternatively, choices could be mapped manually */}
				{/* {
					fruits.map(({ value, ...props }) => (
						<Checkbox
							checked={selected.includes(value)}
							value={value}
							name="fruit"
							key={value}
							{...props}
						/>
					))
				} */}
			</CheckboxGroup>
		);
	},
} satisfies GroupStory;
