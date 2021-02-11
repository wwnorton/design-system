export type SystemColors =
	| 'blue'
	| 'cyan'
	| 'gray'
	| 'green'
	| 'navy'
	| 'purple'
	| 'red'
	| 'teal'
	| 'yellow';

export type RoleColors =
	| 'primary'
	| 'base'
	| 'disabled'
	| 'error'
	| 'success'
	| 'warning';

export type AllColors = SystemColors | RoleColors;

export const ColorOptions: Record<string, AllColors> = {
	Blue: 'blue',
	Cyan: 'cyan',
	Gray: 'gray',
	Green: 'green',
	Navy: 'navy',
	Purple: 'purple',
	Red: 'red',
	Teal: 'teal',
	Yellow: 'yellow',
	Primary: 'primary',
	Base: 'base',
	Disabled: 'disabled',
	Error: 'error',
	Success: 'success',
	Warning: 'warning',
};
