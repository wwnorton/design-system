# @nds/core

> Core CSS, HTML, and JavaScript implementations of the Norton Design System

Core provides [design tokens](https://css-tricks.com/what-are-design-tokens/) and modular component styling via SCSS-flavored [Sass](https://sass-lang.com/).
A tiered theming system allows you to either leave everything as-is to use the reasonable defaults, or customize the entire look and feel by specifying overrides for the design tokens.

## Usage

To get started, install `@nds/core` as a dependency on your project.

```sh
npm install @nds/core
```

From here, there are a variety of ways to use the core stylesheets, depending on your type of project.

### Select Components

One of the most common use-cases is applying component styles directly to your components.
This can be done either by using our own declarations or by using the corresponding mixins.
Declarations are always in the component's `index.scss` file.

```scss
// Import all the button declarations with default tokens
@import "node_modules/@nds/core/src/components/button/index";
```

To override default tokens, declare their value _before_ importing the declarations.

```scss
// Import all the tokens first so $green is available
@import "node_modules/@nds/core/src/globals/scss/tokens";

// Override button-specific tokens
$button-color-base: $green;

// Import all the button declarations, applying the override
@import "node_modules/@nds/core/src/components/button/index";
```

Alternatively, import the component mixins and use them on your own declarations.

```scss
// Import and use the button mixins
@import "node_modules/@nds/core/src/components/button/mixins";

.my-btn {
  @include button-base;
  @include button-primary($green);
}
```

#### Webpack

The above approach can also be used for Webpack projects.
For instance, in a React component with [sass-loader](https://webpack.js.org/loaders/sass-loader/):

```jsx
import "@nds/core/src/components/button/index.scss";

export const MyButton = () => (
  <button className="button button--primary">My Button</button>
);
```

### All the Sass

All tokens, mixins, functions, and component declarations are available in `/src/scss/main.scss`.

```scss
// optionally override design tokens by declaring them before importing the design system
$focus-ring-color: #228522;

@import "node_modules/@nds/core/scss/main";
```

### All the CSS

A monolithic CSS file with all class declarations is available in the `/dist/css` directory.
This is not recommended if you'd like to do much customization but is great for quick prototyping.

```html
<html>
  <head>
    <link href="nds-core.css" rel="stylesheet" />
  </head>
  <body>
    <main>
      <p>Lorem ipsum...</p>
    </main>
  </body>
</html>
```
