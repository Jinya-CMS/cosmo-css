const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const helpers = require('handlebars-helpers')();

module.exports = {
	mode: process.env.mode ?? 'development',
	resolve: {
		alias: {
			'@cosmo': path.join(__dirname),
			'@docs-css': path.join(__dirname, 'docs/css'),
			'@docs-js': path.join(__dirname, 'docs/js'),
			'@docs-icons': path.join(__dirname, 'docs/icons'),
			'@highlightjs': path.join(__dirname, 'node_modules/highlight.js')
		}
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		clean: true
	},
	plugins: [
		new HtmlBundlerPlugin({
			entry: 'docs/pages/',
			// use handlebars templating engine
			preprocessor: 'handlebars',
			// define handlebars options
			preprocessorOptions: {
				partials: ['docs/layouts'],
				helpers
			},
			js: {
				filename: 'js/[name].[contenthash:8].js'
			},
			css: {
				filename: 'css/[name].[contenthash:8].css'
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: ['css-loader', 'sass-loader']
			},
			{
				test: /\.(ico|png|jp?g|svg)/,
				type: 'asset/resource',
				generator: {
					filename: 'img/[name].[hash:8][ext]'
				}
			},
			{
				test: /\.(woff2)/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name].[hash:8][ext]'
				}
			}
		]
	},

	// enable live reload
	devServer: {
		static: path.resolve(__dirname, 'public'),
		allowedHosts: 'all',
		port: 3000,
		watchFiles: {
			paths: ['*.*'],
			options: {
				usePolling: true
			}
		}
	}
};
