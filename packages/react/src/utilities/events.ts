/* eslint-disable @typescript-eslint/no-empty-function */
/** Generic no-operation function. */
export const noop = (): void => {};

export const isElement = (el?: string | JSX.Element, htmlType?: string): boolean => {
	if (typeof el !== 'object') return false;
	if ('type' in el) {
		// it's an HTML element
		if (typeof el.type === 'string') {
			return (htmlType) ? el.type.toLowerCase() === htmlType.toLowerCase() : true;
		}
		return 'props' in el;
	}
	return false;
};
