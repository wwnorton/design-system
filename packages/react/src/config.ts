import { createContext } from 'react';
import localForage from 'localforage';

export interface NDSConfig {
	/** The namespace is used to prefix default classNames. */
	namespace: string | null;
	/**
	 * The fallback color scheme. This will only be used if the following are true:
	 * 1. A `colorScheme` value is not found in the client storage.
	 * 2. The user's operating system doesn't expose a preferred color scheme.
	 *
	 * See [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
	 * for details about OS-preferred color schemes.
	 */
	colorScheme?: 'light' | 'dark';
}

export class Config implements NDSConfig {
	public static readonly defaults: Required<NDSConfig> = {
		namespace: 'nds',
		colorScheme: 'light',
	}

	public namespace: string | null = Config.defaults.namespace;
	public colorScheme: 'light' | 'dark' = Config.defaults.colorScheme;

	public constructor() {
		localForage.config({ name: this.namespace as string });
	}

	public prefix = (val: string, delimiter = '-'): string => {
		if (!this.namespace || val.startsWith(this.namespace + delimiter)) return val;
		return this.namespace + delimiter + val;
	}
}

// Global configuration
export const config = new Config();

export const { prefix } = config;

export const configure = (conf: NDSConfig): NDSConfig => Object.assign(config, conf);

export const reset = (): NDSConfig => Object.assign(config, Config.defaults);

export const NDSContext = createContext(config);
