/**
 * Merge a list of classes into one space-separated class string, removing any
 * duplicate classes and extraneous spaces in the process.
 */
export const mergeClasses = (
	/** The list of classes to be merged. */
	...classes: (string | null | undefined)[]
): string => Array.from(
	/*
	 * all values will be strings after filtering via the Boolean constructor,
	 * so allow the non-null assertion here.
	 */
	/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
	new Set(classes.filter(Boolean).map((c) => c!.trim())),
).join(' ');

// temporary to suppress import/prefer-default-export
export const foo = (): void => {};
