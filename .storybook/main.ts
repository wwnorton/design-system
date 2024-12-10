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

	stories: ["../packages/react/src/**/*.stories.{ts,tsx,mdx}"],

	addons: [
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@storybook/addon-a11y"),
		getAbsolutePath("@storybook/addon-interactions"),
		"@chromatic-com/storybook",
		getAbsolutePath("@storybook/addon-coverage"),
		getAbsolutePath("@storybook/addon-viewport"),
	],

	typescript: {
		reactDocgen: "react-docgen-typescript",
	},
};

export default config;

function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, "package.json")));
}
