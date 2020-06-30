import React from 'react';
import { prefix } from '../../utilities';

export interface FieldAddonProps extends React.HTMLAttributes<HTMLSpanElement> {
	baseName?: string;
}

export const FieldAddon: React.FunctionComponent<FieldAddonProps> = ({
	children,
	baseName = prefix('field'),
	className = `${baseName}__addon`,
}: FieldAddonProps) => <span className={className}>{ children }</span>;
