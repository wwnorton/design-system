import { dirname, join } from "path";
// cspell:ignore autodocs
import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	core: {
		disableTelemetry: true,
	},

	docs: {},

	framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {
			strictMode: true,
		},
	},

	stories: [
		"../packages/react/src/**/*.mdx",
		"../packages/react/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],

	addons: [
		getAbsolutePath("@storybook/addon-a11y"),
		getAbsolutePath("@chromatic-com/storybook"),
		getAbsolutePath("@storybook/addon-docs"),
		getAbsolutePath("@storybook/addon-vitest"),
	],

	typescript: {
		reactDocgen: "react-docgen-typescript",
	},
};

export default config;

function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, "package.json")));
}
