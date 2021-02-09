---
title: Typography
---

Our typographical subsystem helps you to create a consistent, flexible typographic style for your application.
Design tokens for [font family](#font-family), [font size](#font-size), [line height](#line-height), and [font weight](#font-weight) give you a granular way to customize type,
and our [typeset](#typesets) convention gives you a flexible and easy way to apply and define composed sets of typographic properties.

## Typesets

A typeset is a composed set of typographical styles that are used for specific purposes.
We include three categories of typesets to be used with body text, UI text, and headings.
All three come in a variety of sizing variants, but you can also define your own typesets as needed.

The default typeset, which is used as the default [body typeset](#body-typesets), utilizes all [base tokens](design-tokens#base-tokens).

```scss title="The default typeset"
@use '@wwnds/core' as nds;

.my-selector {
	@include nds.typeset;
}

// CSS output
// .my-selector {
//   font-family: var(--nds-font-family-base);
//   font-size: var(--nds-font-size-base);
//   line-height: var(--nds-line-height-base);
// }
```

### Body Typesets

Used for content, the body typesets are typically set at the document body to define the defaults for most content.
They always use a font family of `font-family-base` and a line height of `line-height-base`.

| `body-xs`                                                                            | `body-sm`                                                                            | `body-md`                                                                            | `body-lg`                                                                            |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| <div class="body-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div> | <div class="body-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div> | <div class="body-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div> | <div class="body-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div> |

Additionally, the `body-base` typeset uses the base font size token (`font-size-base`).

### UI Typesets

Used for user interface elements where text doesn't typically reflow, the UI typesets have a smaller default line height than body typesets.
They always use a font family of `font-family-base` and a line height of `line-height-3`.

| `ui-xs`                                                                            | `ui-sm`                                                                            | `ui-md`                                                                            | `ui-lg`                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| <div class="ui-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div> | <div class="ui-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div> | <div class="ui-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div> | <div class="ui-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div> |

Additionally, the `ui-base` typeset uses the base font size token (`font-size-base`).

### Heading Typesets

Used to convey hierarchy, the heading typesets create greater vertical separation while still adhering to a consistent vertical rhythm.

| Heading     | Example                                     |
| ----------- | ------------------------------------------- |
| `heading-1` | <div class="h1">Lorem ipsum dolor sit</div> |
| `heading-2` | <div class="h2">Lorem ipsum dolor sit</div> |
| `heading-3` | <div class="h3">Lorem ipsum dolor sit</div> |
| `heading-4` | <div class="h4">Lorem ipsum dolor sit</div> |
| `heading-5` | <div class="h5">Lorem ipsum dolor sit</div> |
| `heading-6` | <div class="h6">Lorem ipsum dolor sit</div> |

## Font Family

Our font family system provides design tokens for sans serif, serif, and monospace
font family types, all defaulting to their respective [system stack](https://systemfontstack.com/).
System stack defaults help us keep the size of the design system down while ensuring
that all devices use a font that looks good on that device.

To customize the font family and ensure a more consistent typographic experience
for your users, simply override the font family design tokens.

| Token                                                         | Customizable | Usage                                                              |
| ------------------------------------------------------------- | ------------ | ------------------------------------------------------------------ |
| <code class="ff-system-sans">font-family-system-sans</code>   | no           | a sans serif system font stack                                     |
| <code class="ff-system-serif">font-family-system-serif</code> | no           | a serif system font stack                                          |
| <code class="ff-system-mono">font-family-system-mono</code>   | no           | a monospace system font stack                                      |
| <code class="ff-sans">font-family-sans</code>                 | yes          | the main sans serif font family                                    |
| <code class="ff-serif">font-family-serif</code>               | yes          | the main serif font family                                         |
| <code class="ff-mono">font-family-mono</code>                 | yes          | the main monospace font family                                     |
| <code class="ff-base">font-family-base</code>                 | yes          | the main font family that will be used throughout your application |
| <code class="ff-headings">font-family-headings</code>         | yes          | the font family that will be used for headings                     |

### Usage Examples

```scss title="Use a font family token"
@use '@wwnds/core' as nds;

.my-serif-selector {
	font-family: var(--nds-font-family-serif);
}
```

```scss title="Set custom serif font as base"
@use '@wwnds/core' with (
	$font-family-serif: 'Lora',
	$font-family-base: var(--nds-font-family-serif),
);

// --nds-font-family-base will resolve to "'Lora', var(--nds-font-family-system-serif)"
```

## Font Size

The main way to control font sizing in the Norton Design System is with the font
size [role tokens](design-tokens#role-tokens). These tokens capture the base font
size for your content, sizes suitable to convey hierarchy (in other words: headings),
and a small subset of t-shirt sizes to help create a consistent sense of scale
for typography in your application.

| Role Token                                  | Default value  | Px equivalent[^1] |
| ------------------------------------------- | -------------- | ----------------- |
| <code class="fs-base">font-size-base</code> | `font-size-md` | `16px`            |
| <code class="fs-xs">font-size-xs</code>     | `font-size-12` | `12px`            |
| <code class="fs-sm">font-size-sm</code>     | `font-size-14` | `14px`            |
| <code class="fs-md">font-size-md</code>     | `font-size-16` | `16px`            |
| <code class="fs-lg">font-size-lg</code>     | `font-size-18` | `18px`            |
| <code class="fs-h1">font-size-h1</code>     | `font-size-32` | `32px`            |
| <code class="fs-h2">font-size-h2</code>     | `font-size-24` | `24px`            |
| <code class="fs-h3">font-size-h3</code>     | `font-size-20` | `20px`            |
| <code class="fs-h4">font-size-h4</code>     | `font-size-18` | `18px`            |
| <code class="fs-h5">font-size-h5</code>     | `font-size-16` | `16px`            |
| <code class="fs-h6">font-size-h6</code>     | `font-size-14` | `14px`            |

Font size [system tokens](design-tokens#system-tokens) form the basis of the font
sizing system. Note that these cannot be modified and always use `rem` units to
ensure that [the user is in charge of text size](https://css-tricks.com/accessible-font-sizing-explained/).

| System Token                            | Value      | Px equivalent[^1] |
| --------------------------------------- | ---------- | ----------------- |
| <code class="fs-10">font-size-10</code> | `0.625rem` | `10px`            |
| <code class="fs-12">font-size-12</code> | `0.75rem`  | `12px`            |
| <code class="fs-14">font-size-14</code> | `0.875em`  | `14px`            |
| <code class="fs-16">font-size-16</code> | `1rem`     | `16px`            |
| <code class="fs-18">font-size-18</code> | `1.125rem` | `18px`            |
| <code class="fs-20">font-size-20</code> | `1.25rem`  | `20px`            |
| <code class="fs-24">font-size-24</code> | `1.5rem`   | `24px`            |
| <code class="fs-32">font-size-32</code> | `2rem`     | `32px`            |
| <code class="fs-40">font-size-40</code> | `2.5rem`   | `40px`            |
| <code class="fs-48">font-size-48</code> | `3rem`     | `48px`            |

<a name="px-rem" class="anchor enhancedAnchor__-node_modules-@docusaurus-theme-classic-lib-theme-Heading-" />

[^1]:
    Since all font sizes are set as [rem](https://developer.mozilla.org/en-US/docs/Web/CSS/length#rem),
    the computed pixel equivalent assumes a browser font size of `16px`.

### Usage Examples

```scss title="Using a font size token"
@use '@wwnds/core' as nds;

.my-large-text {
	font-size: var(--nds-font-size-lg);
}
```

```scss title="Use larger font sizes across your application"
@use '@wwnds/core' with (
	$font-size-xs: var(--nds-font-size-14),
	$font-size-sm: var(--nds-font-size-16),
	$font-size-md: var(--nds-font-size-18),
	$font-size-lg: var(--nds-font-size-20),
);

// --nds-font-size-base is still equal to var(--nds-font-size-md),
// making the base font size equivalent to 18px
```
