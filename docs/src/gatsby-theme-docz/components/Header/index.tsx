/** @jsx jsx */
import {
	jsx, Box, Flex, useColorMode,
} from 'theme-ui';
import { useConfig, useCurrentDoc } from 'docz';
import { Icon, Switch } from '@wwnds/react';
import {
	Edit, Menu, Sun, Moon,
} from 'react-feather';
import { withPrefix } from 'gatsby';
import { useEffect } from 'react';
import { Logo } from '../Logo';
import * as styles from './styles';

interface HeaderProps {
	onOpen?: React.HTMLAttributes<HTMLButtonElement>['onClick'];
}

export const Header: React.FunctionComponent<HeaderProps> = ({ onOpen }: HeaderProps) => {
	const {
		repository,
		themeConfig: { showDarkModeSwitch, showMarkdownEditButton },
	} = useConfig();
	const { edit = true, ...doc } = useCurrentDoc();
	const [colorScheme, setColorScheme] = useColorMode<'light' | 'dark'>();

	const toggleColorScheme = (): void => {
		setColorScheme((colorScheme === 'dark') ? 'light' : 'dark');
	};

	useEffect(() => {
		const invert = (colorScheme === 'dark') ? 'light' : 'dark';
		document.documentElement.classList.remove(`scheme-${invert}`);
		document.documentElement.classList.add(`scheme-${colorScheme}`);
	}, [colorScheme]);

	useEffect(() => {
		const mql = window.matchMedia('(prefers-color-scheme: dark)');
		setColorScheme((mql.matches) ? 'light' : 'dark');
	}, [setColorScheme]);

	return (
		<header sx={styles.wrapper} data-testid="header">
			<Box sx={styles.menuIcon}>
				<button
					type="button"
					aria-label="Menu"
					sx={styles.menuButton}
					onClick={onOpen}
				>
					<Menu size={25} />
				</button>
			</Box>
			<div sx={styles.innerContainer}>
				<Logo />
				<Flex sx={{ alignItems: 'center' }}>
					<a href={withPrefix('/sassdoc')} sx={styles.headerLink}>
						Sassdoc
					</a>
					<a href={withPrefix('/storybook')} sx={styles.headerLink}>
						Storybook
					</a>
					{repository && (
						<a
							href={repository}
							sx={styles.headerLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							GitLab
							<Icon variant="launch" width={15} sx={{ ml: 1 }} />
						</a>
					)}
					{showDarkModeSwitch && (
						<Switch
							label="Dark mode"
							tipped
							checked={colorScheme === 'dark'}
							onClick={toggleColorScheme}
						>
							{ colorScheme === 'dark' ? <Moon size={15} /> : <Sun size={15} /> }
						</Switch>
					)}
				</Flex>
				{showMarkdownEditButton && edit && doc.a && (
					<a
						sx={styles.editButton}
						href={doc.a}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Edit width={14} />
						<Box sx={{ pl: 2 }}>Edit page</Box>
					</a>
				)}
			</div>
		</header>
	);
};
