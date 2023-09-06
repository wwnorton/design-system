// cspell:ignore autodocs
import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    core: {
        disableTelemetry: true
    },

    docs: {
        autodocs: true
    },

    framework: {
        name: "@storybook/react-vite",
        options: {
			strictMode: true,
		},
    },

    stories: ['../packages/react/src/**/*.stories.{ts,tsx,mdx}'],

    addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-a11y',
	],
};

export default config;
