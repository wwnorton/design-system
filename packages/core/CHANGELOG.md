# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.0-beta.3](https://github.com/wwnorton/design-system/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2020-08-17)

### 💄 Visual

- **core:** double modal content top-padding ([9f2bf4e](https://github.com/wwnorton/design-system/commit/9f2bf4ec1601070a35489cede452fe9998f51cb2))
- **core:** expand button spacing slightly ([a4baee2](https://github.com/wwnorton/design-system/commit/a4baee28862e59276860bb79453aa56085596870)), closes [gitlab#155](https://github.com/wwnorton/gitlab/issues/155)
- **core:** modal title should be full width when alone ([3dc1f65](https://github.com/wwnorton/design-system/commit/3dc1f65e948848ddfd3445536ad6a93eca822bd2))

### 🛠 Maintenance

- fix spelling errors ([caa8284](https://github.com/wwnorton/design-system/commit/caa8284a7952cbc802204ca1953ffa35aebb9691))
- ignore spelling in core disclosure ([e4c321b](https://github.com/wwnorton/design-system/commit/e4c321b99d7f32623bae363d9769c59bd28e28af))

### ♻️ Refactor

- **core:** add t-shirt sizing to inline sizing ([d0688d1](https://github.com/wwnorton/design-system/commit/d0688d1f3aaf9738d61a6ca5f64f45bcaca62fbd))
- **core:** clean up disclosure styling ([1cec431](https://github.com/wwnorton/design-system/commit/1cec43118ee17a0c53b0329a8e7ae49d4ca40e43))
- **core:** simplify switch spacing ([94b54ca](https://github.com/wwnorton/design-system/commit/94b54caf19d9e37ae95a99964e0429f832d3c3b8))

### 🐛 Bug Fixes

- **core:** make sure that all files are published ([9daaceb](https://github.com/wwnorton/design-system/commit/9daacebb9a6247d08bc1d6cf9d1e0b8e8c0e80c8))

# [1.0.0-beta.2](https://github.com/wwnorton/design-system/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2020-08-07)

### Bug Fixes

- **core:** set correct success/warning families ([5b12169](https://github.com/wwnorton/design-system/commit/5b12169293d5aa36c1aaf9cfbfb9ae9c3242dc98))

# [1.0.0-beta.1](https://github.com/wwnorton/design-system/tree/main/packages/core/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2020-07-30)

### Bug Fixes

- **core:** only transition disclosure's transform property ([99c1740](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/99c17405b65625b9377899faebb998d7558c8740))

### Features

- **core:** add initial utility declarations ([d4c85b3](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/d4c85b34345ca708b1ac1a847a47375fd5f510be))
- **core:** add tokens map, to be used as JSON output ([e88d234](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/e88d234cd6d168962353bc25c79046dcb2de0e93))

### Performance Improvements

- reduce grade iterations ([2eb2b56](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/2eb2b56bb5971651c4c9f63efee0280cdf203e3b))

* chore!: update the scope (nds -> wwnds) ([1c10f9f](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/1c10f9fe79dd10b8b6d518e5a1d0e47b4643b5e1))

### BREAKING CHANGES

- The design system scope is now `@wwnds`. Uninstall `@nds/{core,react}` and reinstall `@wwnds/{core,react}` to update and then change all imports to use the new package names.

# [1.0.0-beta.0](https://github.com/wwnorton/design-system/tree/main/packages/core/compare/v0.9.4...v1.0.0-beta.0) (2020-07-17)

### Code Refactoring

- **core:** rewrite radio using new api ([7ef134a](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/7ef134ac9d7a6fbc4c76b6ef7e8d9d7c651d5e3a))

### Features

- **core:** add "typeset" family of typography mixins ([185e775](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/185e775707514ddd566e1114c938566b5bb192db))
- **core:** add blue and purple, tweak red & green ([165e591](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/165e5915e8748ae8fee84a75015d2a501befba5a)), closes [#136](https://github.com/wwnorton/design-system/tree/main/packages/core/issues/136)
- **core:** add config for duplicate declarations ([553f453](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/553f453e6e1f458898cbe83e4e571d14e996711c))
- **core:** add config for enabling the dark scheme ([6fb773b](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/6fb773b87e22040094a9a37c02deb659f103cfe6))
- **core:** add field partials ([3d0065b](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/3d0065b191bc270db7b0b3c53a093005c40c3c46))
- **core:** add initial z-index tokens ([8d59e31](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/8d59e312f3bfe788c4a34c92f5f76b8f9bc5455d)), closes [#19](https://github.com/wwnorton/design-system/tree/main/packages/core/issues/19)
- **core:** add radius tokens ([4312b98](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/4312b9855806aa2a03cbe1e0c7a3705c08dd8219)), closes [#109](https://github.com/wwnorton/design-system/tree/main/packages/core/issues/109)
- **core:** add role-token mapping helpers ([25e3925](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/25e3925983a49ca7dacc5524832065191fb9bdce))
- **core:** add subtle transition to focus ring ([d3dcc69](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/d3dcc69617c7a057a111d787749e79b0281cb7aa))
- **core:** complete rewrite ([9f8a3d5](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/9f8a3d56bf262d955b1e2060bfe534230e09a36b))
- **core:** implement role-based line-heights ([b8e3c45](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/b8e3c45dea489b9479fcce9bbb34c19def9049ba))
- **core:** implement role-based spacers ([49b4cf8](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/49b4cf847eb293ecac6dc958d71ac2b6e29d970f))
- **core:** initial link styling, all through css props ([ae83a2e](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/ae83a2ed2165a414f2c7fbf13d60d4abe68eab15))
- **core:** initial modal implementation ([2550f8b](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/2550f8b59cf50effb7bca766024dc16bd4af0a0f))
- **core:** initial tooltip styles ([d24b1b2](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/d24b1b24425ad92394339f1bdd0dfca34106f05d))
- **core:** introduce block-spacer-base token ([2fa49f3](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/2fa49f327d507885d17f3acb98c4cd472d002a55))
- **core:** make typeset mixins globally configurable ([9ea6a0c](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/9ea6a0ce286a16c998e08e0cd3f6def376a045a5))
- **dropdown:** add composite focus indicator to listbox ([28e3aad](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/28e3aad039052d4fda00b2fe0a58631c13ccf9ea))

### BREAKING CHANGES

- **core:** `Radio` now uses a `Field` class structure, similar to `TextField` and `Checkbox`.

# [0.9.0](https://github.com/wwnorton/design-system/tree/main/packages/core/compare/v0.8.1...v0.9.0) (2020-05-31)

**Note:** Version bump only for package @wwnds/core

## [0.8.1](https://github.com/wwnorton/design-system/tree/main/packages/core/compare/v0.8.0...v0.8.1) (2020-05-08)

**Note:** Version bump only for package @wwnds/core

# [0.8.0](https://github.com/wwnorton/design-system/tree/main/packages/core/compare/v0.7.0...v0.8.0) (2020-05-02)

### Bug Fixes

- **core:** reduce focus ring rect by 1px ([2d3d0b1](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/2d3d0b11bea2d0054dd0eb973e0feb19a0158e25))

### Features

- **core:** initial dropdown tokens, mixins, and declarations ([596602a](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/596602a9c81bbab4a65cd5fa6f78baf442fc04e5))

# [0.7.0](https://github.com/wwnorton/design-system/tree/main/packages/core/compare/v0.6.1...v0.7.0) (2020-04-01)

### Bug Fixes

- **button:** 1px button borders ([ff40118](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/ff40118bed791a0edb089b99cbcdebe9455fe6d6)), closes [#97](https://github.com/wwnorton/design-system/tree/main/packages/core/issues/97)
- **button:** use correct token ([bacc2f6](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/bacc2f6ffebb514f7e7c8510f5c7b5396f54bfb8))
- **core:** ghost button should be transparent ([70711f2](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/70711f2fefca434656eee688d61cf904ec3d6bfb))

## [0.6.1](https://github.com/wwnorton/design-system/tree/main/packages/core/compare/v0.6.0...v0.6.1) (2020-03-03)

### Bug Fixes

- **core:** add missing components ([13688c7](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/13688c756c077f1b4848b95a760731d95dae1163))
- **core:** import missing component tokens ([c1e27c2](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/c1e27c2221fcfca5c4d142fc654f2ce3a4decc37))

# [0.6.0](https://github.com/wwnorton/design-system/tree/main/packages/core/compare/v0.5.1...v0.6.0) (2020-02-28)

### Bug Fixes

- **react:** position checkbox control the same as radio ([377c654](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/377c6541d28fac66ac7c56caf785ba15d13de3cc))
- fix styling for radio when its disabled ([a3e90cd](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/a3e90cd04371cd80ea0f168912e35e1b0c9290c5))

### Features

- **core:** add icon-only button modifier & declaration ([8fb9ec6](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/8fb9ec61fd781d7ec5ac6b74e1493d471a659376))
- **core:** add multiple choice ([39db26e](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/39db26e41455da37c0b8738f86101212af541d44))
- **core:** add very basic icon styling ([3eaa343](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/3eaa343bb48fdcc00c8e41b7d80eda6b83769763))
- add sass radio styles ([677bbed](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/677bbed1404df793c30f576a3636a653f04be60e))
- **core:** initial icon ([c9867cd](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/c9867cdf1d1384e1f30106bafd8420f98e5c2cd5))

## [0.5.1](https://github.com/wwnorton/design-system/tree/main/packages/core/compare/v0.5.0...v0.5.1) (2020-02-04)

### Bug Fixes

- build all files to root of dist ([7698a82](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/7698a8286ac1dcbdd7ae04858468f8821e7b3720))

# [0.5.0](https://github.com/wwnorton/design-system/tree/main/packages/core/compare/v0.4.0...v0.5.0) (2020-01-31)

### Bug Fixes

- **core:** reset needs tokens ([cb11d21](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/cb11d213e8f33a8159e484779f455f93da6fbdfe))
- **core:** use the correct destination ([e0fd22f](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/e0fd22fed7a2b8822543c6dee0e50c6d37690596))

### Features

- **a11y:** improve aria markup of checkbox ([134f466](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/134f466737c2ada8d2ed874fe5c2b8d35934a2b5))
- **core:** add motion duration multiplier ([5618427](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/56184271a3da51d7272dec17b3dd68f3a2b7429f))
- **core:** add reduce-motion mixin ([2a88388](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/2a88388dee4cb494e854443d80d52652e64e5aca))
- **core:** add sr-only mixin ([725a3c6](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/725a3c6f9c83e8006dd10f76ce24c5c7004053fc))
- **core:** validation errors now render in lists ([d82134e](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/d82134e7c450ed94159363bc503f0aa76b2184d2))
- add checkbox to @wwnds/core ([8023ef9](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/8023ef99681a6f99f12094f3bfd904ff477ee01d))
- **core:** initial disclosure styling ([e8ddaf9](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/e8ddaf92cb72651be0c0ffb1ae89b56d69b18170))

# [0.4.0](https://github.com/wwnorton/design-system/tree/main/packages/core/compare/v0.3.0...v0.4.0) (2020-01-02)

### Bug Fixes

- update colors saturation ([816a3a2](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/816a3a219c79d3717c6997d9bebc4fc0822e52ff))
- use bem-style class names ([bd92dcd](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/bd92dcdb04958edafdc4537f964331fe3b20a14f))

### Features

- **core:** add :focus-visible for the future 🚀 ([56695c9](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/56695c90e5fff148b1001c791ec24ebaac0fbe47))
- **core:** initial textfield implementation ([15a66c4](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/15a66c46758c659ab04c36966429a639c8310c93))
- **core:** initial toggle/switch styling ([6c847fd](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/6c847fd3f480599fc1541434b8240fda0e3d3bb0))
- **react:** initial disclosure implementation ([f1ca740](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/f1ca7401ce1bc04d29143811e4281691aab13783))

# [0.3.0](https://github.com/wwnorton/design-system/tree/main/packages/core/compare/v0.2.1...v0.3.0) (2019-11-27)

### Features

- add initial font stack ([6ee1d42](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/6ee1d42e1c01de4371253668f9913784290b995a)), closes [#34](https://github.com/wwnorton/design-system/tree/main/packages/core/issues/34)
- add initial state colors ([933fbd0](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/933fbd0aae05d8cf5550fe7938bd11fd8ff04e64)), closes [#20](https://github.com/wwnorton/design-system/tree/main/packages/core/issues/20)
- use powers of 10 for all color steps ([03b3237](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/03b3237e0572e85a15f0ddcef4034072a5d71ef4)), closes [#47](https://github.com/wwnorton/design-system/tree/main/packages/core/issues/47)
- **core:** add font smoothing mixin ([ae3fa3a](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/ae3fa3a18a80ff7ef7977c0af2441b5d1ac443a6))
- **core:** add hd media query mixin and tokens ([c819ab0](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/c819ab05987dbe5a05c1f3ef0c496046ee4fc536))
- **core:** initial reset - font smoothing on body ([70500d1](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/70500d1197b8d59a1df8965c924a434b2e75edbe))

## [0.2.1](https://github.com/wwnorton/design-system/tree/main/packages/core/compare/v0.2.0...v0.2.1) (2019-11-07)

**Note:** Version bump only for package @wwnds/core

# [0.2.0](https://github.com/wwnorton/design-system/tree/main/packages/core/compare/v0.1.0...v0.2.0) (2019-10-31)

### Features

- consolidate into core package ([05dec0d](https://github.com/wwnorton/design-system/tree/main/packages/core/commit/05dec0d37599eb31e64058fee9ab526193a8a34c))

# 0.1.0 (2019-09-27)

### Features

- **components:** initial button implementation ([5ad44d1](https://github.com/wwnorton/design-system/tree/main/packages/components/commit/5ad44d1))
- **components:** initial components structure ([e59f2e9](https://github.com/wwnorton/design-system/tree/main/packages/components/commit/e59f2e9))
