# @wwnds/core

[![Core version](https://img.shields.io/npm/v/@wwnds/core?label=%40wwnds%2Fcore)](https://www.npmjs.com/package/@wwnds/core)

> Vanilla CSS, HTML, and JavaScript implementations of the Norton Design System.

Note: because `@wwnds/core` uses Sass modules, [dart-sass](https://github.com/sass/dart-sass)
must be used to compile your project's Sass. [node-sass](https://github.com/sass/node-sass) will not work.

## Usage

To get started, install `@wwnds/core` as a dependency in your project.

```sh
npm i @wwnds/core
```

And then use components and foundations in Sass or just use the full CSS stylesheet in your project.

### Entry points

We expose three Sass entry points:

- `@wwnds/core` - the default entry point includes all abstracts, tokens, and `:root` declarations, but no other declarations.
  - Use this if you want to use the design system in a modular fashion.
  - Note that [this entry point may be different for sass-loader](#usage-with-sass-loader) environments.
- `@wwnds/core/full` - the full entry point includes everything, including all component declarations.
  - Use this if you want everything in one stylesheet and don't need it to be modular.
- `@wwnds/core/tokens` - the design tokens and their corresponding `:root` declarations, but nothing else.
  - Use this if you just want to use the design tokens as the building blocks for your own styles.

### Modular usage

To import modular stylesheets, start by forwarding [a configured version](#configuration), which will be the basis of all modules.
Note that the following examples may require some modification if you are using
Webpack to bundle your Sass. See more about this in the [Usage with sass-loader](#usage-with-sass-loader) section.

```scss
// my-app/src/nds.scss
@forward '@wwnds/core' with (
  // ...custom config...
);
```

Set the reset styles to use our reset. It's recommended to isolate this in its own stylesheet.

```scss
// my-app/src/reset.scss
@use './nds';

// use the reset, which includes the `:root` properties plus HTML styles based on Bootstrap
@include nds.reset;
```

Use your configured version of the design system inside your modules or components.

```scss
// my-app/src/components/button.scss
@use '../nds' as *; // note: using as "*" imports all members to the global scope

// override properties before using them
$primary: var(--nds-cyan-60);

@include button-style;

.my-custom-button {
	// use @wwnds/core functions
	font-family: sans("Proxima Nova");
	// use custom properties directly
	border-radius: var(--nds-radius-xl);

	// use @wwnds/core mixins
	@include sr-only;
}
```

### Full CSS usage

Using the full CSS is one of the easiest ways to use the design system out of the box, but it is not [configurable](#configuration).

This can be done in JavaScript if you are using a build tool that is capable of resolving `@wwnds/core`, such as Webpack's style-loader.

```javascript
import "@wwnds/core/dist/main.css";
```

Or, if you just want to embed it in HTML, you can copy the `node_modules/@wwnds/core/dist/main.css` file to your project and just use it.
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

- [`@forward` configuration](https://sass-lang.com/documentation/at-rules/forward#configuring-modules) (preferred)
- [`@use` configuration](https://sass-lang.com/documentation/at-rules/use#configuration) (okay)
- [`@import` configuration](https://sass-lang.com/documentation/at-rules/import#configuring-modules-through-imports) (discouraged)

The `@forward` technique is preferred as it gives you a single, opinionated version of the design system that you can use across your application.
Note that [Sass intends to deprecate and eventually remove `@import`](https://sass-lang.com/documentation/at-rules/import) entirely, so use it at your own risk.

## Usage with sass-loader

Because [sass-loader](https://github.com/webpack-contrib/sass-loader) uses Webpack's
module resolution, using `@wwnds/core` requires some additional steps.

First, make sure that `sass-loader` is using the `sass` implementation, not the
`node-sass` implementation: [sass-loader `implementation`](https://github.com/webpack-contrib/sass-loader#implementation).

Second, make sure that imports begin with `~` and any references to the root
`index.scss` are explicit:

```scss
// with sass-loader
@use '~@wwnds/core/index' as nds;

// with normal sass compilation
@use '@wwnds/core' as nds;
```
