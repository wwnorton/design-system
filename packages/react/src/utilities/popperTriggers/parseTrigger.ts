/** Space-separated popper trigger tokens (e.g. `"focus-visible pointerenter"`). */
export function parsePopperTrigger(trigger: string): Set<string> {
	return new Set(trigger.trim().split(/\s+/).filter(Boolean));
}

export function hasPopperTrigger(trigger: string, token: string): boolean {
	return parsePopperTrigger(trigger).has(token);
}
