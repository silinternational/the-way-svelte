import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH

export default {
	input: 'src/main.js',
	output: {
		file: 'public/build/bundle.js',
		format: 'iife',
		sourcemap: true,
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			css: css => css.write('public/build/bundle.css'), // exclude component css from bundle.js
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte'],
		}),
		commonjs(),

		//           minify     auto-refresh browser on changes
		production ? terser() : livereload('public'),
	],
	watch: {
		clearScreen: false
	}
}
