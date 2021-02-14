import React from 'react';
import {
	withKnobs,
	text,
} from '@storybook/addon-knobs';
import { Menu } from '.';
import { MenuItem } from './MenuItem';
import { MenuDivider } from './MenuDivider';
import { MenuGroup } from './MenuGroup';
import { MenuHeader } from './MenuHeader';
import { MenuButton } from './MenuButton';

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
			>
				Show menu
			</MenuButton>
			<Menu
				reference={ref}
				placement="bottom-start"
				isOpen={isOpen}
			>
				<MenuItem
					id='mnuW2C'
					label={text('label', 'W3C Home Page')}
					description={text('description', 'Accessible Rich Internet Application Specification')}
				/>
				<MenuItem
					icon='menu'
					label={text('label', 'W3C Home Page')}
					description={text('description', 'Accessible Rich Internet Application Specification')}
				/>
				<MenuDivider />
				<MenuItem
					icon='launch'
					label={text('label', 'W3C Home Page')}
				/>
				<MenuItem
					label={text('label', 'W3C Home Page')}
				/>
				<MenuHeader
					label="Profile"
				/>
				<MenuGroup>
					<MenuItem
						label='Account'
						icon='account'
					/>
					<MenuItem
						label='Settings'
						icon="settings"
					/>
				</MenuGroup>
				<MenuItem
					href='http://google.com'
					target='_self'
					label='Redirect to Google'
				/>
				<MenuItem
					disabled
					href='http://google.com'
					label='Redirect to Google'
				/>
			</Menu>
		</>
	);
};

export const Controlled: React.FunctionComponent = () => {
	const [ref, setRef] = React.useState<HTMLButtonElement | null>();
	const [refEdit, setEditRef] = React.useState<HTMLButtonElement | null>();
	const [openFileMenu, setOpenFileMenu] = React.useState(false);
	const [openEditMenu, setOpenEditMenu] = React.useState(false);
	const openFileMenuHandler = () => {
		setOpenEditMenu(false);
		setOpenFileMenu(!openFileMenu);
	};
	const openEditMenuHandler = () => {
		setOpenFileMenu(false);
		setOpenEditMenu(!openEditMenu);
	};
	const onMenuClose = (indexVal, SelectedData) => {
		alert(SelectedData.label); // eslint-disable-line  no-alert
		openFileMenuHandler();
	};
	return (
		<>
			<div>
				<MenuButton
					ref={setRef}
					onOpen={openFileMenuHandler}
					variant="ghost"
				>
					File
				</MenuButton>
				<MenuButton
					ref={setEditRef}
					onOpen={openEditMenuHandler}
					variant="ghost"
				>
					Find
				</MenuButton>
			</div>
			<div>
				<Menu
					isOpen={openFileMenu}
					onClose={onMenuClose}
					reference={ref}
					placement="bottom-start"
				>
					<MenuItem
						label='New Document'
						description='Open new document'
					/>
					<MenuItem
						label='Open'
						icon='plus'
					/>
					<MenuItem
						label='Close'
						icon='close'
					/>
					<MenuItem
						label='Save'
						icon='save'
					/>
					<MenuGroup>
						<MenuItem
							label='Share'
						/>
						<MenuItem
							label='Print'
							icon='print'
						/>
					</MenuGroup>
				</Menu>
			</div>
			<Menu
				isOpen={openEditMenu}
				reference={refEdit}
				placement="bottom-start"
			>
				<MenuItem
					label='Edit'
					icon='edit'
				/>
				<MenuItem
					label='Redo'
					icon='subdirectory-left'
				/>
				<MenuItem
					label='Clear'
					icon='close'
					disabled
				/>
				<MenuItem
					label='Search'
					description='Can search anything'
					icon='search'
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
			id: 'mnuAbout',
		},
		{
			menuDivider: true,
		},
		{
			label: 'Redirect to wwnorton',
			href: 'https://wwnorton.com',
			disabled: true,
		},
		{
			label: 'Share',
		},
		{
			label: 'Account',
			description: 'Click for account',
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
