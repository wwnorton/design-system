import { isValidElement, ReactElement, ReactText } from 'react';

/** Generic no-operation function. */
export const noop = (): void => {};	// eslint-disable-line @typescript-eslint/no-empty-function

/** Find out if an object is an element and if it's a specific HTML element. */
export function isElement<Props>(
	el?: ReactText | Parameters<typeof isValidElement>[0],
	htmlType?: string,
): el is ReactElement<Props> {
	if (isValidElement<Props>(el)) {
		// it's an HTML element
		if (typeof el.type === 'string') {
			return (htmlType) ? el.type.toLowerCase() === htmlType.toLowerCase() : true;
		}
		return 'props' in el;
	}
	return false;
}
