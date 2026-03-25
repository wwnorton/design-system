import * as React from 'react';

// mdx types are not compatible with React 19, so we need to declare them manually
// https://github.com/mdx-js/mdx/issues/2487
declare module 'mdx/types.js' {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	export import JSX = React.JSX;
}

export {};
