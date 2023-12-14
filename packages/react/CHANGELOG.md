# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.8.1-next.0 (2023-12-14)

**Note:** Version bump only for package @wwnds/react

## 1.7.2-next.3 (2023-12-14)

**Note:** Version bump only for package @wwnds/react

## 1.7.2-next.2 (2023-12-14)

**Note:** Version bump only for package @wwnds/react

## 1.7.2-next.1 (2023-12-13)

**Note:** Version bump only for package @wwnds/react

## 1.7.2-next.0 (2023-12-13)

**Note:** Version bump only for package @wwnds/react

## [1.7.1](https://github.com/wwnorton/design-system/compare/v1.7.0...v1.7.1) (2023-06-23)

### 🐛 Bug Fixes

- **react:** solve controlled selected not changing default focus on Dropdown list ([7782ea6](https://github.com/wwnorton/design-system/commit/7782ea6fa2e6a9500c4f5a8b0419f4d784da8ded))
- **react:** solve issue of multiple Dropdowns competing for focus ([62adfd3](https://github.com/wwnorton/design-system/commit/62adfd3c3dfd0bd88c7085cf6d8b40af2d5c63fc))
- **react:** solves Dropdown not upgrading button contents when controlled ([076cb77](https://github.com/wwnorton/design-system/commit/076cb77e603f49809feecc563d0a2b3807f1e28a))

## [1.7.0](https://github.com/wwnorton/design-system/compare/v1.6.0...v1.7.0) (2023-03-03)

### ✨ Features

- **@wwnds/react:** add support for react 18 ([d5a68f4](https://github.com/wwnorton/design-system/commit/d5a68f4ad5e1d911ab2f20db8270037bc7c26d2c))
- **dropdown:** add "dot" indicator for selected options ([0715d02](https://github.com/wwnorton/design-system/commit/0715d0222028e9d5aa9a7c1d5cce0ba7920febfd))

### 🐛 Bug Fixes

- **callout:** only name the callout when appropriate ([495438e](https://github.com/wwnorton/design-system/commit/495438e920271b07529fd4d9f01384afcea32e51))
- **dropdown:** allow selected option to be controlled ([b5b7857](https://github.com/wwnorton/design-system/commit/b5b7857fdbed632a2e7569a53a225a34243fc25f))
- **modal:** only intercept tab inside the open modal ([0ca6926](https://github.com/wwnorton/design-system/commit/0ca6926cce20a8bdf0bb65de9233e3770f89e3c0))
- use the label for the listbox's accessible name ([93cfc70](https://github.com/wwnorton/design-system/commit/93cfc7018c793cf662a5d964e47a27e240824320))

## [1.6.0](https://github.com/wwnorton/design-system/compare/v1.5.0...v1.6.0) (2022-09-08)

### 🐛 Bug Fixes

- **modal:** avoid shifting when body scrollbar is removed ([2025ee2](https://github.com/wwnorton/design-system/commit/2025ee2a40c21e93d33b765f40086398f1feb968))
- use new useId hook to ensure that server and client ids match ([0bbd5db](https://github.com/wwnorton/design-system/commit/0bbd5db6a04d285071a43dadbd13d55eb3bb52e0))

### ✨ Features

- add React 18-compatible useId hook for isomorphic id generation ([11491cf](https://github.com/wwnorton/design-system/commit/11491cf339e40984784251fbf2d05415a6b57a6c))
- **disclosure:** allow summary to be any React Node ([8714011](https://github.com/wwnorton/design-system/commit/8714011f1ae10422a5da210b7dd5fded0d53b1ec))

### ♻️ Refactor

- always set ref first in base components ([f90feea](https://github.com/wwnorton/design-system/commit/f90feeafd078cbd20dac6388da459f4d5bff8a44))
- **BaseDialog:** don't allow overriding role or aria-modal ([5246771](https://github.com/wwnorton/design-system/commit/524677133b8ef4bc7cb442df34e5d77be8125c80))
- **BaseProgress:** don't allow overriding role or aria attributes ([36cba5b](https://github.com/wwnorton/design-system/commit/36cba5bc4525d79743275a88ed102aa750318721))
- **BaseSVG:** don't allow overriding xmlns or data-source ([f7afd36](https://github.com/wwnorton/design-system/commit/f7afd36b6334f179f0011440e14b37274c11576a))
- **BaseTextArea:** don't allow overriding rows ([d6ab6d3](https://github.com/wwnorton/design-system/commit/d6ab6d3f67ff800e9b45e9d9ffa5ef529a519aac))
- **button:** clarify error and update link ([203223f](https://github.com/wwnorton/design-system/commit/203223fc12684c4582be4c46ad7bddb08ec44324))
- **disclosure:** prefer inline element for title ([7a116f4](https://github.com/wwnorton/design-system/commit/7a116f49e0865143901e704ecb33a3a7faeb97d3))
- **dropdown:** account for missing children ([5f93d02](https://github.com/wwnorton/design-system/commit/5f93d020d6d9cfb0c9e4aa12a83eaebe184d9f76))
- **dropdown:** create new object instead of assigning ([256909f](https://github.com/wwnorton/design-system/commit/256909f5c7adf785b175f400c1c22403dd512666))
- standardize conventions for all base components ([ea4f65e](https://github.com/wwnorton/design-system/commit/ea4f65e74f07ddf03321f602f54caa5fb2c9d6ad))
- standardize conventions for component files ([c90ccfe](https://github.com/wwnorton/design-system/commit/c90ccfeb9878c2f6d76f4b0401a8e76e6ec987f0))
- **storybook:** migrate Checkbox to controls ([138c00d](https://github.com/wwnorton/design-system/commit/138c00d2073b2aad49f1f5e37815a783301e0c65))
- **storybook:** migrate ChoiceField to controls ([0ed9504](https://github.com/wwnorton/design-system/commit/0ed95044ddb527192191ac9bfaee56ea034e7a6d))
- **storybook:** migrate Disclosure to controls ([6f48fce](https://github.com/wwnorton/design-system/commit/6f48fce5f5225ce7423d18ea95a75989f0ff9e3a))
- **storybook:** migrate Dropdown to controls ([0e78ec0](https://github.com/wwnorton/design-system/commit/0e78ec0b6c635dc8162f02cdacb67d59580952fc))
- **storybook:** update Badge stories and migrate to controls ([532a555](https://github.com/wwnorton/design-system/commit/532a555ffd80f5a47fc973c0df4aba7dca7e3ca8))

## [1.5.0](https://github.com/wwnorton/design-system/compare/v1.4.0...v1.5.0) (2022-04-25)

### 🐛 Bug Fixes

- ship dependent types ([2efdbda](https://github.com/wwnorton/design-system/commit/2efdbda7a021c566dbb3eaebb3b74c2090233e1a))

## [1.4.0](https://github.com/wwnorton/design-system/compare/v1.3.2...v1.4.0) (2022-04-06)

### ✨ Features

- initial step indicator component ([36e2224](https://github.com/wwnorton/design-system/commit/36e222475f5797cca13c162b2938fe81a4a79b9a))

### 🐛 Bug Fixes

- **core:** remove listbox dependency in dropdown ([61eb3bf](https://github.com/wwnorton/design-system/commit/61eb3bfc92f429da4f0081d5a47dd62f96a021a3))
- **modal:** don't close when a click starts in dialog but ends outside ([db1e943](https://github.com/wwnorton/design-system/commit/db1e94306e8ee3cf17a9eea9543946a7bbcd42ec))
- **storybook:** children select for callout story ([7f36f55](https://github.com/wwnorton/design-system/commit/7f36f55794ac19630223934f804e759dfb3c92aa))

### [1.3.2](https://github.com/wwnorton/design-system/compare/v1.3.1...v1.3.2) (2021-12-21)

### 💄 Visual design

- **button:** change the cursor to "not-allowed" when disabled ([d597250](https://github.com/wwnorton/design-system/commit/d5972504af050db7f895f54ee7d2099e4f8a7854))

### ♻️ Refactor

- **dropdown:** add distance to inherited popper props ([ccae87a](https://github.com/wwnorton/design-system/commit/ccae87a1c30b7414864fccfc5d66c9b705c0e041))
- **dropdown:** add transition prop inherited from Popper ([639be87](https://github.com/wwnorton/design-system/commit/639be877c8ccc6883989576af05cdfaad7bd1c98))
- **dropdown:** prefer distance to default modifiers ([c5f491b](https://github.com/wwnorton/design-system/commit/c5f491b90a8dbc866f14e2817515271952ca5af6))
- **dropdown:** reorganize exports ([0793c57](https://github.com/wwnorton/design-system/commit/0793c57c866a01d5be5d1d674e809ab5a1419335))
- **dropdown:** switch to new Listbox & Popper ([2710a2a](https://github.com/wwnorton/design-system/commit/2710a2a0a7379fdb6b1524a31e9960f41ba4f482))
- **dropdown:** tighten the main interface ([77f4074](https://github.com/wwnorton/design-system/commit/77f407493896eb4289db9cb5e8d85052d2fdd425))
- **dropdown:** use isOpen/isOpenProp convention ([1552a48](https://github.com/wwnorton/design-system/commit/1552a482b6840d2a7552a84df0d29e82e5e3030a))
- **listbox:** emit the index of the selected option on change ([f3c3a91](https://github.com/wwnorton/design-system/commit/f3c3a91a8005e18ad5c65b33e3e69d7deebca928))

### 🐛 Bug Fixes

- **react:** add Popper to the public API ([8315aab](https://github.com/wwnorton/design-system/commit/8315aab55750994ac2759e189743929c43b31290))
- **ThemeProvider:** don't update theme on every render ([36d83f6](https://github.com/wwnorton/design-system/commit/36d83f62599b8a0deb6bc40a01acfd472be9a607))

### [1.3.1](https://github.com/wwnorton/design-system/compare/v1.3.0...v1.3.1) (2021-08-25)

### 🐛 Bug Fixes

- **textfield:** allow the Textfield multiline component to expand vertically and horizontally ([c02b1ee](https://github.com/wwnorton/design-system/commit/c02b1eefedb802db9ee32178e4ce6789377ea371))

## [1.3.0](https://github.com/wwnorton/design-system/compare/v1.2.0...v1.3.0) (2021-08-17)

### ⚡️ Performance

- **listbox:** memoize the options map ([d0655e2](https://github.com/wwnorton/design-system/commit/d0655e2066986dd0e33ac91843961d738d5b6148))

### 🐛 Bug Fixes

- **button:** pass ARIA labelling attributes to button ([af7b12c](https://github.com/wwnorton/design-system/commit/af7b12c25fb56851cc6930c00c68c77da12fd852))
- **disclosure:** properly render flex summary on Safari [NDS-93] ([#187](https://github.com/wwnorton/design-system/issues/187)) ([1fd081a](https://github.com/wwnorton/design-system/commit/1fd081a4e23abbe18c86cc38bb59aef5f490d898))
- replace React.useLayoutEffect with isomorphic useLayoutEffect ([12256a8](https://github.com/wwnorton/design-system/commit/12256a8a8b292d52c7a364737b0d51d43c1bf8fe))
- **select-hook:** use the correct form target ([a2b432b](https://github.com/wwnorton/design-system/commit/a2b432bb54bfa60c28c67d3e0660f9622a5439ac)), closes [/github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682](https://github.com/wwnorton//github.com/DefinitelyTyped/DefinitelyTyped/issues/11508/issues/issuecomment-256045682)

### ♻️ Refactor

- **button:** destructure props in one place ([e237e72](https://github.com/wwnorton/design-system/commit/e237e72e033eafa22f547c62f381eda3b17b2452))
- error if onChange triggers without a checked attribute ([d18e030](https://github.com/wwnorton/design-system/commit/d18e030704aeabb63e77e4fb0db7b8e7985cf9bf))
- **hooks:** rewrite the useSelect hook ([6b87075](https://github.com/wwnorton/design-system/commit/6b870751005622403886b6b5c4d8481c96e8a7bb))
- import TooltipCoreProps from the new types file ([aa287f8](https://github.com/wwnorton/design-system/commit/aa287f8a7947cc4cc8443cf65b8be5a5eba2b394))
- **popover:** use new Popper component ([6077554](https://github.com/wwnorton/design-system/commit/6077554b604b8b8f4882918f80b9a99687b62f02))
- **popper:** add new Popper implementation ([ebdece0](https://github.com/wwnorton/design-system/commit/ebdece0d6212aea705767b4a1b648fc490f8c944))
- reference can be an SVGElement ([3d0a6b7](https://github.com/wwnorton/design-system/commit/3d0a6b7664a212a895a98c99b2f3942d4798025b))
- remove Element check ([0e10fc0](https://github.com/wwnorton/design-system/commit/0e10fc027f598a72f9ec447f754847149bda423c))
- **text-field:** update email regex ([431ce8d](https://github.com/wwnorton/design-system/commit/431ce8dc82e509e06117fdd196790cf8714c8849)), closes [#152](https://github.com/wwnorton/design-system/issues/152)
- **tooltip:** use new Popper component ([4aa08f6](https://github.com/wwnorton/design-system/commit/4aa08f6f41abcb488282df3ede02003c5fe36bb7))
- use type checking instead of assertion ([f4a7dde](https://github.com/wwnorton/design-system/commit/f4a7dded96d993798ba17bc5f688f13832c77ad7))

### ✨ Features

- **button:** set a default tooltip show delay when iconOnly ([877f07d](https://github.com/wwnorton/design-system/commit/877f07dbc817e2e56d56a212f9a8a79819a76410))
- **hooks:** add initial stepper hook ([90bdbed](https://github.com/wwnorton/design-system/commit/90bdbed282c99bb3c584a09ae516cedbf7d7d870))
- **hooks:** add roving tabindex hook ([a5a44e8](https://github.com/wwnorton/design-system/commit/a5a44e8782107e28a6787298bee93f003997c673))
- initial badge implementation ([97a5e23](https://github.com/wwnorton/design-system/commit/97a5e237bcf52c98de455c8732a79489aec0f8d2))
- **listbox:** initial standalone listbox ([f4450b4](https://github.com/wwnorton/design-system/commit/f4450b44702d0624303b9094faac7c8d5f1274c1))
- **popper:** add show delay ([ead1e5d](https://github.com/wwnorton/design-system/commit/ead1e5d4e7d66024e3b1d17d3d67f1658c0b98a0))
- **react:** add children utilities ([ea148c6](https://github.com/wwnorton/design-system/commit/ea148c6a5cc63dd89cef7ffb22979bf61aa835a9))
- **tag:** initial tag implementation ([2590936](https://github.com/wwnorton/design-system/commit/2590936ec4a27e518305e566dba35100a15a1f35))
- **text-field:** add multiline and auto resizing ([38b1c53](https://github.com/wwnorton/design-system/commit/38b1c53ca6a45f6b4f984951daa8182af9ae4efe))
- **tooltip:** set a default show delay of 400ms ([7365cff](https://github.com/wwnorton/design-system/commit/7365cff6ce6b4ffeca4acd7de9bfd45219db317f))

### 📝 Documentation

- initial badge and tag documentation ([0aa70ef](https://github.com/wwnorton/design-system/commit/0aa70ef430672d92a6dc264024409c65a9bb7db6))
- **listbox:** add custom marker story ([a835c4d](https://github.com/wwnorton/design-system/commit/a835c4d3c93782d6e1ae61e508f3ad51fb049196))
- **popover:** add distance knob to minimal story ([2b3aeb1](https://github.com/wwnorton/design-system/commit/2b3aeb15bc71fc95c13cce745bb5f775fc47568e))
- **storybook:** add initial listbox stories ([ff00e6e](https://github.com/wwnorton/design-system/commit/ff00e6e1de2eba207ea2d58a511d6d0826b75c08))
- **tooltip:** add showDelay knob to applicable stories ([d6b9848](https://github.com/wwnorton/design-system/commit/d6b98480a8cb396c0382b31be2c67b308b882515))

### [1.2.1](https://github.com/wwnorton/design-system/compare/v1.2.0...v1.2.1) (2021-05-10)

**Note:** Version bump only for package @wwnds/react

## [1.2.0](https://github.com/wwnorton/design-system/compare/v1.1.1...v1.2.0) (2021-04-26)

### 📝 Documentation

- **link:** add link stories ([554960a](https://github.com/wwnorton/design-system/commit/554960a451679bf90098b08c07f378cf651e53f7))

### ✨ Features

- **link:** initial component, context, and hook ([1a924db](https://github.com/wwnorton/design-system/commit/1a924db8dfc9b7614d400b090f6230b345b7207d))
- **react:** add initial ThemeProvider ([617830f](https://github.com/wwnorton/design-system/commit/617830f20a035dc1cbea1f12286007f4dd85c4b7))
- **react:** add initial theming context and hook ([8bf22a6](https://github.com/wwnorton/design-system/commit/8bf22a65a073b4b0422b68c550576bf2822ed204))
- **react:** add isomorphic useLayoutEffect hook ([880b094](https://github.com/wwnorton/design-system/commit/880b094769b2ca9b09894a5edb4426677d761f75))
- **react:** add main AppProvider for app-level configuration ([2c6c42a](https://github.com/wwnorton/design-system/commit/2c6c42accd44bc2976e0c7af9aca873f82b858d8))
- **react:** add useMediaQuery hook ([5233cfb](https://github.com/wwnorton/design-system/commit/5233cfbc3519837e897c946ec11be50427f50659))
- **react:** add useSelect hook for multi & single selection ([85eea6e](https://github.com/wwnorton/design-system/commit/85eea6e5338aebdf3b785d5ead05e1a0cc2d597c))

### ♻️ Refactor

- **callout:** simplify title id ([176eff3](https://github.com/wwnorton/design-system/commit/176eff3c1f6606b14db9b3e3eb6904e021ff3448))
- **popover:** update dependency lists ([f5704f6](https://github.com/wwnorton/design-system/commit/f5704f6c8d11696eeded3f0d0187b57b53c214da))
- **react:** remove popper.js exports ([80161ad](https://github.com/wwnorton/design-system/commit/80161ad9490e43935064980c179afe82d03e8170))
- consolidate utilities ([8ca6df6](https://github.com/wwnorton/design-system/commit/8ca6df69834a09297f6c81148bf07f89fc98e629))
- de-memo simple objects ([f192152](https://github.com/wwnorton/design-system/commit/f192152827693beca60daa8a123648664fafbe97))
- **react:** simplify main exports ([93f9f16](https://github.com/wwnorton/design-system/commit/93f9f167cea0413acf5af7ca3072c9bcb920bbb7))
- **theme:** all fields should be required ([ba90d91](https://github.com/wwnorton/design-system/commit/ba90d91da5ff4831f534288898670420dae864bc))
- remove config & prefixing ([06314ca](https://github.com/wwnorton/design-system/commit/06314ca2051754e8fa8175b4d609ad8a22342bf4))
- remove unnecessary conditional hook call ([84050e5](https://github.com/wwnorton/design-system/commit/84050e56f7b9c798e588b83c31c588e5aff31a74))
- update components to use new utilities ([74f764a](https://github.com/wwnorton/design-system/commit/74f764a0870838aadd22600c4c825fe2a493fa1c))

### 🐛 Bug Fixes

- **dropdown:** use current ids for aria-labelledby ([efec188](https://github.com/wwnorton/design-system/commit/efec188389623f7847ba386c8ff989769177668d))
- **modal:** modal does not remove scroll: none; when unmounted([#108](https://github.com/wwnorton/design-system/issues/108)) ([ec8d197](https://github.com/wwnorton/design-system/commit/ec8d19779f184688f76895e816d1244955faae9f))
- **popover:** auto scrolling issue ([df06117](https://github.com/wwnorton/design-system/commit/df0611709aa12f368cd18f0dee3e398ae9aa1913))

### [1.1.1](https://github.com/wwnorton/design-system/compare/v1.1.0...v1.1.1) (2021-04-06)

### 🐛 Bug Fixes

- **react:** don't destructure refs ([#92](https://github.com/wwnorton/design-system/issues/92)) ([e08a6c8](https://github.com/wwnorton/design-system/commit/e08a6c85374f81fc163fe9e4ef8897d84e28bf33))

### ♻️ Refactor

- **tooltip:** prefer "body" over "content" ([b007cb9](https://github.com/wwnorton/design-system/commit/b007cb9862e132718f9c7cb476b8e5ba6afb0057))

### 📝 Documentation

- **tooltip:** add knob for tooltip color scheme ([f3fc63f](https://github.com/wwnorton/design-system/commit/f3fc63fc7597f27c47f8080f61aeffe67fde1960))
- update all readmes ([630f0db](https://github.com/wwnorton/design-system/commit/630f0db45ab0d54c0f77ec4682715416d564b32a))

## [1.1.0](https://github.com/wwnorton/design-system/compare/v1.0.1...v1.1.0) (2021-02-23)

### 📝 Documentation

- **modal:** make all modal stories closable ([c4b93a4](https://github.com/wwnorton/design-system/commit/c4b93a4d319e8f1b48bab91477365b31bfe9835b))

### 🐛 Bug Fixes

- **dropdown:** expose Option as an export ([a0cfc5f](https://github.com/wwnorton/design-system/commit/a0cfc5ff362dfa5df86ec04b742cd95ae88d1d69))
- **icon:** default size should be in rem, not em ([e353910](https://github.com/wwnorton/design-system/commit/e353910b3a2a8a83eb0c839b44e5408b63fb7746))
- **icon:** set min-width to prevent shrinking ([b87c7cc](https://github.com/wwnorton/design-system/commit/b87c7cc87380c3987bc2f80ed42484a50350f01c))
- **modal:** disable body scroll when modal is open ([f42018f](https://github.com/wwnorton/design-system/commit/f42018f710d4667c49a76e56cb47bf8b275c6aad))
- **modal:** enable server-side rendering ([2d9b6f0](https://github.com/wwnorton/design-system/commit/2d9b6f05e9fbcd93ccfa1ec651d10ce2715aca11))

### ✨ Features

- **callout:** initial callout implementation ([bcba538](https://github.com/wwnorton/design-system/commit/bcba538b08967df71ccac8c28dedb78dc601f103))
- **popover:** initial popover implementation ([7c71ee5](https://github.com/wwnorton/design-system/commit/7c71ee58285d29c0b5723885fa2d23e67b628eb0))
- **progress:** initial spinner & progressbar implementations ([3127cc4](https://github.com/wwnorton/design-system/commit/3127cc46c43b98567eeb72fe0e3ff88d4fc88134))

### [1.0.1](https://github.com/wwnorton/design-system/compare/v1.0.0...v1.0.1) (2020-12-17)

### 🐛 Bug Fixes

- **react:** update build script ([1c4a1d4](https://github.com/wwnorton/design-system/commit/1c4a1d455ed659ef5cae3362fa23742f98fc710a)), closes [#55](https://github.com/wwnorton/design-system/issues/55)

### 🛠 Maintenance

- switch to lodash-es for lodash methods ([a5080c3](https://github.com/wwnorton/design-system/commit/a5080c30c29b813cd88d271cc7be30b3da6d830b))
- use lodash, not lodash-es ([746be7c](https://github.com/wwnorton/design-system/commit/746be7cd299f31ff15feb586dda399fa54367589))
- use relative lodash packages ([952250c](https://github.com/wwnorton/design-system/commit/952250ca593f933aa5d4e6fa6a72f6a73aece7e6))
- **build:** split non-umd and umd builds ([497b170](https://github.com/wwnorton/design-system/commit/497b170acc9994a1b5ce8aac2b21385587d28c7c))

## [1.0.0](https://github.com/wwnorton/design-system/compare/v1.0.0-rc.1...v1.0.0) (2020-11-30)

### ✨ Features

- **react:** add color prop to button ([8abd9b0](https://github.com/wwnorton/design-system/commit/8abd9b05d5b97b2228f7d54f4d3a46ff93689b16))
- **react:** add custom email validation ([f3441ca](https://github.com/wwnorton/design-system/commit/f3441cab8b7e0b3326dd42d82911af27110f5b5f)), closes [#43](https://github.com/wwnorton/design-system/issues/43)
- **react:** add label to checked options ([a2b106a](https://github.com/wwnorton/design-system/commit/a2b106a05e71ba2002f2fbda028901d40706f276)), closes [#14](https://github.com/wwnorton/design-system/issues/14)
- **react:** add support for react 17 ([a9cf00f](https://github.com/wwnorton/design-system/commit/a9cf00ffbe5c1fa6650d45d0b118c9c4d1bf7e3f)), closes [#32](https://github.com/wwnorton/design-system/issues/32)
- **react:** allow maxLength to restrict input ([bad62d3](https://github.com/wwnorton/design-system/commit/bad62d34ac588d009c4e2b2f1f2bbb297a53fb0a))
- **react:** make it easier to disble TextField's counter ([6b48fff](https://github.com/wwnorton/design-system/commit/6b48fff22aaa46863e0cd4c8aeee564c94c9c26a))

### 🐛 Bug Fixes

- **react:** ensure counter works in controlled Textfield ([fd6afd1](https://github.com/wwnorton/design-system/commit/fd6afd15bf220a4fccc46ac627412a7a0248088e))
- **react:** ensure counter works in uncontrolled TextField ([a6bcc50](https://github.com/wwnorton/design-system/commit/a6bcc50be1fbd4b6b21c9b487e03c69578d984f7))
- **react:** remove prefix from state changes ([db68ad0](https://github.com/wwnorton/design-system/commit/db68ad07540c3319e983a53caa7f60c066c25a02))

### 🛠 Maintenance

- **storybook:** remove logging ([cf4304b](https://github.com/wwnorton/design-system/commit/cf4304b0393dc0dd8230fd63dd3d218eb0b7cf18))
- **storybook:** use target, not currentTarget ([328f418](https://github.com/wwnorton/design-system/commit/328f418754f2ecb2d94ef9f6769f51266f269005))
- remove test story ([ba0f944](https://github.com/wwnorton/design-system/commit/ba0f944e0970cc9eea7bbcbceacb5787a304d271))
- update button stories to use new color prop ([d45280b](https://github.com/wwnorton/design-system/commit/d45280b56d76cb3fffa997915852d51d7a79b73c))

### ♻️ Refactor

- **react:** explicitly pass validation attributes ([84005ee](https://github.com/wwnorton/design-system/commit/84005ee964ccf9002d3e3a79adad9cf79ae17f4a))
- **react:** improve popper types ([0e7a0fb](https://github.com/wwnorton/design-system/commit/0e7a0fbeca6195c934bef3bc77515f3d20918f31))
- **react:** move useValidation to src/hooks ([158c110](https://github.com/wwnorton/design-system/commit/158c11067d40882b848d3a99aab43480343c8715))
- **react:** simplify useColorScheme's return ([b300c82](https://github.com/wwnorton/design-system/commit/b300c821c508d3a7dfd5726fbcf6edaf0735bf32))

## [1.0.0-rc.1](https://github.com/wwnorton/design-system/compare/v1.0.0-rc.0...v1.0.0-rc.1) (2020-10-02)

### 🐛 Bug Fixes

- **react:** bind value to the BaseInput in TextField ([1a209f4](https://github.com/wwnorton/design-system/commit/1a209f40f521521739d44f5f4597250aa28798a3))

## [1.0.0-rc.0](https://github.com/wwnorton/design-system/compare/v1.0.0-beta.3...v1.0.0-rc.0) (2020-09-25)

### ⚠ BREAKING CHANGES

- **react:** `TextField` can no longer be uncontrolled.
  To use in an uncontrolled way, use the new `TextFieldUncontrolled`.

### ✨ Features

- **react:** add uncontrolled variant of TextField ([8cc63ca](https://github.com/wwnorton/design-system/commit/8cc63cadf36c38e1c7960291a5f59f803115b432))

### ♻️ Refactor

- **react:** use updated TextField in stories and tests ([3507dc2](https://github.com/wwnorton/design-system/commit/3507dc2803a2c775a2155bd3d362a18da43def0b))

### 🐛 Bug Fixes

- **react:** allow >maxLength text field input ([84c97e5](https://github.com/wwnorton/design-system/commit/84c97e5f8863b0569e0561e0ac3ceabe48e9bf67)), closes [#11](https://github.com/wwnorton/design-system/issues/11)
- **react:** correctly focus the dropdown button on close ([51ad297](https://github.com/wwnorton/design-system/commit/51ad297b6066f70c4a71c6ae8641bf4057a33086))
- **react:** make TextField and input fully controlled ([a39ba8d](https://github.com/wwnorton/design-system/commit/a39ba8dafb74f9f5d22c6828a49c26f1a538290a))

### 🛠 Maintenance

- remove empty files ([eea1aa2](https://github.com/wwnorton/design-system/commit/eea1aa2b6f6fe44b414f830c0cfa0b8ab96d9e23))
- remove non-existent imports ([dcc00a7](https://github.com/wwnorton/design-system/commit/dcc00a772c42d8a159a50ab516f25c97b49d2539))
- **storybook:** clarify aria-label story ([f3ac9f6](https://github.com/wwnorton/design-system/commit/f3ac9f6137bf4b3791792a1a2f8372c7b2ff6ad2))
- update storybook core config ([1043cbb](https://github.com/wwnorton/design-system/commit/1043cbb19740210c4dc87ae89106b5a33f9725ad))
- use full color tokens ([7807c5d](https://github.com/wwnorton/design-system/commit/7807c5d140bd8c942428b22058381abbc7f7b24a))

### 📝 Documentation

- update react readme ([84bc525](https://github.com/wwnorton/design-system/commit/84bc525878b759c34fabaa56a63597815c65f32c))
- **storybook:** add focus-visible polyfill ([16598ea](https://github.com/wwnorton/design-system/commit/16598ea15a54034cff295a6a180c836d02a9e0ee))

## [1.0.0-beta.3](https://github.com/wwnorton/design-system/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2020-08-17)

### ⚠ BREAKING CHANGES

- **react:** The `Disclosure` prop `variant` has been removed in favor of the boolean `panel` since it is either in panel mode or it is not.
- **react:** The `Disclosure` prop `animate` has been inverted and renamed `reducedMotion`. This allows developers to imperatively declare `reducedMotion` when they want to disable animations on the component.
- **react:** The `Disclosure` prop `open` has been renamed `isOpen` to better align with other openable components.
- **react:** The `Disclosure` prop `updateOnResize` has been removed entirely as sizing considerations will be handled automatically.
- **react:** The `Disclosure` now allows any icon to be used as the "marker" via the `marker` prop. Additionally, the marker can be displayed on the left or right via `markerPosition`.
- **react:** The `Disclosure` is now a forwardRef, so the `detailsRef` prop has been removed. Use `ref` instead.
- **react:** renamed `FieldInfo` prop: `labelIs` → `labelTag`

### ✨ Features

- **react:** add list & subdirectory icons ([0d48d25](https://github.com/wwnorton/design-system/commit/0d48d252b4b4f3c92c2b319d81ccbfdbcb0ad1a8)), closes [gitlab#154](https://github.com/wwnorton/gitlab/issues/154)
- **react:** add NDS context & corresponding hook ([4c73e07](https://github.com/wwnorton/design-system/commit/4c73e074a0ecf80db164bd9f7fc1bfd7fa1c01fc))
- **react:** add persistent client storage ([17bca75](https://github.com/wwnorton/design-system/commit/17bca757444dfaf3f1e0d05232f328b33872e4d6))
- **react:** add useColorScheme hook ([7dfd6ff](https://github.com/wwnorton/design-system/commit/7dfd6ff0695075009d0a28663be03a4ffbf20ce0))

### 📝 Documentation

- **storybook:** reorder panel addons ([bb8dba8](https://github.com/wwnorton/design-system/commit/bb8dba83382f1b8d90dca79a0962503307be0aa2))

### 🛠 Maintenance

- remove unused testing helper ([9f97661](https://github.com/wwnorton/design-system/commit/9f97661e345126aaf483ef219e2a3e120099ee8d))
- reset should not return anything ([94caa5b](https://github.com/wwnorton/design-system/commit/94caa5b660ad4fd8b2e68a7bd8a8790a3e0a12d7))
- **react:** remove unused debounce package ([bcef6ce](https://github.com/wwnorton/design-system/commit/bcef6ce5a09ffa0c9075eacdbe762d78e18015bb))
- fix spelling errors ([caa8284](https://github.com/wwnorton/design-system/commit/caa8284a7952cbc802204ca1953ffa35aebb9691))
- re-add missing addons ([9b2ea80](https://github.com/wwnorton/design-system/commit/9b2ea8007c53cdb1a74459706ac7fb536e8c0da5))
- suppress console warn ([cfb482c](https://github.com/wwnorton/design-system/commit/cfb482c43611f354c41973cb481f542fce22aa86))
- use the same propFilter for storybook & docs ([26b4f08](https://github.com/wwnorton/design-system/commit/26b4f08d66e88470517decd88ee3bd096f927e06))
- **dev-deps:** update storybook to v6 ([ee7a662](https://github.com/wwnorton/design-system/commit/ee7a6625582deef355da77221c7cfe19497ce186))
- **react:** code-escape HTML in comment ([989178e](https://github.com/wwnorton/design-system/commit/989178e13a23a3117f0f249c33f90e7750cd9597))
- **storybook:** use fixed port for dev ([ac32b26](https://github.com/wwnorton/design-system/commit/ac32b2624ae94f1a0a5b75f2c712859bf8b51ba0))

### ♻️ Refactor

- **react:** labelIs → labelTag ([d1f276b](https://github.com/wwnorton/design-system/commit/d1f276b6f7987cfba491573db1555086dee5260b))
- **react:** make canUseDOM a standalone export ([e4fb53c](https://github.com/wwnorton/design-system/commit/e4fb53c646af9f6280a5411c942affc3f1f4ebda))
- **react:** remove transitionEnd callback ([a8c7d13](https://github.com/wwnorton/design-system/commit/a8c7d131cbc5c214b525ff2e8e8e4d667604991c))
- **react:** reorder button props ([99bb417](https://github.com/wwnorton/design-system/commit/99bb417bea3490577db83a409fddd69fd1b399fc))
- **react:** rewrite disclosure as a function component ([4a12981](https://github.com/wwnorton/design-system/commit/4a12981776711488f6c8310b10bf81f8d09fa83a))
- **react:** simplify transition parsing ([1986156](https://github.com/wwnorton/design-system/commit/1986156f3978c1192f64177af0bb99e11c170bd2))
- **storybook:** update disclosure stories ([3fc58f6](https://github.com/wwnorton/design-system/commit/3fc58f65e8b9274ab8da0781c4760d2d914c233f))
- add canUseDOM to help with SSR ([663705e](https://github.com/wwnorton/design-system/commit/663705ec9bb4ce23ba327f88af78c37a2fe6afc7))
- move `children` description to the prop ([d18ffa9](https://github.com/wwnorton/design-system/commit/d18ffa985e5bfc9975306b92397c2b1126aee90c))
- move icon store to Icon component ([ee247b7](https://github.com/wwnorton/design-system/commit/ee247b78f7400500f62090643562f71273052397))
- move remaining hooks to standalone files ([7485511](https://github.com/wwnorton/design-system/commit/7485511ee0d2be923bd58a4aea862fb407ad827a))
- prefer storybook layout for centering ([9a1d5be](https://github.com/wwnorton/design-system/commit/9a1d5be7ab5725550cab392c75ae6913135f5d31))
- **react:** move token helpers to useToken hook ([1cffc76](https://github.com/wwnorton/design-system/commit/1cffc7619002abf76ee741bc09abcd45e6b0a617))
- **react:** remove idGen helper ([8e96643](https://github.com/wwnorton/design-system/commit/8e96643895bbcf09f7dec44ad4aece101b1d3994))
- **react:** use markdown links in ts docs ([7adbcc0](https://github.com/wwnorton/design-system/commit/7adbcc0d6eb765a17cceeb98d3d6160e9cb2b7d2))
- **react:** use more readable `tagName` and avoid `is` HTML conflict ([b02d6e0](https://github.com/wwnorton/design-system/commit/b02d6e08234ba8989943e37ca81cf13f5e369297))
- **react:** use updated hooks and utilities in all components ([4daac91](https://github.com/wwnorton/design-system/commit/4daac91250f9b0a08837ab2dc171aa25abe5b685))
- **storybook:** update button stories for v6 ([9172070](https://github.com/wwnorton/design-system/commit/9172070dead69f3d9d6308ebaf723805f2071d2a))
- prevent multi-prefixing ([2f4c8fb](https://github.com/wwnorton/design-system/commit/2f4c8fbe602583eb4621b63391dc5837597b4a31))
- remove unused utility ([8328440](https://github.com/wwnorton/design-system/commit/83284409c4bb794a74dbbfbefe0891890c5121d1))
- update main exports ([6784a0c](https://github.com/wwnorton/design-system/commit/6784a0ca952c47d2799ff57c440d1ad96478b952))
- use updated hooks and utilities in stories ([f570537](https://github.com/wwnorton/design-system/commit/f570537ea5edfb88fe0fbb48bf8d061c19e46cfd))

# [1.0.0-beta.2](https://github.com/wwnorton/design-system/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2020-08-07)

- feat(react)!: provide access to core tooltip props in components that use tooltips ([e7df6fd](https://github.com/wwnorton/design-system/commit/e7df6fd0bc4042d4b72a7526a15c18d976ac0e65))

### BREAKING CHANGES

- the `hideTooltipDelay` prop that was used in `Button`/`IconButton`/`Switch` has been removed. Use `tooltipProps={{ hideDelay: n }}` to replicate the behavior.

# [1.0.0-beta.1](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2020-07-30)

### Bug Fixes

- **react:** ensure that returnFocus doesn't have side effects ([eec5d6c](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/eec5d6c9201809db85afdf1d89804ee5bc1613fd))
- **react:** move deprecated keypress listener to keydown ([6306316](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/6306316d3d0e882599785fff88b63bea615636e2))
- **react:** render FieldInfo children in a fragment ([266e0d8](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/266e0d88a082848b9c523b0bddf2c69607a330b1))
- **react:** SVGElement does not exist on global ([f950cce](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f950cce50435d0de0efd0139182f401f0da97eda))

### Features

- **react:** explicitly disallow click listeners on icons ([10066de](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/10066de64fd0a8e58f09791e7a04474a2e942212))

* chore!: update the scope (nds -> wwnds) ([1c10f9f](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/1c10f9fe79dd10b8b6d518e5a1d0e47b4643b5e1))

### BREAKING CHANGES

- The design system scope is now `@wwnds`. Uninstall `@nds/{core,react}` and reinstall `@wwnds/{core,react}` to update and then change all imports to use the new package names.

# [1.0.0-beta.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.9.4...v1.0.0-beta.0) (2020-07-17)

### Bug Fixes

- **a11y:** dropdown should not have aria-expanded ([fdb6c09](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/fdb6c09445ac71b8e92ec4774c62049489bc8c5d))
- **react:** clear timeout on cleanup to prevent memory leak ([f1b991e](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f1b991e3093ad452f5448f81eb556ac7856a633b))
- **react:** remove the path from the a11y tree to prevent double speak ([4f2b5ca](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/4f2b5ca59648421646ecd28669b4497dca695fba))

### Code Refactoring

- TextField uses children for its label ([413649f](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/413649f99f35fc4e67922dac4720c10699c25315))
- **react:** rewrite checkbox as forwardRef ([6f313c0](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/6f313c0e1c77f9d91956a599dd2b314a711e423f))
- include close button by default ([7b44d6c](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/7b44d6cd14a03368e405fef6551eebd98e457239))
- **react:** remove focus callbacks ([fbfeb26](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/fbfeb26cf6521330176207d2726220008754c33b))
- **react:** simplify user-defined initial focus ([2c228b0](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/2c228b059a5fd992b427a1f35a44fd1d241f9a5b))
- extend other field components ([09d5bc4](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/09d5bc49fc4848719d7a0a405fa101ab57bfab94))

### Features

- **react:** add CheckboxGroup ([6645d6d](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/6645d6d5786814c910c1fb7623a5299037e28acd))
- **react:** add Choices container for easier selection control ([5422169](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/54221692127a175a048419f2c152221043b3f95a))
- **react:** add className prefixing to all components ([05d8c4d](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/05d8c4d5402a41a29faab94ca6571cac4c0b4c0f)), closes [#123](https://github.com/wwnorton/design-system/tree/main/packages/react/issues/123)
- **react:** add color & size props to icon ([2b41c21](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/2b41c213926364d23e13eb0e626c7a1d417f9669))
- **react:** add global configuration ([43dab2c](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/43dab2c84cba9362ce32e5372de5cdb61ce45d70))
- **react:** add hook to use props as state ([e24e1ab](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/e24e1ab43fa1760ef52da37545028ea75fd6b3a5))
- **react:** add LiveRegion component ([6bc907f](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/6bc907feb0a90bdf4627e8b2a30fb0b1061cc04d))
- **react:** add modal props to allow sticky header/footer ([7da5725](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/7da572522cc32aea4d8f8f25869338583d21b2ad))
- **react:** add RadioGroup ([685eeeb](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/685eeeb304bd8af75ace7d547237477781a7a59a))
- **react:** add screen reader-only helper styling ([7b2d4d6](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/7b2d4d6cc1673b917169012b2985f6d2d8330dc8))
- **react:** add search to list of allowed TextField types ([3bb86c7](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/3bb86c74ab0fdf4452d50566b1875f941854074d))
- **react:** add useSelect hook to help with multiselect ([401f767](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/401f7679b06f1186a9aa2d44564bd7fb844c3670))
- **react:** add useValidation for easier controlled validation ([69a56b9](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/69a56b9815ae2e4a8f5e1f95e3b90613d753ebb8))
- **react:** add validation for badInput ([373929c](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/373929c0d56710fe58af2ffb293b34349608fdc7))
- **react:** allow components to control the tooltip hiding delay ([cdb02f4](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/cdb02f4369f27348d5f58a963495ef86238a156a))
- **react:** allow custom icons to have a label ([f47f345](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f47f3454c81a3f84dbd726b7f35d4b295f05f70a))
- **react:** close the dropdown when it's disabled ([1ef0146](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/1ef014608d5e9c34e8eb63f6d340c466273c601c))
- **react:** ensure that screen reader users are notified of button changes ([c989fb5](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/c989fb59896695898ab45583686e10de844e43b9))
- **react:** expose all utilities as part of the public api ([2508d4a](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/2508d4a77d0b5f5bd9b08c2ecb054a21bff1f434))
- **react:** initial FieldAddon ([76b39e8](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/76b39e84c9cacae94b9108eafd6f131c21dc077f))
- **react:** initial FieldFeedback component ([cbfe261](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/cbfe2619394ad7ae70e9ab76050bdb07d4447de6))
- **react:** initial FieldInfo component ([34d7275](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/34d7275eb70e1ca8f36ec36da0a742be2efea854)), closes [#112](https://github.com/wwnorton/design-system/tree/main/packages/react/issues/112)
- **react:** make all disclosure callbacks controllable ([c4818cc](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/c4818ccbf0dab0d7e4a2f6619353146d6e38ad2b))
- **react:** make icons tooltipable ([bc7c6b6](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/bc7c6b637853325c42f0002a64057c41d0fc5fe5))
- **react:** polyfill aria-modal on modal open ([852fa62](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/852fa626b9e8b199e34c20a545cea369b40f08dc))
- **react:** tooltip button when icon-only ([e665600](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/e665600162295e47ee8e5a95afd7bc73921eadf4))
- **react:** use field info as a fieldset legend ([fce99d2](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/fce99d2efb5f45d19a739d40e5a37bb7bff476aa))
- add props and prefixing helpers ([db92524](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/db92524517f7e9eca51b2dc4f23434850191ad4f))
- add usePopper hook ([3d05dc2](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/3d05dc23032d3ec516992bba76136cdd08dfdd11))
- add useTooltip hook ([d1b5a8b](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/d1b5a8b1b0376cc3a15ed952641928fc4e41a30f))
- add useTriggers hook to handle open state ([ac55b8c](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/ac55b8c812bc1aea0224e44772655524d9dbef54))

* refactor(react)!: overhaul MultipleChoice as ChoiceField ([604beda](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/604bedadad9b919ea779ea2eb978c5d5c651e8d0))
* refactor(react)!: completely rewrite TextField ([c159266](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/c1592666c4abcf57f022a06fdddf8461bf950497))
* refactor(react)!: rewrite & simplify BaseInput ([2efe83e](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/2efe83e289c1273e62a71d06041f55e3c66cddb1))
* refactor(react)!: simplify validation ([4bfe73b](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/4bfe73b4127c811aeb2c4666bd1dec8fa17d7574))
* feat(react)!: complete rewrite of Dropdown ([cf072a2](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/cf072a2d165f40f054f74669da991944322251cf))

### BREAKING CHANGES

- The `label` prop has been removed from `TextField`, which now uses its children for its label.
- `MultipleChoice` has been removed in favor of the new `ChoiceField`, which will be rendered as a `<fieldset>` with either checkbox or radio choices, depending on whether the `multiple` prop is `true` or `false`.
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

## [0.9.4](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.9.3...v0.9.4) (2020-06-22)

### Bug Fixes

- **react:** only return focus when actually closing ([a332ce6](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/a332ce6874b97ef4082e342466e6cb02c25416c3))

## [0.9.3](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.9.2...v0.9.3) (2020-06-22)

### Bug Fixes

- **react:** ensure that internal BaseButtons do not submit on click ([b69a97f](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/b69a97f112d016b8ab95fbe841ea4de95efd2dc7))

## [0.9.2](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.9.1...v0.9.2) (2020-06-08)

**Note:** Version bump only for package @wwnds/react

## [0.9.1](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.9.0...v0.9.1) (2020-06-03)

### Bug Fixes

- **react:** use relative paths ([2b97289](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/2b97289989edecd2ba2eb58926eeebdff3d00cd5))

# [0.9.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.8.1...v0.9.0) (2020-05-31)

### Features

- **react:** add icon variants ([222e7b2](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/222e7b20411e09edf10dd3dc909b7b5bb56e1cb0))

## [0.8.1](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.8.0...v0.8.1) (2020-05-08)

**Note:** Version bump only for package @wwnds/react

# [0.8.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.7.0...v0.8.0) (2020-05-02)

### Bug Fixes

- **react:** export Modal as a top-level component ([ad4ac4a](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/ad4ac4a0de25ea5eeed135929a3ec65d8e0e5ff1))
- **react:** only apply modifier if name is specified on Icon ([f1efc32](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f1efc327acdb9bc88f266aabfa747d5dfbdc8b99))
- **react:** use a real HTML comment in SVG source ([1adff2a](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/1adff2aee412b6126b31e7ceebd1920b135cece8))

### Features

- **react:** initial BaseListbox and BaseListOption ([495dc72](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/495dc7211a6b3ea2615d1881f1d5d3db356e290e))
- **react:** initial BasePopper and Tooltip ([75815a5](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/75815a5f23980bf71f853e64bbaeee7135923a78))
- **react:** initial Dropdown ([8eac9d7](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/8eac9d7326387aa609d0f73ce2f228f7aad4114d))

# [0.7.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.6.1...v0.7.0) (2020-04-01)

### Bug Fixes

- **react:** move react & react-dom to dev/peerDeps ([2268999](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/2268999ba7fcbd25614a784b12cb8e49e6b29b96))
- **switch:** use props to update state ([60757eb](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/60757ebdfe5720a5765dea7cff65fd7953b24be6)), closes [#100](https://github.com/wwnorton/design-system/tree/main/packages/react/issues/100)

### Features

- **modal:** add onRequestFocusWrap prop ([f2b44ba](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f2b44ba223582703df86276c14b02735585c2213))
- **react:** add BaseDialog ([6920ed9](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/6920ed98e2c92f2380abac1c765770c2fa49d591))
- **react:** add createValidator factory function ([9b2537a](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/9b2537a8decc1b09e8b1b02ab8cb36dd082dcd7a))
- **react:** add focusable utilities ([9c44922](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/9c4492252332bf2ad3fdbcd4261ecedbea3a45ab))
- **react:** add hook to merge forwarded refs ([152fccd](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/152fccdd13998ac0649d23236cb287ef02ee9f78))
- **react:** add prop to disable browser tooltips on inputs ([bcae744](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/bcae744714645a0b59f38823016fc519386e11af))
- **react:** initial Modal dialog ([585024b](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/585024ba32b59de55d2ff7169dce2f45dd0bf141))
- **switch:** flip state display prop ([c68dadf](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/c68dadf857f4a08aaf7f66fe1cf75236b28b4e70))
- **TextField:** allow users to customize feedback ([133aa1a](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/133aa1ab69b16b2088a4b865a60efc55302dbf43))

## [0.6.1](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.6.0...v0.6.1) (2020-03-03)

**Note:** Version bump only for package @wwnds/react

# [0.6.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.5.1...v0.6.0) (2020-02-28)

### Bug Fixes

- **a11y:** explicitly set label when multiple exist ([e8fc401](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/e8fc401dd3a37c28e9a165b75a26e29e463fcdc7))
- **react:** ensure that ids can be passed as props ([f68d480](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f68d4804a4cf7cf1ad15862f23e51f0c0e10ddf6)), closes [#82](https://github.com/wwnorton/design-system/tree/main/packages/react/issues/82)
- remove unnecessary import ([cdfbce5](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/cdfbce5716b26deb920b55381a6045aac94b5700))
- **react:** ensure that onClick is triggered on switch ([0e2b2e3](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/0e2b2e35a18730b54f37c72a0b7877ba66c36786))
- **storybook:** upgrade storybook ([03705f9](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/03705f9ec1163f430d0595ae7f8b948159b60e4e))

### Features

- **react:** add support for custom switch states ([4e79518](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/4e79518fea328de8670802ad598e2526f444234f))
- initial MultipleChoice and Choice components ([67df099](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/67df0995b0299137ca718e251180e648a4b070db))
- **react:** add icon utility ([7a060e6](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/7a060e6f2c90b04bd304b82b12d17f12a3c78cc8))
- **react:** add IconButton component ([96df9a9](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/96df9a9796748b9f8c9d8537386a76806561e469))
- **react:** add support for icons in buttons ([736e8dd](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/736e8dd4fb10b74686a3731e405302d9cb900e33))
- **react:** allow custom icons and CSS height ([f43bd30](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f43bd30eb4d27fea482b0409b4417474618e603d))
- add material minus icon ([5fcb75b](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/5fcb75be7abf8bf4305d064360c5d5b99c4cd731))
- add react radio implementation ([3b7f57b](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/3b7f57b28e188efb41e474eb0d837a0a742320f9))
- initial checkbox update commit ([d8243b1](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/d8243b1ba728eedaa4a0c30ee46396a0cc4c13b3))
- **react:** initial BaseSVG ([2912aa5](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/2912aa5b0125247c0c258f0e5a663d8f654327f8))
- **react:** initial icon ([0447df8](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/0447df84ab638cec582a86fee87ef0d089e077da))

## [0.5.1](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.5.0...v0.5.1) (2020-02-04)

### Bug Fixes

- **react:** add missing components to main export ([5d8ccd4](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/5d8ccd4d7373adcedd0768879a40f8352cbcf633))

# [0.5.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.4.0...v0.5.0) (2020-01-31)

### Bug Fixes

- **textfield:** apply class to the textfield, not input ([5567278](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/5567278d074017688ea0dc24735230bfe0510998))
- include props on forwardref generc ([99b2843](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/99b2843b4b54c66ff0be76a232f140c1778fbc18))
- **a11y:** actually disable the switch ([d8e340c](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/d8e340c8fa7be6654302a05c69dccc86ae4a11dc))
- **button:** deactivate on blur ([0b22096](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/0b22096dc01b155b67a7a2bd396c80c0bf080458))

### Features

- **react:** update text field to use new validation api ([34de3ef](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/34de3efc61979646df307b0e4f56d838d5b0d7b5))
- utilities for form validation feedback ([948ea6a](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/948ea6abdaf51600a9ff995307df2b1f28648b8b))
- **a11y:** improve aria markup of checkbox ([134f466](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/134f466737c2ada8d2ed874fe5c2b8d35934a2b5))
- add initial testing framework ([a80f1a9](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/a80f1a99443aa7eb6bdaa87945cf055ab4231a81))
- add react checkbox implementation ([e51f78a](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/e51f78af45d785d8114bb11fc1188f751e3835ed))

# [0.4.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.3.0...v0.4.0) (2020-01-02)

### Bug Fixes

- update react version in eslintrc file ([f192fe4](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f192fe46286ab14d46ab2703d3f9bcd222a470ed))
- use bem-style class names ([bd92dcd](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/bd92dcdb04958edafdc4537f964331fe3b20a14f))

### Features

- **core:** initial textfield implementation ([15a66c4](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/15a66c46758c659ab04c36966429a639c8310c93))
- **react:** add textualState prop to toggle ([b280067](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/b28006702859eab8eb5b5ee73ca1260ee36c24a6))
- **react:** initial disclosure implementation ([f1ca740](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f1ca7401ce1bc04d29143811e4281691aab13783))
- **react:** initial text field ([d7ec06c](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/d7ec06cf9fd4ebfc9a11ce4d7e619929453addd5))
- **react:** more consistent callbacks ([34bddfc](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/34bddfc38221f5170b60d5e6bc3ae5e71278ed7f))

# [0.3.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.2.1...v0.3.0) (2019-11-27)

**Note:** Version bump only for package @wwnds/react

## [0.2.1](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.2.0...v0.2.1) (2019-11-07)

### Bug Fixes

- **react:** output and use type declarations ([a1e1dc9](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/a1e1dc9601108e06361dceba9b0f82f93e8319db))

# [0.2.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.1.0...v0.2.0) (2019-10-31)

### Features

- **react:** add forwardrefs for root button ([60bd56f](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/60bd56fa30421d7319c819e1315a6ed9d00af4bd))
- **react:** add storybook and typescript ([0df3012](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/0df3012ce911817f738b01692e5f126a268697ae))
- **react:** apply all attributes to child button ([2eb758e](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/2eb758ec61fc22ea428cf7aeb0975591471135ad))
- **react:** initial button ([8615e91](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/8615e9180bd92b17ace233c1b8114a364eccbfc1))
- **react:** initial toggle button ([ffe107c](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/ffe107ce6aaefcb5c4a0076575c42997c21e92e8))

# 0.1.0 (2019-09-27)

**Note:** Version bump only for package @wwnds/react
