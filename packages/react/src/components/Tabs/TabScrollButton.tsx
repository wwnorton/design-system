import React from 'react';
import classNames from 'classnames';
import { BaseButton } from '../BaseButton';
import { Icon } from '../Icon';
import { useTabsState } from './context';

interface TabScrollButtonProps {
	type: 'left' | 'right';
	onClick: () => void;
	disabled?: boolean;
}

const BASE_NAME = 'nds-tab-scroll-button';

const styles = {
	base: BASE_NAME,
	contained: `${BASE_NAME}--contained`,
	line: `${BASE_NAME}--line`,
	text: `${BASE_NAME}__text`,
};

export const TabScrollButton = ({ type, onClick, disabled }: TabScrollButtonProps) => {
	const text = type === 'left' ? 'Previous' : 'Next';
	const icon = type === 'left' ? 'chevron-left' : 'chevron-right';
	const { variant } = useTabsState();

	const className = classNames(
		styles.base,
		{
			[styles.contained]: variant === 'contained',
			[styles.line]: variant === 'line',
		},
	);

	if (disabled) {
		return null;
	}

	return (
		<BaseButton
			className={className}
			onClick={onClick}
			aria-hidden
			tabIndex={-1}
		>
			<Icon variant={icon} />
			<span className={styles.text}>{text}</span>
		</BaseButton>
	);
};
