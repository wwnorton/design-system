import React from 'react';
import {
	withKnobs,
	boolean,
	select,
	text,
} from '@storybook/addon-knobs';
import { Tag } from '.';
import { Icon } from '../Icon';
import { Link } from '../Link';
import { ColorOptions } from '../../utilities/color';

export default {
	title: 'Tag',
	component: Tag,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => (
	<Tag
		dismissible={boolean('dismissible', false)}
		color={select('Color', { None: undefined, ...ColorOptions }, undefined)}
	>
		{text('Label', 'Tag Label')}
	</Tag>
);

export const MultipleTags: React.FunctionComponent = () => {
	const [isRenderedTag, setIsRenderedTag] = React.useState(true);

	const dismiss = () => {
		setIsRenderedTag(false);
	};

	return (
		<div style={{ display: 'flex', gap: 4 }}>
			<Tag color="blue">
				Default Tag
			</Tag>
			<Tag color="green">
				<Icon variant="download" />
				With Icon
			</Tag>
			{ 	isRenderedTag
				? (<Tag dismissible color="red" onDismiss={dismiss}>Dismissible</Tag>)
				: null }
		</div>
	);
};

export const WithLink: React.FunctionComponent = () => {
	const isAnchor = boolean('Use HTML link', false);
	return (
		<Tag dismissible={boolean('dismissible', false)}>
			{
				(isAnchor)
					? (
						<a href="https://github.com/wwnorton/design-system">
							Norton Design System GitHub
						</a>
					)
					: (
						<Link href="https://github.com/wwnorton/design-system" external>
							Norton Design System GitHub
						</Link>
					)
			}
		</Tag>
	);
};
