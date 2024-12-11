import React from 'react';
import { styles } from './styles';

export const QuestionStem = ({ children }: React.PropsWithChildren<unknown>) => (
	<div className={styles.stem}>{children}</div>
);
