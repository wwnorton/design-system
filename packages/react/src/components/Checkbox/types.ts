import { ChoiceProps, ChoiceFieldProps } from '../ChoiceField';

export type CheckboxProps = Omit<ChoiceProps, 'type'>;

export type CheckboxGroupProps = Omit<ChoiceFieldProps, 'multiple'>;
