---
title: Migration
---

This page contains migration guides for specific major changes.

## v1.0.0-beta.3 → v1.0.0-rc.0

The first release candidate contains a couple breaking changes, primarily to design token names.

### Core

`@wwnds/core` contains a handful of breaking changes:

- Some design tokens have been renamed to be more explicit in their roles.
  - See the summary of [updated token names](#design-tokens) for details.
- The entirety of [\_properties.scss](https://github.com/wwnorton/design-system/blob/v1.0.0-beta.3/packages/core/src/_properties.scss) has been removed, as it added complexity without adding much value.
- The following config options were removed:
  - [`$namespace`](https://github.com/wwnorton/design-system/blob/v1.0.0-beta.3/packages/core/src/_config.scss#L8-L9) - the `nds` namespace is now hard-coded to improve readability.
  - [`$css-property-fallback`](https://github.com/wwnorton/design-system/blob/v1.0.0-beta.3/packages/core/src/_config.scss#L14-L16) - build tools can accomplish this more simply.
  - [`$warn-on-missing-fallback`](https://github.com/wwnorton/design-system/blob/v1.0.0-beta.3/packages/core/src/_config.scss#L18-L20)

### React

`@wwnds/react` contains one breaking change to `TextField`.

- `TextField` can no longer be used as an [uncontrolled component](https://reactjs.org/docs/uncontrolled-components.html).
  - If you were using it as an **uncontrolled** component, you'll need to switch to the new `TextFieldUncontrolled`.
  - If you were using it as a **controlled** component, you don't need to change anything.

### Design Tokens

All color role tokens have had the `-color` suffix added to their names.
This should help clarify that the token is a color token.

> Note that all of the following token names are prefixed with `--nds-` in the corresponding CSS custom properties in `@wwnds/core`.

| New Name                 | Previous Name           | Notes                                             |
| ------------------------ | ----------------------- | ------------------------------------------------- |
| `background-color`       | `body-bg`               |                                                   |
| `text-color`             | `body-text`             | Related new token: `text-color-inverse`           |
| `subdued-color`          | `subdued`               |                                                   |
| `focus-ring`             | `focus-color`           | The `focus-ring` token now refers to a box shadow |
| `primary-color-x`        | `primary-x`             | Where `x` is a grade or shade\*                   |
| `base-color-x`           | `base-x`                | Where `x` is a grade or shade\*                   |
| `disabled-color-x`       | `disabled-x`            | Where `x` is a grade or shade\*                   |
| `error-color-x`          | `error-x`               | Where `x` is a grade or shade\*                   |
| `success-color-x`        | `success-x`             | Where `x` is a grade or shade\*                   |
| `warning-color-x`        | `warning-x`             | Where `x` is a grade or shade\*                   |
| `focus-halo-inner-color` | `focus-ring-inner`      |                                                   |
| `focus-halo-outer-color` | `focus-ring`            | `focus-ring` still exists but is now a box shadow |
| `focus-halo`             | `focus-shadow`          |                                                   |
| `focus-ring`             | `focus-shadow-collapse` |                                                   |

\* A grade is a number like `20` and a shade is an adjective like `lighter`.

## `v0.9.x` → `v1.0.0-beta.x`

The first beta release contained many breaking changes, most notably a complete rewrite of `@wwnds/core`.

### `@wwnds/core`

Core now makes full use of [Sass modules](https://css-tricks.com/introducing-sass-modules/) and [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).
If you were previously using `@import` statements to use the design system's Sass, it is highly recommended that you update to `@forward` and `@use`.

#### Entry points

There are two main entry points:

- `@wwnds/core` ([index.scss](https://github.com/wwnorton/design-system/blob/main/packages/core/index.scss)) - pure abstracts for all modules and components. Using this directly will give you the most flexibility but will require the most work.
- `@wwnds/core/full` ([full.scss](https://github.com/wwnorton/design-system/blob/main/packages/core/full.scss)) - a fully-functional stylesheet with a reset and components declared. Using this directly will require little to no work but won't be as flexible as the default entry point.

```scss
@use '@wwnds/core' as nds with (
	$font-family-base: 'Proxima Nova',
);

.my-declaration {
	font-family: var(--nds-font-family-base); // 'Proxima Nova'
	// font-family: nds.$font-family-base;		// alternatively use the Sass variable
	// (these will compile to the same thing)
}
```

View [the @wwnds/core readme](https://github.com/wwnorton/design-system/tree/main/packages/core#readme)
for more about this.

### `@wwnds/react`: `TextField`

- The `label` prop has been removed in favor of `children`.
- The following props have been renamed:
  - `help` → `description`
  - `helpClass` → `descriptionClass`
  - `errorClass` → `errorsClass`

```tsx title="v0.9.x"
<TextField
	label="My text field"
	help="A longer description of the text field."
	helpClass="help"
	errorClass="error"
/>
```

```tsx title="v1.0.0-beta.x"
<TextField
	description="A longer description of the text field."
	descriptionClass="desc"
	errorsClass="errors"
>
	My text field
</TextField>
```

The resulting HTML has also changed to make better use of field composition.
Most notably, the text field is now a modified `field` component instead of a
root "block" (in BEM conventions).
In other words, the "block" class name is now `field` instead of `textfield`.
This was done to reuse field components across form fields.

```html title="v1.0.0-beta.x"
<div class="nds-field nds-field--text nds-field--invalid" id="nds-field-1">
	<div class="nds-field__info">
		<label
			class="nds-field__label"
			for="nds-field-1-input"
			id="nds-field-1-label"
		>
			Default Text Field
		</label>
		<div class="nds-field__desc" id="nds-field-1-desc">
			The default Text Field has a type of "text"
		</div>
	</div>
	<div class="nds-field__group nds-field__group--text">
		<input
			id="nds-field-1-input"
			class="nds-field__input nds-field__input--text"
			aria-describedby="nds-field-1-desc"
			aria-invalid="true"
			type="text"
			value=""
			required=""
			aria-errormessage="nds-field-1-err"
		/>
	</div>
	<div class="nds-field__feedback">
		<ul
			class="nds-field__errors"
			id="nds-field-1-err"
			aria-label="Errors"
			aria-live="assertive"
			aria-atomic="true"
		>
			<li>This nds-field is required.</li>
		</ul>
	</div>
</div>
```
