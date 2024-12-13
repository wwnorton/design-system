import React from 'react';
import { TableHeaderProps } from '../types';

export const TableHeader = ({ children, ...others }: TableHeaderProps) => {
	return (
		<thead {...others}>
			<tr>{children}</tr>
		</thead>
	);
};
