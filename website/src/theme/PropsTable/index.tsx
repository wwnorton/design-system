import React from 'react';
import { FieldInfo } from '@wwnds/react';
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentDoc, PropItem } from 'react-docgen-typescript';
import Markdown from 'markdown-to-jsx';

const PropRow = ({
	name,
	required,
	type,
	description,
	// defaultValue,
}: PropItem): JSX.Element => (
	<tr>
		<td><FieldInfo indicator={(required) ? 'required' : undefined} label={name} /></td>
		<td><Markdown>{ description }</Markdown></td>
		<td><code>{ type.name.replace(' | undefined', '') }</code></td>
		{/* <td>
			{ (defaultValue && <code>{ defaultValue.value }</code>) || '-' }
		</td> */}
	</tr>
);

type PropsTableProps = {
	from: typeof React.Component & { __docgenInfo: ComponentDoc; };
};

export const PropsTable = ({ from: component }: PropsTableProps): JSX.Element | null => {
	if (!('__docgenInfo' in component)) return null;
	// eslint-disable-next-line no-underscore-dangle
	const { displayName, props } = component.__docgenInfo;
	const propMap = Object.keys(props).map((prop) => {
		const propItem = props[prop];
		/* eslint-disable-next-line react/jsx-props-no-spreading */
		return <PropRow key={propItem.name} {...propItem} />;
	});
	return (
		<table aria-label={`Props for ${displayName}`}>
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Type</th>
					{/* <th>Default Value</th> */}
				</tr>
			</thead>
			<tbody>{ propMap }</tbody>
		</table>
	);
};
