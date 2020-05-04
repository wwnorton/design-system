# @nds/react

> React components for the Norton Design System.

A [React](https://reactjs.org/) implementation of the Norton Design System components, written in [TypeScript](https://www.typescriptlang.org/).

## Usage

To get started, install `@nds/react` as a dependency in your project.

```sh
npm install @nds/react
```

From here, you can start using the components in your application.

```jsx
import React from "react";
import ReactDOM from "react-dom";

// import the React component
import { Button } from "@nds/react";

const App = () => {
  return (
    <main>
      <Button variant="solid">Do something</Button>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
```

### Styling

For the time being, component styles are exclusively provided in `@nds/core` as Sass stylesheets.
If you would like to use the default styles, simply install `@nds/core` alongside `@nds/react` and import the styles in your application.

```sh
npm install @nds/{core,react}
```

**NOTE**: this example assumes that you're using a build system that can load `.scss` files, such as [webpack](https://webpack.js.org/) with [sass-loader](https://github.com/webpack-contrib/sass-loader).

```jsx
import React from "react";
import ReactDOM from "react-dom";

// import the React component AND the corresponding styles
import { Button } from "@nds/react";
import "@nds/core/src/components/button/index.scss";

const App = () => {
  return (
    <main>
      <Button variant="solid">Do something</Button>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
```
