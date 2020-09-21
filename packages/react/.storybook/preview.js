import './globals.scss';

export const parameters = {
	controls: { expanded: true },
};

const focusVisible = document.createElement('script');
focusVisible.setAttribute('src', 'https://unpkg.com/focus-visible');
document.head.appendChild(focusVisible);
