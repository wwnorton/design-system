interface NDSConfig {
	namespace: string | null;
}

class Config implements NDSConfig {
	public namespace: NDSConfig['namespace'] = 'nds';

	public configure(config: Partial<NDSConfig>): this {
		if (config.namespace !== undefined) {
			this.namespace = config.namespace;
		}
		return this;
	}
}

export const config = new Config();
export const configure = config.configure.bind(config);
