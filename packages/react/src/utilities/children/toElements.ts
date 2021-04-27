// React.ReactElement uses any type for props, so allow it here.
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ReactIs from 'react-is';

/**
 * Coerce React nodes into an array of React elements. Pass an optional list of
 * required props to validate the nodes.
 */
export const toElements = <P = any>(
	node: React.ReactNode,
	required: string[] = [],
): React.ReactElement<P>[] => {
	type ChildArray = (React.ReactChild | React.ReactPortal | React.ReactFragment | P)[]
	| React.ReactNodeArray;
	const childMap: React.ReactElement<P>[] = [];
	let nodes: ChildArray = [];

	if (React.isValidElement(node)) {
		nodes = React.Children.toArray(node);
	} else if (Array.isArray(node)) {
		nodes = node;
	} else {
		nodes = [node];
	}

	const hasRequiredProps = (props: any): props is P => {
		const missingProps = required.filter((prop) => !(prop in props));
		if (missingProps.length) {
			throw new Error(`Missing required props: ${missingProps.join(', ')}.`);
		}
		return true;
	};

	nodes.forEach((child) => {
		if (typeof child === 'undefined') return 0;
		if (typeof child === 'string' || typeof child === 'number') {
			if (required.length) throw new Error('Missing required props.');
			return childMap.push(React.createElement('span', {} as P, child));
		}
		if (typeof child === 'object') {
			if (child === null) return 0;
			if (ReactIs.isElement(child)) {
				if (child.type === React.Fragment) {
					return childMap.push(...toElements<P>(child.props.children, required));
				}
				if (hasRequiredProps(child.props)) {
					return childMap.push(child);
				}
				return 0;
			}
			// React.ReactNodeArray (React.ReactNode[])
			if (Array.isArray(child)) {
				return child.forEach((n) => childMap.push(...toElements<P>(n, required)));
			}
			// props object
			if (hasRequiredProps(child)) {
				return childMap.push(React.createElement('span', child));
			}
			return 0;
		}
		throw new Error('Child nodes can be strings, numbers, or React Elements.');
	});

	return childMap;
};
