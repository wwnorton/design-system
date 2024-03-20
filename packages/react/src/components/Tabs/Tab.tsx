import React, { useCallback } from 'react';
import classNames from 'classnames';
import { BaseButton } from '../BaseButton';
import { TabProps } from './types';
import {
	useTabId, useTabListDescendant, useTabPanelId, useTabsState,
} from './context';

export const Tab = ({
	baseName = 'nds-tab',
	containedClass = `${baseName}--contained`,
	lineClass = `${baseName}--line`,
	children,
}: TabProps) => {
	const { index, register } = useTabListDescendant();
	const { variant, selectedTabIndex, setSelectedTabIndex } = useTabsState();

	const isSelected = index === selectedTabIndex;

	const tabId = useTabId(index);
	const panelId = useTabPanelId(index);

	const onClick = useCallback(() => {
		setSelectedTabIndex(index);
	}, [index, setSelectedTabIndex]);

	const className = classNames(baseName, {
		[containedClass]: variant === 'contained',
		[lineClass]: variant === 'line',
		selected: isSelected,
	});

	return (
		<BaseButton
			ref={register}
			className={className}
			type="button"
			onClick={onClick}
			role="tab"
			id={tabId}
			aria-controls={panelId}
			aria-selected={isSelected}
			tabIndex={isSelected ? 0 : -1}
		>
			{children}
		</BaseButton>
	);
};
