import prettier from 'prettier';
import { render, RenderOptions } from '@testing-library/react';

export const prettierNode = (el: HTMLElement): string => prettier.format(el.outerHTML, {
	parser: 'babel',
});

type RenderUI = Parameters<typeof render>[0];

const customRender = (ui: RenderUI, opts?: RenderOptions): ReturnType<typeof render> => {
	const r = render(ui, opts);
	r.toString = (node?: HTMLElement): string => prettierNode(node || r.container);
	return r;
};

export * from '@testing-library/react';
export { customRender as render };
