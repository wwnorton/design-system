import React, { ReactNode, useMemo } from 'react';
import classNames from 'classnames';

interface BaseTableCaptionProps {
	captionContent?: ReactNode;
	captionClassName?: string;
	captionIsVisuallyHidden?: boolean;
}
export const BaseTableCaption: React.FunctionComponent<BaseTableCaptionProps> = ({
	captionContent,
	captionClassName,
	captionIsVisuallyHidden = false,
}: BaseTableCaptionProps) => {
	if (!captionContent) return null;

	const resolvedClassName = classNames(captionClassName, {
		'nds-sr-only': captionIsVisuallyHidden,
	});

	// Memoize to avoid unnecessary re-renders when the caption is static
	return useMemo(
		() => <caption className={resolvedClassName}>{captionContent}</caption>,
		[captionContent, resolvedClassName],
	);
};
