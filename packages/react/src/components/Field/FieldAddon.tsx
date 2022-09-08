import React from 'react';
import { FieldAddonProps } from './types';

export const FieldAddon: React.FunctionComponent<FieldAddonProps> = ({
	children,
	baseName = 'nds-field',
	className = `${baseName}__addon`,
}: FieldAddonProps) => <span className={className}>{ children }</span>;
