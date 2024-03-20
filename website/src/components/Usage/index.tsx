import React from "react";
import { CalloutError, CalloutSuccess } from "@wwnds/react";
import styles from "./styles.module.scss";

interface UsageProps {
	good: string;
	bad: string;
	children: React.ReactNode;
}

export const Usage: React.FunctionComponent<UsageProps> = ({
	good,
	bad,
	children,
}: UsageProps) => (
	<section className={styles.usage}>
		<CalloutError
			title="Don't"
			border="bottom"
			tag="div"
			className={styles.usage__bad}
		>
			{bad}
		</CalloutError>
		<CalloutSuccess
			title="Do"
			border="bottom"
			tag="div"
			className={styles.usage__good}
		>
			{good}
		</CalloutSuccess>
		<p className={styles.usage__why}>
			<strong>Why</strong>
			{": "}
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child)) return child.props.children;
				return child;
			})}
		</p>
	</section>
);
