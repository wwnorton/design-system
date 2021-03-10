# @wwnds/core

[![Core version](https://img.shields.io/npm/v/@wwnds/core?label=%40wwnds%2Fcore)](https://www.npmjs.com/package/@wwnds/core)

> A [Sass](https://sass-lang.com/) implementation of [the design system's foundations](https://wwnorton.github.io/design-system/docs/foundations) and styling for all [components](https://wwnorton.github.io/design-system/docs/components).

## Usage

All usage guidance is provided in [the developer guide](https://wwnorton.github.io/design-system/docs/guides/dev).

## Developing

The core library makes considerable use of [Sass modules](https://sass-lang.com/documentation/modules) to structure its stylesheets and enable theming through the `@forward...with` syntax.

### Conventions

We follow a handful of conventions to make our stylesheets more manageable and readable.
All contributors should strive to follow these conventions.

1. Declarations **must** be wrapped in a mixin.
   This ensures that declarations never leak on `@forward` or `@use`.
1. Design token defaults **should** be expressed as abstract [Sass variables](https://sass-lang.com/documentation/variables). These aren't compiled and won't result in any CSS output.
   - For example: `$duration-simple: 100ms;`
1. Sass variable tokens **should** be used to set the token as a [CSS custom property](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) prefixed with `--nds-`.
   - For example: `--nds-duration-simple: #{$duration-simple};`.
1. [System tokens](https://wwnorton.github.io/design-system/docs/foundations/design-tokens#system-tokens) (static properties associated with a foundation):
   - **should** be declared on the `:root` element. System tokens are foundational, and should be used globally.
   - **should not** be customizable. In other words, they **should not** include [the `!default` flag](https://sass-lang.com/documentation/variables#default-values).
1. [Role tokens](https://wwnorton.github.io/design-system/docs/foundations/design-tokens#role-tokens) (themeable properties associated with a foundation):
   - **must** be customizable with [the `!default` flag](https://sass-lang.com/documentation/variables#default-values). This makes it possible to override the value on `@forward` or `@use`.
   - **should** be named for their property or their role. If a token sets a single property, name it for its property. If it's used in a more abstract way, name it for what it is trying to accomplish (its role).
     - Property example: `$background-color` if it's used to set the `background-color` property.
     - Role example: `$padding-y` if it's used for both `padding-top` and `padding-bottom`.
1. [Component tokens](https://wwnorton.github.io/design-system/docs/foundations/design-tokens#role-tokens) (properties associated with a component):
   - **should** be set in a standalone `tokens.scss` file adjacent to the component's styles.
   - **should** be customizable with [the `!default` flag](https://sass-lang.com/documentation/variables#default-values).
   - **should** default to existing role tokens whenever possible.
     - Good 👍: `$background-color: var(--nds-background-color) !default;` (role token)
     - Okay 👍: `$border-color: var(--nds-base-color-40) !default;` (system token when no role token exists)
     - Bad 👎: `$background-color: var(--nds-white) !default;` (system token when a role token exists)
     - Worse 👎: `$background-color: #fff !default;` (raw value)
   - **should** be named for their property or their role. If a token sets a single property, name it for its property. If it's used in a more abstract way, name it for what it is trying to accomplish (its role).
     - Property example: `$background-color` if it's used to set the `background-color` property.
     - Role example: `$padding-y` if it's used for both `padding-top` and `padding-bottom`.
   - **should not** be prefixed. Component tokens are prefixed with the component's name when [forwarded by the main entry point](https://sass-lang.com/documentation/at-rules/forward#adding-a-prefix) so including the prefix would result in a doubly-prefixed name (e.g., `$tooltip-tooltip-border-radius`).
