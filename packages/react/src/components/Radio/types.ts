import { ChoiceProps, ChoiceFieldProps } from '../ChoiceField';

export type RadioProps = Omit<ChoiceProps, 'type'>;

export type RadioGroupProps = Omit<ChoiceFieldProps, 'multiple'>;
