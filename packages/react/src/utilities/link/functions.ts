import React from 'react';
import ReactIs from 'react-is';
import { LinkLikeProps } from './types';

/** Check if a node such as `children` is a link-like React element. */
export const isLinkElement = (node: React.ReactNode): node is React.ReactElement<LinkLikeProps> => {
	if (
		ReactIs.isElement(node) &&
		(node.type === 'a' || typeof (node.props as any).href === 'string')
	) {
		return true;
	}
	if (ReactIs.isFragment(node) && (node.props as any).children)
		return isLinkElement((node.props as any).children);
	return false;
};
