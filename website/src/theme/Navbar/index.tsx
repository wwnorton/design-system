/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import { Switch, Icon, useTheme } from '@wwnds/react';
import React, {useCallback, useState, useEffect} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import SearchBar from '@theme/SearchBar';
// import Toggle from '@theme/Toggle';
import useThemeContext from '@theme/hooks/useThemeContext';
import {
  useThemeConfig,
  useMobileSecondaryMenuRenderer,
  usePrevious,
} from '@docusaurus/theme-common';
import useHideableNavbar from '@theme/hooks/useHideableNavbar';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import useWindowSize from '@theme/hooks/useWindowSize';
import NavbarItem, {Props as NavbarItemConfig} from '@theme/NavbarItem';
import Logo from '@theme/Logo';
import IconMenu from '@theme/IconMenu';

import styles from './styles.module.css';

// retrocompatible with v1
const DefaultNavItemPosition = 'right';

type ToggleProps = {
	checked: boolean;
	onChange: (eventChecked: boolean) => void;
	className?: string;
}
const Toggle: React.FC<ToggleProps> = ({ checked, onChange }: ToggleProps) => (
	<Switch
		label="Dark mode"
		checked={checked}
		onToggle={onChange}
		tipped
	>
		<Icon
			icon={{
				d: (checked)
					? 'M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z'
					: 'M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z',
			}}
			color={(!checked) ? 'var(--nds-yellow-50)' : undefined}
		/>
	</Switch>
)

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

// If split links by left/right
// if position is unspecified, fallback to right (as v1)
function splitNavItemsByPosition(items: NavbarItemConfig[]) {
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

function useMobileSidebar() {
  const windowSize = useWindowSize();

  // Mobile sidebar not visible on hydration: can avoid SSR rendering
  const shouldRender = windowSize === 'mobile'; // || windowSize === 'ssr';

  const [shown, setShown] = useState(false);

  const toggle = useCallback(() => {
    setShown((s) => !s);
  }, []);

  useEffect(() => {
    if (windowSize === 'desktop') {
      setShown(false);
    }
  }, [windowSize]);

  return {shouldRender, toggle, shown};
}

function useColorModeToggle() {
  const {
    colorMode: {disableSwitch},
  } = useThemeConfig();
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  // const toggle = useCallback(
  //   (e) => (e.target.checked ? setDarkTheme() : setLightTheme()),
  //   [setLightTheme, setDarkTheme],
  // );

	/** START NDS color scheme */
	const { colorScheme, setColorScheme } = useTheme();

	// use NDS colorScheme as source of truth, not Docusaurus
	const toggle = (checked: boolean) => {
		setColorScheme((checked) ? 'dark' : 'light');
	};

	// update Docusaurus theme when NDS colorScheme changes
	useEffect(() => {
		if (colorScheme === 'dark') {
			setDarkTheme();
		} else {
			setLightTheme();
		}
	}, [colorScheme]);
	/** END NDS color scheme */

  return {isDarkTheme: colorScheme === 'dark', toggle, disabled: disableSwitch};
}

function useSecondaryMenu({
  sidebarShown,
  toggleSidebar,
}: NavbarMobileSidebarProps) {
  const content = useMobileSecondaryMenuRenderer()?.({
    toggleSidebar,
  });
  const previousContent = usePrevious(content);

  const [shown, setShown] = useState<boolean>(() => {
    // /!\ content is set with useEffect,
    // so it's not available on mount anyway
    // "return !!content" => always returns false
    return false;
  });

  // When content is become available for the first time (set in useEffect)
  // we set this content to be shown!
  useEffect(() => {
    const contentBecameAvailable = content && !previousContent;
    if (contentBecameAvailable) {
      setShown(true);
    }
  }, [content, previousContent]);

  const hasContent = !!content;

  // On sidebar close, secondary menu is set to be shown on next re-opening
  // (if any secondary menu content available)
  useEffect(() => {
    if (!hasContent) {
      setShown(false);
      return;
    }
    if (!sidebarShown) {
      setShown(true);
    }
  }, [sidebarShown, hasContent]);

  const hide = useCallback(() => {
    setShown(false);
  }, []);

  return {shown, hide, content};
}

type NavbarMobileSidebarProps = {
  sidebarShown: boolean;
  toggleSidebar: () => void;
};

function NavbarMobileSidebar({
  sidebarShown,
  toggleSidebar,
}: NavbarMobileSidebarProps) {
  useLockBodyScroll(sidebarShown);
  const items = useNavbarItems();

  const colorModeToggle = useColorModeToggle();

  const secondaryMenu = useSecondaryMenu({
    sidebarShown,
    toggleSidebar,
  });

  return (
    <div className="navbar-sidebar">
      <div className="navbar-sidebar__brand">
        <Logo
          className="navbar__brand"
          imageClassName="navbar__logo"
          titleClassName="navbar__title"
        />
        {!colorModeToggle.disabled && sidebarShown && (
          <Toggle
            checked={colorModeToggle.isDarkTheme}
            onChange={colorModeToggle.toggle}
          />
        )}
      </div>

      <div
        className={clsx('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': secondaryMenu.shown,
        })}>
        <div className="navbar-sidebar__item menu">
          <ul className="menu__list">
            {items.map((item, i) => (
              <NavbarItem mobile {...item} onClick={toggleSidebar} key={i} />
            ))}
          </ul>
        </div>

        <div className="navbar-sidebar__item navbar-sidebar__item--secondary menu">
          <button
            type="button"
            className="clean-btn navbar-sidebar__back"
            onClick={secondaryMenu.hide}>
            <Translate
              id="theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel"
              description="The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)">
              ← Back to main menu
            </Translate>
          </button>
          {secondaryMenu.content}
        </div>
      </div>
    </div>
  );
}

