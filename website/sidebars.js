module.exports = {
	guides: [
		'guides/index',
		{
			type: 'category',
			label: 'Development',
			collapsed: false,
			items: [
				'guides/dev/getting-started',
				'guides/dev/stylesheet-setup',
				'guides/dev/writing-css',
				'guides/dev/core-api',
				'guides/dev/react-api',
				// 'principles',
				// 'migration',
			],
		},
		'guides/usable-writing-guidelines',
	],
	foundations: [
		'foundations/index',
		'foundations/accessibility',
		'foundations/design-tokens',
		'foundations/color',
		'foundations/typography',
		'foundations/spacing',
		'foundations/motion',
	],
	components: [
		'components/index',
		// 'components/accordion',
		'components/badge',
		'components/button',
		'components/callout',
		'components/checkbox',
		'components/choice-field',
		'components/disclosure',
		'components/dropdown',
		// 'components/icon',
		// 'components/layout-grid',
		'components/link',
		'components/modal',
		'components/popover',
		'components/progress-bar',
		'components/radio-group',
		'components/spinner',
		'components/switch',
		'components/text-field',
		'components/table',
		'components/tag',
		'components/tooltip',
		'components/react-providers',
	],
};
