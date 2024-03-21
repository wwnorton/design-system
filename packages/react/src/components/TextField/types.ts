import React from 'react';
import { BaseInputProps } from '../BaseInput/types';
import { BaseTextAreaProps } from '../BaseTextArea/types';
import { FieldFeedbackCoreProps, FieldInfoCoreProps } from '../Field';

export type TextFieldType = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';

export interface BaseTextFieldProps extends FieldInfoCoreProps, FieldFeedbackCoreProps {
	/** Text fields can be a limited subset of `<input>` types. */
	type?: Extract<React.HTMLInputTypeAttribute, TextFieldType>;
	/** One or more addon that should be included before the `<input>`. */
	addonBefore?: React.ReactNode;
	/** One or more addon that should be included after the `<input>`. */
	addonAfter?: React.ReactNode;
	/**
	 * Feedback about the user's current input value. By default, this will
	 * contain validation errors and the counter, if `maxLength` is specified.
	 */
	feedback?: string | React.ReactElement;
	/** When the character counter should begin showing. */
	counterStart?: number;
	/**
	 * A function that takes the remaining number of characters and the maximum
	 * number of characters and returns the string or element that will be
	 * rendered in the character counter slot.
	 */
	counter?: false | (({ remaining, max }: { remaining: number; max: number }) => React.ReactNode);
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** The className for the TextField's `<input>` element. */
	inputClass?: string;
	/** The className for all of the addons (before and after). */
	addonClass?: string;
	/** The className for the wrapper that contains the `<input>` & addons. */
	groupClass?: string;
	/**
	 * The className for the TextField's feedback section, which contains the
	 * error text and character count.
	 */
	feedbackClass?: string;
	/** The className for the TextField's character counter element. */
	counterClass?: string;
	/**
	 * A className that will be applied to the base element when the `<input>`
	 * is invalid.
	 */
	invalidClass?: string;
	/** A reference to the internal `<input>` element. */
	inputRef?: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
	/** Indicates that the indicator should be "required" when `required=true`. */
	requiredIndicator?: boolean;
	/** Indicates that the indicator should be "optional" when `required=false`. */
	optionalIndicator?: boolean;
	/** Triggered any time the number of characters remaining is updated. */
	onCount?: (remaining?: number) => void;
	/** Allow for multiple lines of input */
	multiline?: boolean | number;
	/**
	 * If `true` increase the height of textarea automatically
	 * only works when multiline prop it's `enable`
	 */
	autoSize?: boolean;
}

export type TextFieldProps = BaseTextFieldProps & BaseTextAreaProps & BaseInputProps;
