/**
 * Converts a Set to an array.
 * This is needed because `microbundle` is compiling the spread operator
 * in a way it's not compatible with the `Set` type.
 * Migration to other bundler is on the way.
 *
 * @param set - The Set to convert.
 * @returns The array.
 */
export function setToArray<T>(set: Set<T>): T[] {
	const result: T[] = [];
	set.forEach((value) => {
		result.push(value);
	});

	return result;
}
