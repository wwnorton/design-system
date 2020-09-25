---
title: Getting started
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::caution Work in progress
This page is incomplete and may see significant changes.
Please [submit feedback on GitHub](https://github.com/wwnorton/design-system/issues)
if you would like to contribute.
:::

To get started with the design system in your project, install one or more package.
[All packages](https://github.com/wwnorton/design-system/tree/main/packages) are all published to [NPM under the `@wwnds` scope](https://www.npmjs.com/org/wwnds).

Install all packages at once or only the package you need for your project.

```bash
npm install @wwnds/{core,react}
```

## Core

The `@wwnds/core` package contains our CSS framework as Sass modules. To use it, simply
`@use` or `@forward` it in your project. We highly recommend forwarding a configured
version of the design system and using it in your own modules.

```scss title="/my-project/src/main.scss"
@forward '@wwnds/core' with (
	$font-family-base: 'My fancy font',
	$radius-base: var(--nds-radius-xl),
	$primary-family: 'cyan',
);
```

This file can then be `@used` in other files to create modular stylesheets.

```scss title="/my-project/src/reset.scss"
@use 'main' as nds;

@include nds.reset;
```

Similarly, this can be used as the basis for CSS modules.

```scss title="/my-project/src/components/my-button/index.module.scss"
@use '../../main' as nds;

@include nds.button-style;

.my-custom-button {
	background-color: var(--nds-teal-70);

	@include nds.button-base;
}
```

```jsx title="/my-project/src/components/my-button/index.jsx"
import React from "react";
import styles from "./index.module.scss";

// React component definition...
```

### Sassdoc

Additional documentation for `@wwnds/core` can be found on our <a href={useBaseUrl('sassdoc')} target='\_blank' rel='noopener noreferrer'>Sassdoc</a>.

## React

The `@wwnds/react` package is the primary implementation of the components in the design system.
It contains no styling, so while it is not required that you use it with
`@wwnds/core`, it is highly recommended that you use them together.

### Storybook

For detailed examples of all of the components in `@wwnds/react`, view our <a href={useBaseUrl('storybook')} target='\_blank' rel='noopener noreferrer'>Storybook</a>.
