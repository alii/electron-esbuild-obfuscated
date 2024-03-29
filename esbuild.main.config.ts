import path from 'path';

/**
 * @var {Partial<import('esbuild').BuildOptions>}
 */
module.exports = {
	platform: 'node',
	entryPoints: [path.resolve('src/main/main.ts')],
	bundle: true,
	target: 'node14.16.0',
	loader: {
		'.ts': 'ts',
	},
};
