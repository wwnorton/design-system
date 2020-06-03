/** @jsx jsx */
import { useRef, useState } from 'react';
import { jsx } from 'theme-ui';
import { Global } from '@emotion/core';
import global from 'gatsby-theme-docz/src/theme/global';
import { Sidebar } from 'gatsby-theme-docz/src/components/Sidebar';
import { MainContainer } from 'gatsby-theme-docz/src/components/MainContainer';
import * as styles from 'gatsby-theme-docz/src/components/Layout/styles';
import { Header } from '../Header';

interface LayoutProps {
	children?: React.ReactNode;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }: LayoutProps) => {
	const [open, setOpen] = useState(false);
	const nav = useRef();

	return (
		<div sx={{ '& > div': { flex: '1 1 auto' } }} data-testid="layout">
			<Global styles={global} />
			<div sx={styles.main}>
				<Header onOpen={(): void => setOpen((s) => !s)} />
				<div sx={styles.wrapper}>
					<Sidebar
						as="aside"
						ref={nav}
						open={open}
						onFocus={(): void => setOpen(true)}
						onBlur={(): void => setOpen(false)}
						onClick={(): void => setOpen(false)}
					/>
					<MainContainer
						as="main"
						data-testid="main-container"
					>
						{children}

					</MainContainer>
				</div>
			</div>
		</div>
	);
};
