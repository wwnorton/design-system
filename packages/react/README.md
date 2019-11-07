# @nds/react

> React components for the Norton Design System.

A [React](https://reactjs.org/) implementation of the Norton Design System components, written in [TypeScript](https://www.typescriptlang.org/).

## Usage

To get started, install `@nds/react` as a dependency on your project.

```sh
npm install @nds/react
```

This will install both the React components and the [core library](../core).
From here, you can start using the components in your application.

```jsx
import * as React from "react";

// import the React component
import { ToggleButton } from "@nds/react";
// if you'd like the styles, also import the corresponding declarations
import "@nds/core/src/components/button/index.scss";

const MyApp = () => {
  return (
    <main>
      <ToggleButton on={true}>Notifications</ToggleButton>
    </main>
  );
};

export default MyApp;
```
