/* eslint-disable react/no-array-index-key */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {
	useCallback, useState, useEffect, useLayoutEffect,
} from 'react';
import clsx from 'clsx';
import { Switch, Icon, useTheme } from '@wwnds/react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SearchBar from '@theme/SearchBar';
import useThemeContext from '@theme/hooks/useThemeContext';
import useHideableNavbar from '@theme/hooks/useHideableNavbar';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import useWindowSize, { windowSizes } from '@theme/hooks/useWindowSize';
import Logo from '@theme/Logo';
import NavbarItem from '@theme/NavbarItem'; // retrocompatible with v1
import styles from './styles.module.css';

const DefaultNavItemPosition = 'right'; // If split links by left/right
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

const Navbar = (): JSX.Element => {
	const {
		siteConfig: {
			themeConfig: {
				navbar: { title = '', items = [], hideOnScroll = false } = {},
				colorMode: { disableSwitch: disableColorModeSwitch = false } = {},
			},
		},
	} = useDocusaurusContext();
	const [sidebarShown, setSidebarShown] = useState(false);
	const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
	const { setLightTheme, setDarkTheme } = useThemeContext();
	const { colorScheme, setColorScheme } = useTheme();
	const isDark = colorScheme === 'dark';
	const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
	// const { logoLink, logoLinkProps } = useLogo();
	useLockBodyScroll(sidebarShown);
	const showSidebar = useCallback(() => {
		setSidebarShown(true);
	}, [setSidebarShown]);
	const hideSidebar = useCallback(() => {
		setSidebarShown(false);
	}, [setSidebarShown]);

	const onToggleChange = (checked: boolean) => {
		setColorScheme((checked) ? 'dark' : 'light');
	};

	useEffect(() => {
		try {
			if (colorScheme) window.localStorage.setItem('nds-color-scheme', colorScheme);
		} catch (err) {
			console.error(err);
		}
	}, [colorScheme]);

	useLayoutEffect(() => {
		if (isDark) {
			setDarkTheme();
		} else {
			setLightTheme();
		}
	}, [isDark, setDarkTheme, setLightTheme]);

	const windowSize = useWindowSize();
	useEffect(() => {
		if (windowSize === windowSizes.desktop) {
			setSidebarShown(false);
		}
	}, [windowSize]);
	const { leftItems, rightItems } = splitNavItemsByPosition(items);
	return (
		<nav
			ref={navbarRef}
			className={clsx('navbar', 'navbar--light', 'navbar--fixed-top', {
				'navbar-sidebar--show': sidebarShown,
				[styles.navbarHideable]: hideOnScroll,
				[styles.navbarHidden]: !isNavbarVisible,
			})}
		>
			<div className="navbar__inner">
				<div className="navbar__items">
					{items != null && items.length !== 0 && (
						<div
							aria-label="Navigation bar toggle"
							className="navbar__toggle"
							role="button"
							tabIndex={0}
							onClick={showSidebar}
							onKeyDown={showSidebar}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 30 30"
								role="img"
								focusable="false"
							>
								<title>Menu</title>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeMiterlimit="10"
									strokeWidth="2"
									d="M4 7h22M4 15h22M4 23h22"
								/>
							</svg>
						</div>
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
					<NavbarItem href={useBaseUrl('sassdoc')} label="Sassdoc" />
					<NavbarItem href={useBaseUrl('storybook')} label="Storybook" />
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
					<SearchBar
						handleSearchBarToggle={setIsSearchBarExpanded}
						isSearchBarExpanded={isSearchBarExpanded}
					/>
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
							label="Dark mode toggle in sidebar"
							checked={isDark}
							onToggle={onToggleChange}
							tipped
						/>
					)}
				</div>
				<div className="navbar-sidebar__items">
					<div className="menu">
						<ul className="menu__list">
							{items.map((item, i) => (
								<NavbarItem mobile {...item} onClick={hideSidebar} key={i} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

// eslint-disable-next-line import/no-default-export
export default Navbar;
