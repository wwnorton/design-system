import React from 'react';
import { styles } from './styles';

export const Instructions = ({
	children,
}: React.PropsWithChildren<unknown>) => <div className={styles.instructions}>{children}</div>;
