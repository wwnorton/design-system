const babel = require('rollup-plugin-babel');
const { terser } = require('rollup-plugin-terser');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

const {
	banner,
	prod,
	js,
} = require('./tasks/config');

module.exports = [
	{
		input: js.src,
		plugins: [
			resolve(),
			commonjs(),
			babel({
				presets: [['airbnb', {
					modules: false,
					targets: { node: 8 },
				}]],
				runtimeHelpers: true,
			}),
			(prod) ? terser({
				output: {
					comments(node, { value, type }) {
						if (type === 'comment2') {
							return /copyright/i.test(value);
						}
						return false;
					},
				},
			}) : null,
		],
		output: [
			// Node.js build
			{
				file: js.dest,
				format: 'cjs',
				banner,
			},
		],
	},
];
