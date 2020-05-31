import React from 'react';
import { idGen } from '@nds/react/utilities/helpers';
import { BasePopper, BasePopperProps } from '../BasePopper';

export type TooltipAnatomy = 'portal' | 'container' | 'arrow';

export interface TooltipProps extends BasePopperProps {
	/** The text content for the tooltip. */
	content: React.ReactText;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/**
	 * Set the popper content as the primary description
	 * for the reference node using `aria-labelledby`.
	 * */
	isLabel?: boolean;
}

export class Tooltip extends React.Component<TooltipProps> {
	public static bemBase = 'tooltip';
	public static bemElements: Record<TooltipAnatomy, string> = {
		portal: 'portal',
		container: 'container',
		arrow: 'arrow',
	}

	static defaultProps = {
		baseName: Tooltip.bemBase,
		placement: 'top',
		isLabel: false,
		arrow: true,
		role: 'tooltip',
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 8],
				},
			},
		],
	}

	private getId: ReturnType<typeof idGen>;
	private popperId: string;

	constructor(props: TooltipProps) {
		super(props);
		const { id } = props;
		this.getId = idGen(props, `${Tooltip.bemBase}-`);
		this.popperId = id || this.getId(`-${Tooltip.bemElements.container}`);
	}

	componentDidMount(): void {
		const { reference, isLabel } = this.props;
		const { current } = reference;
		const ariaAttribute = isLabel ? 'aria-labelledby' : 'aria-describedby';
		if (current && current instanceof Element) {
			current.setAttribute(ariaAttribute, this.popperId);
		}
	}

	render(): React.ReactElement {
		const {
			content,
			baseName,
			popperRef,
			arrowClass = `${baseName}__${Tooltip.bemElements.arrow}`,
			portalClass = `${baseName}__${Tooltip.bemElements.portal}`,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			isLabel,
			...props
		} = this.props;
		return (
			<BasePopper
				id={this.popperId}
				className={baseName}
				portalClass={portalClass}
				arrowClass={arrowClass}
				ref={popperRef}
				{...props}
			>
				{ content }
			</BasePopper>
		);
	}
}
