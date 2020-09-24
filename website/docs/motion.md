---
title: Motion
---

The Norton design system has fully implemented the [Material Design's motion system](https://material.io/design/motion)
and it is highly recommended that you reference Material's guidance when designing
for motion. All motion tokens and utilities are available in the `@wwnds/core` library.

## Design Tokens

<!--
| Token                      | Value                          | Usage                                                                                            |
| -------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------ |
| `duration-scalar`\*        | `1`                            | a multiplier used for increasing/decreasing all motion speed                                     |
| `duration-simple`          | `100ms`                        | simple animations such as selection controls                                                     |
| `duration-simple-enter`    | `150ms`                        | simple entrances such as fade-ins                                                                |
| `duration-simple-exit`     | `75ms`                         | simple exits such as fade-outs                                                                   |
| `duration-complex`         | `200ms`                        | complex animations such as shape changes                                                         |
| `duration-detailed`        | `500ms`                        | detailed animations such as icon transformations                                                 |
| `duration-open`            | `250ms`                        | elements that open from a closed state, such as a sidebar                                        |
| `duration-close`           | `200ms`                        | elements that close from an opened state, such as a sidebar                                      |
| `duration-expand`          | `300ms`                        | used when an element expands (grows)                                                             |
| `duration-collapse`        | `250ms`                        | used when an element collapses (shrinks)                                                         |
| `duration-small`           | `duration-simple`              | elements with small transition areas, such as icons and selection controls, have short durations |
| `duration-medium-expand`   | `duration-open`                | expanding elements with larger transition areas, such as bottom sheets and expanding chips       |
| `duration-medium-collapse` | `duration-close`               | collapsing elements with larger transition areas, such as bottom sheets and expanding chips      |
| `duration-large-expand`    | `duration-expand`              | expanding elements that traverse a large portion of the screen                                   |
| `duration-large-collapse`  | `duration-collapse`            | collapsing elements that traverse a large portion of the screen                                  |
| `easing-standard`          | `cubic-bezier(0.4, 0, 0.2, 1)` | elements that begin and end at rest                                                              |
| `easing-deceleration`      | `cubic-bezier(0, 0, 0.2, 1)`   | incoming elements that end at rest                                                               |
| `easing-acceleration`      | `cubic-bezier(0.4, 0, 1, 1)`   | elements that begin at rest and exit the screen                                                  |
| `easing-sharp`             | `cubic-bezier(0.4, 0, 0.6, 1)` | elements that temporarily exit                                                                   |
-->

| Token                      | Usage                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------ |
| `duration-scalar`\*        | a multiplier used for increasing/decreasing all motion speed                                     |
| `duration-simple`          | simple animations such as selection controls                                                     |
| `duration-simple-enter`    | simple entrances such as fade-ins                                                                |
| `duration-simple-exit`     | simple exits such as fade-outs                                                                   |
| `duration-complex`         | complex animations such as shape changes                                                         |
| `duration-detailed`        | detailed animations such as icon transformations                                                 |
| `duration-open`            | elements that open from a closed state, such as a sidebar                                        |
| `duration-close`           | elements that close from an opened state, such as a sidebar                                      |
| `duration-expand`          | used when an element expands (grows)                                                             |
| `duration-collapse`        | used when an element collapses (shrinks)                                                         |
| `duration-small`           | elements with small transition areas, such as icons and selection controls, have short durations |
| `duration-medium-expand`   | expanding elements with larger transition areas, such as bottom sheets and expanding chips       |
| `duration-medium-collapse` | collapsing elements with larger transition areas, such as bottom sheets and expanding chips      |
| `duration-large-expand`    | expanding elements that traverse a large portion of the screen                                   |
| `duration-large-collapse`  | collapsing elements that traverse a large portion of the screen                                  |
| `easing-standard`          | elements that begin and end at rest                                                              |
| `easing-deceleration`      | incoming elements that end at rest                                                               |
| `easing-acceleration`      | elements that begin at rest and exit the screen                                                  |
| `easing-sharp`             | elements that temporarily exit                                                                   |

\* The `duration-scalar` token is not part of Material Design's motion system.

## Duration Scalar

We've introduced the `duration-scalar` token to help modify transition durations on the fly.
It is highly recommend that you use the `transition` Sass function in `@wwnds/core`
to set your transitions, as it will automatically multiply your duration by the
`duration-scalar` token.

```scss
@use '@wwnds/core' as nds;

.my-sidebar {
	/*
	 * Easing is omitted because the transition function uses
	 * var(--nds-easing-standard) by default.
	 */
	transition: nds.transition(transform, var(--nds-duration-close));
}

.my-sidebar.open {
	transition: nds.transition(transform, var(--nds-duration-open));
}
```

Alternatively, if you'd like to skip the `transition` function, you can multiply
your durations by the `duration-scalar` yourself.

```scss
@use '@wwnds/core' as nds;

.my-sidebar {
	transition: transform calc(
			var(--nds-duration-scalar) * var(--nds-duration-close)
		) var(--nds-easing-standard);
}

.my-sidebar.open {
	transition: transform calc(
			var(--nds-duration-scalar) * var(--nds-duration-open)
		) var(--nds-easing-standard);
}
```

### Reduced Motion

To ensure that [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
is always followed, the `duration-scalar` value is automatically set to `0` when
the user prefers reduced motion. Manually setting a duration that isn't multiplied
by the `duration-scalar` token will result in that duration not being `0` when
the user prefers reduced motion.

If you'd like to set reduced motion manually, you can also do so with the
`.nds-reduced-motion` utility class or the `reduce-motion` Sass mixin.

```scss
@use '@wwnds/core/full' as nds;

.no-motion {
	@include nds.reduce-motion;
}
```

### Debugging motion

During development, it can be useful to slow down durations and easings to ensure
so that you can see the animations in greater detail.
Because the `duration-scalar` token is set as a CSS custom property, it can be used
to increase or decrease all motion speeds across your application.

To modify it during development, simply open your dev tools, click on the
`<html>` element, and change the value of the `--nds-duration-scalar` CSS custom
property to any number greater than `1` to slow down and less than `1` to speed up.
