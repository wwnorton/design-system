# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-beta.2](https://github.com/wwnorton/design-system/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2020-08-07)

- feat(react)!: provide access to core tooltip props in components that use tooltips ([e7df6fd](https://github.com/wwnorton/design-system/commit/e7df6fd0bc4042d4b72a7526a15c18d976ac0e65))

### Bug Fixes

- **core:** set correct success/warning families ([5b12169](https://github.com/wwnorton/design-system/commit/5b12169293d5aa36c1aaf9cfbfb9ae9c3242dc98))

### BREAKING CHANGES

- the `hideTooltipDelay` prop that was used in `Button`/`IconButton`/`Switch` has been removed. Use `tooltipProps={{ hideDelay: n }}` to replicate the behavior.

# [1.0.0-beta.1](https://github.com/wwnorton/design-system/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2020-07-30)

With this release, the scope has been changed from `@nds` to `@wwnds` to allow us to publish on the public NPM registry.
To update, you will need to uninstall `@nds/{core,react}` and then install `@wwnds/{core,react}`.

```sh
npm un @nds/{core,react}
npm i @wwnds/{core,react}
```

### Bug Fixes

- **core:** only transition disclosure's transform property ([99c1740](https://github.com/wwnorton/design-system/commit/99c17405b65625b9377899faebb998d7558c8740))
- **react:** ensure that returnFocus doesn't have side effects ([eec5d6c](https://github.com/wwnorton/design-system/commit/eec5d6c9201809db85afdf1d89804ee5bc1613fd))
- **react:** move deprecated keypress listener to keydown ([6306316](https://github.com/wwnorton/design-system/commit/6306316d3d0e882599785fff88b63bea615636e2))
- **react:** render FieldInfo children in a fragment ([266e0d8](https://github.com/wwnorton/design-system/commit/266e0d88a082848b9c523b0bddf2c69607a330b1))
- **react:** SVGElement does not exist on global ([f950cce](https://github.com/wwnorton/design-system/commit/f950cce50435d0de0efd0139182f401f0da97eda))

### Features

- **core:** add initial utility declarations ([d4c85b3](https://github.com/wwnorton/design-system/commit/d4c85b34345ca708b1ac1a847a47375fd5f510be))
- **core:** add tokens map, to be used as JSON output ([e88d234](https://github.com/wwnorton/design-system/commit/e88d234cd6d168962353bc25c79046dcb2de0e93))
- **react:** explicitly disallow click listeners on icons ([10066de](https://github.com/wwnorton/design-system/commit/10066de64fd0a8e58f09791e7a04474a2e942212))

### Performance Improvements

- reduce grade iterations ([2eb2b56](https://github.com/wwnorton/design-system/commit/2eb2b56bb5971651c4c9f63efee0280cdf203e3b))

# [1.0.0-beta.0](https://github.com/wwnorton/design-system/compare/v0.9.4...v1.0.0-beta.0) (2020-07-17)

### Bug Fixes

- **a11y:** dropdown should not have aria-expanded ([fdb6c09](https://github.com/wwnorton/design-system/commit/fdb6c09445ac71b8e92ec4774c62049489bc8c5d))
- **react:** clear timeout on cleanup to prevent memory leak ([f1b991e](https://github.com/wwnorton/design-system/commit/f1b991e3093ad452f5448f81eb556ac7856a633b))
- **react:** remove the path from the a11y tree to prevent double speak ([4f2b5ca](https://github.com/wwnorton/design-system/commit/4f2b5ca59648421646ecd28669b4497dca695fba))

### Code Refactoring

- TextField uses children for its label ([413649f](https://github.com/wwnorton/design-system/commit/413649f99f35fc4e67922dac4720c10699c25315))
- **core:** rewrite radio using new api ([7ef134a](https://github.com/wwnorton/design-system/commit/7ef134ac9d7a6fbc4c76b6ef7e8d9d7c651d5e3a))
- **react:** rewrite checkbox as forwardRef ([6f313c0](https://github.com/wwnorton/design-system/commit/6f313c0e1c77f9d91956a599dd2b314a711e423f))
- include close button by default ([7b44d6c](https://github.com/wwnorton/design-system/commit/7b44d6cd14a03368e405fef6551eebd98e457239))
- **react:** remove focus callbacks ([fbfeb26](https://github.com/wwnorton/design-system/commit/fbfeb26cf6521330176207d2726220008754c33b))
- **react:** simplify user-defined initial focus ([2c228b0](https://github.com/wwnorton/design-system/commit/2c228b059a5fd992b427a1f35a44fd1d241f9a5b))
- extend other field components ([09d5bc4](https://github.com/wwnorton/design-system/commit/09d5bc49fc4848719d7a0a405fa101ab57bfab94))

### Features

- **core:** add "typeset" family of typography mixins ([185e775](https://github.com/wwnorton/design-system/commit/185e775707514ddd566e1114c938566b5bb192db))
- **core:** add blue and purple, tweak red & green ([165e591](https://github.com/wwnorton/design-system/commit/165e5915e8748ae8fee84a75015d2a501befba5a)), closes [#136](https://github.com/wwnorton/design-system/issues/136)
- **core:** add config for duplicate declarations ([553f453](https://github.com/wwnorton/design-system/commit/553f453e6e1f458898cbe83e4e571d14e996711c))
- **core:** add config for enabling the dark scheme ([6fb773b](https://github.com/wwnorton/design-system/commit/6fb773b87e22040094a9a37c02deb659f103cfe6))
- **core:** add field partials ([3d0065b](https://github.com/wwnorton/design-system/commit/3d0065b191bc270db7b0b3c53a093005c40c3c46))
- **core:** add initial z-index tokens ([8d59e31](https://github.com/wwnorton/design-system/commit/8d59e312f3bfe788c4a34c92f5f76b8f9bc5455d)), closes [#19](https://github.com/wwnorton/design-system/issues/19)
- **core:** add radius tokens ([4312b98](https://github.com/wwnorton/design-system/commit/4312b9855806aa2a03cbe1e0c7a3705c08dd8219)), closes [#109](https://github.com/wwnorton/design-system/issues/109)
- **core:** add role-token mapping helpers ([25e3925](https://github.com/wwnorton/design-system/commit/25e3925983a49ca7dacc5524832065191fb9bdce))
- **core:** add subtle transition to focus ring ([d3dcc69](https://github.com/wwnorton/design-system/commit/d3dcc69617c7a057a111d787749e79b0281cb7aa))
- **core:** complete rewrite ([9f8a3d5](https://github.com/wwnorton/design-system/commit/9f8a3d56bf262d955b1e2060bfe534230e09a36b))
- **core:** implement role-based line-heights ([b8e3c45](https://github.com/wwnorton/design-system/commit/b8e3c45dea489b9479fcce9bbb34c19def9049ba))
- **core:** implement role-based spacers ([49b4cf8](https://github.com/wwnorton/design-system/commit/49b4cf847eb293ecac6dc958d71ac2b6e29d970f))
- **core:** initial link styling, all through css props ([ae83a2e](https://github.com/wwnorton/design-system/commit/ae83a2ed2165a414f2c7fbf13d60d4abe68eab15))
- **core:** initial modal implementation ([2550f8b](https://github.com/wwnorton/design-system/commit/2550f8b59cf50effb7bca766024dc16bd4af0a0f))
- **core:** initial tooltip styles ([d24b1b2](https://github.com/wwnorton/design-system/commit/d24b1b24425ad92394339f1bdd0dfca34106f05d))
- **core:** introduce block-spacer-base token ([2fa49f3](https://github.com/wwnorton/design-system/commit/2fa49f327d507885d17f3acb98c4cd472d002a55))
- **core:** make typeset mixins globally configurable ([9ea6a0c](https://github.com/wwnorton/design-system/commit/9ea6a0ce286a16c998e08e0cd3f6def376a045a5))
- **dropdown:** add composite focus indicator to listbox ([28e3aad](https://github.com/wwnorton/design-system/commit/28e3aad039052d4fda00b2fe0a58631c13ccf9ea))
- **react:** add CheckboxGroup ([6645d6d](https://github.com/wwnorton/design-system/commit/6645d6d5786814c910c1fb7623a5299037e28acd))
- **react:** add Choices container for easier selection control ([5422169](https://github.com/wwnorton/design-system/commit/54221692127a175a048419f2c152221043b3f95a))
- **react:** add className prefixing to all components ([05d8c4d](https://github.com/wwnorton/design-system/commit/05d8c4d5402a41a29faab94ca6571cac4c0b4c0f)), closes [#123](https://github.com/wwnorton/design-system/issues/123)
- **react:** add color & size props to icon ([2b41c21](https://github.com/wwnorton/design-system/commit/2b41c213926364d23e13eb0e626c7a1d417f9669))
- **react:** add global configuration ([43dab2c](https://github.com/wwnorton/design-system/commit/43dab2c84cba9362ce32e5372de5cdb61ce45d70))
- **react:** add hook to use props as state ([e24e1ab](https://github.com/wwnorton/design-system/commit/e24e1ab43fa1760ef52da37545028ea75fd6b3a5))
- **react:** add LiveRegion component ([6bc907f](https://github.com/wwnorton/design-system/commit/6bc907feb0a90bdf4627e8b2a30fb0b1061cc04d))
- **react:** add modal props to allow sticky header/footer ([7da5725](https://github.com/wwnorton/design-system/commit/7da572522cc32aea4d8f8f25869338583d21b2ad))
- **react:** add RadioGroup ([685eeeb](https://github.com/wwnorton/design-system/commit/685eeeb304bd8af75ace7d547237477781a7a59a))
- **react:** add screen reader-only helper styling ([7b2d4d6](https://github.com/wwnorton/design-system/commit/7b2d4d6cc1673b917169012b2985f6d2d8330dc8))
- **react:** add search to list of allowed TextField types ([3bb86c7](https://github.com/wwnorton/design-system/commit/3bb86c74ab0fdf4452d50566b1875f941854074d))
- **react:** add useSelect hook to help with multiselect ([401f767](https://github.com/wwnorton/design-system/commit/401f7679b06f1186a9aa2d44564bd7fb844c3670))
- **react:** add useValidation for easier controlled validation ([69a56b9](https://github.com/wwnorton/design-system/commit/69a56b9815ae2e4a8f5e1f95e3b90613d753ebb8))
- **react:** add validation for badInput ([373929c](https://github.com/wwnorton/design-system/commit/373929c0d56710fe58af2ffb293b34349608fdc7))
- **react:** allow components to control the tooltip hiding delay ([cdb02f4](https://github.com/wwnorton/design-system/commit/cdb02f4369f27348d5f58a963495ef86238a156a))
- **react:** allow custom icons to have a label ([f47f345](https://github.com/wwnorton/design-system/commit/f47f3454c81a3f84dbd726b7f35d4b295f05f70a))
- **react:** close the dropdown when it's disabled ([1ef0146](https://github.com/wwnorton/design-system/commit/1ef014608d5e9c34e8eb63f6d340c466273c601c))
- **react:** ensure that screen reader users are notified of button changes ([c989fb5](https://github.com/wwnorton/design-system/commit/c989fb59896695898ab45583686e10de844e43b9))
- **react:** expose all utilities as part of the public api ([2508d4a](https://github.com/wwnorton/design-system/commit/2508d4a77d0b5f5bd9b08c2ecb054a21bff1f434))
- **react:** initial FieldAddon ([76b39e8](https://github.com/wwnorton/design-system/commit/76b39e84c9cacae94b9108eafd6f131c21dc077f))
- **react:** initial FieldFeedback component ([cbfe261](https://github.com/wwnorton/design-system/commit/cbfe2619394ad7ae70e9ab76050bdb07d4447de6))
- **react:** initial FieldInfo component ([34d7275](https://github.com/wwnorton/design-system/commit/34d7275eb70e1ca8f36ec36da0a742be2efea854)), closes [#112](https://github.com/wwnorton/design-system/issues/112)
- **react:** make all disclosure callbacks controllable ([c4818cc](https://github.com/wwnorton/design-system/commit/c4818ccbf0dab0d7e4a2f6619353146d6e38ad2b))
- **react:** make icons tooltipable ([bc7c6b6](https://github.com/wwnorton/design-system/commit/bc7c6b637853325c42f0002a64057c41d0fc5fe5))
- **react:** polyfill aria-modal on modal open ([852fa62](https://github.com/wwnorton/design-system/commit/852fa626b9e8b199e34c20a545cea369b40f08dc))
- **react:** tooltip button when icon-only ([e665600](https://github.com/wwnorton/design-system/commit/e665600162295e47ee8e5a95afd7bc73921eadf4))
- **react:** use field info as a fieldset legend ([fce99d2](https://github.com/wwnorton/design-system/commit/fce99d2efb5f45d19a739d40e5a37bb7bff476aa))
- add props and prefixing helpers ([db92524](https://github.com/wwnorton/design-system/commit/db92524517f7e9eca51b2dc4f23434850191ad4f))
- add usePopper hook ([3d05dc2](https://github.com/wwnorton/design-system/commit/3d05dc23032d3ec516992bba76136cdd08dfdd11))
- add useTooltip hook ([d1b5a8b](https://github.com/wwnorton/design-system/commit/d1b5a8b1b0376cc3a15ed952641928fc4e41a30f))
- add useTriggers hook to handle open state ([ac55b8c](https://github.com/wwnorton/design-system/commit/ac55b8c812bc1aea0224e44772655524d9dbef54))
- update style guides documentation ([28852fd](https://github.com/wwnorton/design-system/commit/28852fd5bdc1daeb23a7ea240de93a12b2af9fc9))

* refactor(react)!: overhaul MultipleChoice as ChoiceField ([604beda](https://github.com/wwnorton/design-system/commit/604bedadad9b919ea779ea2eb978c5d5c651e8d0))
* refactor(react)!: completely rewrite TextField ([c159266](https://github.com/wwnorton/design-system/commit/c1592666c4abcf57f022a06fdddf8461bf950497))
* refactor(react)!: rewrite & simplify BaseInput ([2efe83e](https://github.com/wwnorton/design-system/commit/2efe83e289c1273e62a71d06041f55e3c66cddb1))
* refactor(react)!: simplify validation ([4bfe73b](https://github.com/wwnorton/design-system/commit/4bfe73b4127c811aeb2c4666bd1dec8fa17d7574))
* feat(react)!: complete rewrite of Dropdown ([cf072a2](https://github.com/wwnorton/design-system/commit/cf072a2d165f40f054f74669da991944322251cf))

### BREAKING CHANGES

- The `label` prop has been removed from `TextField`, which now uses its children for its label.
- `MultipleChoice` has been removed in favor of the new `ChoiceField`, which will be rendered as a `<fieldset>` with either checkbox or radio choices, depending on whether the `multiple` prop is `true` or `false`.
- **core:** `Radio` now uses a `Field` class structure, similar to `TextField` and `Checkbox`.
- **react:** `Checkbox` now uses a `Field` class structure, similar to `TextField`.
- `Modal`: `addCloseButton` -> `hideCloseButton`, which is undefined by default.
- **react:** both of the `Modal`'s focus-related callbacks have been removed. To replicate `onInitialFocus`, check for the `document.activeElement` inside an `onOpen` callback. The `onRequestFocusWrap` has no replacement but did not have a good use case.
- **react:** `Modal` now uses the `focusOnOpen` prop to define what element should be focused on open, replacing the old `initialFocusRef`. This should be an actual HTMLElement, which the user can define with a ref.
- Text Field prop rename: `help` -> `description`
- Text Field prop rename: `helpClass` -> `descriptionClass`
- Text Field prop rename: `errorClass` -> `errorsClass`
- `TextField` labels cannot be React elements now--they must be strings.
- the `TextField` anatomy has been reworked to allow for more flexible styling. The overall structure uses the new `FieldInfo` component, a `.field__group` wrapper for the `<input>` and its optional addons, and the new `FieldFeedback` component.
- remove the `disableTooltip` prop entirely in the `BaseInput` stack. errors are now always reflected in the browser's constraint validation API.
- validation errors can only be strings and can no longer be JSX Elements.
- the `options` prop has been removed entirely in favor of using `children` to compose options. Children should now be `<Dropdown.Option value={value}>{ contents }</Dropdown.Option>` or an array of values.
- `onRequestSelect` is now `onChange` to better match other form control callbacks.
- sizing for the button and listbox can now be controlled independently via the `matchWidth` prop. To replicate the previous behavior of resizing the button to match the listbox, set `matchWidth="listbox"`.

## [0.9.4](https://github.com/wwnorton/design-system/compare/v0.9.3...v0.9.4) (2020-06-22)

### Bug Fixes

- **react:** only return focus when actually closing ([a332ce6](https://github.com/wwnorton/design-system/commit/a332ce6874b97ef4082e342466e6cb02c25416c3))

## [0.9.3](https://github.com/wwnorton/design-system/compare/v0.9.2...v0.9.3) (2020-06-22)

### Bug Fixes

- **react:** ensure that internal BaseButtons do not submit on click ([b69a97f](https://github.com/wwnorton/design-system/commit/b69a97f112d016b8ab95fbe841ea4de95efd2dc7))

## [0.9.2](https://github.com/wwnorton/design-system/compare/v0.9.1...v0.9.2) (2020-06-08)

### Bug Fixes

- ensure that type definitions aren't transpiled ([cdafcd4](https://github.com/wwnorton/design-system/commit/cdafcd4af2ee04580ec33576b35ac23fe969fd4d))

## [0.9.1](https://github.com/wwnorton/design-system/compare/v0.9.0...v0.9.1) (2020-06-03)

### Bug Fixes

- **react:** use relative paths ([2b97289](https://github.com/wwnorton/design-system/commit/2b97289989edecd2ba2eb58926eeebdff3d00cd5))

# [0.9.0](https://github.com/wwnorton/design-system/compare/v0.8.1...v0.9.0) (2020-05-31)

### Features

- **react:** add icon variants ([222e7b2](https://github.com/wwnorton/design-system/commit/222e7b20411e09edf10dd3dc909b7b5bb56e1cb0))

## [0.8.1](https://github.com/wwnorton/design-system/compare/v0.8.0...v0.8.1) (2020-05-08)

**Note:** Version bump only for package nds

# [0.8.0](https://github.com/wwnorton/design-system/compare/v0.7.0...v0.8.0) (2020-05-02)

### Bug Fixes

- **core:** reduce focus ring rect by 1px ([2d3d0b1](https://github.com/wwnorton/design-system/commit/2d3d0b11bea2d0054dd0eb973e0feb19a0158e25))
- **react:** export Modal as a top-level component ([ad4ac4a](https://github.com/wwnorton/design-system/commit/ad4ac4a0de25ea5eeed135929a3ec65d8e0e5ff1))
- **react:** only apply modifier if name is specified on Icon ([f1efc32](https://github.com/wwnorton/design-system/commit/f1efc327acdb9bc88f266aabfa747d5dfbdc8b99))
- **react:** use a real HTML comment in SVG source ([1adff2a](https://github.com/wwnorton/design-system/commit/1adff2aee412b6126b31e7ceebd1920b135cece8))

### Features

- **core:** initial dropdown tokens, mixins, and declarations ([596602a](https://github.com/wwnorton/design-system/commit/596602a9c81bbab4a65cd5fa6f78baf442fc04e5))
- **react:** initial BaseListbox and BaseListOption ([495dc72](https://github.com/wwnorton/design-system/commit/495dc7211a6b3ea2615d1881f1d5d3db356e290e))
- **react:** initial BasePopper and Tooltip ([75815a5](https://github.com/wwnorton/design-system/commit/75815a5f23980bf71f853e64bbaeee7135923a78))
- **react:** initial Dropdown ([8eac9d7](https://github.com/wwnorton/design-system/commit/8eac9d7326387aa609d0f73ce2f228f7aad4114d))

# [0.7.0](https://github.com/wwnorton/design-system/compare/v0.6.1...v0.7.0) (2020-04-01)

### Bug Fixes

- **button:** 1px button borders ([ff40118](https://github.com/wwnorton/design-system/commit/ff40118bed791a0edb089b99cbcdebe9455fe6d6)), closes [#97](https://github.com/wwnorton/design-system/issues/97)
- **button:** use correct token ([bacc2f6](https://github.com/wwnorton/design-system/commit/bacc2f6ffebb514f7e7c8510f5c7b5396f54bfb8))
- **core:** ghost button should be transparent ([70711f2](https://github.com/wwnorton/design-system/commit/70711f2fefca434656eee688d61cf904ec3d6bfb))
- **react:** move react & react-dom to dev/peerDeps ([2268999](https://github.com/wwnorton/design-system/commit/2268999ba7fcbd25614a784b12cb8e49e6b29b96))
- **switch:** use props to update state ([60757eb](https://github.com/wwnorton/design-system/commit/60757ebdfe5720a5765dea7cff65fd7953b24be6)), closes [#100](https://github.com/wwnorton/design-system/issues/100)

### Features

- **modal:** add onRequestFocusWrap prop ([f2b44ba](https://github.com/wwnorton/design-system/commit/f2b44ba223582703df86276c14b02735585c2213))
- **react:** add BaseDialog ([6920ed9](https://github.com/wwnorton/design-system/commit/6920ed98e2c92f2380abac1c765770c2fa49d591))
- **react:** add createValidator factory function ([9b2537a](https://github.com/wwnorton/design-system/commit/9b2537a8decc1b09e8b1b02ab8cb36dd082dcd7a))
- **react:** add focusable utilities ([9c44922](https://github.com/wwnorton/design-system/commit/9c4492252332bf2ad3fdbcd4261ecedbea3a45ab))
- **react:** add hook to merge forwarded refs ([152fccd](https://github.com/wwnorton/design-system/commit/152fccdd13998ac0649d23236cb287ef02ee9f78))
- **react:** add prop to disable browser tooltips on inputs ([bcae744](https://github.com/wwnorton/design-system/commit/bcae744714645a0b59f38823016fc519386e11af))
- **react:** initial Modal dialog ([585024b](https://github.com/wwnorton/design-system/commit/585024ba32b59de55d2ff7169dce2f45dd0bf141))
- **switch:** flip state display prop ([c68dadf](https://github.com/wwnorton/design-system/commit/c68dadf857f4a08aaf7f66fe1cf75236b28b4e70))
- **TextField:** allow users to customize feedback ([133aa1a](https://github.com/wwnorton/design-system/commit/133aa1ab69b16b2088a4b865a60efc55302dbf43))

## [0.6.1](https://github.com/wwnorton/design-system/compare/v0.6.0...v0.6.1) (2020-03-03)

### Bug Fixes

- **core:** add missing components ([13688c7](https://github.com/wwnorton/design-system/commit/13688c756c077f1b4848b95a760731d95dae1163))
- **core:** import missing component tokens ([c1e27c2](https://github.com/wwnorton/design-system/commit/c1e27c2221fcfca5c4d142fc654f2ce3a4decc37))

# [0.6.0](https://github.com/wwnorton/design-system/compare/v0.5.1...v0.6.0) (2020-02-28)

### Bug Fixes

- **a11y:** explicitly set label when multiple exist ([e8fc401](https://github.com/wwnorton/design-system/commit/e8fc401dd3a37c28e9a165b75a26e29e463fcdc7))
- **react:** ensure that ids can be passed as props ([f68d480](https://github.com/wwnorton/design-system/commit/f68d4804a4cf7cf1ad15862f23e51f0c0e10ddf6)), closes [#82](https://github.com/wwnorton/design-system/issues/82)
- **react:** position checkbox control the same as radio ([377c654](https://github.com/wwnorton/design-system/commit/377c6541d28fac66ac7c56caf785ba15d13de3cc))
- remove unnecessary import ([cdfbce5](https://github.com/wwnorton/design-system/commit/cdfbce5716b26deb920b55381a6045aac94b5700))
- **react:** ensure that onClick is triggered on switch ([0e2b2e3](https://github.com/wwnorton/design-system/commit/0e2b2e35a18730b54f37c72a0b7877ba66c36786))
- **react:** position checkbox control the same as radio ([9df00d6](https://github.com/wwnorton/design-system/commit/9df00d6cc1bcf3eaebadc78c616dd58194ae99d0))
- remove unnecessary import ([e4b03a7](https://github.com/wwnorton/design-system/commit/e4b03a78ea2c44218ff477ca36a72ae45dfa4312))
- **react:** ensure that onClick is triggered on switch ([3612844](https://github.com/wwnorton/design-system/commit/3612844b25649b8955857c39979095bdca440670))
- **react:** ensure that onClick is triggered on switch ([8adac0a](https://github.com/wwnorton/design-system/commit/8adac0a1e0e5a814a8e3584a4b4be2e9b63bd646))
- **react:** ensure that onClick is triggered on switch ([d6a92da](https://github.com/wwnorton/design-system/commit/d6a92da7f849e64932c8ecb57b6cdff63d4b145d))
- **react:** ensure that onClick is triggered on switch ([c58b37c](https://github.com/wwnorton/design-system/commit/c58b37cc801ac9986f55d8a832a73de577193468))
- fix styling for radio when its disabled ([a3e90cd](https://github.com/wwnorton/design-system/commit/a3e90cd04371cd80ea0f168912e35e1b0c9290c5))
- **storybook:** upgrade storybook ([03705f9](https://github.com/wwnorton/design-system/commit/03705f9ec1163f430d0595ae7f8b948159b60e4e))

### Features

- **core:** add icon-only button modifier & declaration ([8fb9ec6](https://github.com/wwnorton/design-system/commit/8fb9ec61fd781d7ec5ac6b74e1493d471a659376))
- **core:** add multiple choice ([39db26e](https://github.com/wwnorton/design-system/commit/39db26e41455da37c0b8738f86101212af541d44))
- **core:** add multiple choice ([d695dc0](https://github.com/wwnorton/design-system/commit/d695dc006313bfd7cdf1be1942cc8d9b92262e94))
- **core:** add very basic icon styling ([3eaa343](https://github.com/wwnorton/design-system/commit/3eaa343bb48fdcc00c8e41b7d80eda6b83769763))
- **react:** add IconButton component ([96df9a9](https://github.com/wwnorton/design-system/commit/96df9a9796748b9f8c9d8537386a76806561e469))
- **react:** add support for custom switch states ([4e79518](https://github.com/wwnorton/design-system/commit/4e79518fea328de8670802ad598e2526f444234f))
- add material minus icon ([5fcb75b](https://github.com/wwnorton/design-system/commit/5fcb75be7abf8bf4305d064360c5d5b99c4cd731))
- add react radio implementation ([3b7f57b](https://github.com/wwnorton/design-system/commit/3b7f57b28e188efb41e474eb0d837a0a742320f9))
- add sass radio styles ([677bbed](https://github.com/wwnorton/design-system/commit/677bbed1404df793c30f576a3636a653f04be60e))
- initial checkbox update commit ([d8243b1](https://github.com/wwnorton/design-system/commit/d8243b1ba728eedaa4a0c30ee46396a0cc4c13b3))
- initial MultipleChoice and Choice components ([67df099](https://github.com/wwnorton/design-system/commit/67df0995b0299137ca718e251180e648a4b070db))
- initial MultipleChoice and Choice components ([d739823](https://github.com/wwnorton/design-system/commit/d7398236b4c9da5b7577b0705a8729474fbcd219))
- initial MultipleChoice and Choice components ([6eb1136](https://github.com/wwnorton/design-system/commit/6eb1136bd51287fe7357b95cb2664459cfda2e22))
- **core:** initial icon ([c9867cd](https://github.com/wwnorton/design-system/commit/c9867cdf1d1384e1f30106bafd8420f98e5c2cd5))
- **react:** add icon utility ([7a060e6](https://github.com/wwnorton/design-system/commit/7a060e6f2c90b04bd304b82b12d17f12a3c78cc8))
- **react:** add support for icons in buttons ([736e8dd](https://github.com/wwnorton/design-system/commit/736e8dd4fb10b74686a3731e405302d9cb900e33))
- **react:** allow custom icons and CSS height ([f43bd30](https://github.com/wwnorton/design-system/commit/f43bd30eb4d27fea482b0409b4417474618e603d))
- initial MultipleChoice and Choice components ([2eaaeb7](https://github.com/wwnorton/design-system/commit/2eaaeb709c33dc00048519026e80fbb6bbc82ac4))
- initial MultipleChoice and Choice components ([4d78082](https://github.com/wwnorton/design-system/commit/4d780825ae3fa75847e05b0fd883cd388a8a4ecf))
- **react:** initial BaseSVG ([2912aa5](https://github.com/wwnorton/design-system/commit/2912aa5b0125247c0c258f0e5a663d8f654327f8))
- **react:** initial icon ([0447df8](https://github.com/wwnorton/design-system/commit/0447df84ab638cec582a86fee87ef0d089e077da))

## [0.5.1](https://github.com/wwnorton/design-system/compare/v0.5.0...v0.5.1) (2020-02-04)

### Bug Fixes

- build all files to root of dist ([7698a82](https://github.com/wwnorton/design-system/commit/7698a8286ac1dcbdd7ae04858468f8821e7b3720))
- **react:** add missing components to main export ([5d8ccd4](https://github.com/wwnorton/design-system/commit/5d8ccd4d7373adcedd0768879a40f8352cbcf633))

# [0.5.0](https://github.com/wwnorton/design-system/compare/v0.4.0...v0.5.0) (2020-01-31)

### Bug Fixes

- **textfield:** apply class to the textfield, not input ([5567278](https://github.com/wwnorton/design-system/commit/5567278d074017688ea0dc24735230bfe0510998))
- include props on forwardref generc ([99b2843](https://github.com/wwnorton/design-system/commit/99b2843b4b54c66ff0be76a232f140c1778fbc18))
- **a11y:** actually disable the switch ([d8e340c](https://github.com/wwnorton/design-system/commit/d8e340c8fa7be6654302a05c69dccc86ae4a11dc))
- **button:** deactivate on blur ([0b22096](https://github.com/wwnorton/design-system/commit/0b22096dc01b155b67a7a2bd396c80c0bf080458))
- **core:** reset needs tokens ([cb11d21](https://github.com/wwnorton/design-system/commit/cb11d213e8f33a8159e484779f455f93da6fbdfe))
- **core:** use the correct destination ([e0fd22f](https://github.com/wwnorton/design-system/commit/e0fd22fed7a2b8822543c6dee0e50c6d37690596))

### chore

- **deps:** update husky to v3 ([54adcae](https://github.com/wwnorton/design-system/commit/54adcae8ec910308bf68495a5f34fb1a484fb9b6))

### Features

- **core:** validation errors now render in lists ([d82134e](https://github.com/wwnorton/design-system/commit/d82134e7c450ed94159363bc503f0aa76b2184d2))
- **react:** update text field to use new validation api ([34de3ef](https://github.com/wwnorton/design-system/commit/34de3efc61979646df307b0e4f56d838d5b0d7b5))
- utilities for form validation feedback ([948ea6a](https://github.com/wwnorton/design-system/commit/948ea6abdaf51600a9ff995307df2b1f28648b8b))
- **a11y:** improve aria markup of checkbox ([134f466](https://github.com/wwnorton/design-system/commit/134f466737c2ada8d2ed874fe5c2b8d35934a2b5))
- **core:** add motion duration multiplier ([5618427](https://github.com/wwnorton/design-system/commit/56184271a3da51d7272dec17b3dd68f3a2b7429f))
- **core:** add reduce-motion mixin ([2a88388](https://github.com/wwnorton/design-system/commit/2a88388dee4cb494e854443d80d52652e64e5aca))
- **core:** add sr-only mixin ([725a3c6](https://github.com/wwnorton/design-system/commit/725a3c6f9c83e8006dd10f76ce24c5c7004053fc))
- add checkbox to @wwnds/core ([8023ef9](https://github.com/wwnorton/design-system/commit/8023ef99681a6f99f12094f3bfd904ff477ee01d))
- add initial testing framework ([a80f1a9](https://github.com/wwnorton/design-system/commit/a80f1a99443aa7eb6bdaa87945cf055ab4231a81))
- add react checkbox implementation ([e51f78a](https://github.com/wwnorton/design-system/commit/e51f78af45d785d8114bb11fc1188f751e3835ed))
- add react checkbox implementation ([22db133](https://github.com/wwnorton/design-system/commit/22db133dbca4dbeab752ff6cd040f3b2d5d5fa16))
- **core:** initial disclosure styling ([e8ddaf9](https://github.com/wwnorton/design-system/commit/e8ddaf92cb72651be0c0ffb1ae89b56d69b18170))

### BREAKING CHANGES

- **deps:** now requires Node v10+

# [0.4.0](https://github.com/wwnorton/design-system/compare/v0.3.0...v0.4.0) (2020-01-02)

### Bug Fixes

- update colors saturation ([816a3a2](https://github.com/wwnorton/design-system/commit/816a3a219c79d3717c6997d9bebc4fc0822e52ff))
- update react version in eslintrc file ([f192fe4](https://github.com/wwnorton/design-system/commit/f192fe46286ab14d46ab2703d3f9bcd222a470ed))
- use bem-style class names ([bd92dcd](https://github.com/wwnorton/design-system/commit/bd92dcdb04958edafdc4537f964331fe3b20a14f))

### Features

- **core:** add :focus-visible for the future 🚀 ([56695c9](https://github.com/wwnorton/design-system/commit/56695c90e5fff148b1001c791ec24ebaac0fbe47))
- **core:** initial textfield implementation ([15a66c4](https://github.com/wwnorton/design-system/commit/15a66c46758c659ab04c36966429a639c8310c93))
- **core:** initial toggle/switch styling ([6c847fd](https://github.com/wwnorton/design-system/commit/6c847fd3f480599fc1541434b8240fda0e3d3bb0))
- **react:** add textualState prop to toggle ([b280067](https://github.com/wwnorton/design-system/commit/b28006702859eab8eb5b5ee73ca1260ee36c24a6))
- **react:** initial disclosure implementation ([f1ca740](https://github.com/wwnorton/design-system/commit/f1ca7401ce1bc04d29143811e4281691aab13783))
- **react:** initial text field ([d7ec06c](https://github.com/wwnorton/design-system/commit/d7ec06cf9fd4ebfc9a11ce4d7e619929453addd5))
- **react:** more consistent callbacks ([34bddfc](https://github.com/wwnorton/design-system/commit/34bddfc38221f5170b60d5e6bc3ae5e71278ed7f))

# [0.3.0](https://github.com/wwnorton/design-system/compare/v0.2.1...v0.3.0) (2019-11-27)

### Features

- add initial font stack ([6ee1d42](https://github.com/wwnorton/design-system/commit/6ee1d42e1c01de4371253668f9913784290b995a)), closes [#34](https://github.com/wwnorton/design-system/issues/34)
- add initial state colors ([933fbd0](https://github.com/wwnorton/design-system/commit/933fbd0aae05d8cf5550fe7938bd11fd8ff04e64)), closes [#20](https://github.com/wwnorton/design-system/issues/20)
- use powers of 10 for all color steps ([03b3237](https://github.com/wwnorton/design-system/commit/03b3237e0572e85a15f0ddcef4034072a5d71ef4)), closes [#47](https://github.com/wwnorton/design-system/issues/47)
- **core:** add font smoothing mixin ([ae3fa3a](https://github.com/wwnorton/design-system/commit/ae3fa3a18a80ff7ef7977c0af2441b5d1ac443a6))
- **core:** add hd media query mixin and tokens ([c819ab0](https://github.com/wwnorton/design-system/commit/c819ab05987dbe5a05c1f3ef0c496046ee4fc536))
- **core:** initial reset - font smoothing on body ([70500d1](https://github.com/wwnorton/design-system/commit/70500d1197b8d59a1df8965c924a434b2e75edbe))

## [0.2.1](https://github.com/wwnorton/design-system/compare/v0.2.0...v0.2.1) (2019-11-07)

### Bug Fixes

- **react:** output and use type declarations ([a1e1dc9](https://github.com/wwnorton/design-system/commit/a1e1dc9601108e06361dceba9b0f82f93e8319db))

# [0.2.0](https://github.com/wwnorton/design-system/compare/v0.1.0...v0.2.0) (2019-10-31)

### Bug Fixes

- **ci:** set docs dest correctly when at root ([e136df9](https://github.com/wwnorton/design-system/commit/e136df95ea35d538baa02bc3e1a7af117558d7b3))
- **docs:** spelling ([e5250cf](https://github.com/wwnorton/design-system/commit/e5250cf74d968ba68a22c715d0495668d76079c0))
- **docs:** use singular link ([b85f23e](https://github.com/wwnorton/design-system/commit/b85f23e6d655432bbf631fc876092fee9f8cd147))
- **docs:** use symlinked package ([53854d3](https://github.com/wwnorton/design-system/commit/53854d3fe462d5fa8dd11a9af7db9b6c05bce221))
- focus ring should not have blur ([92c6a98](https://github.com/wwnorton/design-system/commit/92c6a98e796139b4694eca262686efbe58dec85a))

### Features

- **components:** add global mixins for focus ring ([4da0658](https://github.com/wwnorton/design-system/commit/4da0658a000499cf1b59ebf1bb23c70c8fd430d0))
- **docs:** add @wwnds/core to docs for examples ([16052d2](https://github.com/wwnorton/design-system/commit/16052d285322f7243884b099ddd4f064e65f8b0b))
- **docs:** initial accordion usage ([73e7d31](https://github.com/wwnorton/design-system/commit/73e7d31d163dd9512f6e4c84f16f5b672c8cc695))
- **docs:** initial checkbox usage ([e4d7555](https://github.com/wwnorton/design-system/commit/e4d75559d1afba563ff45b7a1a65b9edd1c79e6f))
- **docs:** initial disclosure usage ([82e1afd](https://github.com/wwnorton/design-system/commit/82e1afd1dc40ce9f99dfcb3f23ddfb88aa8e6c69))
- **docs:** initial dropdown usage ([4111626](https://github.com/wwnorton/design-system/commit/4111626b656afdf0cb2ea0ece4004c92dc27d237))
- **docs:** initial layout grid usage ([19f919e](https://github.com/wwnorton/design-system/commit/19f919e761c00eeed6f4ac3fdbfe68e589a7faea))
- **docs:** initial radio button usage ([15ee880](https://github.com/wwnorton/design-system/commit/15ee88060c1193200a80a77cf12ac8985320ea4a))
- **docs:** initial toggle usage ([58178bb](https://github.com/wwnorton/design-system/commit/58178bb5f29b0ba3b85a6bab51d387086262b1cb))
- **react:** add forwardrefs for root button ([b106308](https://github.com/wwnorton/design-system/commit/b106308294f485d8d6c0703becfd55526461390f))
- **react:** add storybook and typescript ([9a2a4a6](https://github.com/wwnorton/design-system/commit/9a2a4a69503e32fd088b176c2c58e1bed3bff15b))
- **react:** apply all attributes to child button ([23af52b](https://github.com/wwnorton/design-system/commit/23af52b3a42629b48f645681f8539f50acf8e2b8))
- **react:** initial button ([c9a2dd0](https://github.com/wwnorton/design-system/commit/c9a2dd0e0feee01edfe132e685c0071d3aeec916))
- **react:** initial toggle button ([e7cb513](https://github.com/wwnorton/design-system/commit/e7cb5136256d3d23f5593fbe42aee68099aa9dc7))
- consolidate into core package ([05dec0d](https://github.com/wwnorton/design-system/commit/05dec0d37599eb31e64058fee9ab526193a8a34c))
- implement the 3 buttons as mixins ([c897d72](https://github.com/wwnorton/design-system/commit/c897d72cd823f697f1e74cb4daa4158533b4a131))
- make docs an unpublished package ([45aeeb3](https://github.com/wwnorton/design-system/commit/45aeeb390b64d8fc51c32b55e489daa90102dae7))
- **tokens:** add initial box shadow tokens ([d54e18b](https://github.com/wwnorton/design-system/commit/d54e18b0c255c0338bad811e50c7fcfc6074bed8))
- **tokens:** initial motion tokens ([fd1b021](https://github.com/wwnorton/design-system/commit/fd1b0215eebf16da82cf99a8761734bd124c7520))
- **tokens:** rename theme colors to functional ([faac226](https://github.com/wwnorton/design-system/commit/faac226e61b3d64e292527481a42a818ccee5cc3))
- refactored button ([56beef5](https://github.com/wwnorton/design-system/commit/56beef52b04df60acbc173348eb51b7ae3c3047c))
- updated per zeplin color sample ([227df2d](https://github.com/wwnorton/design-system/commit/227df2dcd3c539ce86a74b81efea2ab0e5dde8da))

# 0.1.0 (2019-09-27)

### Bug Fixes

- **ci:** base must end in a slash ([832369c](https://github.com/wwnorton/design-system/commit/832369c))
- **lint:** use correct override syntax ([7813305](https://github.com/wwnorton/design-system/commit/7813305))
- **lint:** use correct override syntax ([9f8f81e](https://github.com/wwnorton/design-system/commit/9f8f81e))

### Features

- **components:** initial button implementation ([5ad44d1](https://github.com/wwnorton/design-system/commit/5ad44d1))
- **components:** initial components structure ([e59f2e9](https://github.com/wwnorton/design-system/commit/e59f2e9))
- **components:** initial components structure ([aba7a7b](https://github.com/wwnorton/design-system/commit/aba7a7b))
- **docs:** use vuepress to render docs ([946a1b9](https://github.com/wwnorton/design-system/commit/946a1b9))
- **docs:** use vuepress to render docs ([8cb7bea](https://github.com/wwnorton/design-system/commit/8cb7bea))