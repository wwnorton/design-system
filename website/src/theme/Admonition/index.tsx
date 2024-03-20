import React from "react";
import {
	Callout,
	CalloutError,
	CalloutSuccess,
	CalloutWarning,
} from "@wwnds/react";

interface AdmonitionProps {
	type: string;
	children?: React.ReactNode;
	title?: string;
}

const Admonition = ({ children, type, title }: AdmonitionProps) => {
	const CalloutComponent = React.useMemo(() => {
		switch (type) {
			case "tip":
				return CalloutSuccess;
			case "caution":
				return CalloutWarning;
			case "danger":
				return CalloutError;
			default:
				return Callout;
		}
	}, [type]);

	return (
		<CalloutComponent title={title} border="left">
			{children}
		</CalloutComponent>
	);
};

export default Admonition;
