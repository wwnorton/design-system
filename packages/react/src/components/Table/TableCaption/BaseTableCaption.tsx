import React, { ReactNode, useMemo } from 'react';
import classNames from 'classnames';

interface BaseTableCaptionProps {
	captionContent?: ReactNode;
	captionClassName?: string;
	captionIsVisuallyHidden?: boolean;
}
export const BaseTableCaption: React.FunctionComponent<BaseTableCaptionProps> = ({
	captionContent,
	captionClassName = 'nds-table__caption',
	captionIsVisuallyHidden = false,
}: BaseTableCaptionProps) => {
	const resolvedClassName = classNames(captionClassName, {
		'nds-sr-only': captionIsVisuallyHidden,
	});

	// Memoize to avoid unnecessary re-renders
	return useMemo(() => {
		if (!captionContent) return null;
		return <caption className={resolvedClassName}>{captionContent}</caption>;
	}, [captionContent, resolvedClassName]);
};
