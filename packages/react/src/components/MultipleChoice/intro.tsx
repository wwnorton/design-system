import React from 'react';
import { styles } from './styles';

export const Intro = ({
	children,
}: React.PropsWithChildren<unknown>) => <div className={styles.intro}>{children}</div>;
