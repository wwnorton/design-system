import React from 'react';
import classNames from 'classnames';
import { TabListProps } from './types';
import { TabScrollButton } from './TabScrollButton';
import { TabListDescendantsProvider, useTabListDescendants, useTabsState } from './context';
import { useTabListScroll } from './useTabListScroll';
import { useTabKeyboardNavigation } from './useTabKeyboardNavigation';

const BASE_NAME = 'nds-tab-list';

const styles = {
	base: BASE_NAME,
	container: `${BASE_NAME}-container`,
	left: `${BASE_NAME}--left`,
	centered: `${BASE_NAME}--centered`,
};

export const TabList = ({ children }: TabListProps) => {
	const tabListRef = React.useRef<HTMLDivElement>(null);

	useTabKeyboardNavigation(tabListRef);

	const {
		moveLeft, moveRight, atMinScroll, atMaxScroll,
	} = useTabListScroll(tabListRef);

	const { align } = useTabsState();

	const className = classNames(
		styles.base,
		{
			[styles.left]: align === 'left',
			[styles.centered]: align === 'center',
		},
	);

	const descendants = useTabListDescendants();

	return (
		<TabListDescendantsProvider value={descendants}>
			<div className={styles.container}>
				<TabScrollButton type="left" onClick={moveLeft} disabled={atMinScroll} />
				<div ref={tabListRef} className={className} role="tablist">
					{children}
				</div>
				<TabScrollButton type="right" onClick={moveRight} disabled={atMaxScroll} />
			</div>
		</TabListDescendantsProvider>
	);
};
