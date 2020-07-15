import test from 'ava';
import {
	config, configure, reset, Config,
	prefix,
} from '../src';

test.afterEach(reset);

test('a custom namespace results in a custom prefix', (t) => {
	const namespace = 'foo';
	const prefixStr = 'bar';
	configure({ namespace });
	const className = prefix(prefixStr);
	t.true(className.startsWith(namespace));
	t.true(className.endsWith(prefixStr));
	t.is(config.namespace, namespace);
});

test('the default namespace is set', (t) => {
	t.is(config.namespace, Config.defaults.namespace);
});
