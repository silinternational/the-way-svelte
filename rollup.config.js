import autoPreprocess from 'svelte-preprocess'
import commonjs from '@rollup/plugin-commonjs'
import dotenv from 'rollup-plugin-dotenv'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import json from '@rollup/plugin-json'
import livereload from 'rollup-plugin-livereload'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import { routify } from '@sveltech/routify'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH

export default {
	input: 'src/main.js',
	output: {
		file: `dist/bundle.${Date.now()}.js`, // cache bust
		format: 'iife',
		sourcemap: production,
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			emitCss: true, // give component style to postcss() for processing
			preprocess: autoPreprocess(),
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

		json(), // adds support for importing json files
		postcss({
			extract: true, // create a css file alongside the output.file
			sourceMap: production,
		}),
		routify({}),
		dotenv(),

		//           minify     auto-refresh browser on changes
		production ? terser() : livereload('dist'),

		// injects bundled assets into distributable index.html, needed to do this at build time for cache busting
		htmlTemplate({
      template: 'src/index.html',
		}),
	],
	watch: {
		clearScreen: false,
	}
}
