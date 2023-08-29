import './globals.scss';

export const parameters = {
	controls: { expanded: true },
};

export const argTypes = {
	// These are ReactNodes, but should be just text in stories to simplify entry
	children: { control: 'text' },
	label: { control: 'text' },
	description: { control: 'text' },
};
