// cspell:ignore autodocs
import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	core: {
		disableTelemetry: true,
	},

	docs: {
		autodocs: true,
	},

	framework: {
		name: "@storybook/react-vite",
		options: {
			strictMode: true,
		},
	},

	stories: [
		"../packages/react/src/**/*.mdx",
		"../packages/react/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],

	addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
};

export default config;
