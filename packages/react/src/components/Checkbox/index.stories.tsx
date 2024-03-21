import React from 'react';
import { action } from '@storybook/addon-actions';
import { Checkbox, CheckboxGroup, CheckboxProps, CheckboxGroupProps } from '.';
import { Button } from '../Button';
import { useSelect, useValidation } from '../../utilities';
import { Choices } from '../ChoiceField';

export default {
	title: 'Checkbox',
	component: Checkbox,
};

const CheckboxTemplate = (args: CheckboxProps) => <Checkbox {...args} />;

export const Default = CheckboxTemplate.bind({});
Default.args = {
	children: 'Checkbox',
	description: 'Additional information about this checkbox.',
	disabled: false,
	required: false,
	requiredIndicator: false,
	optionalIndicator: false,
	indeterminate: false,
};

export const Controlled = (args: CheckboxProps) => {
	const [checked, setChecked] = React.useState(false);
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const isChecked = e.currentTarget.checked;
		window.setTimeout(() => setChecked(isChecked), 1000);
	};
	return <Checkbox checked={checked} onChange={changeHandler} {...args} />;
};
Controlled.args = {
	children: 'Checkbox',
	description:
		'This checkbox waits a second before updating to demonstrate that its state is controlled.',
};

export const Indeterminate = CheckboxTemplate.bind({});
Indeterminate.args = {
	children: 'Checkbox',
	description: 'This checkbox starts out in the indeterminate/mixed state.',
	indeterminate: true,
};

export const WithThumbnail = CheckboxTemplate.bind({});
WithThumbnail.args = {
	children: 'Checkbox',
	description: (
		<>
			This checkbox includes a clickable thumbnail from{' '}
			<a href="https://picsum.photos" target="_blank" rel="noopener noreferrer">
				https://picsum.photos
			</a>
		</>
	),
	thumbnail: <img src="https://picsum.photos/64" alt="" />,
};

export const SingleCheckboxRequiredForm = (args: CheckboxProps) => {
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
};

const CheckboxGroupTemplate = (args: CheckboxGroupProps) => (
	<CheckboxGroup {...args}>
		<Checkbox>Apple</Checkbox>
		<Checkbox>Banana</Checkbox>
		<Checkbox>Kiwi</Checkbox>
		<Checkbox>Orange</Checkbox>
	</CheckboxGroup>
);

export const GroupOfCheckboxes = CheckboxGroupTemplate.bind({});
GroupOfCheckboxes.args = {
	label: 'Choose your favorite fruits!',
	name: 'fruit',
};

const fruits = [
	{ value: 'apple', children: 'Apple' },
	{ value: 'banana', children: 'Banana' },
	{ value: 'kiwi', children: 'Kiwi' },
	{ value: 'orange', children: 'Orange' },
];

export const ControlledGroup = (args: CheckboxGroupProps) => {
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
};
