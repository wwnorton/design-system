---
title: Color
---

import { AllFamilies } from '../src/components';

The Norton color system ensures that colors can be used in a predictable way
across your application and content.

:::note Terms
A color **family** is a collection of colors of the same hue.
Individual colors within the family have different brightness and/or saturation.
A color family is referred to by its generic hue name, such as `red`, `teal`, or
`gray`.
By default, every color family contains `10` total **grades**.

A color **grade** is numbered a step corresponding to the brightness of that color.
A higher number corresponds to a darker color and a lower number corresponds to
a lighter color.
By default, grades start at `10` and increase by increments of `10` up to `100`.
:::

## Accessibility

The Norton color system is built to ensure consistent color contrast across all
color families.
To accomplish this, grades are normalized across color families to have a similar
level of color contrast against black or white.
Grades of `60` and higher will always meet [the minimum color contrast ratio for WCAG AA](https://www.w3.org/TR/WCAG21/#contrast-minimum)
when used with pure white (`#fff`).
Conversely, grades of `50` and lower will always meet WCAG AA requirements against
pure black (`#000`).

## Full Family List

The following contains every color in the Norton color system.
Token names (`teal-60`), values (`#1a8082`), and the maximum level of WCAG
conformance against black and white are listed on the color swatch.
In CSS, these will be available as design tokens via CSS custom properties
prefixed with `nds-` (e.g., `--nds-teal-60`).

<AllFamilies />