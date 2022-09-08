import React from 'react';
import { FieldInfo, FieldInfoProps } from '.';

export default {
	title: 'FieldInfo',
	component: FieldInfo,
};

export const Info = (args: FieldInfoProps) => <FieldInfo {...args} />;
Info.args = {
	label: 'Field label',
	description: 'Additional information about this field',
	indicator: 'required',
};
