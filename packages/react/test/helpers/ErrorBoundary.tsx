import React from 'react';

interface ErrorBoundaryState {
	hasError: boolean;
	error?: Error;
}

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	componentDidCatch(error: Error): void {
		this.setState({ hasError: true, error });
		// console.log(error, info);
	}

	render(): React.ReactNode {
		const { children } = this.props;
		const { hasError, error } = this.state;

		if (hasError) {
			return error.message;
		}

		return children;
	}
}
