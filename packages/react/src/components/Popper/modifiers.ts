import { Modifier, Obj } from '@popperjs/core';
import { Options as ArrowOptions } from '@popperjs/core/lib/modifiers/arrow';
import { Options as FlipOptions } from '@popperjs/core/lib/modifiers/flip';
import { Options as OffsetOptions } from '@popperjs/core/lib/modifiers/offset';
import { Options as PreventOverflowOptions } from '@popperjs/core/lib/modifiers/preventOverflow';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createModifier = <O extends Obj = Record<string, Record<string, any>>, N = string>(
	name: N,
): Partial<Modifier<N, O>> => ({
	name,
	enabled: false,
	options: {},
});

export const arrowMod = createModifier<ArrowOptions>('arrow');
export const flipMod = createModifier<FlipOptions>('flip');
export const offsetMod = createModifier<OffsetOptions>('offset');
export const preventOverflowMod = createModifier<PreventOverflowOptions>('preventOverflow');

export const matchWidthMod: Modifier<'matchWidth', Record<string, unknown>> = {
	name: 'matchWidth',
	enabled: false,
	phase: 'beforeWrite',
	requires: ['computeStyles'],
	/* eslint-disable no-param-reassign */
	fn: ({ state }) => {
		state.styles.popper.width = `${state.rects.reference.width}px`;
	},
	effect: ({ state }) => (): void => {
		state.elements.popper.style.width = `${(state.elements.reference as HTMLElement).offsetWidth}px`;
	},
	/* eslint-enable no-param-reassign */
};
