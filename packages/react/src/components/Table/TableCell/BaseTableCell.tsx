import React from 'react';

export const BaseTableCell = React.forwardRef<
	HTMLTableCellElement,
	React.TableHTMLAttributes<HTMLTableCellElement>
>((props, ref) => {
	return <td ref={ref} {...props} />;
});
