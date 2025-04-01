// React.ReactElement uses any type for props, so allow it here.
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ReactIs from 'react-is';

/*
 * Patch for ReactIs.isElement()
 * If users have an older version of react-is, the .isElement method won't recognize
 * elements properly since React changed its symbol in v19. This prevents us from
 * having to set a specific react-is version in our peerDependencies.
 * https://github.com/facebook/react/pull/28813
 */
const originalIsElement = ReactIs.isElement.bind({});
ReactIs.isElement = (node: any): node is React.ReactElement => {
	return originalIsElement(node) || node.$$typeof === Symbol.for('react.transitional.element');
};

/**
 * Coerce React nodes into an array of React elements (`ReactElement<P>[]`).
 * Pass an optional list of required props to validate the nodes.
 */
export const toElements = <P extends Record<string, any> = any>(
	/** A React node, such as `children` of any element. */
	node: P[] | React.ReactNode,
	/** A list of required prop names. */
	required: string[] = [],
): React.ReactElement<P>[] => {
	type ChildArray =
		| (React.ReactChild | React.ReactPortal | React.ReactFragment | P)[]
		| React.ReactNode[];
	const childMap: React.ReactElement<P>[] = [];
	let nodes: ChildArray = [];

	if (React.isValidElement(node)) {
		nodes = React.Children.toArray(node);
	} else if (Array.isArray(node)) {
		nodes = node;
	} else {
		nodes = [node];
	}

	const hasRequiredProps = (props: Record<string, any>): props is P =>
		required.every((prop) => prop in props);

	const missingProps = (props: Record<string, any>) => required.filter((prop) => !(prop in props));

	nodes.forEach((child) => {
		if (typeof child === 'undefined') return 0;
		if (typeof child === 'string' || typeof child === 'number') {
			if (required.length) {
				throw new Error(toElements.MISSING_PROPS(required));
			}
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
				throw new Error(toElements.MISSING_PROPS(missingProps(child.props)));
			}
			// React.ReactNodeArray (React.ReactNode[])
			if (Array.isArray(child)) {
				return child.forEach((n) => childMap.push(...toElements<P>(n, required)));
			}
			// props object
			if (hasRequiredProps(child)) {
				return childMap.push(React.createElement('span', child));
			}
			throw new Error(toElements.MISSING_PROPS(missingProps(child)));
		}
		throw new Error('Child nodes can be strings, numbers, or React Elements.');
	});

	return childMap;
};

toElements.INVALID_NODES = 'Child nodes can be strings, numbers, or React Elements.';
toElements.MISSING_PROPS = (props: string[]) => `Missing required props: ${props.join(', ')}.`;
