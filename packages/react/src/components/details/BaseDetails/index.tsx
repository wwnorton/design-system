import * as React from 'react';
import classNames from 'classnames';

/** The details element click event returned by React's onClick prop. */
export type DetailsClickEvent = React.MouseEvent<HTMLDetailsElement, MouseEvent>;

export interface BaseDetailsProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
	summary?: string | JSX.Element;
	disabled?: boolean;
}

export const BaseDetails = React.forwardRef((
	props: BaseDetailsProps,
	ref?: React.Ref<HTMLDetailsElement>,
) => {
	// merge props into default props and extract the relevant values
	const {
		summary,
		disabled,
		onClick,	// onClick is pulled out so that it can be applied to the <summary>
		className,
		children,
		...attributes
	} = props;

	const classes = classNames(
		{
			'details--disabled': disabled,
		},
		'details',
		className,
	);

	const wrapSummaryContent = (content: JSX.Element | string): JSX.Element => {
		if (typeof content !== 'string' && content.type().type === 'summary') {
			return React.cloneElement(content, { onClick });
		}
		return (
			/* The <summary> is an interactive element.
			   https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/656 */
			/* eslint-disable jsx-a11y/click-events-have-key-events */
			/* eslint-disable jsx-a11y/no-static-element-interactions */
			<summary onClick={onClick} className="details__summary">
				{content}
			</summary>
		);
	};

	return (
		<details
			className={classes}
			ref={ref}
			{...attributes}
		>
			{
				summary && wrapSummaryContent(summary)
			}
			{children}
		</details>
	);
});

export default BaseDetails;
