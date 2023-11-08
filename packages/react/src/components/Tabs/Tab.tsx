import React, { useCallback } from 'react';
import classNames from 'classnames';
import { BaseButton } from '../BaseButton';
import { TabProps } from './types';
import {
	useTabId, useTabListDescendant, useTabPanelId, useTabsState,
} from './context';
import { moveFocusToTabPanel } from './utils';

const BASE_NAME = 'nds-tab';

const styles = {
	base: BASE_NAME,
	contained: `${BASE_NAME}--contained`,
	line: `${BASE_NAME}--line`,
	selected: 'selected',
};

export const Tab = ({
	children,
}: TabProps) => {
	const { index, register } = useTabListDescendant();
	const { variant, selectedTabIndex, setSelectedTabIndex } = useTabsState();

	const isSelected = index === selectedTabIndex;

	const tabId = useTabId(index);
	const panelId = useTabPanelId(index);

	const onClick = useCallback(() => {
		setSelectedTabIndex(index);
		moveFocusToTabPanel(panelId);
	}, [index, setSelectedTabIndex, panelId]);

	const className = classNames(BASE_NAME, {
		[styles.contained]: variant === 'contained',
		[styles.line]: variant === 'line',
		[styles.selected]: isSelected,
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
