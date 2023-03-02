# The Norton Design System

[![Build status](https://img.shields.io/github/checks-status/wwnorton/design-system/main?label=Checks)](https://github.com/wwnorton/design-system/actions?query=workflow%3AIntegration+branch%3Amain)
[![Code coverage](https://img.shields.io/codecov/c/github/wwnorton/design-system?label=Coverage&token=UFQXP4Y1IB)](https://codecov.io/gh/wwnorton/design-system)
[![Core version](https://img.shields.io/npm/v/@wwnds/core?label=%40wwnds%2Fcore)](https://www.npmjs.com/package/@wwnds/core)
[![React version](https://img.shields.io/npm/v/@wwnds/react?label=%40wwnds%2Freact)](https://www.npmjs.com/package/@wwnds/react)

A design system built by W. W. Norton & Company.

View all documentation at https://wwnorton.github.io/design-system.

## Repository Structure

This repository uses [workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) to manage design system packages as a [monorepo](https://en.wikipedia.org/wiki/Monorepo).

- [@wwnds/core](packages/core) is an implementation of the design system's styles and [foundations](https://wwnorton.github.io/design-system/docs/foundations).
  It contains modular [Sass](https://sass-lang.com/) declarations, mixins, functions, and design tokens (variables).
  It is the source of truth for the theming system and default styles.
- [@wwnds/react](packages/react) is a [React](https://reactjs.org/) component library implementation of the design system.
  It has no styling and is designed to work well with `@wwnds/core`.
- [website](website) (https://wwnorton.github.io/design-system) contains the actual design system.
  It depends on both `@wwnds/core` and `@wwnds/react` and uses [Docusaurus](https://v2.docusaurus.io/) as its static site generator.

## Contributing

Any and all contributions are welcome from anyone who would like to help.
To learn more about contributing, please read [the contribution guide](CONTRIBUTING.md).

Because this is a monorepo, a couple extra steps are required to get your local environment ready.

### Environment Setup

The following assumes that you already have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed locally.

1. Clone the repository.
2. Install all [workspace](https://docs.npmjs.com/cli/v7/using-npm/workspaces) dependencies via `npm@7+`.

```sh
git clone https://github.com/wwnorton/design-system.git
cd design-system
npm install
```

### Developing

All development commands should be run from the root of the repository.

- `npm run storybook`: the [Storybook](https://storybook.js.org/) server for `@wwnds/react`.
  Useful for component development.
- `npm run dev:docs`: start the [Docusaurus server](https://v2.docusaurus.io/docs/cli) for the website.
  Useful for writing documentation or full design system development.
- `npm run build`: run a production build for each library package, outputting to `packages/{package_name}/dist`.
  Useful for testing production builds.
- `npm run test`: run unit tests.
