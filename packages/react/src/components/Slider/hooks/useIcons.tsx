import { SliderProps } from '../types';
import { useIcon } from '../../../utilities/icon/useIcon';

export type UseIconsInput = Pick<SliderProps, 'iconLeft' | 'iconRight' | 'orientation'> & {
	css: {
		iconLeft: string;
		iconRight: string;
	};
};
export type UseIconsOutput = {
	LeftIconElement: React.ReactNode;
	RightIconElement: React.ReactNode;
};

export function useIcons({ iconLeft, iconRight, orientation, css }: UseIconsInput): UseIconsOutput {
	let LeftIconElement = useIcon({ icon: iconLeft, iconClass: css.iconLeft });
	let RightIconElement = useIcon({ icon: iconRight, iconClass: css.iconRight });
	if (orientation === 'vertical') {
		const aux = LeftIconElement;
		LeftIconElement = RightIconElement;
		RightIconElement = aux;
	}
	return {
		LeftIconElement,
		RightIconElement,
	};
}
