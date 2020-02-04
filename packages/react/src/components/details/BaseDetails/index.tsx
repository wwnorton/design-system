import React from 'react';
import BaseSummary from './BaseSummary';
import { isElement } from '../../../utilities/events';

export type DetailsToggleEvent = React.SyntheticEvent<HTMLDetailsElement, Event>;

export interface BaseDetailsProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
	/** The contents of the `<summary>` element or an actual `<summary>` element. */
	summary?: string | JSX.Element;
	/**
	 * A className to be applied to the `<summary>` element.
	 * If the `summary` prop is an actual `<summary>` element, this will be ignored.
	 */
	summaryClass?: string;
	/**
	 * A polyfill of the `ontoggle` event, which _does_ work but doesn't currently
	 * exist in the `React.DetailsHTMLAttributes<HTMLDetailsElement>` definition.
	 */
	onToggle?: (
		e: DetailsToggleEvent | any, // eslint-disable-line @typescript-eslint/no-explicit-any
	) => void;
}

const BaseDetails = React.forwardRef<HTMLDetailsElement, BaseDetailsProps>(({
	summary,
	summaryClass,
	children,
	...attributes
}: BaseDetailsProps, ref) => {
	const Summary = (content?: JSX.Element | string): JSX.Element => {
		if (isElement(content, 'summary')) return content as JSX.Element;
		return <BaseSummary className={summaryClass}>{ content || 'Details' }</BaseSummary>;
	};

	return (
		<details ref={ref} {...attributes}>
			{ Summary(summary) }
			{ children }
		</details>
	);
});

export default BaseDetails;
