import React from 'react';
import classNames from 'classnames';
import { TabListProps } from './types';
import { TabScrollButton } from './TabScrollButton';
import { TabListDescendantsProvider, useTabListDescendants, useTabsState } from './context';
import { useTabListScroll } from './useTabListScroll';
import { useTabKeyboardNavigation } from './useTabKeyboardNavigation';

export const TabList = ({
	baseName = 'nds-tab-list',
	containerClass = `${baseName}-container`,
	leftClass = `${baseName}--left`,
	centeredClass = `${baseName}--centered`,
	children,
}: TabListProps) => {
	const tabListRef = React.useRef<HTMLDivElement>(null);

	useTabKeyboardNavigation(tabListRef);

	const {
		moveLeft, moveRight, atMinScroll, atMaxScroll,
	} = useTabListScroll(tabListRef);

	const { align } = useTabsState();

	const className = classNames(
		baseName,
		{
			[leftClass]: align === 'left',
			[centeredClass]: align === 'center',
		},
	);

	const descendants = useTabListDescendants();

	return (
		<TabListDescendantsProvider value={descendants}>
			<div className={containerClass}>
				<TabScrollButton type="left" onClick={moveLeft} disabled={atMinScroll} />
				<div ref={tabListRef} className={className} role="tablist">
					{children}
				</div>
				<TabScrollButton type="right" onClick={moveRight} disabled={atMaxScroll} />
			</div>
		</TabListDescendantsProvider>
	);
};
