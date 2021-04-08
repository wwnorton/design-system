/** A helper property that will be `false` in server-side renders. */
export const canUseDOM = !!(
	typeof window !== 'undefined'
	&& typeof window.document !== 'undefined'
	&& typeof window.document.createElement !== 'undefined'
);
