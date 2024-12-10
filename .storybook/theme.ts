import { create } from "@storybook/theming";
// @ts-ignore
import seagull from "./seagull.svg";

export default create({
	base: "light",
	brandImage: seagull,
	brandTitle: "The Norton Design System Storybook",
	brandUrl: "https://wwnorton.github.io/design-system",

	// colorPrimary: 'var(--nds-primary)',
	// colorSecondary: 'var(--nds-base)',
	// appBg: 'var(--nds-body-bg)',
	// appContentBg: 'var(--nds-base-10)',
	// textColor: 'var(--nds-body-text)',
	// textInverseColor: 'var(--nds-body-bg)',
	// appBorderColor: 'var(--nds-base-20)',
	// appBorderRadius: 'var(--nds-radius-base)',
	// fontBase: 'var(--nds-font-family-base)',
	// fontCode: 'var(--nds-font-family-mono)',
});
