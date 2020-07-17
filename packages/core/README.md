# @nds/core

> Vanilla CSS, HTML, and JavaScript implementations of the Norton Design System.

## Usage

To get started, install `@nds/core` as a dependency in your project.
Import components and foundations in Sass or just use the full CSS stylesheet in your project.

### Modular usage

The design system was built to be modular.
To import modular stylesheets, start by forwarding [a configured version](#configuration), which will be the basis of all modules.

```scss
// ./my-app/src/styles/core.scss
@forward '@nds/core/index' with (
  // ...custom config...
);
```

Set the reset styles, which includes the required `:root` CSS properties.

```scss
// ./my-app/src/styles/reset.scss
@use './core';

// preferred: use the reset, which includes the `:root` properties.
@include core.reset-style;

// alternatively, set the `:root` properties yourself (not recommended).
// :root {
//   @include core.root-style;
// }
```

Use your configured version of the design system inside your modules or components.

```scss
// ./my-app/src/styles/components/button.scss
@use '../core' as *;

@include button-style;

.my-custom-button {
  padding: spacing-px-rem(20);
  font-family: props("font-family-serif");
}
```

### Full CSS usage

Using the full CSS is one of the easiest ways to use the design system out of the box, but it is not [configurable](#configuration).

This can be done in JavaScript if you are using a build tool that is capable of resolving `@nds/core`, such as Webpack's style-loader.

```javascript
import "@nds/core/dist/main.css";
```

Or, if you just want to embed it in HTML, you can copy the `node_modules/@nds/core/dist/main.css` file to your project and just use it.
This will eventually be posted to a CDN for easier usage.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Awesome NDS project</title>
    <link rel="stylesheet" href="path/to/main.css" />
  </head>
  <body>
    <!-- awesome HTML -->
  </body>
</html>
```

### Configuration

Any Sass variable with the `!default` flag can be configured through the following Sass techniques.

- [`@forward` configration](https://sass-lang.com/documentation/at-rules/forward#configuring-modules) (preferred)
- [`@use` configuration](https://sass-lang.com/documentation/at-rules/use#configuration) (okay)
- [`@import` configuration](https://sass-lang.com/documentation/at-rules/import#configuring-modules-through-imports) (discouraged)

The `@forward` technique is preferred as it gives you a single, opinionated version of the design system that you can use across your application.
Note that [Sass intends to deprecate and eventually remove `@import`](https://sass-lang.com/documentation/at-rules/import) entirely, so use it at your own risk.
