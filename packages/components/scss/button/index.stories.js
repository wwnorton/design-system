import './_button.scss';

export default { title: 'Button' };

export const base = () => '<button class="btn">Button</button>';

export const primary = () => '<button class="btn-primary">Button</button>';
export const primaryDisabled = () => '<button class="btn-primary-disabled">Button</button>';
export const primaryRounded = () => '<button class="btn-primary-rounded">Button</button>';

export const secondary = () => '<button class="btn-secondary">Button</button>';
export const secondaryDisabled = () => '<button class="btn-secondary-disabled">Button</button>';
export const secondaryRounded = () => '<button class="btn-secondary-rounded">Button</button>';

export const tertiary = () => '<button class="btn-tertiary">Button</button>';
export const tertiaryDisabled = () => '<button class="btn-tertiary-disabled">Button</button>';
export const tertiaryRounded = () => '<button class="btn-tertiary-rounded">Button</button>';

export const withIcon = () => `
	<button class="btn-icon">
		<span class="icon fas fa-hand-point-left" aria-hidden="true"></span>
		Button with icon
	</button>`;

export const withIconOnRight = () => `
	<button class="btn-icon-right">
		<span class="icon fas fa-hand-point-left" aria-hidden="true"></span>
		Button with icon on right
	</button>`;
