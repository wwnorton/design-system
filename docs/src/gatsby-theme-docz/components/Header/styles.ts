export {
	wrapper, menuIcon, menuButton, innerContainer, editButton,
} from 'gatsby-theme-docz/src/components/Header/styles';

export const link = {
	my: 2,
	display: 'block',
	color: 'sidebar.navGroup',
	textDecoration: 'none',
	fontSize: 2,
	'&.active': {
		color: 'sidebar.navLinkActive',
	},
};

export const headerLink = {
	mr: 3,
	bg: 'header.link.bg',
	color: 'link',
	textDecoration: 'none',
	'&:hover': {
		textDecoration: 'underline',
	},
};
