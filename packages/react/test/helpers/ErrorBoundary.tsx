import React from 'react';

interface ErrorBoundaryProps {
	children: React.ReactNode;
}

interface ErrorBoundaryState {
	error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { error: undefined };
	}

	componentDidCatch(error: Error): void {
		this.setState({ error });
	}

	render(): React.ReactNode {
		const { children } = this.props;
		const { error } = this.state;

		if (error) return error.message;

		return children;
	}
}
