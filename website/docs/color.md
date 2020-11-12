---
title: Color
---

import { AllFamilies, ColorChip } from "../src/theme/Color";

The Norton color system ensures that colors can be used in a predictable way
across your application and content.

:::note Terms
A color **family** is a collection of colors of the same hue.
Individual colors within the family have different brightness and/or saturation.
A color family is referred to by its generic hue name, such as `red`, `teal`, or `gray`.
By default, every color family contains `10` total **grades**.

A color **grade** is numbered a step corresponding to the brightness of that color.
A higher number corresponds to a darker color and a lower number corresponds to a lighter color.
By default, grades start at `10` and increase by increments of `10` up to `100`.
:::

## Design Tokens

The Norton color system uses two types of design tokens for color:

- **System** tokens, which have static (unchangeable) values for their grades.
  - These follow a naming pattern of `nds-{family}-{grade}`, such as `nds-cyan-30`.
- **Role** tokens, which have customizable values for their grades.
  - These follow a naming pattern of `nds-{role}-color-{grade}`, such as `nds-primary-color-60`.

### System Tokens

The following chart contains all system family colors in the Norton color system.
Token names (`teal-60`), values (`#1a8082`), and the maximum level of WCAG conformance against black and white are listed on the color swatch.
The color system also includes pure `white` (`#fff`) and `black` (`#000`) and tokens, which are not documented in the family list.

<AllFamilies />

### Role Tokens

All color roles reference either a single color or a family of colors.
When a role color references an entire family, its grades will map one-to-one.

#### Single-value role tokens

The following role tokens map to a single value.

| Token                        | Default value                             | Usage                                                         |
| ---------------------------- | ----------------------------------------- | ------------------------------------------------------------- |
| `background-color`           | <ColorChip>white</ColorChip>              | The main background color                                     |
| `text-color`                 | <ColorChip>base-color-90</ColorChip>      | The main text color                                           |
| `text-color-inverse`         | <ColorChip>background-color</ColorChip>   | A contrasting text color                                      |
| `subdued-color`              | <ColorChip>base-color-60</ColorChip>      | De-emphasized, muted, or subdued content                      |
| `selection-background-color` | <ColorChip>primary-color</ColorChip>      | The background color of user-selected text (`::selection`)    |
| `selection-text-color`       | <ColorChip>text-color-inverse</ColorChip> | The text color of user-selected text (`::selection`)          |
| `focus-color`                | <ColorChip>blue-50</ColorChip>            | The color used when an element has been focused (`:focus`)    |
| `focus-halo-inner-color`     | <ColorChip>background-color</ColorChip>   | The inner color of the [focus halo](accessibility#focus-halo) |
| `focus-halo-outer-color`     | <ColorChip>focus-color</ColorChip>        | The outer color of the [focus halo](accessibility#focus-halo) |

#### Family role tokens

Role tokens that map to an entire family use two configuration options to determine the mapping:

- A `family` that references a color family's name (e.g., "cyan").
  - Configured with the `${role}-family` Sass option.
- An optional `grade` that defines the midpoint of the [shade map](#shade-maps).
  - Configured with the `${role}-grade` Sass option.

| Role       | Default family | Default grade | Usage                                                   |
| ---------- | -------------- | ------------- | ------------------------------------------------------- |
| `primary`  | `"teal"`       | `60`          | The family used in components that have a default color |
| `base`     | `"navy"`       | undefined     | Background, border, or shadow gradients                 |
| `disabled` | `"base"`       | `30`          | Not currently usable, non-interactive                   |
| `error`    | `"red"`        | `60`          | Error, danger, or incorrect                             |
| `success`  | `"green"`      | `60`          | Success, passing, or correct                            |
| `warning`  | `"yellow"`     | `60`          | Warning or caution                                      |

The result will include an entire 10-grade family for the role, plus a [shade map](#shade-maps) if a midpoint grade is defined.

For example, setting `$primary-family` to `"purple"` and `$primary-grade` to `70` results in the following shade and family map.

<div class="example-shade">

| Shade                   | Value                                   |
| ----------------------- | --------------------------------------- |
| `primary-color-lighter` | <ColorChip>primary-color-50</ColorChip> |
| `primary-color-light`   | <ColorChip>primary-color-60</ColorChip> |
| `primary-color`         | <ColorChip>primary-color-70</ColorChip> |
| `primary-color-dark`    | <ColorChip>primary-color-80</ColorChip> |
| `primary-color-darker`  | <ColorChip>primary-color-90</ColorChip> |
| `primary-color-10`      | <ColorChip>purple-10</ColorChip>        |
| `primary-color-20`      | <ColorChip>purple-20</ColorChip>        |
| `primary-color-30`      | <ColorChip>purple-30</ColorChip>        |
| `primary-color-40`      | <ColorChip>purple-40</ColorChip>        |
| `primary-color-50`      | <ColorChip>purple-50</ColorChip>        |
| `primary-color-60`      | <ColorChip>purple-60</ColorChip>        |
| `primary-color-70`      | <ColorChip>purple-70</ColorChip>        |
| `primary-color-80`      | <ColorChip>purple-80</ColorChip>        |
| `primary-color-90`      | <ColorChip>purple-90</ColorChip>        |
| `primary-color-100`     | <ColorChip>purple-100</ColorChip>       |

</div>

In Sass, these options can be configured globally on use:

```scss
@use '@wwnds/core' with (
	$primary-family: 'purple',
	$primary-grade: 70,
);
```

Or you can apply them with the provided Sass utilities:

```scss
@use '@wwnds/core' as nds;

.my-purple-element {
	// .set() applies a list or map of values as CSS custom properties
	@include nds.set(
		$nds-primary-color: nds.family("primary-color", "purple", 70)
	);
}
```

#### Shade maps

When mapping color families to other color families, you can choose to include a midpoint grade, resulting in a 5-grade shade map.

| Shade            | Description                | Example                 |
| ---------------- | -------------------------- | ----------------------- |
| `{role}-lighter` | two grades lighter (`-20`) | `primary-color-lighter` |
| `{role}-light`   | one grade lighter (`-10`)  | `primary-color-light`   |
| `{role}`         | the midpoint shade         | `primary-color`         |
| `{role}-dark`    | one grade darker (`+10`)   | `primary-color-dark`    |
| `{role}-darker`  | two grades darker (`+20`)  | `primary-color-darker`  |

### Color Schemes

Customizing the color system's [role tokens](design-tokens#role-tokens) is one of the easiest ways to begin theming an application.
We ship default light and dark and color schemes, but you are encouraged to create your own scheme(s) to suit your needs.
By default, the dark color scheme uses the same color families as the light scheme but simply inverts the grade scale.

See the `$light-scheme` and `$dark-scheme` maps in the
[color tokens stylesheet](https://github.com/wwnorton/design-system/blob/main/packages/core/src/color/tokens.scss)
for a closer look at how this is accomplished.

:::caution Work in progress
The dark color scheme is still being tested and must be turned on with the `$enable-dark-scheme` flag at this time.

```scss
@use '@wwnds/core' as nds with (
	$enable-dark-scheme: true,
);
```

:::

## Accessibility

The Norton color system is built to ensure consistent color contrast across all color families.
To accomplish this, grades are normalized across color families to have a similar level of color contrast against black or white.
Grades of `60` and higher will always meet [the minimum color contrast ratio for WCAG AA](https://www.w3.org/TR/WCAG21/#contrast-minimum) when used with pure white (`#fff`).
Conversely, grades of `50` and lower will always meet WCAG AA requirements against pure black (`#000`).
