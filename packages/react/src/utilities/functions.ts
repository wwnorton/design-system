import { ReactNode } from 'react';
import ReactIs from 'react-is';

/**
 * Create function for identifying child component is link
 * function is recursive for identifying fragment component
 * has a child and child component is link or not.
 * @param node
 * @returns true or false
 */
export const isLinkElement = (
	node: ReactNode,
): boolean => {
	const isLink = (childNode: ReactNode):boolean => {
		if (ReactIs.isElement(childNode) && (childNode.type === 'a' || typeof childNode.props.href === 'string')) {
			return true;
		}
		if (ReactIs.isFragment(childNode) && childNode.props) return isLink(childNode.props.children);
		return false;
	};
	return isLink(node);
};
