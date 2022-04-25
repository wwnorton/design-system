# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.5.0](https://github.com/wwnorton/design-system/compare/v1.4.0...v1.5.0) (2022-04-25)

### ♻️ Refactor

- move misc tokens to their own file ([229f04e](https://github.com/wwnorton/design-system/commit/229f04e693c623be1dd510847b1f9c4c03f63153))
- set all :root foundations in one place ([13b68f9](https://github.com/wwnorton/design-system/commit/13b68f943d940f2eece5714901147161ae869f75))

### ✨ Features

- add mixin to set tokens on any selector ([de3847e](https://github.com/wwnorton/design-system/commit/de3847e7cb0bff7c49761ace24de66bcb83e8ec9))

## [1.4.0](https://github.com/wwnorton/design-system/compare/v1.3.2...v1.4.0) (2022-04-06)

### 🐛 Bug Fixes

- **core:** remove listbox dependency in dropdown ([61eb3bf](https://github.com/wwnorton/design-system/commit/61eb3bfc92f429da4f0081d5a47dd62f96a021a3))
- **core:** restore bottom-margin-only typesets ([bf1a737](https://github.com/wwnorton/design-system/commit/bf1a737c455db66648202fce450e24f42418b4fd))
- **motion:** ensure that motion durations scale with the scalar unit ([2631c35](https://github.com/wwnorton/design-system/commit/2631c352032add883c8a0115353379ac211da803))
- **visual:** use correct modal vertical spacing ([eec06da](https://github.com/wwnorton/design-system/commit/eec06da3095622a16f6240b758c7817b947e4a8d))

### ✨ Features

- initial step indicator component ([36e2224](https://github.com/wwnorton/design-system/commit/36e222475f5797cca13c162b2938fe81a4a79b9a))

### [1.3.2](https://github.com/wwnorton/design-system/compare/v1.3.1...v1.3.2) (2021-12-21)

### 💄 Visual design

- **button:** change the cursor to "not-allowed" when disabled ([d597250](https://github.com/wwnorton/design-system/commit/d5972504af050db7f895f54ee7d2099e4f8a7854))

### 📝 Documentation

- publish first draft of the usable writing guidelines ([fbb0313](https://github.com/wwnorton/design-system/commit/fbb03135b6494d451bc309b6a2a978f23b12917b))

### ♻️ Refactor

- **dropdown:** reimagine style mixin extension ([430858e](https://github.com/wwnorton/design-system/commit/430858ef4cb3af0f6305bda25b555493b84f40ab))
- **dropdown:** switch to new Listbox & Popper ([2710a2a](https://github.com/wwnorton/design-system/commit/2710a2a0a7379fdb6b1524a31e9960f41ba4f482))

### [1.3.1](https://github.com/wwnorton/design-system/compare/v1.3.0...v1.3.1) (2021-08-25)

### 🐛 Bug Fixes

- **core:** make all component tokens configurable using "with" ([4fb0221](https://github.com/wwnorton/design-system/commit/4fb02211997099cce36ef93c5811ea2b24d1c175))
- **core:** make sass@1.33.x an optional peer dependency ([11eaf3f](https://github.com/wwnorton/design-system/commit/11eaf3f013dc32267b52d0d497b53aa641cf414c))
- **core:** prevent duplicate dependency errors on customization ([6e2ef54](https://github.com/wwnorton/design-system/commit/6e2ef545311eecb1b5f23de89d1afe5055e2ddea))
- **textfield:** allow the Textfield multiline component to expand vertically and horizontally ([c02b1ee](https://github.com/wwnorton/design-system/commit/c02b1eefedb802db9ee32178e4ce6789377ea371))

## [1.3.0](https://github.com/wwnorton/design-system/compare/v1.2.0...v1.3.0) (2021-08-17)

### 🐛 Bug Fixes

- **core:** remove default focus z-index ([2ccae23](https://github.com/wwnorton/design-system/commit/2ccae234d3bbeaff8fe2a8bfdcccd102267723e9))

### ✨ Features

- initial badge implementation ([97a5e23](https://github.com/wwnorton/design-system/commit/97a5e237bcf52c98de455c8732a79489aec0f8d2))
- **listbox:** add default listbox and option styling ([aae5942](https://github.com/wwnorton/design-system/commit/aae594249366820fcfb4e0074d0a43c726ca832a))
- **motion:** add fade transition ([71124e5](https://github.com/wwnorton/design-system/commit/71124e514b3a41e0c8fbc07727eb653614fdd809))
- **tag:** initial tag implementation ([2590936](https://github.com/wwnorton/design-system/commit/2590936ec4a27e518305e566dba35100a15a1f35))

### ♻️ Refactor

- **core:** black and white are system tokens ([0ceb830](https://github.com/wwnorton/design-system/commit/0ceb830f2b8a5b1a2a0b644f4f4ef80a579133b7))
- **core:** remove default selection styling ([5af2a09](https://github.com/wwnorton/design-system/commit/5af2a092f1e6e37434f3f266cf9e233a0cee041c))
- **core:** undeclared properties cannot be null ([ed0426d](https://github.com/wwnorton/design-system/commit/ed0426d8118639cda6bbf7fd50823991a7eafb67))
- **core:** use data-color-scheme for theming ([0bda516](https://github.com/wwnorton/design-system/commit/0bda516718407420ddfd8a3d674e75257a32d772))
- **core:** use new sass div syntax ([219ee4d](https://github.com/wwnorton/design-system/commit/219ee4d306ec4fcd1b5079a27145f67ccd7dff31))
- **popover:** use "distance" for offset token ([a221bf4](https://github.com/wwnorton/design-system/commit/a221bf4ad326072442232f1cf69d024582478de3))
- **popover:** use updated popper tokens ([f444f48](https://github.com/wwnorton/design-system/commit/f444f48dbea6b19d268a68b4c6d0a5fdd38c4662))
- **popper:** promote popper sass to real component ([74d2f46](https://github.com/wwnorton/design-system/commit/74d2f4689fc5ff2ed4d52c7fa260b0b7044e7374))
- **tooltip:** use "distance" for offset token ([f3ccc6a](https://github.com/wwnorton/design-system/commit/f3ccc6a2fb57461d3ed6f4fb4011924f5043563d))
- **tooltip:** use updated popper tokens ([b21f868](https://github.com/wwnorton/design-system/commit/b21f86832ae678e7e53903339835fbe1b3a94109))

### [1.2.1](https://github.com/wwnorton/design-system/compare/v1.2.0...v1.2.1) (2021-05-10)

### ♻️ Refactor

- **core:** black and white are system tokens ([92afac1](https://github.com/wwnorton/design-system/commit/92afac1befb40f8ac24d840626918b3458e05889))
- **core:** use data-color-scheme for theming ([5220a9d](https://github.com/wwnorton/design-system/commit/5220a9dede085bf3b1835f17ac86307fec29044e))

## [1.2.0](https://github.com/wwnorton/design-system/compare/v1.1.1...v1.2.0) (2021-04-26)

### ✨ Features

- **link:** initial component, context, and hook ([1a924db](https://github.com/wwnorton/design-system/commit/1a924db8dfc9b7614d400b090f6230b345b7207d))

### 💄 Visual design

- **typography:** update system stack ([8becdb0](https://github.com/wwnorton/design-system/commit/8becdb0bca93669a3d26efc54f46a0661051554d)), closes [/github.com/twbs/bootstrap/blob/2d2f5b3dfd901bca22133ae25fdcce7afb4042c7/scss/\_variables.scss#L419](https://github.com/wwnorton//github.com/twbs/bootstrap/blob/2d2f5b3dfd901bca22133ae25fdcce7afb4042c7/scss/_variables.scss/issues/L419)

### 🐛 Bug Fixes

- **core:** correction Purple-70 ([#131](https://github.com/wwnorton/design-system/issues/131)) ([c4ba15d](https://github.com/wwnorton/design-system/commit/c4ba15d775423083dfb8eeae9ddbc694866f1d1a))
- **modal:** vqa ([#104](https://github.com/wwnorton/design-system/issues/104)) ([dadf0af](https://github.com/wwnorton/design-system/commit/dadf0af31b5327ab09f17a107785cbbd582c1578))

### [1.1.1](https://github.com/wwnorton/design-system/compare/v1.1.0...v1.1.1) (2021-04-06)

### 📝 Documentation

- update all readmes ([630f0db](https://github.com/wwnorton/design-system/commit/630f0db45ab0d54c0f77ec4682715416d564b32a))

### ♻️ Refactor

- **tooltip:** simplify styling; enable light scheme ([4051646](https://github.com/wwnorton/design-system/commit/4051646b12bf9eff3fe85b849f99ae47892e0c68))

## [1.1.0](https://github.com/wwnorton/design-system/compare/v1.0.1...v1.1.0) (2021-02-23)

### 📝 Documentation

- **sassdoc:** reset is part of the main api ([f9c5235](https://github.com/wwnorton/design-system/commit/f9c52350e4deb0fc7e6ee5e97c2bae13862cc8b6))

### 🐛 Bug Fixes

- **choice-field:** prevent control from shrinking ([4078dfb](https://github.com/wwnorton/design-system/commit/4078dfb1ca787b159d6184430dbcb8e4d5196d44))
- **core:** prevent accidental root declarations ([463152b](https://github.com/wwnorton/design-system/commit/463152bdcb7a0844ab6413c0d553614cb15d5b5d))
- **typography:** thin weight should be 100 ([ec25444](https://github.com/wwnorton/design-system/commit/ec25444e668b65f84b962b65454fb7e477098b39))
- disable the not-focus-visible for now ([ef33289](https://github.com/wwnorton/design-system/commit/ef33289336749fbddf0172bae64008e07bbbf077))

### ♻️ Refactor

- **callout:** adjust dismiss button position for border top or right when title exists ([5d2f652](https://github.com/wwnorton/design-system/commit/5d2f652b74f8534657cf2d1a9cd12c077ea3cfe9))
- **callout:** change callout padding from spacing-8 to spacing-6 ([3d9b274](https://github.com/wwnorton/design-system/commit/3d9b27406e8d51d902a56c3601132b623570d152))
- **callout:** vertically align svg in icon to text-bottom ([308bea9](https://github.com/wwnorton/design-system/commit/308bea997ba87b17508ef09f3fed3b62c0c90a59))
- **reset:** clean up :not(:focus-visible) ([131ff90](https://github.com/wwnorton/design-system/commit/131ff90ea91bd00905bd05d287655c6c9e30e14c))
- **sassdoc:** move the type alias ([c4932c9](https://github.com/wwnorton/design-system/commit/c4932c9a7b0901f2478041c2b731a6f5b59d3588))

### ✨ Features

- **callout:** initial callout implementation ([bcba538](https://github.com/wwnorton/design-system/commit/bcba538b08967df71ccac8c28dedb78dc601f103))
- **core:** add and use focus functions ([a1ad140](https://github.com/wwnorton/design-system/commit/a1ad140b923826e269e7060a29312269eb10183f))
- **core:** add initial shadow tokens ([e110e7b](https://github.com/wwnorton/design-system/commit/e110e7bb5b3f1a970ba431024f514e3ccabc2aa9))
- **popover:** initial popover implementation ([7c71ee5](https://github.com/wwnorton/design-system/commit/7c71ee58285d29c0b5723885fa2d23e67b628eb0))
- **progress:** initial spinner & progressbar implementations ([3127cc4](https://github.com/wwnorton/design-system/commit/3127cc46c43b98567eeb72fe0e3ff88d4fc88134))

### [1.0.1](https://github.com/wwnorton/design-system/compare/v1.0.0...v1.0.1) (2020-12-17)

### 🛠 Maintenance

- switch to lodash-es for lodash methods ([a5080c3](https://github.com/wwnorton/design-system/commit/a5080c30c29b813cd88d271cc7be30b3da6d830b))
- use lodash, not lodash-es ([746be7c](https://github.com/wwnorton/design-system/commit/746be7cd299f31ff15feb586dda399fa54367589))
- use relative lodash packages ([952250c](https://github.com/wwnorton/design-system/commit/952250ca593f933aa5d4e6fa6a72f6a73aece7e6))
- **core:** update build to use umd name ([5be3f0b](https://github.com/wwnorton/design-system/commit/5be3f0b27d943c8ff1c5a54a277c416c0a5164b0))

## [1.0.0](https://github.com/wwnorton/design-system/compare/v1.0.0-rc.1...v1.0.0) (2020-11-30)

### ✨ Features

- **core:** add button color role variants ([3604b0e](https://github.com/wwnorton/design-system/commit/3604b0e4b7bf8cdd65ec91d3344a04683d12a7a9))

### 💄 Visual

- **core:** don't let disclosure markers shrink ([8c7ad7d](https://github.com/wwnorton/design-system/commit/8c7ad7d4bc998bb2cc906bd11b1319a86bb88d8a))
- **core:** invalid TextField border should be error-color ([137f3b8](https://github.com/wwnorton/design-system/commit/137f3b8050920087175a9a04387e9755dcf7c72b))

### ♻️ Refactor

- **core:** consolidate color utilities ([a689920](https://github.com/wwnorton/design-system/commit/a689920c6d8061eeda0390d881566610ae5c1af8))
- **core:** make scheme maps customizable ([74e942a](https://github.com/wwnorton/design-system/commit/74e942a9a006fd632d9d10d48b6538f3e99db953))
- **core:** reorganize token :root declarations ([1a501f1](https://github.com/wwnorton/design-system/commit/1a501f1592dde598aea3c1a62461a85813e0ba13))
- **core:** use token, not property ([d62a6ec](https://github.com/wwnorton/design-system/commit/d62a6ec6ef9fb37115a36600a27ff8df2ad7b596))

### 🐛 Bug Fixes

- **core:** ensure that focus is visible above other z-index ([ec365b1](https://github.com/wwnorton/design-system/commit/ec365b1aba89099afbd1fed3c0d0ce68e7455851))
- **core:** make button color grade configurable ([8c1b16e](https://github.com/wwnorton/design-system/commit/8c1b16e1d4c61532a450e1d78eb1787020facfae))
- **core:** modal title shouldn't have a bottom margin ([c44cf94](https://github.com/wwnorton/design-system/commit/c44cf945bb3d928e5e19a253769be74102849101))
- **core:** set modal z-index ([b4114f4](https://github.com/wwnorton/design-system/commit/b4114f40a52a2054e17f6b5bb537b77b9b0ffa77))
- **core:** use correct selection text color ([f7615c8](https://github.com/wwnorton/design-system/commit/f7615c8a376ea0e103da003ebca44e1bc703c036))

## [1.0.0-rc.0](https://github.com/wwnorton/design-system/compare/v1.0.0-beta.3...v1.0.0-rc.0) (2020-09-25)

### ⚠ BREAKING CHANGES

- **core:** role color tokens have been renamed to include the
  `-color` suffix. See the migration guide for details.
- **core:** the `$namespace` config option has been removed. All
  tokens and declarations are now hard-coded with the `nds` namespace.
- **core:** the `prop` function has been removed. Custom properties
  are now used and declared directly.
- **core:** remove custom property fallbacks
- **core:** remove optional namespacing

### ♻️ Refactor

- **core:** add typing and improve config comments ([21b657d](https://github.com/wwnorton/design-system/commit/21b657d4a629449556d6a3ab7c850b85272b3f6f))
- **core:** change "utilities" to "helpers" ([7109a44](https://github.com/wwnorton/design-system/commit/7109a44f0d2f63bb9063e0c87403bc888bfab780))
- **core:** make device tokens overrideable ([1a46ce9](https://github.com/wwnorton/design-system/commit/1a46ce9ecfff1f12c8b25484cf407e61bb4c0a6d))
- **core:** remove device tokens ([d37659b](https://github.com/wwnorton/design-system/commit/d37659bbd658455f9e90c55664130a7a8694ba9b))
- **core:** simplify structure and api ([88b4a2d](https://github.com/wwnorton/design-system/commit/88b4a2d77763f42a71c53bd6089398ff68ebbb04))
- **core:** swap root/src entrypoints ([984c943](https://github.com/wwnorton/design-system/commit/984c94311eb125b6ceb4b275a5c2980f080cb4c9))
- **core:** update components to use new api ([568a2a2](https://github.com/wwnorton/design-system/commit/568a2a2cc9745e87f06b68468bd639f3d698fd85))
- **core:** update main export to use helpers/utilities ([1de7da8](https://github.com/wwnorton/design-system/commit/1de7da8c0549e39bcee0d1aab5424427584fb32c))
- **core:** use values in media queries ([9b2befb](https://github.com/wwnorton/design-system/commit/9b2befb351448cc431b27bd52461d9143c145a2f))

### 🐛 Bug Fixes

- **core:** use correct default duration ([01d094b](https://github.com/wwnorton/design-system/commit/01d094b010d6ef83f72c8b0c2e910bc182a3e7d5))

### ✨ Features

- **core:** add color utilities ([57a62f2](https://github.com/wwnorton/design-system/commit/57a62f265aa806d71d2126498cf5dcc949b42c27))
- **core:** add config for :focus-visible polyfill ([7641a2d](https://github.com/wwnorton/design-system/commit/7641a2d5d0ef7b732f510ff136c25638b8902db2))
- **core:** add configs for link styling; remove unused configs ([acfad2b](https://github.com/wwnorton/design-system/commit/acfad2b65ef8596246563728e2c422289b8fc74b))
- **core:** add configurable link component styles ([a8d3ff3](https://github.com/wwnorton/design-system/commit/a8d3ff34287387b45d566d15b81417ae9b980018))
- **core:** add modal keys to spacer map ([00ae10d](https://github.com/wwnorton/design-system/commit/00ae10d4b58f900dfa148bdb0f1a24accba684f1))
- **core:** add spacing utilities ([8f5b186](https://github.com/wwnorton/design-system/commit/8f5b1862bc570707771c1d57256b363744d807de))
- **core:** add tokens entrypoint ([0a4990d](https://github.com/wwnorton/design-system/commit/0a4990ddd7dfde2841d4e39a1dbaad165056fd0d))
- **core:** add tokens entrypoint ([fb83c28](https://github.com/wwnorton/design-system/commit/fb83c28d463594bef9ab5cda10eebe94ae37c0ed))
- **core:** add utility api ([0ad9428](https://github.com/wwnorton/design-system/commit/0ad942893632c533bad9e5e2cac0657043c2d8d8))
- **core:** remove custom property fallbacks ([a429dc1](https://github.com/wwnorton/design-system/commit/a429dc15db78f2064a2c26739c2a0068334fb6b8))
- **core:** remove optional namespacing ([0410649](https://github.com/wwnorton/design-system/commit/04106493dff7a6c59d399e37f11e250526ee82e2))

### 📝 Documentation

- **core:** update core readme ([cafb97a](https://github.com/wwnorton/design-system/commit/cafb97a7260f2b0d65ec0ea2d0cad46e754fa7f8))
- add motion design tokens and `duration-scalar` docs ([f683083](https://github.com/wwnorton/design-system/commit/f683083cb58c2d42e3ed5511f20cf77f86c3ca9b))

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
