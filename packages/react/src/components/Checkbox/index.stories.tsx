import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	boolean,
	text,
} from '@storybook/addon-knobs';
import { Checkbox, CheckboxGroup } from '.';
import { Button } from '../Button';
import { useSelect, useValidation } from '../../utilities';
import { Choices } from '../ChoiceField';

export default {
	title: 'Checkbox',
	component: Checkbox,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => (
	<Checkbox
		description={text('Description', 'Additional information about this checkbox.')}
		disabled={boolean('Disabled', false)}
		required={boolean('Required', false)}
		requiredIndicator={boolean('Required indicator', false)}
		optionalIndicator={boolean('Optional indicator', false)}
		onValidate={action('onValidate')}
		indeterminate={boolean('Indeterminate', false)}
	>
		{ text('Label', 'Checkbox') }
	</Checkbox>
);

export const Controlled: React.FunctionComponent = () => {
	const [checked, setChecked] = React.useState(false);
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const isChecked = e.currentTarget.checked;
		window.setTimeout(() => setChecked(isChecked), 1000);
	};
	return (
		<Checkbox
			description="This checkbox waits a second before updating."
			disabled={boolean('Disabled', false)}
			required={boolean('Required', false)}
			onValidate={action('onValidate')}
			indeterminate={boolean('Indeterminate', false)}
			checked={checked}
			onChange={changeHandler}
		>
			{ text('Label', 'Checkbox') }
		</Checkbox>
	);
};

export const Indeterminate: React.FunctionComponent = () => (
	<Checkbox
		description="This checkbox starts out in the indeterminate/mixed state."
		indeterminate
		disabled={boolean('Disabled', false)}
		required={boolean('Required', false)}
	>
		{ text('Label', 'Checkbox') }
	</Checkbox>
);

export const WithThumbnail: React.FunctionComponent = () => (
	<Checkbox
		description={(
			<>
				This checkbox includes a clickable thumbnail from
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
		required={boolean('Required', false)}
		onValidate={action('onValidate')}
		thumbnail={<img src={text('Thumbnail Source', 'https://picsum.photos/64')} alt="" />}
	>
		{ text('Label', 'Checkbox') }
	</Checkbox>
);

export const SingleCheckboxRequiredForm: React.FunctionComponent = () => {
	const [errors, setErrors] = React.useState<string[]>();
	const validate = useValidation();

	const invalidHandler = (e: React.FormEvent<HTMLFormElement>): void => {
		setErrors(validate(e.target as HTMLInputElement));
	};

	return (
		<form className="form" onSubmit={(e): void => { e.preventDefault(); }} onInvalid={invalidHandler}>
			<div className="field">
				<Checkbox
					description="I have read the terms and conditions."
					errors={errors}
					required
				>
					Agree
				</Checkbox>
			</div>
			<Button variant="solid" type="submit">Submit</Button>
		</form>
	);
};

const fruits = [
	{ value: 'apple', children: 'Apple' },
	{ value: 'banana', children: 'Banana' },
	{ value: 'kiwi', children: 'Kiwi' },
	{ value: 'orange', children: 'Orange' },
];

export const Group: React.FunctionComponent = () => (
	<CheckboxGroup label="Choose your favorite fruits" name="fruit">
		<Checkbox>Apple</Checkbox>
		<Checkbox>Banana</Checkbox>
		<Checkbox>Kiwi</Checkbox>
		<Checkbox>Orange</Checkbox>
	</CheckboxGroup>
);

export const ControlledGroup: React.FunctionComponent = () => {
	const { selected, changeHandler } = useSelect({ multiple: true });

	React.useEffect(() => action('selection change')(selected), [selected]);

	return (
		<CheckboxGroup label="Choose your favorite fruits">
			{/* Choices can be mapped manually or with the <Choices> component */}
			{/* {
				fruits.map(({ value, ...props }) => (
					<Checkbox
						checked={selected.includes(value)}
						onChange={changeHandler}
						value={value}
						name="fruit"
						key={value}
						{...props}
					/>
				))
			} */}
			<Choices
				choices={fruits}
				selected={selected}
				onChange={changeHandler}
				name="fruit"
			/>
		</CheckboxGroup>
	);
};
