---
title: Migration
---

This page will contain migration guides when features are deprecated or new major versions are introduced.

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
```

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

<!--
The resulting HTML has also changed to make better use of field composition.

```html title="v0.9.x"
```

```html title="v1.0.0-beta.x"
<div class="field field--text field--invalid" id="field-1">
	<div class="field__info">
		<label class="field__label" for="field-1-input" id="field-1-label">
			Default Text Field
		</label>
		<div class="field__desc" id="field-1-desc">
			The default Text Field has a type of "text"
		</div>
	</div>
	<div class="field__group field__group--text">
		<input
			id="field-1-input"
			class="field__input field__input--text"
			aria-describedby="field-1-desc"
			aria-invalid="true"
			type="text"
			value=""
			required=""
			aria-errormessage="field-1-err"
		/>
	</div>
	<div class="field__feedback">
		<ul
			class="field__errors"
			id="field-1-err"
			aria-label="Errors"
			aria-live="assertive"
			aria-atomic="true"
		>
			<li>This field is required.</li>
		</ul>
	</div>
</div>
``` -->
