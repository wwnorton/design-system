import React from 'react';
import classNames from 'classnames';
import { TabListProps, TabProps } from './types';
import { TabScrollButton } from './TabScrollButton';
import { useTabsState } from './context';
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

	return (
		<div className={styles.container}>
			<TabScrollButton type="left" onClick={moveLeft} disabled={atMinScroll} />
			<div ref={tabListRef} className={className} role="tablist">
				{React.Children.map(children, (child, index: number) => {
					if (!React.isValidElement<TabProps>(child)) {
						return null;
					}

					return React.cloneElement(child, {
						index,
					});
				})}
			</div>
			<TabScrollButton type="right" onClick={moveRight} disabled={atMaxScroll} />
		</div>
	);
};
