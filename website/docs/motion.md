---
title: Motion
---

:::caution Work in progress
This page is incomplete and may see significant changes.
Please [submit feedback on GitHub](https://github.com/wwnorton/design-system/issues)
if you would like to contribute.
:::

The Norton design system has fully implemented the [Material Design's motion system](https://material.io/design/motion)
and it is highly recommended that you reference Material's guidance when designing
for motion. All motion tokens and utilities are available in the `@wwnds/core` library.

## Reduced motion

To ensure that [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
is always followed, it is highly recommend that you use the `transition` Sass
function in `@wwnds/core` to set your transitions.
This will multiply the provided duration by the `duration-scalar` token, which
is automatically set to `0` when the user prefers reduced motion.

```scss
@use '@wwnds/core' as nds;

.my-sidebar {
	transition: nds.transition(transform, var(--nds-duration-close));
}

.my-sidebar.open {
	transition: nds.transition(transform, var(--nds-duration-open));
}
```

## Debugging motion

During development, it can be useful to slow down durations and easings to ensure
so that you can see the animations in greater detail.
The design system provides a special `duration-scalar` token to help with this.
To modify it, simply open your dev tools, click on the `<html>` element, and
change the value of the `--nds-duration-scalar` property to any number.
Since all durations are multiplied by this token, all motion will automatically
scale along with it.
