import React from 'react';
import { styles } from './styles';

export const QuestionFraming = ({ children }: React.PropsWithChildren<unknown>) => (
	<div className={styles.intro}>{children}</div>
);
