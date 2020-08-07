# The Norton Design System

[![Build Status](https://github.com/wwnorton/design-system/workflows/Integration/badge.svg)](https://github.com/wwnorton/design-system/actions?query=workflow%3AIntegration)
[![codecov](https://codecov.io/gh/wwnorton/design-system/branch/main/graph/badge.svg)](https://codecov.io/gh/wwnorton/design-system)

Styles, components, and utilities for building accessible, responsive products.

## Documentation

General documentation can be found at https://wwnorton.github.io/design-system.
Additionally, [Sassdoc](http://sassdoc.com/) documentation for `@wwnds/core` and
[Storybook](https://storybook.js.org/) documentation for `@wwnds/react` can be
found as subsites of the main documentation:

- https://wwnorton.github.io/design-system/sassdoc
- https://wwnorton.github.io/design-system/storybook

## Repository Structure

This repository uses [lerna](https://lerna.js.org/) to manage design system packages as a [monorepo](https://en.wikipedia.org/wiki/Monorepo).

- [@wwnds/core](packages/core) is the foundation of the design system. It contains modular [Sass](https://sass-lang.com/) declarations, mixins, functions, and design tokens (variables). It is the source of truth for the theming system and default styles. It has no dependencies.
- [@wwnds/react](packages/react) is a [React](https://reactjs.org/) component library implementation of the design system. It depends on `@wwnds/core`.
- [website](website) (https://wwnorton.github.io/design-system) contains documentation usage guides and examples. It depends on both `@wwnds/core` and `@wwnds/react` and uses [Docusaurus](https://v2.docusaurus.io/) as its static site generator.

## Contributing

Any and all contributions are welcome from anyone who would like to help.
To learn more about contributing, please read [the contribution guide](CONTRIBUTING.md).

Because this is a monorepo, a couple extra steps are required to get your local environment ready.

### Environment Setup

The following assumes that you already have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed locally.

1. Clone the repository.
2. Install all workspace dependencies via `yarn`.

```sh
git clone https://github.com/wwnorton/design-system.git
cd design-system
yarn
```

### Developing

All development commands should be run from the root of the repository.

- `npm run build`: run a production build for each library package, outputting to `packages/{package_name}/dist`.
- `npm run dev`: run a development build with watch mode on.
- `npm run storybook`: run `@wwnds/react`'s [Storybook](https://storybook.js.org/) server.
- `npm run dev:docs`: run [`docusaurus start`](https://v2.docusaurus.io/docs/cli#docusaurus-start) for the website.
