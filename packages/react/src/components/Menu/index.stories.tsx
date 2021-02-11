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
import { Button } from '../Button';

export default {
	title: 'Menu',
	component: Menu,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => (
	<Menu isOpen>
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
);

export const Controlled: React.FunctionComponent = () => {
	const [openFileMenu, setOpenFileMenu] = React.useState(false);
	const [openEditMenu, setOpenEditMenu] = React.useState(false);
	const [anchorLeftPosition, setAnchorLeftPosition] = React.useState();
	const openFileMenuHandler = () => {
		setOpenEditMenu(false);
		setOpenFileMenu(!openFileMenu);
	};
	const openEditMenuHandler = (e) => {
		setOpenFileMenu(false);
		setAnchorLeftPosition(e.currentTarget.offsetLeft);
		setOpenEditMenu(!openEditMenu);
	};
	const onSelectChange = (indexVal, SelectedData) => {
		alert(SelectedData.label); // eslint-disable-line  no-alert
		setOpenFileMenu(false);
	};
	const onMenuClose = () => {
		setOpenFileMenu(false);
		setOpenEditMenu(false);
	};
	return (
		<>
			<div>
				<Button
					variant='outline'
					onClick={openFileMenuHandler}
					icon={`chevron-${!openFileMenu ? 'up' : 'down'}`}
				>
					File
				</Button>
				<Button
					style={{ marginLeft: 5 }}
					variant='outline'
					onClick={openEditMenuHandler}
					icon={`chevron-${!openEditMenu ? 'up' : 'down'}`}
				>
					Edit
				</Button>
			</div>
			<div>
				<Menu
					isOpen={openFileMenu}
					selectedValues={onSelectChange}
					closeOnExternalClick
					onClose={onMenuClose}
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
				anchorLeftPosition={anchorLeftPosition}
				closeOnExternalClick
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
		],
	};

	return (
		<>
			<div>
				<Button
					variant='outline'
					onClick={openProfileMenuHandler}
					icon={`chevron-${!openProfileMenu ? 'up' : 'down'}`}
				>
					Profile
				</Button>
			</div>
			<div>
				<Menu
					isOpen={openProfileMenu}
					JsonMenu={jData}
				/>
			</div>
		</>
	);
};
