---
title: Writing CSS
---

import { ColorChip } from "../../../src/theme/Color";

Once your [stylesheets have been set up](stylesheet-setup) how you want them, you can start writing CSS with the Norton Design System.

## Theming

The Norton Design System's CSS is fully themeable through the use of Sass variables.
The variables that capture the [foundational style elements](/docs/foundations) constitute the main interface for theming an application.
Refer to [the variables table](core-api#theming-variables) to learn more about these customizable variables.

## Best practices

To get the most out of the Norton Design System's CSS, some best practices should be followed for writing your CSS.

### Use CSS custom properties, not Sass variables

CSS custom properties are live variables that can be modified via JavaScript and will always reference the current value of the token.
Sass variables, on the other hand, are hard-coded into the stylesheet when the CSS is compiled and cannot be changed after that point.

```scss
@use '@wwnds/core';

// 👍 Good: use the CSS custom property
.foo {
	font-family: var(--nds-font-family-serif);
}

// 👎 Bad: use the Sass variable
.foo {
	font-family: core.$font-family-serif;
}
```

### Use role tokens, not system tokens

Using [role tokens](/docs/foundations/design-tokens#role-tokens) will facilitate theming in your application through [customization](stylesheet-setup#customization) since role tokens can be customized and [system tokens](/docs/foundations/design-tokens#system-tokens) cannot.
Refer to the [design token types](/docs/foundations/design-tokens#types-of-design-tokens) inheritance outline for more clarification of this convention.

```scss
@use '@wwnds/core';

// ✨ Best: modify a known role token at this scope (not always possible)
.foo {
	--nds-background-color: var(--nds-base-color-20);
}

// 👍 Good: use the role token
.foo {
	background-color: var(--nds-base-color-20);
}

// 👎 Bad: use the system token
.foo {
	background-color: var(--nds-navy-20);
}
```

### Override token values instead of property values whenever possible

Some tokens, like `text-color` and `background-color` are set globally, using the CSS cascade to style all elements.
Embrace this fundamental feature of CSS, modifying token values at specific scopes to accomplish your goals instead of modifying properties directly.

```scss
@use '@wwnds/core';

// 👍 Good: override the token value and then use it
.foo {
	--nds-text-color: var(--nds-base-color-10);
	--nds-background-color: var(--nds-primary-color-80);

	color: var(--nds-text-color);
	background-color: var(--nds-background-color);
}

// 👎 Bad: override the property value
.foo {
	color: var(--nds-base-color-10);
	background-color: var(--nds-primary-color-80);
}
```

:::note Why?
This will ensure that children of this component that use the role tokens use the locally-scoped values instead of the global ones.

For instance, the [focus-halo](/docs/foundations/accessibility#focus-halo) uses `--nds-background-color` to create the illusion of an offset halo when an element is focused.
If your element's background color is hard-coded as `--nds-primary-color-80`, that focus halo will now have an offset that does not appear to match the background color.
:::
