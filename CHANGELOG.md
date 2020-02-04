# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.5.1](https://gitlab.com/wwnorton/platform/design-system/compare/v0.5.0...v0.5.1) (2020-02-04)

### Bug Fixes

- build all files to root of dist ([7698a82](https://gitlab.com/wwnorton/platform/design-system/commit/7698a8286ac1dcbdd7ae04858468f8821e7b3720))
- **react:** add missing components to main export ([5d8ccd4](https://gitlab.com/wwnorton/platform/design-system/commit/5d8ccd4d7373adcedd0768879a40f8352cbcf633))

# [0.5.0](https://gitlab.com/wwnorton/platform/design-system/compare/v0.4.0...v0.5.0) (2020-01-31)

### Bug Fixes

- **textfield:** apply class to the textfield, not input ([5567278](https://gitlab.com/wwnorton/platform/design-system/commit/5567278d074017688ea0dc24735230bfe0510998))
- include props on forwardref generc ([99b2843](https://gitlab.com/wwnorton/platform/design-system/commit/99b2843b4b54c66ff0be76a232f140c1778fbc18))
- **a11y:** actually disable the switch ([d8e340c](https://gitlab.com/wwnorton/platform/design-system/commit/d8e340c8fa7be6654302a05c69dccc86ae4a11dc))
- **button:** deactivate on blur ([0b22096](https://gitlab.com/wwnorton/platform/design-system/commit/0b22096dc01b155b67a7a2bd396c80c0bf080458))
- **core:** reset needs tokens ([cb11d21](https://gitlab.com/wwnorton/platform/design-system/commit/cb11d213e8f33a8159e484779f455f93da6fbdfe))
- **core:** use the correct destination ([e0fd22f](https://gitlab.com/wwnorton/platform/design-system/commit/e0fd22fed7a2b8822543c6dee0e50c6d37690596))

### chore

- **deps:** update husky to v3 ([54adcae](https://gitlab.com/wwnorton/platform/design-system/commit/54adcae8ec910308bf68495a5f34fb1a484fb9b6))

### Features

- **core:** validation errors now render in lists ([d82134e](https://gitlab.com/wwnorton/platform/design-system/commit/d82134e7c450ed94159363bc503f0aa76b2184d2))
- **react:** update text field to use new validation api ([34de3ef](https://gitlab.com/wwnorton/platform/design-system/commit/34de3efc61979646df307b0e4f56d838d5b0d7b5))
- utilities for form validation feedback ([948ea6a](https://gitlab.com/wwnorton/platform/design-system/commit/948ea6abdaf51600a9ff995307df2b1f28648b8b))
- **a11y:** improve aria markup of checkbox ([134f466](https://gitlab.com/wwnorton/platform/design-system/commit/134f466737c2ada8d2ed874fe5c2b8d35934a2b5))
- **core:** add motion duration multiplier ([5618427](https://gitlab.com/wwnorton/platform/design-system/commit/56184271a3da51d7272dec17b3dd68f3a2b7429f))
- **core:** add reduce-motion mixin ([2a88388](https://gitlab.com/wwnorton/platform/design-system/commit/2a88388dee4cb494e854443d80d52652e64e5aca))
- **core:** add sr-only mixin ([725a3c6](https://gitlab.com/wwnorton/platform/design-system/commit/725a3c6f9c83e8006dd10f76ce24c5c7004053fc))
- add checkbox to @nds/core ([8023ef9](https://gitlab.com/wwnorton/platform/design-system/commit/8023ef99681a6f99f12094f3bfd904ff477ee01d))
- add initial testing framework ([a80f1a9](https://gitlab.com/wwnorton/platform/design-system/commit/a80f1a99443aa7eb6bdaa87945cf055ab4231a81))
- add react checkbox implementation ([e51f78a](https://gitlab.com/wwnorton/platform/design-system/commit/e51f78af45d785d8114bb11fc1188f751e3835ed))
- add react checkbox implementation ([22db133](https://gitlab.com/wwnorton/platform/design-system/commit/22db133dbca4dbeab752ff6cd040f3b2d5d5fa16))
- **core:** initial disclosure styling ([e8ddaf9](https://gitlab.com/wwnorton/platform/design-system/commit/e8ddaf92cb72651be0c0ffb1ae89b56d69b18170))

### BREAKING CHANGES

- **deps:** now requires Node v10+

# [0.4.0](https://gitlab.com/wwnorton/platform/design-system/compare/v0.3.0...v0.4.0) (2020-01-02)

### Bug Fixes

- update colors saturation ([816a3a2](https://gitlab.com/wwnorton/platform/design-system/commit/816a3a219c79d3717c6997d9bebc4fc0822e52ff))
- update react version in eslintrc file ([f192fe4](https://gitlab.com/wwnorton/platform/design-system/commit/f192fe46286ab14d46ab2703d3f9bcd222a470ed))
- use bem-style class names ([bd92dcd](https://gitlab.com/wwnorton/platform/design-system/commit/bd92dcdb04958edafdc4537f964331fe3b20a14f))

### Features

- **core:** add :focus-visible for the future 🚀 ([56695c9](https://gitlab.com/wwnorton/platform/design-system/commit/56695c90e5fff148b1001c791ec24ebaac0fbe47))
- **core:** initial textfield implementation ([15a66c4](https://gitlab.com/wwnorton/platform/design-system/commit/15a66c46758c659ab04c36966429a639c8310c93))
- **core:** initial toggle/switch styling ([6c847fd](https://gitlab.com/wwnorton/platform/design-system/commit/6c847fd3f480599fc1541434b8240fda0e3d3bb0))
- **react:** add textualState prop to toggle ([b280067](https://gitlab.com/wwnorton/platform/design-system/commit/b28006702859eab8eb5b5ee73ca1260ee36c24a6))
- **react:** initial disclosure implementation ([f1ca740](https://gitlab.com/wwnorton/platform/design-system/commit/f1ca7401ce1bc04d29143811e4281691aab13783))
- **react:** initial text field ([d7ec06c](https://gitlab.com/wwnorton/platform/design-system/commit/d7ec06cf9fd4ebfc9a11ce4d7e619929453addd5))
- **react:** more consistent callbacks ([34bddfc](https://gitlab.com/wwnorton/platform/design-system/commit/34bddfc38221f5170b60d5e6bc3ae5e71278ed7f))

# [0.3.0](https://gitlab.com/wwnorton/platform/design-system/compare/v0.2.1...v0.3.0) (2019-11-27)

### Features

- add initial font stack ([6ee1d42](https://gitlab.com/wwnorton/platform/design-system/commit/6ee1d42e1c01de4371253668f9913784290b995a)), closes [#34](https://gitlab.com/wwnorton/platform/design-system/issues/34)
- add initial state colors ([933fbd0](https://gitlab.com/wwnorton/platform/design-system/commit/933fbd0aae05d8cf5550fe7938bd11fd8ff04e64)), closes [#20](https://gitlab.com/wwnorton/platform/design-system/issues/20)
- use powers of 10 for all color steps ([03b3237](https://gitlab.com/wwnorton/platform/design-system/commit/03b3237e0572e85a15f0ddcef4034072a5d71ef4)), closes [#47](https://gitlab.com/wwnorton/platform/design-system/issues/47)
- **core:** add font smoothing mixin ([ae3fa3a](https://gitlab.com/wwnorton/platform/design-system/commit/ae3fa3a18a80ff7ef7977c0af2441b5d1ac443a6))
- **core:** add hd media query mixin and tokens ([c819ab0](https://gitlab.com/wwnorton/platform/design-system/commit/c819ab05987dbe5a05c1f3ef0c496046ee4fc536))
- **core:** initial reset - font smoothing on body ([70500d1](https://gitlab.com/wwnorton/platform/design-system/commit/70500d1197b8d59a1df8965c924a434b2e75edbe))

## [0.2.1](https://gitlab.com/wwnorton/platform/design-system/compare/v0.2.0...v0.2.1) (2019-11-07)

### Bug Fixes

- **react:** output and use type declarations ([a1e1dc9](https://gitlab.com/wwnorton/platform/design-system/commit/a1e1dc9601108e06361dceba9b0f82f93e8319db))

# [0.2.0](https://gitlab.com/wwnorton/platform/design-system/compare/v0.1.0...v0.2.0) (2019-10-31)

### Bug Fixes

- **ci:** set docs dest correctly when at root ([e136df9](https://gitlab.com/wwnorton/platform/design-system/commit/e136df95ea35d538baa02bc3e1a7af117558d7b3))
- **docs:** spelling ([e5250cf](https://gitlab.com/wwnorton/platform/design-system/commit/e5250cf74d968ba68a22c715d0495668d76079c0))
- **docs:** use singular link ([b85f23e](https://gitlab.com/wwnorton/platform/design-system/commit/b85f23e6d655432bbf631fc876092fee9f8cd147))
- **docs:** use symlinked package ([53854d3](https://gitlab.com/wwnorton/platform/design-system/commit/53854d3fe462d5fa8dd11a9af7db9b6c05bce221))
- focus ring should not have blur ([92c6a98](https://gitlab.com/wwnorton/platform/design-system/commit/92c6a98e796139b4694eca262686efbe58dec85a))

### Features

- **components:** add global mixins for focus ring ([4da0658](https://gitlab.com/wwnorton/platform/design-system/commit/4da0658a000499cf1b59ebf1bb23c70c8fd430d0))
- **docs:** add @nds/core to docs for examples ([16052d2](https://gitlab.com/wwnorton/platform/design-system/commit/16052d285322f7243884b099ddd4f064e65f8b0b))
- **docs:** initial accordion usage ([73e7d31](https://gitlab.com/wwnorton/platform/design-system/commit/73e7d31d163dd9512f6e4c84f16f5b672c8cc695))
- **docs:** initial checkbox usage ([e4d7555](https://gitlab.com/wwnorton/platform/design-system/commit/e4d75559d1afba563ff45b7a1a65b9edd1c79e6f))
- **docs:** initial disclosure usage ([82e1afd](https://gitlab.com/wwnorton/platform/design-system/commit/82e1afd1dc40ce9f99dfcb3f23ddfb88aa8e6c69))
- **docs:** initial dropdown usage ([4111626](https://gitlab.com/wwnorton/platform/design-system/commit/4111626b656afdf0cb2ea0ece4004c92dc27d237))
- **docs:** initial layout grid usage ([19f919e](https://gitlab.com/wwnorton/platform/design-system/commit/19f919e761c00eeed6f4ac3fdbfe68e589a7faea))
- **docs:** initial radio button usage ([15ee880](https://gitlab.com/wwnorton/platform/design-system/commit/15ee88060c1193200a80a77cf12ac8985320ea4a))
- **docs:** initial toggle usage ([58178bb](https://gitlab.com/wwnorton/platform/design-system/commit/58178bb5f29b0ba3b85a6bab51d387086262b1cb))
- **react:** add forwardrefs for root button ([b106308](https://gitlab.com/wwnorton/platform/design-system/commit/b106308294f485d8d6c0703becfd55526461390f))
- **react:** add storybook and typescript ([9a2a4a6](https://gitlab.com/wwnorton/platform/design-system/commit/9a2a4a69503e32fd088b176c2c58e1bed3bff15b))
- **react:** apply all attributes to child button ([23af52b](https://gitlab.com/wwnorton/platform/design-system/commit/23af52b3a42629b48f645681f8539f50acf8e2b8))
- **react:** initial button ([c9a2dd0](https://gitlab.com/wwnorton/platform/design-system/commit/c9a2dd0e0feee01edfe132e685c0071d3aeec916))
- **react:** initial toggle button ([e7cb513](https://gitlab.com/wwnorton/platform/design-system/commit/e7cb5136256d3d23f5593fbe42aee68099aa9dc7))
- consolidate into core package ([05dec0d](https://gitlab.com/wwnorton/platform/design-system/commit/05dec0d37599eb31e64058fee9ab526193a8a34c))
- implement the 3 buttons as mixins ([c897d72](https://gitlab.com/wwnorton/platform/design-system/commit/c897d72cd823f697f1e74cb4daa4158533b4a131))
- make docs an unpublished package ([45aeeb3](https://gitlab.com/wwnorton/platform/design-system/commit/45aeeb390b64d8fc51c32b55e489daa90102dae7))
- **tokens:** add initial box shadow tokens ([d54e18b](https://gitlab.com/wwnorton/platform/design-system/commit/d54e18b0c255c0338bad811e50c7fcfc6074bed8))
- **tokens:** initial motion tokens ([fd1b021](https://gitlab.com/wwnorton/platform/design-system/commit/fd1b0215eebf16da82cf99a8761734bd124c7520))
- **tokens:** rename theme colors to functional ([faac226](https://gitlab.com/wwnorton/platform/design-system/commit/faac226e61b3d64e292527481a42a818ccee5cc3))
- refactored button ([56beef5](https://gitlab.com/wwnorton/platform/design-system/commit/56beef52b04df60acbc173348eb51b7ae3c3047c))
- updated per zeplin color sample ([227df2d](https://gitlab.com/wwnorton/platform/design-system/commit/227df2dcd3c539ce86a74b81efea2ab0e5dde8da))

# 0.1.0 (2019-09-27)

### Bug Fixes

- **ci:** base must end in a slash ([832369c](https://gitlab.com/wwnorton/platform/design-system/commit/832369c))
- **lint:** use correct override syntax ([7813305](https://gitlab.com/wwnorton/platform/design-system/commit/7813305))
- **lint:** use correct override syntax ([9f8f81e](https://gitlab.com/wwnorton/platform/design-system/commit/9f8f81e))

### Features

- **components:** initial button implementation ([5ad44d1](https://gitlab.com/wwnorton/platform/design-system/commit/5ad44d1))
- **components:** initial components structure ([e59f2e9](https://gitlab.com/wwnorton/platform/design-system/commit/e59f2e9))
- **components:** initial components structure ([aba7a7b](https://gitlab.com/wwnorton/platform/design-system/commit/aba7a7b))
- **docs:** use vuepress to render docs ([946a1b9](https://gitlab.com/wwnorton/platform/design-system/commit/946a1b9))
- **docs:** use vuepress to render docs ([8cb7bea](https://gitlab.com/wwnorton/platform/design-system/commit/8cb7bea))
