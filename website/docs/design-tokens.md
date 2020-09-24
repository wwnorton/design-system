---
title: Design Tokens
---

We capture all of our design elements as discrete entities tokens called **design tokens**.

Design tokens have a **static name** and a **variable value**, allowing you to theme the entire design of an application with design tokens alone.
Most design tokens have a default value assigned, which effectively represents the default theme of the Norton Design System.
But since token values can be changed, you can simply reassign the value to begin creating a theme for a Norton Design System application.

:::note Prefix Note
In CSS, our design tokens start with `--nds-`, but that prefix is omitted in most places in our documentation.
:::

<!-- Note: this might be better suited as a blog post -->
<!-- ## Thinking with Tokens

One of the first hurdles to making the most of design tokens is to begin thinking about design elements with tokens, which have more meaning than values.
For instance, when choosing an element's background color, instead of picking a hex value (`#5e4fab`, maybe), you can simply pick a token (`purple-70` in this case). -->

## Types of Design Tokens

The Norton Design System contains three types of design tokens: [**system**](#system-tokens), [**role**](#role-tokens), and [**component**](#component-tokens) tokens, which are used in conjunction to capture the entire design of an application.

:::info Inheritance
The three types of tokens use the following system of inheritance in the Norton Design System.

- Abstract: `component token` → `role token` → `system token`
- Concrete: `button-color` → `primary-color` → `teal-60`

And in CSS as implemented by `@wwnds/core`:

```css
:root {
	--nds-teal-60: #1a8082; /* system token */
	--nds-primary-color: var(--nds-teal-60); /* role token */
}

.my-button {
	--nds-button-color: var(--nds-primary-color); /* component token */

	background-color: var(--nds-button-color); /* token usage */
}
```

:::

### System Tokens

A **system** token is associated with one of our various subsystems, such as the color, motion, spacing, or typography systems.

- System tokens are _immutable_&mdash;their values cannot be changed&mdash;because they are intended to act as a value store rather than part of the theming system.
- System token names don't give hints as to how they should be used. This is because they are simply property values and could be used in a variety of ways.
- System tokens should rarely be used directly.

### Role Tokens

A **role** token has a semantic purpose in an application's design.

- Role tokens are customizable and together constitute the primary way to theme a Norton Design System application.
- Role token names do give hints about how they should be used.
- Role tokens are the primary interface for theming and should therefore be used directly whenever possible.

### Component Tokens

A **component** token is scoped to a specific component.

- Component tokens are customizable but changing their values may result in inconsistency across components.
- Component token names generally follow the pattern of `{component}-{property}`, where `component` is the name of the component and `property` captures the CSS property where the token is used.
  - Examples: `button-border-width` or `tooltip-offset-y`.
- Component tokens can and should be used directly when creating custom components based on a Norton Design System component.