function Navbar(): JSX.Element {
  const {
    navbar: {hideOnScroll, style},
  } = useThemeConfig();

  const mobileSidebar = useMobileSidebar();
  const colorModeToggle = useColorModeToggle();

  const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll);

  const items = useNavbarItems();
  const hasSearchNavbarItem = items.some((item) => item.type === 'search');
  const {leftItems, rightItems} = splitNavItemsByPosition(items);

  return (
    <nav
      ref={navbarRef}
      className={clsx('navbar', 'navbar--fixed-top', {
        'navbar--dark': style === 'dark',
        'navbar--primary': style === 'primary',
        'navbar-sidebar--show': mobileSidebar.shown,
        [styles.navbarHideable]: hideOnScroll,
        [styles.navbarHidden]: hideOnScroll && !isNavbarVisible,
      })}>
      <div className="navbar__inner">
        <div className="navbar__items">
          {items?.length > 0 && (
            <button
              aria-label="Navigation bar toggle"
              className="navbar__toggle clean-btn"
              type="button"
              tabIndex={0}
              onClick={mobileSidebar.toggle}
              onKeyDown={mobileSidebar.toggle}>
              <IconMenu />
            </button>
          )}
          <Logo
            className="navbar__brand"
            imageClassName="navbar__logo"
            titleClassName="navbar__title"
          />
          {leftItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
        </div>
        <div className="navbar__items navbar__items--right">
          {rightItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
          {!colorModeToggle.disabled && (
            <Toggle
              className={styles.toggle}
              checked={colorModeToggle.isDarkTheme}
              onChange={colorModeToggle.toggle}
            />
          )}
          {!hasSearchNavbarItem && <SearchBar />}
        </div>
      </div>

      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={mobileSidebar.toggle}
      />

      {mobileSidebar.shouldRender && (
        <NavbarMobileSidebar
          sidebarShown={mobileSidebar.shown}
          toggleSidebar={mobileSidebar.toggle}
        />
      )}
    </nav>
  );
}

export default Navbar;
