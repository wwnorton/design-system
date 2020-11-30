import { Options } from '@popperjs/core';

export { Placement, Modifier, VirtualElement } from '@popperjs/core';

export interface PopperOptions {
	/** The [Popper.js placement option](https://popper.js.org/docs/v2/constructors/#placement). */
	placement: Options['placement'];
	/** The [Popper.js modifiers option](https://popper.js.org/docs/v2/constructors/#modifiers). */
	modifiers: Options['modifiers'];
	/** The [Popper.js strategy option](https://popper.js.org/docs/v2/constructors/#strategy). */
	strategy: Options['strategy'];
	/** The [Popper.js onFirstUpdate option](https://popper.js.org/docs/v2/constructors/#onFirstUpdate). */
	onFirstUpdate?: Options['onFirstUpdate'];
}
