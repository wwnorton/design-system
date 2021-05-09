/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useCallback, useState, useEffect } from 'react';
import clsx from 'clsx';
import { Switch, Icon, useTheme } from '@wwnds/react';

import SearchBar from '@theme/SearchBar';
import useThemeContext from '@theme/hooks/useThemeContext';
import { useThemeConfig } from '@docusaurus/theme-common';
import useHideableNavbar from '@theme/hooks/useHideableNavbar';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import useWindowSize, { windowSizes } from '@theme/hooks/useWindowSize';
import NavbarItem from '@theme/NavbarItem';
import Logo from '@theme/Logo';
import IconMenu from '@theme/IconMenu';

import styles from './styles.module.css';

// retrocompatible with v1
const DefaultNavItemPosition = 'right';

// If split links by left/right
// if position is unspecified, fallback to right (as v1)
function splitNavItemsByPosition(items) {
	const leftItems = items.filter(
		(item) => (item.position ?? DefaultNavItemPosition) === 'left',
	);
	const rightItems = items.filter(
		(item) => (item.position ?? DefaultNavItemPosition) === 'right',
	);
	return {
		leftItems,
		rightItems,
	};
}

function Navbar(): JSX.Element {
	const {
		navbar: { items, hideOnScroll, style },
		colorMode: { disableSwitch: disableColorModeSwitch },
	} = useThemeConfig();
	const [sidebarShown, setSidebarShown] = useState(false);
	const { setLightTheme, setDarkTheme } = useThemeContext();
	const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

	useLockBodyScroll(sidebarShown);

	const showSidebar = useCallback(() => {
		setSidebarShown(true);
	}, [setSidebarShown]);
	const hideSidebar = useCallback(() => {
		setSidebarShown(false);
	}, [setSidebarShown]);

	/** START NDS color scheme */
	const { colorScheme, setColorScheme } = useTheme();
	const isDark = colorScheme === 'dark';

	// use NDS colorScheme as source of truth, not Docusaurus
	const onToggleChange = (checked: boolean) => {
		setColorScheme((checked) ? 'dark' : 'light');
	};

	// update Docusaurus theme when NDS colorScheme changes
	useEffect(() => {
		if (isDark) {
			setDarkTheme();
		} else {
			setLightTheme();
		}
	}, [isDark, setDarkTheme, setLightTheme]);
	/** END NDS color scheme */

	const windowSize = useWindowSize();

	useEffect(() => {
		if (windowSize === windowSizes.desktop) {
			setSidebarShown(false);
		}
	}, [windowSize]);

	const hasSearchNavbarItem = items.some((item) => item.type === 'search');
	const { leftItems, rightItems } = splitNavItemsByPosition(items);

	return (
		<nav
			ref={navbarRef}
			className={clsx('navbar', 'navbar--fixed-top', {
				'navbar--dark': style === 'dark',
				'navbar--primary': style === 'primary',
				'navbar-sidebar--show': sidebarShown,
				[styles.navbarHideable]: hideOnScroll,
				[styles.navbarHidden]: hideOnScroll && !isNavbarVisible,
			})}
		>
			<div className="navbar__inner">
				<div className="navbar__items">
					{items != null && items.length !== 0 && (
						<button
							aria-label="Navigation bar toggle"
							className="navbar__toggle"
							type="button"
							tabIndex={0}
							onClick={showSidebar}
							onKeyDown={showSidebar}
						>
							<IconMenu />
						</button>
					)}
					<Logo
						className="navbar__brand"
						imageClassName="navbar__logo"
						titleClassName={clsx('navbar__title')}
					/>
					{leftItems.map((item, i) => (
						<NavbarItem {...item} key={i} />
					))}
				</div>
				<div className="navbar__items navbar__items--right">
					{rightItems.map((item, i) => (
						<NavbarItem {...item} key={i} />
					))}
					{!disableColorModeSwitch && (
						<Switch
							className={styles.displayOnlyInLargeViewport}
							label="Dark mode"
							checked={isDark}
							onToggle={onToggleChange}
							tipped
						>
							<Icon
								icon={{
									d: (isDark)
										? 'M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z'
										: 'M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z',
								}}
								color={(!isDark) ? 'var(--nds-yellow-50)' : undefined}
							/>
						</Switch>
					)}
					{!hasSearchNavbarItem && <SearchBar />}
				</div>
			</div>
			<div
				role="presentation"
				className="navbar-sidebar__backdrop"
				onClick={hideSidebar}
			/>
			<div className="navbar-sidebar">
				<div className="navbar-sidebar__brand">
					<Logo
						className="navbar__brand"
						imageClassName="navbar__logo"
						titleClassName="navbar__title"
						onClick={hideSidebar}
					/>
					{!disableColorModeSwitch && sidebarShown && (
						<Switch
							className={styles.displayOnlyInLargeViewport}
							label="Dark mode"
							checked={isDark}
							onToggle={onToggleChange}
							tipped
						>
							<Icon
								icon={{
									d: (isDark)
										? 'M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z'
										: 'M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z',
								}}
								color={(!isDark) ? 'var(--nds-yellow-50)' : undefined}
							/>
						</Switch>
					)}
				</div>
				<div className="navbar-sidebar__items">
					<div className="menu">
						<ul className="menu__list">
							{items.map((item, i) => (
								<NavbarItem
									mobile
									{...(item as any)} // TODO fix typing
									onClick={hideSidebar}
									key={i}
								/>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
