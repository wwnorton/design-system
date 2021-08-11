import React from 'react';
import ReactIs from 'react-is';
import { LinkLikeProps } from './types';

/**
 * Create function for identifying child component is link
 * function is recursive for identifying fragment component
 * has a child and child component is link or not.
 */
export const isLinkElement = (
	node: React.ReactNode | React.ReactElement<LinkLikeProps>,
): boolean => {
	if (ReactIs.isElement(node) && (node.type === 'a' || typeof node.props.href === 'string')) {
		return true;
	}
	if (ReactIs.isFragment(node) && node.props) return isLinkElement(node.props.children);
	return false;
};
