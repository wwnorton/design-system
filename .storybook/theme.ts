import { create } from "storybook/theming";
// @ts-ignore
import seagull from "./seagull.svg";

// Defaults: https://github.com/storybookjs/storybook/blob/main/code/core/src/theming/themes/light.ts
export default create({
	base: "light",

	// Typography
	fontBase:
		"system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, arial, Noto Sans, Liberation Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji, sans-serif", // system-sans

	brandTitle: "Norton Design System",
	brandUrl: "https://wwnorton.github.io/design-system",
	brandImage: seagull,

	// Storybook-specific color palette
	colorPrimary: "#1a8082", // teal-60
	colorSecondary: "#32475e", // navy-80

	// UI
	appBg: "#f2f5f8", // navy-10
	appBorderColor: "#e2e8ee", // navy-20
	appBorderRadius: 2, // radius-base
});
