import { dirname, join } from "path";
const path = require('path');

/** @type {import('@storybook/core-common').StorybookConfig} */
const storybookConfig = {
    core: {
        disableTelemetry: true
    },

    features: {
	  storyStoreV7: true,
	},

    webpackFinal: (config) => {
		config.module?.rules?.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		});

		config.target = 'browserslist:last 2 versions';

		// Return the altered config
		return config;
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

    framework: {
        name: getAbsolutePath("@storybook/react-webpack5"),

        options: {
          builder: {
            fsCache: true
          }
        }
    },

    docs: {
        autodocs: true
    }
};

module.exports = storybookConfig;

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, "package.json")));
}
