interface NDSConfig {
	namespace: string | null;
}

export class Config implements NDSConfig {
	public namespace: NDSConfig['namespace'] = Config.defaults.namespace;

	public static defaults: Required<NDSConfig> = {
		namespace: 'nds',
	}

	public configure(config: Partial<NDSConfig>): this {
		if (config.namespace !== undefined) {
			this.namespace = config.namespace;
		}

		return this;
	}

	public reset(): void {
		Object.assign(this, Config.defaults);
	}
}

export const config = new Config();
export const configure = config.configure.bind(config);
export const reset = config.reset.bind(config);
