# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.9.4](https://gitlab.com/wwnorton/platform/design-system/compare/v0.9.3...v0.9.4) (2020-06-22)

### Bug Fixes

- **react:** only return focus when actually closing ([a332ce6](https://gitlab.com/wwnorton/platform/design-system/commit/a332ce6874b97ef4082e342466e6cb02c25416c3))

## [0.9.3](https://gitlab.com/wwnorton/platform/design-system/compare/v0.9.2...v0.9.3) (2020-06-22)

### Bug Fixes

- **react:** ensure that internal BaseButtons do not submit on click ([b69a97f](https://gitlab.com/wwnorton/platform/design-system/commit/b69a97f112d016b8ab95fbe841ea4de95efd2dc7))

## [0.9.2](https://gitlab.com/wwnorton/platform/design-system/compare/v0.9.1...v0.9.2) (2020-06-08)

### Bug Fixes

- ensure that type definitions aren't transpiled ([cdafcd4](https://gitlab.com/wwnorton/platform/design-system/commit/cdafcd4af2ee04580ec33576b35ac23fe969fd4d))

## [0.9.1](https://gitlab.com/wwnorton/platform/design-system/compare/v0.9.0...v0.9.1) (2020-06-03)

### Bug Fixes

- **react:** use relative paths ([2b97289](https://gitlab.com/wwnorton/platform/design-system/commit/2b97289989edecd2ba2eb58926eeebdff3d00cd5))

# [0.9.0](https://gitlab.com/wwnorton/platform/design-system/compare/v0.8.1...v0.9.0) (2020-05-31)

### Features

- **react:** add icon variants ([222e7b2](https://gitlab.com/wwnorton/platform/design-system/commit/222e7b20411e09edf10dd3dc909b7b5bb56e1cb0))

## [0.8.1](https://gitlab.com/wwnorton/platform/design-system/compare/v0.8.0...v0.8.1) (2020-05-08)

**Note:** Version bump only for package nds

# [0.8.0](https://gitlab.com/wwnorton/platform/design-system/compare/v0.7.0...v0.8.0) (2020-05-02)

### Bug Fixes

- **core:** reduce focus ring rect by 1px ([2d3d0b1](https://gitlab.com/wwnorton/platform/design-system/commit/2d3d0b11bea2d0054dd0eb973e0feb19a0158e25))
- **react:** export Modal as a top-level component ([ad4ac4a](https://gitlab.com/wwnorton/platform/design-system/commit/ad4ac4a0de25ea5eeed135929a3ec65d8e0e5ff1))
- **react:** only apply modifier if name is specified on Icon ([f1efc32](https://gitlab.com/wwnorton/platform/design-system/commit/f1efc327acdb9bc88f266aabfa747d5dfbdc8b99))
- **react:** use a real HTML comment in SVG source ([1adff2a](https://gitlab.com/wwnorton/platform/design-system/commit/1adff2aee412b6126b31e7ceebd1920b135cece8))

### Features

- **core:** initial dropdown tokens, mixins, and declarations ([596602a](https://gitlab.com/wwnorton/platform/design-system/commit/596602a9c81bbab4a65cd5fa6f78baf442fc04e5))
- **react:** initial BaseListbox and BaseListOption ([495dc72](https://gitlab.com/wwnorton/platform/design-system/commit/495dc7211a6b3ea2615d1881f1d5d3db356e290e))
- **react:** initial BasePopper and Tooltip ([75815a5](https://gitlab.com/wwnorton/platform/design-system/commit/75815a5f23980bf71f853e64bbaeee7135923a78))
- **react:** initial Dropdown ([8eac9d7](https://gitlab.com/wwnorton/platform/design-system/commit/8eac9d7326387aa609d0f73ce2f228f7aad4114d))

# [0.7.0](https://gitlab.com/wwnorton/platform/design-system/compare/v0.6.1...v0.7.0) (2020-04-01)

### Bug Fixes

- **button:** 1px button borders ([ff40118](https://gitlab.com/wwnorton/platform/design-system/commit/ff40118bed791a0edb089b99cbcdebe9455fe6d6)), closes [#97](https://gitlab.com/wwnorton/platform/design-system/issues/97)
- **button:** use correct token ([bacc2f6](https://gitlab.com/wwnorton/platform/design-system/commit/bacc2f6ffebb514f7e7c8510f5c7b5396f54bfb8))
- **core:** ghost button should be transparent ([70711f2](https://gitlab.com/wwnorton/platform/design-system/commit/70711f2fefca434656eee688d61cf904ec3d6bfb))
- **react:** move react & react-dom to dev/peerDeps ([2268999](https://gitlab.com/wwnorton/platform/design-system/commit/2268999ba7fcbd25614a784b12cb8e49e6b29b96))
- **switch:** use props to update state ([60757eb](https://gitlab.com/wwnorton/platform/design-system/commit/60757ebdfe5720a5765dea7cff65fd7953b24be6)), closes [#100](https://gitlab.com/wwnorton/platform/design-system/issues/100)

### Features

- **modal:** add onRequestFocusWrap prop ([f2b44ba](https://gitlab.com/wwnorton/platform/design-system/commit/f2b44ba223582703df86276c14b02735585c2213))
- **react:** add BaseDialog ([6920ed9](https://gitlab.com/wwnorton/platform/design-system/commit/6920ed98e2c92f2380abac1c765770c2fa49d591))
- **react:** add createValidator factory function ([9b2537a](https://gitlab.com/wwnorton/platform/design-system/commit/9b2537a8decc1b09e8b1b02ab8cb36dd082dcd7a))
- **react:** add focusable utilities ([9c44922](https://gitlab.com/wwnorton/platform/design-system/commit/9c4492252332bf2ad3fdbcd4261ecedbea3a45ab))
- **react:** add hook to merge forwarded refs ([152fccd](https://gitlab.com/wwnorton/platform/design-system/commit/152fccdd13998ac0649d23236cb287ef02ee9f78))
- **react:** add prop to disable browser tooltips on inputs ([bcae744](https://gitlab.com/wwnorton/platform/design-system/commit/bcae744714645a0b59f38823016fc519386e11af))
- **react:** initial Modal dialog ([585024b](https://gitlab.com/wwnorton/platform/design-system/commit/585024ba32b59de55d2ff7169dce2f45dd0bf141))
- **switch:** flip state display prop ([c68dadf](https://gitlab.com/wwnorton/platform/design-system/commit/c68dadf857f4a08aaf7f66fe1cf75236b28b4e70))
- **TextField:** allow users to customize feedback ([133aa1a](https://gitlab.com/wwnorton/platform/design-system/commit/133aa1ab69b16b2088a4b865a60efc55302dbf43))

## [0.6.1](https://gitlab.com/wwnorton/platform/design-system/compare/v0.6.0...v0.6.1) (2020-03-03)

### Bug Fixes

- **core:** add missing components ([13688c7](https://gitlab.com/wwnorton/platform/design-system/commit/13688c756c077f1b4848b95a760731d95dae1163))
- **core:** import missing component tokens ([c1e27c2](https://gitlab.com/wwnorton/platform/design-system/commit/c1e27c2221fcfca5c4d142fc654f2ce3a4decc37))

# [0.6.0](https://gitlab.com/wwnorton/platform/design-system/compare/v0.5.1...v0.6.0) (2020-02-28)

### Bug Fixes

- **a11y:** explicitly set label when multiple exist ([e8fc401](https://gitlab.com/wwnorton/platform/design-system/commit/e8fc401dd3a37c28e9a165b75a26e29e463fcdc7))
- **react:** ensure that ids can be passed as props ([f68d480](https://gitlab.com/wwnorton/platform/design-system/commit/f68d4804a4cf7cf1ad15862f23e51f0c0e10ddf6)), closes [#82](https://gitlab.com/wwnorton/platform/design-system/issues/82)
- **react:** position checkbox control the same as radio ([377c654](https://gitlab.com/wwnorton/platform/design-system/commit/377c6541d28fac66ac7c56caf785ba15d13de3cc))
- remove unnecessary import ([cdfbce5](https://gitlab.com/wwnorton/platform/design-system/commit/cdfbce5716b26deb920b55381a6045aac94b5700))
- **react:** ensure that onClick is triggered on switch ([0e2b2e3](https://gitlab.com/wwnorton/platform/design-system/commit/0e2b2e35a18730b54f37c72a0b7877ba66c36786))
- **react:** position checkbox control the same as radio ([9df00d6](https://gitlab.com/wwnorton/platform/design-system/commit/9df00d6cc1bcf3eaebadc78c616dd58194ae99d0))
- remove unnecessary import ([e4b03a7](https://gitlab.com/wwnorton/platform/design-system/commit/e4b03a78ea2c44218ff477ca36a72ae45dfa4312))
- **react:** ensure that onClick is triggered on switch ([3612844](https://gitlab.com/wwnorton/platform/design-system/commit/3612844b25649b8955857c39979095bdca440670))
- **react:** ensure that onClick is triggered on switch ([8adac0a](https://gitlab.com/wwnorton/platform/design-system/commit/8adac0a1e0e5a814a8e3584a4b4be2e9b63bd646))
- **react:** ensure that onClick is triggered on switch ([d6a92da](https://gitlab.com/wwnorton/platform/design-system/commit/d6a92da7f849e64932c8ecb57b6cdff63d4b145d))
- **react:** ensure that onClick is triggered on switch ([c58b37c](https://gitlab.com/wwnorton/platform/design-system/commit/c58b37cc801ac9986f55d8a832a73de577193468))
- fix styling for radio when its disabled ([a3e90cd](https://gitlab.com/wwnorton/platform/design-system/commit/a3e90cd04371cd80ea0f168912e35e1b0c9290c5))
- **storybook:** upgrade storybook ([03705f9](https://gitlab.com/wwnorton/platform/design-system/commit/03705f9ec1163f430d0595ae7f8b948159b60e4e))

### Features

- **core:** add icon-only button modifier & declaration ([8fb9ec6](https://gitlab.com/wwnorton/platform/design-system/commit/8fb9ec61fd781d7ec5ac6b74e1493d471a659376))
- **core:** add multiple choice ([39db26e](https://gitlab.com/wwnorton/platform/design-system/commit/39db26e41455da37c0b8738f86101212af541d44))
- **core:** add multiple choice ([d695dc0](https://gitlab.com/wwnorton/platform/design-system/commit/d695dc006313bfd7cdf1be1942cc8d9b92262e94))
- **core:** add very basic icon styling ([3eaa343](https://gitlab.com/wwnorton/platform/design-system/commit/3eaa343bb48fdcc00c8e41b7d80eda6b83769763))
- **react:** add IconButton component ([96df9a9](https://gitlab.com/wwnorton/platform/design-system/commit/96df9a9796748b9f8c9d8537386a76806561e469))
- **react:** add support for custom switch states ([4e79518](https://gitlab.com/wwnorton/platform/design-system/commit/4e79518fea328de8670802ad598e2526f444234f))
- add material minus icon ([5fcb75b](https://gitlab.com/wwnorton/platform/design-system/commit/5fcb75be7abf8bf4305d064360c5d5b99c4cd731))
- add react radio implementation ([3b7f57b](https://gitlab.com/wwnorton/platform/design-system/commit/3b7f57b28e188efb41e474eb0d837a0a742320f9))
- add sass radio styles ([677bbed](https://gitlab.com/wwnorton/platform/design-system/commit/677bbed1404df793c30f576a3636a653f04be60e))
- initial checkbox update commit ([d8243b1](https://gitlab.com/wwnorton/platform/design-system/commit/d8243b1ba728eedaa4a0c30ee46396a0cc4c13b3))
- initial MultipleChoice and Choice components ([67df099](https://gitlab.com/wwnorton/platform/design-system/commit/67df0995b0299137ca718e251180e648a4b070db))
- initial MultipleChoice and Choice components ([d739823](https://gitlab.com/wwnorton/platform/design-system/commit/d7398236b4c9da5b7577b0705a8729474fbcd219))
- initial MultipleChoice and Choice components ([6eb1136](https://gitlab.com/wwnorton/platform/design-system/commit/6eb1136bd51287fe7357b95cb2664459cfda2e22))
- **core:** initial icon ([c9867cd](https://gitlab.com/wwnorton/platform/design-system/commit/c9867cdf1d1384e1f30106bafd8420f98e5c2cd5))
- **react:** add icon utility ([7a060e6](https://gitlab.com/wwnorton/platform/design-system/commit/7a060e6f2c90b04bd304b82b12d17f12a3c78cc8))
- **react:** add support for icons in buttons ([736e8dd](https://gitlab.com/wwnorton/platform/design-system/commit/736e8dd4fb10b74686a3731e405302d9cb900e33))
- **react:** allow custom icons and CSS height ([f43bd30](https://gitlab.com/wwnorton/platform/design-system/commit/f43bd30eb4d27fea482b0409b4417474618e603d))
- initial MultipleChoice and Choice components ([2eaaeb7](https://gitlab.com/wwnorton/platform/design-system/commit/2eaaeb709c33dc00048519026e80fbb6bbc82ac4))
- initial MultipleChoice and Choice components ([4d78082](https://gitlab.com/wwnorton/platform/design-system/commit/4d780825ae3fa75847e05b0fd883cd388a8a4ecf))
- **react:** initial BaseSVG ([2912aa5](https://gitlab.com/wwnorton/platform/design-system/commit/2912aa5b0125247c0c258f0e5a663d8f654327f8))
- **react:** initial icon ([0447df8](https://gitlab.com/wwnorton/platform/design-system/commit/0447df84ab638cec582a86fee87ef0d089e077da))

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
- add checkbox to @wwnds/core ([8023ef9](https://gitlab.com/wwnorton/platform/design-system/commit/8023ef99681a6f99f12094f3bfd904ff477ee01d))
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
- **docs:** add @wwnds/core to docs for examples ([16052d2](https://gitlab.com/wwnorton/platform/design-system/commit/16052d285322f7243884b099ddd4f064e65f8b0b))
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
