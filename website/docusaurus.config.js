// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Norton Design System",
	tagline:
		"Create beautiful, flexible content and applications, born accessible.",
	url: "https://wwnorton.github.io",
	baseUrl: process.env.BASE_URL || "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "wwnorton",
	projectName: "design-system",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/wwnorton/design-system/edit/main/website/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/wwnorton/design-system/edit/main/website/blog/",
				},
				theme: {
					customCss: require.resolve("./src/scss/main.scss"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "Norton Design System",
				logo: {
					alt: "Norton open source",
					src: "img/seagull-dark.svg",
					srcDark: "img/seagull-light.svg",
				},
				items: [
					{
						to: "docs/foundations",
						label: "Foundations",
						position: "left",
					},
					{
						to: "docs/components",
						label: "Components",
						position: "left",
					},
					{
						to: "docs/patterns",
						label: "Patterns",
						position: "left",
					},
					{
						to: "docs/guides",
						label: "Guides",
						position: "left",
					},
					// { to: 'blog', label: 'Blog', position: 'left' },
					{
						href: "pathname://sassdoc/",
						label: "Sassdoc",
						position: "right",
					},
					{
						href: "pathname://storybook/",
						label: "Storybook",
						position: "right",
					},
					{
						href: "https://github.com/wwnorton/design-system",
						"aria-label": "GitHub",
						title: "GitHub",
						position: "right",
						className: "navbar__link--github",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "W. W. Norton & Company",
						items: [
							{
								label: "Books that Live",
								href: "https://wwnorton.com/who-we-are",
							},
							{
								label: "Catalog",
								href: "https://wwnorton.com/catalog",
							},
							{
								label: "Twitter",
								href: "https://twitter.com/wwnorton",
							},
						],
					},
					{
						title: "External documentation",
						items: [
							// {
							// 	label: 'Blog',
							// 	to: 'blog',
							// },
							{
								label: "Sassdoc",
								href: "https://wwnorton.github.io/design-system/sassdoc",
							},
							{
								label: "Storybook",
								href: "https://wwnorton.github.io/design-system/storybook",
							},
							{
								label: "GitHub",
								href: "https://github.com/wwnorton/design-system",
							},
							{
								label: "NPM",
								href: "https://www.npmjs.com/org/wwnds",
							},
						],
					},
					{
						title: "Changes",
						items: [
							{
								label: "Changelog",
								href: "https://github.com/wwnorton/design-system/blob/main/CHANGELOG.md",
							},
							{
								label: "Releases",
								href: "https://github.com/wwnorton/design-system/releases",
							},
							{
								label: "Migration",
								to: "docs/migration",
							},
						],
					},
				],
				logo: {
					alt: "Norton open source",
					src: "img/seagull-light.svg",
					href: "https://www.wwnorton.com",
					height: 48,
				},
				copyright: `Copyright © ${new Date().getFullYear()} W. W. Norton & Company.`,
			},
			prism: {
				additionalLanguages: ["scss"],
			},
		}),

	themes: ["@docusaurus/theme-live-codeblock"],

	plugins: [
		path.resolve(__dirname, "plugin-nds.js"),
		"docusaurus-lunr-search",
		[
			"@docusaurus/plugin-pwa",
			{
				debug: process.env.NODE_ENV !== "production",
				offlineModeActivationStrategies: ["appInstalled", "queryString"],
				pwaHead: [
					{
						tagName: "link",
						rel: "icon",
						href: "/img/android-chrome-512x512.png",
					},
					{
						tagName: "link",
						rel: "manifest",
						href: "/manifest.json",
					},
					{
						tagName: "meta",
						name: "theme-color",
						content: "rgb(26, 128, 130)",
					},
					{
						tagName: "meta",
						name: "apple-mobile-web-app-capable",
						content: "yes",
					},
					{
						tagName: "meta",
						name: "apple-mobile-web-app-status-bar-style",
						content: "#000",
					},
					{
						tagName: "link",
						rel: "apple-touch-icon",
						href: "https://wwnorton.github.io/design-system/img/android-chrome-512x512.png",
					},
					{
						tagName: "link",
						rel: "mask-icon",
						href: "https://wwnorton.github.io/design-system/img/seagull-dark.svg",
						color: "rgb(50, 71, 94)",
					},
					{
						tagName: "meta",
						name: "msapplication-TileImage",
						content:
							"https://wwnorton.github.io/design-system/img/android-chrome-512x512.png",
					},
					{
						tagName: "meta",
						name: "msapplication-TileColor",
						content: "#000",
					},
				],
			},
		],
	],
};

module.exports = config;
