import test from 'ava';
import {
	config, configure, reset, Config, prefix,
} from '../src/config';

test('a custom namespace results in a custom prefix', (t) => {
	const namespace = 'foo';
	const prefixStr = 'bar';
	configure({ namespace });
	const className = prefix(prefixStr);
	t.true(className.startsWith(namespace));
	t.true(className.endsWith(prefixStr));
	t.is(config.namespace, namespace);
	reset();
});

test('the default namespace is set', (t) => {
	t.is(config.namespace, Config.defaults.namespace);
	reset();
});
