// cspell:ignore autodocs
import { dirname, join } from "path";
const path = require('path');

/** @type {import('@storybook/react-vite').StorybookConfig} */
const storybookConfig = {
    core: {
		builder: '@storybook/builder-vite',
        disableTelemetry: true,
    },

    features: {
	  storyStoreV7: true,
	},

    stories: [path.resolve(__dirname, '../packages/react/src/**/*.stories.{ts,tsx,mdx}')],

    addons: [
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@storybook/addon-actions"),
		getAbsolutePath("@storybook/addon-a11y"),
	],

    typescript: {
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) => {
				if (prop.parent) {
					return !prop.parent.fileName.includes('node_modules');
				}
				return true;
			},
		},
	},

    framework: '@storybook/react-vite',

    docs: {
        autodocs: true
    }
};

module.exports = storybookConfig;

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, "package.json")));
}
