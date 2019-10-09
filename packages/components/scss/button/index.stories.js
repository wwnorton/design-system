import '../main.scss';

export default { title: 'Button' };

export const base = () => '<button class="button">Button</button>';

export const primary = () => '<button class="button button-primary">Button</button>';
export const primaryDisabled = () => '<button class="button button-primary" disabled>Button</button>';
export const primaryRounded = () => '<button class="button button-primary-rounded">Button</button>';

export const secondary = () => '<button class="button button-secondary">Button</button>';
export const secondaryDisabled = () => '<button class="button button-secondary" disabled>Button</button>';
export const secondaryRounded = () => '<button class="button button-secondary-rounded">Button</button>';

export const tertiary = () => '<button class="button button-tertiary">Button</button>';
export const tertiaryDisabled = () => '<button class="button button-tertiary" disabled>Button</button>';
export const tertiaryRounded = () => '<button class="button button-tertiary-rounded">Button</button>';

export const withIcon = () => `
	<button class="button button-primary button-icon">
		<span class="icon fas fa-hand-point-left" aria-hidden="true"></span>
		Button with icon
	</button>`;

export const withIconOnRight = () => `
	<button class="button button-primary button-icon-right">
		<span class="icon fas fa-hand-point-left" aria-hidden="true"></span>
		Button with icon on right
	</button>`;
