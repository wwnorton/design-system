import React from 'react';
import {
	withKnobs,
	number,
	text,
} from '@storybook/addon-knobs';

import {
	Menu,
	MenuItem,
	MenuDivider,
	MenuGroup,
	MenuHeader,
	MenuButton,
} from '.';

export default {
	title: 'Menu',
	component: Menu,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => {
	const [ref, setRef] = React.useState<HTMLButtonElement | null>();
	const [isOpen, setOpen] = React.useState(false);
	const toggle = (): void => setOpen(!isOpen);
	return (
		<>
			<MenuButton
				ref={setRef}
				onOpen={toggle}
				icon="menu"
			>
				Show menu
			</MenuButton>
			<Menu
				reference={ref}
				placement="bottom-start"
			>
				<MenuItem
					id='mnuHome'
					label={text('label', 'Home')}
					description={text('description', 'Website home page')}
					href={text('href', 'https://wwnorton.com')}
					target="_blank"
				/>
				<MenuItem
					id='menuCatalog'
					label='Catalog'
					description='Books catalog'
					href="https://wwnorton.com/catalog"
					target="_blank"
				/>
				<MenuHeader
					label="Landing Pages"
				/>
				<MenuGroup>
					<MenuItem
						icon="edit"
						label='Reader'
						href="https://wwnorton.com/reader"
						target="_blank"
					/>
					<MenuItem
						icon="account"
						label='Student'
						href="https://wwnorton.com/student"
						target="_blank"
					/>
				</MenuGroup>
				<MenuItem
					label='Educator'
					href="https://wwnorton.com/educator"
					target="_blank"
				/>
			</Menu>
		</>
	);
};

export const Menubar: React.FunctionComponent = () => {
	const [ref, setRef] = React.useState<HTMLButtonElement | null>();
	const [refAbout, setAboutRef] = React.useState<HTMLButtonElement | null>();
	const [refServices, setServicesRef] = React.useState<HTMLButtonElement | null>();
	const [openFileMenu, setOpenFileMenu] = React.useState(false);
	const [openEditMenu, setOpenEditMenu] = React.useState(false);
	const [openServiceMenu, setOpenServiceMenu] = React.useState(false);
	const openFileMenuHandler = () => {
		setOpenEditMenu(false);
		setOpenServiceMenu(false);
		setOpenFileMenu(!openFileMenu);
	};
	const openAboutMenuHandler = () => {
		setOpenFileMenu(false);
		setOpenServiceMenu(false);
		setOpenEditMenu(!openEditMenu);
	};
	const openServicesMenuHandler = () => {
		setOpenEditMenu(false);
		setOpenFileMenu(false);
		setOpenServiceMenu(!openServiceMenu);
	};
	const onMenuClose = (indexVal, SelectedData) => {
		alert(SelectedData.label); // eslint-disable-line  no-alert
	};
	return (
		<>
			<MenuButton
				ref={setRef}
				onOpen={openFileMenuHandler}
				variant="ghost"
				icon={`chevron-${openFileMenu ? 'down' : 'up'}`}
			>
				About us
			</MenuButton>
			<MenuButton
				ref={setAboutRef}
				onOpen={openAboutMenuHandler}
				variant="ghost"
				style={{ marginLeft: '0.1rem' }}
				icon={`chevron-${openEditMenu ? 'down' : 'up'}`}
			>
				Products
			</MenuButton>
			<MenuButton
				ref={setServicesRef}
				onOpen={openServicesMenuHandler}
				variant="ghost"
				style={{ marginLeft: '0.1rem' }}
				icon={`chevron-${openServiceMenu ? 'down' : 'up'}`}
			>
				Services
			</MenuButton>
			<hr style={{ margin: 0 }} />
			<Menu
				onClose={onMenuClose}
				reference={ref}
				placement="bottom-start"
			>
				<MenuItem
					label='Company'
					description='About company'
				/>
				<MenuItem
					label='Management'
				/>
				<MenuDivider />
				<MenuItem
					label='Team'
				/>
				<MenuItem
					label='Career'
				/>
			</Menu>
			<Menu
				reference={refAbout}
				onClose={onMenuClose}
				placement="bottom-start"
			>
				<MenuItem
					label='Smartwork 5'
				/>
				<MenuItem
					label='NCIA'
				/>
				<MenuItem
					label='Norton Website'
				/>
			</Menu>
			<Menu
				reference={refServices}
				onClose={onMenuClose}
				placement="bottom-start"
			>
				<MenuItem
					label='Test Service 1'
				/>
				<MenuItem
					label='Test Service 2'
				/>
				<MenuItem
					label='Test Service 3'
					disabled
				/>
			</Menu>
		</>
	);
};

export const FixedWidthMenu: React.FunctionComponent = () => {
	const [ref, setRef] = React.useState<HTMLButtonElement | null>();
	const [isOpen, setOpen] = React.useState(false);
	const toggle = (): void => setOpen(!isOpen);
	return (
		<>
			<MenuButton
				ref={setRef}
				onOpen={toggle}
				icon="menu"
			>
				Show menu
			</MenuButton>
			<Menu
				reference={ref}
				placement="bottom-start"
				maxWidth={number('maxWidth', 200)}
			>
				<MenuItem
					label={text('label', 'Large width menu')}
					description={text('description', 'Large width menu description with maximum characters')}
					href="https://google.com"
				/>
				<MenuItem
					label='Large width menu 2'
					description={text('description', 'Large width menu description with maximum characters')}
				/>
			</Menu>
		</>
	);
};

export const JSONData: React.FunctionComponent = () => {
	const [openProfileMenu, setOpenProfileMenu] = React.useState(false);
	const [ref, setRef] = React.useState<HTMLButtonElement | null>();
	const openProfileMenuHandler = () => {
		setOpenProfileMenu(!openProfileMenu);
	};

	const jData = {
		menuItems: [{
			label: 'Overview',
			description: 'Overview menu',
		},
		{
			label: 'About',
			icon: 'edit',
			id: 'mnuAbout',
		},
		{
			menuDivider: true,
		},
		{
			label: 'Jobs',
			disabled: true,
		},
		{
			label: 'Account',
			description: 'Click for account',
			icon: 'account',
		},
		{
			label: 'Profile Settings',
			icon: 'settings',
		},
		],
	};

	return (
		<>
			<div>
				<MenuButton
					ref={setRef}
					onOpen={openProfileMenuHandler}
					variant="solid"
				>
					Profile
				</MenuButton>
			</div>
			<div>
				<Menu
					isOpen={openProfileMenu}
					reference={ref}
					JsonMenu={jData}
				/>
			</div>
		</>
	);
};
